/**
 * Discord Components V2 - Live Demo Test
 * Author: aymenelouadi
 * https://github.com/aymenelouadi/discord-html-transcripts-components-v2
 *
 * This script:
 *  1. Connects to Discord with the bot token
 *  2. Creates a temporary demo channel
 *  3. Sends various Components V2 messages (containers, sections, galleries, buttons, etc.)
 *  4. Generates a full HTML transcript
 *  5. Saves the transcript and deletes the channel
 */

import {
  Client,
  GatewayIntentBits,
  ChannelType,
  ButtonStyle,
  ComponentType,
  MessageFlags,
  type TextChannel,
} from 'discord.js';
import { createTranscript, ExportReturnType } from '../src/index';
import { writeFileSync } from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const BOT_TOKEN = process.env.DISCORD_TOKEN;
if (!BOT_TOKEN) {
  console.error('[demo] ERROR: Set DISCORD_TOKEN in your environment or .env file');
  process.exit(1);
}
const GUILD_ID = process.env.GUILD_ID ?? '1478503047951941785';
const CHANNEL_NAME = `v2-demo-${Date.now()}`;

// ─── RANDOM HELPERS ───────────────────────────────────────────────────────────
const RANDOM_TEXTS = [
  'مرحباً بكم في اختبار **Components V2** 🎉',
  'هذه رسالة عادية مع `كود` و ~~خط~~',
  'هل رأيتم التصميم الجديد؟ يبدو رائعاً!',
  'Testing *markdown* support: **bold**, _italic_, ~~strike~~',
  'Discord Components V2 support is finally here! 🚀',
];

const RANDOM_IMAGES = [
  'https://picsum.photos/seed/alpha/800/500',
  'https://picsum.photos/seed/beta/800/500',
  'https://picsum.photos/seed/gamma/600/400',
  'https://picsum.photos/seed/delta/700/450',
  'https://picsum.photos/seed/epsilon/500/500',
  'https://picsum.photos/seed/zeta/800/600',
];

