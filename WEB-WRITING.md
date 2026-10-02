# Website writing guide

Rules for pages on standlymusic.com, especially the guides in `docs/guides/`.

This guide adapts the in-app help style guide (`Standly/docs/help-style.md`).
Help text is impersonal reference material. Website guides are written by a
musician for musicians, so a few help rules are relaxed. Everything else carries
over, because the same rules that make help clear also keep pages from reading
as machine-written.

## What changes from the help style guide

| Help text | Website guides |
| --- | --- |
| Impersonal. "We" never appears. | First person is allowed and encouraged. "I play trombone and use a 13-inch Envy on my stand." |
| No contractions. | Contractions are fine. Write the way you talk. |
| No rationale or motives. | Explaining why is the point of a guide. |
| Links only to other help topics. | Link to other guides, the landing page, and the Store listing. |

## What carries over unchanged

- **No em dashes.** Use a comma, a full stop, or a colon.
- **No intensifiers:** just, simply, very, really, truly, incredibly, seamlessly.
- **No figurative language or idioms** unless it is how musicians actually talk
  ("on the stand", "the book", "a chart" are fine).
- **No rhetorical questions.** A question is fine only as a heading that
  matches something people search for.
- **One idea per sentence.** Aim for under 25 words.
- **Use Standly's UI labels exactly, in bold:** **Settings → Input bindings**,
  **Keep screen on**, **Half-page navigation**.
- **Terminology** follows the help guide's table: set list (not setlist),
  annotation, piece, pen (not stylus), two-page view.

## Phrases to avoid

These are the most common tells of machine-written marketing copy.

- "Whether you're a … or a …"
- "Say goodbye to …", "Ditch the …", "Take your … to the next level"
- "Seamless", "effortless", "robust", "elevate", "unlock", "game-changer"
- "In today's digital world", "Let's dive in", "In this guide, we'll …"
- Groups of three adjectives ("fast, simple, and powerful")
- Closing paragraphs that restate the whole page

## What makes a guide worth reading

- **Specific gear.** Name the device, the screen size, the remote. Say what you
  own and what you have not tested.
- **Your own photos.** A phone photo of a real stand in a real rehearsal room
  beats a polished render.
- **Honest limits.** Say when something does not work well, including in
  Standly. Readers trust a page that admits a tradeoff.
- **Numbers.** Sizes, percentages, prices, battery hours.
- **Standly appears where it helps**, usually two or three times per guide. A
  guide that only sells does not rank and does not get linked.

## Page mechanics

- New guides start with `<meta name="robots" content="noindex">` and are left
  out of `sitemap.xml`. Remove the tag and add the sitemap entry when the page
  is final.
- Store links use a campaign ID so Partner Center reports which page drove the
  install: `https://apps.microsoft.com/detail/9NQJ7P5FTQ6D?cid=guide-<slug>`.
- Each guide has its own `<title>`, meta description, and canonical URL.
