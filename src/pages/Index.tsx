import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [secretClicks, setSecretClicks] = useState(0);
  const [forumPosts, setForumPosts] = useState([
    {
      id: 1,
      title: "Лучшие моды для выживания",
      author: "CreeperHunter",
      content: "Делюсь списком самых крутых модов для выживания в 2024!",
      image: null,
      likes: 24
    },
    {
      id: 2,
      title: "Мой новый замок",
      author: "BuildMaster",
      content: "Потратил 200 часов на эту постройку. Что думаете?",
      image: "🏰",
      likes: 156
    }
  ]);

  const popularMods = [
    { name: "OptiFine", description: "Улучшение графики и FPS", downloads: "500M+", icon: "⚡" },
    { name: "JEI", description: "Just Enough Items", downloads: "200M+", icon: "📦" },
    { name: "Biomes O' Plenty", description: "Новые биомы", downloads: "150M+", icon: "🌲" },
    { name: "Twilight Forest", description: "Измерение сумерек", downloads: "100M+", icon: "🌙" },
    { name: "Tinkers' Construct", description: "Крафт инструментов", downloads: "80M+", icon: "🔨" },
    { name: "Applied Energistics", description: "Автоматизация", downloads: "60M+", icon: "⚙️" }
  ];

  const handleSecretClick = () => {
    setSecretClicks(prev => prev + 1);
  };

  const addForumPost = () => {
    const newPost = {
      id: forumPosts.length + 1,
      title: "Новый пост",
      author: "Игрок" + Math.floor(Math.random() * 1000),
      content: "Тестовый пост от пользователя",
      image: null,
      likes: 0
    };
    setForumPosts([newPost, ...forumPosts]);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Header */}
      <header className="relative border-b border-neon-green/30 bg-gradient-to-r from-dark-bg via-pixel-gray/20 to-dark-bg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/img/7067d60f-0997-4d98-a6fc-70f1fc7e6b5d.jpg" 
                alt="Minecraft Logo" 
                className="w-16 h-16 minecraft-pixel rounded-lg"
              />
              <div>
                <h1 className="text-4xl font-bold text-neon-green animate-neon-glow">
                  MINECRAFT COMMUNITY
                </h1>
                <p className="text-neon-cyan text-sm font-mono">
                  Пиксельный мир без границ
                </p>
              </div>
            </div>
            <nav className="flex gap-4">
              <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black pixel-border">
                Главная
              </Button>
              <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black pixel-border">
                Форум
              </Button>
              <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black pixel-border">
                Моды
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-pink/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-6xl font-black text-white mb-4 animate-pixel-bounce">
            ДОБРО ПОЖАЛОВАТЬ
          </h2>
          <p className="text-xl text-neon-cyan mb-8 font-mono">
            В самое крутое сообщество майнкрафтеров
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-neon-green hover:bg-neon-green/80 text-black font-bold text-lg px-8 py-4"
            >
              🎮 Начать играть
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black px-8 py-4"
            >
              📝 Присоединиться к форуму
            </Button>
          </div>
          
          {/* Secret Easter Egg */}
          <div className="flex justify-center items-center gap-2 text-xs font-mono text-pixel-gray">
            <span>v1.20.1</span>
            <span 
              onClick={handleSecretClick}
              className="cursor-pointer hover:text-neon-purple transition-colors"
            >
              |
            </span>
            <span>Build 2024</span>
            {secretClicks >= 5 && (
              <div className="absolute top-4 right-4 bg-neon-purple/20 border border-neon-purple p-4 rounded-lg animate-neon-glow">
                <p className="text-neon-purple font-mono text-sm">
                  🎉 Секрет найден! Код: HEROBRINE_LIVES
                </p>
                <p className="text-xs text-neon-cyan">
                  Легенда гласит, что он все еще где-то здесь...
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Mods Section */}
      <section className="py-16 bg-gradient-to-b from-dark-bg to-pixel-gray/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-green neon-text">
            🔥 ПОПУЛЯРНЫЕ МОДЫ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularMods.map((mod, index) => (
              <Card key={index} className="bg-pixel-gray/40 border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{mod.icon}</span>
                    <div>
                      <CardTitle className="text-neon-cyan font-mono">{mod.name}</CardTitle>
                      <CardDescription className="text-neon-pink text-sm">
                        {mod.downloads} загрузок
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">{mod.description}</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-neon-green hover:bg-neon-green/80 text-black font-bold"
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-pink neon-text">
            💬 ФОРУМ СООБЩЕСТВА
          </h2>
          
          {/* Create Post */}
          <Card className="mb-8 bg-pixel-gray/40 border-neon-purple/30">
            <CardHeader>
              <CardTitle className="text-neon-purple font-mono">
                <Icon name="MessageSquare" size={20} className="inline mr-2" />
                Создать пост
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                placeholder="Заголовок поста..." 
                className="bg-dark-bg border-neon-purple/50 text-white placeholder:text-pixel-gray"
              />
              <Textarea 
                placeholder="Расскажите что-нибудь интересное..." 
                className="bg-dark-bg border-neon-purple/50 text-white placeholder:text-pixel-gray min-h-24"
              />
              <div className="flex gap-3">
                <Button 
                  onClick={addForumPost}
                  className="bg-neon-purple hover:bg-neon-purple/80 text-white font-bold"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Опубликовать
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black"
                >
                  <Icon name="Image" size={16} className="mr-2" />
                  Добавить фото
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Forum Posts */}
          <div className="space-y-6">
            {forumPosts.map((post) => (
              <Card key={post.id} className="bg-pixel-gray/40 border-neon-green/30 hover:border-neon-green/60 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-neon-green rounded-lg flex items-center justify-center text-black font-bold text-xl">
                        {post.author[0]}
                      </div>
                      <div>
                        <CardTitle className="text-neon-cyan font-mono text-lg">{post.title}</CardTitle>
                        <CardDescription className="text-neon-pink">
                          @{post.author} • только что
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-neon-purple text-neon-purple">
                      <Icon name="Heart" size={12} className="mr-1" />
                      {post.likes}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">{post.content}</p>
                  {post.image && (
                    <div className="w-full h-40 bg-pixel-gray/60 rounded-lg flex items-center justify-center text-6xl mb-4">
                      {post.image}
                    </div>
                  )}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black"
                    >
                      <Icon name="Heart" size={14} className="mr-2" />
                      Лайк
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black"
                    >
                      <Icon name="MessageCircle" size={14} className="mr-2" />
                      Ответить
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black"
                    >
                      <Icon name="Share" size={14} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neon-green/30 bg-gradient-to-r from-dark-bg via-pixel-gray/20 to-dark-bg py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pixel-gray font-mono">
            © 2024 Minecraft Community • Сделано с ❤️ для майнкрафтеров
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button size="sm" variant="ghost" className="text-neon-green hover:text-neon-green/80">
              <Icon name="Github" size={16} className="mr-2" />
              GitHub
            </Button>
            <Button size="sm" variant="ghost" className="text-neon-purple hover:text-neon-purple/80">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Discord
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}