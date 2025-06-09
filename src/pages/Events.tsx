import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Event {
  id: number;
  title: string;
  type: "music-bingo" | "mafia" | "quiz";
  date: string;
  time: string;
  venue: string;
  price: string;
  image: string;
  description: string;
  spots: number;
}

const events: Event[] = [
  {
    id: 1,
    title: "Музыкальное лото 90-х",
    type: "music-bingo",
    date: "15 декабря",
    time: "19:00",
    venue: "Бар «Атмосфера»",
    price: "800₽",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    description:
      "Погрузитесь в атмосферу 90-х с хитами того времени! Узнавайте песни и выигрывайте призы.",
    spots: 12,
  },
  {
    id: 2,
    title: "Мафия: Новогодняя вечеринка",
    type: "mafia",
    date: "22 декабря",
    time: "20:00",
    venue: "Кафе «Центральное»",
    price: "1000₽",
    image:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=400&h=300&fit=crop",
    description:
      "Новогодняя игра в мафию с праздничными призами и атмосферой торжества.",
    spots: 8,
  },
  {
    id: 3,
    title: "Квиз «Что? Где? Когда?»",
    type: "quiz",
    date: "28 декабря",
    time: "18:30",
    venue: "Ресторан «Гранд»",
    price: "600₽",
    image:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    description:
      "Интеллектуальная битва с вопросами разной сложности. Покажите свою эрудицию!",
    spots: 20,
  },
];

const typeLabels = {
  "music-bingo": "Музыкальное лото",
  mafia: "Мафия",
  quiz: "Квиз",
};

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-purple-dark-blue relative overflow-hidden">
      <Header />

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

      <div className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-20 from-purple-900 via-purple-700 to-purple-500 bg-[#9207dc]">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
                Афиша мероприятий
              </h1>
              <p className="text-xl text-purple-200 mb-8">
                Выберите мероприятие и забронируйте место прямо сейчас
              </p>
              <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-purple-200">
                🎟️ Всего {events.length} мероприятия в ближайшее время
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 bg-gradient-purple-dark-blue relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-purple text-white">
                        {typeLabels[event.type]}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-purple-700">
                        {event.price}
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-purple-900">
                      {event.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-purple-700 mb-4">{event.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-purple-600">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        <span>
                          {event.date} в {event.time}
                        </span>
                      </div>
                      <div className="flex items-center text-purple-600">
                        <Icon name="MapPin" size={16} className="mr-2" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center text-purple-600">
                        <Icon name="Users" size={16} className="mr-2" />
                        <span>Осталось {event.spots} мест</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-purple hover:opacity-90 text-white">
                      <Icon name="Ticket" className="mr-2" size={16} />
                      Забронировать место
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Не нашли подходящее мероприятие?
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Мы можем организовать индивидуальное событие специально для вас
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать мероприятие
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
