# Embeds: View Mixpanel reports in 3rd-party tools


Mixpanel Boards and reports can be embedded in Figma, Coda, Jira, and any third-party tool that supports embedding.

## Using Embeds

Paste the link of the Board or Report into the 3rd-party tool and follow the instructions to authenticate. Here's a [video walkthrough](https://www.loom.com/share/000acdf5b6d94efc98d143316afac1db) of this process.

### Compatibility

| Company     | Status |
|-------------|--------|
| Figma       | GA     |
| Coda        | GA     |
| Notion      | GA     |
| Jira        | Beta   |
| Confluence  | Beta   |
| Miro        | Beta   |

### Limitations
Though this feature works for any third-party that supports a standard oEmbed, certain integrations may be limited depending on how the third-party has customized their oEmbed settings.

In Safari, you must have "Prevent cross-site tracking" off in order for any embedding to work. Go to Safari -> Preferences -> Privacy -> Website tracking: Prevent cross-site tracking should NOT be checked.


## Supporting Embeds in your Platform

### oEmbed
[oEmbed](https://oembed.com/) is a format for allowing an embedded representation of a URL on third-party sites. It’s a way to embed content from one website onto another website without having to manually copy and paste code.

If your platform supports the oEmbed format, you should be able to support Mixpanel’s Embeddable reports right out of the box.

### Embedly or Iframely
If you don’t currently support oEmbed, [Embedly](https://embed.ly/) or [Iframely](https://iframely.com/) are platforms that can help you get started.

Embedly provides a way to embed content from a variety of sources, including YouTube, Vimeo, SoundCloud, and more. It offers an API that developers can use to embed content on their websites. Embedly also offers a variety of tools and features, including the ability to customize the appearance of embedded content.

Iframely is a similar service to Embedly. It helps websites and applications embed external content such as videos, images, articles, and more. It simplifies the process of embedding content by automatically generating embed codes for various media sources, eliminating the need for developers to manually code each embed.
