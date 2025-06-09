import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-purple overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 leading-tight">
            EventyLab
          </h1>
          <p className="text-xl md:text-2xl font-open-sans mb-8 text-purple-100">
            Музыкальное лото • Мафия • Квизы
          </p>
          <p className="text-lg md:text-xl mb-12 text-purple-200 max-w-2xl mx-auto">
            Организуем незабываемые развлекательные мероприятия в лучших
            заведениях города
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold animate-scale-in"
            >
              <Icon name="Calendar" className="mr-2" />
              Посмотреть афишу
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg font-semibold animate-scale-in"
            >
              <Icon name="Users" className="mr-2" />О компании
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
