import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Divider from '@/components/Divider';
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
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="container">
          <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Portfólio</p>
          <h1 className="mb-8">
            Tatuagens em <span className="text-accent">Realismo</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Especialista em tatuagens realistas, portraits e blackwork. Cada trabalho é uma obra de arte única, pensada para refletir quem você é.
          </p>
        </div>
      </section>

      <Divider />

      {/* Filter Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedStyle(null)}
              className={`px-6 py-3 uppercase text-sm tracking-widest font-medium transition-all duration-300 ${
                selectedStyle === null
                  ? 'bg-accent text-primary'
                  : 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
              }`}
            >
              Todos
            </button>
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-6 py-3 uppercase text-sm tracking-widest font-medium transition-all duration-300 ${
                  selectedStyle === style
                    ? 'bg-accent text-primary'
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
                }`}
              >
                {style}
              </button>
            ))}
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
              {filteredPortfolio.length > 0 && (
                <div className="relative w-full h-full">
                  <img
                    src={filteredPortfolio[currentSlide].image}
                    alt={filteredPortfolio[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  
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
              {currentSlide + 1} / {filteredPortfolio.length}
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {filteredPortfolio.map((tattoo, idx) => (
                <button
                  key={tattoo.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative aspect-square overflow-hidden border-2 transition-all duration-300 ${
                    currentSlide === idx ? 'border-accent' : 'border-destructive/40 hover:border-accent'
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

      <Divider />

      {/* Info Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border-2 border-destructive/40 p-12 hover:border-accent transition-colors duration-300">
              <h3 className="text-2xl font-bold text-accent mb-6">Orçamento</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Orçamento pode ser feito online através do WhatsApp. Envie uma foto ou descrição do seu projeto e retornaremos no mesmo dia.
              </p>
            </div>
            <div className="border-2 border-destructive/40 p-12 hover:border-accent transition-colors duration-300">
              <h3 className="text-2xl font-bold text-accent mb-6">Cuidados</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A pele deve estar saudável, limpa e hidratada antes da sessão. Evite exposição ao sol e não consuma álcool 24h antes.
              </p>
            </div>
            <div className="border-2 border-destructive/40 p-12 hover:border-accent transition-colors duration-300">
              <h3 className="text-2xl font-bold text-accent mb-6">Criação</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Não sabe o que tatuar? Sem problema! Criamos projetos exclusivos e autorais pensados especialmente para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA Section */}
      <section className="py-24 md:py-40">
        <div className="container text-center">
          <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Próximo Passo</p>
          <h2 className="mb-8">
            Pronto para sua <span className="text-accent">próxima tatuagem</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Entre em contato e vamos transformar sua ideia em uma obra de arte única na sua pele.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/5543988627463"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-primary uppercase text-sm tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Agendar Sessão
            </a>
            <a
              href="https://wa.me/5543988627463"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-accent text-accent uppercase text-sm tracking-widest font-medium hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Solicitar Orçamento
            </a>
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
