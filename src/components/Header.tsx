import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/events", label: "Афиша" },
    { path: "/services", label: "Услуги" },
    { path: "/gallery", label: "Галерея" },
    { path: "/reviews", label: "Отзывы" },
    { path: "/about", label: "О нас" },
    { path: "/contact", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-purple rounded-full flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold font-montserrat bg-gradient-purple bg-clip-text text-transparent">
              EventyLab
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-purple-900 ${
                  location.pathname === item.path
                    ? "text-purple-900 border-b-2 border-purple-600"
                    : "text-purple-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
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
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium text-left transition-colors hover:text-purple-900 ${
                    location.pathname === item.path
                      ? "text-purple-900"
                      : "text-purple-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
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
