import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { number: "200+", label: "Мероприятий", icon: "Calendar" },
    { number: "5000+", label: "Участников", icon: "Users" },
    { number: "3", label: "Года опыта", icon: "Clock" },
    { number: "50+", label: "Площадок", icon: "MapPin" },
  ];

  const team = [
    {
      name: "Анна Смирнова",
      role: "Основатель и ведущая",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b402?w=200&h=200&fit=crop&crop=face",
      description:
        "Создатель EventyLab с 5-летним опытом в индустрии развлечений",
    },
    {
      name: "Михаил Петров",
      role: "Ведущий игр",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      description: "Мастер интеллектуальных игр и квизов",
    },
    {
      name: "Елена Кузнецова",
      role: "Организатор",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      description: "Координирует все мероприятия и работает с площадками",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
                О EVENTYLAB
              </h1>
              <p className="text-xl text-purple-200">
                История команды, которая объединяет людей через игры и веселье
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gradient-to-br from-white via-purple-100 to-purple-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-purple-950">
                  Наша история
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <p className="text-lg text-purple-900 leading-relaxed">
                    EVENTYLAB родился из простой идеи: создать пространство, где
                    люди могут отдохнуть от повседневной суеты, познакомиться с
                    новыми людьми и просто хорошо провести время.
                  </p>
                  <p className="text-lg text-purple-900 leading-relaxed">
                    Всё началось в 2021 году, когда наш основатель Анна Смирнова
                    организовала первое музыкальное лото для друзей в небольшом
                    кафе. Успех превзошел все ожидания — люди просили повторить
                    мероприятие снова и снова.
                  </p>
                  <p className="text-lg text-purple-900 leading-relaxed">
                    Сегодня мы гордимся тем, что создали сообщество из тысяч
                    людей, которые регулярно участвуют в наших мероприятиях и
                    находят новых друзей.
                  </p>
                </div>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon
                              name={stat.icon as any}
                              size={24}
                              className="text-white"
                            />
                          </div>
                          <div className="text-3xl font-bold text-purple-950 mb-2">
                            {stat.number}
                          </div>
                          <div className="text-sm text-purple-800">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-gradient-to-br from-purple-200 to-purple-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-purple-950">
                Наша команда
              </h2>
              <p className="text-lg text-purple-800 max-w-2xl mx-auto">
                Познакомьтесь с людьми, которые создают незабываемые моменты
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-xl font-bold text-purple-950 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-purple-700 font-medium mb-4">
                      {member.role}
                    </div>
                    <p className="text-purple-800 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-gradient-to-r from-purple-800 to-purple-950">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Наша миссия
              </h2>
              <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                Мы создаем пространство для общения, веселья и новых знакомств.
                Наша цель — помочь людям отключиться от повседневных забот и
                получить заряд позитивных эмоций в компании единомышленников.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-purple-200">
                <div className="flex items-center">
                  <Icon name="Heart" className="mr-2" size={20} />
                  <span>Создаем эмоции</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" className="mr-2" size={20} />
                  <span>Объединяем людей</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  <span>Дарим впечатления</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
