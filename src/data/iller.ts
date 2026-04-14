export interface Il {
  slug: string
  name: string
  plaka: number
  title: string
  description: string
  content: string
  keywords: string[]
}

const generateIlContent = (name: string, slug?: string): string => {
  return `
    <h2>Adana ${name} Nakliyat - Şehirler Arası Evden Eve Taşımacılık</h2>
    <p><strong>Adana ${name} nakliyat</strong> hizmeti arıyorsanız doğru adrestesiniz. <strong>Baraj Taşımacılık</strong> olarak Adana'dan ${name}'a ve ${name}'dan Adana'ya düzenli <a href="/hizmetler/evden-eve-nakliyat">evden eve nakliyat</a> seferleri düzenliyoruz. Yılların tecrübesi, modern araç filomuz ve profesyonel kadromuzla eşyalarınızı <a href="/hizmetler/asansorlu-tasima">asansörlü taşıma</a> dahil her türlü yöntemle güvenle taşıyoruz.</p>

    <p>Adana ${name} arası taşımacılık hizmetimiz kapsamında ev eşyası, ofis malzemesi, beyaz eşya, antika ve hassas eşyalar özel ambalajlama teknikleri ile paketlenir. Tüm taşımalarımız <a href="/blog/nakliyat-sirasinda-esya-hasar-gorurse">nakliyat sigortası</a> kapsamında gerçekleştirilir.</p>

    <img src="/images/galeri/galeri1.jpg" alt="Adana ${name} şehirler arası nakliyat" style="width:100%;border-radius:12px;margin:20px 0" />

    <h3>Adana ${name} Evden Eve Nakliyat Süreci</h3>
    <p>Adana'dan ${name}'a taşınma sürecinizi stressiz hale getirmek için her aşamayı detaylı planlıyoruz. İşte <strong>Adana ${name} evden eve nakliyat</strong> sürecimiz:</p>
    <ul>
      <li><strong>Ücretsiz Keşif ve Fiyat Teklifi:</strong> Adresinize gelerek eşya tespiti yapıyoruz. <a href="/teklif-al">Online teklif formu</a> ile de başvurabilirsiniz.</li>
      <li><strong>Profesyonel Paketleme:</strong> Kırılacak eşyalar balonlu naylon, mobilyalar battaniye ve streç film ile sarılır. <a href="/hizmetler/evden-eve-nakliyat">Evden eve nakliyat</a> hizmetimizde paketleme dahildir.</li>
      <li><strong>Demontaj - Montaj:</strong> Mobilyalarınız uzman ekibimiz tarafından sökülerek taşınır ve yeni evinizde kurulur.</li>
      <li><strong>Sigortalı Yükleme ve Taşıma:</strong> Eşyalarınız kapalı kasa araçlarımıza düzenli yerleştirilir ve sigortalı olarak ${name}'a taşınır.</li>
      <li><strong>Teslimat ve Yerleştirme:</strong> ${name}'daki yeni adresinizde eşyalar istediğiniz odaya yerleştirilir, montaj yapılır.</li>
    </ul>
    <p>Tahmini taşıma ücretinizi öğrenmek için <a href="/fiyat-hesaplama"><strong>online fiyat hesaplama</strong></a> aracımızı kullanabilirsiniz.</p>

    <h3>Adana ${name} Nakliyat Fiyatları 2025</h3>
    <p><strong>${name} nakliyat fiyatları</strong> birçok faktöre göre değişkenlik gösterir. Eşya miktarı, daire büyüklüğü (1+1, 2+1, 3+1, 4+1), kat durumu, <a href="/hizmetler/asansorlu-tasima">asansör ihtiyacı</a>, paketleme tercihi ve taşıma tarihi fiyatı etkileyen başlıca unsurlardır.</p>
    <p>Baraj Taşımacılık olarak <strong>şeffaf fiyatlandırma</strong> politikası uyguluyoruz. Keşif sonrası verilen fiyat nettir, gizli maliyet yoktur. Adana ${name} arası en güncel <a href="/blog/sehirler-arasi-nakliyat-fiyatlari-2025">nakliyat fiyatları</a> için bizi arayın veya <a href="/teklif-al">teklif formumuzu</a> doldurun.</p>

    <img src="/images/galeri/galeri3.jpg" alt="Adana ${name} nakliyat araçları" style="width:100%;border-radius:12px;margin:20px 0" />

    <h3>${name} Kamyonet Nakliye ve Küçük Taşımacılık</h3>
    <p>Tam bir ev taşıması yerine sadece birkaç parça eşya mı taşıyorsunuz? Adana ${name} arası <a href="/hizmetler/kamyonet-nakliye"><strong>kamyonet nakliye</strong></a> hizmetimiz tam size göre. Tek parça beyaz eşya, kanepe, yatak veya birkaç koli eşya için ekonomik kamyonet nakliye çözümümüzle tasarruf edin.</p>

    <h3>${name} Asansörlü Taşımacılık</h3>
    <p>Yüksek katlı binalarda merdivenlerden taşınamayacak büyük eşyalarınız için <a href="/hizmetler/asansorlu-tasima"><strong>asansörlü taşımacılık</strong></a> hizmetimizi sunuyoruz. Dış cephe asansörümüz ile 10. kata kadar güvenli eşya indirme ve çıkarma yapabiliyoruz.</p>

    <h3>${name} Ofis ve İşyeri Taşıma</h3>
    <p>${name}'a <a href="/hizmetler/ofis-tasima">ofis taşıma</a> hizmeti de veriyoruz. Bilgisayar, sunucu, mobilya ve arşiv malzemeleriniz özel olarak paketlenir. Hafta sonu taşıma seçeneğimizle iş kaybınızı minimize ediyoruz.</p>

    <h3>${name} Eşya Depolama</h3>
    <p>Taşınma sürecinde eşyalarınızı geçici olarak saklamanız mı gerekiyor? <a href="/hizmetler/esya-depolama"><strong>Eşya depolama</strong></a> hizmetimizle güvenli, kameralarla izlenen ve iklim kontrollü depolarımızda eşyalarınızı istediğiniz süre saklayabilirsiniz.</p>

    <img src="/images/galeri/galeri5.jpg" alt="${name} evden eve nakliyat hizmeti" style="width:100%;border-radius:12px;margin:20px 0" />

    <h3>Adana ${name} Şehir İçi Nakliye</h3>
    <p>Sadece şehirler arası değil, <a href="/hizmetler/sehir-ici-nakliye"><strong>Adana şehir içi nakliye</strong></a> hizmetimizle de yanınızdayız. Seyhan, Yüreğir, Çukurova, Sarıçam ve diğer <a href="/ilceler/seyhan-nakliyat">Adana ilçeleri</a> arasında aynı gün teslimat yapıyoruz.</p>

    <h3>Neden Baraj Taşımacılık ile ${name} Nakliyat?</h3>
    <ul>
      <li><strong>Düzenli Seferler:</strong> Adana - ${name} hattında haftalık düzenli seferlerimiz mevcuttur</li>
      <li><strong>Sigortalı Taşıma:</strong> Eşyalarınız yükleme anından teslimat anına kadar sigorta güvencesindedir</li>
      <li><strong>Profesyonel Paketleme:</strong> Her eşya türüne uygun ambalaj malzemesi kullanılır</li>
      <li><strong>Modern Araç Filosu:</strong> Kapalı kasa, hava süspansiyonlu araçlarla taşıma</li>
      <li><strong>Deneyimli Ekip:</strong> 10+ yıl tecrübeli profesyonel taşıma personeli</li>
      <li><strong>7/24 Destek:</strong> Taşıma öncesi, sırası ve sonrası sürekli iletişim</li>
      <li><strong>Şeffaf Fiyat:</strong> Gizli maliyet yok, keşif sonrası net fiyat</li>
    </ul>

    <h3>Taşınma Öncesi Hazırlık</h3>
    <p>${name}'a taşınmadan önce yapmanız gereken hazırlıklar hakkında <a href="/blog/tasinma-oncesi-yapilacaklar-listesi"><strong>taşınma rehberimizi</strong></a> okumanızı tavsiye ederiz. Gereksiz eşyalardan kurtulmak, abonelikleri taşımak ve yeni adres bildirimlerini yapmak sürecinizi kolaylaştıracaktır.</p>

    <h3>Sıkça Sorulan Sorular</h3>
    <p>Adana ${name} nakliyat hizmetimiz hakkında merak ettikleriniz için <a href="/sss"><strong>SSS sayfamızı</strong></a> ziyaret edebilir veya doğrudan bizi arayarak bilgi alabilirsiniz.</p>

    <p><a href="/galeri">Çalışma galeri fotoğraflarımızı</a> inceleyerek taşımacılık kalitemizi görebilirsiniz.</p>
  `
}

