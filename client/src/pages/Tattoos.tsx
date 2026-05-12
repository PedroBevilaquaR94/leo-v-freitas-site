import { useState, useEffect } from 'react';
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

      {/* Hero Section - Premium Centralizado */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Geométrico */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-background-geometric-H9RuC8ALez2ctNUDCVjiWH.webp"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-accent/30"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-accent/30"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-accent/30"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-accent/30"></div>

        <div className="container relative z-10 text-center max-w-4xl">
          {/* Nome do Artista */}
          <p className="text-accent text-sm uppercase tracking-widest mb-8 font-light animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Leo V. Freitas
          </p>

          {/* Logo Centralizada - Grande */}
          <div className="mb-12 animate-fadeInScale" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/leo-logo-premium-4RqZqXvPqNjKLDCVmWJJhx.webp"
              alt="Leo V. Freitas Logo"
              className="h-40 md:h-56 mx-auto mb-12"
            />
          </div>

          {/* Subtítulo */}
          <p className="text-accent text-sm uppercase tracking-widest mb-8 font-light animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            Tatuagens em Realismo, Portrait e Blackwork
          </p>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            Tatuador especialista em técnicas precisas e autorais. Cada trabalho é uma obra de arte única pensada especialmente para você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
            <a
              href="https://wa.me/5543988627463"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Sessão
            </a>
            <a
              href="#portfolio"
              className="btn-secondary"
            >
              Ver Trabalhos
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow" style={{ animationDelay: '1.2s' }}>
            <p className="text-accent text-xs uppercase tracking-widest font-light mb-2">Scroll</p>
            <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Sobre Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div className="animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
              <p className="text-accent-sm mb-4">Sobre</p>
              <h2 className="mb-8">
                A Arte na<br />
                <span className="text-accent">Pele</span>
              </h2>
              <p className="text-muted-lg mb-6">
                Leo V. Freitas é um tatuador com mais de 9 anos de experiência, especialista em Realismo, Portrait e Blackwork. Nascido em Londrina/PR, desde cedo desenvolveu uma profunda conexão com as artes, tendo desenho e pintura como suas principais formas de expressão.
              </p>
              <p className="text-muted-lg mb-8">
                Seu propósito com cada tatuagem é criar algo exclusivo, autoral e verdadeiramente artístico. Cada cliente sai com uma obra de arte única que eleva sua autoestima e traz satisfação profunda.
              </p>
              <p className="text-accent italic text-lg">
                "A tatuagem é muito mais do que um trabalho — é uma forma de vida, uma paixão que alimenta minha alma artística."
              </p>
            </div>

            {/* Foto */}
            <div className="relative animate-slideInRight" style={{ animationDelay: '0.2s' }}>
              <img
                src="/home/ubuntu/upload/pasted_file_NuHx6z_image.png"
                alt="Leo Freitas"
                className="w-full h-auto object-cover border-2 border-destructive/40"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-12 mt-24">
            <div className="card-premium text-center">
              <p className="text-5xl md:text-6xl font-bold text-accent mb-2">9+</p>
              <p className="text-muted-foreground text-lg uppercase tracking-widest font-light">Anos de Experiência</p>
            </div>
            <div className="card-premium text-center">
              <p className="text-5xl md:text-6xl font-bold text-accent mb-2">600+</p>
              <p className="text-muted-foreground text-lg uppercase tracking-widest font-light">Trabalhos Realizados</p>
            </div>
            <div className="card-premium text-center">
              <p className="text-5xl md:text-6xl font-bold text-accent mb-2">100%</p>
              <p className="text-muted-foreground text-lg uppercase tracking-widest font-light">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Especialidades Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-20 text-center">
            <p className="text-accent-sm mb-4">Técnicas</p>
            <h2>Especialidades</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-accent mb-6">Realismo</h3>
              <p className="text-muted-lg">
                Tatuagens realistas com foco em detalhes, sombras e texturas que criam profundidade e vida na pele. Cada linha é pensada para máximo impacto visual.
              </p>
            </div>
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-accent mb-6">Portrait</h3>
              <p className="text-muted-lg">
                Retratos precisos de pessoas especiais, capturando expressões e características únicas com maestria. Técnica que exige absoluta precisão e sensibilidade artística.
              </p>
            </div>
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-accent mb-6">Blackwork</h3>
              <p className="text-muted-lg">
                Trabalhos em preto sólido com composições fluidas e alto contraste. Impacto visual máximo com elegância e sofisticação em cada traço.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

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

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Portfolio Carousel Section */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container">
          <div className="mb-20 text-center">
            <p className="text-accent-sm mb-4">Portfólio</p>
            <h2>Trabalhos Selecionados</h2>
          </div>

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

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Info Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-accent mb-6">Orçamento</h3>
              <p className="text-muted-lg">
                Orçamento pode ser feito online através do WhatsApp. Envie uma foto ou descrição do seu projeto e retornaremos no mesmo dia.
              </p>
            </div>
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-accent mb-6">Cuidados</h3>
              <p className="text-muted-lg">
                A pele deve estar saudável, limpa e hidratada antes da sessão. Evite exposição ao sol e não consuma álcool 24h antes.
              </p>
            </div>
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-accent mb-6">Criação</h3>
              <p className="text-muted-lg">
                Não sabe o que tatuar? Sem problema! Criamos projetos exclusivos e autorais pensados especialmente para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <p className="text-accent-sm mb-4">Próximo Passo</p>
          <h2 className="mb-8">
            Pronto para sua<br />
            <span className="text-accent">próxima tatuagem</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Entre em contato e vamos transformar sua ideia em uma obra de arte única na sua pele.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/5543988627463" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar Sessão
            </a>
            <a href="https://wa.me/5543988627463" target="_blank" rel="noopener noreferrer" className="btn-secondary">
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
