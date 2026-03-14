# Changelog

All notable changes to `discord-transcript-v2` will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

---

## [1.0.14] - 2026-03-14

### Fixed
- Permanently replaced all Unicode box-drawing characters in `styles.ts` with plain ASCII hyphens using a Node.js rewrite — prevents VS Code buffer from re-introducing garbled text on save

---

## [1.0.13] - 2026-03-14

### Fixed
- Additional pass to strip lingering Unicode box-drawing characters from `styles.ts` after partial fix in v1.0.12

---

## [1.0.12] - 2026-03-14

### Added
- **Code Nexus footer credit** — the transcript footer now always shows `© YEAR Code Nexus` with a link to the GitHub profile; when `poweredBy: true`, it also shows the library name and repo link

### Fixed
- Replaced garbled Unicode box-drawing characters in CSS comment headers inside `styles.ts` and `index.tsx` with plain ASCII

---

## [1.0.11] - 2026-03-14

### Added
- **User mention display names** — `@mentions` now resolve to actual display names instead of raw `<@ID>` strings. Uses `message.mentions.users` as a direct fallback so users who have left the server still display correctly; falls back to `@Unknown`
- **Profile popup card** — clicking any user mention opens a Discord-style floating profile card showing: banner image (or accent/role colour fallback), avatar, display name, BOT badge, raw `@username`, and highest hoisted role with coloured dot. Dismisses on outside click and is viewport-aware
- Added `username`, `banner`, and `bannerColor` fields to internal `Profile` type and `buildProfile()`

---

## [1.0.10] - 2026-03-14

### Fixed
- **Button layout overlap** — action row buttons were overlapping because `<DiscordActionRow>` (Stencil web component) was wrapping plain HTML `<span>` elements. Replaced with a plain `<div class="discord-action-row-wrap">` using existing CSS flex layout

---

## [1.0.9] - 2026-03-14

### Fixed
- **Duplicate React instance** — `react` and `react-dom` were listed as `dependencies`, causing npm to install a nested copy inside the package and create two separate React Symbol references, triggering `"Objects are not valid as a React child"`. Moved both to `peerDependencies` + `devDependencies`

---

## [1.0.8] - 2026-03-13

### Fixed
- Wrapped every per-message render in try/catch so a single broken message no longer crashes the entire transcript
- Fixed DM reply guard: replies in DM channels no longer throw when `message.guild` is `null`
- Additional hardening against `"Objects are not valid as a React child"` in embed and content renderers

---

## [1.0.7] - 2026-03-13

### Fixed
- Further null-guarding for reaction emoji, embed field values, and embed author/footer to prevent React child errors

---

## [1.0.6] - 2026-03-13

### Fixed
- Null-guarded system message content to prevent React child errors on unknown system message types

---

## [1.0.5] - 2026-03-13

### Fixed
- Guarded against undefined role colour in `buildProfile()` to prevent React child errors when a member has no coloured role

---

## [1.0.4] - 2026-03-13

### Fixed
- Null-guarded attachment `contentType` and `name` fields that could be undefined in certain message types

---

## [1.0.3] - 2026-03-13

### Fixed
- Guarded against `undefined` nodes in markdown AST tree walk to prevent React child errors on malformed message content

---

## [1.0.2] - 2026-03-13

### Fixed
- Converted direct object spreads into resolved primitives in content and embed renderers to prevent `"Objects are not valid as a React child"` errors

---

## [1.0.1] - 2026-03-13

### Fixed
- Initial post-release patch for `"Objects are not valid as a React child"` errors caused by Discord.js objects being passed directly as React children

---

## [1.0.0] — 2026-03-13

### 🎉 Initial Release

This is the first public release of **discord-transcript-v2**, a complete rewrite and rebrand of `discord-html-transcripts` with full Discord Components V2 support.

---

### ✨ Added — Components V2

Full rendering support for every Discord Components V2 type:

- **Container** — accent colour bar (any hex), spoiler blur, multiple nested children
- **TextDisplay** — full Discord markdown inside CV2 messages
- **Separator** — divider line (`on/off`) × spacing (`SMALL` / `LARGE`) = 4 combinations
- **MediaGallery** — 1–10 items; auto-grid layout (1-col / 2-col / 2×2 / 3-col); hover zoom
- **Section** — horizontal row layout with **Thumbnail** or **Button** as accessory
- **Thumbnail** — 84×84 image with alt text and hover lift animation
- **File** — `attachment://` protocol support, spoiler blur option
- **Button** — Primary, Secondary, Success, Danger, Link (with URL), Premium (gradient); disabled state; custom emoji
- **StringSelect** — placeholder, min/max values, options with label + emoji + description
- **UserSelect** — placeholder
- **RoleSelect** — placeholder
- **MentionableSelect** — placeholder
- **ChannelSelect** — placeholder

---

### ✨ Added — Classic Messages

Full support for non-CV2 Discord messages:

- Plain text with full markdown (bold, italic, underline, strikethrough, spoiler, code, blockquote)
- Rich embeds — author, title, URL, description, inline/full fields, image, thumbnail, footer, timestamp, colour bar
- File & image attachments
- Emoji reactions with count
- Thread references
- Slash command interactions
- Message replies

---

### ✨ Added — Markdown Rendering

Extended `discord-markdown-parser` AST support:

- `heading` — `#` (15px), `##` (17px), `###` (20px) with bold weight
- `list` — unordered (`<ul>`) and ordered (`<ol>`) with `<li>` items
- All existing inline nodes: bold, italic, underline, strikethrough, inline-code, code-block, blockquote, spoiler, emoji, mention, channel, timestamp

---

### ✨ Added — Modern Page Design

- **Inter** font loaded from Google Fonts
- **CSS custom properties** (`--page-bg`, `--accent`, `--radius-*`, `--shadow-*`, `--anim`)
- **Custom dark scrollbar** — thin, rounded, translucent
- **Deep dark background** (`#0b0c0e`)
- **Polished footer** — stats pill with glowing accent dot + Ko-fi / GitHub credit
- All CV2 components redesigned with shadows, hover animations, and smooth transitions

---

### ✨ Added — Developer Experience

- `.env` / `.env.example` pattern — no secrets in code
- `npm run test:cv2` — comprehensive live bot test covering all 13 CV2 categories
- `npm run build` — full TypeScript compile to `dist/`
- `.npmignore` — clean npm package (no tests, no docs, no media)
- Fully typed public API (`ExportReturnType`, `createTranscript`, `generateFromMessages`)

---

### 🔧 Changed

- Package renamed from `discord-html-transcripts` → **`discord-transcript-v2`**
- License changed from Apache-2.0 → **MIT**
- All inline styles replaced with semantic CSS class names (`.dcv2-*`, `.discord-button-*`, `.discord-select-menu-*`)
- "Powered by" footer link updated to Code Nexus / this repository
- React upgraded to 19.x with `prerenderToNodeStream` SSR

---

[1.0.14]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.14
[1.0.13]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.13
[1.0.12]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.12
[1.0.11]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.11
[1.0.10]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.10
[1.0.9]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.9
[1.0.8]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.8
[1.0.7]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.7
[1.0.6]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.6
[1.0.5]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.5
[1.0.4]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.4
[1.0.3]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.3
[1.0.2]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.2
[1.0.1]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.1
[1.0.0]: https://github.com/aymenelouadi/discord-transcripts-v2/releases/tag/v1.0.0
