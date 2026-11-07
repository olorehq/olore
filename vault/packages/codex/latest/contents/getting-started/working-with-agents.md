# Working with agents

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

An agent is an AI system that can work through a task on your behalf. You describe what you want to achieve. It can then choose next steps, use available tools, and adjust its approach based on what it finds.

If you're used to chatting with AI, you may guide the work one exchange at a time. With an agent, you can hand over a goal and let it carry out several steps between your messages. You still guide the work through conversation, review its progress, and make decisions when it needs your input.

Agents bring together three elements: a **model** to interpret the task and plan next steps, **tools** to gather information or take action, and **guardrails and human oversight** to set boundaries and guide the work.

This guide explains how agents work and how to guide them while staying in control. You'll learn how to set clear goals and boundaries, review progress, and decide when to step in.

Think about handing a piece of work to a teammate. A useful handoff explains the outcome, shares the context, and makes clear which decisions they can make and when to check back. Those same habits help with an agent.



> Illustration: You set the goal, context, and boundaries. The agent plans, uses tools, checks results, and adapts within your instructions and permissions. Questions come back to you when needed. You review the work and can send feedback or request revisions.



That can take some getting used to. As you delegate more of the execution, your expertise helps you choose worthwhile work, identify missing context, and recognize a good result. Setting the brief, judging the output, and guiding revisions become central parts of working with AI.

The teammate analogy describes a way to delegate. An agent does not share a colleague's lived experience of your organization or responsibility for the outcome. You may need to explain context that a colleague would already know. You remain responsible for deciding whether the work is ready to use.

## Chat and agents

The main shift is how much of the next-step planning you delegate.

| What changes      | Chat with AI                                              | Delegate to an agent                                                   |
| ----------------- | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| How you start     | Ask a question or work through an idea together.          | Describe the outcome, relevant context, and boundaries.                |
| What happens next | You usually guide the next exchange with another message. | The agent can choose and carry out several steps toward the goal.      |
| What you receive  | A response you can use, question, or refine.              | Work to review, along with results, questions, or blockers.            |
| Your role         | Shape the conversation and check the response.            | Set direction, review progress, and decide what to do with the result. |

Chat and agents overlap. Chat can use tools, and you can steer an agent through conversation. These are patterns of working with AI, rather than separate interfaces.

## OpenAI products with agentic capabilities

You'll find these capabilities in several OpenAI products and features. They differ in the work they support, the tools they can use, and whether you're delegating a single assignment or setting up ongoing work.

