> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# How OpenRouter Routes Traffic Between Providers

> How routing splits a model's traffic between provider endpoints, and the inputs that decide your share

When a request lets OpenRouter choose the provider, routing gives each endpoint a share of the model's traffic. The share depends on two things: your adjusted price and your speed.

## Adjusted price and speed

Routing compares endpoints by what a user actually pays for a good result, not by list price alone. It takes each of these into account, along with what it costs the user:

* **Effective price**: overall cache-adjusted price
* **TTFT**
* **Reliability & quality**: failed or broken responses
* **429s**: rate-limited requests which have to fall back
* **Speed**: end-to-end TPS

Speed against adjusted price for five example endpoints. The competitive edge curves upward with speed, so faster endpoints can carry a higher adjusted price and stay competitive.

Endpoint

Price & speedlower is better

Share

Effective price

TTFT

Reliability & quality

429s

Speed

## The best endpoints get the most traffic

Adjusted price and speed, taken together, place each endpoint on one side of the **competitive edge**, which separates the best endpoints from the rest.

* **Competitive:** endpoints inside the edge get the most traffic. Being a little behind the best costs you little.
* **Exploration:** past the edge, your share drops off fast. Every endpoint still gets a small amount of traffic no matter what, so routing can see when it improves.

Traffic preference falls slowly for endpoints close to the best, then drops steeply past the competitive edge.

Each request picks an endpoint at random, weighted by these shares. If it fails, the retry is picked the same way from the endpoints that are left.

## Limits on top of the shares

* **Breaker.** If a degradation signal like reliability, quality or 429s is far worse than your peers', routing pauses your traffic until it recovers.
* **Traffic cap.** Routing learns how much load you can take before you start returning 429s. If your share would push you past that, your share is capped and the extra goes to other endpoints. The cap rises once the 429s stop.
* **Short-term backoff.** A burst of 429s or a sudden jump in latency briefly lowers your share while it lasts.

## The inputs

Every input is measured from your recent production traffic on OpenRouter. The last few minutes count the most, so changes show up within minutes. An endpoint with little traffic starts out looking like a typical peer and moves toward its own numbers as data comes in.

### Effective price

Effective price is the price your endpoint actually charged over the last 30 minutes, across all its traffic. It reflects your real **cache hit rate** and the mix of input and output tokens, so it can differ a lot from your list price.

Example: 40K uncached input tokens at $2.00/M, 60K cached input tokens at $0.50/M and about 4K output tokens at $8.00/M give an effective price of $0.142 for one request.

For each new request, routing estimates how many input and output tokens it will use and prices it with your effective price, so it can go where it is actually cheapest for the user.

### Speed

Speed is the main factor that trades off against price: a faster endpoint can cost more and still win traffic. It's measured as output tokens per second, end to end, so it *includes* TTFT: the user waits for the whole response, from sending the request to the last token.

Example: a 5 second TTFT plus 500 tokens streamed in 5 seconds is 500 tokens in 10 seconds, a speed of 50 tokens per second end to end.

### TTFT

TTFT adds directly to your adjusted price, even though it already counts toward speed, because interactive use depends on it most. It's the time to first token: how long users wait before your response starts streaming. In agentic sessions, a model may make many tool calls in a row, and each one waits for a first token.

An agent session: reasoning, five tool calls in a row, more reasoning and a response. Each step waits for a first token, so the tool calls are mostly waiting on TTFT.

### Reliability

A reliability error is a request that fails because of your endpoint. The user loses the attempt and has to retry, so each error carries a heavy penalty.

Example: a 1% error rate times an 8× penalty per error raises adjusted price by about 8%.

**Counts**

* 5xx responses
* No response: dropped connections, timeouts
* Setup errors: 401, 402, 404, 405, 408, 410, 421, 423, 424, 426, 498
* Responses that fail partway through

**Doesn't count**

* Bad requests: 400, 413, 422
* Geographic or legal blocks: 403, 451
* User disconnects: 499
* 429s, covered below

If your error rate is far above your peers', the **breaker** pauses your traffic until it recovers.

### Quality

How often your responses to tool-calling requests come back well formed. Each broken one raises your adjusted price a little.

Example: 95% of tool calls well formed raises adjusted price by about 5%.

An endpoint flagged for broken tool calls, or for benchmark accuracy well below what the model should score, falls far behind and gets exploration traffic only until the flag clears.

### 429s

A 429 makes the user wait for the rejection and then send a full request somewhere else. Routing charges that wait plus a penalty, weighted by how often you return 429s, so the cost is usually small in adjusted price.

A 429 makes the user wait for the rejection and then send a full request elsewhere. Example: a $2.50 wait plus penalty times a 0.4% 429 rate adds $0.01 to adjusted price.

429s matter more through the limits: repeated 429s at high load set your **traffic cap**, a burst of them triggers short-term backoff, and a rate far above your peers' trips the **breaker**.

### Learned capacity

Routing watches how your 429 rate changes as your load goes up, and learns the load you can handle while keeping 429s low. That becomes your traffic cap. If you add capacity, the cap rises on its own once the 429s stop. You don't need to tell us.

A big spike of 429s sets a traffic cap; a small steady 429 rate then holds the endpoint at its capacity. When the provider adds capacity the 429s stop and the cap rises, until it reaches the new capacity and the small steady 429 rate returns.

Traffic you receive

Traffic cap

Your real capacity

429 rate

## Excluded traffic

Routing only chooses between providers when the user leaves that choice to OpenRouter. It's skipped, and the request goes where the user asked, when the user:

* Sets a provider order, or an allow or ignore list that leaves only one provider
* Brings their own provider key
* Sorts by price, throughput or latency
