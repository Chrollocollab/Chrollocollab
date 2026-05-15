/**
 * i18n.js — Bilingual EN / BM language engine
 * Uses data-i18n (textContent) and data-i18n-html (innerHTML) attributes.
 * Language preference is persisted in localStorage.
 */
(function () {

  // ─── TRANSLATIONS ──────────────────────────────────────────────────────────
  var t = {
    en: {
      // NAV
      nav_home: 'Home',
      nav_about: 'About',
      nav_service: 'Service',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Contact',
      nav_hire: 'Hire Me',
      // OFFCANVAS
      offcanvas_desc: 'Full-stack Software Developer based in Shah Alam, Selangor.',
      offcanvas_info: 'Information',
      // INDEX HERO
      hero_subtitle_html: 'Full-stack Software Developer, currently at<br>Olive Intelligent Management, Shah Alam',
      // INDEX CARDS
      about_label: 'ABOUT',
      about_tagline_html: '👋 Hi, I\'m afiez<br>👀 Interested in programming<br>🌱 Learning JS, Laravel &amp; more<br>💞️ Open to collaborate on web dev',
      about_read_more: 'Read more about',
      years_exp: '3+ Years Experience',
      career_label: 'CAREER',
      stack_label: 'TECH STACK',
      stack_utilize: 'Stack I utilize.',
      // INDEX SERVICE SLIDER
      svc_01_num: 'SKILL 01',
      svc_02_num: 'SKILL 02',
      svc_03_num: 'SKILL 03',
      svc_backend_title: 'Backend Development',
      svc_backend_desc: 'PHP 8, Laravel 11.x, Lumen — building scalable enterprise systems using Raw Query (MySQL & PostgreSQL) and Eloquent ORM for government and academic institutions.',
      svc_api_title: 'REST API Design',
      svc_api_desc: 'Architecting secure RESTful APIs using Lumen for enterprise platforms serving thousands of concurrent users.',
      svc_devops_title: 'Server & DevOps',
      svc_devops_desc: 'End-to-end server setup with Nginx/Apache, CI/CD via GitHub Actions, and deployment via Git across environments.',
      // INDEX CONTACT
      contact_title_html: "Let's build something <span>together</span>",
      contact_slide: 'I am always ready to help you with quality services',
      // ABOUT PAGE
      about_bio_html: '<p class="fw-500 mb-25">Mid-Level Software Developer with 3+ years of experience engineering scalable web applications and enterprise systems. I specialise in PHP (Laravel/Lumen), JavaScript, and PostgreSQL/MySQL, with a proven track record of delivering high-impact e-government, academic, and administrative platforms.</p><p class="fw-500">Currently a Software Developer at <span>Olive Intelligent Management Sdn Bhd</span>, building enterprise systems for government agencies and academic institutions across Malaysia.</p>',
      work_exp_title: 'Work experience',
      job_olive: 'Software Developer',
      job_netcare: 'Network Engineer Trainee',
      core_projects_title: 'Core Projects',
      proj_akses_desc: 'Centralised portal for 46 state-aid programmes (akses.selangor.gov.my)',
      proj_picoms_desc: 'eHEPA (admin) & eAcademic (students) for Kolej Universiti Antarabangsa MAIWP',
      proj_intan_desc: "ePenilaian, Booking4U, CTMG, Media INTAN for Malaysia's premier public sector training institution",
      proj_elmas_desc: 'Community management system for Pejabat DUN/Parlimen (latest project)',
      education_title: 'Education',
      degree_name: 'B.Eng. Electronic Engineering Technology (Hons.)',
      diploma_name: 'Diploma in Electronic Engineering',
      stay_with_me: 'Stay with me',
      years_exp_label: 'Years experience',
      my_cv: 'My CV',
      cv_view: 'View',
      cv_download: 'Download',
      // SERVICE PAGE
      systems_delivered: 'Systems delivered',
      apis_built: 'APIs built',
      databases_designed: 'Databases designed',
      uis_delivered: 'UIs delivered',
      pipelines_done: 'Pipelines configured',
      servers_setup: 'Servers provisioned',
      svc_db_title: 'Database Architecture',
      svc_db_desc: 'Relational database design and complex migrations using PostgreSQL and MySQL for high-traffic government portals.',
      svc_frontend_title: 'Frontend Development',
      svc_frontend_desc: 'JavaScript (ES6+), jQuery, Bootstrap 4/5, HTML5, CSS3 — responsive admin portals and public-facing web applications.',
      svc_cicd_title: 'CI/CD & DevOps',
      svc_cicd_desc: 'Automated pipelines via GitHub Actions, containerised deployments with Docker, and Git-based workflows across staging and production.',
      svc_server_title: 'Server Provisioning',
      svc_server_desc: 'Ubuntu server setup, Nginx/Apache configuration, SSL management, and environment hardening for enterprise deployments.',
      // PORTFOLIO LABELS
      lbl_project: 'Project',
      lbl_client: 'Client',
      lbl_role: 'Role',
      lbl_stack: 'Stack',
      lbl_status: 'Status',
      lbl_details: 'Project details',
      lbl_other: 'Other Projects',
      btn_open_web: 'Open website link',
      lbl_in_progress: 'Latest Project — In Progress',
      // PORTFOLIO AKSES
      akses_role: 'Lead Developer',
      akses_details_html: '<p class="tp-portfolio-text mb-20">AKSES (Aplikasi KitaSelangor Sepadu) is a centralised state-aid portal under the <strong>Iltizam KitaSelangor Penyayang</strong> initiative by the Selangor State Government. The platform consolidates <strong>46 government aid programmes</strong> into a single digital system accessible to all levels of Selangor society.</p><p class="tp-portfolio-text mb-20">The system serves as a digital one-stop centre for welfare aid applications — from cash assistance, housing, and education to support for persons with disabilities (OKU). Selangor citizens can apply, check status, and receive updates through a single platform.</p><p class="tp-portfolio-text mb-30">Involved in developing the admin portal and public portal, as well as managing complex database migrations. Previously known as <strong>SSIPR</strong> before rebranding as AKSES.</p>',
      // PORTFOLIO PICOMS
      picoms_role: 'Full-stack Developer',
      picoms_details_html: '<p class="tp-portfolio-text mb-20">Developed critical modules for a major university under Majlis Agama Islam Wilayah Persekutuan (MAIWP). The system digitises key academic and administrative workflows across two core platforms.</p><p class="tp-portfolio-text mb-20"><strong>eHEPA</strong> — Student Affairs management system for admin staff. Handles hostel management, discipline records, saman, and student welfare operations with a full Role-Based Access Control (RBAC) workflow.</p><p class="tp-portfolio-text mb-30"><strong>eAcademic</strong> — Self-service student portal for academic tracking. Students can check CGPA, GPA, subject marks, academic history, and all records related to their academic journey.</p>',
      // PORTFOLIO INTAN
      intan_role: 'Backend & API Developer',
      intan_details_html: '<p class="tp-portfolio-text mb-20">Engineered and maintained multiple production platforms for Institut Tadbiran Awam Negara (INTAN), Malaysia\'s premier public sector training institution. All systems are built using secure RESTful APIs via Lumen, serving staff and management across INTAN\'s nationwide network.</p><p class="tp-portfolio-text mb-10"><strong>ePenilaian</strong></p><p class="tp-portfolio-text mb-20">Course and training evaluation system for civil servants. Covers multiple assessment categories — including ICT courses via the ISAC module, English language assessment (ELPA), leadership courses, and special examinations conducted by INTAN.</p><p class="tp-portfolio-text mb-10"><strong>Booking4U</strong> — <a href="https://booking2u.intan.my/" target="_blank" style="color:inherit;text-decoration:underline;">booking2u.intan.my</a></p><p class="tp-portfolio-text mb-20">INTAN facility booking system. Allows staff and participants to book seminar rooms, meeting rooms, dormitories, halls, and other facilities with slot management, approvals, and usage reports.</p><p class="tp-portfolio-text mb-10"><strong>CTMG (Competency Tracking & Monitoring Gateway)</strong></p><p class="tp-portfolio-text mb-20">Civil servant competency monitoring and management platform. Enables ILA (Individual Learning Account) course registration, competency development tracking, and automated training performance reporting.</p><p class="tp-portfolio-text mb-10"><strong>Media INTAN</strong> — <a href="https://media.intan.my/" target="_blank" style="color:inherit;text-decoration:underline;">media.intan.my</a></p><p class="tp-portfolio-text mb-30">INTAN\'s centralised multimedia repository. Stores and manages training videos, presentation slides, e-learning modules, and digital content for staff and course participants nationwide.</p>',
      // PORTFOLIO ELMAS
      elmas_role: 'Lead Developer',
      elmas_details_html: '<p class="tp-portfolio-text mb-20">eLMAS Community is a community management system built specifically for <strong>Pejabat DUN (Dewan Undangan Negeri)</strong> and <strong>Parlimen offices</strong> across Malaysia. The platform digitalises constituent management processes previously done manually using physical forms.</p><p class="tp-portfolio-text mb-20">Citizens can now submit <strong>complaints, aid applications, and programme enquiries</strong> online, while elected representatives\' offices can track, review status, and manage all records more efficiently and transparently.</p><p class="tp-portfolio-text mb-30">This is the latest project under Olive Intelligent Management, extending the enterprise system portfolio to serve elected representatives and their offices at state and federal level.</p>',
      // COPYRIGHT
      copyright: '© 2026 Mohd Afiez Bin Abdul Haris. All rights reserved.'
    },

    bm: {
      // NAV
      nav_home: 'Laman Utama',
      nav_about: 'Tentang Saya',
      nav_service: 'Perkhidmatan',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Hubungi',
      nav_hire: 'Upah Saya',
      // OFFCANVAS
      offcanvas_desc: 'Pembangun Perisian Full-stack di Shah Alam, Selangor.',
      offcanvas_info: 'Maklumat',
      // INDEX HERO
      hero_subtitle_html: 'Pembangun Perisian Full-stack, kini di<br>Olive Intelligent Management, Shah Alam',
      // INDEX CARDS
      about_label: 'TENTANG',
      about_tagline_html: '👋 Hi, saya afiez<br>👀 Berminat dalam pengaturcaraan<br>🌱 Belajar JS, Laravel &amp; lain-lain<br>💞️ Terbuka untuk kolaborasi web dev',
      about_read_more: 'Baca lebih lanjut',
      years_exp: 'Pengalaman 3+ Tahun',
      career_label: 'KERJAYA',
      stack_label: 'TECH STACK',
      stack_utilize: 'Stack yang saya guna.',
      // INDEX SERVICE SLIDER
      svc_01_num: 'PERKHIDMATAN 01',
      svc_02_num: 'PERKHIDMATAN 02',
      svc_03_num: 'PERKHIDMATAN 03',
      svc_backend_title: 'Pembangunan Backend',
      svc_backend_desc: 'PHP 8, Laravel 11.x, Lumen — membina sistem enterprise berskala menggunakan Raw Query (MySQL & PostgreSQL) dan Eloquent ORM untuk institusi kerajaan dan akademik.',
      svc_api_title: 'Reka Bentuk REST API',
      svc_api_desc: 'Mereka bentuk RESTful API yang selamat menggunakan Lumen untuk platform enterprise yang melayani ribuan pengguna serentak.',
      svc_devops_title: 'Server & DevOps',
      svc_devops_desc: 'Persediaan server hujung-ke-hujung dengan Nginx/Apache, CI/CD melalui GitHub Actions, dan penempatan Git merentas persekitaran.',
      // INDEX CONTACT
      contact_title_html: 'Mari bina sesuatu <span>bersama</span>',
      contact_slide: 'Saya sentiasa bersedia membantu anda dengan perkhidmatan berkualiti',
      // ABOUT PAGE
      about_bio_html: '<p class="fw-500 mb-25">Pembangun Perisian Pertengahan dengan 3+ tahun pengalaman membina aplikasi web berskala dan sistem enterprise. Saya pakar dalam PHP (Laravel/Lumen), JavaScript, dan PostgreSQL/MySQL, dengan rekod kejayaan dalam menyampaikan platform e-kerajaan, akademik, dan pentadbiran yang berimpak tinggi.</p><p class="fw-500">Kini berkhidmat sebagai Pembangun Perisian di <span>Olive Intelligent Management Sdn Bhd</span>, membina sistem enterprise untuk agensi kerajaan dan institusi akademik di seluruh Malaysia.</p>',
      work_exp_title: 'Pengalaman Kerja',
      job_olive: 'Pembangun Perisian',
      job_netcare: 'Pelatih Jurutera Rangkaian',
      core_projects_title: 'Projek Teras',
      proj_akses_desc: 'Portal berpusat untuk 46 program bantuan negeri (akses.selangor.gov.my)',
      proj_picoms_desc: 'eHEPA (admin) & eAcademic (pelajar) untuk Kolej Universiti Antarabangsa MAIWP',
      proj_intan_desc: 'ePenilaian, Booking4U, CTMG, Media INTAN untuk institusi latihan sektor awam utama Malaysia',
      proj_elmas_desc: 'Sistem pengurusan komuniti untuk Pejabat DUN/Parlimen (projek terkini)',
      education_title: 'Pendidikan',
      degree_name: 'B.Eng. Teknologi Kejuruteraan Elektronik (Kepujian)',
      diploma_name: 'Diploma Kejuruteraan Elektronik',
      stay_with_me: 'Ikuti Saya',
      years_exp_label: 'Tahun Pengalaman',
      my_cv: 'CV Saya',
      cv_view: 'Lihat',
      cv_download: 'Muat Turun',
      // SERVICE PAGE
      systems_delivered: 'Sistem disiapkan',
      apis_built: 'API dibina',
      databases_designed: 'Pangkalan data direka',
      uis_delivered: 'UI disiapkan',
      pipelines_done: 'Pipeline dikonfigurasi',
      servers_setup: 'Server diperuntuk',
      svc_db_title: 'Seni Bina Pangkalan Data',
      svc_db_desc: 'Reka bentuk pangkalan data hubungan dan migrasi kompleks menggunakan PostgreSQL dan MySQL untuk portal kerajaan bervolume tinggi.',
      svc_frontend_title: 'Pembangunan Frontend',
      svc_frontend_desc: 'JavaScript (ES6+), jQuery, Bootstrap 4/5, HTML5, CSS3 — portal admin responsif dan aplikasi web menghadap awam.',
      svc_cicd_title: 'CI/CD & DevOps',
      svc_cicd_desc: 'Pipeline automatik melalui GitHub Actions, penempatan berkontena dengan Docker, dan aliran kerja berasaskan Git merentas staging dan produksi.',
      svc_server_title: 'Peruntukan Server',
      svc_server_desc: 'Persediaan server Ubuntu, konfigurasi Nginx/Apache, pengurusan SSL, dan pengukuhan persekitaran untuk penempatan enterprise.',
      // PORTFOLIO LABELS
      lbl_project: 'Projek',
      lbl_client: 'Klien',
      lbl_role: 'Peranan',
      lbl_stack: 'Stack',
      lbl_status: 'Status',
      lbl_details: 'Butiran Projek',
      lbl_other: 'Projek Lain',
      btn_open_web: 'Buka Laman Web',
      lbl_in_progress: 'Projek Terkini — Dalam Proses',
      // PORTFOLIO AKSES
      akses_role: 'Pembangun Utama',
      akses_details_html: '<p class="tp-portfolio-text mb-20">AKSES (Aplikasi KitaSelangor Sepadu) adalah portal bantuan rakyat berpusat di bawah inisiatif <strong>Iltizam KitaSelangor Penyayang</strong>, Kerajaan Negeri Selangor. Platform ini menyatukan <strong>46 program bantuan kerajaan</strong> ke dalam satu sistem digital yang boleh diakses oleh semua lapisan masyarakat Selangor.</p><p class="tp-portfolio-text mb-20">Sistem ini berfungsi sebagai pusat sehenti digital untuk permohonan bantuan kebajikan — daripada bantuan tunai, perumahan, pendidikan hinggalah keperluan orang kurang upaya (OKU). Warga Selangor boleh memohon, menyemak status, dan menerima makluman terus melalui satu platform sahaja.</p><p class="tp-portfolio-text mb-30">Terlibat dalam pembangunan portal admin dan portal awam, serta pengurusan migrasi pangkalan data yang kompleks. Sistem ini dahulunya dikenali sebagai <strong>SSIPR</strong> sebelum dijenamakan semula sebagai AKSES.</p>',
      // PORTFOLIO PICOMS
      picoms_role: 'Pembangun Full-stack',
      picoms_details_html: '<p class="tp-portfolio-text mb-20">Membangunkan modul kritikal untuk universiti utama di bawah Majlis Agama Islam Wilayah Persekutuan (MAIWP). Sistem ini mendigitalkan aliran kerja akademik dan pentadbiran utama merentasi dua platform teras.</p><p class="tp-portfolio-text mb-20"><strong>eHEPA</strong> — Sistem pengurusan Hal Ehwal Pelajar untuk kakitangan admin. Menguruskan penginapan, rekod disiplin, saman, dan operasi kebajikan pelajar dengan aliran kerja Kawalan Akses Berasaskan Peranan (RBAC) yang lengkap.</p><p class="tp-portfolio-text mb-30"><strong>eAcademic</strong> — Portal pelajar layan-diri untuk pemantauan akademik. Pelajar boleh semak CGPA, GPA, markah subjek, sejarah akademik, dan semua rekod berkaitan perjalanan akademik mereka.</p>',
      // PORTFOLIO INTAN
      intan_role: 'Pembangun Backend & API',
      intan_details_html: '<p class="tp-portfolio-text mb-20">Membangun dan menyelenggara pelbagai platform pengurusan untuk <strong>Institut Tadbiran Awam Negara (INTAN)</strong>, institusi latihan sektor awam utama Malaysia. Semua sistem dibina menggunakan RESTful API selamat melalui Lumen, melayani kakitangan dan pengurusan di seluruh rangkaian INTAN.</p><p class="tp-portfolio-text mb-10"><strong>ePenilaian</strong></p><p class="tp-portfolio-text mb-20">Sistem penilaian kursus dan latihan kakitangan awam. Merangkumi penilaian pelbagai kategori — termasuk kursus ICT melalui modul ISAC, penilaian kemahiran bahasa Inggeris (ELPA), kursus kepimpinan, serta ujian-ujian khas yang dijalankan oleh INTAN untuk peserta latihan.</p><p class="tp-portfolio-text mb-10"><strong>Booking4U</strong> — <a href="https://booking2u.intan.my/" target="_blank" style="color:inherit;text-decoration:underline;">booking2u.intan.my</a></p><p class="tp-portfolio-text mb-20">Sistem tempahan fasiliti INTAN secara dalam talian. Membolehkan kakitangan dan peserta membuat tempahan bilik seminar, bilik mesyuarat, asrama, dewan, dan kemudahan lain dengan pengurusan slot, kelulusan, dan laporan penggunaan fasiliti.</p><p class="tp-portfolio-text mb-10"><strong>CTMG (Competency Tracking & Monitoring Gateway)</strong></p><p class="tp-portfolio-text mb-20">Platform pemantauan dan pengurusan kompetensi kakitangan awam. Membolehkan pendaftaran kursus ILA (Individual Learning Account), penjejakan pembangunan kompetensi, dan penjanaan laporan prestasi latihan secara automatik.</p><p class="tp-portfolio-text mb-10"><strong>Media INTAN</strong> — <a href="https://media.intan.my/" target="_blank" style="color:inherit;text-decoration:underline;">media.intan.my</a></p><p class="tp-portfolio-text mb-30">Repositori multimedia berpusat INTAN. Menyimpan dan mengurus koleksi video latihan, bahan slaid pembentangan, modul e-pembelajaran, serta kandungan digital untuk kegunaan kakitangan dan peserta kursus di seluruh Malaysia.</p>',
      // PORTFOLIO ELMAS
      elmas_role: 'Pembangun Utama',
      elmas_details_html: '<p class="tp-portfolio-text mb-20">eLMAS Community adalah sistem pengurusan komuniti yang dibina khusus untuk <strong>Pejabat DUN (Dewan Undangan Negeri)</strong> dan <strong>Pejabat Parlimen</strong> di seluruh Malaysia. Platform ini mendigitalkan proses pengurusan rakyat yang sebelum ini dilakukan secara manual menggunakan borang fizikal.</p><p class="tp-portfolio-text mb-20">Rakyat kini boleh mengemukakan <strong>aduan, permohonan bantuan, dan pertanyaan program</strong> secara dalam talian, manakala pihak pejabat wakil rakyat dapat menjejak, menyemak status, dan mengurus semua rekod dengan lebih cekap dan telus.</p><p class="tp-portfolio-text mb-30">Sistem ini merupakan projek terkini di bawah Olive Intelligent Management, memperluas portfolio sistem enterprise untuk berkhidmat kepada wakil rakyat dan pejabat mereka di peringkat negeri dan persekutuan.</p>',
      // COPYRIGHT
      copyright: '© 2026 Mohd Afiez Bin Abdul Haris. Hak cipta terpelihara.'
    }
  };

  // ─── ENGINE ────────────────────────────────────────────────────────────────
  var currentLang = localStorage.getItem('afiez_lang') || 'en';

  function applyLang(lang) {
    if (!t[lang]) return;
    currentLang = lang;
    localStorage.setItem('afiez_lang', lang);
    document.documentElement.lang = lang === 'bm' ? 'ms' : 'en';

    var strings = t[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) el.textContent = strings[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (strings[key] !== undefined) el.innerHTML = strings[key];
    });

    var btn = document.getElementById('tp-lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? 'BM' : 'EN';
  }

  // ─── TOGGLE BUTTON ─────────────────────────────────────────────────────────
  function injectToggle() {
    var style = document.createElement('style');
    style.textContent = [
      '.tp-lang-switch-wrap{position:fixed;right:30px;top:90px;z-index:9999;}',
      '#tp-lang-toggle{width:42px;height:42px;border-radius:50%;border:1.5px solid currentColor;',
      'background:transparent;color:inherit;font-size:11px;font-weight:700;letter-spacing:.5px;',
      'cursor:pointer;display:flex;align-items:center;justify-content:center;',
      'transition:opacity .2s;opacity:.75;font-family:inherit;}',
      '#tp-lang-toggle:hover{opacity:1;}'
    ].join('');
    document.head.appendChild(style);

    var wrap = document.createElement('div');
    wrap.className = 'tp-lang-switch-wrap';
    var btn = document.createElement('button');
    btn.id = 'tp-lang-toggle';
    btn.textContent = currentLang === 'en' ? 'BM' : 'EN';
    btn.addEventListener('click', function () {
      applyLang(currentLang === 'en' ? 'bm' : 'en');
    });
    wrap.appendChild(btn);
    document.body.appendChild(wrap);
  }

  // ─── INIT ──────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    injectToggle();
    applyLang(currentLang);
  });

})();
