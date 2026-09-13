import {
  company as companyEn,
  services as servicesEn,
  industries as industriesEn,
  categoryNotes as categoryNotesEn,
  type Service,
} from "./site";
import { projects as projectsEn, type Project } from "./projects";

export type Lang = "en" | "ar";

/* ---------- UI strings ---------- */
export const UI: Record<Lang, Record<string, string>> = {
  en: {
    nav_work: "Work",
    nav_expertise: "Expertise",
    nav_studio: "Studio",
    nav_contact: "Contact",
    subbrand: "Sculptures · Interiors",
    hero_intro:
      "A creative fabrication, architectural art, and heritage restoration studio crafting sculptural and cultural works across the Sultanate of Oman.",
    hero_cta_work: "View Selected Work",
    hero_cta_project: "Start a Project",
    hero_ethos_label: "Our Ethos",
    hero_ethos_body:
      "From concept and consultancy to fabrication and final installation — work that carries cultural weight and lasting craft.",
    about_label: "The Studio",
    about_heading_plain: "Artistic creativity, met with",
    about_heading_emph: "technical precision",
    about_stat_disciplines: "Disciplines of Craft",
    about_stat_industries: "Industries Served",
    about_stat_based: "Based in Oman",
    about_stat_value_muscat: "Muscat",
    expertise_label: "Our Specialized Services",
    expertise_heading_plain: "Eight disciplines,",
    expertise_heading_emph: "crafted end to end",
    expertise_sub:
      "From concept and consultancy through fabrication to final installation across the Sultanate of Oman.",
    work_label: "Selected Work",
    work_heading_plain: "Explore the work by",
    work_heading_emph: "category",
    work_sub:
      "projects across {m} disciplines, realised in Oman and beyond. Select a category to view every project and its photographs.",
    work_projects: "Projects",
    work_project: "Project",
    work_browse_label: "Browse",
    work_browse_heading_plain: "Every project,",
    work_browse_heading_emph: "category by category",
    work_browse_cta: "Start exploring",
    industries_label: "Industries We Serve",
    contact_label: "Begin a Conversation",
    contact_heading_plain: "Let's create something",
    contact_heading_emph: "enduring",
    contact_cta: "Start Your Project",
    contact_row_phone: "Telephone",
    contact_row_email: "Email",
    contact_row_studio: "Studio",
    modal_sidebar_heading: "Let's shape something enduring.",
    modal_sidebar_body:
      "Share your vision and we will help bring it to life with craft, precision, and cultural depth.",
    modal_form_label: "Inquiry",
    modal_form_heading: "Begin a project",
    modal_name: "Name",
    modal_name_ph: "Your name",
    modal_email: "Email",
    modal_email_ph: "email@example.com",
    modal_phone: "Phone",
    modal_location: "Location",
    modal_location_ph: "City, Country",
    modal_details: "Project details",
    modal_details_ph: "Tell us about your space and vision…",
    modal_send: "Open Email Draft",
    modal_success_heading: "Email draft opened",
    modal_success_body:
      "Please send the prepared email from your mail app. You can also write to jabaldreams@gmail.com directly.",
    footer_explore: "Explore",
    footer_get_in_touch: "Get in Touch",
    footer_desc_plain:
      "Architectural art, heritage restoration, and creative fabrication, based in",
    footer_rights: "All Rights Reserved.",
    footer_crafted: "Crafted in Oman",
    cat_all: "All Categories",
    cat_continue: "Continue Exploring",
    cat_views: "Views",
    cat_view: "View",
    lang_toggle: "العربية",
  },
  ar: {
    nav_work: "الأعمال",
    nav_expertise: "خبراتنا",
    nav_studio: "الاستوديو",
    nav_contact: "تواصل معنا",
    subbrand: "منحوتات · تصاميم داخلية",
    hero_intro:
      "استوديو للتصنيع الإبداعي والفن المعماري وترميم التراث، يبدع أعمالاً نحتية وثقافية في أنحاء سلطنة عُمان.",
    hero_cta_work: "استعرض أعمالاً مختارة",
    hero_cta_project: "ابدأ مشروعاً",
    hero_ethos_label: "فلسفتنا",
    hero_ethos_body:
      "من الفكرة والاستشارة إلى التصنيع والتركيب النهائي — أعمالٌ تحمل عمقاً ثقافياً وحرفيةً تدوم.",
    about_label: "الاستوديو",
    about_heading_plain: "إبداعٌ فني يلتقي مع",
    about_heading_emph: "دقة تقنية",
    about_stat_disciplines: "مجالات الحرفة",
    about_stat_industries: "القطاعات التي نخدمها",
    about_stat_based: "مقرّنا في عُمان",
    about_stat_value_muscat: "مسقط",
    expertise_label: "خدماتنا المتخصصة",
    expertise_heading_plain: "ثمانية مجالات،",
    expertise_heading_emph: "نتقنها من البداية إلى النهاية",
    expertise_sub:
      "من الفكرة والاستشارة مروراً بالتصنيع وحتى التركيب النهائي في أنحاء سلطنة عُمان.",
    work_label: "أعمال مختارة",
    work_heading_plain: "استكشف الأعمال حسب",
    work_heading_emph: "الفئة",
    work_sub:
      "مشاريع عبر {m} مجالات، أُنجزت في عُمان وخارجها. اختر فئةً لاستعراض كل مشروع وصوره.",
    work_projects: "مشاريع",
    work_project: "مشروع",
    work_browse_label: "تصفّح",
    work_browse_heading_plain: "كل مشروع،",
    work_browse_heading_emph: "فئةً تلو الأخرى",
    work_browse_cta: "ابدأ الاستكشاف",
    industries_label: "القطاعات التي نخدمها",
    contact_label: "لنبدأ حواراً",
    contact_heading_plain: "لنُبدع معاً شيئاً",
    contact_heading_emph: "يدوم",
    contact_cta: "ابدأ مشروعك",
    contact_row_phone: "الهاتف",
    contact_row_email: "البريد الإلكتروني",
    contact_row_studio: "الاستوديو",
    modal_sidebar_heading: "لنُبدع معاً ما يدوم.",
    modal_sidebar_body: "شاركنا رؤيتك وسنساعدك على تحقيقها بحرفيةٍ ودقةٍ وعمقٍ ثقافي.",
    modal_form_label: "استفسار",
    modal_form_heading: "ابدأ مشروعاً",
    modal_name: "الاسم",
    modal_name_ph: "اسمك",
    modal_email: "البريد الإلكتروني",
    modal_email_ph: "email@example.com",
    modal_phone: "الهاتف",
    modal_location: "الموقع",
    modal_location_ph: "المدينة، الدولة",
    modal_details: "تفاصيل المشروع",
    modal_details_ph: "حدّثنا عن مساحتك ورؤيتك…",
    modal_send: "فتح مسودة البريد",
    modal_success_heading: "تم فتح مسودة البريد",
    modal_success_body:
      "يرجى إرسال البريد من تطبيق البريد لديك. يمكنك أيضاً مراسلتنا مباشرة على jabaldreams@gmail.com.",
    footer_explore: "استكشف",
    footer_get_in_touch: "تواصل معنا",
    footer_desc_plain: "فنٌ معماري وترميم تراثي وتصنيع إبداعي، ومقرّنا في",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_crafted: "صُنع في عُمان",
    cat_all: "كل الفئات",
    cat_continue: "واصل الاستكشاف",
    cat_views: "مشاهدات",
    cat_view: "مشاهدة",
    lang_toggle: "English",
  },
};

