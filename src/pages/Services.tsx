import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
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
        "Профессиональное оборудование",
      ],
      price: "от 25 000₽",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Частные вечеринки",
      description: "Незабываемые праздники для дней рождения и особых событий",
      icon: "PartyPopper",
      features: [
        "Личный ведущий",
        "Музыкальное сопровождение",
        "Фотозона",
        "Памятные подарки",
      ],
      price: "от 15 000₽",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Свадебные игры",
      description: "Развлекательная программа для свадебных торжеств",
      icon: "Heart",
      features: [
        "Игры для гостей",
        "Интерактивные конкурсы",
        "Памятные призы",
        "Адаптация под возраст",
      ],
      price: "от 20 000₽",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    },
  ];

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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-purple text-white px-3 py-1 rounded-full text-sm font-bold">
                      {service.price}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center mb-4">
                      <Icon
                        name={service.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-purple-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-purple-700 mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-semibold text-purple-800 mb-3">
                      Что включено:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-purple-600 text-sm"
                        >
                          <Icon
                            name="Check"
                            size={16}
                            className="mr-2 text-green-600"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-purple hover:opacity-90 text-white mt-auto">
                    <Icon name="Phone" className="mr-2" size={16} />
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