const EMOJIS = ['🎉', '🚀', '🔥', '✨', '🎨', '💡', '🌟', '🎮', '🎧', '🌸'];

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomImages(count: number): string[] {
  const shuffled = [...RANDOM_IMAGES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('[demo] Starting Discord Components V2 Demo...');

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  await client.login(BOT_TOKEN!);
  console.log(`[demo] Logged in as ${client.user?.tag}`);

  const guild = await client.guilds.fetch(GUILD_ID);
  console.log(`[demo] Connected to guild: ${guild.name}`);

  // ── Create demo channel ────────────────────────────────────────────────────
  const channel = await guild.channels.create({
    name: CHANNEL_NAME,
    type: ChannelType.GuildText,
    topic: 'discord-html-transcripts-components-v2 demo channel',
    reason: 'Components V2 demo test',
  }) as TextChannel;

  console.log(`[demo] Created channel: #${channel.name}`);

  // ── Small delay so Discord registers the channel ──────────────────────────
  await sleep(1500);

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGE 1: Welcome container with accent color
  // ─────────────────────────────────────────────────────────────────────────
  await channel.send({
    flags: MessageFlags.IsComponentsV2,
    components: [
      {
        type: ComponentType.Container,
        accent_color: 0x5865f2,  // Blurple
        components: [
          {
            type: ComponentType.TextDisplay,
            content: `## 🎉 مرحباً بكم في اختبار Components V2!\nهذه قناة تجريبية مؤقتة سيتم حذفها بعد توليد الـ Transcript.`,
          },
          {
            type: ComponentType.Separator,
            divider: true,
            spacing: 1,
          },
          {
            type: ComponentType.TextDisplay,
            content: `**المشروع:** discord-html-transcripts-components-v2\n**المطور:** aymenelouadi\n**التاريخ:** ${new Date().toLocaleDateString('ar-MA')}`,
          },
        ],
      },
    ],
  } as any);
  await sleep(600);

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGE 2: Section with thumbnail
  // ─────────────────────────────────────────────────────────────────────────
  await channel.send({
    flags: MessageFlags.IsComponentsV2,
    components: [
      {
        type: ComponentType.Container,
        accent_color: 0x248046,  // Green
        components: [
          {
            type: ComponentType.Section,
            components: [
              {
                type: ComponentType.TextDisplay,
                content: `### 🖼️ Section مع Thumbnail\nهذا مثال على مكوّن Section الذي يدعم thumbnail في الجانب الأيمن.`,
              },
            ],
            accessory: {
              type: ComponentType.Thumbnail,
              media: { url: randomPick(RANDOM_IMAGES) },
              description: 'Thumbnail example',
            },
          },
        ],
      },
    ],
  } as any);
  await sleep(600);

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGE 3: Media Gallery (4 images)
  // ─────────────────────────────────────────────────────────────────────────
  const galleryImages = randomImages(4);
  await channel.send({
    flags: MessageFlags.IsComponentsV2,
    components: [
      {
        type: ComponentType.TextDisplay,
        content: `### 🖼️ Media Gallery - 4 صور`,
      },
      {
        type: ComponentType.MediaGallery,
        items: galleryImages.map((url, i) => ({
          media: { url },
          description: `صورة ${i + 1}`,
        })),
      },
    ],
  } as any);
  await sleep(600);

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGE 4: Buttons in Action Row (all styles)
  // ─────────────────────────────────────────────────────────────────────────
  await channel.send({
    content: `${EMOJIS.slice(0, 5).join(' ')} **اختبار الأزرار - جميع الأنواع:**`,
    components: [
      {
        type: ComponentType.ActionRow,
        components: [
          {
            type: ComponentType.Button,
            style: ButtonStyle.Primary,
            label: 'Primary',
            custom_id: 'btn_primary',
          },
          {
            type: ComponentType.Button,
            style: ButtonStyle.Secondary,
            label: 'Secondary',
            custom_id: 'btn_secondary',
          },
          {
            type: ComponentType.Button,
            style: ButtonStyle.Success,
            label: 'Success ✅',
            custom_id: 'btn_success',
          },
          {
            type: ComponentType.Button,
            style: ButtonStyle.Danger,
            label: 'Danger ❌',
            custom_id: 'btn_danger',
          },
          {
            type: ComponentType.Button,
            style: ButtonStyle.Link,
            label: 'GitHub 🔗',
            url: 'https://github.com/aymenelouadi/discord-html-transcripts-components-v2',
          },
        ],
      },
    ],
  });
  await sleep(600);

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGE 5: Random user messages with text
  // ─────────────────────────────────────────────────────────────────────────
  for (let i = 0; i < 4; i++) {
    await channel.send({
      content: `${randomPick(EMOJIS)} ${randomPick(RANDOM_TEXTS)}`,
    });
    await sleep(400);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGE 6: Container with separator and multiple text blocks
  // ─────────────────────────────────────────────────────────────────────────
  await channel.send({
    flags: MessageFlags.IsComponentsV2,
    components: [
      {
        type: ComponentType.Container,
        accent_color: 0xda373c,  // Red
        components: [
          {
            type: ComponentType.TextDisplay,
            content: '### ⚡ اختبار Separator مع Spacing مختلفة',
          },
          {
            type: ComponentType.Separator,
            divider: true,
            spacing: 2,  // Large
          },
          {
            type: ComponentType.TextDisplay,
            content: 'هذا النص بعد separator كبير (Large spacing)',
          },
          {
            type: ComponentType.Separator,
            divider: false,
            spacing: 1,  // Small
          },
          {
            type: ComponentType.TextDisplay,
            content: 'هذا النص بعد separator صغير (Small spacing) بدون خط فاصل',
          },
        ],
      },
    ],
  } as any);
  await sleep(600);

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGE 7: Media Gallery (6 images - larger gallery)
  // ─────────────────────────────────────────────────────────────────────────
  const bigGallery = [
    'https://picsum.photos/seed/img1/800/500',
    'https://picsum.photos/seed/img2/800/500',
    'https://picsum.photos/seed/img3/800/500',
    'https://picsum.photos/seed/img4/800/500',
    'https://picsum.photos/seed/img5/800/500',
    'https://picsum.photos/seed/img6/800/500',
  ];
  await channel.send({
    flags: MessageFlags.IsComponentsV2,
    components: [
      {
        type: ComponentType.Container,
        accent_color: 0xe79232,
        components: [
          {
            type: ComponentType.TextDisplay,
            content: `### 📸 معرض كبير - 6 صور\nاختبار Media Gallery مع grid تلقائي`,
          },
          {
            type: ComponentType.MediaGallery,
            items: bigGallery.map((url, i) => ({
              media: { url },
              description: `Image ${i + 1}`,
            })),
          },
        ],
      },
    ],
  } as any);
  await sleep(600);

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGE 8: Section with button accessory
  // ─────────────────────────────────────────────────────────────────────────
  await channel.send({
    flags: MessageFlags.IsComponentsV2,
    components: [
      {
        type: ComponentType.Container,
        accent_color: 0xc559de,
        components: [
          {
            type: ComponentType.Section,
            components: [
              {
                type: ComponentType.TextDisplay,
                content: `### 🔘 Section مع Button Accessory\nهذا مثال على Section مع زر في الجانب بدلاً من thumbnail.`,
              },
            ],
            accessory: {
              type: ComponentType.Button,
              style: ButtonStyle.Primary,
              label: 'اضغط هنا',
              custom_id: 'section_btn',
            },
          },
        ],
      },
    ],
  } as any);
  await sleep(600);

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGE 9: Closing message
  // ─────────────────────────────────────────────────────────────────────────
  await channel.send({
    flags: MessageFlags.IsComponentsV2,
    components: [
      {
        type: ComponentType.Container,
        accent_color: 0x80848e,
        components: [
          {
            type: ComponentType.TextDisplay,
            content: `### 🏁 انتهى الاختبار!\nيتم الآن توليد الـ **HTML Transcript** وحذف هذه القناة...`,
          },
        ],
      },
    ],
  } as any);
  await sleep(1000);

  // ─── Generate Transcript ──────────────────────────────────────────────────
  console.log('[demo] Generating transcript...');

  const html = await createTranscript(channel, {
    limit: -1,
    returnType: ExportReturnType.String,
    poweredBy: true,
    footerText: 'Components V2 Demo — {number} message{s}',
    saveImages: false,
    favicon: 'guild',
  });

  const outputPath = path.join(__dirname, `transcript-demo-${Date.now()}.html`);
  writeFileSync(outputPath, html, 'utf-8');
  console.log(`[demo] ✅ Transcript saved to: ${outputPath}`);

  // ─── Delete the channel ───────────────────────────────────────────────────
  await sleep(500);
  await channel.delete('Components V2 demo completed — transcript generated');
  console.log(`[demo] 🗑️  Channel #${CHANNEL_NAME} deleted`);

  await client.destroy();
  console.log('[demo] Done! Open the transcript HTML file in your browser.');
  process.exit(0);
}

main().catch((err) => {
  console.error('[demo] Fatal error:', err);
  process.exit(1);
});
