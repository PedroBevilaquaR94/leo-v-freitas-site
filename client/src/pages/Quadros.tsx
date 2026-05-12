import { useState } from 'react';
import Header from '@/components/Header';
import Divider from '@/components/Divider';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quadrosPortfolio = [
  {
    id: 1,
    title: 'Abstração em Ouro',
    technique: 'Óleo sobre tela',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-quadro-oleo-cuFMctBA2XtBT8wdfDDpzh.webp'
  },
  {
    id: 2,
    title: 'Paisagem Dourada',
    technique: 'Óleo sobre tela',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-quadro-oleo-cuFMctBA2XtBT8wdfDDpzh.webp'
  },
  {
    id: 3,
    title: 'Composição Expressiva',
    technique: 'Óleo sobre tela',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-quadro-oleo-cuFMctBA2XtBT8wdfDDpzh.webp'
  },
  {
    id: 4,
    title: 'Luz e Sombra',
    technique: 'Óleo sobre tela',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-quadro-oleo-cuFMctBA2XtBT8wdfDDpzh.webp'
  },
  {
    id: 5,
    title: 'Movimento Artístico',
    technique: 'Óleo sobre tela',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-quadro-oleo-cuFMctBA2XtBT8wdfDDpzh.webp'
  },
  {
    id: 6,
    title: 'Harmonia em Tons',
    technique: 'Óleo sobre tela',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-quadro-oleo-cuFMctBA2XtBT8wdfDDpzh.webp'
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
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="container">
          <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Portfólio</p>
          <h1 className="mb-8">
            Quadros & <span className="text-accent">Telas a Óleo</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Além de tatuador, sou pintor e desenhista. Pinturas em quadros e telas com tinta a óleo — um trabalho extremamente prazeroso que combina técnica e expressão artística.
          </p>
        </div>
      </section>

      <Divider />

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

      <Divider />

      {/* Carousel Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative w-full aspect-video md:aspect-auto md:h-96 lg:h-[500px] overflow-hidden mb-12 border-2 border-destructive">
              {quadrosPortfolio.length > 0 && (
                <div className="relative w-full h-full">
                  <img
                    src={quadrosPortfolio[currentSlide].image}
                    alt={quadrosPortfolio[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">
                      {quadrosPortfolio[currentSlide].title}
                    </h3>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest">
                      {quadrosPortfolio[currentSlide].technique}
                    </p>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
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
                  className={`relative aspect-square overflow-hidden border-2 transition-all duration-300 ${
                    currentSlide === idx ? 'border-accent' : 'border-destructive/40 hover:border-accent'
                  }`}
                >
                  <img
                    src={quadro.image}
                    alt={quadro.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Techniques Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="mb-20 text-center">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Técnicas</p>
            <h2>Técnicas & Materiais</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-2 border-destructive/40 p-12 hover:border-accent transition-colors duration-300">
              <h3 className="text-2xl font-bold text-accent mb-6">Óleo sobre Tela</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A técnica tradicional de pintura a óleo permite criar camadas ricas de cor, texturas profundas e efeitos de luz que capturam a essência de cada composição. Cada pintura é um processo meditativo e expressivo.
              </p>
            </div>
            <div className="border-2 border-destructive/40 p-12 hover:border-accent transition-colors duration-300">
              <h3 className="text-2xl font-bold text-accent mb-6">Materiais Premium</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Utilizo tintas a óleo de alta qualidade, telas profissionais e pincéis selecionados para garantir que cada obra tenha durabilidade, vibração de cores e acabamento impecável.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Commissions Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Encomendas</p>
            <h2 className="mb-12">
              Projetos <span className="text-accent">Personalizados</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Você pode encomendar quadros personalizados. Trabalho com você para entender sua visão, estilo preferido e necessidades específicas, criando uma obra única que reflita sua personalidade e espaço.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-primary uppercase text-sm tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Solicitar Encomenda
              </a>
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-accent text-accent uppercase text-sm tracking-widest font-medium hover:bg-accent hover:text-primary transition-all duration-300"
              >
                Conversar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-destructive/30 py-12">
        <div className="container text-center text-muted-foreground text-sm">
          <p className="mb-2">© 2026 Leo V. Freitas. Todos os direitos reservados.</p>
          <p>Realismo com identidade e propósito</p>
        </div>
      </footer>
    </div>
  );
}
