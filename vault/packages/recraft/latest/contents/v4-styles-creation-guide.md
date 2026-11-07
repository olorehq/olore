> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# V4 Styles Creation Guide

![Guide@2x](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/Guide@2x.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=c039a5b7d48087d8f2ea6d30e534fe1b)

Feed this model 1 to 10 references and it learns the style. Style it once,  and every image after matches. That's the whole pitch.

![Group 2131332360](https://mintcdn.com/recraft/Cg2QTtrvlgs2Y_YG/images/Group-2131332360.png?fit=max\&auto=format\&n=Cg2QTtrvlgs2Y_YG\&q=85\&s=9770ab383849dcc4a0fd85b93e28bf56)

## **One reference is  the safe move**

One strong image gives you a clean signal. No competing directions, no risk of two styles fighting for control.  If you're not sure this is the right call, it's the right call.

![Group 2131332387](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/Group-2131332387.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=a3ae3c2b324437e7b845e688e7c68245)

## **Multiple references,  one strict rule**

More references help in exactly one situation: they already agree with each other. A page pulled from a consistent brand book,  not a mood board you assembled at 1AM.

Do this right and the style understands the vibe. It stops fixating on the one pose or object it saw first and starts applying the logic of the style instead. That's the upside.

However, the rule doesn't bend. Every reference has to come from the same visual world. Mismatched references don't average out into something reasonable. They compete, and the output pays for it.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-43.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=ac34735c27e8691d4a7d6877416d73b1)

## **Mixed references don't blend, they collide**

Feed it unrelated sources and the model doesn't pick  a lane. It lifts details, objects, and motifs from each one and stitches them together, often nowhere near what  you asked for.

Not sure your references match? Use one. This isn't a hedge, it's the fastest path to a result you actually want.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-44.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=731af7bc63d19d78c6d542042d84d36d)

## **The reference sets the style, the prompt does everything else**

Line weight, color logic, texture, rendering style: that's the reference's job.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-46.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=47d11004dcddb7c2056dbc0abf7f735d)

Subject, scene, composition, pose, object: that's the prompt's job. The prompt can control the level of detail:

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-47.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=d3301272a954991733463f367ceb806c)

Want variety? Write a new prompt. Adding a fourth reference to "shake things up" is how you end up with a blend nobody ordered.

## **Vague prompts,  vague results**

"A person" gives you the same pose and the same framing, every time. The model isn't being lazy. It's doing exactly what you told it to.\
"A person walking forward with their hair flowing in the wind,  carrying a small bag" gives you something else entirely.\
Specificity isn't a nice-to-have here. It's your superpower.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-48.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=16f4e6cb9ffe84dd0fc42ecbc448bd7e)

## **The reference is only as good as the file**

A low-resolution reference caps your results before the prompt gets a say. Upload clean, high-resolution assets. This one's non-negotiable.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-49.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=9e6433e7481c7d37be95c3c59e02fb70)

## **Color matching is a maybe, not a promise**

Reference-to-output color consistency isn't guaranteed. If exact  color match matters to the brief, check the output. Don't assume.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-50.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=e7048981e7f2f8de993617d736f8eba0)

## **Weight your references like a mix, not a checklist**

With a multi-reference set, you can adjust which one leads. Drag the divider toward the asset that carries the style best, useful when one image from the brand book does more work than the rest.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-52.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=0d0e40b856370c0d05eea8776649ab9c)

## **Two stages,  not one long process**

## **→ Stage 1: Create**

Upload a single reference, or a set that's actually consistent.  This is where the style's rendering logic and texture get locked in.

## **→ Stage 2: Save**

The style becomes its own object, separate from the source.  You never touch the original references again. It attaches to any new prompt like a preset you built once and now just reach for.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-53.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=956aebcc21c155de6bfb8668dc714566)

Every prompt you write after this runs both stages behind the scenes: fine-tuned against the original reference, then fully steered by your prompt.

## **Match the reference to the job**

## Icon style → icon set

Save a style from a single, clear icon reference, or from a small  set of icons pulled from the same brand book, if you have one.  Then generate each icon with its own prompt: "house," "car," "bicycle," or "coffee cup." The style handles line weight, corner radius, and fill logic; the prompt names the object and drives  the variety across the set.

## Illustrative style → banner set

Save a style from a single illustrated scene reference.  Then write one prompt per banner: "a person working at  a desk with a laptop," "two people shaking hands in an office,"  or "a delivery courier handing off a package." The same illustration style will repeat across all three. The prompt alone changes the subject and composition from banner to banner.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-54.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=2d0a46be3aac1e05e9bea5000f3674e2)

## **Match the reference  to the job**

## Character style → multi-scene content

If you have several consistent references of the same character (say, a portrait, a full-body shot, or the character in a scene), then use them together to help the style generalize to the character rather than fixating on one pose. Then place the character in new situations purely through the prompt: "the character reading a book on a park bench," "the character at a market stall," or "the character riding a train.”

## Product style → mockup set

Save a style from a single product photography reference (lighting, background, angle), or from several product shots  from the same shoot. Then prompt for different products, like,  "a ceramic mug on the same background," "a leather wallet,"  or "a pair of sunglasses," to produce a catalog-consistent set.  The prompt introduces each new product, and the reference(s) supply the constant look.

![Image](https://mintcdn.com/recraft/OF-o23kjW9GnK1cQ/images/image-55.png?fit=max\&auto=format\&n=OF-o23kjW9GnK1cQ\&q=85\&s=f7bafd2bca7a2e1b058cc750cc3610f1)

The reference answers, "What does it look like?" And the prompt answers, "What's in it?" Most of the real work happens in the prompt.

## **Troubleshooting if your results look repetitive**

Getting the same output across different requests  almost always points to an underwritten prompt.\
*"A car"* gets you the same angle every time.  *"A car viewed from a three-quarter angle, headlights on"* doesn't.\
Add more detail: pose, angle, composition, action. And resist the urge to fix a repetitive result by throwing in another reference. That's not a fix. That's a blend waiting to happen.

![Image](https://mintcdn.com/recraft/v5nOXcDWXny5tprB/images/image-56.png?fit=max\&auto=format\&n=v5nOXcDWXny5tprB\&q=85\&s=d87f0446b44403a812927d8cdbf6af18)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.