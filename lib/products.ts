export type ProductCategory = "sofas" | "chambres" | "accessories" | "salle-a-manger" | "armoire"

export interface ProductColorVariant {
  name: string
  swatch: string
  images: string[]
}

export interface Product {
  id: number
  name: string
  price: string
  originalPrice?: string
  images: string[]
  description: string
  dimension?: string
  discount?: number
  category: ProductCategory
  colors?: ProductColorVariant[]
}

const image = (url: string) => [url]

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Salon Modulable Écru",
    price: "84,990 DZD",
    originalPrice: "99,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/592899574_1210994964293247_3814348985714086308_n-5CceXQqfEeSmRxjLIZPEsbxgTj9Wcg.jpg"),
    description: "Composition modulable claire avec méridienne et poufs assortis.",
    discount: 15,
    category: "sofas",
  },
  {
    id: 3,
    name: "Salon d'Angle Gris Perle",
    price: "79,990 DZD",
    originalPrice: "94,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/491427064_17903889531144793_1818672150372352014_n-BFb7XTqmvX5UumUuPc5pZsd85OdE8Y.jpg"),
    description: "Grand canapé d'angle en tissu gris avec méridienne spacieuse.",
    discount: 16,
    category: "sofas",
  },
  {
    id: 4,
    name: "Salon Scandinave Gris",
    price: "72,990 DZD",
    originalPrice: "86,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/476152020_985929606799785_2540105098817843571_n-YQif8qnbSbiHR9a0OvG98foBlmRXPx.jpg"),
    description: "Ensemble salon trois places avec fauteuils et table basse graphique.",
    discount: 16,
    category: "sofas",
  },
  {
    id: 5,
    name: "Salon Classique Beige",
    price: "64,990 DZD",
    originalPrice: "76,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/475648995_979997514059661_7264096071427420269_n-9hIkfCwa06NsvqB3pJ3J0WWbhYQIA0.jpg"),
    description: "Salon chaleureux deux et trois places avec coussins décoratifs.",
    discount: 16,
    category: "sofas",
  },
  {
    id: 6,
    name: "Chambre à coucher ECLIPSE",
    price: "89,990 DZD",
    originalPrice: "106,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1111-2UWudiyRT3t8bgQdgdMFPcsmPzNeXQ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2222-GeXQ2knnAqhI5bFgnjqvl0M9Tc5mNb.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3333-JV71PM1PkjbNrSZIOeLezlJ8kbMI3F.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4444-CaW9XwfBRom1BL6Cb3gedjeFOSg0b4.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5555-SQrS3ovep3RMLr5uFPwykkIAs15ArW.jpeg",
    ],
    description: "Ensemble ECLIPSE chaleureux composé d’un lit double, de deux chevets, d’une commode avec miroir et d’une armoire élégante. Une collection pensée pour créer une chambre harmonieuse, confortable et raffinée.",
    discount: 16,
    category: "chambres",
    colors: [
      {
        name: "Marron",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_03_15-kXTf0ZJntC10a9wHG8mCCgeDSn1FhY.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1111-2UWudiyRT3t8bgQdgdMFPcsmPzNeXQ.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2222-GeXQ2knnAqhI5bFgnjqvl0M9Tc5mNb.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3333-JV71PM1PkjbNrSZIOeLezlJ8kbMI3F.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4444-CaW9XwfBRom1BL6Cb3gedjeFOSg0b4.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5555-SQrS3ovep3RMLr5uFPwykkIAs15ArW.jpeg",
        ],
      },
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/111-3k1f3Co6uwSpMM06wq8m1NdIi5VC5C.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/222-wPv6s9D9gOVbf8ha7fGqhrgTzAvnsX.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/333-QPmpbNXmawsED5HdU0vMYWQpYw2A4k.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/444-q0Lw9mCrQFOSGBzLG4TN8jlu97P4eJ.jpeg",
        ],
      },
    ],
  },
  {
    id: 17,
    name: "Chambre à coucher ORION",
    price: "89,990 DZD",
    originalPrice: "106,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-twYEihNhN6JKPG4cvxfmNk00Jk97yH.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-tDvZ42yWKhIV0Q6XPBTwBXsowzHVmx.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33-toR3BoyX2n7rxzkFDu2tfuB8s1JJs9.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/44-sfsAibyXb9qS0M7nmXihwQnHHnDCJq.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/55-qxXOQMvLP1heUBmjHS9oVrmbpEc8zr.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66-Nws5TfDOPBoRCzB7zjjHSC3aDUPPnB.jpeg",
    ],
    description: "Ensemble ORION avec lit double, chevets, commode avec miroir et armoire coulissante. Son design structuré offre une chambre élégante et fonctionnelle, avec une armoire de 2,20 m.",
    dimension: "Armoire 2,20 m",
    discount: 16,
    category: "chambres",
    colors: [
      {
        name: "Marron",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_03_15-kXTf0ZJntC10a9wHG8mCCgeDSn1FhY.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-twYEihNhN6JKPG4cvxfmNk00Jk97yH.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-tDvZ42yWKhIV0Q6XPBTwBXsowzHVmx.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33-toR3BoyX2n7rxzkFDu2tfuB8s1JJs9.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/44-sfsAibyXb9qS0M7nmXihwQnHHnDCJq.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/55-qxXOQMvLP1heUBmjHS9oVrmbpEc8zr.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66-Nws5TfDOPBoRCzB7zjjHSC3aDUPPnB.jpeg",
        ],
      },
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-vnsSLjXCKoWK6ZmIFK9leNsIotHi0n.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-90sa0PkX6OCIox2XlQabfDj82ogU1k.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Ltl8r1iB0yshyffp3l0dJEQPOnv6mw.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-OAXiICDIIxLAfNzXxEY0JUVBBROfUw.jpeg",
        ],
      },
    ],
  },
  {
    id: 19,
    name: "Salon AYLA",
    price: "97,490 DZD",
    originalPrice: "114,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-fEyJJXPoyVRNAuOPLQ1MEe4hAm3zBo.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-liidzLAAaa9fF32nsFFohxjaw2lMEi.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.JPG-2ibaffl8c8YIHy72hsmxFZBBIV4VYv.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.JPG-SXA2BLShwysdVb9C9n6ZVPnirYlINV.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.JPG-ctbXuDblOdLzba6GTFXEZnmv2wuYB7.jpeg",
    ],
    description: "Ensemble Salon AYLA composé d’un lit double, de deux chevets, d’une commode avec miroir et d’une armoire coulissante. Son design structuré offre une chambre élégante et fonctionnelle.",
    dimension: "Armoire 2,20 m",
    discount: 15,
    category: "sofas",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-fEyJJXPoyVRNAuOPLQ1MEe4hAm3zBo.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-liidzLAAaa9fF32nsFFohxjaw2lMEi.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.JPG-2ibaffl8c8YIHy72hsmxFZBBIV4VYv.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.JPG-SXA2BLShwysdVb9C9n6ZVPnirYlINV.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.JPG-ctbXuDblOdLzba6GTFXEZnmv2wuYB7.jpeg",
        ],
      },
    ],
  },
  {
    id: 20,
    name: "Salon MINOTTI",
    price: "95,990 DZD",
    originalPrice: "112,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.JPG-fHS6vAH1eNG3qdZ8sT1UJgxEB0hBZT.jpeg",
    ],
    description: "Salon MINOTTI modulable en tissu blanc, pensé pour composer un espace généreux, confortable et contemporain. Ses éléments s’adaptent à votre intérieur pour créer une pièce de vie élégante et accueillante.",
    dimension: "Composition modulable",
    discount: 15,
    category: "sofas",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.JPG-fHS6vAH1eNG3qdZ8sT1UJgxEB0hBZT.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22.JPG-144m9RBKWz8pyU7RyH5S6sTA3ne5T0.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33.JPG-aWTfjxbdPn8lWB1deRPeyOtalmRP0r.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/44.JPG-K4HVbqItoxq6oa25XLqOzbNpFc3PPX.jpeg",
        ],
      },
    ],
  },
  {
    id: 22,
    name: "Salon ARISTA",
    price: "91,990 DZD",
    originalPrice: "108,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/111.JPG-8ApHZg8lco9oWI12Xvb8Jf7qYBb0k1.jpeg",
    ],
    description: "Salon ARISTA en tissu blanc cassé, composé de canapés et fauteuils coordonnés pour un espace de vie confortable et raffiné.",
    dimension: "Composition salon complète",
    discount: 16,
    category: "sofas",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/111.JPG-8ApHZg8lco9oWI12Xvb8Jf7qYBb0k1.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/222.JPG-YUBHJKFshuvAaXERAsFA6TIH6R00lG.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/333.JPG-n6pr1zPTMlnyH6ndYWJSTvuwefcRfg.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/444.JPG-cxbrXwZcZyOgkoUpP37Trgs1MUQgNs.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/555.JPG-s43Wpv6UUwvnelemjLy0OtKxJyHlBX.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/666.JPG-TOAeeJRreEZ4yi5wBdbOEUiLG6Wzum.jpeg",
        ],
      },
    ],
  },
  {
    id: 23,
    name: "Salon ryna",
    price: "86,490 DZD",
    originalPrice: "101,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1..JPG-ftIgGPSUNGteAywBx3kAoppP6wAYjV.jpeg",
    ],
    description: "Salon ryna en tissu clair, avec assises généreuses, fauteuils assortis et détails chaleureux pour un intérieur accueillant.",
    dimension: "Composition salon complète",
    discount: 15,
    category: "sofas",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1..JPG-ftIgGPSUNGteAywBx3kAoppP6wAYjV.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2..JPG-ttZg3D2ML1JnkAMCxcEFMSxpvVNK85.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3..JPG-mnfq95yeWkkRt44pJkbmyzrohgXUUt.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4..JPG-bRbXyhuLhYo7uvGWliE9ygIkniasQD.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5..JPG-GayS5eJ00fBG0XQ9f0mDhQ6hg9PCNQ.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6..JPG-YvPW29BH132ppZThhLCAxZtEf3tRT8.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7..JPG-50DXT9spADvJF05L0IPjHZs6NM3lNF.jpeg",
        ],
      },
    ],
  },
  {
    id: 24,
    name: "Salon Carolina",
    price: "78,990 DZD",
    originalPrice: "94,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.1..JPG-1WW5lhIXul6BOw8kyjlFivbOfKOvTS.jpeg",
    ],
    description: "Salon Carolina en tissu clair, une composition élégante aux lignes contemporaines avec assises confortables et finitions soignées.",
    dimension: "Composition salon complète",
    discount: 17,
    category: "sofas",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.1..JPG-1WW5lhIXul6BOw8kyjlFivbOfKOvTS.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.2..JPG-36gTdgb2rR1WYwht9lqfiqU2ao3bhV.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.3..JPG-1DFCr229qxbfP9sjAwQemN7MNebS9J.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.4..JPG-MHzMdDou0rOY1z9cs45brmO4odz9vg.jpeg",
        ],
      },
    ],
  },
  {
    id: 25,
    name: "Salon Panda",
    price: "84,590 DZD",
    originalPrice: "99,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.1.JPG-rNI9SYSsh6eicMunqC1sut5HpSuXe6.jpeg",
    ],
    description: "Salon Panda en tissu blanc cassé, une collection accueillante et raffinée avec canapé, fauteuils et détails décoratifs coordonnés.",
    dimension: "Composition salon complète",
    discount: 15,
    category: "sofas",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.1.JPG-rNI9SYSsh6eicMunqC1sut5HpSuXe6.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.2.JPG-YS3Toj7RO4jfMvUHbKRy3fL5RRYZNj.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.3.JPG-2f1oefj8d8Plnv3YT0miniqJ64tclf.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.4.JPG-lVw0HU3D1uNfZP6mhQizVMs7CJgpTo.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.5..JPG-yupw590MhiglDhw4EuyyBNTp35bVWH.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.6..JPG-3KPCCGXu9zFKLQVuxc2C9Ye3SalQ4j.jpeg",
        ],
      },
    ],
  },
  {
    id: 21,
    name: "Chambre à coucher TFK",
    price: "89,990 DZD",
    originalPrice: "106,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.-s3ycbj7va0RjBSHbCX0aOHbEQlji8K.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22.-17BCFhNzHMGSp2DeLWh34LpWpuOM8E.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33.-hi2J6DKdtqLRs3aqLNzkO5z4X56K7H.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/44.-WZeE6HN5BgPcTXhcokuvH87Ecu406o.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/55.-vxH5zqvI67qklJPDwMgJzJbesfm0v5.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66.-gcQCCLCYEPCoTehPRgztxI3GFIAhwy.jpeg",
    ],
    description: "Ensemble TFK blanc composé d’un lit double, de deux chevets, d’une commode avec miroir et d’une armoire élégante. Une collection pensée pour créer une chambre harmonieuse, confortable et raffinée.",
    dimension: "Armoire 2m70",
    discount: 16,
    category: "chambres",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.-s3ycbj7va0RjBSHbCX0aOHbEQlji8K.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22.-17BCFhNzHMGSp2DeLWh34LpWpuOM8E.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33.-hi2J6DKdtqLRs3aqLNzkO5z4X56K7H.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/44.-WZeE6HN5BgPcTXhcokuvH87Ecu406o.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/55.-vxH5zqvI67qklJPDwMgJzJbesfm0v5.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66.-gcQCCLCYEPCoTehPRgztxI3GFIAhwy.jpeg",
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Chambre Moderne avec Dressing",
    price: "109,990 DZD",
    originalPrice: "129,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/594305254_1210994937626583_7388069356829733011_n-0axNlabohPU6rarb9QogPblRWFZC56.jpg"),
    description: "Chambre contemporaine avec dressing coulissant et tête de lit capitonnée.",
    discount: 15,
    category: "chambres",
  },
  {
    id: 8,
    name: "Canapé-lit pour Chambre",
    price: "69,990 DZD",
    originalPrice: "82,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/489487372_1033224112070334_5652122833400361724_n-dXEUuYLrQxb75CTz2BHmrEhKQhdDGS.jpg"),
    description: "Solution convertible idéale pour une chambre d'appoint élégante.",
    discount: 16,
    category: "chambres",
  },
  {
    id: 13,
    name: "Armoire Dressing Blanche",
    price: "54,990 DZD",
    originalPrice: "64,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20ao%C3%BBt%202026%2C%2014_23_17-dPe9F44wfw190GWOgosQpzDVJCWQHu.png"),
    description: "Dressing blanc contemporain avec portes coulissantes et rangements généreux.",
    discount: 15,
    category: "armoire",
  },
  {
    id: 14,
    name: "Armoire Miroir Blanche",
    price: "44,990 DZD",
    originalPrice: "54,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480064076_992031269522952_5818835402125102106_n-6Q6df4khAIjOi4MOw5iflTYZ15GYSf.jpg"),
    description: "Armoire trois portes avec miroirs, penderie et tiroirs intégrés.",
    discount: 18,
    category: "armoire",
  },
  {
    id: 15,
    name: "Table Basse Design Noir",
    price: "24,990 DZD",
    originalPrice: "29,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/740314369_1379246800801395_5250627839017220222_n-iUIpdsLzZm89t507DembX7GUt6Y0bt.jpg"),
    description: "Table basse noire contemporaine avec plateau brillant et rangement discret.",
    discount: 17,
    category: "accessories",
  },
  {
    id: 16,
    name: "Table d'Appoint Blanche",
    price: "18,990 DZD",
    originalPrice: "23,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/737912073_1379246334134775_2486882298059408016_n-0n5t4iu3sgRzw6vKAvKWNAA6LslSE5.jpg"),
    description: "Table d'appoint blanche aux lignes douces et finition bois naturel.",
    discount: 21,
    category: "accessories",
  },
  {
    id: 26,
    name: "Table salle à manger K&B",
    price: "58,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a.JPG-ABNYFIcg0RLIn2CIhQjNQtn7bT4kR5.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.b..JPG-krlPFUG3lbcwfqFyhadetmV7mCjXHe.jpeg",
    ],
    description: "Table salle à manger K&B aux lignes élégantes, proposée en quatre finitions pour composer un intérieur harmonieux.",
    dimension: "1m60",
    category: "salle-a-manger",
    colors: [
      {
        name: "Marron",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_03_15-OX5UIEix2IkaRSzhoBTX5Hv6FDw1EK.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a.JPG-ABNYFIcg0RLIn2CIhQjNQtn7bT4kR5.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.b..JPG-krlPFUG3lbcwfqFyhadetmV7mCjXHe.jpeg",
        ],
      },
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-0ospyTvoHIZ51li990QMEWfteNeym4.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.a.JPG-6l6xJVMfVWcMnDkurBhGJ5vIOVYHjs.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.b.JPG-t4u3iRRoxXbO49zvJ8Yi64M5bWiXxi.jpeg",
        ],
      },
      {
        name: "Ivoire / Nature",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20ao%C3%BBt%202026%2C%2021_12_54-iGxtJtsNaVg2MdQZSpC80GDAPLt7oT.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.a..JPG-NgJWcQbwU5bgBNEOefe8Vw5i3bkwBX.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.b..JPG-krlPFUG3lbcwfqFyhadetmV7mCjXHe.jpeg",
        ],
      },
      {
        name: "Black",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20ao%C3%BBt%202026%2C%2021_29_08-kXp06Gs5d4Cn8aegEuw49VAIedGHic.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.a...JPG-LYBwqrgdmvbPPphi4IPZE588gIXaLP.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.b...JPG-S8aSKPnkReGVJkV7Ph4rIewzYatmkx.jpeg",
        ],
      },
    ],
  },
  {
    id: 27,
    name: "Table salle à manger ALBA",
    price: "54,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%2C1.JPG-AUv3ai1UMH667yp3I2Yt2NuNcarqoI.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%2C2.JPG-qVzWqT96nlWqAPupWhlXJ3XwqGmuXy.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%2C3.JPG-EIA04tgIrlyVSxVbq9QZrWHj0vd0wG.jpeg",
    ],
    description: "Table salle à manger ALBA aux lignes douces et contemporaines, avec deux placements élégants pour composer votre espace.",
    dimension: "1m60",
    category: "salle-a-manger",
    colors: [
      {
        name: "Blanc ivoire / nature — Placement 1",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20ao%C3%BBt%202026%2C%2021_12_54-qt20OmY1Dz6hq1lQQD098WVqezqjZ5.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%2C1.JPG-AUv3ai1UMH667yp3I2Yt2NuNcarqoI.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%2C2.JPG-qVzWqT96nlWqAPupWhlXJ3XwqGmuXy.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%2C3.JPG-EIA04tgIrlyVSxVbq9QZrWHj0vd0wG.jpeg",
        ],
      },
      {
        name: "Blanc ivoire / nature — Placement 2",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20ao%C3%BBt%202026%2C%2021_12_54-qt20OmY1Dz6hq1lQQD098WVqezqjZ5.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%2C4.JPG-y8orN5IyKSctO29y5v3C4uqLaAbfvv.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%2C5.JPG-1G9ahIt7fll8znpLFuPMT5N8ZGfQbe.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%2C6.JPG-awikpbmBedyvkAEyS5c0mbs3kelvSH.jpeg",
        ],
      },
    ],
  },
  {
    id: 28,
    name: "Table salle à manger OVALIS",
    price: "62,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-1.JPG-yZmRlpDCtHado5V49DEcFeePYj87S6.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-2.JPG-ccrhQpmQbj4WdlTXRMxzK0IjEDsU3G.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-3.JPG-2gkK4nneh5fqELxm1Goj8XwxEu2cL4.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-4.JPG-AFhy38N7FGiVaDLVxzZDJ6s7hefFbE.jpeg",
    ],
    description: "Table salle à manger OVALIS blanche au design ovale et élégant, accompagnée de chaises confortables pour une salle à manger raffinée.",
    dimension: "1m75",
    category: "salle-a-manger",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20ao%C3%BBt%202026%2C%2021_12_54-qt20OmY1Dz6hq1lQQD098WVqezqjZ5.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-1.JPG-yZmRlpDCtHado5V49DEcFeePYj87S6.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-2.JPG-ccrhQpmQbj4WdlTXRMxzK0IjEDsU3G.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-3.JPG-2gkK4nneh5fqELxm1Goj8XwxEu2cL4.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-4.JPG-AFhy38N7FGiVaDLVxzZDJ6s7hefFbE.jpeg",
        ],
      },
    ],
  },
  {
    id: 29,
    name: "Table salle à manger en verre",
    price: "62,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TKWE6797.JPG-IRzF9oX8NFenJrAFjAgZ6zYYFEICBB.jpeg"),
    description: "Table salle à manger en verre marron, élégante et lumineuse, idéale pour aménager une salle à manger chaleureuse.",
    dimension: "1m80",
    category: "salle-a-manger",
    colors: [
      {
        name: "Marron",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TKWE6797.JPG-IRzF9oX8NFenJrAFjAgZ6zYYFEICBB.jpeg",
        images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TKWE6797.JPG-IRzF9oX8NFenJrAFjAgZ6zYYFEICBB.jpeg"),
      },
      {
        name: "Marron — Design 2",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1111.JPG-zPgG86jvKFpCxPFIJrPInjNmN26Ymx.jpeg",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1111.JPG-zPgG86jvKFpCxPFIJrPInjNmN26Ymx.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YDCZ0481.JPG-I16WVrDJ7ZxNVQ0a1LRhnAKzOOEc14.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CBQS6271.JPG-F0WslqJTsllPKeQsyEzR7OGupGuEeZ.jpeg",
        ],
      },
    ],
  },
  {
    id: 30,
    name: "Table salle à manger louzi",
    price: "62,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--1.JPG-yRRlo7sDyFXyCguZ6MJa9tVbJCXZRy.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--2.JPG-C79O6SqDh9rFDTGTYSoUuSq9qQrj3F.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--3.JPG-aI9Gn9qc3SQEtjVEA1Iaq81MMJcLfX.jpeg",
    ],
    description: "Table salle à manger Louzi blanche au design élégant, avec plateau en verre et chaises capitonnées pour une salle à manger raffinée.",
    dimension: "1m60",
    category: "salle-a-manger",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20ao%C3%BBt%202026%2C%2022_58_13-T2H01r8IOpHZPJrE2Wbw3LzVE95EHv.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--1.JPG-yRRlo7sDyFXyCguZ6MJa9tVbJCXZRy.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--2.JPG-C79O6SqDh9rFDTGTYSoUuSq9qQrj3F.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--3.JPG-aI9Gn9qc3SQEtjVEA1Iaq81MMJcLfX.jpeg",
        ],
      },
    ],
  },
  {
    id: 31,
    name: "Table salle à manger RONDE",
    price: "58,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NQZM9360.JPG-QSsI9fyKixD3WsarwChbHxkyScbSN3.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BWDQ0350.JPG-zZwkK4flU5vNvlr2lnsZfPkUy2EB2b.jpeg",
    ],
    description: "Table salle à manger RONDE avec plateau en verre, disponible en blanc ivoire et marron pour une salle à manger élégante et conviviale.",
    dimension: "1m20",
    category: "salle-a-manger",
    colors: [
      {
        name: "Blanc ivoire",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20ao%C3%BBt%202026%2C%2021_12_54-oLrcmSsFrD6OtDbVH8ZHeLHVZAJVxi.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NQZM9360.JPG-QSsI9fyKixD3WsarwChbHxkyScbSN3.jpeg",
        ],
      },
      {
        name: "Marron",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20ao%C3%BBt%202026%2C%2023_10_31-fKF9gOfaqT5YW3IB4WS7CN1U1raSDT.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BWDQ0350.JPG-zZwkK4flU5vNvlr2lnsZfPkUy2EB2b.jpeg",
        ],
      },
    ],
  },
  {
    id: 32,
    name: "Table salle à manger ÉCLAT",
    price: "69,990 DZD",
    images: ["/products/pr1.jpg", "/products/pr11.jpg"],
    description: "Table salle à manger ÉCLAT en finition Ivoire / Nature, pensée pour une salle à manger lumineuse, chaleureuse et contemporaine.",
    dimension: "1m60",
    category: "salle-a-manger",
    colors: [
      {
        name: "Marron",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_03_15-OX5UIEix2IkaRSzhoBTX5Hv6FDw1EK.png",
        images: ["/products/pr1.jpg", "/products/pr11.jpg"],
      },
    ],
  },
  {
    id: 33,
    name: "Table salle à manger NOCTURNE",
    price: "74,990 DZD",
    images: ["/products/pr2.jpg", "/products/pr22.jpg", "/products/pr222.jpg"],
    description: "Table salle à manger NOCTURNE en finition marron, avec une présence sculpturale et des lignes élégantes pour recevoir avec style.",
    dimension: "1m80",
    category: "salle-a-manger",
    colors: [
      {
        name: "Marron",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_03_15-9lHi3qs18YXZbiHKvMoLPW3lGZziWs.png",
        images: ["/products/pr2.jpg", "/products/pr22.jpg", "/products/pr222.jpg"],
      },
    ],
  },
  {
    id: 34,
    name: "Table salle à manger HAVANA",
    price: "67,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.1-NysuNxNOY2aytJaIkkI3XnbeXQPmIY.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.2-NuypDfLSUwfUpCqJMDSSnGmqzDzkNF.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.3-dNW8Zl7XEcUg2cElsJ9aQdWGxBOOps.jpg",
    ],
    description: "Ensemble salle à manger HAVANA en finition marron, avec table ronde et chaises en cannage pour un intérieur chaleureux et élégant.",
    dimension: "1m60",
    category: "salle-a-manger",
    colors: [
      {
        name: "Marron",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.1-NysuNxNOY2aytJaIkkI3XnbeXQPmIY.jpg",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.1-NysuNxNOY2aytJaIkkI3XnbeXQPmIY.jpg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.2-NuypDfLSUwfUpCqJMDSSnGmqzDzkNF.jpg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.3-dNW8Zl7XEcUg2cElsJ9aQdWGxBOOps.jpg",
        ],
      },
    ],
  },
  {
    id: 35,
    name: "Ensemble salle à manger LUMIÈRE",
    price: "63,490 DZD",
    originalPrice: "74,990 DZD",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.1.-7jD4AOSIKzh4KkuMZJhEriaSTz02jQ.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.2.-5sd3rL2Vs4MaCH7sznKCSohT1zcf2U.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.3.-3gqRbYQ41FYd1fvbHUYS7WPieCcUSi.jpg",
    ],
    description: "Ensemble salle à manger LUMIÈRE en finition blanc, avec table ronde et quatre chaises confortables pour une pièce lumineuse et conviviale.",
    dimension: "1m40",
    discount: 15,
    category: "salle-a-manger",
    colors: [
      {
        name: "Blanc",
        swatch: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2027%20ao%C3%BBt%202026%2C%2017_05_48-KwSR6LtnukIdlq1ZN83PeUTzdW2bgE.png",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.1.-7jD4AOSIKzh4KkuMZJhEriaSTz02jQ.jpg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.2.-5sd3rL2Vs4MaCH7sznKCSohT1zcf2U.jpg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/.3.-3gqRbYQ41FYd1fvbHUYS7WPieCcUSi.jpg",
        ],
      },
    ],
  },
]

export function getProduct(productId: string | number) {
  return allProducts.find((product) => product.id === Number(productId))
}

export default allProducts
