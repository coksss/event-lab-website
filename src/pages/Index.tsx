import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 overflow-hidden pt-16">
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
              Создаем незабываемые развлекательные мероприятия в лучших
              заведениях города. Присоединяйтесь к тысячам довольных участников!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/events">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-purple-50 px-10 py-5 text-xl font-semibold animate-scale-in shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <Icon name="Calendar" className="mr-3" size={24} />
                  Посмотреть афишу
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-700 px-10 py-5 text-xl font-semibold transition-all duration-300"
                >
                  <Icon name="Star" className="mr-3" size={24} />
                  Наши услуги
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-purple-900">
              Что мы предлагаем
            </h2>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              Откройте для себя мир развлечений и незабываемых эмоций
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/events" className="group">
              <Card className="h-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Calendar" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    Афиша
                  </h3>
                  <p className="text-purple-700 mb-6">
                    Актуальные мероприятия и возможность забронировать места
                  </p>
                  <div className="text-sm text-purple-600 font-medium">
                    3 мероприятия на этой неделе →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services" className="group">
              <Card className="h-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Sparkles" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    Услуги
                  </h3>
                  <p className="text-purple-700 mb-6">
                    Корпоративы, дни рождения, свадьбы и другие мероприятия
                  </p>
                  <div className="text-sm text-purple-600 font-medium">
                    От 12 000₽ за событие →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/about" className="group">
              <Card className="h-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    О нас
                  </h3>
                  <p className="text-purple-700 mb-6">
                    История команды и 3 года опыта в индустрии развлечений
                  </p>
                  <div className="text-sm text-purple-600 font-medium">
                    200+ проведенных событий →
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы к незабываемым эмоциям?
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и станьте частью удивительных
            мероприятий
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </Link>
            <Link to="/reviews">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg font-semibold"
              >
                <Icon name="Star" className="mr-2" size={20} />
                Читать отзывы
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
