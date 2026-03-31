import Icon from '@/components/ui/icon';

const advantages = [
  { icon: 'Clock', title: 'Сдаём в срок', text: 'Чётко соблюдаем сроки, прописанные в договоре. Никаких «ещё пару недель».' },
  { icon: 'FileText', title: 'Договор и гарантии', text: 'Работаем официально по договору. 3 месяца гарантии на все выполненные работы.' },
  { icon: 'Users', title: 'Личный менеджер', text: 'За каждым проектом закреплён менеджер. Отвечаем в течение 2 часов в рабочее время.' },
  { icon: 'RefreshCw', title: 'Правки включены', text: 'До трёх итераций правок входят в стоимость. Мы слышим пожелания клиента.' },
];

const reviews = [
  {
    name: 'Алексей Сорокин',
    position: 'Директор, ООО «СтройМастер»',
    text: 'Заказывали лендинг для строительной компании. Сделали быстро, качественно, чётко в рамках ТЗ. Количество заявок выросло в 3 раза за первый месяц. Рекомендую!',
    rating: 5,
    avatar: 'А',
  },
  {
    name: 'Марина Волкова',
    position: 'Основатель студии красоты «Glamour»',
    text: 'Наконец-то нашла команду, которая делает красиво и понятно объясняет каждый шаг. Сайт превзошёл все ожидания! Онлайн-записи выросли на 220%.',
    rating: 5,
    avatar: 'М',
  },
  {
    name: 'Дмитрий Ковалёв',
    position: 'Коммерческий директор, ТехноМаркет',
    text: 'Разработали интернет-магазин с интеграцией с нашей 1С. Работа слаженная, команда профессиональная. Выручка магазина за три месяца выросла на 40%.',
    rating: 5,
    avatar: 'Д',
  },
  {
    name: 'Наталья Иванова',
    position: 'Руководитель, мед. центр «Здоровье»',
    text: 'Очень довольна результатом. Сайт современный, удобный, хорошо ранжируется в поиске. Поддержка работает оперативно.',
    rating: 5,
    avatar: 'Н',
  },
];

const Trust = () => {
  return (
    <section id="trust" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Почему выбирают нас</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#0d1b3e' }}>
            Гарантии и преимущества
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((adv) => (
            <div key={adv.title} className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
              <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                <Icon name={adv.icon as never} size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#0d1b3e' }}>{adv.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{adv.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Отзывы</span>
          <h3 className="text-2xl md:text-3xl font-extrabold mt-2" style={{ color: '#0d1b3e' }}>
            Что говорят наши клиенты
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">«{review.text}»</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: '#152a5c' }}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: '#0d1b3e' }}>{review.name}</div>
                  <div className="text-gray-400 text-xs">{review.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
