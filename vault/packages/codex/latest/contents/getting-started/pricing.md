# Pricing

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

**ChatGPT Work and Codex share usage.** ChatGPT Work usage inside
  ChatGPT uses the same pricing, credits, and usage limits as Codex.

GPT-5.5 retires from Codex with ChatGPT sign-in on October 14, 2026, at noon
PDT (19:00 UTC). The OpenAI API and Codex sessions authenticated with an API
key aren't affected. See [GPT-5.5 retirement](https://learn.chatgpt.com/docs/models#gpt-55-retirement)
for migration guidance.

See [token rates](#token-rates) for credit-based plans and
[GPT-6.1 Sol model guidance](https://learn.chatgpt.com/docs/models#gpt-61-sol) for model details.
API token prices are separate from subscription usage; don't use them to
estimate included tasks.

<h2 class="sr-only">Pricing options</h2>

<ContentSwitcher
  id="codex-pricing-plans"
  initialValue="individual"
  options={[
    {
      label: "Individual",
      value: "individual",
    },
    {
      label: "Business / Enterprise",
      value: "business-enterprise",
    },
  ]}
>
  

    

      <PricingCard
        name="Free"
        subtitle="Explore Codex capabilities on quick coding tasks."
        price="$0"
        interval="/month"
        ctaLabel="Get Free"
        ctaHref="https://chatgpt.com/plans/free/"
      >
        - GPT-6 Luna at Standard speed in the desktop app, subject to rollout
      </PricingCard>
      <PricingCard
        name="Go"
        subtitle="Use Codex for lightweight coding tasks."
        price="$8"
        interval="/month"
        ctaLabel="Get Go"
        ctaHref="https://chatgpt.com/plans/go"
      >
        - GPT-6 Luna at Standard speed in the desktop app, subject to rollout
      </PricingCard>
      <PricingCard
        name="Plus"
        subtitle="Power a few focused coding sessions each week."
        price="$20"
        interval="/month"
        ctaLabel="Get Plus"
        ctaHref="https://chatgpt.com/explore/plus?utm_internal_source=openai_developers_codex"
      >

        - Codex on the web, in the CLI, in the IDE extension, and on iOS
        - Cloud-based integrations like automatic code review and Slack
          integration
        - GPT-6.1 Sol and GPT-6 Luna
        - Flexibly extend usage with [ChatGPT credits](#credits-overview)
        - Other [ChatGPT features](https://chatgpt.com/pricing) as part of the
          Plus plan

      </PricingCard>
      <PricingCard
        name="Pro"
        subtitle="Choose the Pro plan that fits your usage."
        priceEyebrow="From"
        price="$100"
        interval="/month"
        ctaLabel="Get Pro"
        ctaHref="https://chatgpt.com/explore/pro?utm_internal_source=openai_developers_codex"
        highlight="Everything in Plus and:"
        footnoteLabel="Compare Pro plans and usage limits."
        footnoteHref="https://help.openai.com/en/articles/9793128-about-chatgpt-pro-plans"
      >

        - Plans at $100, $200, or $500 USD per month
        - [Ultrafast mode](https://learn.chatgpt.com/docs/agent-configuration/speed#ultrafast-mode)
          access on Pro $500
        - Other [ChatGPT features](https://chatgpt.com/pricing) as part of the
          Pro plan

      </PricingCard>
      <PricingCard
        name="API Key"
        subtitle="Great for automation in shared environments like CI."
        price=""
        interval=""
        ctaLabel="Learn more"
        ctaHref="/codex/auth"
        highlight=""
      >

        - Codex in the CLI, SDK, or IDE extension
        - No cloud-based features (GitHub code review, Slack, etc.)
        - Model availability follows the API models available to your key
        - Pay for Codex usage based on [API pricing](https://developers.openai.com/api/docs/pricing)

      </PricingCard>
    


  


  

    

      <PricingCard
        name="Business"
        subtitle="Bring Codex into your startup or growing business."
        price="$20"
        interval="/ user / month*"
        ctaLabel="Get Business"
        ctaHref="https://chatgpt.com/team-sign-up"
        footnoteLabel="*2+ users, billed annually. $25 per user per month when billed monthly."
      >

        - Access ChatGPT and Codex across desktop and mobile apps
        - Larger virtual machines to run cloud chats faster
        - Flexibly extend usage with [ChatGPT credits](#credits-overview)
        - A secure, dedicated workspace with essential admin controls, SAML SSO,
          and MFA
        - No training on your business data by default. [Learn
          more](https://openai.com/business-data/)
        - Other [ChatGPT features](https://chatgpt.com/pricing) as part of the
          Business plan

      </PricingCard>
      <PricingCard
        name="Enterprise & Edu"
        subtitle="Unlock Codex for your entire organization with enterprise-grade functionality."
        interval=""
        ctaLabel="Contact sales"
        ctaHref="https://chatgpt.com/contact-sales?utm_internal_source=openai_developers_codex"
        highlight="Everything in Business and:"
      >

        - Priority request processing
        - Enterprise-level security and controls, including SCIM, EKM, user
          analytics, domain verification, and role-based access control
          ([RBAC](https://help.openai.com/en/articles/11750701-rbac))
        - Audit logs and usage monitoring via the [Compliance
          API](https://chatgpt.com/public/admin/api-reference#tag/Codex%20Tasks)
        - Data retention and data residency controls
        - Other [ChatGPT features](https://chatgpt.com/pricing) as part of the
          Enterprise plan

      </PricingCard>
    


    

      <PricingCard
        class="codex-pricing-card--span-two"
        name="API Key"
        subtitle="Great for automation in shared environments like CI."
        price=""
        interval=""
        ctaLabel="Learn more"
        ctaHref="/codex/auth"
        highlight=""
      >

        - Codex in the CLI, SDK, or IDE extension
        - No cloud-based features (GitHub code review, Slack, etc.)
        - Model availability follows the API models available to your key
        - Pay for Codex usage based on [API pricing](https://developers.openai.com/api/docs/pricing)

      </PricingCard>
    


  

</ContentSwitcher>

## Invite friends and coworkers

Eligible users can send Codex invitations from the profile menu in the
lower-left corner of the app. Choose **Invite a friend** on an eligible personal
plan or **Invite a coworker** in an eligible Business workspace, enter the
recipient's email address, and send the invitation.

The invitation dialog shows the current reward, recipient requirements, invite
limits, and when rewards expire for your plan or promotion. Personal and
Business referral programs have separate rewards and eligibility rules.
Referrals aren't currently available for ChatGPT Enterprise.

Business referrals use separate shared-workspace credit rewards; review the
[current terms](https://help.openai.com/en/articles/20001271) before you send an
invitation.

## Frequently asked questions

### What are the usage limits for my plan?

The number of messages you can send depends on the model used, size and
complexity of your tasks, and whether you run them locally or in the cloud.
Small scripts or routine functions may consume only a fraction of your
allowance, while larger projects, long-running tasks, or extended sessions that
require the agent to hold more context will use significantly more per message.

Tasks that look similar can consume different amounts of your allowance. Model
choice, context, reasoning, tool use, retrieval, and caching all affect usage,
so prompt length alone isn't a reliable estimate.

For model recommendations, see [Models](https://learn.chatgpt.com/docs/models).




The estimates below show local messages per five-hour period for Plus and
Standard Business. Pro plans currently have no five-hour limit. Cloud tasks
may use more of your allowance than local messages. Usage depends on the model
and task. These estimates are not fixed message limits; check your
[usage dashboard](#where-can-i-see-my-current-usage-limits) for current limits
and reset times.




<TableWrapper class="w-full">
  <thead class="whitespace-nowrap">
    <tr>
      <th scope="col">Model</th>
      <th scope="col" style="text-align:center">
        Plus
      </th>
      <th scope="col" style="text-align:center">
        Standard Business
      </th>
    </tr>
  </thead>
  <tbody class="whitespace-nowrap">
    <tr>
      <td>GPT-6 Astra</td>
      <td style="text-align:center">5-45</td>
      <td style="text-align:center">5-45</td>
    </tr>
    <tr>
      <td>GPT-6.1 Sol</td>
      <td style="text-align:center">15-160</td>
      <td style="text-align:center">15-160</td>
    </tr>
    <tr>
      <td>GPT-6.1 Terra</td>
      <td style="text-align:center">35-285</td>
      <td style="text-align:center">35-285</td>
    </tr>
    <tr>
      <td>GPT-6 Sol</td>
      <td style="text-align:center">15-150</td>
      <td style="text-align:center">15-150</td>
    </tr>
    <tr>
      <td>GPT-6 Luna</td>
      <td style="text-align:center">350-3,000</td>
      <td style="text-align:center">350-3,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3" style="text-align:center">
        Local messages and cloud chats share your plan's usage allowance. Weekly
        limits may also apply.
      </td>
    </tr>
    <tr>
      <td colspan="3" style="text-align:center">
        Enterprise/Edu users with flexible pricing have no fixed rate limits.
        Usage scales with [credits](#credits-overview).
      </td>
    </tr>
    <tr>
      <td colspan="3" style="text-align:center">
        Enterprise and Edu plans without flexible pricing have the same per-seat
        usage limits as Plus for most features.
      </td>
    </tr>
  </tfoot>
</TableWrapper>

Usage limits are shared with other agentic features once pricing for those
features is effective. This currently includes [ChatGPT for
Excel](https://help.openai.com/articles/20001063) on Plus and Pro.

GPT-6.1 Sol usage drawn from your subscription has no long-context surcharge
in Codex or ChatGPT Work.

Fast and Ultrafast modes use included subscription limits and paid credits
at different rates, relative to Standard mode for the same model:

| Speed mode            | Included subscription usage | Purchased credits and Enterprise pay-as-you-go usage |
| --------------------- | --------------------------- | ---------------------------------------------------- |
| Fast                  | 2.5x                        | 2x                                                   |
| GPT-6 Astra Ultrafast | 8x                          | 6x                                                   |
| GPT-6.1 Sol Ultrafast | 8x                          | 6x                                                   |

Check your [usage dashboard](#where-can-i-see-my-current-usage-limits) for
current limits and reset times. See [Speed](https://learn.chatgpt.com/docs/agent-configuration/speed)
for supported models and how speed modes affect usage.

Image generations use included limits ~3-5x faster on average, depending on
image quality and size.

For Ultrafast mode eligibility and administrator controls,
see [Ultrafast mode](https://learn.chatgpt.com/docs/agent-configuration/speed#ultrafast-mode).

### How much does Sites cost?

[Sites](https://learn.chatgpt.com/docs/sites) is included with eligible ChatGPT plans during public
beta. Availability depends on your plan, region, and workspace settings.

### How much does Voice cost?

Voice in Desktop uses your existing Codex usage budget at $0.05 per
minute.

GPT-Live manages the live conversation. The model handling your task is billed
separately at its applicable token rates. Voice and tasks share your plan's usage
limits.

For Business, Edu, and Enterprise workspaces with credit-based billing, desktop
voice costs 1.25 credits per minute. This rate also applies when Plus and Pro
users spend additional credits. ChatGPT Voice in Desktop isn't available via API
key.

### What happens when you hit usage limits?

We want you to be able to complete work already in progress. If you reach your
usage limits during an active turn, the agent will be able to continue working
on that turn, subject to fair use limits.

ChatGPT Plus and Pro users who reach their usage limit can purchase additional
credits to continue working without needing to upgrade their existing plan.

Business, Edu, and Enterprise plans with [flexible
pricing](https://help.openai.com/en/articles/11487671-flexible-pricing-for-the-enterprise-edu-and-business-plans)
can purchase additional workspace credits to continue working.

All users may also run extra local chats using an API key, with usage charged at
[standard API rates](https://platform.openai.com/docs/pricing).

<a id="image-generation-usage-limits"></a>

### How does image generation count toward usage limits?

Image generation counts toward the same general usage limits as local
messages and cloud chats. Image generations use included limits 3-5x faster on
average than similar turns without image generation, depending on
image quality and size. After you reach your included limits, image generation
also draws from [credits](#credits-overview).

Image generation isn't available on the Free plan. When you use Codex with an
API key, API pricing applies to image generation instead of included ChatGPT
usage limits.

### Where can I see my current usage limits?

You can find your current limits in the [usage
dashboard](https://chatgpt.com/codex/settings/usage). If you want to see your
remaining limits during an active Codex CLI session, you can use `/status`.

Check the dashboard every week or two to understand your pace and remaining
capacity. If usage is higher than expected, consider whether a smaller model or
tighter task scope would still produce a useful result.

### What are tokens and credits?

Tokens are small units of information that ChatGPT reads and writes. Your
prompt, files, chat history, tool results, and ChatGPT's response all
use tokens.

Credits are the unit used to pay for eligible usage on credit-based plans.
After you reach your included limits, available credits let you continue
working. Credit purchase prices and applicable discounts depend on your plan
or agreement.

#### Token rates

The rates below are for Standard speed, quoted in credits per million input
tokens, cached input tokens, and output tokens. [Learn more about
tokens](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them).

Codex credit billing has no separate cache-write charge. API-key usage follows
[API pricing](https://developers.openai.com/api/docs/pricing).

GPT-5.6 Sol, Terra, and Luna rates remain unchanged. Credit prices alone don't determine
included subscription usage; check your
[usage dashboard](#where-can-i-see-my-current-usage-limits) for current limits.

A small subset of Enterprise customers should continue using the legacy rate
card until we migrate you to the new token-based pricing. For more information,
[contact OpenAI
sales](https://chatgpt.com/contact-sales?utm_internal_source=openai_developers_codex).



  <table>
    <thead>
      <tr>
        <th scope="col">Credits per 1M tokens</th>
        <th scope="col" style="text-align:center">
          Input Tokens
        </th>
        <th scope="col" style="text-align:center">
          Cached input tokens
        </th>
        <th scope="col" style="text-align:center">
          Output Tokens
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>GPT-6 Astra</td>
        <td style="text-align:center">250 credits</td>
        <td style="text-align:center">25 credits</td>
        <td style="text-align:center">1,250 credits</td>
      </tr>
      <tr>
        <td>GPT-6.1 Sol</td>
        <td style="text-align:center">50 credits</td>
        <td style="text-align:center">2.5 credits</td>
        <td style="text-align:center">250 credits</td>
      </tr>
      <tr>
        <td>GPT-6.1 Terra</td>
        <td style="text-align:center">25 credits</td>
        <td style="text-align:center">1.25 credits</td>
        <td style="text-align:center">125 credits</td>
      </tr>
      <tr>
        <td>GPT-6 Sol</td>
        <td style="text-align:center">50 credits</td>
        <td style="text-align:center">5 credits</td>
        <td style="text-align:center">250 credits</td>
      </tr>
      <tr>
        <td>GPT-6 Luna</td>
        <td style="text-align:center">2.5 credits</td>
        <td style="text-align:center">0.25 credits</td>
        <td style="text-align:center">12.5 credits</td>
      </tr>
      <tr>
        <td>GPT-5.6 Sol</td>
        <td style="text-align:center">100 credits</td>
        <td style="text-align:center">10 credits</td>
        <td style="text-align:center">500 credits</td>
      </tr>
      <tr>
        <td>Daybreak Blue</td>
        <td style="text-align:center">100 credits</td>
        <td style="text-align:center">10 credits</td>
        <td style="text-align:center">500 credits</td>
      </tr>
      <tr>
        <td>Daybreak Red</td>
        <td style="text-align:center">312.5 credits</td>
        <td style="text-align:center">31.25 credits</td>
        <td style="text-align:center">1875 credits</td>
      </tr>
      <tr>
        <td>GPT-5.6 Terra</td>
        <td style="text-align:center">50 credits</td>
        <td style="text-align:center">5 credits</td>
        <td style="text-align:center">300 credits</td>
      </tr>
      <tr>
        <td>GPT-5.6 Luna</td>
        <td style="text-align:center">5 credits</td>
        <td style="text-align:center">0.5 credits</td>
        <td style="text-align:center">30 credits</td>
      </tr>
      <tr>
        <td>GPT-Rosalind-Research</td>
        <td style="text-align:center">125 credits</td>
        <td style="text-align:center">12.5 credits</td>
        <td style="text-align:center">625 credits</td>
      </tr>
      <tr>
        <td>GPT-Image-2 (image)</td>
        <td style="text-align:center">200 credits</td>
        <td style="text-align:center">50 credits</td>
        <td style="text-align:center">750 credits</td>
      </tr>
      <tr>
        <td>GPT-Image-2 (text)</td>
        <td style="text-align:center">125 credits</td>
        <td style="text-align:center">31.25 credits</td>
        <td style="text-align:center">250 credits</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4" style="text-align:center">
          A typical GPT-5.6 Sol task may use 2-15 credits.
        </td>
      </tr>
      <tr>
        <td colspan="4" style="text-align:center">
          These are Standard credit rates. For purchased credits and Enterprise
          pay-as-you-go usage, Fast mode uses 2x the Standard rate where
          available, and Ultrafast mode uses 6x. Included subscription usage has
          different multipliers. See
          [Speed](https://learn.chatgpt.com/docs/agent-configuration/speed) for availability
          and billing details.
        </td>
      </tr>
      <tr>
        <td colspan="4" style="text-align:center">
          Daybreak access requires [Trusted Access for
          Cyber](https://learn.chatgpt.com/docs/cyber-safety#trusted-access-for-cyber) approval.
          Daybreak Blue uses GPT-5.6 Sol credit rates. Daybreak Red requires
          separate approval and provisioning.
        </td>
      </tr>
    </tfoot>
  </table>



_GPT-5.6 Sol’s promotional pricing is available at least through November 21, 2026._

[Learn more about credits in ChatGPT Plus and
Pro.](https://help.openai.com/en/articles/12642688)

[Learn more about credits in ChatGPT Business, Enterprise, and
Edu.](https://help.openai.com/en/articles/11487671-flexible-pricing-for-the-enterprise-edu-and-business-plans)

For Business and Enterprise/Edu credit billing, use the [credit-based rate card](https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing). If your Enterprise agreement specifies usage-based billing in USD, use the [Enterprise USD rate card](https://help.openai.com/en/articles/20001415-chatgpt-rate-card-enterprise-token-based-pricing) and your agreement instead. Workspace administrators can also review [ChatGPT Work usage and cost](https://learn.chatgpt.com/docs/enterprise/chatgpt-work-usage-and-cost#understand-tokens-and-credits).

### What counts as Code Review usage?

Code Review usage applies only when Codex runs reviews through GitHub, for
example, when you tag `@Codex` for review in a pull request or enable automatic
reviews on your repository. Reviews run locally or outside of GitHub count
toward your general usage limits.

### What can I do to make my usage limits last longer?

The local-message counts above are estimates; the token table lists credit
rates per million tokens. To make your usage allowance last longer, try these
tips:

- **Control the size of your prompts.** Be precise with the instructions you
  give the agent, but remove unnecessary context.
- **Limit source material.** Provide only relevant files and, when possible,
  narrow the sources or date range.
- **Match the output to the need.** Define the audience, format, and length, and
  separate required work from optional improvements.
- **Reduce the size of your AGENTS.md.** If you work on a larger project, you
  can control how much context you inject through AGENTS.md files by [nesting
  them within your repository](https://learn.chatgpt.com/docs/agent-configuration/agents-md#layer-project-instructions).
- **Limit the number of MCP servers you use.** Every
  [MCP](https://learn.chatgpt.com/docs/extend/mcp) server adds more context to your messages and uses
  more of your limit. Disable MCP servers when you don’t need them.

For guidance on choosing and scoping tasks, see [Use Work
efficiently](https://learn.chatgpt.com/docs/prompting#use-work-efficiently).

## Feature availability

In ChatGPT, GPT-6.1 Sol is available in Work and Codex, not Chat. For Enterprise
and Edu, the model is off by default until an administrator enables it. Using
it in ChatGPT Work or Codex also requires access to the respective surface.
API-key access follows API model availability.

[GPT-6.1 Terra](https://learn.chatgpt.com/docs/models?surface=app#app-gpt-61-terra) is available in Work and Codex on
Plus, Pro, Business, Enterprise, and Edu plans. It does not support
UAE inference residency. It isn't available in Chat. Access requires the corresponding
surface; Enterprise access also depends on workspace availability and
administrator controls. Overall Work and Codex plan limits are unchanged.

<CodexPlanFeatureMatrix
  data={{
    plans: [
      { id: "plus", shortLabel: "Plus", label: "ChatGPT Plus" },
      { id: "pro", shortLabel: "Pro", label: "ChatGPT Pro" },
      {
        id: "business",
        shortLabel: "Business",
        label: "ChatGPT Business",
      },
      {
        id: "enterprise",
        shortLabel: "Enterprise",
        label: "Enterprise / Education",
      },
      { id: "api", shortLabel: "API Key", label: "API Key" },
    ],
    sections: [
      {
        title: "Access and surfaces",
        features: [
          {
            name: "Codex cloud",
            href: "/codex/cloud",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "ChatGPT Work on the web",
            href: "/codex/get-started-with-work",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "ChatGPT desktop app for local chats",
            href: "/codex/app",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Codex CLI",
            href: "/codex/cli",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "IDE extension",
            href: "/codex/ide",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Codex SDK, `codex exec`, and scriptable workflows",
            shortName: "Codex SDK and scripting",
            href: "/codex/codex-sdk",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Codex access tokens for trusted automation",
            shortName: "Automation access tokens",
            href: "/codex/enterprise/access-tokens",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "ChatGPT for Excel",
            href: "https://help.openai.com/articles/20001063",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
        ],
      },
      {
        title: "Models and multimodal",
        features: [
          {
            name: "GPT-6.1 Sol",
            href: "/codex/models#gpt-61-sol",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "GPT-6.1 Terra",
            href: "/codex/models?surface=app#app-gpt-61-terra",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "GPT-6 Sol and Luna",
            href: "/codex/models",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Fast mode",
            href: "/codex/agent-configuration/speed",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Ultrafast (Pro $500 and eligible Enterprise/Edu plans)",
            href: "/codex/agent-configuration/speed#ultrafast-mode",
            availability: {
              plus: "unavailable",
              pro: "available",
              business: "unavailable",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Image generation and editing",
            href: "/codex/image-generation?surface=app",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Voice dictation",
            href: "/codex/prompting#use-voice-dictation",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "ChatGPT Voice",
            href: "/codex/features/voice",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Web search",
            href: "/codex/web-search?surface=app",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
        ],
      },
      {
        title: "Local features",
        features: [
          {
            name: "Composer predictions (beta)",
            href: "/codex/features/composer-predictions",
            availability: {
              plus: "unavailable",
              pro: "limited",
              business: "unavailable",
              enterprise: "unavailable",
              api: "unavailable",
            },
          },
          {
            name: "Local code review with `/review`",
            shortName: "Local code review",
            href: "/codex/prompting#do-a-local-code-review",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Auto-review for approval requests",
            href: "/codex/sandboxing/auto-review",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Sandboxing and permission controls",
            href: "/codex/permissions",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Project and standalone scheduled tasks",
            shortName: "Scheduled tasks",
            href: "/codex/automations",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Scheduled tasks",
            href: "/codex/automations",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Worktrees and built-in Git tools",
            shortName: "Built-in Git tools",
            href: "/codex/environments/git-worktrees",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Local environments and repeatable actions",
            shortName: "Repeatable actions",
            href: "/codex/environments/local-environment",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Appshots",
            href: "/codex/appshots",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "unavailable",
              api: "available",
            },
          },
        ],
      },
      {
        title: "Browser and remote control",
        features: [
          {
            name: "Built-in browser previews and comments",
            shortName: "Built-in browser",
            href: "/codex/browser?surface=app",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Computer Use in the browser",
            href: "/codex/browser?surface=app#app-computer-use-in-the-browser",
            availability: {
              plus: "limited",
              pro: "limited",
              business: "limited",
              enterprise: "limited",
              api: "limited",
            },
          },
          {
            name: "Use ChatGPT with Chrome",
            shortName: "Chrome browser control",
            href: "/codex/chrome-extension",
            availability: {
              plus: "limited",
              pro: "limited",
              business: "limited",
              enterprise: "limited",
              api: "limited",
            },
          },
          {
            name: "Computer Use",
            href: "/codex/computer-use",
            limitedFootnote: "region",
            availability: {
              plus: "limited",
              pro: "limited",
              business: "limited",
              enterprise: "limited",
              api: "limited",
            },
          },
          {
            name: "Record & Replay (macOS)",
            shortName: "Record & Replay",
            href: "/codex/extend/record-and-replay",
            limitedFootnote: "region",
            availability: {
              plus: "limited",
              pro: "limited",
              business: "limited",
              enterprise: "limited",
              api: "limited",
            },
          },
          {
            name: "SSH remote connections",
            shortName: "SSH remote",
            href: "/codex/remote-connections#connect-to-an-ssh-host",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Mobile remote control",
            href: "/codex/remote-connections",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Browser in ChatGPT Web",
            href: "/codex/browser?surface=web",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
        ],
      },
      {
        title: "Customization and extensions",
        features: [
          {
            name: "Custom instructions with `AGENTS.md`",
            shortName: "Custom instructions",
            href: "/codex/agent-configuration/agents-md",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Skills",
            href: "/codex/build-skills",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Plugins",
            href: "/codex/plugins",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "limited",
            },
            limitedFootnote: "plugins",
          },
          {
            name: "Plugin sharing",
            href: "https://developers.openai.com/plugins/build/plugins#share-a-local-plugin-with-your-workspace",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Connectors",
            href: "/codex/plugins",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "MCP",
            href: "/codex/extend/mcp",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Subagents and custom agents",
            shortName: "Subagents",
            href: "/codex/agent-configuration/subagents",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Memories",
            href: "/codex/customization/memories",
            availability: {
              plus: "limited",
              pro: "limited",
              business: "limited",
              enterprise: "limited",
              api: "limited",
            },
          },
          {
            name: "Computer History",
            href: "/codex/customization/computer-history",
            availability: {
              plus: "unavailable",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
        ],
      },
      {
        title: "Cloud and integrations",
        features: [
          {
            name: "Codex cloud chats",
            shortName: "Cloud chats",
            href: "/codex/cloud",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Cloud environments and setup scripts",
            shortName: "Cloud environments",
            href: "/codex/environments/cloud-environment",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Cloud agent internet access controls",
            shortName: "Internet controls",
            href: "/codex/cloud/internet-access",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Sites",
            href: "/codex/sites",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "GitHub issue and PR delegation with `@codex`",
            shortName: "GitHub delegation",
            href: "/codex/third-party/github#give-codex-other-tasks",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "GitHub code review and automatic PR reviews",
            shortName: "GitHub PR reviews",
            href: "/codex/third-party/github",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Slack cloud integration",
            shortName: "Slack integration",
            href: "/codex/third-party/slack",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Linear cloud integration",
            shortName: "Linear integration",
            href: "/codex/third-party/linear",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
        ],
      },
      {
        title: "Admin, security, and analytics",
        features: [
          {
            name: "SAML SSO, MFA, and workspace user management",
            shortName: "Workspace management",
            href: "/codex/enterprise/admin-setup",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "`requirements.toml` managed config",
            shortName: "`requirements.toml` config",
            href: "/codex/enterprise/managed-configuration",
            availability: {
              plus: "available",
              pro: "available",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Cloud-managed config policies",
            shortName: "Cloud-managed policies",
            href: "/codex/enterprise/managed-configuration#cloud-managed-requirements",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "available",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "ChatGPT workspace RBAC and custom roles",
            shortName: "RBAC and roles",
            href: "/codex/enterprise/roles-and-workspace-permissions",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "unavailable",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "SCIM, EKM, and domain verification",
            shortName: "SCIM, EKM, and domains",
            href: "/codex/enterprise/admin-setup#enterprise-grade-security-and-privacy",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "unavailable",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Enterprise retention and residency controls",
            shortName: "Retention and residency",
            href: "/codex/enterprise/admin-setup#enterprise-grade-security-and-privacy",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "unavailable",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "No training on API or business data by default",
            shortName: "No default training",
            href: "https://openai.com/business-data/",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "available",
              enterprise: "available",
              api: "available",
            },
          },
          {
            name: "Analytics dashboard",
            href: "/codex/enterprise/workspace-analytics",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "unavailable",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Analytics API",
            href: "/codex/enterprise/analytics-api",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "unavailable",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Compliance API and audit logs",
            shortName: "Compliance and audit logs",
            href: "/codex/enterprise/compliance-api",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "unavailable",
              enterprise: "available",
              api: "unavailable",
            },
          },
          {
            name: "Codex Security for connected GitHub repositories",
            shortName: "Codex Security",
            href: "/codex/security",
            availability: {
              plus: "unavailable",
              pro: "unavailable",
              business: "unavailable",
              enterprise: "available",
              api: "unavailable",
            },
          },
        ],
      },
    ],
  }}
/>

<div
  id="codex-plan-region-limits"
  className="not-prose mt-3 text-sm text-secondary"
>
  <sup>*</sup> Feature is currently limited to only specific regions. Check the
  individual feature documentation to learn more about geographic restrictions.


<div
  id="codex-plan-plugin-limits"
  className="not-prose mt-1 text-sm text-secondary"
>
  <sup>†</sup> Some first party plugins are not available.