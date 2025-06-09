import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-purple-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-purple-900">
              О EventyLab
            </h2>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              Мы создаем атмосферу веселья и объединяем людей через игры и
              развлечения
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-purple-800 leading-relaxed">
                  EventyLab — это команда энтузиастов, которая уже более 3 лет
                  организует незабываемые развлекательные мероприятия по всему
                  городу. Мы специализируемся на проведении музыкального лото,
                  игр в мафию и интеллектуальных квизов.
                </p>
                <p className="text-purple-800 leading-relaxed">
                  Наша миссия — создавать пространство для общения, веселья и
                  новых знакомств. За время работы мы провели более 200
                  мероприятий и собрали вокруг себя сообщество из тысяч активных
                  участников.
                </p>
              </div>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      200+
                    </div>
                    <div className="text-sm text-purple-700">Мероприятий</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      3
                    </div>
                    <div className="text-sm text-purple-700">Года опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      50+
                    </div>
                    <div className="text-sm text-purple-700">Площадок</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      1000+
                    </div>
                    <div className="text-sm text-purple-700">Участников</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Music" size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-purple-900">
                Музыкальное лото
              </h3>
              <p className="text-purple-700">
                Угадывайте песни разных эпох и жанров в увлекательной игровой
                форме
              </p>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-purple-900">
                Мафия
              </h3>
              <p className="text-purple-700">
                Психологическая игра на выживание с элементами детектива и
                стратегии
              </p>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Brain" size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-purple-900">
                Квизы
              </h3>
              <p className="text-purple-700">
                Интеллектуальные соревнования на знание истории, культуры и
                общей эрудиции
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
