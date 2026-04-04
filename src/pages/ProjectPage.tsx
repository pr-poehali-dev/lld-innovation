import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import projects from '@/data/projects';
import Icon from '@/components/ui/icon';

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Проект не найден</p>
        <Link to="/" className="text-blue-600 underline">На главную</Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-white">
      {/* Шапка */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/#portfolio')}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icon name="ArrowLeft" size={18} />
            Портфолио
          </button>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            {project.category}
          </span>
        </div>
      </header>

      {/* Герой */}
      <section className="relative w-full" style={{ height: '60vh', minHeight: 380 }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 pb-10">
          <span className="inline-block text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {project.title}
          </h1>
          <div className="flex gap-6 mt-4">
            <div className="text-white/70 text-sm">
              <span className="text-white/40 mr-1">Год:</span>{project.year}
            </div>
            <div className="text-white/70 text-sm">
              <span className="text-white/40 mr-1">Срок:</span>{project.duration}
            </div>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Левая колонка — основной текст */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: '#0d1b3e' }}>О проекте</h2>
              <p className="text-gray-600 leading-relaxed text-base">{project.description}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row gap-6">
              {/* Задача */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Target" size={18} className="text-blue-600" />
                  <h3 className="font-bold text-sm uppercase tracking-wide" style={{ color: '#0d1b3e' }}>Задача</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
              </div>

              <div className="w-px bg-gray-200 hidden md:block" />

              {/* Решение */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Lightbulb" size={18} className="text-green-600" />
                  <h3 className="font-bold text-sm uppercase tracking-wide" style={{ color: '#0d1b3e' }}>Решение</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
              </div>

              <div className="w-px bg-gray-200 hidden md:block" />

              {/* Результат */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="TrendingUp" size={18} className="text-blue-600" />
                  <h3 className="font-bold text-sm uppercase tracking-wide" style={{ color: '#0d1b3e' }}>Результат</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.result}</p>
              </div>
            </div>

            {/* Галерея */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: '#0d1b3e' }}>Скриншоты</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`} style={{ aspectRatio: '16/9' }}>
                    <img src={img} alt={`${project.title} — скриншот ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка — теги + CTA */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-sm uppercase tracking-wide mb-4" style={{ color: '#0d1b3e' }}>Технологии и услуги</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-gray-700 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: '#0d1b3e' }}>
              <h3 className="font-bold text-lg mb-2">Нужен похожий проект?</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Расскажите о своей задаче — обсудим и сделаем предложение.
              </p>
              <a
                href="/#contact"
                className="block w-full text-center bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold py-3 rounded-xl text-sm"
              >
                Обсудить проект
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Навигация между проектами */}
      <section className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-gray-400 flex items-center justify-center transition-colors">
                <Icon name="ArrowLeft" size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Предыдущий</div>
                <div className="font-semibold text-sm">{prevProject.title}</div>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors text-right"
            >
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Следующий</div>
                <div className="font-semibold text-sm">{nextProject.title}</div>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-gray-400 flex items-center justify-center transition-colors">
                <Icon name="ArrowRight" size={18} />
              </div>
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;