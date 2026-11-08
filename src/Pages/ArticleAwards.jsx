import { PageHero, Img } from "../Components/ui";

const FACTS = [
  ["Penamaan Pantai Kelapa", "Pantai ini mendapatkan namanya dari banyaknya pohon kelapa yang menghiasi sekitarnya, menjadikannya mudah diingat oleh para wisatawan."],
  ["Lokasi dan rute", "Terletak di Desa Panyuran, Kecamatan Palang, Kabupaten Tuban, Jawa Timur. Dari pusat kota Tuban, pantai ini berjarak sekitar 5 km. Jika datang dari arah Semarang atau Rembang, ikuti Jalan Pantura hingga mencapai jalur paling utara provinsi Jawa Timur."],
  ["Fasilitas", "Destinasi ini menawarkan berbagai fasilitas seperti flying fox, berkuda, panggung hiburan, tempat bermain anak, dan kolam renang. Ragam kuliner juga tersedia, mulai dari makanan berat hingga minuman menyegarkan seperti es degan."],
  ["Hutan bakau dan pepohonan cemara", "Banyak orang berkunjung ke area hutan bakau yang asri. Di sekitar pantai juga terdapat pepohonan cemara yang rindang, sehingga sebagian wisatawan menyebutnya Pantai Cemara Tuban."],
  ["Tempat berkemah", "Objek wisata ini juga dikenal sebagai bumi perkemahan. Setiap musim liburan, beberapa lembaga pendidikan dari sekitar Tuban, Lamongan, dan Bojonegoro mengadakan kegiatan perkemahan di sini."],
  ["Ikon wisata baru Tuban", "Dukungan dana APBD berhasil mengubah wajah pantai yang dulunya kumuh menjadi tertata rapi, bersih, dan layak dikunjungi sebagai tempat wisata."],
];

export default function ArticleAwards() {
  return (
    <>
      <PageHero
        img="/images/hero-bg2.jpg"
        title="Penghargaan yang diraih Pantai Kelapa Tuban"
        meta="Pokdarwis Pantai Kelapa · 31 Oktober 2023"
      />
      <article className="section">
        <div className="wrap article">
          <h2>Raih Penghargaan Terbaik EJTA 2023</h2>
          <p>
            Segala puji syukur kepada Tuhan Yang Maha Esa, diawali dari niat untuk meningkatkan ekonomi dan manfaat
            kepada masyarakat sampai dapat membawa nama harum Kota Tuban. Pantai Kelapa meraih penghargaan East Java
            Tourism Award (EJTA) 2023 terbaik kategori Wisata Alam Buatan Pengelola Kelompok Masyarakat.
          </p>
          <p>
            Penghargaan diserahkan langsung oleh Gubernur Jawa Timur kepada Kepala Disbudporapar Tuban bersama Ketua
            Pengelola Wisata Pantai Kelapa pada hari Selasa, 31 Oktober 2023, di Taman Candra Wilwatika, Pandaan.
          </p>
          <Img src="/images/blog1.jpg" alt="Penyerahan penghargaan EJTA 2023 kepada Pantai Kelapa" sizes="(max-width: 780px) 100vw, 760px" />

          <h2>Pantai Kelapa di Detik.com</h2>
          <p>
            Tuban di Jawa Timur, yang dikenal sebagai kota santri, memiliki lebih dari sekadar wisata religi.
            Tersembunyi di pesisirnya, terdapat pantai yang asri dan eksotis, yaitu <strong>Pantai Kelapa</strong>.
          </p>
          <h3>Fakta menarik Pantai Kelapa Tuban</h3>
          <ol className="fact-list">
            {FACTS.map(([title, text]) => (
              <li key={title}>
                <strong>{title}.</strong> {text}
              </li>
            ))}
          </ol>

          <h3>Video Pantai Kelapa</h3>
          <div className="video-frame">
            <iframe
              title="Video Pantai Kelapa"
              src="https://www.youtube-nocookie.com/embed/pyuEFIEnMGc"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p>Mari jaga kebersihan dan ketertiban saat berkunjung ke tempat wisata.</p>
        </div>
      </article>
    </>
  );
}
