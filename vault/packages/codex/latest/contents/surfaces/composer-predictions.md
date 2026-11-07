# Composer Predictions

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Composer predictions provides autocomplete-style suggestions for your next message in the Codex desktop app. After Codex responds, it uses the current conversation to suggest a follow-up prompt in the message box. Press **Tab** to accept the suggested message as an editable draft, or type your own message.



> Illustration: Codex responds, a prediction appears in the message box, and pressing Tab accepts it as a draft without sending it.



To use composer predictions, make sure you've updated the [Codex desktop app](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) and have signed in to your personal ChatGPT Pro account.

## Tab to accept

1. Send a message in a supported thread. When Codex finishes responding, look for a suggestion in the message box.
2. **Press Tab to accept the prediction.** The suggested text becomes an editable
   draft in the message box.
3. Review the text, make any changes, then send it when you’re ready.

To write something else, start typing your own message. You can keep typing without waiting for a prediction. Accepting a prediction adds text to the message box. It does not send the message for you.

## How predictions use context

Predictions use the conversation in your current thread. If context from past work or connected apps is already in that thread, it can inform a prediction. Predictions don’t look up memories or retrieve information from connected apps on their own. If you have memory enabled, memory context already in your thread can personalize predictions. You can use predictions with memory off.

## Availability and controls

Composer predictions is currently in beta for users aged 18 and older on personal ChatGPT Pro plans in supported regions. It’s available in local and SSH threads in the Codex desktop app with GPT-6 Astra, GPT-6.1 Sol, and GPT-6.1 Terra. Predictions are enabled by default for eligible users. You can turn them on or off using the **Show predictions** toggle in **Settings → General → Composer**.

Generating predictions doesn’t count toward your Codex usage limits or consume credits. When you send a message, including an accepted prediction, normal Codex usage limits and billing apply.

For setup and troubleshooting, see [Composer predictions in Codex](https://help.openai.com/en/articles/20001601-composer-predictions-in-codex).