/*
  Hookslink and Vextroo Group link page
  -------------------------------------
  To change a link, edit the LINKS list below. The buttons on the page are built from it.

  Each link has:
    type   - which icon to show: "web", "mail", "facebook", "instagram" or "tiktok"
    label  - the button name
    handle - the address shown on the website button (for example "hookslink.com")
    url    - where the button goes
*/

const LINKS = {
  hookslink: [
    { type: "facebook",  label: "Facebook",  handle: "Hookslink",          url: "https://www.facebook.com/share/9dvBCWFuXyN1ytF7/" },
    { type: "instagram", label: "Instagram", handle: "@hookslink",         url: "https://www.instagram.com/hookslink" },
    { type: "web",       label: "Website",   handle: "hookslink.com",      url: "https://hookslink.com" },
    { type: "tiktok",    label: "TikTok",    handle: "@hookslink",         url: "https://www.tiktok.com/@hookslink" },
    { type: "mail",      label: "Email",     handle: "info@hookslink.com", url: "mailto:info@hookslink.com" }
  ],
  vextroo: [
    { type: "facebook",  label: "Facebook",  handle: "Vextroo Group",      url: "https://www.facebook.com/profile.php?id=61579040904026" },
    { type: "instagram", label: "Instagram", handle: "@vextro_group",      url: "https://www.instagram.com/vextro_group" },
    { type: "web",       label: "Website",   handle: "vextroo.co.uk",      url: "https://vextroo.co.uk" },
    // TODO: replace with Vextroo's real TikTok profile link, for example https://www.tiktok.com/@yourname
    { type: "tiktok",    label: "TikTok",    handle: "Vextroo Group",      url: "https://www.tiktok.com/" },
    { type: "mail",      label: "Email",     handle: "info@vextroo.co.uk", url: "mailto:info@vextroo.co.uk" }
  ]
};

/* Buttons appear in the order above, in rows of 2, 1, 2.
   The "web" link becomes the wide coloured "Visit ..." button in the middle. */

(function () {
  // Simple line icons (use the button's text colour)
  const lineIcons = {
    web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>'
  };

  // Full-colour brand logos
  const tiktokNote = "M16.6 3h-3.2v12.3a2.8 2.8 0 11-2.8-2.8c.3 0 .6 0 .9.1V9.3a6 6 0 10 5.1 5.9V9a7.6 7.6 0 004.4 1.4V7.2A4.4 4.4 0 0116.6 3z";
  const brandLogos = {
    facebook:
      '<circle cx="12" cy="12" r="12" fill="#1877F2"/>' +
      '<path fill="#fff" d="M13.4 24v-8.4h2.8l.45-3.3H13.4v-2.1c0-.95.27-1.6 1.63-1.6h1.74V5.65c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.2 1.53-4.2 4.33v2.43H7.2v3.3h2.84V24z"/>',
    instagram:
      '<rect width="24" height="24" rx="6.5" fill="url(#igg)"/>' +
      '<rect width="24" height="24" rx="6.5" fill="url(#igp)"/>' +
      '<rect x="5" y="5" width="14" height="14" rx="4.2" fill="none" stroke="#fff" stroke-width="1.9"/>' +
      '<circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" stroke-width="1.9"/>' +
      '<circle cx="16.3" cy="7.7" r="1.05" fill="#fff"/>',
    tiktok:
      '<rect x=".5" y=".5" width="23" height="23" rx="6" fill="#000" stroke="#ffffff40"/>' +
      '<g transform="translate(2.6 2.4) scale(.78)">' +
        '<path d="' + tiktokNote + '" fill="#25F4EE" transform="translate(-.7 -.5)"/>' +
        '<path d="' + tiktokNote + '" fill="#FE2C55" transform="translate(.7 .5)"/>' +
        '<path d="' + tiktokNote + '" fill="#fff"/>' +
      '</g>'
  };

  const escapeHtml = (text) =>
    text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const isWebLink = (url) => /^https?:/.test(url);

  function buildButton(link) {
    const isMain = link.type === "web";
    const text = isMain ? "Visit " + link.handle : link.label;

    const icon = brandLogos[link.type]
      ? '<svg class="bl" viewBox="0 0 24 24" aria-hidden="true">' + brandLogos[link.type] + "</svg>"
      : '<svg class="g" viewBox="0 0 24 24" aria-hidden="true">' + lineIcons[link.type] + "</svg>";

    const arrow = isMain
      ? '<svg class="g go" viewBox="0 0 24 24" aria-hidden="true">' + lineIcons.arrow + "</svg>"
      : "";

    const newTab = isWebLink(link.url) ? ' target="_blank" rel="noopener"' : "";

    return (
      '<li><a class="b' + (isMain ? " main" : "") + '" href="' + escapeHtml(link.url) + '"' + newTab + ">" +
      icon + escapeHtml(text) + arrow +
      "</a></li>"
    );
  }

  document.getElementById("hk-rows").innerHTML = LINKS.hookslink.map(buildButton).join("");
  document.getElementById("vx-rows").innerHTML = LINKS.vextroo.map(buildButton).join("");
})();
