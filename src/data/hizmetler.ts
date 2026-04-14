export interface Hizmet {
  slug: string
  name: string
  icon: string
  title: string
  description: string
  shortDesc: string
  content: string
}

export const hizmetler: Hizmet[] = [
  {
    slug: 'evden-eve-nakliyat',
    name: 'Evden Eve Nakliyat',
    icon: 'Home',
    title: 'Adana Evden Eve Nakliyat | Sigortalı Ev Taşıma Hizmeti',
    description: 'Adana evden eve nakliyat hizmeti. Profesyonel paketleme, sigortalı taşıma, montaj-demontaj. Güvenli ve ekonomik ev taşıma.',
    shortDesc: 'Profesyonel ekibimizle eşyalarınızı güvenle yeni evinize taşıyoruz.',
    content: `
      <h2>Adana Evden Eve Nakliyat Hizmeti</h2>
      <p><strong>Baraj Taşımacılık</strong> olarak Adana evden eve nakliyat hizmetimizle eşyalarınızı profesyonel ekibimiz ve modern ekipmanlarımızla güvenle taşıyoruz.</p>
      <img src="/images/hizmetler/evden-eve-nakliyat.jpg" alt="Adana evden eve nakliyat hizmeti" style="width:100%;border-radius:12px;margin:20px 0" />
      <h3>Evden Eve Nakliyat Sürecimiz</h3>
      <p>Taşınma sürecinizi stressiz hale getirmek için her aşamayı titizlikle planlıyoruz. <a href="/teklif-al">Ücretsiz keşif</a> hizmetimizle eşyalarınızın envanterini çıkarıyor, size en uygun taşıma planını ve fiyat teklifini sunuyoruz.</p>
      <h3>Profesyonel Paketleme</h3>
      <p>Her eşya türüne uygun ambalaj malzemesi kullanıyoruz. Kırılacak eşyalarınız balonlu naylon ve köpük ile sarılır, mobilyalarınız battaniye ve streç film ile korunur.</p>
      <h3>Sigortalı Taşımacılık</h3>
      <p>Tüm taşımalarımız <a href="/blog/nakliyat-sirasinda-esya-hasar-gorurse">nakliyat sigortası</a> kapsamındadır. Eşyalarınızın güvenliği bizim önceliğimizdir.</p>
      <img src="/images/galeri/galeri4.jpg" alt="Nakliyat paketleme ve taşıma" style="width:100%;border-radius:12px;margin:20px 0" />
      <h3>Şehirler Arası Evden Eve Nakliyat</h3>
      <p>Adana'dan Türkiye'nin tüm illerine şehirler arası evden eve nakliyat yapıyoruz. Popüler güzergahlarımız: <a href="/iller/istanbul-sehirler-arasi-nakliyat">İstanbul</a>, <a href="/iller/ankara-sehirler-arasi-nakliyat">Ankara</a>, <a href="/iller/izmir-sehirler-arasi-nakliyat">İzmir</a>, <a href="/iller/antalya-sehirler-arasi-nakliyat">Antalya</a>, <a href="/iller/mersin-sehirler-arasi-nakliyat">Mersin</a>, <a href="/iller/gaziantep-sehirler-arasi-nakliyat">Gaziantep</a>.</p>
      <h3>Adana İlçelerinde Evden Eve Nakliyat</h3>
      <p><a href="/ilceler/seyhan-nakliyat">Seyhan</a>, <a href="/ilceler/yuregir-nakliyat">Yüreğir</a>, <a href="/ilceler/cukurova-nakliyat">Çukurova</a>, <a href="/ilceler/saricam-nakliyat">Sarıçam</a>, <a href="/ilceler/ceyhan-nakliyat">Ceyhan</a>, <a href="/ilceler/kozan-nakliyat">Kozan</a> başta olmak üzere tüm ilçelerde <a href="/hizmetler/sehir-ici-nakliye">şehir içi nakliye</a> hizmeti veriyoruz.</p>
      <p>Tahmini fiyat öğrenmek için <a href="/fiyat-hesaplama"><strong>fiyat hesaplama aracımızı</strong></a> kullanın.</p>
    `
  },
  {
    slug: 'asansorlu-tasima',
    name: 'Asansörlü Taşıma',
    icon: 'Building2',
    title: 'Adana Asansörlü Taşımacılık | Dış Cephe Asansör Kiralama',
    description: 'Adana asansörlü taşımacılık hizmeti. Yüksek katlı binalarda güvenli eşya indirme ve çıkarma.',
    shortDesc: 'Yüksek katlarda güvenli eşya taşıma için asansörlü nakliyat hizmeti.',
    content: `
      <h2>Adana Asansörlü Taşımacılık</h2>
      <p>Yüksek katlı binalarda eşyalarınızı güvenle taşımak için <strong>dış cephe asansörü</strong> hizmetimizi sunuyoruz. <a href="/hizmetler/evden-eve-nakliyat">Evden eve nakliyat</a> sürecinde merdivenlerden taşınamayacak büyük eşyalar için idealdir.</p>
      <img src="/images/hizmetler/asansorlu-tasima.jpg" alt="Adana asansörlü taşımacılık" style="width:100%;border-radius:12px;margin:20px 0" />
      <h3>Asansörlü Taşıma Avantajları</h3>
      <p>Eşyalarınız merdiven boşluğunda hasar görmez, taşıma süresi kısalır. 10. kata kadar güvenli taşıma yapabiliyoruz. <a href="/blog/asansorlu-nakliyat-nedir-avantajlari">Detaylı bilgi için blog yazımızı okuyun</a>.</p>
      <p><a href="/fiyat-hesaplama">Fiyat hesapla</a> | <a href="/teklif-al">Teklif al</a> | <a href="/galeri">Galeri</a></p>
    `
  },
  {
    slug: 'sehir-ici-nakliye',
    name: 'Şehir İçi Nakliye',
    icon: 'MapPin',
    title: 'Adana Şehir İçi Nakliye | Aynı Gün Teslimat',
    description: 'Adana şehir içi nakliye hizmeti. Aynı gün teslimat, ekonomik fiyatlar.',
    shortDesc: 'Adana içinde hızlı ve ekonomik şehir içi nakliye hizmeti.',
    content: `
      <h2>Adana Şehir İçi Nakliye</h2>
      <p>Adana şehir içi nakliye hizmetimizle <a href="/ilceler/seyhan-nakliyat">Seyhan</a>, <a href="/ilceler/yuregir-nakliyat">Yüreğir</a>, <a href="/ilceler/cukurova-nakliyat">Çukurova</a>, <a href="/ilceler/saricam-nakliyat">Sarıçam</a> ve tüm ilçeler arası aynı gün taşıma yapıyoruz.</p>
      <img src="/images/hizmetler/sehir-ici-nakliye.jpg" alt="Adana şehir içi nakliye" style="width:100%;border-radius:12px;margin:20px 0" />
      <h3>Hızlı ve Güvenli</h3>
      <p>Şehir içi taşımalar aynı gün tamamlanır. <a href="/hizmetler/asansorlu-tasima">Asansörlü taşıma</a> gerekirse ek bilgi keşifte verilir.</p>
      <h3>Şehirler Arası da Yapıyoruz</h3>
      <p><a href="/iller/istanbul-sehirler-arasi-nakliyat">İstanbul</a>, <a href="/iller/ankara-sehirler-arasi-nakliyat">Ankara</a>, <a href="/iller/izmir-sehirler-arasi-nakliyat">İzmir</a> ve 81 ile şehirler arası hizmetteyiz.</p>
      <p><a href="/fiyat-hesaplama">Fiyat hesapla</a> | <a href="/teklif-al">Teklif al</a> | <a href="/sss">SSS</a></p>
    `
  },
  {
    slug: 'kamyonet-nakliye',
    name: 'Kamyonet Nakliye',
    icon: 'Truck',
    title: 'Adana Kamyonet Nakliye | Küçük Nakliye Hizmeti',
    description: 'Adana kamyonet nakliye ve küçük nakliye hizmeti. Tek parça eşya, beyaz eşya taşıma.',
    shortDesc: 'Az eşya taşıma için ekonomik kamyonet nakliye çözümleri.',
    content: `
      <h2>Adana Kamyonet Nakliye</h2>
      <p>Az eşya taşıma için <strong>kamyonet nakliye</strong> hizmetimiz en ekonomik çözümdür. Adana içi ve <a href="/iller/mersin-sehirler-arasi-nakliyat">Mersin</a>, <a href="/iller/hatay-sehirler-arasi-nakliyat">Hatay</a> gibi yakın illere kamyonet nakliye yapıyoruz.</p>
      <img src="/images/hizmetler/kamyonet-nakliye.jpg" alt="Adana kamyonet nakliye" style="width:100%;border-radius:12px;margin:20px 0" />
      <h3>Hangi Durumlarda?</h3>
      <ul>
        <li>Bekarlık evi taşıma</li><li>Tek beyaz eşya taşıma</li><li>Öğrenci taşınması</li><li>Az eşya şehirler arası taşıma</li>
      </ul>
      <p>Daha büyük taşımalar için <a href="/hizmetler/evden-eve-nakliyat">evden eve nakliyat</a> hizmetimizi inceleyin. <a href="/fiyat-hesaplama">Fiyat hesapla</a> | <a href="/teklif-al">Teklif al</a></p>
    `
  },
  {
    slug: 'ofis-tasima',
    name: 'Ofis Taşıma',
    icon: 'Briefcase',
    title: 'Adana Ofis Taşıma | İşyeri Nakliyat Hizmeti',
    description: 'Adana ofis taşıma ve işyeri nakliyat hizmeti. Profesyonel ofis taşımacılığı.',
    shortDesc: 'İşyerinizi minimum iş kaybıyla profesyonelce taşıyoruz.',
    content: `
      <h2>Adana Ofis Taşıma Hizmeti</h2>
      <p>İşyerinizi minimum iş kaybıyla taşıyoruz. Adana'dan <a href="/iller/istanbul-sehirler-arasi-nakliyat">İstanbul</a>, <a href="/iller/ankara-sehirler-arasi-nakliyat">Ankara</a> ve tüm illere ofis taşıma yapıyoruz.</p>
      <img src="/images/hizmetler/ofis-tasima.png" alt="Adana ofis taşıma" style="width:100%;border-radius:12px;margin:20px 0" />
      <h3>Ofis Taşıma Sürecimiz</h3>
      <ul><li>Hafta sonu taşıma planlaması</li><li>IT ekipman güvenli paketleme</li><li>Arşiv sistematik taşıma</li><li>Mobilya demontaj-montaj</li></ul>
      <p><a href="/hizmetler/esya-depolama">Eşya depolama</a> ile ofis eşyalarınızı geçici depolayabilirsiniz. <a href="/teklif-al">Teklif al</a> | <a href="/iletisim">İletişim</a></p>
    `
  },
  {
    slug: 'esya-depolama',
    name: 'Eşya Depolama',
    icon: 'Warehouse',
    title: 'Adana Eşya Depolama | Güvenli Depo Kiralama',
    description: 'Adana eşya depolama hizmeti. Güvenli depolarımızda eşyalarınızı saklayın.',
    shortDesc: 'Eşyalarınızı güvenli depolarımızda istediğiniz süre saklayın.',
    content: `
      <h2>Adana Eşya Depolama</h2>
      <p>Güvenli <strong>eşya depolama</strong> hizmeti sunuyoruz. Kameralarla izlenen, iklim kontrollü depolarımızda eşyalarınız güvende.</p>
      <img src="/images/hizmetler/esya-depolama.png" alt="Adana eşya depolama" style="width:100%;border-radius:12px;margin:20px 0" />
      <h3>Depolama Seçenekleri</h3>
      <ul><li>Kısa süreli (taşınma arası)</li><li>Uzun süreli (aylık/yıllık)</li><li>7/24 kamera izleme</li><li>İklim kontrol</li><li>Sigortalı</li></ul>
      <p><a href="/hizmetler/evden-eve-nakliyat">Evden eve nakliyat</a> ile birlikte depolama alabilirsiniz. <a href="/fiyat-hesaplama">Fiyat hesapla</a> | <a href="/iletisim">İletişim</a></p>
    `
  },
]

export const getHizmetBySlug = (slug: string): Hizmet | undefined => {
  return hizmetler.find(h => h.slug === slug)
}
