export default function Home() {
  const menuItems = [
    {
      name: "Curry Especial",
      desc: "Plato preparado con salsa curry, arroz y acompañamientos especiales.",
    },
    {
      name: "Curry de Pollo",
      desc: "Una opción deliciosa con pollo, especias y sabor casero.",
    },
    {
      name: "Curry Mixto",
      desc: "Combinación perfecta para quienes buscan más sabor.",
    },
    {
      name: "Bebidas",
      desc: "Acompaña tu plato favorito con una bebida refrescante.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-[#153d2b]">
      <header className="fixed left-0 top-0 z-50 w-full bg-[#0f2f22]/95 text-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">
            YAY <span className="text-[#f2c94c]">Curry</span>
          </h1>

          <div className="hidden gap-8 md:flex">
            <a href="#inicio" className="hover:text-[#f2c94c]">
              Inicio
            </a>
            <a href="#menu" className="hover:text-[#f2c94c]">
              Menú
            </a>
            <a href="#nosotros" className="hover:text-[#f2c94c]">
              Nosotros
            </a>
            <a href="#galeria" className="hover:text-[#f2c94c]">
              Galería
            </a>
            <a href="#ubicacion" className="hover:text-[#f2c94c]">
              Ubicación
            </a>
            <a href="#contacto" className="hover:text-[#f2c94c]">
              Contacto
            </a>
          </div>

          <a
            href="https://wa.me/51991607054"
            target="_blank"
            className="rounded-full bg-[#f2c94c] px-5 py-2 font-semibold text-[#153d2b] transition hover:bg-white"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="flex min-h-screen items-center bg-gradient-to-br from-[#0f2f22] via-[#153d2b] to-[#07150f] px-6 pt-24 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#f2c94c]">
              Bienvenido a YAY Curry
            </p>

            <h2 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              El sabor del curry que conquista tu día
            </h2>

            <p className="mb-8 max-w-xl text-lg text-gray-200">
              Disfruta platos llenos de sabor, preparados con ingredientes frescos
              y un toque especial para compartir momentos deliciosos.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full bg-[#f2c94c] px-7 py-3 font-bold text-[#153d2b] transition hover:bg-white"
              >
                Ver menú
              </a>

              <a
                href="https://wa.me/51991607054"
                target="_blank"
                className="rounded-full border border-[#f2c94c] px-7 py-3 font-bold text-[#f2c94c] transition hover:bg-[#f2c94c] hover:text-[#153d2b]"
              >
                Escríbenos
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-6 shadow-2xl">
            <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] bg-[#f2c94c] text-center text-3xl font-black text-[#153d2b]">
              Imagen principal de curry
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            "Ingredientes frescos",
            "Sabor auténtico",
            "Atención todos los días",
            "Ideal para compartir",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-[#f7f3e8] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-[#153d2b]"></div>
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

          <h2 className="mb-12 mt-3 text-4xl font-black md:text-5xl">
            Platos destacados
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#153d2b] text-center font-bold text-white">
                  <div className="absolute inset-0 bg-[#153d2b] transition-transform duration-500 group-hover:scale-110"></div>

                  <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                    Imagen del plato
                  </span>

                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30"></div>

                  <button className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 translate-y-8 rounded-full bg-[#f2c94c] px-5 py-2 text-sm font-bold text-[#153d2b] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver plato
                  </button>
                </div>

                <div className="p-6 transition-all duration-300 group-hover:bg-[#f7f3e8]">
                  <h3 className="mb-2 text-xl font-black transition-colors duration-300 group-hover:text-[#d98c00]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/51991607054"
            target="_blank"
            className="mt-10 inline-block rounded-full bg-[#153d2b] px-8 py-3 font-bold text-white transition hover:bg-[#0f2f22]"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <section id="nosotros" className="bg-[#0f2f22] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="flex h-80 items-center justify-center rounded-3xl bg-[#f2c94c] text-2xl font-black text-[#153d2b]">
            Imagen del local o cocina
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
              sabores especiales, ingredientes frescos y una atención cercana.
              Nuestro objetivo es ofrecer una experiencia deliciosa en cada plato,
              ideal para disfrutar solo, en familia o con amigos.
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
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group flex h-56 cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-[#153d2b] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  Imagen {item}
                </span>
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
              href="https://www.google.com/maps/search/Urb.+Santa+M%C3%B3nica+L4+Wanchaq"
              target="_blank"
              className="rounded-full bg-[#153d2b] px-7 py-3 font-bold text-white transition hover:bg-[#0f2f22]"
            >
              Cómo llegar
            </a>
          </div>

          <div className="flex h-80 items-center justify-center rounded-3xl bg-white shadow-lg">
            Mapa de Google Maps
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

          <p className="mb-8 text-lg">WhatsApp: 991 607 054</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.tiktok.com/@yay.curry"
              target="_blank"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#153d2b] transition hover:bg-[#f2c94c]"
            >
              TikTok
            </a>

            <a
              href="https://www.facebook.com/share/1CpxszgVGr/?mibextid=wwXIfr"
              target="_blank"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#153d2b] transition hover:bg-[#f2c94c]"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/yaycurry?igsh=emNnZzJ5OXVyZHp4&utm_source=qr"
              target="_blank"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#153d2b] transition hover:bg-[#f2c94c]"
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
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] px-5 py-4 font-bold text-white shadow-xl transition hover:scale-105"
      >
        WhatsApp
      </a>
    </main>
  );
}