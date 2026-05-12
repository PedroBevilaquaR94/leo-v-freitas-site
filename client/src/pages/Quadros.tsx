import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
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
  const carouselRef = useRef<HTMLDivElement>(null);

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
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/pattern-abstract-dark-4YSHvKtDXrQe3EUBVLk6Dt.webp"
            alt="pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Quadros & <span className="text-accent">Telas a Óleo</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Além de tatuador, sou pintor e desenhista. Pinturas em quadros e telas com tinta a óleo — um trabalho extremamente prazeroso que combina técnica e expressão artística.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* About Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Arte em <span className="text-accent">Tela</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A pintura a óleo é uma extensão natural da minha expressão artística. Cada tela é um trabalho cuidadoso onde combino técnica tradicional com visão contemporânea, criando peças únicas que transmitem emoção, movimento e profundidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meus quadros exploram a interação entre luz e sombra, cores quentes e frias, e composições que convidam o observador a uma jornada visual. Cada pintura é uma oportunidade de criar algo verdadeiramente artístico e memorável.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* Carousel Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="relative">
            {/* Main Carousel */}
            <div
              ref={carouselRef}
              className="relative w-full aspect-video md:aspect-auto md:h-96 lg:h-[500px] overflow-hidden mb-8"
            >
              {quadrosPortfolio.length > 0 && (
                <div className="relative w-full h-full">
                  <img
                    src={quadrosPortfolio[currentSlide].image}
                    alt={quadrosPortfolio[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border border-accent opacity-30" />
                  
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-200"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-200"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}
            </div>

            {/* Slide Counter */}
            <div className="text-center text-muted-foreground text-sm mb-8">
              {currentSlide + 1} / {quadrosPortfolio.length}
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quadrosPortfolio.map((quadro, idx) => (
                <button
                  key={quadro.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative aspect-square overflow-hidden border-2 transition-all duration-200 ${
                    currentSlide === idx ? 'border-accent' : 'border-border hover:border-accent'
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

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* Techniques Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Técnicas & Materiais</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-accent/30 p-8">
              <h3 className="text-2xl font-bold text-accent mb-4">Óleo sobre Tela</h3>
              <p className="text-muted-foreground leading-relaxed">
                A técnica tradicional de pintura a óleo permite criar camadas ricas de cor, texturas profundas e efeitos de luz que capturam a essência de cada composição. Cada pintura é um processo meditativo e expressivo.
              </p>
            </div>
            <div className="border border-accent/30 p-8">
              <h3 className="text-2xl font-bold text-accent mb-4">Materiais Premium</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizo tintas a óleo de alta qualidade, telas profissionais e pincéis selecionados para garantir que cada obra tenha durabilidade, vibração de cores e acabamento impecável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* Commissions Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Encomendas <span className="text-accent">Personalizadas</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Você pode encomendar quadros personalizados. Trabalho com você para entender sua visão, estilo preferido e necessidades específicas, criando uma obra única que reflita sua personalidade e espaço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-primary uppercase text-sm tracking-widest hover:bg-opacity-90 transition-all duration-200"
              >
                Solicitar Encomenda
              </a>
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-accent text-accent uppercase text-sm tracking-widest hover:bg-accent hover:text-primary transition-all duration-200"
              >
                Conversar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container text-center text-muted-foreground text-sm">
          <p>© 2026 Leo V. Freitas. Todos os direitos reservados.</p>
          <p className="mt-2">Realismo com identidade e propósito</p>
        </div>
      </footer>
    </div>
  );
}
