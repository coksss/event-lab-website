import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-foreground">
            Присоединяйтесь к нам
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Следите за нашими новостями и не пропускайте самые интересные
            события
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Instagram" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground mb-4">@eventylab</p>
                <Button variant="outline" size="sm" className="w-full">
                  Подписаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Send" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">Telegram</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  @eventylab_bot
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Написать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  +7 (999) 123-45-67
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Позвонить
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  info@eventylab.ru
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Написать
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-purple text-white">
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
                className="bg-white text-purple-700 hover:bg-purple-50"
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