/* ---------- Company (translatable fields) ---------- */
const companyAr = {
  tagline: "نحفظ الماضي، ونصنع المستقبل.",
  location: "مسقط، سلطنة عُمان",
  intro:
    "جبل دريمز شركة متخصصة في التصنيع الإبداعي والإثراء المعماري وترميم التراث، ومقرها مسقط، سلطنة عُمان. نتعاون مع المعماريين ومصممي الديكور الداخلي والمهندسين والاستشاريين والمطوّرين والمقاولين والجهات الحكومية لتحويل الأفكار إلى أعمال معمارية وفنية مميزة.",
  intro2:
    "تجمع خبرتنا بين الإبداع الفني والدقة التقنية والحِرفية المتقنة لتقديم العناصر النحتية والتشطيبات ذات الملمس والعناصر المعمارية وأعمال ترميم التراث والنماذج المصغّرة عالية التفاصيل لمجموعة واسعة من المشاريع في أنحاء عُمان.",
  intro3:
    "من تطوير الفكرة وحتى التركيب النهائي، نقدّم حلولاً مخصّصة تُعزّز الهوية البصرية والوظيفية والقيمة الثقافية لكل مساحة.",
  street: "شارع حيل الشمالية، الحيل",
  country: "سلطنة عُمان",
};

