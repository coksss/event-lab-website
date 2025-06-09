import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-purple-200 text-sm font-medium mb-4">
              🎉 Более 200 успешных мероприятий
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold font-montserrat mb-6 leading-tight bg-gradient-to-r from-white via-purple-200 to-purple-100 bg-clip-text text-transparent">
            EventyLab
          </h1>
          <p className="text-2xl md:text-3xl font-open-sans mb-8 text-purple-100 font-semibold">
            Музыкальное лото • Мафия • Квизы
          </p>
          <p className="text-lg md:text-xl mb-12 text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Создаем незабываемые развлекательные мероприятия в лучших заведениях
            города. Присоединяйтесь к тысячам довольных участников!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 px-10 py-5 text-xl font-semibold animate-scale-in shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <Icon name="Calendar" className="mr-3" size={24} />
              Посмотреть афишу
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-10 py-5 text-xl font-semibold animate-scale-in shadow-2xl backdrop-blur-sm"
              style={{ animationDelay: "0.2s" }}
            >
              <Icon name="Users" className="mr-3" size={24} />О компании
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Icon name="ChevronDown" size={28} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
