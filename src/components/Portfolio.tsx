import { useState } from 'react';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Лендинг', 'Корпоративный', 'Интернет-магазин'];

const projects = [
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/0747ad16-8995-41a0-829d-fe68b3defc42.jpg',
    title: 'Юридическая компания «Правозащита»',
    category: 'Лендинг',
    tags: ['Дизайн', 'Разработка', 'SEO'],
    result: '+340% заявок',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/33da7463-0799-4a89-9178-eb127f88ce59.jpg',
    title: 'Интернет-магазин «ТехноМаркет»',
    category: 'Интернет-магазин',
    tags: ['Разработка', 'CRM', 'Реклама'],
    result: '+2.1M выручки/мес',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/d5f3151e-37ef-415e-aac6-9089496c05f7.jpg',
    title: 'Строительная компания «СтройПроект»',
    category: 'Корпоративный',
    tags: ['Дизайн', 'Разработка', 'Аналитика'],
    result: 'В топ-3 Яндекса',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/0747ad16-8995-41a0-829d-fe68b3defc42.jpg',
    title: 'Медицинский центр «Здоровье»',
    category: 'Лендинг',
    tags: ['Дизайн', 'SEO', 'Поддержка'],
    result: '+180% записей',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/33da7463-0799-4a89-9178-eb127f88ce59.jpg',
    title: 'Студия красоты «Glamour»',
    category: 'Лендинг',
    tags: ['Брендинг', 'Разработка'],
    result: '+220% онлайн-записей',
  },
  {
    image: 'https://cdn.poehali.dev/projects/25c7f3c1-bdc5-4298-bf40-b8d4834751d7/files/d5f3151e-37ef-415e-aac6-9089496c05f7.jpg',
    title: 'Оптовый поставщик «ОптТорг»',
    category: 'Корпоративный',
    tags: ['Разработка', 'CRM'],
    result: '+75 новых дилеров',
  },
];

const Portfolio = () => {
  const [active, setActive] = useState('Все');

  const filtered = active === 'Все' ? projects : projects.filter((p) => p.category === active);

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

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.title} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: 'rgba(8,15,34,0.7)' }}>
                  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-full p-3">
                    <Icon name="ExternalLink" size={20} className="text-white" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-2" style={{ color: '#0d1b3e' }}>{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm">
                  <Icon name="TrendingUp" size={14} />
                  {project.result}
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
