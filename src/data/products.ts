import type { Product } from '@/types/product'

export const products: Product[] = [
  {
    slug: 'original',
    name: 'SOYSU Original',
    tagline: 'Kemurnian Rasa, Kesehatan Sejati',
    shortDescription:
      'Susu kedelai dengan rasa murni dan tekstur creamy premium. Tanpa perisa tambahan, tanpa pengawet. Cocok untuk semua usia — dari balita hingga lansia.',
    longDescription: `<p>SOYSU Original adalah produk unggulan kami — varian pertama yang lahir dari penelitian mendalam oleh tim dengan latar belakang farmasi. Tidak ada tambahan perisa artifisial. Hanya kedelai pilihan berkualitas tinggi yang diolah dengan teknologi ultrafiltrasi eksklusif kami, menghasilkan sari kedelai yang <strong>creamy, kental, dan bersih dari aroma langu</strong>.</p>
<p>Bagi keluarga yang mencari alternatif susu sapi yang aman, bergizi, dan lezat — SOYSU Original adalah jawaban terbaik. Dipercaya oleh ibu-ibu yang peduli gizi keluarga dan disukai oleh balita karena teksturnya yang lembut di mulut.</p>
<h3>Apa yang Membuat Original Istimewa?</h3>
<ul>
  <li><strong>Bebas aroma langu</strong> — proses pemisahan kulit kedelai menghilangkan sumber utama bau tidak sedap</li>
  <li><strong>Tekstur creamy premium</strong> — ultrafiltrasi menyaring partikel kasar, menghasilkan tekstur lembut sempurna</li>
  <li><strong>Rasa netral dan serbaguna</strong> — bisa diminum langsung, dicampur kopi, teh, atau smoothie</li>
  <li><strong>Cocok untuk balita</strong> — bebas laktosa, rendah alergen, kaya protein nabati</li>
</ul>`,
    color: '#C8A96E',
    bgColor: '#FAF3E0',
    badges: ['Bestseller', '100% Alami', 'Bebas Laktosa'],
    ingredients:
      'Kedelai non-GMO pilihan, air bersih, sedikit gula alami (opsional untuk varian manis), mineral (kalsium, magnesium). Bebas dari: pengawet buatan, pewarna buatan, perisa artifisial, MSG.',
    nutrition: [
      { label: 'Energi', value: '~120 kkal' },
      { label: 'Protein Nabati', value: '~6g' },
      { label: 'Lemak', value: '~4g' },
      { label: 'Karbohidrat', value: '~12g' },
      { label: 'Kalsium', value: '~20% AKG' },
      { label: 'Vitamin D', value: '~15% AKG' },
      { label: 'Isoflavon', value: '✓', isCheck: true },
      { label: 'Bebas Laktosa', value: '✓', isCheck: true },
      { label: 'Bebas Gluten', value: '✓', isCheck: true },
      { label: 'Bebas Pengawet', value: '✓', isCheck: true },
    ],
    servingSuggestions: [
      {
        title: 'Dingin',
        description: 'Sajikan langsung dari kulkas dalam gelas tinggi dengan es batu.',
      },
      {
        title: 'Hangat',
        description: 'Panaskan dengan suhu sedang (jangan mendidih), cocok untuk buka puasa atau sarapan.',
      },
      {
        title: 'Kopi Susu Kedelai',
        description: 'Campurkan dengan espresso shot untuk kopi susu nabati premium.',
      },
      {
        title: 'Overnight Oats',
        description: 'Rendam oat semalaman dengan SOYSU Original untuk sarapan praktis bergizi.',
      },
    ],
    sizes: ['350ml', '1000ml'],
    suitableFor: [
      'Balita',
      'Intoleransi Laktosa',
      'Vegan & Vegetarian',
      'Ibu Hamil',
      'Lansia',
      'Pekerja Aktif',
    ],
    seo: {
      title: 'SOYSU Original — Susu Kedelai Premium Creamy Tanpa Langu',
      description:
        'Rasakan susu kedelai premium dengan tekstur creamy dan bebas aroma langu. SOYSU Original diolah dengan teknologi ultrafiltrasi, bebas pengawet, halal, dan cocok untuk seluruh keluarga termasuk balita.',
      keywords: ['susu kedelai original', 'sari kedelai premium', 'susu nabati bebas laktosa'],
    },
  },
  {
    slug: 'matcha',
    name: 'SOYSU Matcha',
    tagline: 'Harmoni Timur dalam Setiap Tegukan',
    shortDescription:
      'Perpaduan sari kedelai creamy SOYSU dengan bubuk matcha premium grade ceremonial. Rasa umami yang khas, warna hijau alami, kaya antioksidan catechin.',
    longDescription: `<p>SOYSU Matcha lahir dari kecintaan akan budaya minum teh Jepang yang kini semakin dicintai di Indonesia. Kami memadukan kedelai pilihan berkualitas premium dengan <strong>matcha grade ceremonial</strong> — bukan matcha food-grade biasa — sehingga menghasilkan minuman yang kaya rasa umami, warna hijau hidup, dan aroma yang menenangkan.</p>
<p>Tidak seperti produk matcha latte kebanyakan yang menggunakan susu sapi atau krimer, SOYSU Matcha menggunakan base susu kedelai kami yang telah terbukti creamy dan bebas langu. Hasilnya? Matcha latte yang lebih ringan, lebih bergizi, dan ramah bagi pencinta gaya hidup sehat.</p>
<h3>Apa yang Membuat Matcha Istimewa?</h3>
<ul>
  <li><strong>Matcha grade ceremonial</strong> — kualitas tertinggi, rasa umami khas, warna hijau intens alami</li>
  <li><strong>Tanpa pewarna buatan</strong> — warna hijau 100% dari klorofil matcha asli</li>
  <li><strong>Kaya catechin &amp; L-theanine</strong> — antioksidan alami dan efek tenang fokus dari teh hijau</li>
  <li><strong>Rendah kafein</strong> — dibanding kopi, lebih tenang namun tetap fokus</li>
</ul>`,
    color: '#7BC67E',
    bgColor: '#F0F9F0',
    accentColor: '#2D6A4F',
    badges: ['Favorit Milenial', 'Antioksidan Tinggi', 'Bebas Laktosa'],
    ingredients:
      'Kedelai non-GMO pilihan, air bersih, bubuk matcha ceremonial grade (Camellia sinensis), gula alami minimal, mineral (kalsium). Bebas dari: pengawet buatan, pewarna buatan, perisa artifisial, susu sapi.',
    nutrition: [
      { label: 'Energi', value: '~130 kkal' },
      { label: 'Protein Nabati', value: '~5.5g' },
      { label: 'Lemak', value: '~4g' },
      { label: 'Karbohidrat', value: '~15g' },
      { label: 'Antioksidan Catechin', value: '✓', isCheck: true },
      { label: 'L-Theanine', value: '✓', isCheck: true },
      { label: 'Kalsium', value: '~18% AKG' },
      { label: 'Bebas Laktosa', value: '✓', isCheck: true },
      { label: 'Bebas Pengawet', value: '✓', isCheck: true },
    ],
    servingSuggestions: [
      {
        title: 'Matcha Latte Dingin',
        description: 'Tuang di atas es serut, tambahkan sedikit sirup agave untuk kesegaran sempurna.',
      },
      {
        title: 'Matcha Latte Hangat',
        description: 'Panaskan dan sajikan dalam mug keramik, taburkan sedikit bubuk matcha di atas foam.',
      },
      {
        title: 'Matcha Smoothie',
        description: 'Blend dengan pisang beku dan madu untuk breakfast yang padat gizi.',
      },
      {
        title: 'Matcha Boba',
        description: 'Base SOYSU Matcha dengan tapioca pearl dan brown sugar — minuman kekinian kaya gizi.',
      },
    ],
    sizes: ['350ml', '1000ml'],
    suitableFor: [
      'Pencinta Matcha',
      'Mahasiswa & Profesional',
      'Fitness Enthusiast',
      'Vegan & Vegetarian',
      'Pecinta Kopi yang Ingin Beralih',
    ],
    seo: {
      title: 'SOYSU Matcha — Susu Kedelai Matcha Premium Antioksidan Tinggi',
      description:
        'Nikmati kelezatan matcha latte premium dengan base susu kedelai creamy SOYSU. Kaya antioksidan catechin, bebas laktosa, tanpa pewarna buatan. Pilihan sehat untuk pecinta matcha Indonesia.',
      keywords: ['susu kedelai matcha', 'matcha latte nabati', 'minuman matcha sehat'],
    },
  },
  {
    slug: 'taro',
    name: 'SOYSU Taro',
    tagline: 'Ungu Alami, Lembut di Hati',
    shortDescription:
      'Susu kedelai creamy berpadu dengan talas ungu alami pilihan. Warna ungu cantik yang alami, rasa manis lembut khas talas, kaya serat dan vitamin.',
    longDescription: `<p>SOYSU Taro adalah bukti bahwa sehat itu bisa cantik dan enak. Menggunakan <strong>talas ungu (Colocasia esculenta) pilihan</strong> — sumber warna alami anthocyanin yang kaya antioksidan — dipadukan dengan base susu kedelai creamy SOYSU yang telah terbukti premium.</p>
<p>Hasilnya adalah minuman berwarna ungu cantik yang tidak hanya sedap dipandang, tapi juga bergizi tinggi. Tidak ada pewarna sintetis — warna ungu SOYSU Taro murni berasal dari pigmen alami talas.</p>
<h3>Apa yang Membuat Taro Istimewa?</h3>
<ul>
  <li><strong>Warna ungu 100% alami</strong> — dari anthocyanin talas, bukan pewarna sintetis</li>
  <li><strong>Kaya serat pangan</strong> — talas adalah sumber serat yang baik untuk pencernaan</li>
  <li><strong>Anthocyanin antioksidan</strong> — pigmen ungu alami yang punya efek anti-inflamasi</li>
  <li><strong>Rasa manis alami lembut</strong> — khas talas tanpa rasa artifisial berlebihan</li>
  <li><strong>Instagrammable secara alami</strong> — warna ungu cantik yang menarik perhatian</li>
</ul>`,
    color: '#B085C5',
    bgColor: '#F5EFF9',
    accentColor: '#7B2D8B',
    badges: ['Instagrammable', 'Kaya Serat', 'Bebas Laktosa'],
    ingredients:
      'Kedelai non-GMO pilihan, air bersih, ekstrak talas ungu alami (Colocasia esculenta), gula alami, mineral (kalsium). Bebas dari: pewarna sintetis, pengawet buatan, perisa artifisial, susu sapi.',
    nutrition: [
      { label: 'Energi', value: '~140 kkal' },
      { label: 'Protein Nabati', value: '~5g' },
      { label: 'Lemak', value: '~3.5g' },
      { label: 'Karbohidrat', value: '~18g' },
      { label: 'Serat Pangan', value: '~2g (dari talas)' },
      { label: 'Anthocyanin', value: '✓', isCheck: true },
      { label: 'Kalsium', value: '~18% AKG' },
      { label: 'Vitamin B6', value: '✓', isCheck: true },
      { label: 'Bebas Laktosa', value: '✓', isCheck: true },
      { label: 'Bebas Pengawet', value: '✓', isCheck: true },
    ],
    servingSuggestions: [
      {
        title: 'Taro Milk Tea',
        description: 'Campurkan dengan teh hitam seduhan dan tapioca pearl — boba tea kaya gizi!',
      },
      {
        title: 'Taro Frappe',
        description: 'Blend dengan es batu dan sedikit whipped topping nabati untuk dessert drink.',
      },
      {
        title: 'Taro Smoothie Bowl',
        description: 'Jadikan base smoothie bowl dengan topping granola, buah segar, dan biji chia.',
      },
      {
        title: 'Taro Latte Hangat',
        description: 'Panaskan perlahan, sajikan dalam mug bening agar warna ungunya terlihat cantik.',
      },
    ],
    sizes: ['350ml', '1000ml'],
    suitableFor: [
      'Pecinta Estetika',
      'Content Creator',
      'Pecinta Boba & Milk Tea',
      'Wanita Peduli Kecantikan',
      'Remaja & Mahasiswa',
    ],
    seo: {
      title: 'SOYSU Taro — Susu Kedelai Taro Ungu Alami Kaya Antioksidan',
      description:
        'Susu kedelai taro dengan warna ungu cantik 100% alami dari anthocyanin talas. Bebas laktosa, bebas pewarna sintetis, kaya serat dan antioksidan. Nikmat, sehat, dan Instagrammable!',
      keywords: ['susu kedelai taro', 'taro milk nabati', 'minuman taro sehat'],
    },
  },
  {
    slug: 'stroberi',
    name: 'SOYSU Stroberi',
    tagline: 'Manis Segar, Penuh Semangat',
    shortDescription:
      'Paduan sari kedelai creamy dengan sari stroberi segar pilihan. Manis alami, warna merah muda cantik, kaya vitamin C — favorit anak-anak dan keluarga.',
    longDescription: `<p>SOYSU Stroberi hadir untuk membuktikan bahwa minuman anak yang sehat tidak harus membosankan. Dengan memadukan base susu kedelai creamy kami yang bebas langu bersama <strong>sari stroberi segar pilihan</strong>, kami menciptakan minuman berwarna merah muda cantik yang alami — tanpa setetes pun pewarna sintetis.</p>
<p>Stroberi adalah buah superfood yang kaya vitamin C, antioksidan flavonoid, dan folat. Dikombinasikan dengan protein nabati kedelai, SOYSU Stroberi menjadi minuman bergizi lengkap yang menyenangkan untuk anak-anak dan membantu imunitas keluarga.</p>
<h3>Apa yang Membuat Stroberi Istimewa?</h3>
<ul>
  <li><strong>Sari stroberi nyata</strong> — bukan perisa artifisial, menggunakan ekstrak buah asli</li>
  <li><strong>Vitamin C alami</strong> — dari stroberi, mendukung imunitas dan kulit sehat</li>
  <li><strong>Warna merah muda natural</strong> — dari antosianin stroberi, tanpa pewarna sintetis</li>
  <li><strong>Favorit anak-anak</strong> — rasa manis segar yang disukai semua usia</li>
  <li><strong>Bebas alergen utama</strong> — bebas laktosa, bebas gluten</li>
</ul>`,
    color: '#F7A8B8',
    bgColor: '#FFF0F3',
    accentColor: '#E83E6C',
    badges: ['Favorit Anak', 'Vitamin C Alami', 'Bebas Laktosa'],
    ingredients:
      'Kedelai non-GMO pilihan, air bersih, sari/ekstrak stroberi alami, gula alami, mineral (kalsium, vitamin C). Bebas dari: pewarna sintetis, pengawet buatan, perisa artifisial, susu sapi.',
    nutrition: [
      { label: 'Energi', value: '~135 kkal' },
      { label: 'Protein Nabati', value: '~5.5g' },
      { label: 'Lemak', value: '~3.5g' },
      { label: 'Karbohidrat', value: '~16g' },
      { label: 'Vitamin C', value: '~15% AKG' },
      { label: 'Antioksidan Flavonoid', value: '✓', isCheck: true },
      { label: 'Folat', value: '✓', isCheck: true },
      { label: 'Kalsium', value: '~18% AKG' },
      { label: 'Bebas Laktosa', value: '✓', isCheck: true },
      { label: 'Bebas Pengawet', value: '✓', isCheck: true },
    ],
    servingSuggestions: [
      {
        title: 'Minuman Harian Anak',
        description: 'Sajikan dingin dalam botol minum anak — praktis untuk bekal sekolah.',
      },
      {
        title: 'Strawberry Banana Smoothie',
        description: 'Blend dengan pisang matang dan sedikit madu — sarapan bergizi untuk keluarga.',
      },
      {
        title: 'Strawberry Milkshake',
        description: 'Blend dengan es krim nabati vanila untuk dessert sehat akhir pekan.',
      },
      {
        title: 'Strawberry Oat Parfait',
        description: 'Layer dengan granola dan potongan buah segar — snack cantik bergizi.',
      },
    ],
    sizes: ['200ml', '350ml', '1000ml'],
    suitableFor: [
      'Anak-anak & Balita',
      'Ibu Hamil & Menyusui',
      'Remaja Aktif',
      'Pecinta Buah Segar',
      'Siapapun untuk Imunitas',
    ],
    seo: {
      title: 'SOYSU Stroberi — Susu Kedelai Stroberi Segar Favorit Anak Keluarga',
      description:
        'Susu kedelai stroberi alami dengan warna merah muda cantik tanpa pewarna sintetis. Kaya vitamin C dan antioksidan, bebas laktosa, cocok untuk anak dan keluarga. Halal, segar, menyehatkan!',
      keywords: ['susu kedelai stroberi', 'sari kedelai rasa stroberi', 'minuman anak sehat'],
    },
  },
  {
    slug: 'coklat',
    name: 'SOYSU Coklat',
    tagline: 'Indulgence Sehat yang Tak Perlu Rasa Bersalah',
    shortDescription:
      'Susu kedelai creamy berpadu dengan kakao premium pilihan. Coklat hangat yang kaya, lembut, tanpa rasa bersalah — karena ini sehat.',
    longDescription: `<p>SOYSU Coklat adalah bukti bahwa kenikmatan sejati tidak harus mengorbankan kesehatan. Kami memadukan base susu kedelai creamy kami yang telah terbukti premium dengan <strong>bubuk kakao dark premium</strong> — bukan coklat susu biasa, tapi kakao dengan kadar flavonoid tinggi yang baik untuk jantung.</p>
<p>Rasanya? Kaya, hangat, sedikit pahit nikmat khas dark chocolate, diimbangi kelembutan susu kedelai yang creamy. Sebuah comfort drink yang bisa dinikmati kapan saja — pagi hari sebagai energi awal, atau malam hari untuk relaksasi.</p>
<h3>Apa yang Membuat Coklat Istimewa?</h3>
<ul>
  <li><strong>Kakao dark premium</strong> — kadar kakao tinggi, kaya flavonoid untuk kesehatan jantung</li>
  <li><strong>Magnesium alami</strong> — kakao adalah salah satu sumber magnesium terbaik</li>
  <li><strong>Mood booster alami</strong> — kakao mengandung theobromine dan phenylethylamine</li>
  <li><strong>Rasa coklat autentik</strong> — bukan tiruan, tapi rasa kakao nyata</li>
  <li><strong>Bebas susu sapi</strong> — nikmati coklat hangat tanpa drama laktosa</li>
</ul>`,
    color: '#8B4513',
    bgColor: '#FAF0E6',
    accentColor: '#A0522D',
    badges: ['Best Comfort Drink', 'Magnesium Tinggi', 'Bebas Laktosa'],
    ingredients:
      'Kedelai non-GMO pilihan, air bersih, bubuk kakao dark premium (min. 70% cacao), gula alami minimal, mineral (kalsium, magnesium). Bebas dari: pengawet buatan, pewarna buatan, perisa artifisial, susu sapi.',
    nutrition: [
      { label: 'Energi', value: '~150 kkal' },
      { label: 'Protein Nabati', value: '~6g' },
      { label: 'Lemak', value: '~5g' },
      { label: 'Karbohidrat', value: '~17g' },
      { label: 'Magnesium', value: '~15% AKG' },
      { label: 'Flavonoid Kakao', value: '✓', isCheck: true },
      { label: 'Zat Besi', value: '~8% AKG' },
      { label: 'Kalsium', value: '~20% AKG' },
      { label: 'Bebas Laktosa', value: '✓', isCheck: true },
      { label: 'Bebas Pengawet', value: '✓', isCheck: true },
    ],
    servingSuggestions: [
      {
        title: 'Hot Chocolate Klasik',
        description:
          'Panaskan perlahan dalam panci kecil, sajikan dalam mug besar — comfort drink sempurna.',
      },
      {
        title: 'Iced Chocolate',
        description: 'Tuang di atas es batu, tambahkan sedikit simple syrup untuk sweetness yang pas.',
      },
      {
        title: 'Chocolate Smoothie',
        description: 'Blend dengan pisang beku dan selai kacang — post-workout shake bergizi.',
      },
      {
        title: 'Mocha Nabati',
        description: 'Campurkan dengan espresso shot untuk mocha latte tanpa dairy yang kaya rasa.',
      },
    ],
    sizes: ['350ml', '1000ml'],
    suitableFor: [
      'Pecinta Coklat',
      'Anak Remaja & Dewasa',
      'Atlet & Fitness Enthusiast',
      'Vegetarian & Vegan',
      'Pencari Comfort Drink',
    ],
    seo: {
      title: 'SOYSU Coklat — Susu Kedelai Coklat Premium Bebas Laktosa Kaya Flavonoid',
      description:
        'Hot chocolate yang menyehatkan dari susu kedelai creamy SOYSU dengan kakao dark premium. Kaya magnesium dan flavonoid, bebas laktosa, tanpa pengawet. Comfort drink yang aman untuk keluarga.',
      keywords: ['susu kedelai coklat', 'chocolate milk nabati', 'minuman coklat sehat halal'],
    },
  },
]