| Product or feature                                                                                                                  | Work it can take on                                                                                                                         | Your focus                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [ChatGPT Work](https://learn.chatgpt.com/docs/get-started-with-work)                                                                                        | Tasks with several steps across files, sources, and tools, producing deliverables you can review and refine.                                | Define the finished result, permitted actions, and review points.                  |
| [dots](https://learn.chatgpt.com/docs/dots)                                                                                                                 | Ongoing personal assistance across tools and projects, bringing back results and decisions that need you. Rolling out to eligible accounts. | Set priorities, useful updates, boundaries, and stopping conditions.               |
| [Codex Cloud](https://learn.chatgpt.com/docs/cloud)                                                                                                         | Software work that involves inspecting code, making changes, and running commands or tests in a cloud environment.                          | Explain the intended behavior, inspect changes, and verify the checks.             |
| [OpenAI developer tools](https://developers.openai.com/api/docs/guides/agents) | Custom agents built with OpenAI's APIs and Agents SDK, configured for an application's tools and workflow.                                  | Design permissions, evaluation, monitoring, and human review into the application. |

These experiences overlap: research can be part of a larger assignment, and an ongoing agent can coordinate individual tasks. Availability and supported actions depend on your plan, region, workspace settings, and connected tools. Use the linked product guidance to check what applies to you.

## Decide when to delegate

An agent can be useful when reaching your goal takes several steps and the next step depends on what it finds. A focused chat may be enough when you want a quick response or want to develop something together one exchange at a time. A predefined workflow can suit stable, repeatable steps; an agent can help when the path needs adjustment.

Before delegating, ask:

- Can I describe the outcome and what "done" means?
- Can the agent access the information and tools it needs?
- Can I evaluate the result and recover if something goes wrong?

Start with a manageable assignment. If you cannot yet judge the result, narrow the scope or involve someone who can. A task may be technically possible for an agent but still require enough supervision that a simpler approach is more useful.



    **Agents may take longer and cost more.** Planning, using
    tools, checking results, and trying another approach can take longer than a
    quick chat. Depending on the product and plan, that work can also consume
    more of your usage allowance or incur additional charges. Check 
    [usage and pricing](https://learn.chatgpt.com/docs/pricing) before starting substantial
    or recurring work.
  


Define how deep the work should go, which sources matter, and when to stop. Model choice and task complexity also affect time and resource use. An instruction to limit effort helps define the scope; it does not replace a product's usage or spending controls.

Judge the value of the whole task: the quality of the result, the time you spend briefing the agent and reviewing its work, the wait, any corrections, and the cost. A slower result may still save hands-on time. More time or spending does not, by itself, guarantee a better result.

## Give the agent a clear assignment

A good brief gives the agent a basis for making useful choices. Explain the outcome, why it matters, and the context that changes how the work should be done. Make the boundaries as clear as the goal.

| Part of the brief | What to make clear                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| Task              | What should the agent accomplish, for whom, and what is in or out of scope?                                       |
| Context           | Which sources, facts, priorities, and constraints should guide it? What should it do when information is missing? |
| Actions           | What may it do independently, what needs approval, and when should it pause or stop?                              |
| Output            | What should it deliver, in what format and to what destination, and how will you judge quality and completeness?  |

Show an example of what "done" looks like. Share a brief, report, or other result you would be happy to use, and explain what makes it useful: its structure, level of detail, or how it supports a decision. For example: "Use the attached brief as a model. I need a one-page comparison of three options, with a recommendation and links to the sources. Flag unanswered questions and save it as a draft for my review."

Choose the amount of independence to fit the task. You might ask for a plan before execution, a draft before changes to another system, or a check-in when the scope changes. State who will review the result and who can resolve decisions. Revisit those boundaries when the sources, tools, or consequences change.

Instructions communicate intent; permissions control access. Use the [permission controls](https://learn.chatgpt.com/docs/permission-modes) available in your product as well as stating boundaries in the brief.

## Review and guide the work

Review is part of the work. Inspect the visible steps, sources, tool actions, and results. Check the output against the brief: is it complete, are important claims supported, and did the requested actions actually happen? Fluent writing or a confident summary is not enough to establish that a task succeeded.

Match the depth of review to the consequences. Give closer attention to work that affects other people, changes shared information, or is difficult to undo. When something is wrong, explain the issue and the standard the revision needs to meet.

<WorkflowSteps variant="timeline">

1. 
Continue


   The result meets the brief, important details are supported, and the next step is within the agreed boundaries.

2. 
Redirect


   Name the issue and give a focused correction. Explain what needs revision, expansion, or refinement.

3. 
Pause and decide


   Resolve missing access, an open decision, or an action requiring approval before work continues.

</WorkflowSteps>

Use the relevant controls to interrupt or stop work when needed. Changing an instruction does not undo an action already completed. If an agent reports updating another system, inspect the saved result there.

## Reuse what works

Save useful briefs, corrections, and a review checklist. For the next task, update the inputs, constraints, and success criteria. Keep track of what required intervention: missing context, unclear instructions, unavailable tools, or an error in the result. Those patterns can tell you what to change before delegating similar work again.

Expand the scope as you gather evidence of reliable performance on comparable tasks. A strong first result does not establish reliability across every kind of work. Reuse a proven approach while continuing to check the parts that matter.

If you want work to continue over time, define when it should run, what deserves an update, and when it should stop. Review whether that work still serves its purpose, and pause or retire it when it no longer does. Use the guidance for [long-running work](https://learn.chatgpt.com/docs/long-running-work) and [tasks and memory](https://learn.chatgpt.com/docs/dots/tasks-and-memory) to configure the behavior available to you.

## Keep learning



  

### Try ChatGPT Work

Give your first assignment and review the result.

[Get started](https://learn.chatgpt.com/docs/get-started-with-work)


  

### Meet dots

Apply these habits to an ongoing personal assistant.

[Explore dots](https://learn.chatgpt.com/docs/dots?nav=overview)


  

### Personalize your dot

Give your dot an orientation, set responsibilities, and use feedback to improve its work.

[Build your working relationship](https://developers.openai.com/training/walkthroughs/personalize-your-dot)


  

### Build your skills

Explore structured learning and guided practice.

[Browse courses](https://academy.openai.com/pages/courses)