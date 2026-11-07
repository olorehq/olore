# Models and Trusted Access

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

OpenAI Daybreak helps approved users perform authorized defensive cybersecurity work. Daybreak Blue provides access to flagship models with reduced refusals for authorized defensive workflows. Daybreak Red provides separately approved access to specialist cyber models for more advanced security research.

Combine your approved model with a controlled environment, clear limits on approved systems and actions, least-privilege permissions, and automatic review before sensitive actions run. Use the model only with the approved identity, workspace or API organization and project, and product surface.

## Choose the right model

Start with **GPT-Daybreak-Blue** for most authorized defensive work. This model provides access to advanced capabilities with reduced refusals for defensive security workflows, including:

- Vulnerability discovery and triage.
- Secure code review and threat modeling.
- Detection engineering and incident response.
- Malware analysis in a controlled environment.
- Remediation and patch validation.

**GPT-Daybreak-Red** is a specialist cyber model for separately approved, explicitly authorized workflows, such as controlled vulnerability reproduction, proof-of-concept or exploit validation, penetration testing, red teaming, and complex system analysis. It isn't the default choice for routine security work, and access isn't available automatically or on every surface.

These advanced workflows can resemble malicious activity without clear authorization. Use the approved model and surface only for systems you own or are explicitly authorized to assess, and keep appropriate human oversight in place.

For example:

- **GPT-Daybreak-Blue:** Review the approved lab repository for authentication weaknesses, rank findings by evidence and impact, and propose patches without accessing external systems.
- **GPT-Daybreak-Red:** Within the approved lab and testing window, reproduce the documented authentication flaw, validate a minimal proof of concept, and stop before credential access, persistence, or production changes.

## Trusted Access for Cyber

Request **Daybreak access** through [Trusted Access for Cyber](https://help.openai.com/en/articles/20001258-trusted-access-for-cyber). Access depends on approval and provisioning for your specific identity or service, ChatGPT workspace or API organization and project, authorized offering and model, and allowed product surface.

- Individuals can request access through the [individual Trusted Access application](https://chatgpt.com/cyber).
- Organizations can submit the [enterprise Trusted Access request form](https://openai.com/form/enterprise-trusted-access-for-cyber/) and coordinate with their OpenAI representative.

Submitting an application or completing identity verification doesn't guarantee approval.

Applying, verifying your identity, or receiving approval for Daybreak Blue
  doesn't grant access to Daybreak Red or GPT-Daybreak-Red. The specialist
  offering requires separate approval and provisioning.

For enterprise access, use the approved workspace, API organization, or project only for your organization's authorized internal work. Don't extend it to external users, third-party customers, externally offered services, downstream product features, or systems outside the approved work. If the approved identity, workspace, API organization, project, model, or surface is unclear, stop and confirm it with your OpenAI representative.

Trusted Access doesn't automatically grant [Zero Data Retention](https://developers.openai.com/api/docs/guides/your-data#data-retention-controls-for-abuse-monitoring). Confirm any separately approved retention controls for the exact API organization and applicable endpoint before you begin.

## False positives

Legitimate cybersecurity or unrelated activity can still trigger a safeguard. If a safeguard blocks, reroutes, or limits a request, inspect the available client notice and request logs. Review [Common Issues and Troubleshooting](https://help.openai.com/en/articles/20001259) for details to collect and next steps. Report suspected Codex false positives through `/feedback` when available. For API access restrictions and appeals, follow the [API cybersecurity checks guidance](https://developers.openai.com/api/docs/guides/safety-checks/cybersecurity#appeals).

All users remain subject to the [Usage Policies](https://openai.com/policies/usage-policies/) and [Terms of Use](https://openai.com/policies/row-terms-of-use/).

## Configure your security workflow

Trusted Access governs approved model access, but it doesn't configure your environment, enforce limits on approved systems and actions, or review proposed actions.

- [Use the recommended configuration](https://learn.chatgpt.com/docs/cyber-safety/recommended-configuration) for isolation, least-privilege permissions, clearly defined boundaries, and guardrails for sensitive actions.