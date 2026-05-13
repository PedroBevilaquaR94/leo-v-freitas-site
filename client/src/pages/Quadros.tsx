import { useState } from 'react';
import Header from '@/components/Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quadrosPortfolio = [
  {
    id: 1,
    title: 'Composição Geométrica',
    technique: 'Óleo sobre tela',
    size: '80 x 60 cm',
    year: '2024',
    description: 'Abstração com formas geométricas em tons vermelhos, dourados e pretos, explorando harmonia e contraste.',
    image: '/manus-storage/pasted_file_5oy6eL_image_7bf32d64.png'
  },
  {
    id: 2,
    title: 'Paisagem Mediterrânea',
    technique: 'Óleo sobre tela',
    size: '100 x 70 cm',
    year: '2024',
    description: 'Paisagem ao pôr do sol com montanhas e arquitetura, capturando luz dourada e serenidade.',
    image: '/manus-storage/pasted_file_5oy6eL_image_7bf32d64.png'
  },
  {
    id: 3,
    title: 'Composição Expressiva',
    technique: 'Óleo sobre tela',
    size: '90 x 70 cm',
    year: '2024',
    description: 'Obra abstrata expressionista com cores vibrantes e formas dinâmicas que transmitem movimento e energia.',
    image: '/manus-storage/pasted_file_5oy6eL_image_7bf32d64.png'
  },
  {
    id: 4,
    title: 'Retrato Feminino',
    technique: 'Óleo sobre tela',
    size: '85 x 65 cm',
    year: '2024',
    description: 'Retrato expressivo de mulher com técnica de luz e sombra, capturando emoção e profundidade.',
    image: '/manus-storage/pasted_file_5oy6eL_image_7bf32d64.png'
  },
  {
    id: 5,
    title: 'Paisagem Dramática',
    technique: 'Óleo sobre tela',
    size: '95 x 75 cm',
    year: '2024',
    description: 'Composição com tons quentes e frios, explorando dramaticidade e movimento através da paisagem.',
    image: '/manus-storage/pasted_file_5oy6eL_image_7bf32d64.png'
  },
  {
    id: 6,
    title: 'Paisagem Serena',
    technique: 'Óleo sobre tela',
    size: '100 x 70 cm',
    year: '2024',
    description: 'Paisagem com montanhas e arquitetura em tons quentes, transmitindo paz e contemplação.',
    image: '/manus-storage/pasted_file_5oy6eL_image_7bf32d64.png'
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
            <h2 className="mb-12">Arte em Tela</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A pintura a óleo é uma extensão natural da minha expressão artística. Cada tela é um trabalho cuidadoso onde combino técnica tradicional com visão contemporânea, criando peças únicas que transmitem emoção, movimento e profundidade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
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
          <div className="max-w-5xl mx-auto">
            {/* Main Image */}
            <div className="mb-12 md:mb-16 relative group">
              <div className="relative overflow-hidden rounded-lg border-2 border-accent/30 hover:border-accent/60 transition-colors duration-300">
                <img
                  src={quadrosPortfolio[currentSlide].image}
                  alt={quadrosPortfolio[currentSlide].title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                {/* Overlay com informações */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-serif text-accent mb-2">
                    {quadrosPortfolio[currentSlide].title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {quadrosPortfolio[currentSlide].technique} • {quadrosPortfolio[currentSlide].size} • {quadrosPortfolio[currentSlide].year}
                  </p>
                  <p className="text-gray-200 text-sm md:text-base">
                    {quadrosPortfolio[currentSlide].description}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mb-8 text-accent text-sm">
              {currentSlide + 1} / {quadrosPortfolio.length}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 justify-center flex-wrap">
              {quadrosPortfolio.map((quadro, index) => (
                <button
                  key={quadro.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg border-2 overflow-hidden transition-all duration-300 ${
                    index === currentSlide
                      ? 'border-accent scale-105'
                      : 'border-accent/30 hover:border-accent/60 opacity-70 hover:opacity-100'
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
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Techniques Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light text-center">Técnicas</p>
            <h2 className="text-center mb-16">Técnicas & Materiais</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-serif text-accent mb-4">Óleo sobre Tela</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A técnica tradicional de pintura a óleo permite criar camadas ricas de cor, texturas profundas e efeitos de luz que capturam a essência de cada composição. Cada pintura é um processo meditativo e expressivo que requer paciência e dedicação.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-accent mb-4">Materiais Premium</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizo tintas a óleo de alta qualidade, telas profissionais e pincéis selecionados para garantir que cada obra tenha durabilidade, vibração de cores e acabamento impecável. Cada material é escolhido cuidadosamente para a melhor qualidade final.
                </p>
              </div>
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
          <div className="max-w-3xl mx-auto">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light text-center">Processo</p>
            <h2 className="text-center mb-16">Meu Processo Criativo</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Conceito', desc: 'Desenvolvimento da ideia, esboços e planejamento da composição e paleta de cores.' },
                { num: '02', title: 'Preparação', desc: 'Preparação da tela, primer e desenho base para guiar a pintura.' },
                { num: '03', title: 'Execução', desc: 'Aplicação de camadas de óleo, trabalhando luz, sombra e detalhes com precisão.' },
                { num: '04', title: 'Acabamento', desc: 'Refinamento final, verniz protetor e apresentação da obra completa.' }
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <p className="text-3xl font-serif text-accent mb-3">{step.num}</p>
                  <h3 className="text-lg font-serif mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container my-12 md:my-20 text-center">
        <p className="text-accent text-sm">◆ ◆ ◆</p>
      </div>

      {/* Commissions Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Encomendas</p>
            <h2 className="mb-8">Projetos Personalizados</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Você pode encomendar quadros personalizados. Trabalho com você para entender sua visão, estilo preferido e necessidades específicas, criando uma obra única que reflita sua personalidade e espaço.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Cada encomenda é tratada como um projeto artístico exclusivo, com consultoria sobre tamanho, técnica, paleta de cores e conceito. Posso criar desde retratos até composições abstratas totalmente personalizadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-serif text-sm uppercase tracking-wider"
              >
                Solicitar Encomenda
              </a>
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-serif text-sm uppercase tracking-wider"
              >
                Conversar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
