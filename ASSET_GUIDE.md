Asset Guide — Spiritual Images for BEST Puducherry

Overview
- Place high-quality photographs of Siddhar temples, shrines, and spiritual sites into `src/assets/`.
- The code references placeholder SVGs currently named `siddhar-1.svg`, `siddhar-2.svg`, `siddhar-3.svg`.
- For production, replace or add real photos using the filenames below (Vite will pick them up at build time).

Recommended filenames (drop into `src/assets/`):
- `siddhar-1.jpg` — Hero-style shot of a Siddhar temple (1920×1080 recommended)
- `siddhar-2.jpg` — Detailed shrine or cave (1200×800 recommended)
- `siddhar-3.jpg` — Landscape/site approach (1200×800 recommended)
- Optional additional images: `siddhar-4.jpg`, `siddhar-5.jpg` (1200×800)

Sizing & format
- Preferred formats: `jpg` or `webp` (photographic). `png` only if transparency required.
- Hero / banner: 1920×800 - 2400×900 (compressed to < 400KB with slight quality loss acceptable).
- Grid thumbnails: 1200×800 (compress to < 200KB).
- Use an image optimizer (Squoosh, ImageMagick, or `sharp`) to produce web-friendly images.

How to replace placeholders
1. Save your photos with the exact filenames above inside `src/assets/`.
2. If you use `.jpg` or `.webp`, update the import paths in `src/pages/About.tsx` (for example, change `siddhar-1.svg` to `siddhar-1.jpg`) — or simply keep the same names (Vite resolves by file name).
3. Restart the dev server if it's running (`npm run dev`) so Vite picks up new assets.

Notes
- If you want me to add the real images directly, upload the image files here (I can place them under `src/assets/` and update imports accordingly).
- For copyright-safe photos, use Unsplash, Pexels, or obtain explicit permission from photographers.
