const steps = [
  {
    number: '01',
    title: 'Брифинг и анализ',
    description: 'Изучаем вашу нишу, конкурентов и цели. Заполняете бриф — мы готовим техническое задание и смету в течение 24 часов.',
  },
  {
    number: '02',
    title: 'Прототип и дизайн',
    description: 'Создаём прототип структуры сайта, согласовываем с вами. Затем разрабатываем дизайн в фирменных цветах вашего бренда.',
  },
  {
    number: '03',
    title: 'Разработка',
    description: 'Верстаем и программируем сайт. Параллельно наполняем контентом — тексты, фото, видео. Вы видите прогресс в режиме реального времени.',
  },
  {
    number: '04',
    title: 'Тестирование',
    description: 'Проверяем корректность на всех устройствах и браузерах. Тестируем скорость загрузки, формы заявок и все интерактивные элементы.',
  },
  {
    number: '05',
    title: 'Запуск',
    description: 'Публикуем сайт на вашем домене, настраиваем аналитику и системы сбора заявок. Проводим обучение по управлению сайтом.',
  },
  {
    number: '06',
    title: 'Поддержка',
    description: 'После запуска остаёмся на связи. Отвечаем на вопросы, вносим правки, следим за работоспособностью. Ваш сайт всегда в порядке.',
  },
];

const Process = () => {
  return (
    <section id="process" style={{ backgroundColor: '#080f22' }} className="py-20">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Как мы работаем</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Процесс работы
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Прозрачный процесс без лишних согласований — вы всегда знаете, что происходит
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-7 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 group"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="text-4xl font-extrabold leading-none select-none"
                  style={{ color: 'rgba(59,130,246,0.25)' }}
                >
                  {step.number}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-blue-500/30" />
                )}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
