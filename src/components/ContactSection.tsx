import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-white">
            Присоединяйтесь к нам
          </h2>
          <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto">
            Следите за нашими новостями и не пропускайте самые интересные
            события
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Instagram" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-purple-900">
                  Instagram
                </h3>
                <p className="text-sm text-purple-700 mb-4">@eventylab</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  Подписаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Send" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-purple-900">Telegram</h3>
                <p className="text-sm text-purple-700 mb-4">@eventylab_bot</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  Написать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-purple-900">Телефон</h3>
                <p className="text-sm text-purple-700 mb-4">
                  +7 (999) 123-45-67
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  Позвонить
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-purple-900">Email</h3>
                <p className="text-sm text-purple-700 mb-4">
                  info@eventylab.ru
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  Написать
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/20 backdrop-blur-md text-white border-white/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-montserrat mb-4">
                Хотите провести мероприятие?
              </h3>
              <p className="mb-6 text-purple-100">
                Мы поможем организовать незабываемое событие для вашей компании
                или друзей
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Icon name="MessageCircle" className="mr-2" />
                Связаться с нами
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
