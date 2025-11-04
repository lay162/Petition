LUNA SEN Regulator — SRQF Petition Static Site
================================================

DEPLOYMENT INSTRUCTIONS
-----------------------

1. Upload the entire /site folder to your hosting provider:
   - Netlify: Drag and drop the /site folder
   - Vercel: Connect GitHub repo or drag and drop
   - GitHub Pages: Upload to repository
   - Any static hosting service

2. Your site will be live at your domain with these pages:
   - /index.html (main petition page)
   - /privacy.html (privacy policy)
   - /docs/* (evidence documents)
   - /assets/* (favicon, og image)

UPDATING CONTENT
----------------

1. Parliament Petition URL:
   - Edit /site/index.html
   - Find: https://petition.parliament.uk/petitions/REPLACE_WITH_ID
   - Replace REPLACE_WITH_ID with actual petition ID

2. Manual Parliament Tally:
   - Edit /site/index.html
   - Find: const MANUAL_PARLIAMENT_TALLY = 0;
   - Update the number daily

3. LUNA Campaign Form URL:
   - Edit /site/index.html
   - Find: https://forms.gle/REPLACE_WITH_YOUR_FORM
   - Replace with your actual Google Form URL

EVIDENCE FILES
--------------

Replace these placeholder files in /site/docs/ with your actual documents:

✅ COMPLETED:
- ofqual-response.pdf
  Source: "Ofqual - response to letter before claim (Lauren Moore) - 19 September 2025 (2).pdf"

- ofqual-email-thread.pdf  
  Source: Gmail thread with Ofqual legal correspondence

📋 STILL NEEDED:
- briefing-note.docx
  Source: "LUNA_Annex_A_Briefing_v2 (2).docx"

- dfe-reply.pdf
  Source: "2025-0028093 - Justin Madders MP - Signed (2).pdf"

- mp-referral.pdf
  Source: "letter44404 (3).pdf"

- inconsistency-evidence.pdf
  Source: Your Ofqual inconsistency documentation

ASSETS
------

Replace these placeholder files in /site/assets/:

- favicon.ico (use your LUNA favicon)
- luna_og.jpg (use your LUNA Open Graph image)

BRAND COLORS
------------

The site uses exact LUNA brand tokens from LUNA-REG-AUG:
- Primary: #ff69b4 (LUNA pink)
- Secondary: #7ad7f0 (LUNA blue)
- Text: #334155 (LUNA text-primary-dark)
- Font: Inter (matches LUNA brand)

TECHNICAL NOTES
---------------

- Pure HTML/CSS/JS - no build process required
- Uses Tailwind CSS via CDN
- Fully responsive design
- Accessible (WCAG AA compliant)
- SEO optimized with proper meta tags

The site is ready to deploy immediately once you add the evidence files and update the URLs.
