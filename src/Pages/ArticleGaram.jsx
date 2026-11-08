import { useTranslation } from "react-i18next";
import { LuDownload } from "react-icons/lu";
import { Img, PageHero } from "../Components/ui";
import { SITE } from "../data/site";

const PROCESS_IMAGES = ["/images/garam/garam1.png", "/images/garam/garam2.png", "/images/garam/garam3.png"];
const THERAPY_IMAGES = [
  "/images/garam/garam-ed1.jpg",
  "/images/garam/garam-ed2.jpg",
  "/images/garam/garam-ed3.jpg",
  "/images/garam/garam-ed4.jpg",
  "/images/garam/garam-ed5.jpg",
  "/images/garam/bg-garam4.jpg",
];

const ImageGrid = ({ images, alt }) => (
  <div className="article-grid">
    {images.map((src, i) => (
      <Img key={src} src={src} alt={`${alt} ${i + 1}`} sizes="(max-width: 640px) 50vw, 250px" />
    ))}
  </div>
);

export default function ArticleGaram() {
  const { t } = useTranslation();
  const guide = (
    <a href={encodeURI(SITE.gstGuide)} download className="btn btn-sun">
      <LuDownload aria-hidden="true" /> {t("page.download")}
    </a>
  );

  return (
    <>
      <PageHero
        img="/images/garam/bg-garam3.jpg"
        title="Edukasi pembuatan garam: dari air laut menjadi kristal berkualitas"
        meta="Pokdarwis Pantai Kelapa · 21 April 2025"
      >
        {guide}
      </PageHero>
      <article className="section">
        <div className="wrap prose">
          <h2>Manfaat garam alami di Pantai Kelapa</h2>
          <p>
            Di tengah meningkatnya kesadaran akan gaya hidup sehat, produk lokal seperti{" "}
            <strong>Garam Pantai Kelapa dari Tuban, Jawa Timur</strong> menjadi elemen penting dalam mendukung
            keseimbangan tubuh. Garam ini kaya akan mineral alami seperti magnesium dan kalium, yang bermanfaat untuk
            menjaga keseimbangan elektrolit dan fungsi tubuh secara keseluruhan.
          </p>
          <p>
            Garam Pantai Kelapa dihasilkan melalui metode <strong>GST (Greenhouse Salt Tunnel)</strong> dan{" "}
            <strong>CDM (Continuous Dynamic Mixing)</strong>, yang menggabungkan proses alami dengan teknologi modern
            untuk menjaga kemurnian mineral.
          </p>
          <Img src="/images/garam/bg-garam2.jpg" alt="Area produksi garam Pantai Kelapa" sizes="(max-width: 780px) 100vw, 760px" />

          <h2>GST dan CDM</h2>
          <p>
            Greenhouse Salt Tunnel adalah terobosan untuk mengatasi ketergantungan produksi garam terhadap cuaca.
            Dengan sistem rumah kaca yang dilengkapi sirkulasi udara, lapisan plastik UV, dan geomembrane, GST mampu
            mempercepat kristalisasi dan meningkatkan hasil produksi garam rakyat hingga 70%. Hasilnya adalah garam
            berkualitas K-1 sesuai standar SNI.
          </p>
          <p>
            Dipadukan dengan metode Continuous Dynamic Mixing, teknologi ini memungkinkan produksi garam tetap berjalan
            meski di musim hujan.
          </p>
          <ImageGrid images={PROCESS_IMAGES} alt="Proses pembuatan garam" />

          <h2>Green House Salt Tunnel Pantai Kelapa</h2>
          <div className="video-frame">
            <iframe
              title="Green House Salt Tunnel Pantai Kelapa"
              src="https://www.youtube-nocookie.com/embed/6rsq1jodaMU"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p>
            Keberadaan Green House Salt Tunnel tidak hanya menjadi sarana edukasi bagi pelajar, tetapi juga inovasi
            dalam dunia wisata dan kesehatan. Proses produksi di dalam tunnel berlangsung lebih higienis, aman, dan
            nyaman, sehingga cocok untuk dijadikan tempat pembelajaran.
          </p>

          <h2>Terapi garam di tempat wisata</h2>
          <p>
            Melihat tingginya antusiasme pengunjung, Pantai Kelapa menghadirkan sesuatu yang bukan hanya menyegarkan
            mata, tetapi juga menyehatkan tubuh.
          </p>
          <blockquote>
            Terapi garam itu kita manfaatkan untuk memanjakan wisatawan di Pantai Kelapa ketika habis dari perjalanan
            jauh pasti mereka pegal, capek, reumatik dan sebagainya, dan inilah solusinya.
            <cite>Muhasan</cite>
          </blockquote>
          <ImageGrid images={THERAPY_IMAGES} alt="Terapi garam Pantai Kelapa" />
          <p>
            Terapi garam ini dapat membantu meredakan pegal-pegal dan melancarkan peredaran darah. Cocok untuk Anda yang
            ingin melepas penat dalam satu kunjungan.
          </p>
          {guide}
        </div>
      </article>
    </>
  );
}
