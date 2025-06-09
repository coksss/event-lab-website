import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop",
      title: "Музыкальное лото в баре Атмосфера",
      category: "music-bingo",
      date: "Ноябрь 2023",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=400&fit=crop",
      title: "Напряженная игра в мафию",
      category: "mafia",
      date: "Октябрь 2023",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      title: "Интеллектуальный квиз",
      category: "quiz",
      date: "Сентябрь 2023",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&h=400&fit=crop",
      title: "Корпоративное мероприятие ТехКомпани",
      category: "corporate",
      date: "Август 2023",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=400&fit=crop",
      title: "День рождения в кругу друзей",
      category: "party",
      date: "Июль 2023",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=400&fit=crop",
      title: "Свадебные игры Анны и Михаила",
      category: "wedding",
      date: "Июнь 2023",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=400&fit=crop",
      title: "Летний квиз на открытой террасе",
      category: "quiz",
      date: "Май 2023",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=400&fit=crop",
      title: "Музыкальная битва 2000-х",
      category: "music-bingo",
      date: "Апрель 2023",
    },
  ];

  const categories = [
    { key: "all", label: "Все", icon: "Grid3X3" },
    { key: "music-bingo", label: "Музыкальное лото", icon: "Music" },
    { key: "mafia", label: "Мафия", icon: "Users" },
    { key: "quiz", label: "Квизы", icon: "Brain" },
    { key: "corporate", label: "Корпоративы", icon: "Building" },
    { key: "party", label: "Вечеринки", icon: "PartyPopper" },
    { key: "wedding", label: "Свадьбы", icon: "Heart" },
  ];

  const getCategoryLabel = (category: string) => {
    const cat = categories.find((c) => c.key === category);
    return cat ? cat.label : "Мероприятие";
  };

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

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
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold font-montserrat mb-8">
                Галерея событий
              </h1>
              <p className="text-2xl text-purple-200 mb-8">
                Моменты счастья и веселья, запечатленные навсегда
              </p>
              <div className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-purple-200 text-lg">
                📸 Более {galleryItems.length} ярких моментов
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-20 bg-gradient-purple-dark-blue relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={filter === category.key ? "default" : "outline"}
                  onClick={() => setFilter(category.key)}
                  className={`px-6 py-3 transition-all duration-300 ${
                    filter === category.key
                      ? "bg-gradient-purple text-white shadow-lg scale-105"
                      : "border-purple-300 text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  <Icon
                    name={category.icon as any}
                    className="mr-2"
                    size={18}
                  />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-gradient-purple-dark-blue relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-purple-900 backdrop-blur-sm">
                        {getCategoryLabel(item.category)}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-lg font-bold font-montserrat mb-2">
                        {item.title}
                      </h3>
                      <p className="text-purple-200 text-sm">{item.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Наши достижения в цифрах
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "200+", label: "Мероприятий", icon: "Calendar" },
                { number: "5000+", label: "Счастливых лиц", icon: "Smile" },
                { number: "50+", label: "Площадок", icon: "MapPin" },
                { number: "4.9/5", label: "Средняя оценка", icon: "Star" },
              ].map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={stat.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
