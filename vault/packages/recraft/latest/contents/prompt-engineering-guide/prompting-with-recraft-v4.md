\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Prompting with Recraft V4

 ![Image](https://mintcdn.com/recraft/9CZVLYhziIMlVGED/images/image-10.png?fit=max&auto=format&n=9CZVLYhziIMlVGED&q=85&s=20038f1f729f6204e7f20fce909f75ec)

The model is designed to operate across different levels of control while consistently delivering outputs aligned with design-level quality and visual intent. You can describe intent briefly or define constraints in detail — both approaches are valid and produce stable results.

\\* V4 accurately follows long, highly detailed prompts with multiple constraints.
\\* V4 produces coherent, usable results from very short prompts.
\\* V4 performs reliably in vector illustration and logo systems.
\\* V4 generates stylized illustrations with clear silhouette, depth, and visual hierarchy.
\\* V4 handles 3D visuals with consistent volume and material definition.
\\* V4 works with text predictably, including multi-language text.
\\* V4 delivers refined, designer-level photorealism when realism is required.

In some cases, a short prompt is sufficient to explore form, mood, or composition. In others, longer prompts allow you to define structure, style systems, typography behavior, or production constraints.This guide focuses on practical usage: how prompt length, structure, and level of detail affect output — and how to choose the appropriate approach for different design tasks.

\## Short Prompts → Interpretive Mode

Recraft is capable of making informed aesthetic decisions when provided with minimal input.

\*\*Examples\*\*

![Fashion couple portrait, close up.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/interpretive-mode-exp1-1.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=a969e3ffba43fb9504da86315dbe1a98)![Fashion portrait, close up.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/interpretive-mode-exp1-2.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=3cb8cb885af4d0c2a74f4e39a3825d5a)![Fashion man portrait, close up.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/interpretive-mode-exp1-3.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=796b617c0a8d7a2798cc4c9e2c7163c2)

"\*Fashion couple portrait, close up.\*"

"\*Fashion portrait, close up.\*"

"Fashion man portrait, close up."


\## Why this works:

\*Even minimal prompts produce:\*

\\* Balanced framing
\\* Controlled lighting
\\* Clean composition
\\* Cohesive styling

Recraft fills in missing structure using internal design logic.

\*When to use short prompts:\*

\\* Early-stage exploration
\\* Mood discovery
\\* Concept sketching
\\* Allowing the model to introduce variation

Short prompts activate interpretive behavior.

\## Structured Prompts → Architectural Control

If you want precision, define the visual system.

\*\*Examples\*\*

![Centered close-up portrait of white woman.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/architectural-control-exp1-1.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=c3349ca2619ecef943f41d8d9a75f664)![Artistic close-up portrait of a young Caucasian woman.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/architectural-control-exp1-2.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=8a184ac27f7d18c66bc1e798f63ceded)![Ultra-photorealistic high-angle bust portrait of an adult figure.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/architectural-control-exp1-3.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=a0896f18f40f734e5750248c1da0ac33)

"\*Centered close-up portrait of white woman, slightly closer than waist-up, natural three-quarter turn (semi-profile), wearing a structured tailored jacket with visible seam construction and precise cut lines. Matte fabric with realistic textile texture and subtle depth. Very natural-looking model with minimal to no makeup, authentic skin texture, soft imperfections visible.Clean seamless background without a horizon line. Natural daylight, soft and diffused, coming from the side (window light feel), gentle falloff across the face, delicate shadow under the chin and along the jawline. Calm, contemporary editorial mood. Balanced negative space, intimate framing, spatial clarity, quiet realism.\*"

"\*Artistic close-up portrait of a young Caucasian woman and a pale horse against a dark desaturated blue-grey background with subtle vignetting. The woman stands on the right in sharp head-and-torso focus, slightly angled left, looking directly into the camera with a serious, neutral expression. Fair freckled skin, light reddish-brown hair pulled back, light eyes, no jewelry. She wears a high-neck metallic gold sequined garment over a dark brown layer, reflecting soft golden highlights.In the left foreground, slightly behind her, the pale horse’s head is softly out of focus but clear in form — white coat with faint speckles, light mane, visible eye, no tack. Strong natural light from the upper left creates sharp diagonal shadows and warm highlights against the cool background. Shallow depth of field, high contrast, eye-level composition, asymmetrical and intense mood.\*"

"Ultra-photorealistic high-angle bust portrait of an adult figure with dark skin visible at the neck and jawline, natural pores and realistic texture. Head slightly tilted downward, face fully concealed by a lightweight reddish-orange cotton head covering with visible weave, natural folds, and small light-blue and off-white floral print. A metallic silver crown of thorns wraps around the head, pressing into the fabric with realistic tension.Silver bead strands cross the forehead horizontally and hang vertically over the fabric and chest, each bead showing accurate reflections and subtle imperfections. The figure wears a deep navy corduroy kimono-style robe with ribbed texture and visible seams, with a cream underlayer at the neckline. Clear sky background fading from deep blue to pale haze over an arid landscape. Strong natural sunlight from the front-right, sharp shadows, realistic metal reflections, high dynamic range. High-end fashion editorial style, 8K clarity, solemn and contemplative mood."


\*\*Prompt structure (from global to local):\*\*

1\. Core concept — subject(s) and scene (who and what is in the image)
2\. Background and environment (where the subjects exist)
3\. Primary subject framing and pose (pose and expression)
4\. Physical attributes and identity details (identity and appearance)
5\. Secondary subjects and spatial relationships (if needed)
6\. Lighting direction and behavior
7\. Camera, depth, and contrast (how the scene is captured)
8\. Mood and compositional resolution

\*\*Key takeaway:\*\*\
Structured prompts don’t make results “better.”They make outcomes intentional, controllable, and repeatable.

\
\*\*Practical tip:\*\*\
If the image must match a specific art direction → structure the prompt.If you’re exploring → keep it minimal.

![Image](https://mintcdn.com/recraft/9CZVLYhziIMlVGED/images/image-14.png?fit=max&auto=format&n=9CZVLYhziIMlVGED&q=85&s=ce1a994367ce24841d91c0ac4b070ba7)

\## Vector & Logo Design Strength

Recraft V4 is unusually strong at flat graphic logic.

\*\*Examples\*\*

![Minimal playful logo.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/vector-logo-design-exp1-1.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=0143f1b626aea57be1937c07372248a8)![Minimal playful logo.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/vector-logo-design-exp1-2.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=26557b62dab187553866269ce6740e74)![Create a collection.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/vector-logo-design-exp1-3.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=c28cf3f8a2b16637e9c33365b1bbfdde)

"\*Minimal playful logo on a deep muted green background with warm off-white or cream elements. Flat colors only — no gradients, shadows, or texture. Designed for a slow, nature-focused creative space such as a studio, independent publishing project, or mindfulness platform. Calm, grounded, human, slightly whimsical — never commercial or trendy.Bold hand-drawn chunky wordmark with soft uneven strokes, rounded edges, imperfect spacing, and slightly irregular proportions. Letters feel brush-painted or cut from paper, earthy and intuitive rather than precise. Simple plant-inspired symbols (abstract leaves, berries, seeds) are integrated into or around the lettering — flat, bold, highly simplified shapes with no outlines or fine details.Centered, compact composition forming one unified silhouette with strong legibility. Warm, natural, quietly confident identity. Avoid corporate aesthetics, sharp geometry, thin lines, decorative fonts, or tech styling.\*"

"\*Clean modern illustration icon set featuring exactly 4 ultra-bold surreal character pictograms in a playful contemporary mascot style. Exaggerated geometric bodies, elastic limbs, dynamic confident poses, slightly asymmetrical forms, smooth hand-drawn outlines with a subtle wobble. Minimal facial features — small oval eyes, calm neutral expressions. Personality expressed through posture. Strict two-tone palette only: deep saturated crimson for all characters and graphic elements on a soft warm cream background. Flat vector aesthetic. No gradients, no shading, no texture, no shadows.
Include exactly four characters:
– A tall melting heart with long flexible legs walking forward
– A floating crescent-moon-headed figure hugging a large abstract flower
– A stretched dachshund-like creature with an oversized bow around its body
– A tall matchstick-headed character with a tiny flame-shaped head holding a large geometric love letter.
Add minimal decorative elements in the same crimson line style: small starbursts, abstract leaves, curved motion lines, and floating petals. Clean, balanced, poster-style composition with strong negative space. No text. No clutter. Bold, graphic, collectible art-print aesthetic.\*"

"\*Create a collection of 12 clean vector tourism character icons arranged in a grid with four per row (three rows total). Ultra-minimal bold silhouette style, pure black solid shapes on a white background. No gradients, no textures, no outlines — only simple geometric filled forms with strong silhouette clarity. All characters must have identical tiny dot eyes, same size and placement, with no additional facial details.The icons should feel playful, abstract, slightly absurd, and clearly tourism-inspired in a modern Scandinavian-brutalist pictogram style.Include exactly these 12 characters: a mountain with minimal sunrise rays, a rolling suitcase with small wheels, a tall lighthouse with beam lines, a rounded airplane, a palm tree with a face in the trunk, a camper van, a sun disk with short rays, a hot air balloon with a small basket, a backpack with visible straps, a triangular tent, a cruise ship with stacked decks, and a camera with a circular lens.Ensure even spacing, consistent visual weight, uniform eye placement, and a bold, clean, graphic poster-like composition.\*"


\*\*Practical tip:\*\*\
For logo and vector design, prompts should define:

1\. Graphic type (logo, icon set, symbol system)
2\. Shape logic (geometry, symmetry, silhouette clarity)
3\. Color system (strict palette definition)
4\. Line discipline (consistent stroke, no texture)
5\. Layout structure (centered, grid-based, scalable)
6\. Constraints (no gradients, no shadows, etc.)

Avoid texture or material-focused language.

Vector output responds to structural definition and geometric clarity.

![Image](https://mintcdn.com/recraft/9CZVLYhziIMlVGED/images/image-15.png?fit=max&auto=format&n=9CZVLYhziIMlVGED&q=85&s=cd95431ed78dc678d6d785f3052237de)

\## Graphic Design: Posters vol. 1

This is where Recraft V4 becomes especially powerful for designers.\
\*\*It demonstrates a clear understanding of:\*\*

Typographic hierarchy\
Visual weight\
Poster-scale composition

When layout logic is explicitly described, the model responds with accurate and predictable results.

\*\*Examples\*\*

Minimal Poster System

![Large-format poster.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/graphic-design-exp1-1.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=5211c62503b454007910e5bc7ff7aff6)![Large-format contemporary graphic design poster.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/graphic-design-exp1-2.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=b8df324a7fa399f6fcbc7e570cd6462e)![Large-format contemporary magazine cover .](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/graphic-design-exp1-3.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=0ac7419ceab5d34fba548791f68234eb)

"\*Large-format poster combining a cinematic desert landscape with bold graphic overlay.
Background: open arid plain with warm sand tones, distant mountains, dramatic sky with soft evening light. Subtle print texture.
Oversized electric-yellow abstract character drawn with thick expressive lines. A floating cloud-shaped figure with stretched limbs, one arm raised holding a symbolic lightning bolt. Simple facial features, closed eyes, calm expression. Flat solid fill, no gradients.
Top left — minimal geometric logo mark + wordmark WILDFORM in clean modern sans-serif.Arched headline integrated with illustration: move slow move loud.Bottom line: Not perfect. Just alive.
Strong contrast between realistic landscape and flat graphic layer. Contemporary, expressive, slightly rebellious poster aesthetic.\*"

"\*Large-format contemporary graphic design poster combining raw editorial typography with expressive childlike crayon illustration. Warm off-white background with subtle paper grain and a strict grid layout defined by thin black frame lines and vertical divisions. At the top, an oversized tightly kerned bold black word in heavy grotesque sans-serif reads “BRAVE.” The center features a naive crayon drawing of a large sun and abstract landscape, made with thick wax strokes in saturated yellow, red, sky blue, and grass green, with uneven pressure and energetic scribbles. The drawing overlaps the grid and typography. Handwritten crayon text near it reads “dream big.”At the bottom, another oversized bold word reads “IMAGINE.” Between the illustration and lower headline, a narrow vertical column of small clean sans-serif text states: “Creative practice lives between structure and instinct. Design is not perfection — it is expression.” Footer in small uppercase sans-serif: “ARCHIVE / PRINT / POSTER / STUDIO / WORKS.”Brutalist black typography meets playful crayon art, flat colors, strong contrast, subtle paper texture — structured yet expressive and slightly rebellious.\*"

"\*Large-format contemporary magazine cover combining bold naive painting with oversized modern typography. Background features a hand-painted still life of oversized seasonal vegetables — heirloom tomatoes, sliced purple cabbage, yellow squash, green zucchini, and red chili peppers — rendered in simplified flat shapes with thick matte acrylic texture and visible brushstrokes. The palette is saturated yet slightly muted, including dusty coral, mustard, sage green, deep plum, and soft cream tones. At the top, an oversized lowercase white wordmark in a heavy rounded sans-serif reads “harbor,” tightly spaced and spanning nearly the full width. Beneath it, a small clean sans-serif line reads: “design · culture · craft · studio · print · living.” A bold corner badge states “SPECIAL EDITION.” At the bottom, an organic cream-colored bubble contains the teaser text: “a handmade toolkit, slow projects, and a fold-out seasonal guide.”Clean editorial hierarchy, strong contrast between typography and painterly background, textured brush detail, modern independent print aesthetic — naive art combined with confident contemporary graphic design.\*"


\*\*Prompt Structure:\*\*

1\. Format and scale (poster, cover, large-format)
2\. Background / visual layer A
3\. Graphic or image layer B
4\. Typographic hierarchy (what is the largest?)
5\. Text placement logic (top, center, edge, curved, cropped)
6\. Contrast between layers
7\. Overall compositional mechanics

Recraft builds the layout instead of randomly placing elements.

\*\*Practical tip\*\*: for hybrid posters (photo + graphic):

Define each visual language separately, then describe how they interact.

\## Graphic Design: Posters vol. 2

\*\*Examples\*\*

Experimental Graphic Poster

![Playful glossy 3D poster.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/graphic-design-posters-exp1-1.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=783fecb570155468cdce43882cb06df3)![Promotional poster.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/graphic-design-posters-exp1-2.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=f4889535988ecbe1bfd8446ca8e38b28)![Contemporary fashion campaign poster.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/graphic-design-posters-exp1-3.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=fe23e297bbd7d4f3ff1fac9f6a3ba25c)

"\*Playful glossy 3D poster featuring three iconic rubber ducks styled as high-fashion characters in a strong centered vertical stack. Each duck wears an exaggerated outfit: oversized futuristic sunglasses with a metallic puffer vest, a dramatic feathered collar with chunky jewelry, and a sporty streetwear hoodie with tiny sneakers. Smooth semi-gloss rubber texture, soft studio reflections, rounded toy-like proportions, subtle highlights, and confident minimal expressions. Background is flat saturated baby-blue. Layered 3D sticker elements float around the ducks — chunky stars, lightning bolts, smiley faces, safety pins, hearts, speech bubbles, and glossy tags in hot pink, yellow, cobalt, and white — creating diagonal movement and depth.Typography is bold and dynamic: inflated glossy hot-pink bubble letters reading “DUCK MODE” arch across the top, slightly overlapping the upper duck. A large diagonal shiny cobalt 3D headline “RECRAFT SPLASH” cuts across the lower half. A tilted oval sticker reads “LIMITED DROP.” Below the stack, small clean sans-serif text says “Designed for loud personalities.” In the corner, a glossy red capsule logo reads “QUACK CLUB — Tokyo / Milan.” High-fashion parody meets collectible toy culture, saturated, sculptural, poster-ready.\*"

"\*Promotional poster for “System Lab” designer tableware collection from Formgrid Studio featuring sculptural ceramics and typography in a fresh grass-green tone — slightly acidic but not neon — set against a deep matte black background for sharp modern contrast. Centered symmetrical composition, photographed straight-on with a slightly high angle, soft diffused studio lighting from the top-front creating smooth highlights and gentle shadows.An extremely large bold condensed sans-serif headline “DESIGNER TABLEWARE” spans the full width at the top, edge-to-edge and slightly cropped, with smaller “VAJILLA DE DISEÑO” beneath. Oversized “SYSTEM LAB” overlays the center with smaller “LABORATORIO DE FORMAS” below. Vertical left text reads “EDITION 05 / EDICIÓN 05.” Bottom-right rounded rectangle contains “360° COMPOSITION / 360° COMPOSICIÓN,” with “FORMGRID STUDIO / ESTUDIO FORMGRID” nearby.The arrangement includes a sculptural low table with S-shaped legs and circular cutout shelf, an organic shallow platter with five petal-like lobes, a tall dual-handle glossy pitcher, and three matte bowls stacked in descending size. Minimalist industrial aesthetic, bold hierarchy, acid-leaning green on black, clean contemporary poster design.\*"

"\*Contemporary fashion campaign poster blending realistic street photography with hyper-detailed 3D characters and bold experimental typography. A wide pedestrian crosswalk in a modern city under soft daylight — detailed asphalt, crisp zebra stripes, natural shadows, cinematic grading. A young avant-garde stylist walks confidently left to right, slightly off-center, captured in documentary realism with wind in the hair and a layered experimental outfit of saturated tones, technical fabrics, metallic accents, and structured tailoring.Plush-tech hybrid mascots move in the same direction along the stripes — one leading, one strong in the foreground, two behind at staggered depths — with ultra-real fur, glossy plastic and chrome details, and precise shadows aligned to the crosswalk. Seamless blend of real photography and CGI.Bold layered typography: “URBAN PARADE” oversized across the top, partially cropped; “NEW SEASON” and “COLLECTIVE DROP” as strong blocks on the right; date “04.12 — 05.08” in perspective along a stripe; curved tagline “Walk your story forward.” near the ground; compact “CITYFORM LAB” logo in the corner. Add large glossy sticker graphics — circular “EXCLUSIVE DROP,” rectangular “STREET EDITION,” diagonal “LIMITED RELEASE.” Strong asymmetry, unified motion, high-fashion meets collectible culture, dynamic editorial poster energy.\*"


\*\*Prompt Structure:\*\*

1\. Core scene or subject
2\. Additional 3D / graphic elements
3\. Typographic dynamics (overlap, perspective, layering)
4\. Color energy
5\. Depth and spatial layering
6\. Overall movement and tension

\*\*\*Logic:\*\*\*

Define layers first → then describe interaction.

![Image](https://mintcdn.com/recraft/9CZVLYhziIMlVGED/images/image-16.png?fit=max&auto=format&n=9CZVLYhziIMlVGED&q=85&s=6b24d6021dd4a0ba8d5aaeaf3a255138)

\## Illustration Strength

Recraft V4 is highly capable in stylized and narrative illustration.

\*\*Examples\*\*

![Digital anime-style.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/illustration-exp1-1.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=3cfbc058c6ded42ca5fe647f27813026)![Сolorful illustration.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/illustration-exp1-2.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=58d958c4bb92b074e5dd2615b906bc4b)![Bold stylized illustration.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/illustration-exp1-3.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=8a94b82caff8c74492940b56368856b3)

"\*Digital anime-style chest-up portrait on a solid black background, centered. An androgynous young teen with cool pale skin and soft lavender blush, short choppy black hair with subtle teal highlights and small metallic clips. Large grey-blue eyes with bright highlights, thin straight brows, small muted rose lips, calm introspective expression.Wearing a modern sailor-inspired top in deep charcoal with a subtle geometric pattern, off-white collar trimmed in cobalt, and an oversized cobalt bow. Ten stylized koi fish in saturated reds, blues, gold, pink, white, and black swirl around the head and shoulders, overlapping the hair and partially crossing the face; one bold black-and-gold koi curves across the lower face. High contrast, flat lighting with soft shading, clean edges, dreamlike and contemporary mood.\*"

"\*Сolorful illustration of a creative art studio filled with instruments and posters, but with a slightly more painterly, hand-drawn feel rather than clean vector graphics. A short-haired woman with visible arm tattoos and round glasses gently holds a large fluffy dog. She wears a loose white shirt and a dark hat. Around her are guitars, vinyl records, speakers, cables, sketchbooks, and framed portraits of abstract animal faces layered on the walls.Warm mustard, brown, terracotta, and burnt orange palette with soft tonal variation. Forms remain simplified and graphic, but edges are slightly irregular, as if drawn with ink and brush. Add a very subtle, delicate paper-like grain and gentle watercolor-style shading to avoid a flat vector look. Soft layered color transitions, light uneven brush marks, and faint depth in shadows. Cozy, artistic, intimate atmosphere — playful yet slightly textured, warm, and handcrafted rather than digitally perfect.\*"

"\*Bold stylized illustration of an androgynous basketball player mid-dribble in extreme exaggerated perspective, with disproportionately enormous legs dominating the composition and oversized sneakers pushed dramatically toward the viewer. The entire figure is fully visible and fills the frame, but the legs occupy most of the visual space, making the torso appear smaller above them. Strong foreshortening and dynamic twisting posture.Color palette taken from the reference: saturated lemon-yellow ground, intense sky-blue background, vivid orange-red sun accent, bright acid neon green sneakers as the dominant highlight color, lavender-purple laces, soft beige midsole details, charcoal-grey outsole, crisp white socks, and bold black outlines. High-contrast flat graphic blocks.Add smooth gradients across the massive legs and shoes for volume, subtle airbrushed shading beneath the sneakers, and a delicate speckled grain overlay to avoid a clean vector look. Slightly irregular hand-drawn outlines remain visible. Energetic, surreal, contemporary poster aesthetic with bold acid green focus and exaggerated proportions.\*"


\*\*Prompt Structure:\*\*

1\. Drawing style (anime, painterly, graphic, exaggerated)
2\. Main character and pose
3\. Line behavior (clean, irregular, bold)
4\. Color logic
5\. Surface treatment (flat, grain, watercolor shading)
6\. Depth structure (gradients, airbrush, shadow softness)
7\. Emotional tone

\
\*\*\*Logic:\*\*\*

You define drawing logic, not camera logic.

![Image](https://mintcdn.com/recraft/9CZVLYhziIMlVGED/images/image-17.png?fit=max&auto=format&n=9CZVLYhziIMlVGED&q=85&s=9028fca4b89cb59babf34cd97ccf6f25)

\## 3D & Dimensional Visual Strength

Recraft V4 handles dimensional form with strong material and lighting awareness.

\*\*Examples\*\*

![Ultra-detailed stylized 3D render.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/dimensional-exp1-1.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=15f57e5636c4ce51600924c2de5c9df9)![Cinematic stylized 3D night.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/dimensional-exp1-2.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=3a98698b8868f8dd6e988fc0a81a24cf)![Digital 3D fashion lookbook render.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/dimensional-exp1-3.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=f06fbe1b91271b8cf569fb54b0219525)

"\*Ultra-detailed stylized 3D render in a high-end designer toy aesthetic from a top-down bird’s-eye view. A small sculptural character with rounded geometric anatomy and ultra-smooth semi-matte resin surfaces reclines diagonally on a large flowing chaise lounge with an integrated wicker detail, creating a strong graphic composition.The look is extravagant: lavender and powder-blue layered shoulders, dusty-coral torso, mint-green glossy knee-high boots, chunky pastel sneakers in mint, aqua and coral, plus oversized bangles, elongated earrings, a woven beige conical hat, tinted glasses, and a flowing ribbon accent. Around the chaise are a slate-blue side table, a peach ceramic vase with pastel branches, blush flowers, a folded parasol casting a radial shadow, and a woven rug.Soft peach, lavender, dusty coral, mint, wicker brown and blush tones dominate. Bright directional daylight creates long defined shadows from above, preserving a clean, sculptural, pastel-balanced editorial 3D still life.\*"

"\*Cinematic stylized 3D night scene with strong depth and contrast, rendered in ultra-smooth plastic-like materials with refined matte surfaces and gentle subsurface scattering. A small stylized girl with an oversized head rides a skateboard through a dim urban alley. She has a playful, slightly mischievous expression, heavy-lidded minimal eyes, rounded proportions, two bouncing hair puffs, and a tiny snug beanie. She wears an oversized puffy jacket, loose wide-leg pants, and chunky sneakers in brighter electric blue and luminous cobalt tones, clearly separated from the darker surroundings.The background is deep and moody — navy-to-indigo gradient sky, shadowed brick walls, posters fading into darkness. The alley recedes with clear atmospheric perspective: sharper foreground, cooler midground, darker softly blurred background. Dry tiled pavement with subtle reflections, no rain or wet surfaces. Soft distant neon glow\\.Lighting is cinematic: strong cool key light from above-right, soft side fill, and a clean rim light outlining her silhouette. Visible cast shadows from the skateboard and legs enhance depth. Low eye-level camera angle, shallow depth of field, modern animated short-film aesthetic with clear spatial layering and dimensional contrast.\*"

"Digital 3D fashion lookbook render featuring six anthropomorphic characters arranged in a clean 3 × 2 grid on a single solid light grey background and matching floor, figures slightly smaller in frame with generous negative space, soft frontal diffused lighting and gentle grounded shadows. All share identical minimalist faces with very small glossy bead-like black eyes, no pupils, no nose, and a thin minimal mouth line. Chibi proportions with oversized heads and compact bodies, matte plush materials with subtle metallic shine on layered chains. All styled as contemporary rappers with oversized silhouettes and bold streetwear attitude: a cream-white hare in an electric orange tee and sage varsity jacket with gold chains; a coral horned creature in a cropped white bomber over an apricot hoodie with beige cargos and a heavy chain; a charcoal raccoon in a moss oversized hoodie with layered chains and relaxed trousers; a lavender cat in an emerald oversized coat over a terracotta tee with wide charcoal pants; a black panther with subtle velvety fur wearing a cobalt hoodie and acid yellow crossbody bag with wide beige pants and platform sneakers; and a sand-colored fox in an ivory color-block jacket over a dusty-orange shirt with layered chains and white sneakers. Bright saturated palette, cohesive fashion-forward hip-hop collectible aesthetic."


\*\*Prompt Structure:\*\*

1\. Render type (designer toy, cinematic 3D, lookbook)
2\. Form and proportion system
3\. Material behavior (matte, gloss, plastic, fabric)
4\. Spatial environment (floor, background, atmosphere)
5\. Lighting direction and intensity
6\. Camera angle and depth
7\. Color system

\*\*\*Logic:\*\*\*

If you only describe the object, the result is interpretive.\
If you define the physical system, the result becomes controlled

![Image](https://mintcdn.com/recraft/9CZVLYhziIMlVGED/images/image-18.png?fit=max&auto=format&n=9CZVLYhziIMlVGED&q=85&s=9bbffc6ad5b00a27b2e0aeaee86f9a72)

\## Working with Text

Recraft V4 handles text better than most generative systems, especially when you describe hierarchy.

\*\*Examples\*\*

![Bold urban lifestyle.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/working-with-text-exp1-1.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=ca7908ab98ebb62d71bf3a51c0bcd32e)![Bold avant-garde café menu.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/working-with-text-exp1-2.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=5beaf4fe22eb2815d37e3957dbf03d4c)![Contemporary premium food.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/working-with-text-exp1-3.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=17917b9599d432c3bd7ab56f77272254)

"\*Bold urban lifestyle editorial featuring three avant-garde middle-aged men of distinctly different ethnic and visual backgrounds, with radically unique faces — varied bone structures, skin tones, wrinkles, scars, facial hair, asymmetry — real, unpolished, lived-in presence with no harmony or idealization. They sit close together at a small city street café table: one mid-bite holding food casually, one making a clear assertive hand gesture toward the camera, the third slightly back, calm and observant. All maintain direct or near-direct eye contact, confident, grounded, unapologetic.Shot at eye level in natural daylight with a documentary street-photography feel, tight framing on faces, hands, and table, honest skin texture and imperfections visible, softly blurred background. Controlled color palette with deep black base, clean white contrast, and one single bold accent color (cobalt blue, emerald green, or burnt orange), flat high-contrast tones only.Oversized experimental editorial typography overlaps the image without covering faces, using one or two short manifesto-style statements such as “NO RULES,” “CULTURE FIRST,” or “NOT FOR EVERYONE.” Multiple bold sticker-style graphic elements in the accent color visually connect the trio. Mood: raw contemporary street culture meets high-fashion editorial — confident, intelligent, manifesto-like, not made to please, not for everyone.\*"

"\*Bold avant-garde café menu design in a luxury editorial style, photographed in an elevated, design-forward table setting. A large-format folded or partially unfolded menu card dominates the frame as the clear focal point, printed on thick premium matte paper with crisp edges and precise folds, placed on polished stone, lacquered wood, or tinted glass. The headline “VERA MENU” appears oversized and highly legible in an expressive high-fashion sans-serif with sculptural yet clean letterforms. The content is grammatically correct, clearly structured, and professionally written in proper English, with large evenly spaced typography and no filler text: sections such as ESPRESSO (Single-origin espresso, Double espresso), BREAKFAST (Sourdough toast with cultured butter, Soft scrambled eggs with herbs), and DESSERTS (Dark chocolate tart, Vanilla custard with seasonal fruit).Use a vivid high-impact palette — saturated coral, electric pink, deep cobalt blue, warm orange, and creamy off-white — with strong color blocking only, no gradients, and a disciplined typographic hierarchy. Surround the menu with minimal sculptural avant-garde cutlery featuring exaggerated forms and refined finishes. Soft directional editorial lighting creates subtle shadows while keeping the menu surface and typography crisp and fully readable. Overall impression: avant-garde luxury dining where graphic design meets contemporary art — bold, refined, collectible, no real brands, no clutter, focused on scale, clarity, and sculptural composition.\*"

"\*Contemporary premium food packaging photographed in soft natural daylight, stacked rectangular matte cardboard boxes with sharp edges held slightly off-balance in human hands for a natural feel. Each box is a single refined color — deep forest green, warm cream, muted sky blue, soft clay beige — creating strong contrast. Bold oversized sans-serif brand name in dark ink is confidently cropped by the edges, with one short supporting line only, e.g., “VERA — Artisanal foods crafted slowly.” All typography is large, clear, and fully legible, no micro text or decorative clutter. A minimal abstract organic symbol (seed, leaf, or stone shape) appears flat and slightly irregular on the lid.One box is partially open, revealing two or three small clear glass jars with matte metal lids and simple bold labels containing gourmet spreads like pâté or eggplant caviar, rich natural textures visible. Matte paper texture with subtle grain, crisp printing, clean background, shallow depth of field. Modern, warm, premium editorial aesthetic — tactile, calm, design-forward, and quietly luxurious with intentional clarity in every element.\*"


\*\*Prompt Structure:\*\*

1\. Format type (menu, editorial, packaging, poster)
2\. Primary headline (size + placement)
3\. Secondary hierarchy
4\. Color blocking logic
5\. Print surface and material
6\. Spatial placement
7\. Readability constraints
8\. Place all required text in quotation marks

\*\*\*Logic:\*\*\*

Define the typographic system — not just the phrase.

Quoted text ensures precise text rendering within the layout.

![Image](https://mintcdn.com/recraft/6xCC0XG1tKspusvG/images/image-20.png?fit=max&auto=format&n=6xCC0XG1tKspusvG&q=85&s=f38a760cefa14f82436aa41402398157)

\## Designer Photorealism

Recraft’s realism feels curated rather than chaotic.

\*\*Examples\*\*

![Ultra high-fashion.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/photorealism-exp1-1.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=142a1f8230f741e382eebc7a34d9a768)![Cinematic fashion editorial.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/photorealism-exp1-2.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=7751af757db453fa295aafdab5e0fe94)![A cinematic editorial photograph.](https://mintcdn.com/recraft/4hPmisnKJ35AqXgi/prompt-engineering-guide/images/photorealism-exp1-3.png?fit=max&auto=format&n=4hPmisnKJ35AqXgi&q=85&s=6fc8045e7f65a9907b0d2fe6d8a422a0)

"\*Ultra high-fashion avant-garde close-up editorial portrait set in a cold cinematic studio. Deep monochrome cobalt-blue foggy background with a smooth gradient haze and soft atmospheric depth, minimal environment with no visible edges. The single character appears sculptural and iconic, with realistic natural skin texture — subtle pores, matte finish, sharp cheekbones, icy blue eyes, and an emotionless expression. Hair is platinum-blonde in a sharp geometric bob. They wear a dramatic couture piece featuring an oversized architectural ruffled collar made of translucent electric-blue tulle and layered organza, forming wave-like sculptural shapes around the neck. Makeup is minimal with muted burgundy lips and a soft powder finish.Strong long-exposure motion blur creates flowing trails and ghosted silhouettes behind the body and collar, while the face remains perfectly sharp. Clean, refined aesthetic with smooth gradients, no grain or painterly texture, high-end studio lighting. Cinematic, museum-like atmosphere with surreal quiet tension — modern couture captured mid-motion.\*"

"\*Cinematic fashion editorial photograph captured outdoors during golden hour, focused on wind, motion, and atmosphere. The camera sits very low to the ground, almost inside tall wild grass, shooting upward to create an immersive, dynamic perspective. Softly blurred wheat-like plants dominate the foreground, forming organic diagonal lines that naturally frame the imageA young woman stands above the camera in a relaxed three-quarter pose, body slightly turned away while her head turns back toward the lens with direct eye contact, caught mid-movement rather than staged. She wears an oversized red hooded garment made of lightweight flowing nylon, voluminous and dramatic with visible drawstrings. Strong natural wind inflates and wraps the fabric around her body while her hair blows across her face, partially obscuring it.Warm golden-hour light casts a soft glow, with the sky fading from warm yellow near the horizon to gentle blue above. The setting is an open untamed field with no urban elements. Shallow depth of field keeps her face sharp while foreground grass and distant background remain blurred. Poetic, powerful, and alive — raw fashion captured in real wind, no studio lighting or artificial posing.\*"

"\*A cinematic editorial photograph of a black man standing still on a busy crossing platform while crowds rush past her in heavy motion blur; he remains sharp and calm as people dissolve into streaks of movement; slow shutter effect, long exposure photography; muted urban color palette, soft industrial lighting, concrete textures, metro train in background; feeling of isolation, introspection, emotional contrast between chaos and stillness; contemporary fashion editorial mood, minimal styling, natural expression; shallow depth of field, cinematic framing, realism, high detail.\*"


\*\*Practical tip:\*\*\
\
Avoid stacking dramatic or evaluative adjectives.Precision and concrete description produce more reliable results than exaggeration.\
Prompt structure is flexible. The sequence of elements can be adjusted to change emphasis and influence model behavior. Elements placed earlier in the prompt receive higher priority and may shape the result more strongly.\
Common structural patterns include:

\\* Scene / subject → style → details(prioritizes composition and content before aesthetic treatment)
\\* Style → scene / subject → details(prioritizes visual language and overall aesthetic before composition)

Both approaches are valid. Choose the structure based on which aspect should dominate the output.

![Image](https://mintcdn.com/recraft/9CZVLYhziIMlVGED/images/image-19.png?fit=max&auto=format&n=9CZVLYhziIMlVGED&q=85&s=f13b8a249209f44247b880aa803b8640)

\*\*How to Apply This in Real\*\*

\*\*Branding:\*\*

Geometry → hierarchy → spacing → scalability → constraints

\*\*Fashion / Campaign:\*\*

Light → material → framing → simplified background

\*\*Vectors:\*\*

Silhouette → shape clarity → system consistency

\*\*Exploration:\*\*

3–6 word prompts → generate variations

\*\*Posters:\*\*

Grid → margins → text size relationships

\*\*The Core Principle\*\*

\*\*Recraft V4 adapts to your level of clarity\*\* \*\*\|\*\* Short prompts → model designs with you.\
Long prompts → model executes your architecture.\
\
\*\*The model is strong in both modes \|\*\* Prompt engineering here is not about verbosity. \
It’s about defining structure, surface, space, hierarchy, and control.\
\
The more intentional your visual thinking, the more consistent and refined your results.

Built with \[Mintlify\](https://mintlify.com).