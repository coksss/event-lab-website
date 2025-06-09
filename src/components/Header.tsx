import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-purple rounded-full flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold font-montserrat bg-gradient-purple bg-clip-text text-transparent">
              EventyLab
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Афиша
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Контакты
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-purple hover:opacity-90 text-white">
              <Icon name="Ticket" className="mr-2" size={16} />
              Купить билет
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-purple-700"
            />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-purple-700 hover:text-purple-900 font-medium text-left"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-purple-700 hover:text-purple-900 font-medium text-left"
              >
                Афиша
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-purple-700 hover:text-purple-900 font-medium text-left"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-purple-700 hover:text-purple-900 font-medium text-left"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-purple-700 hover:text-purple-900 font-medium text-left"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-purple-700 hover:text-purple-900 font-medium text-left"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-purple-700 hover:text-purple-900 font-medium text-left"
              >
                Контакты
              </button>
              <Button className="bg-gradient-purple hover:opacity-90 text-white w-full mt-4">
                <Icon name="Ticket" className="mr-2" size={16} />
                Купить билет
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