export const iller: Il[] = [
  { slug: 'adiyaman-sehirler-arasi-nakliyat', name: 'Adıyaman', plaka: 2, title: 'Adıyaman Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Adıyaman şehirler arası evden eve nakliyat. Sigortalı, ambalajlı ve güvenli taşımacılık. Adıyaman nakliyat fiyatları için hemen arayın.', content: generateIlContent('Adıyaman'), keywords: ['adıyaman nakliyat', 'adıyaman şehirler arası nakliyat', 'adana adıyaman nakliye', 'adıyaman evden eve nakliyat'] },
  { slug: 'afyonkarahisar-sehirler-arasi-nakliyat', name: 'Afyonkarahisar', plaka: 3, title: 'Afyonkarahisar Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Afyonkarahisar şehirler arası evden eve nakliyat. Sigortalı ve güvenli taşımacılık hizmeti.', content: generateIlContent('Afyonkarahisar'), keywords: ['afyonkarahisar nakliyat', 'afyon şehirler arası nakliyat'] },
  { slug: 'agri-sehirler-arasi-nakliyat', name: 'Ağrı', plaka: 4, title: 'Ağrı Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Ağrı şehirler arası evden eve nakliyat. Sigortalı ve güvenli taşımacılık.', content: generateIlContent('Ağrı'), keywords: ['ağrı nakliyat', 'ağrı şehirler arası nakliyat'] },
  { slug: 'aksaray-sehirler-arasi-nakliyat', name: 'Aksaray', plaka: 68, title: 'Aksaray Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Aksaray şehirler arası evden eve nakliyat. Sigortalı ve güvenli taşımacılık.', content: generateIlContent('Aksaray'), keywords: ['aksaray nakliyat', 'aksaray şehirler arası nakliyat'] },
  { slug: 'amasya-sehirler-arasi-nakliyat', name: 'Amasya', plaka: 5, title: 'Amasya Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Amasya şehirler arası evden eve nakliyat. Sigortalı ve güvenli taşımacılık.', content: generateIlContent('Amasya'), keywords: ['amasya nakliyat', 'amasya şehirler arası nakliyat'] },
  { slug: 'ankara-sehirler-arasi-nakliyat', name: 'Ankara', plaka: 6, title: 'Ankara Şehirler Arası Nakliyat | Adana Ankara Evden Eve Taşıma', description: 'Adana - Ankara şehirler arası evden eve nakliyat. Sigortalı, ambalajlı taşımacılık. Ankara nakliyat fiyatları için arayın.', content: generateIlContent('Ankara'), keywords: ['ankara nakliyat', 'ankara şehirler arası nakliyat', 'adana ankara nakliye', 'ankara evden eve nakliyat'] },
  { slug: 'antalya-sehirler-arasi-nakliyat', name: 'Antalya', plaka: 7, title: 'Antalya Şehirler Arası Nakliyat | Adana Antalya Evden Eve Taşıma', description: 'Adana - Antalya şehirler arası evden eve nakliyat. Sigortalı ve güvenli taşımacılık hizmeti.', content: generateIlContent('Antalya'), keywords: ['antalya nakliyat', 'antalya şehirler arası nakliyat', 'adana antalya nakliye'] },
  { slug: 'ardahan-sehirler-arasi-nakliyat', name: 'Ardahan', plaka: 75, title: 'Ardahan Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Ardahan şehirler arası evden eve nakliyat.', content: generateIlContent('Ardahan'), keywords: ['ardahan nakliyat', 'ardahan şehirler arası nakliyat'] },
  { slug: 'artvin-sehirler-arasi-nakliyat', name: 'Artvin', plaka: 8, title: 'Artvin Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Artvin şehirler arası evden eve nakliyat.', content: generateIlContent('Artvin'), keywords: ['artvin nakliyat', 'artvin şehirler arası nakliyat'] },
  { slug: 'aydin-sehirler-arasi-nakliyat', name: 'Aydın', plaka: 9, title: 'Aydın Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Aydın şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Aydın'), keywords: ['aydın nakliyat', 'aydın şehirler arası nakliyat'] },
  { slug: 'balikesir-sehirler-arasi-nakliyat', name: 'Balıkesir', plaka: 10, title: 'Balıkesir Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Balıkesir şehirler arası evden eve nakliyat.', content: generateIlContent('Balıkesir'), keywords: ['balıkesir nakliyat', 'balıkesir şehirler arası nakliyat'] },
  { slug: 'bartin-sehirler-arasi-nakliyat', name: 'Bartın', plaka: 74, title: 'Bartın Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Bartın şehirler arası evden eve nakliyat.', content: generateIlContent('Bartın'), keywords: ['bartın nakliyat'] },
  { slug: 'batman-sehirler-arasi-nakliyat', name: 'Batman', plaka: 72, title: 'Batman Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Batman şehirler arası evden eve nakliyat.', content: generateIlContent('Batman'), keywords: ['batman nakliyat'] },
  { slug: 'bayburt-sehirler-arasi-nakliyat', name: 'Bayburt', plaka: 69, title: 'Bayburt Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Bayburt şehirler arası evden eve nakliyat.', content: generateIlContent('Bayburt'), keywords: ['bayburt nakliyat'] },
  { slug: 'bilecik-sehirler-arasi-nakliyat', name: 'Bilecik', plaka: 11, title: 'Bilecik Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Bilecik şehirler arası evden eve nakliyat.', content: generateIlContent('Bilecik'), keywords: ['bilecik nakliyat'] },
  { slug: 'bingol-sehirler-arasi-nakliyat', name: 'Bingöl', plaka: 12, title: 'Bingöl Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Bingöl şehirler arası evden eve nakliyat.', content: generateIlContent('Bingöl'), keywords: ['bingöl nakliyat'] },
  { slug: 'bitlis-sehirler-arasi-nakliyat', name: 'Bitlis', plaka: 13, title: 'Bitlis Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Bitlis şehirler arası evden eve nakliyat.', content: generateIlContent('Bitlis'), keywords: ['bitlis nakliyat'] },
  { slug: 'bolu-sehirler-arasi-nakliyat', name: 'Bolu', plaka: 14, title: 'Bolu Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Bolu şehirler arası evden eve nakliyat.', content: generateIlContent('Bolu'), keywords: ['bolu nakliyat'] },
  { slug: 'burdur-sehirler-arasi-nakliyat', name: 'Burdur', plaka: 15, title: 'Burdur Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Burdur şehirler arası evden eve nakliyat.', content: generateIlContent('Burdur'), keywords: ['burdur nakliyat'] },
  { slug: 'bursa-sehirler-arasi-nakliyat', name: 'Bursa', plaka: 16, title: 'Bursa Şehirler Arası Nakliyat | Adana Bursa Evden Eve Taşıma', description: 'Adana - Bursa şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Bursa'), keywords: ['bursa nakliyat', 'bursa şehirler arası nakliyat', 'adana bursa nakliye'] },
  { slug: 'canakkale-sehirler-arasi-nakliyat', name: 'Çanakkale', plaka: 17, title: 'Çanakkale Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Çanakkale şehirler arası evden eve nakliyat.', content: generateIlContent('Çanakkale'), keywords: ['çanakkale nakliyat'] },
  { slug: 'cankiri-sehirler-arasi-nakliyat', name: 'Çankırı', plaka: 18, title: 'Çankırı Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Çankırı şehirler arası evden eve nakliyat.', content: generateIlContent('Çankırı'), keywords: ['çankırı nakliyat'] },
  { slug: 'corum-sehirler-arasi-nakliyat', name: 'Çorum', plaka: 19, title: 'Çorum Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Çorum şehirler arası evden eve nakliyat.', content: generateIlContent('Çorum'), keywords: ['çorum nakliyat'] },
  { slug: 'denizli-sehirler-arasi-nakliyat', name: 'Denizli', plaka: 20, title: 'Denizli Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Denizli şehirler arası evden eve nakliyat.', content: generateIlContent('Denizli'), keywords: ['denizli nakliyat'] },
  { slug: 'diyarbakir-sehirler-arasi-nakliyat', name: 'Diyarbakır', plaka: 21, title: 'Diyarbakır Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Diyarbakır şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Diyarbakır'), keywords: ['diyarbakır nakliyat', 'diyarbakır şehirler arası nakliyat'] },
  { slug: 'duzce-sehirler-arasi-nakliyat', name: 'Düzce', plaka: 81, title: 'Düzce Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Düzce şehirler arası evden eve nakliyat.', content: generateIlContent('Düzce'), keywords: ['düzce nakliyat'] },
  { slug: 'edirne-sehirler-arasi-nakliyat', name: 'Edirne', plaka: 22, title: 'Edirne Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Edirne şehirler arası evden eve nakliyat.', content: generateIlContent('Edirne'), keywords: ['edirne nakliyat'] },
  { slug: 'elazig-sehirler-arasi-nakliyat', name: 'Elazığ', plaka: 23, title: 'Elazığ Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Elazığ şehirler arası evden eve nakliyat.', content: generateIlContent('Elazığ'), keywords: ['elazığ nakliyat'] },
  { slug: 'erzincan-sehirler-arasi-nakliyat', name: 'Erzincan', plaka: 24, title: 'Erzincan Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Erzincan şehirler arası evden eve nakliyat.', content: generateIlContent('Erzincan'), keywords: ['erzincan nakliyat'] },
  { slug: 'erzurum-sehirler-arasi-nakliyat', name: 'Erzurum', plaka: 25, title: 'Erzurum Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Erzurum şehirler arası evden eve nakliyat.', content: generateIlContent('Erzurum'), keywords: ['erzurum nakliyat'] },
  { slug: 'eskisehir-sehirler-arasi-nakliyat', name: 'Eskişehir', plaka: 26, title: 'Eskişehir Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Eskişehir şehirler arası evden eve nakliyat.', content: generateIlContent('Eskişehir'), keywords: ['eskişehir nakliyat'] },
  { slug: 'gaziantep-sehirler-arasi-nakliyat', name: 'Gaziantep', plaka: 27, title: 'Gaziantep Şehirler Arası Nakliyat | Adana Gaziantep Evden Eve Taşıma', description: 'Adana - Gaziantep şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Gaziantep'), keywords: ['gaziantep nakliyat', 'gaziantep şehirler arası nakliyat', 'adana gaziantep nakliye'] },
  { slug: 'giresun-sehirler-arasi-nakliyat', name: 'Giresun', plaka: 28, title: 'Giresun Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Giresun şehirler arası evden eve nakliyat.', content: generateIlContent('Giresun'), keywords: ['giresun nakliyat'] },
  { slug: 'gumushane-sehirler-arasi-nakliyat', name: 'Gümüşhane', plaka: 29, title: 'Gümüşhane Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Gümüşhane şehirler arası evden eve nakliyat.', content: generateIlContent('Gümüşhane'), keywords: ['gümüşhane nakliyat'] },
  { slug: 'hakkari-sehirler-arasi-nakliyat', name: 'Hakkari', plaka: 30, title: 'Hakkari Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Hakkari şehirler arası evden eve nakliyat.', content: generateIlContent('Hakkari'), keywords: ['hakkari nakliyat'] },
  { slug: 'hatay-sehirler-arasi-nakliyat', name: 'Hatay', plaka: 31, title: 'Hatay Şehirler Arası Nakliyat | Adana Hatay Evden Eve Taşıma', description: 'Adana - Hatay şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Hatay'), keywords: ['hatay nakliyat', 'hatay şehirler arası nakliyat', 'adana hatay nakliye'] },
  { slug: 'igdir-sehirler-arasi-nakliyat', name: 'Iğdır', plaka: 76, title: 'Iğdır Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Iğdır şehirler arası evden eve nakliyat.', content: generateIlContent('Iğdır'), keywords: ['ığdır nakliyat'] },
  { slug: 'isparta-sehirler-arasi-nakliyat', name: 'Isparta', plaka: 32, title: 'Isparta Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Isparta şehirler arası evden eve nakliyat.', content: generateIlContent('Isparta'), keywords: ['ısparta nakliyat'] },
  { slug: 'istanbul-sehirler-arasi-nakliyat', name: 'İstanbul', plaka: 34, title: 'İstanbul Şehirler Arası Nakliyat | Adana İstanbul Evden Eve Taşıma', description: 'Adana - İstanbul şehirler arası evden eve nakliyat. Sigortalı, ambalajlı taşımacılık. İstanbul nakliyat fiyatları için arayın.', content: generateIlContent('İstanbul'), keywords: ['istanbul nakliyat', 'istanbul şehirler arası nakliyat', 'adana istanbul nakliye', 'istanbul evden eve nakliyat'] },
  { slug: 'izmir-sehirler-arasi-nakliyat', name: 'İzmir', plaka: 35, title: 'İzmir Şehirler Arası Nakliyat | Adana İzmir Evden Eve Taşıma', description: 'Adana - İzmir şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('İzmir'), keywords: ['izmir nakliyat', 'izmir şehirler arası nakliyat', 'adana izmir nakliye'] },
  { slug: 'kahramanmaras-sehirler-arasi-nakliyat', name: 'Kahramanmaraş', plaka: 46, title: 'Kahramanmaraş Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Kahramanmaraş şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Kahramanmaraş'), keywords: ['kahramanmaraş nakliyat', 'maraş şehirler arası nakliyat'] },
  { slug: 'karabuk-sehirler-arasi-nakliyat', name: 'Karabük', plaka: 78, title: 'Karabük Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Karabük şehirler arası evden eve nakliyat.', content: generateIlContent('Karabük'), keywords: ['karabük nakliyat'] },
  { slug: 'karaman-sehirler-arasi-nakliyat', name: 'Karaman', plaka: 70, title: 'Karaman Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Karaman şehirler arası evden eve nakliyat.', content: generateIlContent('Karaman'), keywords: ['karaman nakliyat'] },
  { slug: 'kars-sehirler-arasi-nakliyat', name: 'Kars', plaka: 36, title: 'Kars Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Kars şehirler arası evden eve nakliyat.', content: generateIlContent('Kars'), keywords: ['kars nakliyat'] },
  { slug: 'kastamonu-sehirler-arasi-nakliyat', name: 'Kastamonu', plaka: 37, title: 'Kastamonu Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Kastamonu şehirler arası evden eve nakliyat.', content: generateIlContent('Kastamonu'), keywords: ['kastamonu nakliyat'] },
  { slug: 'kayseri-sehirler-arasi-nakliyat', name: 'Kayseri', plaka: 38, title: 'Kayseri Şehirler Arası Nakliyat | Adana Kayseri Evden Eve Taşıma', description: 'Adana - Kayseri şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Kayseri'), keywords: ['kayseri nakliyat', 'kayseri şehirler arası nakliyat', 'adana kayseri nakliye'] },
  { slug: 'kirikkale-sehirler-arasi-nakliyat', name: 'Kırıkkale', plaka: 71, title: 'Kırıkkale Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Kırıkkale şehirler arası evden eve nakliyat.', content: generateIlContent('Kırıkkale'), keywords: ['kırıkkale nakliyat'] },
  { slug: 'kirklareli-sehirler-arasi-nakliyat', name: 'Kırklareli', plaka: 39, title: 'Kırklareli Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Kırklareli şehirler arası evden eve nakliyat.', content: generateIlContent('Kırklareli'), keywords: ['kırklareli nakliyat'] },
  { slug: 'kirsehir-sehirler-arasi-nakliyat', name: 'Kırşehir', plaka: 40, title: 'Kırşehir Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Kırşehir şehirler arası evden eve nakliyat.', content: generateIlContent('Kırşehir'), keywords: ['kırşehir nakliyat'] },
  { slug: 'kilis-sehirler-arasi-nakliyat', name: 'Kilis', plaka: 79, title: 'Kilis Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Kilis şehirler arası evden eve nakliyat.', content: generateIlContent('Kilis'), keywords: ['kilis nakliyat'] },
  { slug: 'kocaeli-sehirler-arasi-nakliyat', name: 'Kocaeli', plaka: 41, title: 'Kocaeli Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Kocaeli şehirler arası evden eve nakliyat.', content: generateIlContent('Kocaeli'), keywords: ['kocaeli nakliyat', 'izmit nakliyat'] },
  { slug: 'konya-sehirler-arasi-nakliyat', name: 'Konya', plaka: 42, title: 'Konya Şehirler Arası Nakliyat | Adana Konya Evden Eve Taşıma', description: 'Adana - Konya şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Konya'), keywords: ['konya nakliyat', 'konya şehirler arası nakliyat', 'adana konya nakliye'] },
  { slug: 'kutahya-sehirler-arasi-nakliyat', name: 'Kütahya', plaka: 43, title: 'Kütahya Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Kütahya şehirler arası evden eve nakliyat.', content: generateIlContent('Kütahya'), keywords: ['kütahya nakliyat'] },
  { slug: 'malatya-sehirler-arasi-nakliyat', name: 'Malatya', plaka: 44, title: 'Malatya Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Malatya şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Malatya'), keywords: ['malatya nakliyat', 'malatya şehirler arası nakliyat'] },
  { slug: 'manisa-sehirler-arasi-nakliyat', name: 'Manisa', plaka: 45, title: 'Manisa Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Manisa şehirler arası evden eve nakliyat.', content: generateIlContent('Manisa'), keywords: ['manisa nakliyat'] },
  { slug: 'mardin-sehirler-arasi-nakliyat', name: 'Mardin', plaka: 47, title: 'Mardin Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Mardin şehirler arası evden eve nakliyat.', content: generateIlContent('Mardin'), keywords: ['mardin nakliyat'] },
  { slug: 'mersin-sehirler-arasi-nakliyat', name: 'Mersin', plaka: 33, title: 'Mersin Şehirler Arası Nakliyat | Adana Mersin Evden Eve Taşıma', description: 'Adana - Mersin şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Mersin'), keywords: ['mersin nakliyat', 'mersin şehirler arası nakliyat', 'adana mersin nakliye'] },
  { slug: 'mugla-sehirler-arasi-nakliyat', name: 'Muğla', plaka: 48, title: 'Muğla Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Muğla şehirler arası evden eve nakliyat.', content: generateIlContent('Muğla'), keywords: ['muğla nakliyat'] },
  { slug: 'mus-sehirler-arasi-nakliyat', name: 'Muş', plaka: 49, title: 'Muş Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Muş şehirler arası evden eve nakliyat.', content: generateIlContent('Muş'), keywords: ['muş nakliyat'] },
  { slug: 'nevsehir-sehirler-arasi-nakliyat', name: 'Nevşehir', plaka: 50, title: 'Nevşehir Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Nevşehir şehirler arası evden eve nakliyat.', content: generateIlContent('Nevşehir'), keywords: ['nevşehir nakliyat'] },
  { slug: 'nigde-sehirler-arasi-nakliyat', name: 'Niğde', plaka: 51, title: 'Niğde Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Niğde şehirler arası evden eve nakliyat.', content: generateIlContent('Niğde'), keywords: ['niğde nakliyat'] },
  { slug: 'ordu-sehirler-arasi-nakliyat', name: 'Ordu', plaka: 52, title: 'Ordu Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Ordu şehirler arası evden eve nakliyat.', content: generateIlContent('Ordu'), keywords: ['ordu nakliyat'] },
  { slug: 'osmaniye-sehirler-arasi-nakliyat', name: 'Osmaniye', plaka: 80, title: 'Osmaniye Şehirler Arası Nakliyat | Adana Osmaniye Evden Eve Taşıma', description: 'Adana - Osmaniye şehirler arası evden eve nakliyat. Sigortalı taşımacılık.', content: generateIlContent('Osmaniye'), keywords: ['osmaniye nakliyat', 'osmaniye şehirler arası nakliyat', 'adana osmaniye nakliye'] },
  { slug: 'rize-sehirler-arasi-nakliyat', name: 'Rize', plaka: 53, title: 'Rize Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Rize şehirler arası evden eve nakliyat.', content: generateIlContent('Rize'), keywords: ['rize nakliyat'] },
  { slug: 'sakarya-sehirler-arasi-nakliyat', name: 'Sakarya', plaka: 54, title: 'Sakarya Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Sakarya şehirler arası evden eve nakliyat.', content: generateIlContent('Sakarya'), keywords: ['sakarya nakliyat'] },
  { slug: 'samsun-sehirler-arasi-nakliyat', name: 'Samsun', plaka: 55, title: 'Samsun Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Samsun şehirler arası evden eve nakliyat.', content: generateIlContent('Samsun'), keywords: ['samsun nakliyat'] },
  { slug: 'siirt-sehirler-arasi-nakliyat', name: 'Siirt', plaka: 56, title: 'Siirt Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Siirt şehirler arası evden eve nakliyat.', content: generateIlContent('Siirt'), keywords: ['siirt nakliyat'] },
  { slug: 'sinop-sehirler-arasi-nakliyat', name: 'Sinop', plaka: 57, title: 'Sinop Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Sinop şehirler arası evden eve nakliyat.', content: generateIlContent('Sinop'), keywords: ['sinop nakliyat'] },
  { slug: 'sivas-sehirler-arasi-nakliyat', name: 'Sivas', plaka: 58, title: 'Sivas Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Sivas şehirler arası evden eve nakliyat.', content: generateIlContent('Sivas'), keywords: ['sivas nakliyat'] },
  { slug: 'sanliurfa-sehirler-arasi-nakliyat', name: 'Şanlıurfa', plaka: 63, title: 'Şanlıurfa Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Şanlıurfa şehirler arası evden eve nakliyat.', content: generateIlContent('Şanlıurfa'), keywords: ['şanlıurfa nakliyat', 'urfa nakliyat'] },
  { slug: 'sirnak-sehirler-arasi-nakliyat', name: 'Şırnak', plaka: 73, title: 'Şırnak Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Şırnak şehirler arası evden eve nakliyat.', content: generateIlContent('Şırnak'), keywords: ['şırnak nakliyat'] },
  { slug: 'tekirdag-sehirler-arasi-nakliyat', name: 'Tekirdağ', plaka: 59, title: 'Tekirdağ Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Tekirdağ şehirler arası evden eve nakliyat.', content: generateIlContent('Tekirdağ'), keywords: ['tekirdağ nakliyat'] },
  { slug: 'tokat-sehirler-arasi-nakliyat', name: 'Tokat', plaka: 60, title: 'Tokat Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Tokat şehirler arası evden eve nakliyat.', content: generateIlContent('Tokat'), keywords: ['tokat nakliyat'] },
  { slug: 'trabzon-sehirler-arasi-nakliyat', name: 'Trabzon', plaka: 61, title: 'Trabzon Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Trabzon şehirler arası evden eve nakliyat.', content: generateIlContent('Trabzon'), keywords: ['trabzon nakliyat'] },
  { slug: 'tunceli-sehirler-arasi-nakliyat', name: 'Tunceli', plaka: 62, title: 'Tunceli Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Tunceli şehirler arası evden eve nakliyat.', content: generateIlContent('Tunceli'), keywords: ['tunceli nakliyat'] },
  { slug: 'usak-sehirler-arasi-nakliyat', name: 'Uşak', plaka: 64, title: 'Uşak Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Uşak şehirler arası evden eve nakliyat.', content: generateIlContent('Uşak'), keywords: ['uşak nakliyat'] },
  { slug: 'van-sehirler-arasi-nakliyat', name: 'Van', plaka: 65, title: 'Van Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Van şehirler arası evden eve nakliyat.', content: generateIlContent('Van'), keywords: ['van nakliyat'] },
  { slug: 'yalova-sehirler-arasi-nakliyat', name: 'Yalova', plaka: 77, title: 'Yalova Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Yalova şehirler arası evden eve nakliyat.', content: generateIlContent('Yalova'), keywords: ['yalova nakliyat'] },
  { slug: 'yozgat-sehirler-arasi-nakliyat', name: 'Yozgat', plaka: 66, title: 'Yozgat Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Yozgat şehirler arası evden eve nakliyat.', content: generateIlContent('Yozgat'), keywords: ['yozgat nakliyat'] },
  { slug: 'zonguldak-sehirler-arasi-nakliyat', name: 'Zonguldak', plaka: 67, title: 'Zonguldak Şehirler Arası Nakliyat | Evden Eve Taşıma', description: 'Adana - Zonguldak şehirler arası evden eve nakliyat.', content: generateIlContent('Zonguldak'), keywords: ['zonguldak nakliyat'] },
]

// Adana hariç (ana şehir) 80 il
export const getIlBySlug = (slug: string): Il | undefined => {
  return iller.find(il => il.slug === slug)
}

export const getAllIlSlugs = (): string[] => {
  return iller.map(il => il.slug)
}
