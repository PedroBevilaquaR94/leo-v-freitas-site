import { useState } from 'react';
import Header from '@/components/Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quadrosPortfolio = [
  {
    id: 1,
    title: 'Abstração em Ouro',
    technique: 'Óleo sobre tela',
    size: '80 x 60 cm',
    year: '2024',
    description: 'Composição geométrica com tons quentes e frios, explorando a harmonia entre formas abstratas e cores vibrantes.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/quadro-1-oleo-abstrato-hbv5dsztBFfQ4qq8GSNuyP.webp'
  },
  {
    id: 2,
    title: 'Paisagem Dourada',
    technique: 'Óleo sobre tela',
    size: '100 x 70 cm',
    year: '2024',
    description: 'Paisagem mediterrânea ao pôr do sol, capturando a luz dourada e a serenidade do momento.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/quadro-2-oleo-paisagem-iaHmh7Yieuxi9qufEUp9Vy.webp'
  },
  {
    id: 3,
    title: 'Composição Expressiva',
    technique: 'Óleo sobre tela',
    size: '90 x 70 cm',
    year: '2024',
    description: 'Obra abstrata expressionista com pinceladas dinâmicas e cores ousadas que transmitem movimento e energia.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/quadro-3-oleo-expressivo-72aEVH55gwh5XnUvjatiCc.webp'
  },
  {
    id: 4,
    title: 'Luz e Sombra',
    technique: 'Óleo sobre tela',
    size: '85 x 65 cm',
    year: '2024',
    description: 'Estudo de chiaroscuro com foco na interação dramática entre luz e escuridão, criando profundidade e mistério.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/quadro-4-oleo-luz-sombra-HsFJy6GDCEAUvyrLqxuHtA.webp'
  },
  {
    id: 5,
    title: 'Movimento Artístico',
    technique: 'Óleo sobre tela',
    size: '95 x 75 cm',
    year: '2024',
    description: 'Composição dinâmica que explora fluxo e movimento através de formas fluidas e transições de cores.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/quadro-5-oleo-movimento-XhJ43JkCMeDbgpAF2yTmNi.webp'
  },
  {
    id: 6,
    title: 'Harmonia em Tons',
    technique: 'Óleo sobre tela',
    size: '100 x 70 cm',
    year: '2024',
    description: 'Paisagem serena com paleta equilibrada de cores quentes e frias, transmitindo paz e contemplação.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/quadro-6-oleo-harmonia-edFPLsEyQLcw7fYCa4XWMr.webp'
  }
];

