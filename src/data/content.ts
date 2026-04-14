// ============ BLOG POSTS ============
export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  description: string
  date: string
  image: string
  content: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'sehirler-arasi-nakliyat-fiyatlari-2025',
    title: 'Şehirler Arası Nakliyat Fiyatları 2025',
    metaTitle: 'Şehirler Arası Nakliyat Fiyatları 2025 | Güncel Fiyat Listesi',
    description: 'Şehirler arası nakliyat fiyatları neye göre belirlenir? 2025 güncel nakliyat fiyat listesi ve tasarruf önerileri.',
    date: '2025-01-15',
    image: '/images/blog/nakliyat-fiyatlari.jpg',
    category: 'Fiyatlar',
    content: `<h2>Şehirler Arası Nakliyat Fiyatları Nasıl Belirlenir?</h2><p>Şehirler arası nakliyat fiyatları birçok faktöre göre değişiklik göstermektedir. Taşınacak eşya miktarı, mesafe, kat durumu, asansör kullanımı ve mevsimsel talep gibi kriterler fiyatı doğrudan etkiler.</p><h3>Fiyatı Etkileyen Faktörler</h3><p>Mesafe arttıkça nakliyat ücreti de artmaktadır. Ancak eşya miktarı da en az mesafe kadar önemlidir. 1+1 daire taşıma ile 4+1 villa taşıma arasında ciddi fiyat farkı bulunur.</p><h3>Tasarruf Önerileri</h3><p>Gereksiz eşyalardan kurtulun, hafta içi taşınmayı tercih edin ve önceden planlama yapın. Birden fazla firmadan teklif alarak karşılaştırma yapabilirsiniz.</p>`
  },
  {
    slug: 'nakliyat-sirasinda-esya-hasar-gorurse',
    title: 'Nakliyat Sırasında Eşya Hasar Görürse Ne Yapmalı?',
    metaTitle: 'Nakliyat Sırasında Eşya Hasarı | Sigorta ve Haklarınız',
    description: 'Taşınma sırasında eşyalarınız hasar gördüyse ne yapmalısınız? Nakliyat sigortası ve yasal haklarınız hakkında bilgi.',
    date: '2025-02-10',
    image: '/images/blog/esya-sigortasi.png',
    category: 'Bilgilendirme',
    content: `<h2>Nakliyat Sigortasının Önemi</h2><p>Profesyonel nakliyat firmalarıyla çalışırken eşya sigortası mutlaka yaptırılmalıdır. Sigortalı taşımacılık, olası hasarlarda tam teminat sağlar.</p>`
  },
  {
    slug: 'tasinma-oncesi-yapilacaklar-listesi',
    title: 'Taşınma Öncesi Yapılacaklar Listesi',
    metaTitle: 'Taşınma Rehberi | Taşınma Öncesi Kontrol Listesi',
    description: 'Taşınma öncesi yapmanız gereken tüm hazırlıklar. Stressiz taşınma için adım adım kontrol listesi.',
    date: '2025-03-05',
    image: '/images/blog/tasinma-rehberi.png',
    category: 'Rehber',
    content: `<h2>Taşınma Öncesi Hazırlık Rehberi</h2><p>Taşınma stresini azaltmak için öncesinde yapılacak hazırlıklar büyük önem taşır. İşte adım adım taşınma öncesi kontrol listeniz.</p>`
  },
  {
    slug: 'asansorlu-nakliyat-nedir-avantajlari',
    title: 'Asansörlü Nakliyat Nedir? Avantajları Nelerdir?',
    metaTitle: 'Asansörlü Nakliyat | Avantajları ve Fiyatları',
    description: 'Asansörlü nakliyat nedir, hangi durumlarda tercih edilmelidir? Asansörlü taşımacılığın avantajları.',
    date: '2025-04-20',
    image: '/images/blog/asansorlu-nakliyat.jpg',
    category: 'Bilgilendirme',
    content: `<h2>Asansörlü Nakliyat Nedir?</h2><p>Dış cephe asansörü kullanılarak yapılan nakliyat hizmetidir. Özellikle yüksek katlı binalarda, merdiven boşluğundan geçemeyecek büyüklükteki eşyaların taşınmasında kullanılır.</p>`
  },
]

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(b => b.slug === slug)
}

