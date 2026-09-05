"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"

type Locale = "fr" | "ar"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const arabicTranslations: Record<string, string> = {
  "PIÈCES": "الأثاث",
  "INSPIRATIONS": "إلهام",
  "OFFRES & PROMOTIONS": "العروض والتخفيضات",
  "Produits": "المنتجات",
  "Contact": "اتصل بنا",
  "À Propos": "من نحن",
  "Découvrir": "اكتشف",
  "Meubles uniques pour": "أثاث فريد لـ",
  "espaces modernes": "مساحات عصرية",
  "Des meubles conçus pour transformer votre espace": "أثاث مصمم لتحويل مساحتك",
  "Nous contacter": "اتصل بنا",
  "Livraison + montage dans les 58 wilayas": "التوصيل والتركيب في 58 ولاية",
  "Gratuit sur Alger – Blida – Boumerdès – Médéa – Tipaza": "مجاني في الجزائر والبليدة وبومرداس والمدية وتيبازة",
  "Nouvelle Collection": "المجموعة الجديدة",
  "ACHETER MAINTENANT": "اشترِ الآن",
  "Jusqu'à -30%": "خصم يصل إلى 30٪",
  "Nouveautés | Arrivages": "جديدنا | وصل حديثًا",
  "Soyez les premiers à découvrir nos nouvelles pièces et collections.": "كونوا أول من يكتشف قطعنا ومجموعاتنا الجديدة.",
  "Votre adresse email": "عنوان بريدك الإلكتروني",
  "Votre email": "بريدك الإلكتروني",
  "Recevoir": "اشتراك",
  "Envoi...": "جارٍ الإرسال...",
  "Veuillez entrer un email valide.": "يرجى إدخال بريد إلكتروني صالح.",
  "Une erreur est survenue, veuillez réessayer.": "حدث خطأ، يرجى المحاولة مرة أخرى.",
  "Merci, vous êtes inscrit.": "شكرًا، تم تسجيلك.",
  "Explorer": "استكشف",
  "Tous les produits": "جميع المنتجات",
  "Offres & promotions": "العروض والتخفيضات",
  "Collections": "المجموعات",
  "Notre histoire": "قصتنا",
  "Nous trouver": "موقعنا",
  "Aide & conseils": "المساعدة والنصائح",
  "Assistance": "المساعدة",
  "Livraison & retours": "التوصيل والإرجاع",
  "Service client": "خدمة العملاء",
  "Conditions": "الشروط",
  "Confidentialité": "الخصوصية",
  "Cookies": "ملفات تعريف الارتباط",
  "Tous droits réservés.": "جميع الحقوق محفوظة.",
  "DISCOVER OUR BEST!": "اكتشفوا أفضل ما لدينا!",
  "Catégories": "الفئات",
  "Salle à manger": "غرفة الطعام",
  "Canapés": "الأرائك",
  "Chambres": "غرف النوم",
  "Armoire": "خزائن الملابس",
  "Accessoires": "الإكسسوارات",
  "Avis Google": "تقييمات Google",
  "Solutions Complètes": "حلول متكاملة",
  "Gestion complète de votre projet": "إدارة كاملة لمشروعكم",
  "Support Après-Vente": "خدمة ما بعد البيع",
  "Nous nous engageons à fournir un support continu et un service après-vente pour répondre à vos besoins.": "نلتزم بتقديم دعم مستمر وخدمة ما بعد البيع لتلبية احتياجاتكم.",
  "Absence de Restrictions": "خيارات بلا حدود",
  "Nous nous associons à tous les fournisseurs pour offrir la plus large sélection de solutions d'ameublement.": "نتعاون مع جميع الموردين لتقديم أوسع مجموعة من حلول الأثاث.",
  "Qualité Supérieure": "جودة فائقة",
  "Nos partenariats avec les meilleurs fournisseurs nous donnent accès aux meilleurs matériaux et processus de contrôle qualité.": "تمنحنا شراكاتنا مع أفضل الموردين إمكانية الوصول إلى أجود المواد وأفضل عمليات مراقبة الجودة.",
  "Mobilier Personnalisé": "أثاث مخصص",
  "Nous spécialisons dans la création de meubles sur mesure qui correspondent parfaitement à votre vision unique et vos besoins.": "نحن متخصصون في إنشاء أثاث حسب الطلب يناسب رؤيتكم واحتياجاتكم الفريدة تمامًا.",
  "À Propos Mobenia Furniture": "عن موبينيا للأثاث",
  "Notre Mission": "مهمتنا",
  "Nos Valeurs Fondamentales": "قيمنا الأساسية",
  "Excellence": "التميز",
  "Authenticité": "الأصالة",
  "Service Client": "خدمة العملاء",
  "Notre Histoire": "قصتنا",
  "Prêt à Transformer Votre Espace ?": "هل أنتم مستعدون لتحويل مساحتكم؟",
  "Explorez nos collections soigneusement sélectionnées et découvrez les pièces parfaites pour élever votre maison.": "استكشفوا مجموعاتنا المختارة بعناية واكتشفوا القطع المثالية للارتقاء بمنزلكم.",
  "Explorer Collection": "استكشاف المجموعة",
  "Nous Contacter": "اتصلوا بنا",
  "Ensemble canapé modulable avec sièges confortables et design contemporain": "أريكة معيارية بمقاعد مريحة وتصميم عصري",
  "Ensemble chambre en bois noble avec lit double et armoire": "طقم غرفة نوم من خشب فاخر مع سرير مزدوج وخزانة",
  "Lit design avec tête de lit capitonnée et rangements intégrés": "سرير أنيق مع لوح رأس مبطن ومساحات تخزين مدمجة",
  "Suite chambre avec miroir et rangements modernes": "جناح غرفة نوم مع مرآة ومساحات تخزين عصرية",
  "Table de salle à manger avec chaises design et miroir mural": "طاولة طعام مع كراسٍ أنيقة ومرآة جدارية",
  "Table de salle à manger en bois massif avec 6 chaises": "طاولة طعام من الخشب الصلب مع 6 كراسٍ",
  "Table de salle à manger en marbre blanc avec chaises grises": "طاولة طعام من الرخام الأبيض مع كراسٍ رمادية",
  "Table de salle à manger élégante avec chaises et miroir": "طاولة طعام أنيقة مع كراسٍ ومرآة",
  "Armoire avec portes coulissantes et miroir intégré": "خزانة بأبواب منزلقة ومرآة مدمجة",
  "Armoire design avec miroirs coulissants et rangements": "خزانة أنيقة مع مرايا منزلقة ومساحات تخزين",
  "Armoire à portes coulissantes avec miroir de haute qualité": "خزانة بأبواب منزلقة ومرآة عالية الجودة",
  "Ensemble de 3 tables gigognes en blanc avec pieds naturels": "طقم من 3 طاولات متداخلة باللون الأبيض مع أرجل طبيعية",
  "Fauteuil design avec table basse en verre moderne": "كرسي أنيق مع طاولة زجاجية عصرية",
  "Commode en bois avec miroir supérieur et rangements": "خزانة خشبية مع مرآة علوية ومساحات تخزين",
  "Unité murale avec vitrine et rangements pour téléviseur": "وحدة جدارية مع واجهة عرض ومساحات تخزين للتلفاز",
  "Vitrine élégante avec portes vitrées et rangements intérieurs": "خزانة عرض أنيقة بأبواب زجاجية ومساحات تخزين داخلية",
  "Notre équipe est là pour vous accompagner": "فريقنا هنا لمساعدتكم",
  "Découvrez notre sélection": "اكتشفوا مجموعتنا",
  "Voir plus": "عرض المزيد",
  "Voir moins": "عرض أقل",
  "En savoir plus": "اعرفوا المزيد",
  "Lire la suite": "اقرأ المزيد",
  "Retour": "رجوع",
  "Suivant": "التالي",
  "Précédent": "السابق",
  "Ajouter au panier": "أضف إلى السلة",
  "Commander": "اطلب الآن",
  "Quantité": "الكمية",
  "Prix": "السعر",
  "Disponibilité": "التوفر",
  "En stock": "متوفر",
  "Épuisé": "����ير متوفر",
  "Rechercher": "بحث",
  "Filtrer": "تصفية",
  "Trier par": "ترتيب حسب",
  "Les plus récents": "الأحدث",
  "Prix croissant": "السعر تصاعديًا",
  "Prix décroissant": "السعر تنازليًا",
  "Aucun produit trouvé": "لم يتم العثور على منتجات",
  "Tous": "الكل",
  "Découvrez nos produits": "اكتشفوا منتجاتنا",
  "Nos produits": "منتجاتنا",
  "Nos collections": "مجموعاتنا",
  "Une question ?": "هل لديكم سؤال؟",
  "Envoyez-nous un message": "أرسلوا لنا رسالة",
  "Nom": "الاسم",
  "Téléphone": "الهاتف",
  "Message": "الرسالة",
  "Envoyer": "إرسال",
  "Votre message": "رسالتكم",
  "Merci pour votre message": "شكرًا لرسالتكم",
  "Nous vous répondrons bientôt.": "سنجيبكم قريبًا.",
  "Adresse": "العنوان",
  "Horaires": "أوقات العمل",
  "Suivez-nous": "تابعونا",
  "Inspirations": "إلهام",
  "Découvrez nos inspirations": "اكتشفوا إلهامنا",
  "Form": "النموذج",
  "Une question, une idée ou un projet d'aménagement ? Notre équipe vous accompagne avec attention pour trouver les pièces qui vous ressemblent.": "هل لديكم سؤال أو فكرة أو مشروع لتجهيز مساحتكم؟ يرافقكم فريقنا باهتمام للعثور على القطع التي تناسبكم.",
  "Pourquoi choisir notre boutique ? Qualité premium, conseil personnalisé et design inspirant.": "لماذا تختارون متجرنا؟ جودة ممتازة، نصائح مخصصة وتصميم ملهم.",
  "Nous travaillons avec les meilleurs artisans et fournisseurs pour garantir que chaque pièce de notre collection répond à nos normes rigoureuses en matière de qualité, de conception et de durabilité.": "نعمل مع أفضل الحرفيين والموردين لضمان توافق كل قطعة من مجموعتنا مع معاييرنا الصارمة في الجودة والتصميم والاستدامة.",
  "Au fil des années, nous sommes devenus une destination de confiance pour le mobilier de luxe, reconnue pour notre engagement envers un design exceptionnel, un savoir-faire de qualité et un service client exceptionnel.\nAujourd'hui, nous continuons à évoluer, en recherchant constamment des innovations en matière de design tout en honorant les principes intemporels qui définissent la vie de luxe.": "على مر السنين، أصبحنا وجهة موثوقة للأثاث الفاخر، ونحظى بالتقدير لالتزامنا بالتصميم الاستثنائي والحرفية المتقنة وخدمة العملاء المتميزة.\nواليوم، نواصل التطور والبحث باستمرار عن ابتكارات في التصميم، مع الحفاظ على المبادئ الخالدة التي تميز أسلوب الحياة الفاخر.",
  "Au fil des années, nous sommes devenus une destination de confiance pour le mobilier de luxe, reconnue pour notre engagement envers un design exceptionnel, un savoir-faire de qualité et un service client exceptionnel.": "على مر السنين، أصبحنا وجهة موثوقة للأثاث الفاخر، ونحظى بالتقدير لالتزامنا بالتصميم الاستثنائي والحرفية المتقنة وخدمة العملاء المتميزة.",
  "Aujourd'hui, nous continuons à évoluer, en recherchant constamment des innovations en matière de design tout en honorant les principes intemporels qui définissent la vie de luxe.": "واليوم، نواصل التطور والبحث باستمرار عن ابتكارات في التصميم، مع الحفاظ على المبادئ الخالدة التي تميز أسلوب الحياة الفاخر.",
  "NOUS SUIVRE SUR INSTAGRAM": "تابعونا على إنستغرام",
  "Nous Suivre": "تابعونا",
  "Offres": "العروض",
  "OFFRES": "العروض",
  "AVIS CLIENTS": "آراء العملاء",
  "Votre avis": "رأيكم",
  "compte pour nous.": "يهمنا.",
  "LAISSEZ-NOUS UN AVIS SUR": "اتركوا لنا تقييمًا على",
  "DONNER MON AVIS": "أترك تقييمي",
  "Avis précédents": "التقييمات السابقة",
  "Avis suivants": "التقييمات التالية",
  "5 étoiles": "5 نجوم",
  "Pourquoi choisir": "لماذا تختارون",
  "Pourquoi choisir Mobenia": "لماذا تختارون Mobenia",
  "Nous nous consacrons à apporter le luxe et l'élégance à votre maison grâce à des collections de mobilier minutieusement sélectionnées qui allient design intemporel et confort moderne.": "نكرّس جهودنا لجلب الفخامة والأناقة إلى منزلكم من خلال مجموعات أثاث مختارة بعناية تجمع بين التصميم الخالد والراحة العصرية.",
  "Des collections de mobilier sélectionnées pour allier élégance, confort et design intemporel.": "مجموعات أثاث مختارة تجمع بين الأناقة والراحة والتصميم الخالد.",
  "Chez Mobenia Furniture, nous croyons que votre maison doit refléter votre style personnel et vos valeurs. Notre mission est de fournir des meubles exceptionnels qui transforment les espaces en havres de confort et d'élégance.": "في Mobenia Furniture، نؤمن بأن منزلكم يجب أن يعكس أسلوبكم الشخصي وقيمكم. مهمتنا هي تقديم أثاث استثنائي يحوّل المساحات إلى ملاذات من الراحة والأناقة.",
  "Fondée avec une vision de redéfinir le mobilier de luxe, Mobenia Furniture a commencé comme un projet passionné pour apporter des pièces soigneusement sélectionnées et de haute qualité aux clients discernants.": "تأسست برؤية لإعادة تعريف الأثاث الفاخر، وبدأت Mobenia Furniture كمشروع شغوف يهدف إلى تقديم قطع مختارة بعناية وعالية الجودة للعملاء ذوي الذوق الرفيع.",
  "Des meubles inspirants pour des intérieurs qui vous ressemblent.": "أثاث ملهم لمساحات داخلية تشبهكم.",
  "Excellente qualité de meubles ! J'ai acheté un canapé et une table basse chez Mobenia Furniture. Les produits sont vraiment magnifiques et bien finis. L'équipe a été très attentive et m'a conseillée sur les meilleures options. Je recommande vivement !": "جودة أثاث ممتازة! اشتريت أريكة وطاولة قهوة من Mobenia Furniture. المنتجات رائعة ومصنعة بإتقان. كان الفريق متعاونًا جدًا ونصحني بأفضل الخيارات. أوصي بها بشدة!",
  "Transformé mon salon complètement ! Les meubles de Mobenia Furniture ont une qualité exceptionnelle. Le design est moderne et élégant, exactement ce que je cherchais. Livraison rapide et service client très professionnel.": "لقد غيّرت أثاث غرفة جلوسي بالكامل! أثاث Mobenia Furniture بجودة استثنائية. التصميم عصري وأنيق، تمامًا كما كنت أبحث عنه. توصيل سريع وخدمة عملاء احترافية جدًا.",
  "Bon produit": "منتج جيد",
  "Soyez les bienvenus": "أهلًا وسهلًا بكم",
  "1 avis": "تقييم واحد",
  "1 avis · 1 photo": "تقييم واحد · صورة واحدة",
  "il y a 3 ans": "منذ 3 سنوات",
  "il y a 3 mois": "منذ 3 أشهر",
  "il y a 8 mois": "منذ 8 أشهر",
  "Il y a 2 mois": "منذ شهرين",
  "Il y a 1 mois": "منذ شهر",
  "Il y a 2 semaines": "منذ أسبوعين",
  "Il y a 3 jours": "منذ 3 أيام",
}

