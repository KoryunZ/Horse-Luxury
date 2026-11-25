/* =====================================================================
   HORSE LUXURY GROUP — concept demo by Aemulus IT
   All content (cars, prices, packages) lives in DATA below.
   PHOTOS: save files into the img/ folders with the names used here.
   A missing photo shows a dark gradient, so nothing looks broken.
   ===================================================================== */
const DATA = {
  whatsapp: "971525305992", phone: "+971 52 530 5992",
  email: "horse.luxury.group@outlook.com",
  address: "48, Azizi Riviera, Nad Al Sheba 1, Dubai, U.A.E.",
  mapsQuery: "HORSE LUXURY CAR RENTAL DUBAI Nad Al Sheba",
  ig: { group: "horseluxurygroup", cars: "horse.luxury.car.rental.dubai", concierge: "horse.luxury.concierge.dubai", buggy: "horse.luxury.buggy.dubai" },
  rating: 4.9, reviews: 90,
  madeBy: { name: "Aemulus IT", url: "https://aemulusit.it.com" },

  // Self-drive fleet. price: 0 = "Price on request" (put their real daily rate in AED)
  cars: [
    { name: "Audi RS Q8", color: "Black", cat: "SUV", price: 0, img: "img/cars/rs-q8-black.jpg" },
    { name: "Mercedes-AMG S63", color: "Silver", cat: "Sedan", price: 0, img: "img/cars/s63-silver.jpg" },
    { name: "BMW 740i M Kit", color: "Grey", cat: "Sedan", price: 0, img: "img/cars/bmw-740i-grey.jpg" },
    { name: "Mercedes-AMG G63", color: "Green", cat: "SUV", price: 0, img: "img/cars/g63-white.jpg" },
    { name: "Ferrari Purosangue", color: "Black & Yellow", cat: "Supercar", price: 0, img: "img/cars/purosangue-white.jpg" },
    { name: "Ferrari Roma Spider", color: "Black", cat: "Supercar", price: 0, img: "img/cars/roma-spider-black.jpg" },
  ],
  // VIP chauffeur (prices from their price list: per day, driver 10 hours, 0 deposit)
  chauffeur: [
    { name: "Rolls-Royce Ghost", spec: "2023 · White, Black or Nardo Grey · 2 rear seats · 507 L", price: 4300, img: "img/chauffeur/ghost.jpg" },
    { name: "Mercedes S500", spec: "2022 · Black, Dark Grey or White · 2 rear seats · 510 L", price: 2400, img: "img/chauffeur/s500.jpg" },
    { name: "Mercedes V250 Falcon Edition", spec: "2024 · Black · 4 rear seats · 400 L", price: 2300, img: "img/chauffeur/v250.jpg" },
    { name: "Cadillac Escalade 600", spec: "2023 · Black or White · 5 rear seats · 720 L", price: 2300, img: "img/chauffeur/escalade.jpg" }
  ],
  yachts: [
    { name: "Blue Yonder Skipper", ft: 40, cap: 10, price: 1500 }, { name: "Cruiser Ammos", ft: 47, cap: 10, price: 800 },
    { name: "Pershing", ft: 55, cap: 8, price: 3500 }, { name: "Carmen", ft: 90, cap: 20, price: 2500 },
    { name: "Lina", ft: 92, cap: 30, price: 2500 }, { name: "Sanlorenzo", ft: 100, cap: 35, price: 3500 },
    { name: "Lady Maïa", ft: 108, cap: 50, price: 7500 }, { name: "Mega", ft: 141, cap: 100, price: 10000 }
  ],
  nautic: [
    ["Jet-ski tour Burj Al Arab", "30 min", 350], ["Jet-ski tour JBR", "1 hour", 600], ["Supercar jet", "20 min", 900],
    ["Mini Zodiac", "45 min · drive your own small boat", 400], ["Scuba diving", "1 hour · diving in the sea", 350],
    ["Diving pool", "30 min · the deepest pool in the world", 1850], ["Jetovator", "30 min · sea water bike", 400],
    ["Hoverboard on water", "40 min", 550], ["Flyboard", "20 min", 320], ["Submarine shark", "20 min · passenger only", 800]
  ],
  experiences: [
    ["Helicopter","🚁"],["Skydive Dubai","🪂"],["Yacht","🛥"],["Jet ski","🌊"],["Desert safari","🏜"],["Buggy Can-Am","🏁"],
    ["Quad Raptor","🛞"],["Ride Formula 3","🏎"],["Ferrari World","🎢"],["Atlantis Park","🔱"],["Ski Dubai","⛷"],["Dolphin show","🐬"],
    ["Zoo","🐅"],["Zoo safari","🦒"],["Museum of the Future","🏛"],["La Perle show","🎭"],["Nightclub showcase","🎤"],["Music video production","🎬"],
    ["Visit Abu Dhabi","🕌"],["Rent a villa","🏡"],["Rent an apartment","🏙"],["Luxury cars","🚘"],["Supercar jet","💨"],["Submarine shark","🦈"]
  ]
};

