import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tattooPortfolio = [
  {
    id: 1,
    title: 'Retrato Realista',
    style: 'Realismo',
    image: 'https://pages.greatpages.com.br/www.leovfreitastattoo.com.br/1763480969/imagens/desktop/99336-4a86540b0acd83e9e2c27d8b91fda7c0.JPG'
  },
  {
    id: 2,
    title: 'Portrait em Preto e Cinza',
    style: 'Portrait',
    image: 'https://pages.greatpages.com.br/www.leovfreitastattoo.com.br/1763480969/imagens/desktop/99336-4a86540b0acd83e9e2c27d8b91fda7c0.JPG'
  },
  {
    id: 3,
    title: 'Composição Blackwork',
    style: 'Blackwork',
    image: 'https://pages.greatpages.com.br/www.leovfreitastattoo.com.br/1763480969/imagens/desktop/99336-4a86540b0acd83e9e2c27d8b91fda7c0.JPG'
  },
  {
    id: 4,
    title: 'Homenagem Familiar',
    style: 'Realismo',
    image: 'https://pages.greatpages.com.br/www.leovfreitastattoo.com.br/1763480969/imagens/desktop/99336-4a86540b0acd83e9e2c27d8b91fda7c0.JPG'
  },
  {
    id: 5,
    title: 'Detalhe em Preto',
    style: 'Blackwork',
    image: 'https://pages.greatpages.com.br/www.leovfreitastattoo.com.br/1763480969/imagens/desktop/99336-4a86540b0acd83e9e2c27d8b91fda7c0.JPG'
  },
  {
    id: 6,
    title: 'Retrato Expressivo',
    style: 'Portrait',
    image: 'https://pages.greatpages.com.br/www.leovfreitastattoo.com.br/1763480969/imagens/desktop/99336-4a86540b0acd83e9e2c27d8b91fda7c0.JPG'
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
          <div className="w-full h-full bg-gradient-to-br from-accent/10 to-destructive/5"></div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-accent/30"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-accent/30"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-accent/30"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-accent/30"></div>

        <div className="container relative z-10 text-center max-w-4xl">
          {/* Logo Centralizada - Sem texto acima */}
          <div className="mb-12 animate-fadeInScale" style={{ animationDelay: '0.2s' }}>
            <img
              src="/manus-storage/pasted_file_O64l78_image_68697f9d.png"
              alt="Leo V. Freitas Logo"
              className="h-32 md:h-48 mx-auto mb-12 object-contain"
            />
          </div>

          {/* Subtítulo */}
          <p className="text-accent text-sm uppercase tracking-widest mb-8 font-light animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Tatuagens em Realismo, Portrait e Blackwork
          </p>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            Tatuador especialista em técnicas precisas e autorais. Cada trabalho é uma obra de arte única pensada especialmente para você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow" style={{ animationDelay: '0.9s' }}>
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
      <section id="about" className="py-20 md:py-32">
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
                src="/manus-storage/pasted_file_NuHx6z_image_3d17ea24.png"
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

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Contato Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container">
          <div className="mb-20 text-center">
            <p className="text-accent-sm mb-4">Contato</p>
            <h2>Fale com Leo</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl font-bold text-accent mb-8">Localização</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-accent text-sm uppercase tracking-widest font-light mb-2">Endereço</p>
                  <p className="text-lg text-muted-foreground">R. Alagoas, 792 - Centro</p>
                  <p className="text-lg text-muted-foreground">Londrina - PR, 86010-520</p>
                </div>
                <div>
                  <p className="text-accent text-sm uppercase tracking-widest font-light mb-2">Telefone/WhatsApp</p>
                  <a href="https://wa.me/5543988627463" target="_blank" rel="noopener noreferrer" className="text-lg text-accent hover:text-accent/80 transition-colors">
                    (43) 98862-7463
                  </a>
                </div>
                <div>
                  <p className="text-accent text-sm uppercase tracking-widest font-light mb-2">Horário</p>
                  <p className="text-lg text-muted-foreground">Atendimento com horário agendado</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div>
              <h3 className="text-2xl font-bold text-accent mb-8">Estúdio</h3>
              <div className="w-full h-96 border-2 border-destructive/40 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8194638427047!2d-51.16960!3d-23.3045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f5d3c3c3c3c3c3%3A0x0!2sR.%20Alagoas%2C%20792%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086010-520!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-20 text-center">
            <p className="text-accent-sm mb-4">Dúvidas</p>
            <h2>Perguntas Frequentes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-accent mb-4">Orçamento online?</h3>
              <p className="text-muted-lg">Sim! Orçamento é feito online através do WhatsApp. Envie uma foto ou descrição do seu projeto.</p>
            </div>
            <div className="card-premium">
              <h3 className="text-xl font-bold text-accent mb-4">Tempo de resposta?</h3>
              <p className="text-muted-lg">Entraremos em contato no mesmo dia. Atendimento rápido e profissional garantido.</p>
            </div>
            <div className="card-premium">
              <h3 className="text-xl font-bold text-accent mb-4">O que é Blackwork?</h3>
              <p className="text-muted-lg">Trabalhos em preto com composições marcadas por linhas variadas, traços do mais grosso ao mais fino.</p>
            </div>
            <div className="card-premium">
              <h3 className="text-xl font-bold text-accent mb-4">Cuidados pré-tatuagem?</h3>
              <p className="text-muted-lg">Pele deve estar saudável, limpa e hidratada. Evite sol e álcool 24h antes.</p>
            </div>
            <div className="card-premium">
              <h3 className="text-xl font-bold text-accent mb-4">Você cria projetos?</h3>
              <p className="text-muted-lg">Sim! Todo projeto é exclusivo para cada cliente. Criamos algo especial para você.</p>
            </div>
            <div className="card-premium">
              <h3 className="text-xl font-bold text-accent mb-4">Tatuagem dói?</h3>
              <p className="text-muted-lg">Cada pessoa tem seu nível de dor, porém geralmente todos conseguem tatuar tranquilamente.</p>
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
