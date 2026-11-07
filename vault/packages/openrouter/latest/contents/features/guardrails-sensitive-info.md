> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Sensitive Info Guardrail

> Automatically detect and handle sensitive information in API requests

The Sensitive Info Guardrail lets you automatically detect and handle sensitive information — such as email addresses, phone numbers, credit card numbers, and names — before requests reach the model provider. You can choose to **redact** (replace with a placeholder) or **block** (reject the request entirely) when sensitive data is detected.

This feature is part of [Guardrails](https://openrouter.ai/docs/guides/features/guardrails.md) and can be configured alongside budget limits, model restrictions, and other guardrail settings.

## How It Works

When a Sensitive Info Guardrail is active, every API request is scanned before it is forwarded to the model provider:

1. **Detection** — The request content is checked against your configured patterns and presets.
2. **Action** — If a match is found, the configured action is applied:
   * **Redact**: The matched text is replaced with a labeled placeholder (e.g., `[EMAIL]`, `[PHONE]`, `[REDACTED]`) and the modified request is forwarded to the provider.
   * **Block**: The entire request is rejected with an HTTP `403 Forbidden` error.
3. **Forwarding** — If no sensitive info is detected (or all matches were redacted), the request proceeds to the model provider as normal.

> [!NOTE]
>
> Sensitive info detection runs on the **input** (prompt) side of requests. It scans message content, tool call arguments, and prompt strings. It does not scan model responses.

## Detection Methods

OpenRouter uses two complementary detection methods:

### Regex-Based Detection

Most built-in presets and all custom patterns use regular expression matching. This is fast, deterministic, and adds negligible latency to requests.

Regex-based presets include:

* Email addresses
* Phone numbers
* Social Security numbers (SSNs)
* Credit card numbers
* IP addresses
* Provider-prefixed API keys and secrets

### NLP-Based Detection

Some types of sensitive information — like person names and geographic locations — cannot be reliably detected with simple patterns. For these, OpenRouter uses NLP-powered entity recognition (via [Presidio](https://microsoft.github.io/presidio/)), which analyzes text contextually. When a geographic location is recognized, address redaction extends over the adjoining street line.

NLP-based presets include:

* Person names *(beta)*
* Geographic locations and anchored street addresses *(beta)*

> [!WARNING]
>
> The "Person Name" and "Address" presets are currently in **beta**. Detection accuracy may vary — especially for uncommon name formats and partial or non-standard addresses. If the check times out, the request proceeds (not blocked). We're actively improving these models.
>
> NLP-based detection also adds latency proportional to the size of the input text. These presets are marked with an **Adds latency** label in the dashboard.

## Built-In Presets

The following presets are available out of the box. Each can be individually enabled and configured with either the **Redact** or **Block** action.

| Preset | Detection Method | Redaction Label | Example Matches |
| - | - | - | - |
| Email address | Regex | `[EMAIL]` | `user@example.com`, `name+tag@domain.co` |
| Phone number | Regex | `[PHONE]` | `914-309-4996`, `914.309.4996`, `9143094996` |
| Social Security number | Regex | `[SSN]` | `123-45-6789` |
| Credit card number | Regex | `[CREDIT_CARD]` | `4265 5256 0839 8752`, `4265-5256-0839-8752` |
| IP address | Regex | `[IP_ADDRESS]` | `192.168.0.1`, `10.0.0.1` |
| API keys and secrets | Regex | `[SECRET:<format-id>]` | `sk-or-v1-...`, `ghp_...`, `pypi-...` |
| Person name *(beta)* | NLP | `[PERSON_NAME]` | `John Smith`, `Dr. Sarah Johnson`, `Maria Garcia-Lopez` |
| Address *(beta)* | NLP | `[ADDRESS]` | `123 Main Street, Springfield`, `London, United Kingdom` |

### Secrets Preset

The **Secrets** preset detects well-known provider-prefixed API keys and credential formats with low false-positive rates. By default, matches are redacted as `[SECRET:<format-id>]`, such as `[SECRET:github-token]`. A custom label replaces the whole label verbatim without a format suffix. See the [complete list of detected secret formats](https://openrouter.ai/docs/guides/features/guardrails/secret-formats.md).

### NLP Preset Limitations

NLP-based detection is contextual and probabilistic. Keep the following in mind:

**Person Name**:

* May not catch names without surrounding context
* Uncommon or non-Western names may be missed
* Single-word names (e.g., "Cher") are harder to detect

**Address**:

* A street address without a recognizable city, state, or locality anchor may not be detected at all
* Ambiguous location names (e.g., "Paris" as a name vs. a city) depend on context
* Non-standard or abbreviated formats may not be detected

## Custom Patterns

In addition to built-in presets, you can define your own custom regex patterns to detect domain-specific sensitive information. Each custom pattern requires:

* **Pattern** — A valid [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
* **Action** — Either `redact` or `block`

When a custom pattern matches with the **Redact** action, the matched text is replaced with `[REDACTED]`. When set to **Block**, the entire request is rejected.

### Example Custom Patterns

| Use Case | Pattern | Action |
| - | - | - |
| Internal project codes | `PROJ-\d{4,6}` | Redact |
| AWS access keys | `AKIA[0-9A-Z]{16}` | Block |
| Internal URLs | `https?://internal\.company\.com\S*` | Redact |

### Pattern Safety

Patterns are validated for:

1. **Syntax** — Must be a valid JavaScript regular expression.
2. **Safety** — Must not be vulnerable to catastrophic backtracking ([ReDoS](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS)). Patterns with nested quantifiers like `(a+)+` or `(a|a)*` are rejected.

Invalid or unsafe patterns are rejected at creation time with a descriptive error message.

## Configuring Sensitive Info Guardrails

### Via the Dashboard

1. Navigate to your workspace's **Guardrails** page (for the default workspace, [Workspaces > Default > Guardrails](https://openrouter.ai/workspaces/default/guardrails)).
2. Create a new guardrail or edit an existing one.
3. Expand the **Sensitive Info** section.
4. Enable the desired built-in presets and/or add custom patterns.
5. For each preset or pattern, choose the action: **Redact** or **Block**.
6. Save the guardrail.

You can use the **Enable all** / **Disable all** buttons to quickly toggle all built-in presets.

### Via the API

Sensitive info filters are configured as part of the guardrail object using the `content_filter_builtins` and `content_filters` fields.

**Built-in presets** use the `content_filter_builtins` field:

```json lines theme={null}
{
  "name": "PII Protection",
  "content_filter_builtins": [
    { "slug": "email", "action": "redact" },
    { "slug": "phone", "action": "redact" },
    { "slug": "ssn", "action": "block" },
    { "slug": "credit-card", "action": "block" },
    { "slug": "ip-address", "action": "redact" },
    { "slug": "secrets", "action": "redact" },
    { "slug": "person-name", "action": "redact" },
    { "slug": "address", "action": "redact" }
  ]
}
```

Available slugs: `email`, `phone`, `ssn`, `credit-card`, `ip-address`, `secrets`, `person-name`, `address`.

**Custom patterns** use the `content_filters` field:

```json lines theme={null}
{
  "name": "Custom Filters",
  "content_filters": [
    { "pattern": "AKIA[0-9A-Z]{16}", "action": "block", "label": "AWS Key" },
    { "pattern": "PROJ-\\d{4,6}", "action": "redact" }
  ]
}
```

Each custom filter supports an optional `label` field for descriptive error messages when blocking.

See the [Guardrails API reference](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails.md) for full endpoint documentation.

## How Sensitive Info Interacts with Other Guardrails

Sensitive info filters follow the same [guardrail hierarchy](https://openrouter.ai/docs/guides/features/guardrails.md#guardrail-hierarchy) as other guardrail settings. When multiple guardrails apply to a request:

* **Content filters are unioned** — If a member guardrail has an email filter and an API key guardrail has a phone filter, both filters apply.
* **Block wins over redact** — If the same entity type appears in multiple guardrails with different actions, the stricter action (block) takes precedence.
* **Custom and built-in filters combine** — Filters from all applicable guardrails (default, member, and API key level) are merged together.

## Error Responses

When a request is blocked by a content filter, the API returns:

```json lines theme={null}
{
  "error": {
    "code": 403,
    "message": "Request blocked by content filter: [LABEL]"
  }
}
```

The `[LABEL]` in the error message depends on what triggered the block:

* For built-in presets: the preset label (e.g., `Email address`, `Social Security number`)
* For custom patterns with a `label` field: the custom label
* For custom patterns without a label: `[BLOCKED]`
* For NLP-detected entities: the entity type (e.g., `Blocked PII detected: PERSON`)

## Reporting False Positives

If a detection incorrectly flags legitimate content, you can mark it as a false positive from the [Logs](https://openrouter.ai/logs) page. Generations with a guardrail event show a shield icon on the row; hover it to open the guardrail popover.

When a single entity type was detected, click **Mark as false positive** directly in the popover:

![Guardrail popover with a Mark as false positive button for a single detected sensitive info entity type](https://mintcdn.com/openrouter-d02e98a0/kf2RyfW5eaywzU9V/assets/guides/features/guardrails/false-positives/fp-popover-single-pattern-sensitive-info.png?fit=max\&auto=format\&n=kf2RyfW5eaywzU9V\&q=85\&s=1281f2987439df953b556c316c02c40e)

When multiple entity types were detected, the popover instead links to the generation detail view, where you can select the specific entity types to report:

![Guardrail popover linking to Review entity types in detail for a multi-entity sensitive info detection](https://mintcdn.com/openrouter-d02e98a0/kf2RyfW5eaywzU9V/assets/guides/features/guardrails/false-positives/fp-popover-multi-pattern-sensitive-info.png?fit=max\&auto=format\&n=kf2RyfW5eaywzU9V\&q=85\&s=6a96f41e68584a161c76924b611ffc6c)

In the detail view, check the entity types that were flagged incorrectly under **Mark as false positive**, then click **Submit**:

![Generation detail view with per-entity Mark as false positive checkboxes for a sensitive info detection](https://mintcdn.com/openrouter-d02e98a0/kf2RyfW5eaywzU9V/assets/guides/features/guardrails/false-positives/fp-detail-view-multi-pattern-sensitive-info.png?fit=max\&auto=format\&n=kf2RyfW5eaywzU9V\&q=85\&s=81f3776824fa91d35dc83bcf43c1d20b)

The event is visually marked and your feedback is recorded for future detection improvements.

> [!NOTE]
>
> Marking a detection as false positive does not retroactively unblock the request. If the action was **block**, the original request was already rejected.

## Best Practices

* **Start with Redact** — Use **Redact** as the default action when getting started. This lets requests proceed while protecting sensitive data, giving you time to evaluate detection accuracy before switching to **Block**.

* **Use built-in presets for common PII** — The built-in presets are tuned for common formats and are the easiest way to get started. Add custom patterns for domain-specific data.

* **Be aware of NLP latency** — The **Person Name** and **Address** presets use NLP-based detection, which adds latency proportional to input size. If latency is critical, consider using only regex-based presets.

* **Test before deploying** — Use the Test Preview in the guardrail editor to verify your filters work as expected before saving and assigning the guardrail. If a detection misfires, you can [report false positives](#reporting-false-positives) from the Logs page.

* **Combine with other guardrail settings** — Sensitive info filters work alongside budget limits, model allowlists, provider restrictions, and ZDR enforcement. Use them together for comprehensive governance.

* **Use labels on custom block patterns** — Adding a `label` to custom patterns that use the **Block** action provides clearer error messages to API consumers, making it easier to understand why a request was rejected.
