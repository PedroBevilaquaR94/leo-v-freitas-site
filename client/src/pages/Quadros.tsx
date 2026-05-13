import { useState } from 'react';
import Header from '@/components/Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quadrosPortfolio = [
  {
    id: 1,
    title: 'Composição Geométrica',
    description: 'Óleo sobre tela • 80 x 60 cm • 2024',
    details: 'Abstração com formas geométricas em tons vermelhos, dourados e pretos, explorando harmonia e contraste.',
    image: '/manus-storage/pasted_file_5oy6eL_image_1_0a1b2c3d.png'
  },
  {
    id: 2,
    title: 'Paisagem Costeira',
    description: 'Óleo sobre tela • 100 x 70 cm • 2024',
    details: 'Composição de paisagem com vista para o mar, explorando a interação entre luz natural e sombra.',
    image: '/manus-storage/pasted_file_5oy6eL_image_2_1b2c3d4e.png'
  },
  {
    id: 3,
    title: 'Composição Abstrata',
    description: 'Óleo sobre tela • 90 x 90 cm • 2024',
    details: 'Trabalho abstrato com cores quentes e frias, criando movimento e profundidade visual.',
    image: '/manus-storage/pasted_file_5oy6eL_image_3_2c3d4e5f.png'
  },
  {
    id: 4,
    title: 'Retrato Expressivo',
    description: 'Óleo sobre tela • 70 x 50 cm • 2024',
    details: 'Retrato que captura a essência e emoção através de técnica expressionista.',
    image: '/manus-storage/pasted_file_5oy6eL_image_4_3d4e5f6g.png'
  },
  {
    id: 5,
    title: 'Composição Dinâmica',
    description: 'Óleo sobre tela • 85 x 65 cm • 2024',
    details: 'Trabalho que explora movimento e energia através de formas e cores vibrantes.',
    image: '/manus-storage/pasted_file_5oy6eL_image_5_4e5f6g7h.png'
  },
  {
    id: 6,
    title: 'Paisagem Mediterrânea',
    description: 'Óleo sobre tela • 95 x 75 cm • 2024',
    details: 'Inspiração em paisagens mediterrâneas com elementos arquitetônicos e natureza.',
    image: '/manus-storage/pasted_file_5oy6eL_image_6_5f6g7h8i.png'
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
      <section className="py-20 md:py-32 bg-gradient-to-b from-black/80 to-background relative">
        <div className="container">
          <div className="text-center mb-8">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Portfólio</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
              Quadros & Telas a Óleo
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Além de tatuador, sou pintor e desenhista. Pinturas em quadros e telas com tinta a óleo — um trabalho extremamente prazeroso que combina técnica, expressão artística e dedicação ao detalhe.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-8 bg-background">
        <div className="container text-center">
          <p className="text-accent text-2xl">◆ ◆ ◆</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-background relative scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Sobre</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Arte em Tela
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A pintura a óleo é uma extensão natural da minha expressão artística. Cada tela é um trabalho cuidadoso onde combino técnica tradicional com visão contemporânea, criando peças únicas que transmitem emoção, movimento e profundidade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meus quadros exploram a interação entre luz e sombra, cores quentes e frias, e composições que convidam o observador a uma jornada visual. Cada pintura é uma oportunidade de criar algo verdadeiramente artístico e memorável.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-8 bg-background">
        <div className="container text-center">
          <p className="text-accent text-2xl">◆ ◆ ◆</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-background relative scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Galeria
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg mb-8 bg-black/20 p-4">
              <div className="relative overflow-hidden rounded-lg bg-black/40 flex items-center justify-center min-h-[400px] md:min-h-[600px]">
                <img
                  src={quadrosPortfolio[currentSlide]?.image}
                  alt={quadrosPortfolio[currentSlide]?.title}
                  className="w-full h-full object-contain max-h-[600px] md:max-h-[700px]"
                />
              </div>
              <div className="absolute inset-0 border-2 border-accent opacity-30 rounded-lg m-4"></div>
            </div>

            {/* Title and Details */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                {quadrosPortfolio[currentSlide]?.title}
              </h3>
              <p className="text-accent text-sm uppercase tracking-wider mb-4">
                {quadrosPortfolio[currentSlide]?.description}
              </p>
              <p className="text-muted-foreground">
                {quadrosPortfolio[currentSlide]?.details}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="text-center">
                <p className="text-accent text-sm">{currentSlide + 1} / {quadrosPortfolio.length}</p>
              </div>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
              {quadrosPortfolio.map((quadro, index) => (
                <button
                  key={quadro.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentSlide
                      ? 'border-accent scale-110'
                      : 'border-accent/30 hover:border-accent/60'
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
      <section className="py-8 bg-background">
        <div className="container text-center">
          <p className="text-accent text-2xl">◆ ◆ ◆</p>
        </div>
      </section>

      {/* Técnicas Section */}
      <section className="py-20 md:py-32 bg-background relative scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Técnicas</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Técnicas & Materiais
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 border-2 border-accent border-opacity-20 hover:border-opacity-100 transition-all duration-300">
              <h3 className="text-2xl font-serif font-bold text-accent mb-4">Óleo sobre Tela</h3>
              <p className="text-muted-foreground leading-relaxed">
                A técnica tradicional de pintura a óleo permite criar camadas ricas de cor, texturas profundas e efeitos de luz que capturam a essência de cada composição. Cada pintura é um processo meditativo e expressivo que requer paciência e dedicação.
              </p>
            </div>

            <div className="p-8 border-2 border-accent border-opacity-20 hover:border-opacity-100 transition-all duration-300">
              <h3 className="text-2xl font-serif font-bold text-accent mb-4">Materiais Premium</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizo tintas a óleo de alta qualidade, telas profissionais e pincéis selecionados para garantir que cada obra tenha durabilidade, vibração de cores e acabamento impecável. Cada material é escolhido cuidadosamente para a melhor qualidade final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-8 bg-background">
        <div className="container text-center">
          <p className="text-accent text-2xl">◆ ◆ ◆</p>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-20 md:py-32 bg-background relative scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Processo</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Meu Processo Criativo
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Conceito', description: 'Desenvolvimento da ideia, esboços e planejamento da composição e paleta de cores.' },
              { number: '02', title: 'Preparação', description: 'Preparação da tela, primer e desenho base para guiar a pintura.' },
              { number: '03', title: 'Execução', description: 'Aplicação de camadas de óleo, trabalhando luz, sombra e detalhes com precisão.' },
              { number: '04', title: 'Acabamento', description: 'Refinamento final, verniz protetor e apresentação da obra completa.' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-serif font-bold text-accent mb-4">{step.number}</div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-8 bg-background">
        <div className="container text-center">
          <p className="text-accent text-2xl">◆ ◆ ◆</p>
        </div>
      </section>

      {/* Encomendas Section */}
      <section className="py-20 md:py-32 bg-background relative scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Encomendas</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Projetos Personalizados
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Você pode encomendar quadros personalizados. Trabalho com você para entender sua visão, estilo preferido e necessidades específicas, criando uma obra única que reflita sua personalidade e espaço.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cada encomenda é tratada como um projeto artístico exclusivo, com consultoria sobre tamanho, técnica, paleta de cores e conceito. Posso criar desde retratos até composições abstratas totalmente personalizadas.
            </p>

            <a
              href="https://wa.me/5543988627463"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-serif text-sm uppercase tracking-wider"
            >
              Solicitar Encomenda
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
