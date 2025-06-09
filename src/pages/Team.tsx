import { useState, useRef } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Team = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
      favoriteMusic: "Джаз",
      motto: "Мур-мур-развлечение!",
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
      favoriteMusic: "Классика",
      motto: "Красота спасет мир!",
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
      favoriteMusic: "Поп",
      motto: "Веселье - это жизнь!",
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
      favoriteMusic: "Лаунж",
      motto: "Порядок превыше всего!",
    },
    {
      name: "Кот Байтович",
      role: "IT-специалист/Программист",
      image:
        "https://cdn.poehali.dev/files/c6843374-ec2f-402a-a925-87ebb01eec60.png",
      description:
        "Талантливый кот-программист в наушниках, который живет в серверной комнате и создает программы лапами. Знает все языки программирования и может исправить любой баг",
      skills: ["Программирование", "Отладка кода", "DevOps"],
      experience: "6 лет",
      favoriteMusic: "Lo-fi хип-хоп",
      motto: "Баг — это просто нераспознанная фича!",
    },
  ];

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Fallback if audio doesn't load
        console.log("Music not available");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 animate-fade-in">
                Команда EventyLab 🐱
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Познакомьтесь с самыми талантливыми котами в индустрии
                развлечений
              </p>

              {/* Magic Music Box */}
              <div className="flex justify-center mb-8">
                <Button
                  onClick={toggleMusic}
                  className={`relative group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 ${
                    isPlaying ? "animate-pulse" : ""
                  }`}
                >
                  <Icon
                    name={isPlaying ? "Pause" : "Music"}
                    size={24}
                    className="mr-3"
                  />
                  <span className="text-lg font-medium">
                    {isPlaying
                      ? "Выключить музыку"
                      : "🎵 Включить музыку котов"}
                  </span>
                  {isPlaying && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-ping"></div>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-60">
              🎵
            </div>
            <div
              className="absolute top-40 right-20 text-3xl animate-bounce opacity-60"
              style={{ animationDelay: "0.5s" }}
            >
              🎤
            </div>
            <div
              className="absolute bottom-32 left-20 text-4xl animate-bounce opacity-60"
              style={{ animationDelay: "1s" }}
            >
              🎪
            </div>
            <div
              className="absolute bottom-20 right-10 text-3xl animate-bounce opacity-60"
              style={{ animationDelay: "1.5s" }}
            >
              🎭
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
                  className={`bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer ${
                    selectedCat === index
                      ? "ring-4 ring-cyan-400 shadow-2xl transform -translate-y-3"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedCat(selectedCat === index ? null : index)
                  }
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className={`w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-200 group-hover:border-cyan-400 transition-all duration-300 ${
                          selectedCat === index
                            ? "scale-110 border-cyan-400"
                            : ""
                        }`}
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <Icon name="Heart" size={16} className="text-white" />
                      </div>
                      {selectedCat === index && (
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center animate-spin">
                          <Icon name="Star" size={16} className="text-white" />
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-purple-900 mb-2 group-hover:text-cyan-700 transition-colors">
                      {cat.name}
                    </h3>

                    <div className="text-purple-600 font-medium mb-4 text-lg">
                      {cat.role}
                    </div>

                    <p className="text-purple-700 text-sm mb-6 leading-relaxed">
                      {cat.description}
                    </p>

                    {selectedCat === index && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4">
                          <p className="text-cyan-700 font-medium text-sm mb-2">
                            💭 Девиз: "{cat.motto}"
                          </p>
                          <p className="text-cyan-600 text-sm">
                            🎵 Любимая музыка: {cat.favoriteMusic}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="space-y-4 mt-4">
                      <div className="flex items-center justify-center text-purple-600">
                        <Icon name="Clock" size={16} className="mr-2" />
                        <span className="text-sm">Опыт: {cat.experience}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 justify-center">
                        {cat.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs rounded-full shadow-md hover:shadow-lg transition-shadow"
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
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <Icon
                    name="Fish"
                    size={48}
                    className="text-cyan-300 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Любимая еда
                  </h3>
                  <p className="text-purple-100">
                    Рыбка и молоко перед каждым мероприятием
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <Icon
                    name="Moon"
                    size={48}
                    className="text-cyan-300 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Режим работы
                  </h3>
                  <p className="text-purple-100">
                    Активны днем, спят 18 часов в сутки
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <Icon
                    name="Trophy"
                    size={48}
                    className="text-cyan-300 mx-auto mb-4"
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

        {/* Interactive Footer */}
        <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-lg mb-4">
              🎉 Наши коты готовы сделать ваш праздник незабываемым!
            </p>
            <Button className="bg-white text-cyan-600 hover:bg-cyan-50 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Icon name="Phone" className="mr-2" size={18} />
              Связаться с командой
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
