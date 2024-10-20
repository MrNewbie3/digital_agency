import React from "react";

export default function FaQ() {
  // Array of objects
  const contens = [
    {
      id: 1,
      title: "Apakah terdapat garansi?",
      description:
        "Tentu saja! Di @icdigital.id, kami berkomitmen untuk memberikan hasil terbaik bagi setiap klien kami. Itulah sebabnya kami menawarkan garansi pada layanan digital marketing kami. Jika Anda merasa tidak puas dengan hasil yang kami berikan, kami siap untuk bekerja sama dengan Anda hingga mencapai hasil yang diinginkan.",
    },
    {
      id: 2,
      title: "Bagaimana cara memulai kerjasama dengan @icdigital.id?",
      description:
        "Untuk memulai kerjasama dengan @icdigital.id, Anda bisa mengikuti beberapa langkah berikut: \n1. Kunjungi Website atau Media Sosial: Pertama, kunjungi situs web resmi atau akun media sosial @icdigital.id. Ini akan memberi Anda gambaran umum tentang layanan yang mereka tawarkan dan cara mereka bekerja.\n 2. Hubungi Melalui Kontak yang Tersedia: Cari informasi kontak seperti email, nomor telepon, atau formulir kontak di situs web mereka. Hubungi mereka untuk mengungkapkan minat Anda dalam kerjasama. Jelaskan secara singkat tentang bisnis Anda dan bagaimana Anda ingin berkolaborasi. \n 3. Jadwalkan Pertemuan atau Diskusi: Setelah menghubungi mereka, mungkin mereka akan mengatur pertemuan atau diskusi untuk membahas lebih lanjut. Siapkan pertanyaan atau topik yang ingin Anda bahas selama pertemuan. \n 4. Negosiasi dan Persetujuan: Setelah mendiskusikan detail kerjasama, Anda bisa mulai negosiasi mengenai syarat dan ketentuan kerjasama. Pastikan semua pihak sepakat sebelum melanjutkan. \n 5. Tandatangani Kontrak Kerjasama: Setelah semua detail disepakati, biasanya akan ada kontrak kerjasama yang perlu ditandatangani oleh kedua belah pihak. Pastikan Anda memahami setiap poin dalam kontrak sebelum menandatanganinya.",
    },
    {
      id: 3,
      title: "Apakah @icdigital.id menawarkan konsultasi awal gratis?",
      description:
        "@icdigital.id menawarkan konsultasi awal secara gratis bagi calon klien. Ini memberikan Anda kesempatan untuk berdiskusi langsung dengan tim mereka mengenai kebutuhan bisnis atau proyek Anda tanpa biaya. Dalam sesi konsultasi ini, Anda dapat menguraikan tujuan Anda, tantangan yang dihadapi, dan harapan Anda terhadap layanan yang mereka tawarkan. Tim dari @icdigital.id akan memberikan saran dan solusi awal yang sesuai dengan kebutuhan Anda. Sesi ini dirancang untuk membantu Anda memahami bagaimana @icdigital.id dapat mendukung dan mengembangkan proyek Anda sebelum Anda memutuskan untuk melanjutkan ke tahap kerjasama yang lebih formal.",
    },
    {
      id: 4,
      title: "Berapa lama biasanya proses pembuatan website?",
      description:
        "Proses pengerjaan proyek di @icdigital id memiliki durasi yang bervariasi tergantung pada jenis proyek yang dikerjakan:\n 1. Social Media Management: Untuk layanan manajemen media sosial, proses biasanya memakan waktu sekitar 1 bulan per klien. Selama periode ini, tim @icdigital.id akan melakukan analisis, merancang strategi konten, membuat dan mengatur postingan, serta memantau dan melaporkan hasilnya untuk memastikan bahwa tujuan bisnis klien tercapai.\n 2. Pengembangan Website: Untuk proyek pengembangan website, durasi pengerjaan biasanya sekitar 14 hari kerja. Dalam periode ini, tim akan bekerja mulai dari perencanaan, desain, hingga pengembangan dan pengujian akhir sebelum website tersebut diluncurkan. \n Setiap proyek dikerjakan dengan perhatian terhadap detail dan disesuaikan dengan kebutuhan spesifik klien, memastikan hasil akhir yang optimal.",
    },
  ];
  return (
    <section className=" p-8 text-primary-grey flex flex-col gap-10 ">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-main">Frequently Asked Questions</h2>
        <p className="lg:text-lg mt-2 lg:max-w-2xl text-center">
          Di sini, Anda akan menemukan jawaban atas pertanyaan-pertanyaan yang sering diajukan oleh pelanggan kami. Bagian ini dirancang untuk memberikan informasi cepat dan membantu Anda memahami layanan yang kami tawarkan.{" "}
        </p>
      </div>

      {/* Flexbox container with wrapping */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Map over the array to generate the benefit cards */}
        {contens.map((benefit) => (
          <div className="collapse collapse-arrow join-item border-gray-200 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium text-blue-main capitalize">{benefit.title}</div>
            <div className="collapse-content ">
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
