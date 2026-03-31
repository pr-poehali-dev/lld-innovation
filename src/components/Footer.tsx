const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#040810' }} className="py-10 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">П</span>
            </div>
            <span className="text-gray-400 text-sm">ИП Петров Иван Иванович</span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
            <a href="#services" className="hover:text-gray-300 transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-gray-300 transition-colors">Портфолио</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Контакты</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Политика конфиденциальности</a>
          </div>

          <div className="text-gray-600 text-sm">
            © {year} ИП Петров. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
