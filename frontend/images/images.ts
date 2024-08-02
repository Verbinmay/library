/* <picture>
  <source srcset="https://www.example.com/images/boat-nature-1.webp" type="image/webp">
  <source srcset="https://www.example.com/images/boat-nature-1.jpg" type="image/jpeg">
  <img src="https://www.example.com/images/boat-nature-1.jpg" alt="image">
</picture> */
/*You can use different image formats for different browsers, if the browser supports the WebP format, it will load the WebP image, otherwise it will load the JPEG image.*/

const imagesInfo = {
  formats: {
    raster: [
      {
        name: "JPG, JPEG",
        quality: "Пиксельное изображение, при увеличении ухудшается качество",
        transparency: "Нет",
        compression: "С потерей качества",
      },
      {
        name: "PNG",
        quality: "Пиксельное изображение, при увеличении ухудшается качество",
        transparency: "Да",
        compression: "Без потери качества",
      },
      {
        name: "GIF",
        quality: "Пиксельное изображение, при увеличении ухудшается качество",
        transparency: "Ограниченно",
        compression: "С потерей качества",
      },
      {
        name: "WEBP",
        quality: "Пиксельное изображение, при увеличении ухудшается качество",
        transparency: "Да",
        compression: "С потерей и без потери качества",
      },
    ],
    vector: [
      {
        name: "SVG",
        quality: "Не теряет качество при увеличении",
        transparency: "Да",
        features: "Поддержка анимации, малый вес файла",
      },
    ],
  },
  compressionTools: [
    {
      name: "TinyPNG",
      compressionType: "Сжатие с потерями",
      url: "https://tinypng.com",
    },
    {
      name: "Convertio",
      compressionType: "Разные типы сжатия",
      url: "https://convertio.co/ru/",
    },
  ],
  additionalInfo: {
    vectorImages: "Сохраняют качество при любом увеличении или уменьшении",
    rasterImages: "Состоят из пикселей, теряют качество при увеличении",
  },
  exampleUsage: {
    html: '<picture> <source srcset="https://www.andrewmunsell.com/sites/default/files/earth.webp" type="image/webp"> <source srcset="https://www.andrewmunsell.com/sites/default/files/earth.jpg" type="image/jpeg">  <img src="https://www.andrewmunsell.com/sites/default/files/earth.jpg" alt="image"></picture>',
    description:
      "You can use different image formats for different browsers. If the browser supports the WebP format, it will load the WebP image; otherwise, it will load the JPEG image.",
  },
};
