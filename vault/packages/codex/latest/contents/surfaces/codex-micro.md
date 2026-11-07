# Codex Micro

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Codex Micro is a limited-run collaboration between Codex and Work Louder. It
works with the ChatGPT desktop app, giving you a quick way to check on chats,
jump between them, use voice input, and trigger common actions or skills without
leaving the keyboard.

  

  

    

> Illustration: Interactive Codex Micro keyboard with illuminated Agent Keys, customizable Command Keys, a dial, and an analog stick


  




## Set up Codex Micro

1. Open the ChatGPT desktop app.
2. Press the rear button once to turn on Codex Micro.
3. Connect it with a USB-C cable or [pair it with Bluetooth](#pair-with-bluetooth),
   then follow the setup that appears when ChatGPT detects it.
4. On macOS, allow **Input Monitoring** when prompted so ChatGPT can respond to
   key presses.
5. Open **Settings > Codex Micro** to choose what the Agent Keys follow or
   trigger, customize the Command Keys, analog stick, and dial, and adjust
   lighting and voice controls.

By default, press and hold the dial for a short while to open these settings. You
can also select the Micro icon beside your account name at the bottom of ChatGPT.
A custom dial assignment can replace the press-and-hold shortcut.

The device settings remain available after ChatGPT detects a supported Micro for
the first time. Work Louder Input isn't required for the ChatGPT integration.
Use it to customize controls for other apps or configure more layers.

## Pair with Bluetooth

Codex Micro provides three Bluetooth channels.

1. Press the rear button once to turn on the Micro.
2. Press and hold the touch control on the bottom-left edge for three seconds.
   The lighting under the Micro turns blue when Bluetooth mode is active.
3. Tap the touch control to choose Bluetooth channel 1, 2, or 3. A fast-flashing
   channel light means the Micro is ready to pair.
4. Open your computer's Bluetooth settings and connect to the Micro when it
   appears.
5. Wait for the channel light to turn solid, which means pairing is complete.

The connection selector closes after five seconds without input. To switch to
another paired channel, open the selector again, choose the channel, and wait
for it to close. To pair that channel again, press and hold the touch control
for three seconds until its light begins flashing.

To use USB-C instead, open the connection selector and tap the touch control
until the lighting under the Micro turns white. Connecting a USB-C cable while
the Micro is still in Bluetooth mode charges it but doesn't switch it to the
wired connection.

For hardware diagrams, see the [Work Louder Codex Micro setup
guide](https://worklouder.cc/openai-micro-setup).

<a id="read-and-switch-tasks-with-agent-keys"></a>

## Read and switch chats with Agent Keys

Each of the six frosted Agent Keys can follow a chat and light up to show its
current status. Press an Agent Key once to switch to that chat without bringing
ChatGPT forward. Press it twice within 350 milliseconds to switch chats and
bring the ChatGPT window forward. To focus ChatGPT with the first press, turn on
**Focus ChatGPT with a single tap** in the device settings.

| Light | Status           | Meaning                                   |
| ----- | ---------------- | ----------------------------------------- |
| White | Idle             | The chat is idle.                         |
| Blue  | Thinking         | ChatGPT is working.                       |
| Green | Complete         | The chat completed with an unread update. |
| Amber | Requires input   | ChatGPT needs your approval or response.  |
| Red   | Error            | Something went wrong.                     |
| Off   | No assigned chat | The key doesn't follow a chat.            |

The selected chat's key pulses with its status light.

Out of the box, the keys follow your six most recently updated chats, whether
or not they're pinned. Change **Agent keys** in the device settings to use a
different arrangement:

- **Most recent chats**: Follow the six most recently updated chats, pinned or
  unpinned.
- **Pinned chats**: Follow the first six chats in **Pinned**.
- **Priority chats**: Put chats waiting for input, unread chats, and active
  chats first.
- **Custom assignments**: Assign a chat, shortcut, physical key action, or enabled
  skill to each Agent Key. Press an unassigned Agent Key to open a new chat.
  When you start the chat, ChatGPT assigns it to that key.

The status colors stay the same for keys that follow chats. With **Custom
assignments**, an Agent Key can trigger an action instead.

## Use and customize Command Keys

Codex Micro comes with six actions in its default layout:



  


|                            Key                            | Default action                           |
| :-------------------------------------------------------: | ---------------------------------------- |
|  <CodexMicroTableKeycap keycapId="FAST" label="Fast" />   | Turn Fast mode on or off.                |
| <CodexMicroTableKeycap keycapId="APPR" label="Approve" /> | Approve the current request.             |
| <CodexMicroTableKeycap keycapId="REJ" label="Decline" />  | Decline the current request.             |
|  <CodexMicroTableKeycap keycapId="SPLIT" label="Fork" />  | Continue the current chat in a new chat. |
|   <CodexMicroTableKeycap keycapId="MIC" label="Mic" />    | Start push-to-talk.                      |
| <CodexMicroTableKeycap keycapId="CODEX" label="Codex" />  | Send the message in the composer.        |

  

  


The Mic key uses your computer's microphone. Codex Micro doesn't have a
microphone of its own. By default, it uses **Push to talk**: hold the key while
you speak, then release it to stop. For hands-free recording, press it twice
within 350 milliseconds to keep recording. Press it again to stop.

A sea-green light moves around the keyboard while you record. It changes to a
moving white light while ChatGPT processes your speech, then turns solid white
when the prompt is ready. Press the Codex key to send it.

If **Voice Chat** is available under **Microphone key**, choose it to use the
Mic key to start a Voice Chat or toggle your microphone; press and hold it to
end the chat. Turn on **Use separate microphone keys** to map the two switches
under the wide Mic key independently.

In the device settings, select a Command Key in the **Layout** preview, then
choose its keycap and action. You can open the browser or terminal, manage
chats, review changes, run Git and pull request actions, attach files or photos,
open plugins or scheduled tasks, change reasoning effort, run an enabled skill,
or assign another shortcut. If you choose a keycap that's already used
somewhere else, ChatGPT swaps the two instead of using one keycap twice.

After you remap a key, swap the physical keycap to match its new action.
Select **Reset layout** to restore the default Command Key and analog stick
assignments without changing the Agent Key mode or custom chat assignments.

  




## Use the analog stick and dial



  


The analog stick moves freely in any direction. When you push it far enough
from the center, ChatGPT turns the movement into one of four directional
actions. Codex Micro starts with the mappings shown here.

Choose any available ChatGPT desktop command or enabled skill for each
direction in the device settings.

  

  


| Direction | Default action             |
| --------- | -------------------------- |
| Up        | Turn Plan mode on or off.  |
| Right     | Go forward in app history. |
| Down      | Show or hide the sidebar.  |
| Left      | Go back in app history.    |

  




The dial uses **Composer navigation** by default. Turn it to move through
composer controls and options, then press it to open or select the focused
control. When a composer control or menu is open, the Agent Key immediately to
the right of the dial lights red. Press that key to cancel.

Choose one of four dial modes in the device settings:

| Mode                       | Behavior                                                                       |
| -------------------------- | ------------------------------------------------------------------------------ |
| **Composer navigation**    | Move through composer controls and select the focused control.                 |
| **Reasoning only**         | Adjust reasoning effort and open its slider or advanced options.               |
| **Conversation scrolling** | Scroll the active chat; press the dial to jump to the latest message.          |
| **Custom assignments**     | Assign an action or skill to the left turn, right turn, press, and long press. |

Pressing and holding the dial opens the device settings in every mode except
**Custom assignments**, where it runs the action assigned to the long press.

## Adjust lighting

{/* vale Microsoft.Auto = NO */}

In the device settings, adjust **Brightness** and choose an **Auto-dim**
interval from 30 seconds to one hour, or turn automatic dimming off. The lights
come back on when you use the Micro or an Agent Key changes status. By default,
the lights turn off after three minutes.

{/* vale Microsoft.Auto = YES */}

When the Micro reports its battery status, you can see it in the device settings
and beside the Micro icon in the sidebar.

## Add more layers

ChatGPT uses layer 1. Use [Work Louder
Input](https://worklouder.cc/micro-setup) to configure up to five more layers
with shortcuts and actions for other apps.

## Troubleshoot Codex Micro

### Fix Input Monitoring on macOS

If the device settings show that Input Monitoring isn't set up, select **Open
System Settings**, then follow these steps:

1. Open **System Settings > Privacy & Security > Input Monitoring**.
2. Turn on access for ChatGPT if it's already listed. If it's missing, drag
   **ChatGPT** from Applications into the list, or select **Add (+)** and choose
   **ChatGPT**.
3. Quit and reopen ChatGPT, then confirm it detects the Micro on layer 1.

For more about this macOS permission, see [Apple's Input Monitoring
guide](https://support.apple.com/guide/mac-help/mchl4cedafb6/mac).

### Fix connection interference

ChatGPT retries automatically when it detects a Micro but can't connect or loses
communication. If the problem continues, reconnect the Micro and check whether
a keyboard utility or security tool blocks access to it.

{/* vale Vale.Spelling = NO */}

On macOS, Work Louder notes that Karabiner and Logitech Options+ can interfere
with Micro communication when those apps have Input Monitoring permission. To
test for interference, quit the keyboard utility or temporarily turn off its
Input Monitoring access, then reconnect the Micro. If your organization manages
your computer, ask your IT administrator to check the device rules.

{/* vale Vale.Spelling = YES */}

### Get more Work Louder help

For help with Bluetooth, cables, power, or resetting the keyboard, see the [Work
Louder Codex Micro setup guide](https://worklouder.cc/openai-micro-setup). For
direct support, email
[hello@worklouder.cc](mailto:hello@worklouder.cc).

## Get a compatible Micro

Check Codex Micro availability through [OpenAI Supply
Co](https://openai.com/supply/co-lab/work-louder/). The ChatGPT desktop app also
supports [Creator Micro 2](https://worklouder.cc/creator-micro-2), available
directly from Work Louder.