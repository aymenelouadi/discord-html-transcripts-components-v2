# discord-html-transcripts-components-v2

> A fully-featured Discord HTML transcript generator with **complete Components V2 support** — built for discord.js v14 & v15.

**Author:** [aymenelouadi](https://github.com/aymenelouadi)  
**Repository:** https://github.com/aymenelouadi/discord-html-transcripts-components-v2

---

## Features

- ✅ Full **Discord Components V2** support
  - Containers (with accent color bar)
  - Sections (with thumbnail / button accessory)
  - Media Galleries (auto-grid layout matching Discord)
  - Separators / Spacing
  - Text Display blocks
  - Buttons (Primary, Secondary, Success, Danger, Link, **Premium**)
  - Select Menus (String, User, Role, Channel, Mentionable)
  - File components (with spoiler blur)
- ✅ Embeds, Reactions, Threads, System Messages
- ✅ Save images as base64 (offline transcripts)
- ✅ Optional image compression via `sharp`
- ✅ Server-side rendering (React SSR)
- ✅ Hydration mode (client-side React)
- ✅ Compatible with **discord.js v14** and **v15**

---

## Installation

```bash
npm install discord-html-transcripts-components-v2
# or
pnpm add discord-html-transcripts-components-v2
```

---

## Quick Start

```typescript
import { createTranscript, ExportReturnType } from 'discord-html-transcripts-components-v2';

// Inside a Discord command or event handler:
const transcript = await createTranscript(channel, {
  limit: -1,               // fetch ALL messages
  returnType: ExportReturnType.Attachment,
  filename: `transcript-${channel.name}.html`,
  poweredBy: true,
  saveImages: false,       // set true to embed images as base64
});

await interaction.followUp({ files: [transcript] });
```

Or from an existing array of messages:

```typescript
import { generateFromMessages, ExportReturnType } from 'discord-html-transcripts-components-v2';

const messages = await channel.messages.fetch({ limit: 100 });

const transcript = await generateFromMessages(messages, channel, {
  returnType: ExportReturnType.String,
});
```

---

## API

### `createTranscript(channel, options?)`

Fetches messages from a text channel and generates a transcript.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `limit` | `number` | `undefined` | Max messages to fetch. `-1` = all. |
| `filter` | `(msg) => boolean` | — | Filter messages before export |
| `returnType` | `ExportReturnType` | `Attachment` | `Attachment`, `Buffer`, or `String` |
| `filename` | `string` | `transcript-{id}.html` | File name for Attachment type |
| `saveImages` | `boolean` | `false` | Embed images as base64 data URIs |
| `poweredBy` | `boolean` | `true` | Show "Powered by" footer link |
| `footerText` | `string` | `'Exported {number} message{s}.'` | Footer text template |
| `favicon` | `'guild' \| string` | `'guild'` | Favicon URL or `'guild'` for server icon |
| `hydrate` | `boolean` | `false` | Enable client-side React hydration |

### `generateFromMessages(messages, channel, options?)`

Same options as above, accepts a `Message[]` or `Collection<string, Message>` directly.

---

## Components V2 Rendering

All Discord Components V2 top-level and nested components are rendered faithfully:

| Component | Support |
|-----------|---------|
| `Container` | ✅ with `accentColor` bar + `spoiler` blur |
| `Section` | ✅ text content + thumbnail/button accessory |
| `TextDisplay` | ✅ full markdown |
| `MediaGallery` | ✅ auto-grid (1–10+ items) with video support |
| `Separator` | ✅ small / large spacing, optional divider line |
| `Button` (ActionRow) | ✅ all 6 styles including Premium |
| `SelectMenu` (all types) | ✅ with placeholder and string options |
| `Thumbnail` | ✅ in section accessory |
| `File` | ✅ with spoiler support |

---

## Building

```bash
pnpm install
pnpm build
```

---

## License

MIT © [aymenelouadi](https://github.com/aymenelouadi)

