import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      role: "HR-менеджер, ТехКомпани",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b9e3?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "EventyLab организовали потрясающий корпоратив! Все сотрудники были в восторге от музыкального лото. Профессиональный подход, креативные идеи и отличная атмосфера. Наша команда еще долго вспоминала этот вечер с улыбкой!",
      event: "Корпоративное мероприятие",
      date: "Ноябрь 2023",
    },
    {
      id: 2,
      name: "Дмитрий Козлов",
      role: "Организатор праздников",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Уже несколько раз обращался к EventyLab для организации вечеринок. Игра в мафию всегда проходит на высшем уровне. Ведущие умеют создать нужную атмосферу и вовлечь всех участников. Рекомендую всем!",
      event: "Частная вечеринка",
      date: "Октябрь 2023",
    },
    {
      id: 3,
      name: "Елена Смирнова",
      role: "Невеста",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Свадебные игры от EventyLab сделали наш праздник незабываемым! Гости до сих пор вспоминают тот вечер с улыбкой. Команда проявила креативность и учла все наши пожелания. Спасибо за профессионализм!",
      event: "Свадебные игры",
      date: "Сентябрь 2023",
    },
    {
      id: 4,
      name: "Михаил Волков",
      role: "Постоянный участник",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Интеллектуальные квизы от EventyLab - это что-то невероятное! Вопросы интересные и разнообразные, атмосфера дружелюбная, призы классные. Хожу регулярно и каждый раз получаю массу удовольствия!",
      event: "Интеллектуальный квиз",
      date: "Август 2023",
    },
    {
      id: 5,
      name: "Ольга Васильева",
      role: "Мама именинника",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Заказывали детский праздник для сына. Аниматоры превзошли все ожидания! Дети были в восторге, играли с удовольствием. Очень благодарны команде за такой замечательный праздник!",
      event: "Детский праздник",
      date: "Июль 2023",
    },
    {
      id: 6,
      name: "Александр Попов",
      role: "Директор StartUp",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Выездное мероприятие для нашей команды прошло на ура! EventyLab взяли на себя всю организацию и техническое обеспечение. Результат превзошел ожидания - отличный тимбилдинг!",
      event: "Выездное мероприятие",
      date: "Июнь 2023",
    },
  ];

  const stats = [
    { number: "4.9/5", label: "Средняя оценка", icon: "Star" },
    { number: "98%", label: "Довольных клиентов", icon: "ThumbsUp" },
    { number: "200+", label: "Положительных отзывов", icon: "MessageCircle" },
    { number: "150+", label: "Повторных заказов", icon: "RotateCcw" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold font-montserrat mb-8">
                Отзывы клиентов
              </h1>
              <p className="text-2xl text-purple-200 mb-8">
                Истории успеха и радости от наших участников
              </p>
              <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-purple-200 text-lg">
                <Icon name="Star" size={24} className="mr-3 text-yellow-300" />
                4.9/5 средняя оценка наших мероприятий
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-white via-purple-100 to-purple-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon
                      name={stat.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-purple-950 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-purple-800">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-gradient-to-br from-purple-100 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 bg-gradient-purple bg-clip-text text-transparent">
                Что говорят наши клиенты
              </h2>
              <p className="text-xl text-purple-900 max-w-3xl mx-auto">
                Каждый отзыв - это история счастья и незабываемых эмоций
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card
                  key={review.id}
                  className="bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-2 border-purple-300 hover:border-purple-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Avatar className="w-16 h-16 mr-4 border-2 border-purple-300">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback className="bg-gradient-purple text-white text-lg">
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-purple-950 text-lg">
                          {review.name}
                        </h4>
                        <p className="text-purple-700">{review.role}</p>
                        <p className="text-purple-600 text-sm">{review.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={20}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-purple-900 leading-relaxed mb-6 text-lg">
                      "{review.text}"
                    </p>

                    <div className="bg-gradient-purple text-white px-4 py-2 rounded-full inline-block text-sm font-medium">
                      {review.event}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Video Section */}
        <section className="py-20 bg-gradient-to-br from-purple-200 to-purple-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-purple-950">
                Видеоотзывы
              </h2>
              <p className="text-xl text-purple-800 max-w-2xl mx-auto">
                Посмотрите, как проходят наши мероприятия глазами участников
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-300 overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon name="Play" size={64} className="mx-auto mb-4" />
                    <p className="text-lg font-semibold">
                      Корпоратив ТехКомпани
                    </p>
                    <p className="text-purple-200">3:24</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-purple-950 mb-2">
                    Музыкальное лото для команды
                  </h3>
                  <p className="text-purple-800">
                    Отзыв HR-менеджера о корпоративном мероприятии
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-300 overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon name="Play" size={64} className="mx-auto mb-4" />
                    <p className="text-lg font-semibold">
                      Свадьба Анны и Михаила
                    </p>
                    <p className="text-purple-200">2:15</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-purple-900 mb-2">
                    Свадебные игры
                  </h3>
                  <p className="text-purple-700">
                    Молодожены рассказывают о своем празднике
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-800 to-purple-950">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Хотите оставить свой отзыв?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Поделитесь впечатлениями о наших мероприятиях и помогите другим
              сделать выбор
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg shadow-xl"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать отзыв
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Icon name="Star" className="mr-2" size={20} />
                Оценить мероприятие
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
