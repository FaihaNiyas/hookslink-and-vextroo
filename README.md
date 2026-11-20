# Hookslink and Vextroo Group – Links Page

A one-screen link page for **Hookslink** (digital marketing) and **Vextroo Group** (shop fitting and refurbishment).
Customers scan the QR code on the business card and land here to visit the websites and follow the social pages.

- Fits on one screen on phones and laptops, with no scrolling
- Real Facebook, Instagram and TikTok logos
- Plain HTML, CSS and JavaScript – no build step

## Files

```
hookslink-vextroo-links/
├── index.html                  Page layout
├── css/style.css               Design and phone sizing
├── js/script.js                All the links (edit here)
└── assets/images/
    ├── hookslink-logo.webp     Hookslink logo
    ├── vextroo-logo.png        Vextroo Group logo
    └── favicon.svg             Browser tab icon
```

## Change a link

Open `js/script.js` and edit the `LINKS` list at the top. Each button has a `url` – change it and save.

> **To do:** Vextroo's TikTok button currently opens the TikTok homepage. Replace its `url` with the real profile link (for example `https://www.tiktok.com/@yourname`).

## Put it online

**GitHub Pages**
1. Upload these files to a GitHub repository (keep the folders as they are).
2. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
3. Your page will be live at `https://<your-username>.github.io/<repository-name>/` after a minute or two.

**Netlify**
1. In Netlify, choose **Add new site → Import an existing project** and pick this GitHub repository.
2. Leave the build command empty and the publish directory as `/`, then deploy.

## Business card QR codes

Point the QR codes at the live address. To open the page at a company's section, add `#hookslink` or `#vextroo` to the end, for example:

- `https://your-site.netlify.app/#hookslink`
- `https://your-site.netlify.app/#vextroo`
