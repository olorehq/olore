# Annotations Extensibility

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

The Browser Annotation API lets your website customize what people select,
what context accompanies their feedback, and which controls they use to preview
changes before sending an annotation to ChatGPT.

In ChatGPT Enterprise and Edu workspaces, an admin must allow **Site
  annotation customizations** through workspace policy.

[Browser annotations](https://learn.chatgpt.com/docs/browser?surface=app#app-comment-on-the-page) work on your site without any code changes.
People can select part of a page, add a comment, and send it in Context to Codex or ChatGPT Work.

As a developer, you can use the Browser Annotation API to provide context or controls specific to your application. For
example, you can attach previews for component variants in a design system preview for developers to know how to update the components on a website.

To get help understanding the Browser Annotation API or adding annotation support to your website, install the Annotations Extensibility plugin.

[Install the Annotations Extensibility plugin](https://chatgpt.com/plugins/Plugin_94f13f4285908191bb882d31b1ffc59e)




**Try it**

See the Browser Annotation API in action on this guide.

1. Open this page in ChatGPT's built-in browser.
2. Try opening the suggested prompt that will appear in this card.
3. Enter [Annotation mode](https://learn.chatgpt.com/docs/browser?surface=app#app-comment-on-the-page), then select the table below or a code sample to switch between predefined layouts and themes.
4. You can still annotate any item on the page and see default annotation behavior.



  [Open in ChatGPT's browser](https://chatgpt.com/codex/deeplink?url=https%3A%2F%2Flearn.chatgpt.com%2Fdocs%2Fannotations-extensibility)
  
  










## Choose what to customize

Start with the integration that fits your website:




| Goal                                                             | Integration                                                    |
| ---------------------------------------------------------------- | -------------------------------------------------------------- |
| Make a card or other group of elements selectable as one object  | [Selection targets](#customize-selection-targets)              |
| Let people select a phrase or sentence                           | [Text selection containers](#enable-text-selection)            |
| Include additional context with a selection                      | [Selection metadata](#add-context-to-a-selection)              |
| Open an annotation from your own button with a suggested comment | [Annotation requests](#open-an-annotation-from-your-website)   |
| Request feedback on an exact passage from your own UI            | [Text-range requests](#request-an-annotation-for-a-text-range) |
| Show advanced controls when an annotation opens                  | [Editor defaults](#choose-the-editors-default-mode)            |
| Preview application properties or collect choices                | [Custom controls](#add-custom-controls)                        |
| Select individual objects drawn inside a canvas                  | [Annotation surfaces](#make-canvas-objects-selectable)         |
| Turn Annotation mode on or off from your site                    | [Annotation mode controls](#control-annotation-mode)           |




This guide targets the DevDay 2026 release of the ChatGPT desktop app and later.
The JavaScript API is available through `document.oai.annotation` in the app's
built-in browser, on secure, top-level pages such as HTTPS or localhost. When
enabled, the browser installs it before your page's scripts run. Feature-detect
each method to support older or unsupported browsers, then initialize your
integration once its DOM elements exist. No readiness event or polling is needed.

API methods return synchronously, and registration handles are ready to use
immediately. The browser can finish loading the annotation editor afterward.
A surface's `hitTest` callback can return a promise.

## Customize selection targets

By default, Annotation mode selects elements from the page's DOM, favoring
targets such as text, images, and controls. To make a larger object selectable,
mark its containing region with `oai-annotation-container` and its selectable
descendants with `oai-annotatable`.

This example makes a chart card selectable as one object:

```html
<section oai-annotation-container>
  <article id="chart-card" oai-annotatable="Q3 Revenue">
    <h2>Q3 Revenue</h2>
    <p>$120,000 this quarter</p>
    <button type="button">More info</button>
  </article>
</section>
```

Pointing anywhere within the card highlights the entire card. The optional
`oai-annotatable` value gives the object a name shown to the user and the model.
Choose names that distinguish nearby objects, or omit the value.

The container defines where these selection rules apply. An
`oai-annotatable` attribute on its own doesn't change selection behavior.
Within a container, the browser selects the nearest marked target containing
the element under the pointer. Nested containers use the nearest container.
Unmarked areas inside a container create a webpage annotation; areas outside
all containers keep the default behavior.

## Enable text selection

Add `oai-annotation-container-text` to a region to let people drag to select text
during Annotation mode. The attribute doesn't need a value:

```html
<article oai-annotation-container-text>
  <h2>Design guidelines</h2>
  <p>Use consistent spacing between related components.</p>
  <p>Leave more space between separate groups.</p>
</article>
```

Releasing a nonempty selection opens the text annotation editor with the
selected range and its context. Clicking without selecting text doesn't create
an annotation. **Escape** or a canceled gesture cancels the selection.

The nearest text or DOM selection container determines how a gesture begins.
Text containers don't use `oai-annotatable` markers for element picking. Nest
an `oai-annotation-container` to restore element picking, or a text container to
restore text selection. If both attributes are on one element, text selection
takes precedence.

Text selection follows the page's normal selection rules and can extend beyond
the starting container. A container doesn't clip the range or enable selection
inside an iframe. Text fields remain selectable, but ordinary page clicks and
native actions on controls remain blocked during Annotation mode. Explicit
`request()` calls keep their existing behavior.

Text selection containers take effect only during Annotation mode when the
  site annotation capability and per-site setting are enabled.

## Add context to a selection

Add `oai-annotation-metadata` to a marked target to include context that may not
be visible on the page. For example, a fictional contact row can include an
email address for a request to draft an email:

```html
<section oai-annotation-container>
  <div
    id="contact-row"
    oai-annotatable="Alex Morgan"
    oai-annotation-metadata='{"email":"alex@example.com"}'
  >
    <div>Alex Morgan</div>
    <div>Project lead</div>
  </div>
</section>
```

<div
  id="try-annotation-metadata"
  className="annotation-request-demo not-prose"
  data-annotation-example="metadata"
  hidden
>
  **Try it**
  

    <section oai-annotation-container>
      <div
        className="annotation-contact-preview"
        data-example-target
        oai-annotatable="Alex Morgan"
        oai-annotation-metadata='{"email":"alex@example.com"}'
      >
        **Alex Morgan**
        
Project lead

      

    </section>
    

      Select the contact in Annotation mode to see the email address included as
      context.
    

  




Selecting either line selects the entire row. The metadata appears with the
annotation and accompanies it in the conversation. Include only context you
intend to share with both the user and the model. Sending an email would still
require a connected email tool.

Use a small, flat JSON object with these limits:

- Up to six properties, with string, finite number, boolean, or `null` values.
- Keys up to 64 characters and string values up to 256 characters.
- Up to 2,048 bytes for the serialized object.

Keys must start with an ASCII letter and contain only ASCII letters, digits,
spaces, underscores, or hyphens. Use single spaces between words. Nested
objects and arrays aren't supported. The browser ignores invalid metadata.

You can also provide metadata through `request()` or a surface's `hitTest`
result.

## Open an annotation from your website

Call `document.oai.annotation.request(target, options)` directly from a user
interaction, such as a button press. The target can be a connected HTML element
within the visible area of the current document or a
[DOM `Range`](#request-an-annotation-for-a-text-range). It doesn't need annotation
attributes. Virtual object IDs aren't supported.

Site-initiated requests may require user permission; users can re-enable blocked
annotation features under **Site tools > Annotation features**.

This example opens an annotation on a paragraph without selection attributes.
Run the script after both elements exist:

```html
<p id="delivery-summary">
  Standard delivery takes three to five business days.
</p>
<button id="discuss-delivery" type="button" hidden>Explain more</button>
```

```javascript
const summary = /** @type {HTMLElement} */ (
  document.getElementById("delivery-summary")
);
const button = /** @type {HTMLButtonElement} */ (
  document.getElementById("discuss-delivery")
);

button.hidden = typeof document.oai?.annotation?.request !== "function";

button.addEventListener("click", () => {
  const annotation = document.oai?.annotation;
  if (typeof annotation?.request !== "function") return;

  annotation.request(summary, {
    initialComment: "Explain this delivery estimate.",
  });
});
```


Selecting **Explain more** asks the browser to open an annotation with the
paragraph selected and an editable comment. The person can edit, save, and send it with
their message. Opening an annotation doesn't send a message to ChatGPT; only
the user can submit it.

<div
  id="try-annotation-request"
  className="annotation-request-demo not-prose"
  data-annotation-request-demo
  hidden
>
  **Try it**
  

    

      Standard delivery takes three to five business days.
    

    <button
      type="button"
      className="annotation-prompt-button"
      data-annotation-request-button
      data-prompt="Explain this delivery estimate."
    >
      Explain more
    </button>
    
    <p
      className="annotation-try-it-hint"
      data-annotation-request-feedback
      role="status"
      aria-live="polite"
    >

  




Keep the call within the active user interaction. Awaiting a network request
first can lose that interaction.

The optional second argument supports these fields:

| Option                | Behavior                                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                | Use `"advanced"` to open advanced controls for an element, or `"default"` to use the default editor behavior. Defaults to `"default"`. Custom controls can still open with `"default"`; see [Editor defaults](#choose-the-editors-default-mode). Text ranges support only `"default"`. |
| `enterAnnotationMode` | Set to `true` to enter Annotation mode and remain in it after canceling or sending the annotation.                                                                                                                                                                                     |
| `omitScreenshot`      | Set to `true` to omit the automatic screenshot for this annotation. Defaults to `false`, which preserves normal screenshot behavior. Applies to element and text-range requests.                                                                                                       |
| `metadata`            | Valid, nonempty metadata replaces the target's HTML metadata for this request. This option is ignored for text ranges and when the target element is inside a shadow DOM.                                                                                                              |
| `initialComment`      | Supplies an editable comment, up to 240 UTF-16 code units.                                                                                                                                                                                                                             |

`request()` returns an object with an `accepted` boolean. Check
`result.accepted`, not the result object, to see whether the browser received
and validated the request. It doesn't confirm that the editor opened or that
the person saved or sent an annotation.

While the editor loads, the browser can hold one accepted request. It can
decline another while a request is pending, an editor is open, or ChatGPT is
controlling the browser.

### Request an annotation for a text range

Pass a DOM `Range` to request feedback on a passage without changing the browser's
text selection. This example selects only the highlighted phrase; it doesn't need
an `oai-annotation-container-text` attribute:

```html
<p>
  Your trial includes full access for <mark id="draft-passage">14 days</mark>.
</p>
<button id="discuss-passage" type="button" hidden>
  Ask about highlighted text
</button>
```

Run this script after both elements exist:

```javascript
const passage = /** @type {HTMLElement} */ (
  document.getElementById("draft-passage")
);
const button = /** @type {HTMLButtonElement} */ (
  document.getElementById("discuss-passage")
);

button.hidden = typeof document.oai?.annotation?.request !== "function";

button.addEventListener("click", () => {
  const annotation = document.oai?.annotation;
  if (typeof annotation?.request !== "function") return;

  const range = document.createRange();
  range.selectNodeContents(passage);
  annotation.request(range, {
    initialComment: "Explain when this trial ends.",
  });
});
```


<div
  id="try-annotation-text-range"
  className="annotation-request-demo not-prose"
  data-annotation-example="text-range"
  hidden
>
  **Try it**
  

    

      Your trial includes full access for 
      <mark data-example-target>14 days</mark>.
    

    

      Open an annotation on just the highlighted words.
    

    <button
      type="button"
      className="annotation-prompt-button"
      data-example-request
      data-prompt="Explain when this trial ends."
    >
      Ask about highlighted text
    </button>
    
    <p
      className="annotation-try-it-hint"
      data-example-feedback
      role="status"
      aria-live="polite"
    >

  




The range must contain nonempty visible text in the current document, with at
least part of the selection in the visible page area. It can contain at most
20,000 UTF-16 code units. Collapsed ranges, whitespace-only text, hidden selected
text, and ranges in closed shadow roots aren't supported.

Text-range requests use only the default text editor. A request with
`mode: "advanced"` is rejected, and request metadata is ignored. Keep the target
text available while an accepted request waits for the editor: the browser
checks the range again before opening it. Text selection containers separately
enable people to drag to select text during Annotation mode.

## Choose the editor's default mode

To show advanced controls immediately for annotations opened through the
browser's selection UI, add this tag to your page's `<head>`:

```html
<meta name="oai-annotation-editor-default-mode" content="advanced" />
```

For annotations opened from your own UI, pass `{ mode: "advanced" }` to
`request()`. Use `mode: "default"`, or omit it, for the default editor behavior.
The page's meta setting doesn't override this request option. Default mode
doesn't guarantee a comment-only editor: custom controls with proposed starting
values, or controls that omit `currentValue`, can open the controls editor.

Manual **Adjust**, collapse, and **Option-click** controls are available only in
Codex or on localhost. On hosted sites in ChatGPT, registered custom controls
appear automatically without an **Adjust** or collapse button. Page-requested
advanced mode still works there.

## Add custom controls

Use `registerControls()` to associate annotation controls with one or more DOM
elements. Controls can preview application properties, such as a spacing token,
or collect choices to include with a request, such as an email tone.

### Preview a shared spacing token

Both cards in this example use the same CSS property. Register the controls on
the cards directly; selection attributes aren't required:

```html
<style>
  #component-preview {
    --card-padding: 16px;
  }

  .preview-card {
    padding: var(--card-padding);
    border: 1px solid #d1d5db;
  }
</style>

<section id="component-preview">
  <article class="preview-card">Profile card</article>
  <article class="preview-card">Summary card</article>
</section>
```

Run this script after creating the preview:

```javascript
const preview = /** @type {HTMLElement} */ (
  document.getElementById("component-preview")
);
const annotation = document.oai?.annotation;

/** @param {CustomEvent<{ callback: string; value: number | string }>} event */
function previewSpacing(event) {
  const { callback, value } = event.detail;
  if (callback === "setCardPadding") {
    preview.style.setProperty("--card-padding", `${value}px`);
  }
}

/** @type {{ dispose(): void } | undefined} */
let registration;
if (typeof annotation?.registerControls === "function") {
  preview.addEventListener("oaiannotationcontrolchange", previewSpacing);
  registration = annotation.registerControls({
    targets: preview.querySelectorAll(".preview-card"),
    controlsHeading: "Card spacing",
    controlsMode: "replace",
    controls: [
      {
        type: "range",
        label: "Card padding (pixels)",
        callback: "setCardPadding",
        reference: "--card-padding",
        min: 8,
        max: 32,
        step: 4,
        currentValue: 16,
      },
    ],
  });
}

function disposeAnnotationControls() {
  preview.style.removeProperty("--card-padding");
  registration?.dispose();
  preview.removeEventListener("oaiannotationcontrolchange", previewSpacing);
}
```


<div
  id="try-annotation-spacing"
  className="annotation-request-demo not-prose"
  data-annotation-example="spacing"
  hidden
>
  **Try it**
  

    **Card padding (pixels)**
    <div
      className="annotation-spacing-preview"
      data-example-preview
      oai-annotation-container
    >
      <article data-example-target oai-annotatable="">
        Profile card
      </article>
      <article data-example-target oai-annotatable="">
        Summary card
      </article>
    

    

      Select either card in Annotation mode, then change Card padding (pixels).
      Select Adjust if needed. Both cards update together.
    

  




Annotate either card and change **Card padding (pixels)** from 16 to 24. On
hosted sites in ChatGPT, the controls appear automatically; in Codex or on
localhost, select **Adjust** if needed. Both cards update. The annotation records the label, reference,
and old and new values. Clearing the preview restores the original padding.
Call `disposeAnnotationControls()` when removing the component.

### Collect a choice without a preview

This example offers an email tone for a plain paragraph. It doesn't need
selection attributes or metadata. Run the script after the paragraph exists:

```html
<p id="email-draft">Draft a follow-up email about the project timeline.</p>
```

```javascript
const draft = /** @type {HTMLElement} */ (
  document.getElementById("email-draft")
);
const registration = document.oai?.annotation?.registerControls?.({
  targets: draft,
  controlsHeading: "Email options",
  controlsMode: "replace",
  controls: [
    {
      type: "select",
      label: "Email tone",
      callback: "emailTone",
      options: [
        { label: "Professional", value: "professional" },
        { label: "Friendly", value: "friendly" },
        { label: "Direct", value: "direct" },
      ],
      defaultValue: "professional",
    },
  ],
});
```


This control doesn't need an event handler because it doesn't preview a page
change. Omitting `currentValue` tells the browser to include the selected tone
even if the user keeps the initial option. Call `registration?.dispose()` when
removing the paragraph.

For select controls, preview callbacks receive `option.value`, such as
`"professional"`. Annotation history and ChatGPT receive the visible
`option.label`, such as `"Professional"`, for both the previous and selected
options. Use labels that explain each choice; internal IDs in `value` aren't
sent as the choice's text.

### Configure controls and starting values

Use `controlsMode: "replace"` to show only your controls for the registered
targets, or `"extend"` to show them alongside built-in controls. An optional
`controlsHeading` names the panel. The browser trims it and accepts one to 80
characters. Without a heading, the panel shows the element's HTML tag. The
heading isn't included in the context sent to ChatGPT.

A registration supports up to 12 controls. Each requires a `type`, visible
`label`, and `callback` identifier.

**Name controls by what they change.** Use a stable property or design-role
label, such as "Page background," "Primary brand color," or "Accent color,"
rather than the current value, such as "Warm ivory" or "Deep forest." The label
should remain meaningful when the value changes. Use `currentValue` for the
existing value and `reference` for the underlying token or property.

For example, this control definition keeps the label separate from the color:

```javascript
const pageBackgroundControl = {
  type: "color",
  label: "Page background",
  callback: "setPageBackground",
  reference: "--color-background",
  currentValue: "#f6f3ec",
};
```

<div
  id="try-annotation-color"
  className="annotation-request-demo not-prose"
  data-annotation-example="color"
  hidden
>
  **Try it**
  

    **Page background**
    <div
      className="annotation-color-preview"
      oai-annotatable=""
      data-example-target
      data-example-preview
    >
      
Page preview

    

    

      Select the preview in Annotation mode, then change Page background. Select
      Adjust if needed. The label stays the same as the color changes.
    

  




The supported control types are:

| Type     | Value                          | Additional fields                                 |
| -------- | ------------------------------ | ------------------------------------------------- |
| `color`  | Hex color, such as `"#2563eb"` | None                                              |
| `range`  | Number                         | `min`, `max`, and `step`                          |
| `select` | String                         | `options`, an array of `{ label, value }` objects |
| `toggle` | boolean                        | None                                              |

`callback` is a string identifier, not a JavaScript function. Make it unique
within the registration, start it with an ASCII letter, and use ASCII letters,
digits, underscores, or hyphens. An optional `reference` identifies the property
being changed and accompanies the label and value in the annotation.

Set `currentValue` to the property's valid ordinary value, including unsaved
edits. Don't use preview state or unfinished input as the baseline. The browser
uses it for before-and-after changes and resets. When application state changes, use
`registration.update({ controls })` to refresh the controls' `currentValue`
values. Updates affect future annotations; existing annotations retain their
captured values.

Set `defaultValue` for a suggested starting value; it takes precedence over
`currentValue` for the initial control
state. If you omit both, the control starts with white for a color, the minimum
for a range, the first option for a select, or `false` for a toggle.

Keep proposed values separate from ordinary drafts. If an update throws or a
request fails or returns `accepted: false`, discard the attempted proposal and
restore the prior controls and proposal state. Retain proposals when a request
is accepted: the browser may queue it before capturing the controls.

### Validate controls and registrations

The browser validates registrations and updates against these limits:

| Field or resource   | Constraint                                                                                                                                                                                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Controls            | Up to 12 per registration, with unique `callback` identifiers. Use only the fields defined for the control type.                                                                                                                                                                  |
| Labels and headings | Control labels, option labels, and `controlsHeading` must be nonempty after trimming and at most 80 UTF-16 code units. Control text can't contain control characters or direction-changing characters.                                                                            |
| Identifiers         | `callback` is at most 80 UTF-16 code units after trimming, using the format described above. `reference` is 1–80 characters and allows ASCII letters, digits, and `_ . / : @ $ # -`, without spaces.                                                                              |
| Select options      | 1–12 options with distinct `value` strings of at most 512 UTF-16 code units. Supplied `currentValue` and `defaultValue` must match an option's value.                                                                                                                             |
| Range values        | `min`, `max`, `currentValue`, and `defaultValue` must be finite numbers between −10,000 and 10,000. Require `min < max`, a `step` from 0.001 to 10,000 that is no larger than `max - min`, and starting values within the range. Starting values don't have to align with `step`. |
| Colors and toggles  | Colors must use 3, 4, 6, or 8 hexadecimal digits after `#`. Toggle values must be `true` or `false`.                                                                                                                                                                              |
| Targets             | 1–128 target entries when registering, all elements in the current document. Updates can pass `targets: []` to detach. Each document supports up to 64 controls registrations and 1,024 registration-to-target associations.                                                      |
| Serialized controls | The JSON payload containing `controls`, `controlsHeading`, and `controlsMode` must fit within 16,384 UTF-16 code units. Use data that can be encoded as JSON, without functions, symbols, or big integers.                                                                        |

`registerControls()` and `registration.update()` can throw synchronously for
invalid definitions, targets, or exceeded limits. An update after `dispose()`
also throws. A rejected update preserves the previous registration, including
its controls and targets. Handle failures at the call site, keep ordinary
editing usable, and reuse or dispose of owned registrations to stay within the
limits.

### Handle previews and resets

The `oaiannotationcontrolchange` event bubbles from the selected element. Its
`detail` contains `callback`, `value`, and `action`:

| Action             | Apply the supplied value to                             |
| ------------------ | ------------------------------------------------------- |
| `preview`          | Show the requested change.                              |
| `preview-original` | Temporarily show the original state for comparison.     |
| `reset`            | Restore the original state when the preview is cleared. |

Apply the supplied value for every action, as the spacing example does. Make
handlers reversible and safe to call repeatedly. Preview events don't request
a permanent change; save through your application's normal save flow. Keep
ordinary drafts, unfinished input, and previews separate so unrelated edits
don't overwrite a preview. When someone edits the same setting, replace its
preview and update the baseline for future annotations.

Keep the registration handle for updates and cleanup. `update()` accepts any
combination of `targets`, `controls`, `controlsHeading`, and `controlsMode`.
Omitted fields keep their previous values. For example, use
`registration.update({ targets: newElement })` when replacing a component's DOM
element. Target collections capture existing elements and don't track future
selector matches.

Pass `targets: []` to detach the registration or `controls: []` to clear its
controls. Call `dispose()` and remove event listeners when removing the
integration. Cleanup must also restore ordinary rendering: `dispose()` only
removes the controls registration and doesn't undo your preview changes. The spacing example
removes its inline override to restore the original CSS value. Both methods
return synchronously without a value. Updates affect
future selections; saved annotations retain their captured controls and target.

Control events target the element captured by the annotation. Updating a
registration's targets does not redirect existing annotations. Reset events can
still fire on a removed element, so a listener on its former parent will not
receive them.

## Make canvas objects selectable

An annotation surface lets your application identify individual objects drawn
inside a canvas. Register the host element with `registerSurface()` and provide
a `hitTest` function that returns an object with a stable `id`, or `null` for
empty space.

The host must be a connected HTML element outside shadow DOM in a secure,
top-level document. Surface registration isn't supported inside an iframe.

### Start with picking and identity

This example draws a revenue bar and makes it selectable using only `hitTest`
and a stable object ID. Put the script after the canvas:

```html
<canvas id="revenue-canvas" width="480" height="240">
  Revenue this quarter: $120,000.
</canvas>
```

```javascript
const canvas = /** @type {HTMLCanvasElement} */ (
  document.getElementById("revenue-canvas")
);
const context = /** @type {CanvasRenderingContext2D} */ (
  canvas.getContext("2d")
);
const bar = { x: 40, y: 60, width: 320, height: 100 };

context.fillStyle = "#2563eb";
context.fillRect(bar.x, bar.y, bar.width, bar.height);

const surface = document.oai?.annotation?.registerSurface?.({
  element: canvas,
  hitTest({ clientX, clientY }) {
    const bounds = canvas.getBoundingClientRect();
    const scaleX = bounds.width / canvas.width;
    const scaleY = bounds.height / canvas.height;
    const rect = {
      x: bounds.left + bar.x * scaleX,
      y: bounds.top + bar.y * scaleY,
      width: bar.width * scaleX,
      height: bar.height * scaleY,
    };

    if (
      clientX < rect.x ||
      clientX > rect.x + rect.width ||
      clientY < rect.y ||
      clientY > rect.y + rect.height
    ) {
      return null;
    }

    return { id: "revenue-this-quarter" };
  },
});
```


<div
  id="try-annotation-canvas"
  className="annotation-request-demo not-prose"
  data-annotation-example="canvas"
  hidden
>
  **Try it**
  

    

      <canvas
        className="annotation-canvas-preview"
        data-example-canvas
        oai-annotatable=""
        width="640"
        height="360"
      >
        
Circle

        
Triangle

        
Square

        
Star

      </canvas>
    

    

      Enter Annotation mode, then select a shape to see its name, ID, and fill
      color in the annotation. The space between shapes is not selectable.
    

  




In the code sample, selecting the bar in Annotation mode identifies it as
`revenue-this-quarter`.
Keep IDs stable within a surface. The example returns `null` for empty space.

`hitTest` can return a promise and receives an `AbortSignal` as `signal` to
cancel superseded work. The browser allows 250 milliseconds before falling
back to DOM selection. Errors and invalid results also fall back. Return
`null` explicitly for a successful hit test with no object.

Canceled work must still resolve or reject its promise. The browser permits
only one `hitTest` callback in flight and holds that slot until the promise
settles, even after cancellation or a timeout. If a worker handles picking,
settle the pending promise when its work is aborted; dropping a canceled worker
response can block subsequent canvas picking.

Call `surface?.invalidate()` after moving objects or changing zoom, and
`surface?.dispose()` when removing the integration. Both return synchronously
without a value.

### Add optional object context

The `id` is enough to identify the object. To include a display name, semantic
role, hidden context, or selection bounds, replace the successful return in
the preceding `hitTest` callback with:

```javascript
return {
  id: "revenue-this-quarter",
  name: "Revenue this quarter",
  role: "chart-bar",
  metadata: { metricId: "quarterly-revenue" },
  rect,
};
```

The optional `name` is visible to the user; `role` gives a short semantic
description. Include metadata only when it adds context that isn't already
visible. The optional `rect` uses CSS pixels relative to the visible page area,
matching `clientX` and `clientY`. The picking example already computes this
rectangle. Convert from scene coordinates, including scale, pan, and zoom.

### Add optional selection feedback

Use the optional `renderSelection` callback to draw your own hover and
selection feedback. It doesn't require the optional context fields.

For the canvas above, define this function and add
`renderSelection: renderRevenueSelection` to the `registerSurface()` options:

```javascript
/** @param {{ hoveredId: string | null; selectedId: string | null }} selection */
function renderRevenueSelection({ hoveredId, selectedId }) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#2563eb";
  context.fillRect(bar.x, bar.y, bar.width, bar.height);

  if (
    hoveredId === "revenue-this-quarter" ||
    selectedId === "revenue-this-quarter"
  ) {
    context.strokeStyle = "#111827";
    context.lineWidth = 3;
    context.strokeRect(bar.x, bar.y, bar.width, bar.height);
  }
}
```


This callback redraws the bar with an outline while it's hovered or selected.
When both IDs are `null`, it redraws the bar without an outline.

### Add controls to canvas objects

Register custom controls on the surface's DOM element. Drawn objects, called
virtual objects in the API, use your custom controls; built-in CSS and text
controls don't apply to them.

For multiple objects, use `renderSelection` to update the host's controls when
`selectedId` changes, before the browser captures the annotation. Control
events include `detail.virtualTarget: { surfaceId, targetId }`. Route each event
using that captured identity and its `callback`, rather than the current
selection. `targetId` matches the `id` from `hitTest`; `surfaceId` identifies the
browser's surface registration. Ordinary DOM events omit `virtualTarget`.

Preview, comparison, and reset events retain the original object's identity
after another object is selected. Reopening a saved annotation doesn't rerun
hit testing to replace its captured object or metadata.

## Control Annotation mode

Use `toggle()` to request a mode change, `isActive()` to read confirmed state,
and the document's `oaiannotationmodechange` event to keep your UI in sync.
Feature-detect both methods for older or unsupported browsers. Add this button,
then run the script after it exists:

```html
<button id="toggle-annotations" type="button" hidden>
  Enter annotation mode
</button>
```

```javascript
const button = /** @type {HTMLButtonElement} */ (
  document.getElementById("toggle-annotations")
);
const annotation = document.oai?.annotation;

/** @param {boolean} active */
function renderMode(active) {
  button.textContent = active
    ? "Exit annotation mode"
    : "Enter annotation mode";
}

/** @param {CustomEvent<{ active: boolean }>} event */
const onModeChange = (event) => renderMode(event.detail.active);
const onClick = () => annotation?.toggle(!annotation.isActive());

if (
  typeof annotation?.toggle === "function" &&
  typeof annotation?.isActive === "function"
) {
  document.addEventListener("oaiannotationmodechange", onModeChange);
  button.addEventListener("click", onClick);
  renderMode(annotation.isActive());
  button.hidden = false;
}

function cleanupAnnotationButton() {
  document.removeEventListener("oaiannotationmodechange", onModeChange);
  button.removeEventListener("click", onClick);
  button.hidden = true;
}
```


`toggle()` inverts the mode. Pass `true` to ensure it's on or `false` to ensure
it's off. Repeated requests with the same boolean are idempotent. Passing
`true` preserves an active editor or pending activation; `false` cancels
pending activation and uses the normal exit flow.

Call `toggle()` from a live user interaction. Its synchronous `{ accepted }`
result acknowledges the request, not a confirmed mode change. Browser
eligibility checks can still prevent the change. Read state from `isActive()`
and the event, as the example does.

`isActive()` needs no user gesture. The browser updates it before dispatching
`oaiannotationmodechange`, whose `event.detail.active` is a boolean. The browser
doesn't send an initial event or a duplicate for a forced no-op, so initialize your UI
from the getter. If access is revoked while active, a final event reports
`active: false` and a retained getter returns `false`.

Annotation mode captures page clicks. Hold **Space** to use page controls,
including your exit button, or exit through the browser's annotation UI.
Holding **Space** alone leaves `isActive()` true. The API doesn't support an
`oai-annotation-ignore` or other attribute that lets clicks pass through.

Exiting closes the editor and preserves saved annotations without submitting
them or moving them into the composer. Call `cleanupAnnotationButton()` when
removing the component. The captured API reference lets cleanup remove
listeners even if the namespace has disappeared.

## Test your integration

Open your website in the desktop app's built-in browser and test the features
you added:

1. Enter Annotation mode and select objects and text. Check that highlights,
   names, ranges, and metadata match the intended targets.
2. Open an annotation from your site's button. Check the selected element or
   text range, initial comment, and editor mode.
3. Change a custom control, compare with the original, and clear the preview.
   Check that your application restores the original state.
4. For canvas content, test empty space, resizing, and scene changes. Switch
   objects and confirm control events still update the captured target. Cancel
   an asynchronous hit test and confirm that later picks still work.
5. Save, reopen, and edit an annotation from the composer's attachment preview.
   Check that it retains its controls and target, and that removing it clears
   any preview.
6. Send an annotation with a message. Confirm that ChatGPT receives the
   selected content, metadata, and requested values, including visible select
   labels and unchanged choices on controls that omit `currentValue`.
7. Open the site in a browser without the API and verify that normal
   interactions still work.

To expose actions ChatGPT can take on your website, add
[Site tools (WebMCP)](https://learn.chatgpt.com/docs/webmcp). Annotations bring the person's selection
and feedback into the conversation; site tools let the agent act on that
context through your application's existing capabilities.