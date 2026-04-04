import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import projects from '@/data/projects';

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
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-2xl cursor-pointer block"
              style={{ aspectRatio: '16/10' }}
            >
              {/* Картинка */}
              <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:bottom-[72px]" style={{ bottom: 0 }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{ height: '100%' }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              {/* Нижняя плашка — выезжает при hover */}
              <div
                className="absolute left-0 right-0 bottom-0 px-6 py-5 flex items-center justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                style={{ backgroundColor: '#0d1b3e' }}
              >
                <div>
                  <div className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">
                    {project.category}
                  </div>
                  <div className="text-white font-bold text-base leading-tight">
                    {project.title}
                  </div>
                </div>

                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 ml-4 shadow-lg">
                  <Icon name="ArrowUpRight" size={20} className="text-black" />
                </div>
              </div>

              {/* Номер проекта */}
              <div className="absolute top-4 left-4 text-white/40 font-extrabold text-xs tracking-widest select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
