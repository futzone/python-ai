export default {
  lang: "uz-UZ",
  title: "Python & AI O'quv Platformasi",
  description: "Python dasturlash va Sun'iy Intellektni bosqichma-bosqich o'rganish platformasi",
  outDir: "../dist",

  themeConfig: {
    nav: [
      { text: "Roadmap", link: "/roadmap" },
      { text: "Darsliklar", link: "/docs/python-basics" },
      // { text: "Manbalar", link: "/resources" },
      { text: "Vazifalar", link: "/tasks" },
      // { text: "Progress", link: "/progress" },
    ],

    sidebar: [
      {
        text: "Yo'l Xaritasi",
        items: [
          { text: "To'liq Yo'l Xaritasi", link: "/roadmap" }
        ],
      },
      {
        text: "Python Asoslari",
        items: [
          { text: "Python'ga Kirish", link: "/docs/python-basics" },
          { text: "O'zgaruvchilar va Ma'lumot Turlari", link: "/docs/variables-types" },
          { text: "Operatorlar", link: "/docs/operators" },
          { text: "Shart Operatorlari", link: "/docs/conditionals" },
          { text: "Tsikllar", link: "/docs/loops" },
          { text: "Funksiyalar", link: "/docs/functions" },
        ],
      },
      {
        text: "O'rta Daraja Python",
        items: [
          { text: "OOP Asoslari", link: "/docs/oop-basics" },
          { text: "Klasslar va Obyektlar", link: "/docs/classes-objects" },
          { text: "Meros va Polimorfizm", link: "/docs/inheritance" },
          { text: "Modullar va Paketlar", link: "/docs/modules" },
          { text: "Xatolarni Boshqarish", link: "/docs/error-handling" },
        ],
      },
      {
        text: "Ma'lumotlar Strukturasi",
        items: [
          { text: "Listlar va Tuplelar", link: "/docs/lists-tuples" },
          { text: "Lug'atlar va To'plamlar", link: "/docs/dicts-sets" },
          { text: "Algoritm Murakkabligi", link: "/docs/complexity" },
          { text: "Qidiruv va Saralash", link: "/docs/search-sort" },
        ],
      },
      {
        text: "Machine Learning",
        items: [
          { text: "ML'ga Kirish", link: "/docs/ml-intro" },
          { text: "NumPy va Pandas", link: "/docs/numpy-pandas" },
          { text: "Scikit-learn", link: "/docs/sklearn" },
          { text: "Nazorat ostidagi O'qitish", link: "/docs/supervised-learning" },
          { text: "Nazoratsiz O'qitish", link: "/docs/unsupervised-learning" },
        ],
      },
      {
        text: "Deep Learning",
        items: [
          { text: "Neyron Tarmoqlari", link: "/docs/neural-networks" },
          { text: "TensorFlow/Keras", link: "/docs/tensorflow" },
          { text: "PyTorch", link: "/docs/pytorch" },
          { text: "CNN va RNN", link: "/docs/cnn-rnn" },
        ],
      },
      {
        text: "NLP va LLM",
        items: [
          { text: "Tabiiy Tilni Qayta Ishlash", link: "/docs/nlp-intro" },
          { text: "Transformerlar", link: "/docs/transformers" },
          { text: "Katta Til Modellari", link: "/docs/llm" },
          { text: "ChatGPT kabi Model Yaratish", link: "/docs/build-chatgpt" },
        ],
      },
      {
        text: "Vazifalar",
        items: [
          { text: "Boshlang'ich Vazifalar", link: "/tasks/beginner" },
          { text: "O'rta Vazifalar", link: "/tasks/intermediate" },
          { text: "Ilg'or Vazifalar", link: "/tasks/advanced" },
          { text: "Loyihalar", link: "/tasks/projects" },
        ],
      },
      {
        text: "Manbalar",
        items: [
          { text: "Kitoblar", link: "/resources/books" },
          { text: "Foydali Havolalar", link: "/resources/links" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/futzone" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Python & AI",
      copyright: "© 2025 - Barcha huquqlar himoyalangan",
    },
  },

  vite: {
    server: {
      strictPort: false,
    },
  },
};