const $ = id => document.getElementById(id);
const wa = t => `https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(t)}`;
const openWa = t => { const a = document.createElement("a"); a.href = wa(t); a.target = "_blank"; a.rel = "noopener"; document.body.appendChild(a); a.click(); a.remove(); };
const fmt = n => n.toLocaleString("en-US");
const GRAD = {
  car: "radial-gradient(ellipse at 50% 120%,rgba(212,175,106,.4),transparent 60%),linear-gradient(160deg,#221d1b,#0e0c0c)",
  red: "radial-gradient(ellipse at 70% 20%,rgba(200,16,46,.55),transparent 60%),linear-gradient(170deg,#2a1114,#0b0a0a)",
  sand: "radial-gradient(circle at 70% 20%,#f1c27d 0,transparent 30%),linear-gradient(185deg,#c98a4b,#7a4a24 55%,#2a1a0e)",
  sea: "radial-gradient(circle at 30% 15%,#bfe6ff 0,transparent 30%),linear-gradient(185deg,#2a7fb0,#0e3c5c 60%,#081a26)",
  city: "radial-gradient(ellipse at 75% 30%,rgba(212,175,106,.45),transparent 55%),linear-gradient(185deg,#2a2230,#0b0a0a)"
};
function paint() { document.querySelectorAll("[data-img]").forEach(el => { const g = GRAD[el.dataset.g || "car"]; const m = (el.dataset.img || "").match(/(cars|chauffeur)\/([^/]+)\.jpg$/); const ph = m ? `url("img/ph/${m[2]}.svg"),` : ""; el.style.backgroundImage = (el.dataset.img ? `url("${el.dataset.img}"),` : "") + ph + g; }); }

const WA_SVG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.9 1.9 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zM20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.4z"/></svg>';

// shared header + footer on every page
(function chrome() {
  const page = document.body.dataset.page;
  const L = [["home", "index.html", "Home"], ["cars", "cars.html", "Car Rental"], ["safari", "safari.html", "Desert Safari"], ["concierge", "concierge.html", "Concierge"]];
  document.body.insertAdjacentHTML("afterbegin", `
  <div class="ribbon">Concept demo, not the official website. Designed by <a href="${DATA.madeBy.url}" target="_blank" rel="noopener">${DATA.madeBy.name}</a></div>
  <nav><div class="wrap">
    <a class="logo" href="index.html"><img src="img/logo.jpg" alt="Horse Luxury Group logo"><span><b>Horse Luxury</b><small>Group · Dubaï</small></span></a>
    <div class="links">${L.map(([k, h, t]) => `<a class="l ${k === page ? "on" : ""}" href="${h}">${t}</a>`).join("")}
      <a class="btn sm" target="_blank" rel="noopener" href="${wa("Hello Horse Luxury Group!")}">WhatsApp</a></div>
  </div></nav><div class="flag"></div>`);
  document.body.insertAdjacentHTML("beforeend", `
  <section id="contact"><div class="wrap contact">
    <div class="reveal"><div class="eyebrow">Contact</div><h3>Horse Luxury Group</h3>
      <p>${DATA.address}</p><p>Open 24 hours, 7 days</p>
      <p><a class="u" href="tel:+${DATA.whatsapp}">${DATA.phone}</a> · <a class="u" href="mailto:${DATA.email}">${DATA.email}</a></p>
      <p>Instagram: <a class="u" target="_blank" rel="noopener" href="https://instagram.com/${DATA.ig.group}">@${DATA.ig.group}</a></p>
      <div class="cta" style="margin-top:20px"><a class="btn" target="_blank" rel="noopener" href="${wa("Hello Horse Luxury Group!")}">WhatsApp us</a>
      <a class="btn ghost" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DATA.mapsQuery)}">Get directions</a></div></div>
    <iframe class="map reveal" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(DATA.mapsQuery)}&output=embed"></iframe>
  </div></section>
  <footer><div class="wrap"><div>© ${new Date().getFullYear()} Horse Luxury Group · “I'm the best, we the best, for the best” · Concept demo designed by <a href="${DATA.madeBy.url}" style="text-decoration:underline">${DATA.madeBy.name}</a></div>
    <div class="fl">${L.map(([k, h, t]) => `<a href="${h}">${t}</a>`).join("")}</div></div></footer>
  <a class="wa" target="_blank" rel="noopener" aria-label="WhatsApp" href="${wa("Hello Horse Luxury Group!")}">${WA_SVG}</a>`);
})();
function ready() {
  paint();
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}
