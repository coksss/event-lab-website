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
      name: "Сэр Мурлыкало 1",
      role: "Главный ведущий",
      image:
        "https://cdn.poehali.dev/files/df88945d-24ad-499f-9326-f888c6a09205.png",
      description:
        "Родился во дворе за кафе 'Рыбный Рай'. Обладает оперным голосом невероятной красоты. Стал ведущим свадеб после того, как сломался микрофон и он спас торжество своим мурлыканьем. Получил титул 'Сэр' от EventyLab за исключительные заслуги в области развлечений",
      skills: ["Ведение торжеств", "Оперное мурлыканье", "Спасение ситуаций"],
      experience: "5 лет",
      favoriteMusic: "Опера",
      motto: "Мур-мур-величие!",
    },
    {
      name: "Леди Когтеграфика",
      role: "Дизайнер",
      image:
        "https://cdn.poehali.dev/files/099efe6b-5a55-4b77-bb24-3999d9bf1a59.png",
      description:
        "Элегантная кошка с безупречным вкусом. Однажды она случайно зашла в антикварный магазин и влюбилась в винтажные вещи. Теперь каждый её дизайн — это история из прошлого с современным twist.",
      skills: ["UI/UX дизайн", "Брендинг", "Винтажная стилистика"],
      experience: "4 года",
      favoriteMusic: "Классика",
      motto:
        "Настоящая красота — это когда когти порвали твой эскиз, но получилось ещё лучше!",
    },
    {
      name: "DJ Пушистик",
      role: "Звукорежиссёр/DJ",
      image:
        "https://cdn.poehali.dev/files/08de2c0c-7fe2-42b3-98ac-5bbe58f3be9f.png",
      description:
        "Родился в подвале музыкального магазина среди виниловых пластинок. Сердце бьётся с частотой 120 BPM. Стал диджеем после того, как на вечеринке EventyLab сломалась аппаратура, а он спас танцпол своими лапами на пульте.",
      skills: ["Сведение треков", "Звукорежиссура", "Битмэтчинг"],
      experience: "4 года",
      favoriteMusic: "Электронная музыка",
      motto: "Музыка — это язык, который понимают все коты!",
    },
    {
      name: "Феликс Кадрохват",
      role: "Фотограф",
      image:
        "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=300&h=300&fit=crop&crop=face",
      description:
        "Феликс родился в фотостудии — буквально. Его мама-кошка решила устроить «роддом» в корзине с мягкими фонами для портретов. С первых дней его окружали камеры, вспышки и… вечно кричащие «Сыыыырно!» клиенты. Его талант открылся случайно: в 4 месяца он уронил хвостом дорогой объектив — и камера сделала случайный кадр. Это был шедевр! Размытый нос хозяйки студии, летящие когти и идеальная композиция под названием «Падение во имя искусства». Сейчас он — легенда EventyLab.",
      skills: ["Фотосъёмка", "Композиция", "Портретная съёмка"],
      experience: "4 года",
      favoriteMusic: "Джаз",
      motto:
        "Идеальный кадр? Когда у человека глаза — как у сметанного воришки, а у кота — как у Будды!",
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
