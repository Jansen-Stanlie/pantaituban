export const ACTIVITIES = [
  { key: "horse", img: "/images/gallery/berkuda1.jpg" },
  { key: "boat", img: "/images/gallery/perahu2.jpg" },
  { key: "atv", img: "/images/gallery/atv1.jpg" },
  { key: "flyingfox", img: "/images/gallery/flyingfox1.jpg" },
  { key: "pool", img: "/images/gallery/swimmingpool1.jpg" },
  { key: "photo", img: "/images/gallery/spotfot1.jpg" },
  { key: "camping", img: "/images/gallery/camping1.jpg" },
];

export const GALLERY_CATEGORIES = ["berkuda", "atv", "flyingfox", "swimmingpool", "camping", "terapigaram", "others"];

export const GALLERY = [
  { img: "/images/gallery/acara1.jpg", category: "others" },
  { img: "/images/gallery/camping1.jpg", category: "camping" },
  { img: "/images/gallery/berkuda1.jpg", category: "berkuda" },
  { img: "/images/gallery/atv1.jpg", category: "atv" },
  { img: "/images/gallery/flyingfox.jpg", category: "flyingfox" },
  { img: "/images/gallery/swimmingpool1.jpg", category: "swimmingpool" },
  { img: "/images/gallery/Terapigaram1.jpg", category: "terapigaram" },
  { img: "/images/gallery/acara2.jpg", category: "others" },
  { img: "/images/gallery/camping4.jpg", category: "camping" },
  { img: "/images/gallery/atv4.jpg", category: "atv" },
  { img: "/images/gallery/flyingfox1.jpg", category: "flyingfox" },
  { img: "/images/gallery/acara3.jpg", category: "others" },
  { img: "/images/gallery/acara4.jpg", category: "others" },
  { img: "/images/gallery/acara6.jpg", category: "others" },
  { img: "/images/gallery/berkuda2.jpg", category: "berkuda" },
  { img: "/images/gallery/perahu2.jpg", category: "others" },
];

const poster = (file) => `/images/template wahana/${file}.png`;

// Harga mengikuti poster wahana. Saat harga berubah, perbarui poster dan data ini.
// `activity` menautkan wahana ke pilihan paket yang sudah ada di ACTIVITIES.
export const WAHANA = [
  { key: "boom", img: poster("Spot_foto") },
  { key: "berkuda", img: poster("Berkuda"), activity: "horse", prices: [{ amount: 20000 }] },
  { key: "atv", img: poster("Atv"), activity: "atv", prices: [{ amount: 25000 }] },
  {
    key: "flyingfox",
    img: poster("FlyingFox"),
    activity: "flyingfox",
    prices: [
      { amount: 10000, label: "child" },
      { amount: 15000, label: "adult" },
    ],
  },
  { key: "kolam", img: poster("Swimming"), activity: "pool", prices: [{ amount: 10000 }] },
  { key: "terapi", img: poster("Terapi"), prices: [{ amount: 25000 }] },
  { key: "tunnel", img: poster("Tunnel") },
  { key: "seafood", img: poster("Seafood") },
  { key: "mobil", img: poster("mobil-listrik"), prices: [{ amount: 15000 }] },
  { key: "panggung", img: poster("panggung-gembira") },
  { key: "cafe", img: poster("Cafe") },
];

export const activityLabelKey = (key) => `activities.${key}.name`;

/** Kunci terjemahan nama paket untuk sebuah wahana. */
export const wahanaPackageKey = (item) =>
  item.activity ? activityLabelKey(item.activity) : `wahana.items.${item.key}.name`;

export const PACKAGE_KEYS = [
  ...ACTIVITIES.map(({ key }) => activityLabelKey(key)),
  ...WAHANA.filter((item) => !item.activity).map(wahanaPackageKey),
];

export const TEAM = [
  { img: "/images/Pengurus_0000.jpg", name: "Muhasan, SH.", role: "chair" },
  { img: "/images/Pengurus_0001.jpg", name: "Mokhamad Khanafi", role: "viceChair" },
  { img: "/images/Pengurus_0003.jpg", name: "Heri Poernomo, SE.", role: "secretary1" },
  { img: "/images/Pengurus_0002.jpg", name: "Muhammad Ludfi, A.Md.", role: "secretary2" },
  { img: "/images/Pengurus_0006.jpg", name: "Ahmad Rofiq, ST.", role: "treasurer1" },
  { img: "/images/Pengurus_0004.jpg", name: "Muhammad Hariyono", role: "treasurer2" },
  { img: "/images/Pengurus_0005.jpg", name: "Sujito", role: "entertainment" },
  { img: "/images/Pengurus_0007.jpg", name: "Ahmad Ikhwan", role: "rides" },
  { img: "/images/Pengurus_0008.jpg", name: "Zaenal Abidin", role: "entertainment" },
];

export const TESTIMONIALS = [
  { name: "David Bayu Nur Fauzi", role: "Content Creator", quote: "t1" },
  { name: "D. Ayu Puspita A.", role: "Travel Blogger", quote: "t2" },
  { name: "Yan Ardi Abdul Hakim", role: "Travel Blogger", quote: "t3" },
  { name: "Nafisa", role: "Family Vacationer", quote: "t4" },
];

export const FAQ_KEYS = ["q1", "q2", "q3", "q4"];

export const ABOUT_VIDEO = [
  { type: "VIDEO", url: "https://www.youtube.com/watch?v=pyuEFIEnMGc", title: "Video Pantai Kelapa Tuban" },
];
