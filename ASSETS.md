# Email Template Assets

| Asset | Dimensions (rendered) | Usage |
| --- | --- | --- |
| `assets/header_gradient_1200x340.png` | 600 × 170 | Header band background across all templates; Outlook VML fill + non-MSO background image. |
| `assets/section_gradient_1200x440.png` | 600 × 220 (scaled as needed) | Gradient frame for mission cards, evidence cards, milestone/update/custom sections, and the narrow mission card variant (scaled to 280 px width). |
| `assets/footer_strip_1200x8.png` | 600 × 4 | Footer gradient divider immediately above the campaign signature. |
| `assets/TEXT_LUNA_26.png` | 96 × 27 | Gradient wordmark “LUNA” in header headings (Outlook fallback). |
| `assets/TEXT_LUNA_17.png` | 69 × 20 | Gradient “LUNA” inline text within paragraphs/lists (Outlook fallback). |
| `assets/TEXT_AUTHORISE_20.png` | 145 × 23 | Gradient “AUTHORISE” keyword in the mission bullet list (Outlook fallback). |
| `assets/TEXT_UNSUBSCRIBE_16.png` | 144 × 20 | Gradient “UNSUBSCRIBE” call-to-action in the footer (Outlook fallback). |
| `assets/Luna-logo.png` | 56 × 56 | Circular campaign logo in the header. |

All image URLs resolve to `https://petition.lunasenregulator.org.uk/assets/…` inside the updated templates. Outlook (MSO) branches use VML `v:rect`/`v:roundrect` elements; non-MSO branches reference the same assets via standard background images or inline `<img>` tags.



