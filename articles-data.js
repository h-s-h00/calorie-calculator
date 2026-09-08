/* ══════════════════════════════════════════════════════════════
   Articles data — the only file you'd ever need to touch by hand
   to publish a new post. In practice, use the dashboard
   (admin.html) instead — it edits this file for you automatically.
   ══════════════════════════════════════════════════════════════

   How to add a new article manually (if you're not using the dashboard):
   1) Copy an entire object below (from { to })
   2) Paste it right after the [ character
   3) Change the values:
      - slug: a short English name with no spaces (used in the article URL),
        e.g. "protein-daily-needs"
      - title: the article title
      - excerpt: a one or two sentence description shown on the articles page
      - date: publish date in YYYY-MM-DD format
      - readTime: approximate reading time, e.g. "4 min read"
      - contentHtml: the full article text, each paragraph wrapped in
        <p> and </p>, and subheadings wrapped in <h2> and </h2>
   4) Save the file and upload it to GitHub (replacing the same
      articles-data.js file) — no other file needs to change, and the
      article will show up automatically on /blog.html
   ══════════════════════════════════════════════════════════════ */

window.ARTICLES = [
  {
    slug: "protein-daily-needs",
    title: "How Much Protein Do You Need Daily? The Complete Guide",
    excerpt: "Protein is the most important nutrient for preserving muscle while losing weight or building it. Here's how to calculate your daily need precisely, based on your goal.",
    date: "2026-08-23",
    readTime: "4 min read",
    contentHtml: `
      <p>Once you know your daily calorie needs, the next question comes up naturally: how many grams of protein do you actually need? The number depends on your goal, activity level, and body weight — this guide shows you exactly how to calculate it.</p>

      <h2>Why does protein matter so much?</h2>
      <p>Protein is the core building block for muscle growth and repair, plays a big role in keeping you full for longer, and helps preserve your muscle mass during a calorie deficit (dieting). In other words: you can lose more fat and less muscle if you get enough protein.</p>

      <h2>The quick formula</h2>
      <p>The scientifically backed general rule gives you a range depending on your goal, per kilogram of body weight:</p>
      <ul>
        <li><strong>For general health maintenance:</strong> 0.8 – 1 gram of protein per kilogram</li>
        <li><strong>For weight loss while preserving muscle:</strong> 1.6 – 2.2 grams per kilogram</li>
        <li><strong>For building muscle (bulking):</strong> 1.6 – 2.2 grams per kilogram as well, alongside a calorie surplus</li>
      </ul>
      <p>Example: someone weighing 75 kg aiming to lose weight needs roughly 120 to 165 grams of protein daily.</p>

      <h2>Practical protein sources</h2>
      <p>You don't need supplements to hit your target — most people can get there from food alone:</p>
      <ul>
        <li>Grilled chicken breast (100g ≈ 31g protein)</li>
        <li>Whole eggs (one egg ≈ 6g protein)</li>
        <li>Greek yogurt (100g ≈ 10g protein)</li>
        <li>Cooked lentils (100g ≈ 9g protein)</li>
        <li>Tuna (100g ≈ 26g protein)</li>
      </ul>

      <h2>One last tip</h2>
      <p>Spread your protein across your meals throughout the day instead of eating it all in one sitting — this helps your body make better use of it. And if your weight or goal changes, recalculate your new range the same way.</p>
    `
  },
];
