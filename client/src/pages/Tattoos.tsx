import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tattooPortfolio = [
  {
    id: 1,
    title: 'Retrato Realista',
    style: 'Realismo',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp'
  },
  {
    id: 2,
    title: 'Portrait em Preto e Cinza',
    style: 'Portrait',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp'
  },
  {
    id: 3,
    title: 'Composição Blackwork',
    style: 'Blackwork',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp'
  },
  {
    id: 4,
    title: 'Homenagem Familiar',
    style: 'Realismo',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp'
  },
  {
    id: 5,
    title: 'Detalhe em Preto',
    style: 'Blackwork',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp'
  },
  {
    id: 6,
    title: 'Retrato Expressivo',
    style: 'Portrait',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp'
  }
];

export default function Tattoos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredPortfolio = selectedStyle
    ? tattooPortfolio.filter(t => t.style === selectedStyle)
    : tattooPortfolio;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredPortfolio.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredPortfolio.length) % filteredPortfolio.length);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedStyle]);

  const styles = ['Realismo', 'Portrait', 'Blackwork'];

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
            Tatuagens em <span className="text-accent">Realismo</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Especialista em tatuagens realistas, portraits e blackwork. Cada trabalho é uma obra de arte única, pensada para refletir quem você é.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* Filter Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedStyle(null)}
              className={`px-6 py-2 uppercase text-sm tracking-widest transition-all duration-200 ${
                selectedStyle === null
                  ? 'bg-accent text-primary'
                  : 'border border-accent text-accent hover:bg-accent hover:text-primary'
              }`}
            >
              Todos
            </button>
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-6 py-2 uppercase text-sm tracking-widest transition-all duration-200 ${
                  selectedStyle === style
                    ? 'bg-accent text-primary'
                    : 'border border-accent text-accent hover:bg-accent hover:text-primary'
                }`}
              >
                {style}
              </button>
            ))}
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
              {filteredPortfolio.length > 0 && (
                <div className="relative w-full h-full">
                  <img
                    src={filteredPortfolio[currentSlide].image}
                    alt={filteredPortfolio[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border border-accent opacity-30" />
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">
                      {filteredPortfolio[currentSlide].title}
                    </h3>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest">
                      {filteredPortfolio[currentSlide].style}
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
              {currentSlide + 1} / {filteredPortfolio.length}
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {filteredPortfolio.map((tattoo, idx) => (
                <button
                  key={tattoo.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative aspect-square overflow-hidden border-2 transition-all duration-200 ${
                    currentSlide === idx ? 'border-accent' : 'border-border hover:border-accent'
                  }`}
                >
                  <img
                    src={tattoo.image}
                    alt={tattoo.title}
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

      {/* Info Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-accent/30 p-8">
              <h3 className="text-2xl font-bold text-accent mb-4">Orçamento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Orçamento pode ser feito online através do WhatsApp. Envie uma foto ou descrição do seu projeto e retornaremos no mesmo dia.
              </p>
            </div>
            <div className="border border-accent/30 p-8">
              <h3 className="text-2xl font-bold text-accent mb-4">Cuidados</h3>
              <p className="text-muted-foreground leading-relaxed">
                A pele deve estar saudável, limpa e hidratada antes da sessão. Evite exposição ao sol e não consuma álcool 24h antes.
              </p>
            </div>
            <div className="border border-accent/30 p-8">
              <h3 className="text-2xl font-bold text-accent mb-4">Criação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Não sabe o que tatuar? Sem problema! Criamos projetos exclusivos e autorais pensados especialmente para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para sua <span className="text-accent">próxima tatuagem</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato e vamos transformar sua ideia em uma obra de arte única na sua pele.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5543988627463"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-primary uppercase text-sm tracking-widest hover:bg-opacity-90 transition-all duration-200"
            >
              Agendar Sessão
            </a>
            <a
              href="https://wa.me/5543988627463"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-accent text-accent uppercase text-sm tracking-widest hover:bg-accent hover:text-primary transition-all duration-200"
            >
              Solicitar Orçamento
            </a>
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
