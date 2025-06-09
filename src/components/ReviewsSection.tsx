import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    role: "HR-менеджер",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b9e3?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "EventyLab организовали потрясающий корпоратив! Все сотрудники были в восторге от музыкального лото. Профессиональный подход и отличная атмосфера.",
    event: "Корпоративное мероприятие",
  },
  {
    id: 2,
    name: "Дмитрий Козлов",
    role: "Организатор праздников",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Уже несколько раз обращался к EventyLab для организации вечеринок. Игра в мафию всегда проходит на высшем уровне. Рекомендую всем!",
    event: "Частная вечеринка",
  },
  {
    id: 3,
    name: "Елена Смирнова",
    role: "Невеста",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Свадебные игры от EventyLab сделали наш праздник незабываемым! Гости до сих пор вспоминают тот вечер с улыбкой. Спасибо за профессионализм!",
    event: "Свадебные игры",
  },
  {
    id: 4,
    name: "Михаил Волков",
    role: "Участник квиза",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Интеллектуальные квизы от EventyLab - это что-то невероятное! Вопросы интересные, атмосфера дружелюбная, призы классные. Хожу регулярно!",
    event: "Интеллектуальный квиз",
  },
];

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-br from-purple-100 via-white to-purple-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 bg-gradient-purple bg-clip-text text-transparent">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-purple-800 max-w-2xl mx-auto">
            Узнайте, что говорят о нас те, кто уже стал частью EventyLab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in border-2 border-purple-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-3 border-2 border-purple-300">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-gradient-purple text-white">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-purple-900">{review.name}</h4>
                    <p className="text-sm text-purple-600">{review.role}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-purple-800 text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>

                <div className="text-xs text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-full inline-block">
                  {review.event}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-purple rounded-full text-white font-semibold">
            <Icon name="Star" size={20} className="mr-2 text-yellow-300" />
            4.9/5 средняя оценка наших мероприятий
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
