> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Parameters

Sampling parameters shape the token generation process of the model. You may send any parameters from the following list, as well as others, to OpenRouter.

When a sampling parameter is absent from your request, OpenRouter omits it upstream rather than substituting a hardcoded value, so the provider applies its own default. The "Default" listed for each parameter below is the conventional value, not one OpenRouter injects. Explicitly sending it (e.g. `temperature: 1.0`) is still forwarded and may differ from omitting it (for example, it can affect provider-side cache keys). OpenRouter will also transmit some provider-specific parameters, such as `safe_prompt` for Mistral or `raw_mode` for Hyperbolic directly to the respective providers if specified.

Please refer to the model’s provider section to confirm which parameters are supported. For detailed guidance, see [managing provider-specific parameters](https://openrouter.ai/docs/guides/routing/provider-selection.md#requiring-providers-to-support-all-parameters).

## Temperature

* Key: `temperature`

* Optional, **float**, 0.0 to 2.0

* Default: 1.0

* Explainer Video: [Watch](https://youtu.be/ezgqHnWvua8)

This setting influences the variety in the model's responses. Lower values lead to more predictable and typical responses, while higher values encourage more diverse and less common responses. At 0, the model always gives the same response for a given input.

## Top P

* Key: `top_p`

* Optional, **float**, 0.0 to 1.0

* Default: 1.0

* Explainer Video: [Watch](https://youtu.be/wQP-im_HInk)

This setting limits the model's choices to a percentage of likely tokens: only the top tokens whose probabilities add up to P. A lower value makes the model's responses more predictable, while the default setting allows for a full range of token choices. Think of it like a dynamic Top-K.

## Top K

* Key: `top_k`

* Optional, **integer**, 0 or above

* Default: 0

* Explainer Video: [Watch](https://youtu.be/EbZv6-N8Xlk)

This limits the model's choice of tokens at each step, making it choose from a smaller set. A value of 1 means the model will always pick the most likely next token, leading to predictable results. By default this setting is disabled, making the model to consider all choices.

## Frequency Penalty

* Key: `frequency_penalty`

* Optional, **float**, -2.0 to 2.0

* Default: 0.0

* Explainer Video: [Watch](https://youtu.be/p4gl6fqI0_w)

This setting aims to control the repetition of tokens based on how often they appear in the input. It tries to use less frequently those tokens that appear more in the input, proportional to how frequently they occur. Token penalty scales with the number of occurrences. Negative values will encourage token reuse.

## Presence Penalty

* Key: `presence_penalty`

* Optional, **float**, -2.0 to 2.0

* Default: 0.0

* Explainer Video: [Watch](https://youtu.be/MwHG5HL-P74)

Adjusts how often the model repeats specific tokens already used in the input. Higher values make such repetition less likely, while negative values do the opposite. Token penalty does not scale with the number of occurrences. Negative values will encourage token reuse.

## Repetition Penalty

* Key: `repetition_penalty`

* Optional, **float**, 0.0 to 2.0

* Default: 1.0

* Explainer Video: [Watch](https://youtu.be/LHjGAnLm3DM)

Helps to reduce the repetition of tokens from the input. A higher value makes the model less likely to repeat tokens, but too high a value can make the output less coherent (often with run-on sentences that lack small words). Token penalty scales based on original token's probability.

## Min P

* Key: `min_p`

* Optional, **float**, 0.0 to 1.0

* Default: 0.0

Represents the minimum probability for a token to be considered, relative to the probability of the most likely token. (The value changes depending on the confidence level of the most probable token.) If your Min-P is set to 0.1, that means it will only allow for tokens that are at least 1/10th as probable as the best possible option.

## Top A

* Key: `top_a`

* Optional, **float**, 0.0 to 1.0

* Default: 0.0

Consider only the top tokens with "sufficiently high" probabilities based on the probability of the most likely token. Think of it like a dynamic Top-P. A lower Top-A value focuses the choices based on the highest probability token but with a narrower scope. A higher Top-A value does not necessarily affect the creativity of the output, but rather refines the filtering process based on the maximum probability.

## Seed

* Key: `seed`

* Optional, **integer**

If specified, the inferencing will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed for some models.

## Max Tokens

* Key: `max_tokens`

* Optional, **integer**, 1 or above

This sets the upper limit for the number of tokens the model can generate in response. It won't produce more than this limit. The maximum value is the context length minus the prompt length.

For reasoning models, this limit covers reasoning tokens and visible output together on most providers. A small `max_tokens` can be consumed entirely by reasoning, returning `finish_reason: "length"` with empty `content`. See [Reasoning tokens and max\_tokens](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens.md#reasoning-tokens-and-max_tokens) for details.

## Max Completion Tokens

* Key: `max_completion_tokens`

* Optional, **integer**, 1 or above

This sets the upper limit for the number of tokens the model can generate in response. It won't produce more than this limit. The maximum value is the context length minus the prompt length.

This parameter shares `max_tokens` semantics, including the reasoning-token caveat above.

## Logit Bias

* Key: `logit_bias`

* Optional, **map**

Accepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.

## Logprobs

* Key: `logprobs`

* Optional, **boolean**

Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned.

## Top Logprobs

* Key: `top_logprobs`

* Optional, **integer**

An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability. logprobs must be set to true if this parameter is used.

## Response Format

* Key: `response_format`

* Optional, **map**

Forces the model to produce specific output format. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is valid JSON.

**Note**: when using JSON mode, you should also instruct the model to produce JSON yourself via a system or user message.

## Structured Outputs

* Key: `structured_outputs`

* Optional, **boolean**

If the model can return structured outputs using response\_format json\_schema.

## Stop

* Key: `stop`

* Optional, **array**

Stop generation immediately if the model encounter any token specified in the stop array.

## Tools

* Key: `tools`

* Optional, **array**

Tool calling parameter, following OpenAI's tool calling request shape. For non-OpenAI providers, it will be transformed accordingly. Learn more in the [tool calling guide](https://openrouter.ai/docs/guides/features/tool-calling.md).

## Tool Choice

* Key: `tool_choice`

* Optional, **string or object**

Controls which (if any) tool is called by the model. 'none' means the model will not call any tool and instead generates a message. 'auto' means the model can pick between generating a message or calling one or more tools. 'required' means the model must call one or more tools. Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.

## Parallel Tool Calls

* Key: `parallel_tool_calls`

* Optional, **boolean**

* Default: **true**

Whether to enable parallel function calling during tool use. If true, the model can call multiple functions simultaneously. If false, functions will be called sequentially. Only applies when tools are provided.

## Include Reasoning

* Key: `include_reasoning`

* Optional, **boolean**

Deprecated alias for reasoning.exclude. When true, reasoning tokens are returned in the response when supported by the model.

## Reasoning

* Key: `reasoning`

* Optional, **map**

Controls reasoning behavior for models that support thinking tokens, including whether reasoning is enabled, the reasoning effort, maximum reasoning tokens, and whether reasoning is excluded from the response.

## Reasoning Effort

* Key: `reasoning_effort`

* Optional, **enum** (xhigh, high, medium, low, minimal, none)

OpenAI-style reasoning effort setting. Higher values allow the model to spend more tokens on internal reasoning when supported.

## Web Search Options

* Key: `web_search_options`

* Optional, **map**

Configures native web search options for models and providers that support web-connected answers.

## Verbosity

* Key: `verbosity`

* Optional, **enum** (low, medium, high, xhigh, max)

* Default: **medium**

Constrains the verbosity of the model's response. Lower values produce more concise responses, while higher values produce more detailed and comprehensive responses. Introduced by OpenAI for the Responses API.

For Anthropic models, this parameter maps to `output_config.effort`. The 'xhigh' level is supported by Anthropic Claude 4.7 Opus and later models. The 'max' level is supported by Anthropic Claude 4.6 Opus and later models.

Anthropic Messages API callers set `output_config.effort` directly. See [Reasoning with the Anthropic Messages API](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens.md#anthropic-messages-api).
