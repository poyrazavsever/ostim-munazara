export interface Konu {
  ad: string;
  kategori: string;
  tarih: string;
  yer: string;
}

export const kategoriler = [
  "ULUSAL KONULARI",
  "AKADEMİ",
  "BİREY DEVLET",
  "EĞİTİM",
  "EKONOMİ",
  "ETİK",
  "FELSEFE",
  "DEBATE",
  "HUKUK",
  "MEDYA",
  "ROMANTİK İLİŞKİ",
  "SANAT",
  "SİYASET",
  "TOPLUMSAL YAŞAM",
  "ULUSLARARASI İLİŞKİLER",
  "FİNAL KONULARI",
  "META MÜNAZARA",
  "HAK HAREKETLERİ",
  "SPOR",
  "İFADE ÖZGÜRLÜĞÜ",
  "DİN",
  "ÇOCUK YETİŞTİRME",
  "AKTÖR",
  "ANLATI",
  "LİSE KONULARI"
];

export const konular: Konu[] = [
  {
    ad: "İfade özgürlüğü sosyal medyada nasıl korunmalı?",
    kategori: "İFADE ÖZGÜRLÜĞÜ",
    tarih: "12.03.2025",
    yer: "Ostim Münazara Kulübü Bahar Turnuvası"
  },
  {
    ad: "Devletin eğitimdeki rolü ne olmalı?",
    kategori: "EĞİTİM",
    tarih: "05.02.2025",
    yer: "Lise Münazara Finali"
  },
  {
    ad: "Sanat toplumun gelişiminde ne kadar etkilidir?",
    kategori: "SANAT",
    tarih: "18.04.2025",
    yer: "Üniversitelerarası Münazara"
  },
  {
    ad: "Ekonomik krizlerde devlet müdahalesi gerekli midir?",
    kategori: "EKONOMİ",
    tarih: "22.01.2025",
    yer: "Ostim Münazara Kış Etkinliği"
  },
  {
    ad: "Romantik ilişkilerde iletişimin önemi nedir?",
    kategori: "ROMANTİK İLİŞKİ",
    tarih: "14.02.2025",
    yer: "Sevgililer Günü Özel Münazara"
  },
  {
    ad: "Çocuk yetiştirmede disiplin mi özgürlük mü?",
    kategori: "ÇOCUK YETİŞTİRME",
    tarih: "10.05.2025",
    yer: "Aile ve Toplum Paneli"
  },
  {
    ad: "Uluslararası ilişkilerde etik değerler ne kadar önemlidir?",
    kategori: "ULUSLARARASI İLİŞKİLER",
    tarih: "28.03.2025",
    yer: "Model Birleşmiş Milletler"
  }
]