/* ---------- Hero headline ---------- */
const heroEn = { headline: "Preserving Heritage, Creating Landmarks, Transforming Spaces.", emph: "Landmarks" };
const heroAr = { headline: "نحفظ التراث، ونصنع المعالم، ونحوّل المساحات.", emph: "المعالم" };

const pillsAr = ["الفن المعماري", "ترميم التراث", "التصنيع الإبداعي"];

/* ---------- Industries (AR) ---------- */
const industriesArr = [
  "شركات العمارة",
  "شركات التصميم الداخلي",
  "الاستشاريون الهندسيون",
  "مطوّرو العقارات",
  "مشاريع الضيافة",
  "العلامات التجارية للبيع بالتجزئة",
  "المؤسسات الحكومية",
  "مشاريع القطاع العام",
  "شركات الفعاليات والمعارض",
  "المشاريع السكنية",
  "مشاريع صون التراث",
];

/* ---------- Categories (AR name + note), keyed by English name ---------- */
const categoryAr: Record<string, { name: string; note: string }> = {
  "Heritage & Cultural": {
    name: "التراث والثقافة",
    note: "إعادة إحياء ثقافية وأعمال تذكارية ومشاريع مستلهمة من التراث تحمل دلالات تاريخية ووطنية.",
  },
  "Texture & Murals": {
    name: "الملمس والجداريات",
    note: "جداريات مرسومة باليد وتشطيبات ذات ملمس وأعمال زخرفية على الأسطح، تشمل الجدران والشعارات واللوحات القماشية.",
  },
  "Events & Installations": {
    name: "الفعاليات والتجهيزات",
    note: "بيئات للمهرجانات والمعارض تُصنَّع وتُركَّب في المواعيد المحددة في أنحاء عُمان.",
  },
  "Sculpture & Fabrication": {
    name: "النحت والتصنيع",
    note: "مجسّمات نحتية وأشكال معمارية وأعمال تصنيع مخصّصة — تُبنى وتُشطَّب وتُركَّب على نطاق واسع.",
  },
  "Scale Models & Miniatures": {
    name: "النماذج المصغّرة والمجسّمات",
    note: "مجسّمات دقيقة ونماذج عرض — إضافة إلى قطع ضخمة الحجم — تُصنع للتصوّر البصري والعرض.",
  },
};