// ============ FAQ ============
export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  { question: 'Şehirler arası nakliyat fiyatları neye göre belirlenir?', answer: 'Fiyatlar; taşınacak eşya miktarı, mesafe, kat durumu, asansör ihtiyacı ve mevsimsel talep gibi faktörlere göre belirlenmektedir. Ücretsiz keşif hizmetimizle size özel fiyat teklifi sunuyoruz.' },
  { question: 'Eşyalarım sigortalı mı taşınıyor?', answer: 'Evet, tüm şehirler arası taşımalarımız nakliyat sigortası kapsamındadır. Eşyalarınız yükleme anından teslimat anına kadar sigorta güvencesi altındadır.' },
  { question: 'Taşınma ne kadar sürer?', answer: 'Şehir içi taşımalar genellikle aynı gün, şehirler arası taşımalar ise mesafeye göre 1-3 gün içinde tamamlanır. Kesin süre keşif sonrası belirlenir.' },
  { question: 'Paketleme hizmeti veriyor musunuz?', answer: 'Evet, profesyonel paketleme hizmetimiz mevcuttur. Kırılacak eşyalar, mobilyalar ve kıyafetler özel ambalaj malzemeleriyle paketlenir.' },
  { question: 'Asansörlü taşımacılık yapıyor musunuz?', answer: 'Evet, dış cephe asansörümüzle yüksek katlı binalarda güvenli taşımacılık yapıyoruz. 10. kata kadar hizmet verebiliyoruz.' },
  { question: 'Hafta sonu taşınma yapılabiliyor mu?', answer: 'Evet, haftanın 7 günü taşınma hizmeti veriyoruz. Hafta sonu ve resmi tatillerde de çalışıyoruz.' },
  { question: 'Ücretsiz keşif hizmeti var mı?', answer: 'Evet, Adana ve çevresinde ücretsiz keşif hizmeti sunuyoruz. Ekspertiz ekibimiz adresinize gelerek eşya tespiti yapar ve net fiyat teklifi sunar.' },
  { question: 'Eşya depolama hizmeti veriyor musunuz?', answer: 'Evet, güvenli ve kameralarla izlenen depolarımızda kısa veya uzun süreli eşya depolama hizmeti sunuyoruz.' },
  { question: 'Ödeme nasıl yapılıyor?', answer: 'Nakit, kredi kartı ve havale/EFT ile ödeme kabul ediyoruz. Taksit seçeneklerimiz de mevcuttur.' },
  { question: 'Hangi illere taşıma yapıyorsunuz?', answer: 'Adana merkezli olarak Türkiye\'nin tüm 81 iline şehirler arası nakliyat hizmeti veriyoruz.' },
]

// ============ TESTIMONIALS (Yorumlar) ============
export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  date: string
}

export const testimonials: Testimonial[] = [
  { name: 'Ahmet Y.', location: 'Adana → İstanbul', rating: 5, text: 'Adana\'dan İstanbul\'a taşındık. Eşyalarımız kusursuz bir şekilde teslim edildi. Ekip çok profesyonel ve ilgiliydi. Kesinlikle tavsiye ederim.', date: '2025-01-20' },
  { name: 'Fatma K.', location: 'Adana → Ankara', rating: 5, text: 'Ankara\'ya taşınmamız çok sorunsuz geçti. Paketleme ve montaj hizmeti mükemmeldi. Fiyatları da gayet makul.', date: '2025-02-15' },
  { name: 'Mehmet D.', location: 'Seyhan → Çukurova', rating: 5, text: 'Şehir içi taşınmamızı aynı gün içinde tamamladılar. Asansörlü taşıma sayesinde 8. kattan sorunsuz indirdiler.', date: '2025-03-10' },
  { name: 'Ayşe B.', location: 'Adana → İzmir', rating: 5, text: 'İzmir\'e taşınırken Baraj Taşımacılık\'ı tercih ettik. Eşyalarımız sigortalıydı ve zamanında teslim edildi.', date: '2025-04-05' },
  { name: 'Hasan T.', location: 'Adana → Mersin', rating: 5, text: 'Mersin\'e kamyonet nakliye ile küçük çaplı taşınmamızı yaptırdık. Ekonomik ve hızlı bir hizmet aldık.', date: '2025-05-12' },
  { name: 'Zeynep A.', location: 'Adana → Gaziantep', rating: 5, text: 'Gaziantep\'e ofis taşıma yaptırdık. Bilgisayarlar ve dosyalar özenle paketlendi. İş kaybımız minimum oldu.', date: '2025-06-01' },
  { name: 'Ali R.', location: 'Yüreğir → Seyhan', rating: 4, text: 'Hızlı ve güvenilir hizmet. Eşyaları dikkatlice taşıdılar. Tek küçük aksilik oldu ama hemen çözüldü.', date: '2025-06-20' },
  { name: 'Elif S.', location: 'Adana → Konya', rating: 5, text: 'Konya\'ya taşınmamızda her şey mükemmeldi. Eşyalar sapasağlam geldi. Teşekkürler Baraj Taşımacılık!', date: '2025-07-15' },
]

