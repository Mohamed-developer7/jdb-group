# JDB — Jannat Developers & Builders
Digital flagship. Next.js 15.5 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Status
Homepage plus 15 interior pages are built and build clean (`npm run build` —
verified in this delivery, 20/20 routes compile with no TypeScript or lint
errors).

**Pages:**
- `/` — full homepage narrative (hero → statement → developments → sold-out
  track record → scale → footprint → beyond borders → timeline → leadership →
  client trust → investment journey → investment → strategic partnerships →
  Islamabad → final CTA)
- `/developments` — full developments listing
- `/projects/[slug]` — case-study template (lahore, gwadar, islamabad,
  gilgit-baltistan)
- `/land-bank` — land holdings framed as development potential
- `/invest` + `/invest/enquiry` — investment philosophy, opportunities,
  private enquiry form
- `/strategic-partnerships` + `/strategic-partnerships/enquiry` — partnership
  categories (development, land/asset, international, GCC, Chinese
  companies, CPEC, joint ventures, strategic capital) + enquiry form
- `/company` — full story, track record, timeline, "new chapter" close
- `/company/leadership` — founder profile + next-generation direction
- `/international` — CPEC/corridor context, Beyond Borders, partnerships
- `/locations` — full Pakistan footprint + international exposure
- `/insights` — editorial journal (placeholder entries, structured for real
  content)
- `/contact` — enquiry form with 5 types (Property / Investment /
  Development / Strategic Partnership / International Business)

## What's real vs. placeholder
Every project name, sold-out development, testimonial, and insight headline
is a structured placeholder (`[PROJECT NAME]`, `[HEADLINE PENDING]`), styled
identically to real content and driven from `/data`. Nothing is fabricated —
swap the data files once JDB confirms verified details, and the design
doesn't need to change.

All photography is real, freely licensed Unsplash imagery (Unsplash
License — free for commercial use), centralised in `lib/images.ts` for
one-place replacement with official JDB photography.

## Design plan
See prior notes below — tokens, type system and layout principles are
unchanged from the original build; this pass extended the same system
rather than introducing a second one, per the brief's "do not rebuild the
foundation" instruction.

**Color:** bone `#F1EEE7` · ink `#1B1812` · obsidian `#17150F` · stone
`#C8C2B7` · oak `#332D26` · brass `#A8895A` (single accent, never a fill).

**Type:** Fraunces (display) + Inter (body/UI).

**Section rhythm:** grounds (bone/obsidian/oak) and composition alternate
so no two consecutive sections repeat — checked and adjusted across the
full homepage in this pass.

## Known limitations (flagged, not hidden)
- Google Fonts (Fraunces/Inter) can't be fetched from this sandbox's
  network — builds were verified with fonts temporarily stubbed, then
  restored. This is a sandbox network restriction, not a code defect; it
  will resolve normally in any real deploy environment with internet access.
- The enquiry forms submit client-side only (no backend wired) — hook up
  an API route or a form service (Formspree, Resend, etc.) before going live.
- Insights, sold-out Lahore projects, and all metrics remain placeholders
  pending verified data from JDB.

## Run
```
npm install
npm run dev
```