/* ---------- Services (AR), keyed by id ---------- */
const servicesAr: Record<string, { title: string; blurb: string; listLabel: string; items: string[] }> = {
  heritage: {
    title: "ترميم التراث وصون الآثار",
    blurb:
      "ترميم المنشآت التراثية والقلاع والمعالم الأثرية والمباني ذات القيمة الثقافية وصونها ودعم أعمال الحفظ والتجديد فيها — مع الحفاظ على الأصالة التاريخية ودمج التقنيات الحديثة التي تضمن المتانة والحفظ على المدى الطويل.",
    listLabel: "تشمل الخدمات",
    items: [
      "ترميم المعالم الأثرية",
      "ترميم المباني التراثية وصونها",
      "إعادة تأهيل القلاع وتعزيزها",
      "أعمال الترميم المعماري التقليدي",
      "ترميم الواجهات التاريخية",
      "إعادة إحياء الأسطح الزخرفية",
      "ترميم الملمس والجداريات",
      "إعادة بناء العناصر المعمارية",
      "استنساخ المنحوتات حسب الطلب",
      "التوثيق المعماري وإعادة الإنتاج",
      "إعادة التوظيف التكيّفي للمساحات التراثية",
      "تطوير التصميم الداخلي للمباني التاريخية",
    ],
  },
  sculptural: {
    title: "الفن الجداري النحتي",
    blurb:
      "تجهيزات نحتية مصممة حسب الطلب تصنع حضوراً بصرياً آسراً وتتحول إلى نقاط ارتكاز محورية داخل الفضاءات المعمارية.",
    listLabel: "مجالات التطبيق",
    items: [
      "منحوتات بارزة فنية",
      "جدران مميِّزة",
      "عناصر معمارية زخرفية",
      "تجهيزات موضوعية حسب الطلب",
      "تصاميم معاصرة وعضوية",
      "عناصر نحتية داخلية وخارجية",
    ],
  },
  "3d-features": {
    title: "العناصر المعمارية ثلاثية الأبعاد",
    blurb:
      "عناصر معمارية ثلاثية الأبعاد فريدة تضفي العمق والملمس والطابع المميّز على البيئات الداخلية والخارجية.",
    listLabel: "مجالات التطبيق",
    items: [
      "بهو الفنادق",
      "مناطق الاستقبال",
      "المكاتب المؤسسية",
      "مساحات التجزئة",
      "المطاعم والمقاهي",
      "الفلل والمشاريع السكنية",
    ],
  },
  "texture-murals": {
    title: "الجداريات ذات الملمس والتشطيبات الزخرفية",
    blurb: "معالجات جدارية إبداعية تمزج التعبير الفني مع الإثراء المعماري.",
    listLabel: "تشمل الخدمات",
    items: [
      "جداريات ذات ملمس مصنوعة يدوياً",
      "أسطح زخرفية ذات ملمس",
      "تكوينات جدارية فنية",
      "أنماط تصميم حسب الطلب",
      "تشطيبات حديثة وتقليدية",
      "تطبيقات داخلية وخارجية",
    ],
  },
  acoustic: {
    title: "حلول العزل والمعالجة الصوتية",
    blurb: "معالجات صوتية وظيفية مصممة لتحسين جودة الصوت مع الحفاظ على الجاذبية الجمالية.",
    listLabel: "مجالات التطبيق",
    items: ["المكاتب", "قاعات الاجتماعات", "الاستوديوهات", "المسارح المنزلية", "منشآت الضيافة", "المساحات التجارية"],
  },
  "water-features": {
    title: "العناصر المائية الداخلية والخارجية",
    blurb: "عناصر مائية مصممة حسب الطلب تضفي الحركة والأناقة والسكينة على البيئات المعمارية.",
    listLabel: "تشمل الخدمات",
    items: [
      "شلالات زخرفية",
      "جدران مائية مميِّزة",
      "تجهيزات مائية داخلية",
      "عناصر مائية خارجية",
      "عناصر مائية للمناظر الطبيعية",
      "تصاميم نوافير حسب الطلب",
    ],
  },
  "scale-modeling": {
    title: "النماذج المصغّرة بمقياس رسم",
    blurb: "نماذج معمارية وهندسية مصغّرة عالية التفصيل تساعد على تصوّر المشاريع وعرضها.",
    listLabel: "مجالات التطبيق",
    items: [
      "المشاريع المعمارية",
      "مشاريع التخطيط العمراني",
      "مقترحات ترميم التراث",
      "العروض الهندسية",
      "التسويق والمعارض",
      "المسابقات المعمارية",
      "عروض المستثمرين والعملاء",
    ],
  },
  consultancy: {
    title: "استشارات التصميم والمواد",
    blurb:
      "استشارات احترافية للمعماريين ومصممي الديكور الداخلي والمهندسين والمطوّرين وأصحاب المشاريع خلال مراحل التصميم والتخطيط — بما يساعد العملاء على تحقيق حلول ذات أثر بصري آسر، وقابلة للتنفيذ تقنياً، وفعّالة من حيث التكلفة.",
    listLabel: "تشمل الخدمات الاستشارية",
    items: [
      "استشارات تصميم العناصر المعمارية",
      "تطوير تصميم الفن النحتي والمعالم المميِّزة",
      "تصميم مفاهيم الجدران ثلاثية الأبعاد والملمس",
      "تصميم التكوينات الصخرية الداخلية والصخور الاصطناعية",
      "استشارات الأسطح الزخرفية والطلاء ذي الملمس",
      "اختيار نظام الألوان والمواد",
      "تطوير الطابع الفني",
      "تحديد مواصفات المواد والتوصية بها",
      "تخطيط منهجية التصنيع",
      "استراتيجية التركيب والإرشاد التقني",
      "تحسين التكلفة وهندسة القيمة",
      "تطوير النماذج الأولية والمجسمات التجريبية",
      "تفصيل العناصر المعمارية حسب الطلب",
      "تقييم جدوى المشروع",
    ],
  },
};

