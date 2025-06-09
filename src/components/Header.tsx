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
    { path: "/team", label: "Команда" },
    { path: "/reviews", label: "Отзывы" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-2xl border-b border-purple-200/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-purple rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Icon name="Sparkles" size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold font-montserrat bg-gradient-purple bg-clip-text text-transparent">
              EVENTYLAB
            </h1>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
                  isActive(item.path)
                    ? "bg-gradient-purple text-white shadow-lg"
                    : "text-purple-800 hover:text-purple-950 hover:bg-purple-100"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {!isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-purple opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-gradient-purple hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Icon name="Ticket" className="mr-2" size={18} />
              Купить билет
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl bg-purple-100 hover:bg-purple-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-purple-800"
            />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-purple-200 bg-white/95 backdrop-blur-xl animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-gradient-purple text-white"
                      : "text-purple-800 hover:bg-purple-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-gradient-purple hover:opacity-90 text-white mt-4 mx-4">
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
