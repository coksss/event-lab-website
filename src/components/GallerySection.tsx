import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const galleryItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop",
    title: "Музыкальное лото",
    category: "music-bingo",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=400&fit=crop",
    title: "Игра в мафию",
    category: "mafia",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
    title: "Интеллектуальный квиз",
    category: "quiz",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&h=400&fit=crop",
    title: "Корпоративное мероприятие",
    category: "corporate",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=400&fit=crop",
    title: "Частная вечеринка",
    category: "party",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=400&fit=crop",
    title: "Свадебные игры",
    category: "wedding",
  },
];

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "music-bingo":
      return "Музыкальное лото";
    case "mafia":
      return "Мафия";
    case "quiz":
      return "Квиз";
    case "corporate":
      return "Корпоратив";
    case "party":
      return "Вечеринка";
    case "wedding":
      return "Свадьба";
    default:
      return "Мероприятие";
  }
};

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-white">
            Галерея наших событий
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Посмотрите, как проходят наши мероприятия и какие эмоции мы создаем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-purple-900 backdrop-blur-sm">
                    {getCategoryLabel(item.category)}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold font-montserrat">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