/* ---------- Projects (AR), keyed by slug ---------- */
type ProjAr = { title: string; client?: string; place: string; blurb: string; description: string };
const projectsAr: Record<string, ProjAr> = {
  "oia-trading-heritage": {
    title: "إرث تجاري من القرن الحادي عشر",
    client: "جهاز الاستثمار العُماني",
    place: "عُمان",
    blurb:
      "طوابع وعملات منحوتة ومشهد تجاري مجسّم يعيد إحياء التجارة البحرية العُمانية في القرن الحادي عشر، أُنجز كعمل سردي يحكي الإرث.",
    description:
      "عمل سردي تراثي أُنجز بتكليف من جهاز الاستثمار العُماني، يعيد إحياء التجارة البحرية العُمانية في القرن الحادي عشر. تتألف المجموعة من طوابع منحوتة تحاكي تلك الحقبة، ونسخ من العملات التجارية، ومشهد تجاري ثلاثي الأبعاد — طُوّر من الرسومات الأولية وصولاً إلى القطع النهائية.",
  },
  "legent-texture-wall": {
    title: "جدار مميّز بملمس بارز",
    client: "ليجنت",
    place: "صحار",
    blurb: "معالجة جدارية مزخرفة منفّذة يدويًا كعنصر معماري مميّز لصالح ليجنت في صحار.",
    description:
      "جدار مميّز بملمس بارز نُفّذ يدويًا لصالح ليجنت في صحار، حيث تحوّل النحت الطبقي والتشطيب اللوني سطحًا عاديًا إلى نقطة ارتكاز معمارية.",
  },
  "grand-cellar-gala": {
    title: "حفل غراند سيلر",
    client: "غراند سيلر",
    place: "مسقط",
    blurb:
      "بيئة احتفالية متكاملة الصنع — برميل نبيذ من خشب الملتي وود، ولوحة تراثية بالأكريليك، وكشك تودي مصمّم خصيصًا لحفل غراند سيلر في مسقط.",
    description:
      "بيئة متكاملة الصنع لحفل غراند سيلر في مسقط. شمل العمل برميل نبيذ منحوتًا من ألواح الملتي وود، ولوحة تراثية بالأكريليك، وكشك تودي مصمّمًا خصيصًا — أُنتج كل عنصر ورُكّب من أجل المناسبة.",
  },
  "khareef-teddy-sculpture": {
    title: "منحوتة دبّ من الثرموكول",
    client: "مهرجان خريف",
    place: "صلالة",
    blurb: "منحوتة كبيرة لدبّ منحوتة من الثرموكول أُنجزت لمهرجان خريف في صلالة.",
    description:
      "منحوتة كبيرة لدبّ نُحتت من الثرموكول لمهرجان خريف في صلالة، شُكّلت وأُنجزت لتصمد طوال فعاليات موسم الأمطار.",
  },
  "cheetah-miniature": {
    title: "نموذج حركي لفهد",
    place: "عُمان",
    blurb: "نموذج حركي مفصّل لفهد، طُوّر كنموذج دراسي لمنحوتة بحجم كبير.",
    description:
      "نموذج حركي مفصّل لفهد في منتصف وثبته، أُنجز كنموذج دراسي يثبّت التناسب والوضعية قبل تنفيذ منحوتة بحجم كبير.",
  },
  "texture-painting-replica": {
    title: "نسخة طبق الأصل بملمس بارز",
    place: "عُمان",
    blurb: "نسخة دقيقة بملمس بارز تعيد إنتاج سطح العمل الأصلي وعمقه.",
    description: "نسخة دقيقة بملمس بارز تعيد إنتاج ضربات الفرشاة والبروز والعمق اللوني لعمل فني أصلي.",
  },
  "nizwa-miniature-actual": {
    title: "ممرّ بنموذج مصغّر وبالحجم الكامل",
    client: "فعالية نزوى",
    place: "نزوى",
    blurb: "زوج عرضي يجمع بين نموذج مصغّر بالمقياس وبناء ممرّ بالحجم الكامل، أُنجز لفعالية في نزوى.",
    description:
      "زوج عرضي يجمع بين نموذج مصغّر بالمقياس وبناء ممرّ بالحجم الكامل لفعالية في نزوى، يتيح للعميل مراجعة التصميم على مقياس النموذج قبل التنفيذ بنسبة واحد إلى واحد.",
  },
  "bahla-light-pillar": {
    title: "عمود ضوئي مُركّب",
    client: "مهرجان",
    place: "نزوى",
    blurb: "عمود مضاء كقطعة محورية صُنع ورُكّب لمهرجان في نزوى.",
    description: "عمود مضاء أُنجز كقطعة محورية لمهرجان في نزوى، يجمع بين الشكل النحتي والإضاءة المدمجة.",
  },
  "al-mouj-labubu": {
    title: "منحوتة شخصية بارتفاع مترين",
    client: "الموج",
    place: "مسقط",
    blurb: "مجسّم شخصية بارتفاع مترين نُحت وأُنجز للعرض على امتداد ممشى الموج في مسقط.",
    description: "مجسّم شخصية بارتفاع مترين نُحت وأُنجز للعرض العام على امتداد ممشى الموج في مسقط.",
  },
  "ocec-aluminium-mountain": {
    title: "شكل جبلي بتشطيب مرآوي",
    client: "مركز عُمان للمؤتمرات والمعارض",
    place: "مسقط",
    blurb: "منحوتة بهيئة جبل بتشطيب فولاذي مرآوي، صُنعت ورُكّبت في مركز عُمان للمؤتمرات والمعارض.",
    description:
      "منحوتة بهيئة جبل بتشطيب فولاذي مرآوي، صُنعت ورُكّبت في مركز عُمان للمؤتمرات والمعارض، حيث يطوي السطح العاكس محيطه داخل العمل.",
  },
  "khareef-garden-sitters": {
    title: "مقاعد حدائق منحوتة",
    client: "مهرجان خريف",
    place: "صلالة",
    blurb: "سلسلة من عناصر الجلوس الحدائقية النحتية بارتفاعات متباينة لمهرجان خريف في صلالة.",
    description: "عائلة من عناصر الجلوس الحدائقية النحتية بارتفاعات متباينة، أُنجزت لمهرجان خريف في صلالة.",
  },
  "sultans-portrait-rock": {
    title: "بورتريه نحتي في الصخر",
    place: "عُمان",
    blurb: "بورتريه تذكاري نُفّذ كنقش نحتي بارز ضمن تكوين صخري.",
    description: "بورتريه تذكاري نُفّذ كنقش نحتي بارز ضمن تكوين صخري — قطعة تكريم ثقافية أُنجزت بحجم كبير.",
  },
  "ocec-arch-square": {
    title: "قوس معماري مميّز",
    client: "مركز عُمان للمؤتمرات والمعارض",
    place: "مسقط",
    blurb: "قوس معماري بارتفاع ثلاثة أمتار أُنجز بنموذج مصغّر وبالحجم الكامل لمركز عُمان للمؤتمرات والمعارض.",
    description: "قوس معماري بارتفاع ثلاثة أمتار أُنجز بنموذج مصغّر وبالحجم الكامل لمركز عُمان للمؤتمرات والمعارض.",
  },
  "asian-paints-forms": {
    title: "أشكال كتلية منحوتة",
    client: "آسيان بينتس",
    place: "عُمان",
    blurb: "أشكال كتلية منحوتة من الثرموكول صُنعت كعناصر عرض لصالح آسيان بينتس.",
    description: "أشكال كتلية منحوتة قُصّت وأُنجزت من ألواح الثرموكول، صُنعت كعناصر عرض لصالح آسيان بينتس.",
  },
  "gig-gulf-floated-logo": {
    title: "شعار طافٍ بتشطيب مزخرف",
    client: "جي آي جي غلف · كمبينسكي",
    place: "مسقط",
    blurb: "شعار طافٍ للعلامة بتشطيب مزخرف مصمّم خصيصًا، أُنجز لصالح جي آي جي غلف في فندق كمبينسكي بمسقط.",
    description:
      "شعار طافٍ للعلامة بتشطيب مزخرف مصمّم خصيصًا، أُنجز لصالح جي آي جي غلف ورُكّب في فندق كمبينسكي بمسقط.",
  },
  "exhibition-stall-miniature": {
    title: "نموذج مصغّر لجناح معرض",
    place: "عُمان",
    blurb: "نموذج دقيق بالمقياس لجناح معرض أُنجز لعرضه على العميل.",
    description: "نموذج دقيق بالمقياس لجناح معرض، أُنجز لإيضاح التوزيع والتشطيب قبل التنفيذ.",
  },
  "maathra-fest": {
    title: "بناء مهرجان في ستة أيام",
    client: "مهرجان معذرة",
    place: "عُمان",
    blurb: "تركيب مهرجاني متكامل صُمّم ونُفّذ خلال نافذة بناء مدتها ستة أيام.",
    description: "تركيب مهرجاني متكامل لمهرجان معذرة — صُمّم ونُفّذ ورُكّب خلال نافذة بناء مدتها ستة أيام.",
  },
  "pencil-model": {
    title: "نموذج قلم رصاص بطول 1.8 متر",
    place: "عُمان",
    blurb: "نموذج قلم رصاص ضخم بطول 1.8 متر صُنع كقطعة عرض.",
    description: "قلم رصاص ضخم بطول 1.8 متر، صُنع كقطعة عرض بتناسب وتشطيب دقيقين.",
  },
  "majestic-by-nature-stall": {
    title: "جناح معرض — ماجستيك باي نيتشر",
    place: "عُمان",
    blurb: "نموذج عرضي مفصّل لجناح معرض «ماجستيك باي نيتشر».",
    description: "نموذج عرضي مفصّل لجناح معرض «ماجستيك باي نيتشر».",
  },
  "avenues-solar-system": {
    title: "مجموعة شمسية معلّقة",
    client: "أفنيوز مول",
    place: "الغبرة، مسقط",
    blurb: "تركيب معلّق لمجموعة شمسية في بهو أفنيوز مول بالغبرة.",
    description: "تركيب معلّق لمجموعة شمسية في بهو أفنيوز مول بالغبرة، مع نمذجة الكواكب وتعليقها بالمقياس.",
  },
  "oq-texture-work": {
    title: "عمل ملمس معماري",
    client: "أو كيو",
    place: "عُمان",
    blurb: "معالجة ملمس معماري مصمّمة خصيصًا أُنجزت لصالح أو كيو.",
    description: "معالجة ملمس معماري مصمّمة خصيصًا أُنجزت لصالح أو كيو.",
  },
  "art-and-soul-canvas": {
    title: "لوحة قماشية بمقاس كبير",
    client: "آرت آند سول · ووتر فرونت مول",
    place: "القرم، مسقط",
    blurb: "لوحة قماشية بمقاس كبير أُنجزت لعرض آرت آند سول في ووتر فرونت مول بالقرم.",
    description: "لوحة قماشية بمقاس كبير أُنجزت لعرض آرت آند سول في ووتر فرونت مول بالقرم (11–21 فبراير 2024).",
  },
  "thiruvalla-mural": {
    title: "جدارية على لوح سكين وطباعة UV",
    place: "تيروفالا، الهند",
    blurb: "جدارية مرسومة يدويًا على لوح سكين مقترنة بطباعة UV عالية الدقة مضاءة بإضاءة LED خلفية.",
    description:
      "جدارية مرسومة يدويًا على لوح سكين مقترنة بطباعة UV عالية الدقة مضاءة بإضاءة LED خلفية، أُنجزت في تيروفالا.",
  },
  "orchid-school-classroom": {
    title: "تصميم داخلي مُثيمن لفصل دراسي",
    client: "مدرسة الأوركيد الخاصة",
    place: "صحار",
    blurb: "تصميم داخلي ثنائي الأبعاد مُثيمن لفصل دراسي صُمّم ورُسم لمدرسة الأوركيد الخاصة بصحار.",
    description:
      "تصميم داخلي ثنائي الأبعاد مُثيمن لفصل دراسي صُمّم ورُسم لمدرسة الأوركيد الخاصة في فلج القبائل بصحار.",
  },
  "rustaq-school-wall": {
    title: "رسم جداري مدرسي",
    client: "المدرسة الهندية بالرستاق",
    place: "الرستاق",
    blurb: "مشروع رسم جداري كبير أُنجز للمدرسة الهندية بالرستاق.",
    description: "مشروع رسم جداري كبير أُنجز للمدرسة الهندية بالرستاق.",
  },
};