function translatePage(locale: Locale) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []
  let node: Node | null
  while ((node = walker.nextNode())) nodes.push(node as Text)
  nodes.forEach((textNode) => {
    const value = textNode.nodeValue?.trim()
    if (!value) return
    const arabicValue = arabicTranslations[value]
    const frenchValue = Object.entries(arabicTranslations).find(([, arabic]) => arabic === value)?.[0]
    if (locale === "ar" && arabicValue) textNode.nodeValue = arabicValue
    if (locale === "fr" && frenchValue) textNode.nodeValue = frenchValue
  })
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr")
  const pathname = usePathname()

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("mobenia-locale")
    if (savedLocale === "ar" || savedLocale === "fr") setLocaleState(savedLocale)
  }, [])

  useEffect(() => {
    // Translate the current server-rendered page once per locale change.
    // Avoid observing the whole body: broad MutationObservers can react to
    // Next.js navigation/HMR updates and dispatch router work too early.
    translatePage(locale)
  }, [locale, pathname])

  useEffect(() => {
    document.documentElement.lang = locale
    // Keep the root document LTR so the browser scrollbar stays fixed on the right.
    // Apply the reading direction to the body instead, allowing Arabic content to remain RTL.
    document.documentElement.dir = "ltr"
    // Keep every layout and decorative shape in the same physical position in both languages.
    // Arabic characters still render naturally without reversing flex/grid placement.
    document.body.dir = "ltr"
    document.body.dataset.locale = locale
    window.localStorage.setItem("mobenia-locale", locale)
  }, [locale])

  const setLocale = (nextLocale: Locale) => setLocaleState(nextLocale)

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider")
  return context
}
