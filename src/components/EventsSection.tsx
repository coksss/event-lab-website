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
  },
];

const getEventIcon = (type: string) => {
  switch (type) {
    case "music-bingo":
      return "Music";
    case "mafia":
      return "Users";
    case "quiz":
      return "Brain";
    default:
      return "Calendar";
  }
};

const getEventTypeLabel = (type: string) => {
  switch (type) {
    case "music-bingo":
      return "Музыкальное лото";
    case "mafia":
      return "Мафия";
    case "quiz":
      return "Квиз";
    default:
      return "Мероприятие";
  }
};

const EventsSection = () => {
  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-white via-purple-50 to-purple-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 bg-gradient-purple bg-clip-text text-transparent">
            Ближайшие события
          </h2>
          <p className="text-lg text-purple-800 max-w-2xl mx-auto">
            Присоединяйтесь к нашим увлекательным мероприятиям и проведите время
            незабываемо
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-scale-in bg-white/80 backdrop-blur-sm border-2 border-purple-200 hover:border-purple-400 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-purple text-white backdrop-blur-sm shadow-lg">
                    <Icon
                      name={getEventIcon(event.type)}
                      size={16}
                      className="mr-1"
                    />
                    {getEventTypeLabel(event.type)}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/95 text-purple-700 font-bold shadow-lg"
                  >
                    {event.price}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-white text-sm font-medium">
                    Успей забронировать место!
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-montserrat text-purple-900">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <div className="flex items-center text-purple-700">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  <span className="font-medium">
                    {event.date} в {event.time}
                  </span>
                </div>
                <div className="flex items-center text-purple-700">
                  <Icon name="MapPin" size={18} className="mr-2" />
                  <span>{event.venue}</span>
                </div>

                <Button className="w-full bg-gradient-purple hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-white font-semibold py-3">
                  <Icon name="Ticket" className="mr-2" />
                  Купить билет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-purple hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4"
          >
            <Icon name="Calendar" className="mr-2" />
            Посмотреть все события
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