/* ---------- Localized getters ---------- */
export function t(lang: Lang, key: string): string {
  return UI[lang][key] ?? UI.en[key] ?? key;
}

export function locServices(lang: Lang): Service[] {
  if (lang === "en") return servicesEn;
  return servicesEn.map((s) => ({ ...s, ...(servicesAr[s.id] ?? {}) }));
}

export function locIndustries(lang: Lang): string[] {
  return lang === "ar" ? industriesArr : industriesEn;
}

export function locCompany(lang: Lang) {
  return lang === "ar" ? { ...companyEn, ...companyAr } : companyEn;
}

export function catName(enName: string, lang: Lang): string {
  return lang === "ar" ? categoryAr[enName]?.name ?? enName : enName;
}

export function catNote(enName: string, lang: Lang): string {
  return lang === "ar"
    ? categoryAr[enName]?.note ?? ""
    : categoryNotesEn[enName] ?? "";
}

export function locProject(p: Project, lang: Lang): Project {
  if (lang === "en") return p;
  const ar = projectsAr[p.slug];
  return ar ? { ...p, ...ar } : p;
}

export function projTitle(slug: string, lang: Lang): string {
  const en = projectsEn.find((p) => p.slug === slug);
  if (lang === "en") return en?.title ?? "";
  return projectsAr[slug]?.title ?? en?.title ?? "";
}

export function heroHeadline(lang: Lang) {
  return lang === "ar" ? heroAr : heroEn;
}

export function locPills(lang: Lang): string[] {
  return lang === "ar" ? pillsAr : ["Architectural Art", "Heritage Restoration", "Creative Fabrication"];
}
