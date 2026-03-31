const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #080f22 0%, #0d1b3e 50%, #0a1429 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/fe74c21c-4b92-4c6b-b5c3-0fb011010d33.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,15,34,0.95) 40%, rgba(8,15,34,0.5) 100%)' }} />

      <div className="absolute top-32 right-8 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
      <div className="absolute bottom-24 left-8 w-48 h-48 rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #1d4ed8, transparent)' }} />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Digital-агентство ИП Петров</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Сайты и цифровые решения,{' '}
            <span className="text-blue-400">которые работают на вас</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
            Разрабатываем лендинги, корпоративные сайты и интернет-магазины. Привлекаем клиентов и увеличиваем продажи через грамотный дизайн и технологии.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 text-center shadow-lg hover:shadow-blue-600/30"
            >
              Обсудить проект
            </a>
            <a
              href="#portfolio"
              className="border border-gray-500 hover:border-blue-400 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 text-center"
            >
              Смотреть портфолио
            </a>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-extrabold text-white">120+</div>
              <div className="text-gray-400 text-sm mt-1">проектов сдано</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-extrabold text-white">5 лет</div>
              <div className="text-gray-400 text-sm mt-1">на рынке</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-extrabold text-white">98%</div>
              <div className="text-gray-400 text-sm mt-1">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-gray-400 text-xs">Листайте вниз</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
