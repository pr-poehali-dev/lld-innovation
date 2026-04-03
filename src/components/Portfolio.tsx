import Icon from '@/components/ui/icon';

const projects = [
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/0747ad16-8995-41a0-829d-fe68b3defc42.jpg',
    title: 'Юридическая компания «Правозащита»',
    category: 'Лендинг',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/33da7463-0799-4a89-9178-eb127f88ce59.jpg',
    title: 'Интернет-магазин «ТехноМаркет»',
    category: 'Интернет-магазин',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/d5f3151e-37ef-415e-aac6-9089496c05f7.jpg',
    title: 'Строительная компания «СтройПроект»',
    category: 'Корпоративный',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/0747ad16-8995-41a0-829d-fe68b3defc42.jpg',
    title: 'Медицинский центр «Здоровье»',
    category: 'Лендинг',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/33da7463-0799-4a89-9178-eb127f88ce59.jpg',
    title: 'Студия красоты «Glamour»',
    category: 'Лендинг',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/d5f3151e-37ef-415e-aac6-9089496c05f7.jpg',
    title: 'Оптовый поставщик «ОптТорг»',
    category: 'Корпоративный',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/0747ad16-8995-41a0-829d-fe68b3defc42.jpg',
    title: 'Ресторан «Итальяно»',
    category: 'Лендинг',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/33da7463-0799-4a89-9178-eb127f88ce59.jpg',
    title: 'Фитнес-клуб «SportLife»',
    category: 'Корпоративный',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Наши работы</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#0d1b3e' }}>
            Портфолио
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Реальные проекты — реальные результаты для бизнеса наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl cursor-pointer flex flex-col"
              style={{ aspectRatio: '16/10' }}
            >
              {/* Фото — занимает всё пространство, при hover сжимается (уменьшается высота) */}
              <div className="relative w-full transition-all duration-500 ease-in-out flex-shrink-0"
                style={{ height: '100%', flexBasis: '100%' }}
              >
                <div
                  className="absolute inset-0 transition-all duration-500 ease-in-out"
                  style={{ bottom: 0 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-all duration-500 ease-in-out group-hover:scale-y-[0.72] origin-top"
                  />
                </div>

                {/* Стрелка на фото — слева снизу, появляется при hover */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out translate-y-2 group-hover:translate-y-0 z-10">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Icon name="ArrowUpRight" size={20} className="text-black" />
                  </div>
                </div>

                {/* Номер проекта */}
                <div className="absolute top-4 left-4 text-white/40 font-extrabold text-xs tracking-widest select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Текстовая плашка — всегда внизу, скрыта за overflow, выезжает при hover */}
              <div
                className="absolute left-0 right-0 bottom-0 px-6 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                style={{ backgroundColor: '#0d1b3e' }}
              >
                <div className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">
                  {project.category}
                </div>
                <div className="text-white font-bold text-base leading-tight">
                  {project.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;