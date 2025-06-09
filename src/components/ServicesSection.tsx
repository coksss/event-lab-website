import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: 1,
    title: "Корпоративные мероприятия",
    description:
      "Организуем тимбилдинг и развлекательные программы для компаний",
    icon: "Building",
    features: [
      "До 100 участников",
      "Индивидуальная программа",
      "Призы и подарки",
    ],
    price: "от 25 000₽",
  },
  {
    id: 2,
    title: "Частные вечеринки",
    description: "Незабываемые праздники для дней рождения и особых событий",
    icon: "PartyPopper",
    features: ["Личный ведущий", "Музыкальное сопровождение", "Фотозона"],
    price: "от 15 000₽",
  },
  {
    id: 3,
    title: "Свадебные игры",
    description: "Развлекательная программа для свадебных торжеств",
    icon: "Heart",
    features: ["Игры для гостей", "Интерактивные конкурсы", "Памятные призы"],
    price: "от 20 000₽",
  },
  {
    id: 4,
    title: "Детские праздники",
    description: "Веселые и безопасные игры для детей всех возрастов",
    icon: "Baby",
    features: ["Возраст 6-16 лет", "Безопасные игры", "Аниматоры"],
    price: "от 12 000₽",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 bg-gradient-purple bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-lg text-purple-800 max-w-2xl mx-auto">
            Мы предлагаем полный спектр развлекательных услуг для любых
            мероприятий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-2 border-purple-200 hover:border-purple-400"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-purple-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-purple-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-purple-800"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-purple-600 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-purple-900 mb-2">
                    {service.price}
                  </div>
                </div>

                <Button className="w-full bg-gradient-purple hover:opacity-90 text-white shadow-lg">
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