export default function Quadros() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quadrosPortfolio.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quadrosPortfolio.length) % quadrosPortfolio.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-40 bg-gradient-to-b from-background/50 to-background">
        <div className="container">
          <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light animate-fadeInUp">Portfólio</p>
          <h1 className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Quadros & <span className="text-accent">Telas a Óleo</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Além de tatuador, sou pintor e desenhista. Pinturas em quadros e telas com tinta a óleo — um trabalho extremamente prazeroso que combina técnica, expressão artística e dedicação ao detalhe.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* About Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Sobre</p>
            <h2 className="mb-12">
              Arte em <span className="text-accent">Tela</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              A pintura a óleo é uma extensão natural da minha expressão artística. Cada tela é um trabalho cuidadoso onde combino técnica tradicional com visão contemporânea, criando peças únicas que transmitem emoção, movimento e profundidade.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Meus quadros exploram a interação entre luz e sombra, cores quentes e frias, e composições que convidam o observador a uma jornada visual. Cada pintura é uma oportunidade de criar algo verdadeiramente artístico e memorável.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Carousel Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative w-full overflow-hidden mb-12 border-2 border-accent border-opacity-30 hover:border-opacity-100 transition-all duration-300">
              {quadrosPortfolio.length > 0 && (
                <div className="relative w-full">
                  <div className="aspect-video md:aspect-auto md:h-[500px] lg:h-[600px] overflow-hidden bg-black/40 flex items-center justify-center">
                    <img
                      src={quadrosPortfolio[currentSlide].image}
                      alt={quadrosPortfolio[currentSlide].title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                    <div className="max-w-3xl">
                      <h3 className="text-2xl md:text-4xl font-serif font-bold text-accent mb-3">
                        {quadrosPortfolio[currentSlide].title}
                      </h3>
                      <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                        {quadrosPortfolio[currentSlide].technique} • {quadrosPortfolio[currentSlide].size} • {quadrosPortfolio[currentSlide].year}
                      </p>
                      <p className="text-foreground text-base leading-relaxed max-w-2xl">
                        {quadrosPortfolio[currentSlide].description}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}
            </div>

            {/* Slide Counter */}
            <div className="text-center text-muted-foreground text-sm mb-12 font-light">
              {currentSlide + 1} / {quadrosPortfolio.length}
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quadrosPortfolio.map((quadro, idx) => (
                <button
                  key={quadro.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative aspect-square overflow-hidden border-2 transition-all duration-300 group ${
                    currentSlide === idx ? 'border-accent' : 'border-accent/30 hover:border-accent'
                  }`}
                >
                  <img
                    src={quadro.image}
                    alt={quadro.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${currentSlide === idx ? 'opacity-0' : 'opacity-0 group-hover:opacity-20'}`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Techniques Section */}
      <section className="py-24 md:py-40 bg-background/50">
        <div className="container">
          <div className="mb-20 text-center">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Técnicas</p>
            <h2>Técnicas & Materiais</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-2 border-accent/30 p-12 hover:border-accent transition-all duration-300 group">
              <h3 className="text-2xl font-serif font-bold text-accent mb-6 group-hover:text-accent transition-colors">Óleo sobre Tela</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A técnica tradicional de pintura a óleo permite criar camadas ricas de cor, texturas profundas e efeitos de luz que capturam a essência de cada composição. Cada pintura é um processo meditativo e expressivo que requer paciência e dedicação.
              </p>
            </div>
            <div className="border-2 border-accent/30 p-12 hover:border-accent transition-all duration-300 group">
              <h3 className="text-2xl font-serif font-bold text-accent mb-6 group-hover:text-accent transition-colors">Materiais Premium</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Utilizo tintas a óleo de alta qualidade, telas profissionais e pincéis selecionados para garantir que cada obra tenha durabilidade, vibração de cores e acabamento impecável. Cada material é escolhido cuidadosamente para a melhor qualidade final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Process Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="mb-20 text-center">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Processo</p>
            <h2>Meu Processo Criativo</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Conceito',
                description: 'Desenvolvimento da ideia, esboços e planejamento da composição e paleta de cores.'
              },
              {
                step: '02',
                title: 'Preparação',
                description: 'Preparação da tela, primer e desenho base para guiar a pintura.'
              },
              {
                step: '03',
                title: 'Execução',
                description: 'Aplicação de camadas de óleo, trabalhando luz, sombra e detalhes com precisão.'
              },
              {
                step: '04',
                title: 'Acabamento',
                description: 'Refinamento final, verniz protetor e apresentação da obra completa.'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-serif font-bold text-accent/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Commissions Section */}
      <section className="py-24 md:py-40 bg-gradient-to-b from-background to-background/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Encomendas</p>
            <h2 className="mb-12">
              Projetos <span className="text-accent">Personalizados</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Você pode encomendar quadros personalizados. Trabalho com você para entender sua visão, estilo preferido e necessidades específicas, criando uma obra única que reflita sua personalidade e espaço.
            </p>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Cada encomenda é tratada como um projeto artístico exclusivo, com consultoria sobre tamanho, técnica, paleta de cores e conceito. Posso criar desde retratos até composições abstratas totalmente personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-background uppercase text-sm tracking-widest font-medium hover:bg-accent/90 transition-all duration-300"
              >
                Solicitar Encomenda
              </a>
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-accent text-accent uppercase text-sm tracking-widest font-medium hover:bg-accent hover:text-background transition-all duration-300"
              >
                Conversar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/20 py-12 bg-background/50">
        <div className="container text-center text-muted-foreground text-sm">
          <p className="mb-2">© 2026 Leo V. Freitas. Todos os direitos reservados.</p>
          <p>Realismo com identidade e propósito</p>
        </div>
      </footer>
    </div>
  );
}
