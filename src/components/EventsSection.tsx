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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-foreground">
            Ближайшие события
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Присоединяйтесь к нашим увлекательным мероприятиям и проведите время
            незабываемо
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
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
                    className="bg-white/90 text-purple-700"
                  >
                    {event.price}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-montserrat">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  <span>
                    {event.date} в {event.time}
                  </span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Icon name="MapPin" size={18} className="mr-2" />
                  <span>{event.venue}</span>
                </div>

                <Button className="w-full bg-gradient-purple hover:opacity-90 transition-opacity">
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
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
