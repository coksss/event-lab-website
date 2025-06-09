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
    {
      id: 4,
      title: "Детские праздники",
      description: "Веселые и безопасные игры для детей всех возрастов",
      icon: "Baby",
      features: [
        "Возраст 6-16 лет",
        "Безопасные игры",
        "Аниматоры",
        "Развивающие элементы",
      ],
      price: "от 12 000₽",
      image:
        "https://images.unsplash.com/photo-1530841344095-d0a5e6a89260?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Выездные мероприятия",
      description: "Проводим игры на вашей территории или выбранной площадке",
      icon: "MapPin",
      features: [
        "Любая локация",
        "Полная организация",
        "Техническое обеспечение",
        "Логистика",
      ],
      price: "от 18 000₽",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Онлайн мероприятия",
      description: "Интерактивные игры и квизы в цифровом формате",
      icon: "Monitor",
      features: [
        "Удаленное участие",
        "Интерактивные платформы",
        "Техподдержка",
        "Записи игр",
      ],
      price: "от 8 000₽",
      image:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
                Наши услуги
              </h1>
              <p className="text-xl text-purple-200 mb-8">
                Создаем индивидуальные развлекательные программы для любых
                мероприятий
              </p>
              <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-purple-200">
                🎯 Более 6 видов услуг для различных событий
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-purple-100">
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
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-purple-100 to-purple-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-purple-900">
                Как мы работаем
              </h2>
              <p className="text-lg text-purple-700 max-w-2xl mx-auto">
                Простой процесс от идеи до проведения мероприятия
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Консультация",
                  description: "Обсуждаем ваши пожелания и бюджет",
                  icon: "MessageCircle",
                },
                {
                  step: "02",
                  title: "Планирование",
                  description: "Разрабатываем программу мероприятия",
                  icon: "FileText",
                },
                {
                  step: "03",
                  title: "Подготовка",
                  description: "Готовим оборудование и материалы",
                  icon: "Settings",
                },
                {
                  step: "04",
                  title: "Проведение",
                  description: "Проводим незабываемое мероприятие",
                  icon: "Sparkles",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm text-center hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-purple-300 mb-4">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name={item.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-purple-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-purple-700 text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Готовы заказать мероприятие?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для бесплатной консультации и расчета стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить нам
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg font-semibold"
              >
                <Icon name="Mail" className="mr-2" size={20} />
                Написать на почту
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
