> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# API Versioning

> How the OpenRouter API is versioned, what we consider a breaking change, and how deprecations are communicated.

## Current version

The OpenRouter API has a single stable version, `v1`, selected by the URL path:

```
https://openrouter.ai/api/v1
```

There are no version headers and no date-based version pinning. All endpoints documented in the [API Reference](https://openrouter.ai/docs/api_reference/overview.md) are part of `v1`.

## How the API evolves

The API changes continuously rather than in numbered releases. Every change is reflected in the [OpenAPI specification](https://openrouter.ai/docs/api_reference/overview.md), and every release that changes the specification produces an entry in the [API Changelog](https://openrouter.ai/docs/changelog.md).

**Non-breaking changes ship without prior notice.** These include:

* New endpoints
* New optional request parameters
* New fields in responses
* New response status codes
* New schemas, and new optional properties or union variants on existing schemas

Write clients defensively: ignore response fields you don't recognize, and don't fail on unknown enum values.

**Breaking changes are reviewed by a human before publication** and appear in the changelog under the **Breaking** tag with migration notes. These include:

* Removing or renaming an endpoint, parameter, or response field
* Changing a field's type
* Widening a response field to allow `null` when it was previously always present
* Making an optional parameter required

## Nullable response fields

A response field that is present but `null` means the value is genuinely absent. Read `null` as "not set" and handle it explicitly. Do not substitute a default, and do not assume `null` implies any particular fallback value.

For example, `workspace_id` is `null` on a BYOK credential that is not scoped to any workspace (it applies account-wide), and on a guardrail created before workspace scoping existed. In both cases `null` is a distinct state from being scoped to your default workspace. Do not read `null` as the default, and do not assume a `null` guardrail applies to every workspace.

Because a client that assumed the field was always present can break, widening a response field to allow `null` is treated as a breaking change (see the list above) and is announced in the changelog with migration notes.

## Deprecations

When part of the API is deprecated, the deprecation is announced in the [API Changelog](https://openrouter.ai/docs/changelog.md) and the affected endpoint or field is marked as deprecated in the API Reference. Removal of a deprecated feature is a breaking change and follows the breaking-change process above.

Model availability is separate from API versioning: models are added and removed by providers independently. See [Models](https://openrouter.ai/docs/guides/overview/models.md) for how to list currently available models.

## Staying up to date

* Watch the [API Changelog](https://openrouter.ai/docs/changelog.md), which is generated automatically from OpenAPI specification diffs on every release
* Subscribe to the [RSS feed](https://openrouter.ai/docs/changelog/rss.xml) for changelog entries
* Filter changelog entries by the **Breaking** tag to review only compatibility-affecting changes
