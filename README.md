# Calorie Calculator — Setup & Deployment Guide

A complete, ready-to-use site (HTML + CSS + JS, no framework), designed as a content tool that earns income via Google AdSense.

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage: calculator + article + FAQ |
| `style.css` | All styling for the entire site (the one file to edit for design changes) |
| `script.js` | Calculation logic, input validation, and result animation |
| `privacy.html` | Privacy policy (required for AdSense approval) |
| `blog.html` | Articles listing page (auto-populated from articles-data.js) |
| `article.html` | Single-article template (reads any article via its URL) |
| `articles-data.js` | Where article content is stored (updated automatically by admin.html) |
| `admin.html` | 🔒 Private dashboard — log in, then add/edit/delete articles with no need to touch GitHub |
| `ads.txt` | Verification file required by AdSense |

## 1) Before publishing: prepare your content

- Open `privacy.html` and fill in the email and date instead of the placeholder text in `[ ]` brackets.
- Change the site name/text logo in `index.html` (search for `Calorie<em>Calc</em>`) if you want a different name.
- If you have your own domain, use it in any absolute links you add later.

## 2) Deployment (fast, free hosting)

Any static file host works out of the box, with no extra setup, for example:

- **Cloudflare Pages** or **Netlify**: drag and drop the site folder into the dashboard, or connect it to a GitHub repository.
- **GitHub Pages**: upload the files to a repository, enable GitHub Pages from Settings.
- Regular paid hosting (cPanel, etc.): upload the files via FTP to the `public_html` folder.

In every case, make sure `index.html` stays in the site's root folder.

## 3) Applying to Google AdSense

1. Go to [google.com/adsense](https://www.google.com/adsense) and create an account with your domain.
2. **Before applying**: make sure there's enough original content (the article + FAQ are already on the page), that `privacy.html` is complete, and that the site runs over **HTTPS**.
3. Once approved, AdSense will give you a script that looks like this:

   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```

   Paste it inside `<head>` in `index.html` and `privacy.html` (a reserved spot for it already exists as a comment inside `<head>` in `index.html`).

4. Update the `ads.txt` file with your real Publisher ID (`pub-XXXXXXXXXXXXXXXX`), and upload it to the site's root.

## 4) Placing ad code in its spots

The site has **5 ready-made, clearly marked slots** in `index.html`:

```html
<div class="ad-slot ad-slot--leaderboard" aria-hidden="true">
  <span class="ad-slot__tag">Advertisement</span>
  <!-- Paste your <ins class="adsbygoogle">...</ins> code here -->
</div>
```

The five spots:
1. Top of the page (wide banner)
2. Right after the calculator result (rectangle)
3. Inside the article (mid-content)
4. Sidebar (shown only on large screens)
5. Before the footer (wide banner)

For each spot, go into your AdSense dashboard to **"Ads" → "By ad unit" → Create new unit**, copy the code it gives you (starts with `<ins class="adsbygoogle" ...>`), and paste it in place of the `<!-- Paste here ... -->` comment inside each `div.ad-slot`.

**Tip:** don't fill all five spots at once if you're just starting out — begin with two or three, and watch performance and user experience before adding more ads. This improves both visitor experience and long-term AdSense approval.

## 5) After activation

- Confirm ads actually appear within 24–48 hours of installing the code (Google needs time to crawl and approve each page).
- Watch your bounce rate and page load speed — too many ads or a slow site reduces both traffic and income.
- Keep adding related health content and articles (e.g., a water intake calculator, a BMI calculator) to grow organic search traffic — that's the real long-term source of passive income, not the number of ads itself.

## 6) Managing articles via the dashboard

- Open `admin.html` on your live site, log in with your dashboard password, and use the **Articles** tab to view, edit, or delete any post, or the **New Article** tab to publish one.
- The dashboard talks directly to your GitHub repository using a personal access key you set up once — see the in-page instructions the first time you open it.
- You can share the same dashboard password with a trusted co-editor (like a friend helping you manage content) so you both have access — there's no need for separate accounts for a small two-person setup.
