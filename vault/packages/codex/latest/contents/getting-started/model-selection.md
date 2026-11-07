# Model selection

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

## Meet the models

<ModelOverview />

Availability, tools, reasoning settings, and usage limits differ by product and
model version. Check the [models available in ChatGPT](https://learn.chatgpt.com/docs/models) or the
[API model catalog](https://developers.openai.com/api/docs/models).

## Find the right model for your workflow

Choose your work and task and get a recommendation.

<ModelRecommender client:load />

### When to consider GPT-6.1 Terra

Try [GPT-6.1 Terra](https://developers.openai.com/api/docs/models/gpt-6.1-terra) for concise writing based on
supplied material, computer-use tasks with a defined outcome, and scoped code
fixes. Provide clear inputs, requirements, and a way to verify the result, such as
checking saved records or running regression tests.

Compare it with GPT-6.1 Sol on the same inputs and reasoning effort. For writing,
judge audience fit, voice, and useful detail as well as accuracy and length. For
computer use, check the saved result and the accuracy of the completion report.

### When to consider GPT-6.1 Sol

Consider GPT-6.1 Sol for complex projects where cost matters, such as
creating a board presentation from financial results or building a website
from a product brief. Compare it with Astra on the same task to assess the
tradeoff between quality and cost.

See the [API model page](https://developers.openai.com/api/docs/models/gpt-6.1-sol) for specifications
and API pricing, or [Codex and ChatGPT Work availability](https://learn.chatgpt.com/docs/models#gpt-6.1-sol)
for access through your ChatGPT plan.

## How to think about models and reasoning effort





  Luna is our most efficient model, while Astra is our state-of-the-art, most
  powerful model. If you don't need to think about usage or how long it takes to
  complete a task, you can default to Astra. To optimize usage, use the guidance
  below to choose a model and reasoning effort for your needs.



1. **Luna · Low**

   Fine-grained edits, well-scoped problem-solving, and simple data extraction.

2. **Luna · Extra high**

   Finding current context across multiple apps, prioritizing work, and solving problems with clear constraints.

3. **GPT-6.1 Sol · Medium**

   Complex technical work and coordinated deliverables you expect to revise.

4. **GPT-6.1 Sol · Extra high**

   Polished deliverables, connected visual systems, and decisions built from conflicting evidence.

5. **Astra · Low**

   Concise writing and content adaptation that preserve facts and nuance.

6. **Astra · Medium**

   Ambitious projects that need broad context, reliable interactions, and complete results.

7. **Astra · Extra high**

   Demanding analysis and complex deliverables with exacting requirements.

### Experiment

Treat the guidance on this page as a starting point. The best way to find the right
model for your workflow is to experiment with different models and reasoning
settings to see what works.

Start by considering:

- **How often does your workflow run?** A frequent automation makes usage and cost
  add up faster than an occasional project.
- **How quickly do you need the result?** A task you're waiting on may need a
  faster setting than one that runs overnight.
- **How will you use the output?** A draft for your review may need less polish
  than something you'll share externally.
- **How important is the quality of the result?** Depending on your use case or
  industry, you might want to use a stronger model to put an emphasis on quality.

If you can, experiment using the same inputs to compare results and keep the
lightest setting that meets your quality bar.

Choose acceptance criteria before comparing models:

- **Writing:** check required facts, qualifications, audience, and voice. Review
  both outputs before deciding whether the shorter one is more useful.
- **Computer use:** reopen the affected record or page to verify saved changes,
  confirm that the workflow preserved unrelated data, and compare the completion
  report with the actual result.
- **Code and interfaces:** run regression tests. For an interactive application,
  also inspect the rendered result on desktop and mobile.

Repeat the comparison across representative tasks. Measure completion time
alongside quality, including time spent reviewing or repairing the result. Then
vary reasoning effort while keeping the model and inputs fixed.