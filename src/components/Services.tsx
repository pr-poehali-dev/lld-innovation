import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Globe',
    title: 'Разработка сайтов',
    description: 'Лендинги, корпоративные сайты, интернет-магазины. Современный дизайн, быстрая загрузка и адаптация под все устройства.',
    tags: ['Лендинг', 'Корпоративный', 'Интернет-магазин'],
  },
  {
    icon: 'Palette',
    title: 'UI/UX Дизайн',
    description: 'Создаём удобные и привлекательные интерфейсы. Прототипирование, дизайн-система, брендинг под ключ.',
    tags: ['Прототип', 'Фирменный стиль', 'Брендинг'],
  },
  {
    icon: 'TrendingUp',
    title: 'SEO и продвижение',
    description: 'Выводим сайты в топ поисковых систем. Контекстная реклама, настройка аналитики, рост органического трафика.',
    tags: ['SEO', 'Яндекс.Директ', 'Аналитика'],
  },
  {
    icon: 'Smartphone',
    title: 'Мобильная адаптация',
    description: 'Все сайты полностью адаптированы под смартфоны и планшеты. Удобство для ваших клиентов на любом экране.',
    tags: ['Responsive', 'Mobile First', 'PWA'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Поддержка и хостинг',
    description: 'Обеспечиваем бесперебойную работу сайта: техническая поддержка, обновления, защита от взломов.',
    tags: ['Хостинг', 'SSL', 'Безопасность'],
  },
  {
    icon: 'BarChart2',
    title: 'Аналитика и CRM',
    description: 'Интеграция с системами аналитики и CRM. Вы видите откуда приходят клиенты и что работает лучше.',
    tags: ['Метрика', 'Google Analytics', 'CRM'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Что мы делаем</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2 mb-4" style={{ color: '#0d1b3e' }}>
            Наши услуги
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Полный цикл разработки цифровых продуктов — от идеи до запуска и поддержки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon name={s.icon as never} size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0d1b3e' }}>{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
