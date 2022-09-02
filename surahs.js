const surah = [
  { label: 'Other', value: 'Other',name:''  },
  { label: 'Al-Fatihah (the Opening)', value: 'Al-Fatihah (the Opening)', name:'الفَاتِحَة' },
  { label: 'Al-Baqarah (the Cow)', value: 'Al-Baqarah (the Cow)', name:'البَقَرَة' },
  {
    label: 'Aali Imran (the Family of Imran)',
    value: 'Aali Imran (the Family of Imran)',
    name:'آل عِمرَان'
  },
  { label: 'An-Nisa’ (the Women)', value: 'An-Nisa’ (the Women)',name:'النِّسَاء' },
  { label: 'Al-Ma’idah (the Table)', value: 'Al-Ma’idah (the Table)',name:'المَائدة'  },
  { label: 'Al-An’am (the Cattle)', value: 'Al-An’am (the Cattle)' ,name:'الأنعَام' },
  { label: 'Al-A’raf (the Heights)', value: 'Al-A’raf (the Heights)' ,name:'الأعرَاف' },
  {
    label: 'Al-Anfal (the Spoils of War)',
    value: 'Al-Anfal (the Spoils of War)',
    name:'الأنفَال' 
  },
  { label: 'At-Taubah (the Repentance)', value: 'At-Taubah (the Repentance)',name:'التوبَة'  },
  { label: 'Yunus (Yunus)', value: 'Yunus (Yunus)',name:'يُونس'  },
  { label: 'Hud (Hud)', value: 'Hud (Hud)',name:'هُود'  },
  { label: 'Yusuf (Yusuf)', value: 'Yusuf (Yusuf)',name:'يُوسُف'  },
  { label: 'Ar-Ra’d (the Thunder)', value: 'Ar-Ra’d (the Thunder)',name:'الرَّعْد'  },
  { label: 'Ibrahim (Ibrahim)', value: 'Ibrahim (Ibrahim)',name:'إبراهِيم'  },
  { label: 'Al-Hijr (the Rocky Tract)', value: 'Al-Hijr (the Rocky Tract)',name:'الحِجْر'  },
  { label: 'An-Nahl (the Bees)', value: 'An-Nahl (the Bees)',name:'النَّحْل'  },
  {
    label: 'Al-Isra’ (the Night Journey)',
    value: 'Al-Isra’ (the Night Journey)',name:'الإسْرَاء' 
  },
  { label: 'Al-Kahf (the Cave)', value: 'Al-Kahf (the Cave)',name:'الكهْف'  },
  { label: 'Maryam (Maryam)', value: 'Maryam (Maryam)',name:'مَريَم'  },
  { label: 'Ta-Ha (Ta-Ha)', value: 'Ta-Ha (Ta-Ha)',name:'طه'  },
  { label: 'Al-Anbiya’ (the Prophets)', value: 'Al-Anbiya’ (the Prophets)',name:'الأنبيَاء'  },
  { label: 'Al-Haj (the Pilgrimage)', value: 'Al-Haj (the Pilgrimage)',name:'الحَج'  },
  {
    label: 'Al-Mu’minun (the Believers)',
    value: 'Al-Mu’minun (the Believers)',name:'المُؤمنون' 
  },
  { label: 'An-Nur (the Light)', value: 'An-Nur (the Light)' ,name:'النُّور' },
  { label: 'Al-Furqan (the Criterion)', value: 'Al-Furqan (the Criterion)',name:'الفُرْقان'  },
  { label: 'Ash-Shu’ara’ (the Poets)', value: 'Ash-Shu’ara’ (the Poets)',name:'الشُّعَرَاء'  },
  { label: 'An-Naml (the Ants)', value: 'An-Naml (the Ants)' ,name:'النَّمْل' },
  { label: 'Al-Qasas (the Stories)', value: 'Al-Qasas (the Stories)' ,name:'القَصَص' },
  { label: 'Al-Ankabut (the Spider)', value: 'Al-Ankabut (the Spider)' ,name:'العَنكبوت' },
  { label: 'Ar-Rum (the Romans)', value: 'Ar-Rum (the Romans)',name:'الرُّوم'  },
  { label: 'Luqman (Luqman)', value: 'Luqman (Luqman)',name:'لقمَان'  },
  {
    label: 'As-Sajdah (the Prostration)',
    value: 'As-Sajdah (the Prostration)',name:'السَّجدَة' 
  },
  {
    label: 'Al-Ahzab (the Combined Forces)',
    value: 'Al-Ahzab (the Combined Forces)',name:'الأحزَاب' 
  },
  { label: 'Saba’ (the Sabeans)', value: 'Saba’ (the Sabeans)',name:'سَبَأ'  },
  { label: 'Al-Fatir (the Originator)', value: 'Al-Fatir (the Originator)',name:'فَاطِر'  },
  { label: 'Ya-Sin (Ya-Sin)', value: 'Ya-Sin (Ya-Sin)',name:'يس'  },
  {
    label: 'As-Saffah (Those Ranges in Ranks)',
    value: 'As-Saffah (Those Ranges in Ranks)',name:'الصَّافات' 
  },
  { label: 'Sad (Sad)', value: 'Sad (Sad)' ,name:'ص' },
  { label: 'Az-Zumar (the Groups)', value: 'Az-Zumar (the Groups)' ,name:'الزُّمَر' },
  { label: 'Ghafar (the Forgiver)', value: 'Ghafar (the Forgiver)' ,name:'غَافِر' },
  { label: 'Fusilat (Distinguished)', value: 'Fusilat (Distinguished)',name:'فُصِّلَتْ'  },
  {
    label: 'Ash-Shura (the Consultation)',
    value: 'Ash-Shura (the Consultation)',name:'الشُّورَى' 
  },
  { label: 'Az-Zukhruf (the Gold)', value: 'Az-Zukhruf (the Gold)' ,name:'الزُّخْرُف' },
  { label: 'Ad-Dukhan (the Smoke)', value: 'Ad-Dukhan (the Smoke)' ,name:'الدُّخان' },
  { label: 'Al-Jathiyah (the Kneeling)', value: 'Al-Jathiyah (the Kneeling)',name:'الجاثِية'  },
  { label: 'Al-Ahqaf (the Valley)', value: 'Al-Ahqaf (the Valley)' ,name:'الأحقاف' },
  { label: 'Muhammad (Muhammad)', value: 'Muhammad (Muhammad)',name:'مُحَمّد'  },
  { label: 'Al-Fat’h (the Victory)', value: 'Al-Fat’h (the Victory)' ,name:'الفَتْح' },
  { label: 'Al-Hujurat (the Dwellings)', value: 'Al-Hujurat (the Dwellings)' ,name:'الحُجُرات' },
  { label: 'Qaf (Qaf)', value: 'Qaf (Qaf)',name:'ق'  },
  {
    label: 'Adz-Dzariyah (the Scatterers)',
    value: 'Adz-Dzariyah (the Scatterers)',name:'الذَّاريَات' 
  },
  { label: 'At-Tur (the Mount)', value: 'At-Tur (the Mount)',name:'الطُّور'  },
  { label: 'An-Najm (the Star)', value: 'An-Najm (the Star)' ,name:'النَّجْم' },
  { label: 'Al-Qamar (the Moon)', value: 'Al-Qamar (the Moon)',name:'القَمَر'  },
  {
    label: 'Ar-Rahman (the Most Gracious)',
    value: 'Ar-Rahman (the Most Gracious)',name:'الرَّحمن' 
  },
  { label: 'Al-Waqi’ah (the Event)', value: 'Al-Waqi’ah (the Event)',name:'الواقِعَة'  },
  { label: 'Al-Hadid (the Iron)', value: 'Al-Hadid (the Iron)',name:'الحَديد'  },
  {
    label: 'Al-Mujadilah (the Reasoning)',
    value: 'Al-Mujadilah (the Reasoning)',name:'المُجادَلة' 
  },
  { label: 'Al-Hashr (the Gathering)', value: 'Al-Hashr (the Gathering)',name:'الحَشْر'  },
  { label: 'Al-Mumtahanah (the Tested)', value: 'Al-Mumtahanah (the Tested)',name:'المُمتَحَنة'  },
  { label: 'As-Saf (the Row)', value: 'As-Saf (the Row)' ,name:'الصَّف' },
  { label: 'Al-Jum’ah (Friday)', value: 'Al-Jum’ah (Friday)' ,name:'الجُّمُعة' },
  {
    label: 'Al-Munafiqun (the Hypocrites)',
    value: 'Al-Munafiqun (the Hypocrites)',name:'المُنافِقُون' 
  },
  {
    label: 'At-Taghabun (the Loss & Gain)',
    value: 'At-Taghabun (the Loss & Gain)',name:'التَّغابُن' 
  },
  { label: 'At-Talaq (the Divorce)', value: 'At-Talaq (the Divorce)',name:'الطَّلاق'  },
  {
    label: 'At-Tahrim (the Prohibition)',
    value: 'At-Tahrim (the Prohibition)',name:'التَّحْريم' 
  },
  { label: 'Al-Mulk – (the Kingdom)', value: 'Al-Mulk – (the Kingdom)' ,name:'المُلْك' },
  { label: 'Al-Qalam (the Pen)', value: 'Al-Qalam (the Pen)',name:'القَلـََم'  },
  { label: 'Al-Haqqah (the Inevitable)', value: 'Al-Haqqah (the Inevitable)' ,name:'الحَاقّـَة' },
  {
    label: 'Al-Ma’arij (the Elevated Passages)',
    value: 'Al-Ma’arij (the Elevated Passages)',name:'المَعارِج' 
  },
  { label: 'Nuh (Nuh)', value: 'Nuh (Nuh)',name:'نُوح'  },
  { label: 'Al-Jinn (the Jinn)', value: 'Al-Jinn (the Jinn)' ,name:'الجِنّ' },
  { label: 'Al-Muzammil (the Wrapped)', value: 'Al-Muzammil (the Wrapped)',name:'المُزَّمّـِل'  },
  {
    label: 'Al-Mudaththir (the Cloaked)',
    value: 'Al-Mudaththir (the Cloaked)',name:'المُدَّثــِّر' 
  },
  {
    label: 'Al-Qiyamah (the Resurrection)',
    value: 'Al-Qiyamah (the Resurrection)',name:'القِيامَة' 
  },
  { label: 'Al-Insan (the Human)', value: 'Al-Insan (the Human)',name:'الإنسان'  },
  {
    label: 'Al-Mursalat (Those Sent Forth)',
    value: 'Al-Mursalat (Those Sent Forth)',name:'المُرسَلات' 
  },
  { label: 'An-Naba’ (the Great News)', value: 'An-Naba’ (the Great News)',name:'النـَّبأ'  },
  {
    label: 'An-Nazi’at (Those Who Pull Out)',
    value: 'An-Nazi’at (Those Who Pull Out)',name:'النـّازِعات' 
  },
  { label: '‘Abasa (He Frowned)', value: '‘Abasa (He Frowned)' ,name:'عَبَس' },
  {
    label: 'At-Takwir (the Overthrowing)',
    value: 'At-Takwir (the Overthrowing)',name:'التـَّكْوير' 
  },
  { label: 'Al-Infitar (the Cleaving)', value: 'Al-Infitar (the Cleaving)' ,name:'الإنفِطار' },
  {
    label: 'Al-Mutaffifin (Those Who Deal in Fraud)',
    value: 'Al-Mutaffifin (Those Who Deal in Fraud)',name:'المُطـَفِّفين' 
  },
  {
    label: 'Al-Inshiqaq (the Splitting Asunder)',
    value: 'Al-Inshiqaq (the Splitting Asunder)',name:'الإنشِقاق' 
  },
  { label: 'Al-Buruj (the Stars)', value: 'Al-Buruj (the Stars)',name:'البُروج'  },
  { label: 'At-Tariq (the Nightcomer)', value: 'At-Tariq (the Nightcomer)',name:'الطّارق'  },
  { label: 'Al-A’la (the Most High)', value: 'Al-A’la (the Most High)',name:'الأعلی'  },
  {
    label: 'Al-Ghashiyah (the Overwhelming)',
    value: 'Al-Ghashiyah (the Overwhelming)',name:'الغاشِيَة' 
  },
  { label: 'Al-Fajr (the Dawn)', value: 'Al-Fajr (the Dawn)' ,name:'الفَجْر' },
  { label: 'Al-Balad (the City)', value: 'Al-Balad (the City)' ,name:'البَـلـَد' },
  { label: 'Ash-Shams (the Sun)', value: 'Ash-Shams (the Sun)' ,name:'الشــَّمْس' },
  { label: 'Al-Layl (the Night)', value: 'Al-Layl (the Night)' ,name:'اللـَّيل' },
  { label: 'Adh-Dhuha (the Forenoon)', value: 'Adh-Dhuha (the Forenoon)' ,name:'الضُّحی' },
  {
    label: 'Al-Inshirah (the Opening Forth)',
    value: 'Al-Inshirah (the Opening Forth)',name:'الشَّرْح' 
  },
  { label: 'At-Tin (the Fig)', value: 'At-Tin (the Fig)',name:'التـِّين'  },
  { label: 'Al-‘Alaq (the Clot)', value: 'Al-‘Alaq (the Clot)' ,name:'العَلـَق' },
  {
    label: 'Al-Qadar (the Night of Decree)',
    value: 'Al-Qadar (the Night of Decree)',name:'القـَدر' 
  },
  { label: 'Al-Bayinah (the Proof)', value: 'Al-Bayinah (the Proof)',name:'البَيِّنَة'  },
  {
    label: 'Az-Zalzalah (the Earthquake)',
    value: 'Az-Zalzalah (the Earthquake)',name:'الزلزَلة' 
  },
  { label: 'Al-‘Adiyah (the Runners)', value: 'Al-‘Adiyah (the Runners)' ,name:'العَادِيات' },
  {
    label: 'Al-Qari’ah (the Striking Hour)',
    value: 'Al-Qari’ah (the Striking Hour)',name:'القارِعَة' 
  },
  {
    label: 'At-Takathur (the Piling Up)',
    value: 'At-Takathur (the Piling Up)',name:'التَكاثـُر' 
  },
  { label: 'Al-‘Asr (the Time)', value: 'Al-‘Asr (the Time)',name:'العَصْر'  },
  { label: 'Al-Humazah (the Slanderer)', value: 'Al-Humazah (the Slanderer)',name:'الهُمَزَة'  },
  { label: 'Al-Fil (the Elephant)', value: 'Al-Fil (the Elephant)' ,name:'الفِيل' },
  { label: 'Quraish (Quraish)', value: 'Quraish (Quraish)',name:'قـُرَيْش'  },
  { label: 'Al-Ma’un (the Assistance)', value: 'Al-Ma’un (the Assistance)',name:'المَاعُون'  },
  {
    label: 'Al-Kauthar (the River of Abundance)',
    value: 'Al-Kauthar (the River of Abundance)',name:'الكَوْثَر' 
  },
  {
    label: 'Al-Kafirun (the Disbelievers)',
    value: 'Al-Kafirun (the Disbelievers)',name:'الكَافِرُون' 
  },
  { label: 'An-Nasr (the Help)', value: 'An-Nasr (the Help)',name:'النـَّصر'  },
  { label: 'Al-Masad (the Palm Fiber)', value: 'Al-Masad (the Palm Fiber)' ,name:'المَسَد' },
  { label: 'Al-Ikhlas (the Sincerity)', value: 'Al-Ikhlas (the Sincerity)' ,name:'الإخْلَاص' },
  { label: 'Al-Falaq (the Daybreak)', value: 'Al-Falaq (the Daybreak)',name:'الفَلَق'  },
  { label: 'An-Nas (Mankind)', value: 'An-Nas (Mankind)',name:'النَّاس'  },
];
export default surah;