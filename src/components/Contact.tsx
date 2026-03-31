import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ backgroundColor: '#080f22' }} className="py-20">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Связаться</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Обсудим ваш проект
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Расскажите о задаче — мы подготовим предложение в течение 24 часов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="space-y-6 mb-10">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (900) 123-45-67', href: 'tel:+79001234567' },
                { icon: 'Mail', label: 'Email', value: 'hello@petrov-digital.ru', href: 'mailto:hello@petrov-digital.ru' },
                { icon: 'MapPin', label: 'Адрес', value: 'г. Москва, работаем удалённо по всей России', href: undefined },
                { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт: 9:00–18:00 (МСК)', href: undefined },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={item.icon as never} size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-blue-300 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-gray-400 text-sm mb-3">Мы в соцсетях:</div>
              <div className="flex gap-3">
                {[
                  { icon: 'MessageCircle', label: 'Telegram', href: '#' },
                  { icon: 'Phone', label: 'WhatsApp', href: '#' },
                  { icon: 'Instagram', label: 'ВКонтакте', href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-10 h-10 rounded-xl border border-white/10 hover:border-blue-500 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon name={s.icon as never} size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle2" size={32} className="text-blue-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-gray-400 text-sm">Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Ваше имя *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Иван Петров"
                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Телефон или Email *</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="+7 (900) 000-00-00 или email@example.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Сообщение</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-base"
                >
                  Отправить заявку
                </button>
                <p className="text-gray-500 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="text-blue-400 hover:underline">политикой конфиденциальности</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
