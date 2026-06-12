export default function Home() {
  const menuItems = [
    {
      name: "Curry con Pollo",
      desc: "Curry japonés con arroz acompañado de katsu de pollo.",
      price: "S/ 23",
      image: "/images/curry-pollo.jpg",
    },
    {
      name: "Curry con Cerdo",
      desc: "Curry japonés con arroz acompañado de katsu de cerdo.",
      price: "S/ 25",
      image: "/images/curry-especial.jpg",
    },
    {
      name: "Curry con Pescado",
      desc: "Curry japonés con arroz acompañado de katsu de pescado.",
      price: "S/ 28",
      image: "/images/curry-mixto.jpg",
    },
    {
      name: "Curry con Camarón",
      desc: "Curry japonés con arroz acompañado de katsu de camarón.",
      price: "S/ 30",
      image: "/images/hero-curry.jpg",
    },
  ];

  const fullMenu = [
    {
      title: "Platos principales",
      subtitle: "Curry japonés con arroz",
      items: [
        {
          name: "Curry con Pollo",
          desc: "Katsu de pollo",
          price: "S/ 23",
        },
        {
          name: "Curry con Cerdo",
          desc: "Katsu de cerdo",
          price: "S/ 25",
        },
        {
          name: "Curry con Pescado",
          desc: "Katsu de pescado",
          price: "S/ 28",
        },
        {
          name: "Curry con Camarón",
          desc: "Katsu de camarón",
          price: "S/ 30",
        },
      ],
    },
    {
      title: "Aperitivos salados",
      subtitle: "Opciones crocantes para acompañar",
      items: [
        {
          name: "Katsu de Pollo Frito",
          desc: "Porción salada",
          price: "S/ 15",
        },
        {
          name: "Katsu de Cerdo Frito",
          desc: "Porción salada",
          price: "S/ 15",
        },
        {
          name: "Katsu de Pescado Frito",
          desc: "Porción salada",
          price: "S/ 18",
        },
        {
          name: "Katsu de Camarón Frito",
          desc: "Porción salada",
          price: "S/ 20",
        },
        {
          name: "Sopa de Bānròu",
          desc: "Pequeña S/ 15 | Grande S/ 20",
          price: "",
        },
      ],
    },
    {
      title: "Aperitivos dulces",
      subtitle: "Postres y antojitos dulces",
      items: [
        {
          name: "Mochi",
          desc: "Sabores: fresa, mango y oreo",
          price: "S/ 8",
        },
        {
          name: "Trenzas fritas dulces",
          desc: "1 unidad",
          price: "S/ 3",
        },
        {
          name: "Trenzas fritas dulces",
          desc: "3 unidades",
          price: "S/ 8",
        },
      ],
    },
    {
      title: "Bebidas",
      subtitle: "Calientes, frías y agua mineral",
      items: [
        {
          name: "Milk Tea con perlas",
          desc: "Sabores: original, arroz y fresa",
          price: "S/ 7",
        },
        {
          name: "Refrescos fríos",
          desc: "Coca-Cola, Inca Kola y Sprite",
          price: "S/ 5",
        },
        {
          name: "Agua mineral fría",
          desc: "Agua San Luis con gas o sin gas",
          price: "S/ 3",
        },
      ],
    },
  ];

  const galleryImages = [
    "/images/local-frontal.jpeg",
    "/images/hero-curry.jpg",
    "/images/curry-especial.jpg",
    "/images/curry-pollo.jpg",
    "/images/curry-mixto.jpg",
    "/images/bebidas.jpg",
  ];

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-[#153d2b]">
      <header className="fixed left-0 top-0 z-50 w-full bg-[#0f2f22]/90 text-white shadow-md backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/images/logo-yay-curry.png"
              alt="Logo de YAY Curry"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-[#f2c94c]/50"
            />

            <h1 className="text-2xl font-bold">
              YAY <span className="text-[#f2c94c]">Curry</span>
            </h1>
          </a>

          <div className="hidden gap-8 md:flex">
            <a href="#inicio" className="transition hover:text-[#f2c94c]">
              Inicio
            </a>
            <a href="#menu" className="transition hover:text-[#f2c94c]">
              Menú
            </a>
            <a href="#nosotros" className="transition hover:text-[#f2c94c]">
              Nosotros
            </a>
            <a href="#galeria" className="transition hover:text-[#f2c94c]">
              Galería
            </a>
            <a href="#ubicacion" className="transition hover:text-[#f2c94c]">
              Ubicación
            </a>
            <a href="#contacto" className="transition hover:text-[#f2c94c]">
              Contacto
            </a>
          </div>

          <a
            href="https://wa.me/51991607054"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#f2c94c] px-5 py-2 font-semibold text-[#153d2b] transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 text-white"
      >
        <img
          src="/images/local-frontal.jpeg"
          alt="Local de YAY Curry"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f22]/95 via-[#0f2f22]/75 to-black/25"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#f2c94c]">
              Bienvenido a YAY Curry
            </p>

            <h2 className="mb-6 max-w-3xl text-5xl font-black leading-tight drop-shadow-lg md:text-7xl">
              El sabor del curry que conquista tu día
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-100 drop-shadow">
              Restaurante de fusión japonesa y china. Disfruta curry japonés,
              katsu, mochi y bebidas en un espacio con sabor casero.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full bg-[#f2c94c] px-7 py-3 font-bold text-[#153d2b] transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                Ver menú
              </a>

              <a
                href="https://wa.me/51991607054"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#f2c94c] bg-black/20 px-7 py-3 font-bold text-[#f2c94c] backdrop-blur-sm transition hover:-translate-y-1 hover:bg-[#f2c94c] hover:text-[#153d2b] hover:shadow-lg"
              >
                Escríbenos
              </a>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-black text-[#f2c94c]">11:00</p>
                <p className="mt-1 text-sm text-gray-100">Abrimos todos los días</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-black text-[#f2c94c]">YAY</p>
                <p className="mt-1 text-sm text-gray-100">Curry • Katsu • Mochi</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-black text-[#f2c94c]">Wanchaq</p>
                <p className="mt-1 text-sm text-gray-100">Urb. Santa Mónica L4</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            "Curry japonés",
            "Katsu crocante",
            "Mochis dulces",
            "Atención todos los días",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-[#f7f3e8] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#153d2b] text-2xl text-[#f2c94c]">
                ✦
              </div>
              <h3 className="font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-[#d98c00]">
            Nuestro menú
          </p>

          <h2 className="mb-4 mt-3 text-4xl font-black md:text-5xl">
            Platos destacados
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-gray-600">
            Curry japonés con corazón casero. Platos principales servidos con
            arroz y acompañados con katsu.
          </p>

          <div className="grid gap-8 md:grid-cols-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35"></div>

                  <button className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 translate-y-8 rounded-full bg-[#f2c94c] px-5 py-2 text-sm font-bold text-[#153d2b] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver plato
                  </button>
                </div>

                <div className="p-6 transition-all duration-300 group-hover:bg-[#f7f3e8]">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-black transition-colors duration-300 group-hover:text-[#d98c00]">
                      {item.name}
                    </h3>

                    <span className="rounded-full bg-[#f2c94c] px-3 py-1 text-sm font-black text-[#153d2b]">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white px-6 py-4 text-center font-semibold text-[#153d2b] shadow-sm">
            Trae tu tupper y recibe{" "}
            <span className="font-black text-[#d98c00]">
              S/ 2 de descuento
            </span>{" "}
            en platos principales.
          </div>

          <a
            href="https://wa.me/51991607054"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-[#153d2b] px-8 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#0f2f22] hover:shadow-lg"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-[#d98c00]">
              YAY Menú
            </p>

            <h2 className="mb-4 mt-3 text-4xl font-black md:text-5xl">
              Menú completo
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-gray-600">
              ¡La comida sabe mejor con YAY! Revisa nuestras opciones de curry,
              aperitivos, postres y bebidas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {fullMenu.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-[#153d2b]/10 bg-[#f7f3e8] p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-[#153d2b]">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#d98c00]">
                    {section.subtitle}
                  </p>
                </div>

                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={`${item.name}-${item.desc}`}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm"
                    >
                      <div>
                        <h4 className="font-black text-[#153d2b]">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.desc}
                        </p>
                      </div>

                      {item.price && (
                        <span className="shrink-0 rounded-full bg-[#153d2b] px-4 py-2 text-sm font-black text-white">
                          {item.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xl font-black text-[#153d2b]">
            Curry japonés con corazón casero
          </p>
        </div>
      </section>

      <section id="nosotros" className="bg-[#0f2f22] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/images/local-frontal.jpeg"
              alt="Local de YAY Curry"
              className="h-80 w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#f2c94c]">
              Nosotros
            </p>

            <h2 className="mb-5 mt-3 text-4xl font-black">
              Pasión por la buena comida
            </h2>

            <p className="text-gray-200">
              En YAY Curry compartimos el gusto por la buena comida, combinando
              sabores japoneses y chinos con una atención cercana. Nuestro
              objetivo es ofrecer una experiencia deliciosa en cada plato, ideal
              para disfrutar solo, en familia o con amigos.
            </p>
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-[#d98c00]">
            Galería
          </p>

          <h2 className="mb-12 mt-3 text-4xl font-black">
            Momentos deliciosos
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className="group h-64 cursor-pointer overflow-hidden rounded-3xl bg-[#153d2b] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Galería YAY Curry ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#d98c00]">
              Ubicación
            </p>

            <h2 className="mb-5 mt-3 text-4xl font-black">Visítanos</h2>

            <p className="mb-3 text-lg">
              Urb. Santa Mónica L4, Distrito de Wanchaq
            </p>

            <p className="mb-6 text-lg">
              Lunes a domingo de 11:00 a. m. a 10:00 p. m.
            </p>

            <a
              href="https://maps.app.goo.gl/jrjv2sE5JiSGd7wK6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#153d2b] px-7 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#0f2f22] hover:shadow-lg"
            >
              Cómo llegar
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#153d2b]/10 bg-white shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d3!2d-71.9509491!3d-13.526727399999999!2m2!1f0!2f90!3m2!1i1024!2i768!4f75!3m3!1m2!1s0x916e7f001283ba65%3A0xb4f48add77af9ca8!2sYAY%20Curry%C2%B7Katsu%C2%B7Mochi!4v1781303166976"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de YAY Curry"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#153d2b] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-[#f2c94c]">
            Contacto
          </p>

          <h2 className="mb-6 mt-3 text-4xl font-black">
            Escríbenos y síguenos
          </h2>

          <p className="mb-2 text-lg">WhatsApp: 991 607 054</p>
          <p className="mb-8 text-lg">
            Horario: Lunes a domingo de 11:00 a. m. a 10:00 p. m.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.tiktok.com/@yay.curry"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#153d2b] transition hover:-translate-y-1 hover:bg-[#f2c94c] hover:shadow-lg"
            >
              TikTok
            </a>

            <a
              href="https://www.facebook.com/share/1CpxszgVGr/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#153d2b] transition hover:-translate-y-1 hover:bg-[#f2c94c] hover:shadow-lg"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/yaycurry?igsh=emNnZzJ5OXVyZHp4&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#153d2b] transition hover:-translate-y-1 hover:bg-[#f2c94c] hover:shadow-lg"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#07150f] px-6 py-8 text-center text-white">
        <h2 className="text-2xl font-black">YAY Curry</h2>

        <p className="mt-2 text-sm text-gray-300">
          © 2026 YAY Curry. Todos los derechos reservados.
        </p>
      </footer>

      <a
        href="https://wa.me/51991607054"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] px-5 py-4 font-bold text-white shadow-xl transition hover:scale-105"
      >
        WhatsApp
      </a>
    </main>
  );
}