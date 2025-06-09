import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Team = () => {
  const teamCats = [
    {
      name: "Мурзик",
      role: "Главный ведущий",
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop&crop=face",
      description:
        "Опытный кот с харизмой лидера. Умеет завладеть вниманием любой аудитории",
      skills: ["Ведение игр", "Импровизация", "Мяуканье на сцене"],
      experience: "5 лет",
    },
    {
      name: "Багира",
      role: "Креативный директор",
      image:
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=300&h=300&fit=crop&crop=face",
      description:
        "Элегантная черная кошечка с безупречным вкусом и творческим подходом",
      skills: ["Дизайн игр", "Сценарии", "Эстетика"],
      experience: "4 года",
    },
    {
      name: "Рыжик",
      role: "Аниматор",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=300&h=300&fit=crop&crop=face",
      description:
        "Веселый рыжий кот, который знает, как развеселить даже самую грустную компанию",
      skills: ["Анимация", "Игры с детьми", "Акробатика"],
      experience: "3 года",
    },
    {
      name: "Снежка",
      role: "Организатор",
      image:
        "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=300&h=300&fit=crop&crop=face",
      description:
        "Белоснежная кошка с невероятной организованностью и вниманием к деталям",
      skills: ["Планирование", "Логистика", "Координация"],
      experience: "4 года",
    },
    {
      name: "Барсик",
      role: "Технический специалист",
      image:
        "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?w=300&h=300&fit=crop&crop=face",
      description:
        "Полосатый кот-техник, который обеспечивает бесперебойную работу всего оборудования",
      skills: ["Звук", "Свет", "Техподдержка"],
      experience: "2 года",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
                Наша команда 🐱
              </h1>
              <p className="text-xl text-purple-100">
                Познакомьтесь с самыми талантливыми котами в индустрии
                развлечений
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {teamCats.map((cat, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-200 group-hover:border-purple-400 transition-colors"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-bright rounded-full flex items-center justify-center">
                        <Icon name="Heart" size={16} className="text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-purple-900 mb-2">
                      {cat.name}
                    </h3>

                    <div className="text-purple-600 font-medium mb-4 text-lg">
                      {cat.role}
                    </div>

                    <p className="text-purple-700 text-sm mb-6 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-center text-purple-600">
                        <Icon name="Clock" size={16} className="mr-2" />
                        <span className="text-sm">Опыт: {cat.experience}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 justify-center">
                        {cat.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-bright text-white text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                Интересные факты о команде
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <Icon
                    name="Fish"
                    size={48}
                    className="text-white mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Любимая еда
                  </h3>
                  <p className="text-purple-100">
                    Рыбка и молоко перед каждым мероприятием
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <Icon
                    name="Moon"
                    size={48}
                    className="text-white mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Режим работы
                  </h3>
                  <p className="text-purple-100">
                    Активны днем, спят 18 часов в сутки
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <Icon
                    name="Trophy"
                    size={48}
                    className="text-white mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Достижения
                  </h3>
                  <p className="text-purple-100">
                    Лучшая команда котов-аниматоров 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
