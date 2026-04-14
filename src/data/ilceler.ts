export interface Ilce {
  slug: string
  name: string
  title: string
  description: string
  content: string
}

const generateIlceContent = (name: string): string => {
  return `
    <h2>${name} Evden Eve Nakliyat</h2>
    <p><strong>${name}</strong> bölgesinde <a href="/hizmetler/evden-eve-nakliyat">evden eve nakliyat</a> hizmeti sunan <strong>Baraj Taşımacılık</strong>, ${name} ve çevresindeki tüm taşıma ihtiyaçlarınızı profesyonelce karşılıyor. ${name} nakliyat ekibimiz, yılların tecrübesiyle eşyalarınızı güvenle taşır.</p>

    <img src="/images/galeri/galeri2.jpg" alt="${name} evden eve nakliyat" style="width:100%;border-radius:12px;margin:20px 0" />

    <h3>${name} Asansörlü Taşımacılık</h3>
    <p>${name} ilçesinde yüksek katlı binalarda <a href="/hizmetler/asansorlu-tasima">asansörlü taşımacılık</a> hizmeti veriyoruz. Dış cephe asansörümüz ile eşyalarınızı güvenli şekilde indirip çıkarıyoruz.</p>

    <h3>${name} Nakliyat Fiyatları</h3>
    <p>${name} nakliyat fiyatlarımız eşya miktarı, kat durumu ve mesafeye göre belirlenir. <a href="/fiyat-hesaplama">Online fiyat hesaplama</a> aracımızla tahmini fiyat alabilir veya <a href="/teklif-al">teklif formumuzu</a> doldurarak ücretsiz keşif talep edebilirsiniz.</p>

    <h3>${name} Şehir İçi ve Şehirler Arası Nakliye</h3>
    <p>${name}'dan Adana'nın diğer ilçelerine <a href="/hizmetler/sehir-ici-nakliye">şehir içi nakliye</a> ve Türkiye geneline şehirler arası nakliyat hizmeti sunuyoruz. ${name} çıkışlı tüm taşımalarınız <a href="/blog/nakliyat-sirasinda-esya-hasar-gorurse">sigortalıdır</a>.</p>

    <h3>${name} Kamyonet Nakliye</h3>
    <p>Az eşya taşıma ihtiyacınız için ${name}'da <a href="/hizmetler/kamyonet-nakliye">kamyonet nakliye</a> hizmetimiz idealdir. Ekonomik ve hızlı çözüm.</p>

    <p><a href="/blog/tasinma-oncesi-yapilacaklar-listesi">Taşınma rehberimizi</a> okuyarak hazırlıklarınızı tamamlayabilirsiniz. Sorularınız için <a href="/sss">SSS sayfamızı</a> ziyaret edin.</p>
  `
}

export const ilceler: Ilce[] = [
  { slug: 'seyhan-nakliyat', name: 'Seyhan', title: 'Seyhan Evden Eve Nakliyat | Adana Seyhan Taşımacılık', description: 'Seyhan evden eve nakliyat hizmeti. Seyhan nakliye, asansörlü taşımacılık ve sigortalı taşıma.', content: generateIlceContent('Seyhan') },
  { slug: 'yuregir-nakliyat', name: 'Yüreğir', title: 'Yüreğir Evden Eve Nakliyat | Adana Yüreğir Taşımacılık', description: 'Yüreğir evden eve nakliyat hizmeti. Yüreğir nakliye ve sigortalı taşıma.', content: generateIlceContent('Yüreğir') },
  { slug: 'cukurova-nakliyat', name: 'Çukurova', title: 'Çukurova Evden Eve Nakliyat | Adana Çukurova Taşımacılık', description: 'Çukurova evden eve nakliyat hizmeti. Çukurova nakliye ve asansörlü taşımacılık.', content: generateIlceContent('Çukurova') },
  { slug: 'saricam-nakliyat', name: 'Sarıçam', title: 'Sarıçam Evden Eve Nakliyat | Adana Sarıçam Taşımacılık', description: 'Sarıçam evden eve nakliyat hizmeti. Sarıçam nakliye ve sigortalı taşıma.', content: generateIlceContent('Sarıçam') },
  { slug: 'karaisali-nakliyat', name: 'Karaisalı', title: 'Karaisalı Evden Eve Nakliyat | Adana Karaisalı Taşımacılık', description: 'Karaisalı evden eve nakliyat hizmeti.', content: generateIlceContent('Karaisalı') },
  { slug: 'ceyhan-nakliyat', name: 'Ceyhan', title: 'Ceyhan Evden Eve Nakliyat | Adana Ceyhan Taşımacılık', description: 'Ceyhan evden eve nakliyat hizmeti. Ceyhan nakliye fiyatları.', content: generateIlceContent('Ceyhan') },
  { slug: 'kozan-nakliyat', name: 'Kozan', title: 'Kozan Evden Eve Nakliyat | Adana Kozan Taşımacılık', description: 'Kozan evden eve nakliyat hizmeti. Kozan nakliye ve taşımacılık.', content: generateIlceContent('Kozan') },
  { slug: 'imamoglu-nakliyat', name: 'İmamoğlu', title: 'İmamoğlu Evden Eve Nakliyat | Adana İmamoğlu Taşımacılık', description: 'İmamoğlu evden eve nakliyat hizmeti.', content: generateIlceContent('İmamoğlu') },
  { slug: 'pozanti-nakliyat', name: 'Pozantı', title: 'Pozantı Evden Eve Nakliyat | Adana Pozantı Taşımacılık', description: 'Pozantı evden eve nakliyat hizmeti.', content: generateIlceContent('Pozantı') },
  { slug: 'aladag-nakliyat', name: 'Aladağ', title: 'Aladağ Evden Eve Nakliyat | Adana Aladağ Taşımacılık', description: 'Aladağ evden eve nakliyat hizmeti.', content: generateIlceContent('Aladağ') },
  { slug: 'feke-nakliyat', name: 'Feke', title: 'Feke Evden Eve Nakliyat | Adana Feke Taşımacılık', description: 'Feke evden eve nakliyat hizmeti.', content: generateIlceContent('Feke') },
  { slug: 'saimbeyli-nakliyat', name: 'Saimbeyli', title: 'Saimbeyli Evden Eve Nakliyat | Adana Saimbeyli Taşımacılık', description: 'Saimbeyli evden eve nakliyat hizmeti.', content: generateIlceContent('Saimbeyli') },
  { slug: 'tufanbeyli-nakliyat', name: 'Tufanbeyli', title: 'Tufanbeyli Evden Eve Nakliyat | Adana Tufanbeyli Taşımacılık', description: 'Tufanbeyli evden eve nakliyat hizmeti.', content: generateIlceContent('Tufanbeyli') },
  { slug: 'yumurtalik-nakliyat', name: 'Yumurtalık', title: 'Yumurtalık Evden Eve Nakliyat | Adana Yumurtalık Taşımacılık', description: 'Yumurtalık evden eve nakliyat hizmeti.', content: generateIlceContent('Yumurtalık') },
  { slug: 'karatas-nakliyat', name: 'Karataş', title: 'Karataş Evden Eve Nakliyat | Adana Karataş Taşımacılık', description: 'Karataş evden eve nakliyat hizmeti.', content: generateIlceContent('Karataş') },
]

export const getIlceBySlug = (slug: string): Ilce | undefined => {
  return ilceler.find(i => i.slug === slug)
}

export const getAllIlceSlugs = (): string[] => {
  return ilceler.map(i => i.slug)
}