// ============ TAB ARTICLES ============
export interface TabArticle {
  id: string
  title: string
  content: string
}

export const tabArticles: TabArticle[] = [
  {
    id: 'sehirler-arasi-evden-eve-nakliyat',
    title: 'Şehirler Arası Evden Eve Nakliyat',
    content: '<p><strong>Şehirler arası evden eve nakliyat</strong> hizmetimiz ile Adana\'dan Türkiye\'nin tüm illerine güvenli ve sigortalı taşımacılık yapıyoruz. Profesyonel ekibimiz eşyalarınızı özenle paketleyerek, modern araç filomuzla yeni adresinize eksiksiz teslim eder. Şehirler arası evden eve nakliyat sürecinde ücretsiz keşif, profesyonel ambalajlama, sigortalı taşıma ve montaj hizmetleri dahildir.</p>'
  },
  {
    id: 'adana-evden-eve-nakliyat',
    title: 'Adana Evden Eve Nakliyat',
    content: '<p><strong>Adana evden eve nakliyat</strong> alanında yılların deneyimiyle hizmet veren Baraj Taşımacılık, Adana\'nın tüm ilçelerinde ev taşıma hizmeti sunmaktadır. Seyhan, Yüreğir, Çukurova, Sarıçam başta olmak üzere tüm Adana ilçelerinde profesyonel nakliyat hizmeti veriyoruz. Adana evden eve nakliyat fiyatlarımız rekabetçi ve şeffaftır.</p>'
  },
  {
    id: 'adana-nakliye',
    title: 'Adana Nakliye',
    content: '<p><strong>Adana nakliye</strong> hizmetleri kapsamında ev taşıma, ofis taşıma, eşya depolama ve kamyonet nakliye çözümleri sunuyoruz. Adana nakliye sektöründe güvenilir ve profesyonel hizmet anlayışımızla müşteri memnuniyetini ön planda tutuyoruz.</p>'
  },
  {
    id: 'adana-asansorlu-tasimaclik',
    title: 'Adana Asansörlü Taşımacılık',
    content: '<p><strong>Adana asansörlü taşımacılık</strong> hizmetimizle yüksek katlı binalarda eşyalarınızı güvenle taşıyoruz. Dış cephe asansörümüz ile 10. kata kadar eşya indirme ve çıkarma işlemi yapabiliyoruz. Merdiven boşluğundan geçmeyen büyük mobilya ve beyaz eşyalarınız için ideal çözüm.</p>'
  },
  {
    id: 'sehirler-arasi-tasima-fiyatlari',
    title: 'Şehirler Arası Taşıma Fiyatları',
    content: '<p><strong>Şehirler arası taşıma fiyatları</strong> eşya miktarı, mesafe, kat durumu ve ek hizmetlere göre belirlenmektedir. Baraj Taşımacılık olarak şeffaf fiyatlandırma politikamızla gizli maliyet uygulamıyoruz. Ücretsiz keşif hizmetimizle size özel en uygun fiyat teklifini sunuyoruz.</p>'
  },
  {
    id: 'sehirler-arasi-kamyonet-nakliye',
    title: 'Şehirler Arası Kamyonet Nakliye',
    content: '<p><strong>Şehirler arası kamyonet nakliye</strong> hizmetimiz az eşya taşıma ihtiyacınız için ekonomik çözümdür. Bekarlık evi, tek parça eşya, beyaz eşya veya küçük çaplı taşımalar için şehirler arası kamyonet nakliye hizmetimizden faydalanabilirsiniz.</p>'
  },
  {
    id: 'sigortali-nakliyat',
    title: 'Sigortalı Taşımacılık',
    content: '<p><strong>Sigortalı nakliyat</strong> hizmetimizle eşyalarınız yükleme anından teslimat anına kadar sigorta güvencesi altındadır. Nakliyat sigortası, taşıma sırasında oluşabilecek hasarlara karşı tam koruma sağlar. Güvenli taşınmak için sigortalı nakliyat şarttır.</p>'
  },
]
