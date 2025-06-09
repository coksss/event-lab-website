import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredEvents = [
    {
      title: "Музыкальное лото 90-х",
      date: "15 декабря",
      price: "800₽",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    },
    {
      title: "Мафия: Новогодняя вечеринка",
      date: "22 декабря",
      price: "1000₽",
      image:
        "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=400&h=300&fit=crop",
    },
  ];

  const services = [
    { title: "Корпоративы", icon: "Building", price: "от 25 000₽" },
    { title: "Частные вечеринки", icon: "PartyPopper", price: "от 15 000₽" },
    { title: "Свадебные игры", icon: "Heart", price: "от 20 000₽" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-purple-dark-blue overflow-hidden pt-20">
        {/* Animated Background Elements */}
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
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Badge className="bg-white/20 text-purple-200 text-lg px-6 py-3 backdrop-blur-sm">
                🎉 Более 200 успешных мероприятий
              </Badge>
            </div>

            <h1 className="text-7xl md:text-9xl font-bold font-montserrat mb-8 leading-tight bg-gradient-to-r from-white via-purple-200 to-purple-100 bg-clip-text text-transparent">
              EVENTYLAB
            </h1>

            <p className="text-3xl md:text-4xl font-open-sans mb-6 text-purple-100 font-semibold">
              Музыкальное лото • Мафия • Квизы
            </p>

            <p className="text-xl md:text-2xl mb-12 text-purple-200 max-w-4xl mx-auto leading-relaxed">
              Создаем незабываемые развлекательные мероприятия в лучших
              заведениях города. Присоединяйтесь к тысячам довольных участников!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/events">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-50 px-12 py-6 text-xl font-semibold animate-scale-in shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#FFFDFB" }}
                >
                  <Icon name="Calendar" className="mr-3" size={24} />
                  Посмотреть афишу
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-12 py-6 text-xl font-semibold animate-scale-in shadow-2xl backdrop-blur-sm"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Icon name="Users" className="mr-3" size={24} />О компании
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Icon name="ChevronDown" size={28} className="text-white" />
          </div>
        </div>
      </section>

      {/* Quick Events Preview */}
      <section className="py-24" style={{ backgroundColor: "#FFFDFB" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-montserrat mb-8 bg-gradient-purple-dark-blue bg-clip-text text-transparent">
              Ближайшие события
            </h2>
            <p className="text-xl text-purple-800 max-w-3xl mx-auto">
              Не упустите возможность провести время незабываемо
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {featuredEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-2 border-purple-200 hover:border-purple-400 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/95 text-purple-700 font-bold shadow-lg">
                      {event.price}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-purple-700 mb-4">{event.date}</p>
                  <Button className="w-full bg-gradient-purple-dark-blue hover:opacity-90 text-white">
                    <Icon name="Ticket" className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <Button
                size="lg"
                className="bg-gradient-purple-dark-blue hover:opacity-90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Icon name="Calendar" className="mr-2" />
                Смотреть все события
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-montserrat mb-8 bg-gradient-purple-dark-blue bg-clip-text text-transparent">
              Наши услуги
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-purple-200 hover:border-purple-400"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-purple-dark-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon
                      name={service.icon as any}
                      size={36}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-2xl font-bold text-purple-600 mb-6">
                    {service.price}
                  </p>
                  <Button className="bg-gradient-purple-dark-blue hover:opacity-90 text-white w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-gradient-purple-dark-blue hover:opacity-90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Icon name="Briefcase" className="mr-2" />
                Все услуги
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Готовы к приключению?
          </h2>
          <p className="text-2xl text-purple-200 mb-12 max-w-3xl mx-auto">
            Присоединяйтесь к тысячам людей, которые уже открыли для себя мир
            EVENTYLAB
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/events">
              <Button
                size="lg"
                className="text-purple-700 hover:bg-gray-50 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#FFFDFB" }}
              >
                <Icon name="Ticket" className="mr-2" size={20} />
                Купить билет
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:text-purple-700 px-10 py-5 text-xl font-semibold backdrop-blur-sm"
                style={{ "--tw-bg-opacity": "1" } as any}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FFFDFB")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <Icon name="Users" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
