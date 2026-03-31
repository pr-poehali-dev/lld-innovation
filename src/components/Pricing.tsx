import Icon from '@/components/ui/icon';

const plans = [
  {
    name: 'Старт',
    price: 'от 30 000 ₽',
    period: '10–14 дней',
    description: 'Идеально для малого бизнеса и стартапов',
    features: [
      'Одностраничный лендинг',
      'Адаптивный дизайн (все устройства)',
      'Форма сбора заявок',
      'Базовая SEO-оптимизация',
      'Установка Яндекс.Метрики',
      '1 месяц технической поддержки',
    ],
    popular: false,
    cta: 'Выбрать пакет',
  },
  {
    name: 'Бизнес',
    price: 'от 80 000 ₽',
    period: '21–30 дней',
    description: 'Полноценный сайт для роста компании',
    features: [
      'Многостраничный сайт (до 10 страниц)',
      'Индивидуальный дизайн и брендинг',
      'Интеграция с CRM-системой',
      'SEO-оптимизация + семантическое ядро',
      'Подключение онлайн-чата',
      '3 месяца технической поддержки',
      'Обучение работе с сайтом',
    ],
    popular: true,
    cta: 'Выбрать пакет',
  },
  {
    name: 'Премиум',
    price: 'от 200 000 ₽',
    period: '45–60 дней',
    description: 'Комплексное решение для крупного бизнеса',
    features: [
      'Интернет-магазин или сложный портал',
      'Уникальный дизайн и дизайн-система',
      'Личный кабинет для клиентов',
      'Интеграции: CRM, 1С, платёжные системы',
      'Комплексное SEO-продвижение',
      '12 месяцев поддержки и доработок',
      'Приоритетный менеджер проекта',
    ],
    popular: false,
    cta: 'Обсудить проект',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" style={{ backgroundColor: '#f8fafc' }} className="py-20">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Стоимость</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4" style={{ color: '#0d1b3e' }}>
            Пакеты услуг
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Прозрачные цены без скрытых платежей. Выберите подходящий вариант или получите индивидуальное предложение.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? 'shadow-2xl border-2 border-blue-600 scale-105'
                  : 'border border-gray-200 bg-white hover:shadow-lg'
              }`}
              style={plan.popular ? { background: 'linear-gradient(160deg, #0d1b3e 0%, #152a5c 100%)' } : {}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow">
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-extrabold mb-1 ${plan.popular ? 'text-white' : ''}`} style={plan.popular ? {} : { color: '#0d1b3e' }}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}>{plan.description}</p>
                <div className={`text-3xl font-extrabold ${plan.popular ? 'text-white' : ''}`} style={plan.popular ? {} : { color: '#0d1b3e' }}>
                  {plan.price}
                </div>
                <div className={`text-sm mt-1 ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}>
                  Срок: {plan.period}
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Icon
                      name="CheckCircle2"
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.popular ? 'text-blue-300' : 'text-blue-600'}`}
                    />
                    <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-bold py-3.5 rounded-xl transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-400 text-white'
                    : 'bg-navy text-white hover:bg-blue-700'
                }`}
                style={plan.popular ? {} : { backgroundColor: '#0d1b3e' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Нужно нестандартное решение?{' '}
          <a href="#contact" className="text-blue-600 hover:underline font-medium">Свяжитесь с нами</a> — рассчитаем индивидуально.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
