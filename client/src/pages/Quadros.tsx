import { useState } from 'react';
import Header from '@/components/Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quadrosPortfolio = [
  {
    id: 1,
    title: 'Leoa Majestosa',
    description: 'Óleo sobre tela • 80 x 60 cm • 2024',
    details: 'Retrato expressivo de uma leoa com olhar penetrante, explorando a força e beleza da natureza selvagem.',
    image: '/manus-storage/pasted_file_zKaKQu_image_43f5289b.png'
  },
  {
    id: 2,
    title: 'Retrato Canino',
    description: 'Óleo sobre tela • 70 x 50 cm • 2024',
    details: 'Composição que captura a lealdade e doçura de um companheiro canino com técnica realista.',
    image: '/manus-storage/pasted_file_OdzX6p_image_a93c33be.png'
  },
  {
    id: 3,
    title: 'Cavalo na Água',
    description: 'Óleo sobre tela • 100 x 70 cm • 2024',
    details: 'Paisagem dinâmica com cavalo em movimento, explorando a interação entre animal e natureza.',
    image: '/manus-storage/pasted_file_HGL7Di_image_87fdc35a.png'
  },
  {
    id: 4,
    title: 'Caveira em Chamas',
    description: 'Óleo sobre tela • 90 x 90 cm • 2024',
    details: 'Composição simbólica com elementos de fogo e morte, criando atmosfera dramática e intensa.',
    image: '/manus-storage/pasted_file_TlFzaa_image_b1190dda.png'
  },
  {
    id: 5,
    title: 'Retrato Ancestral',
    description: 'Carvão sobre papel • 85 x 65 cm • 2024',
    details: 'Desenho expressivo que explora a sabedoria e profundidade através de técnica de carvão.',
    image: '/manus-storage/pasted_file_OpS2JV_image_95d25e0a.png'
  },
  {
    id: 6,
    title: 'Retrato Feminino',
    description: 'Carvão sobre papel • 75 x 55 cm • 2024',
    details: 'Composição delicada que captura a elegância e serenidade através de técnica de carvão fino.',
    image: '/manus-storage/pasted_file_ZNtwqQ_image_9c95c34e.png'
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
      <section className="pt-32 pb-20 md:pb-32 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Galeria de Arte</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
              Quadros & Telas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Obras originais em óleo e carvão. Cada quadro é criado com técnica profissional, explorando composição, luz e detalhes. Disponíveis para encomenda personalizadas com tamanho e tema de sua escolha.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Portfólio</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Coleção Exclusiva
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg mb-8 bg-black/20 p-4">
              <div className="relative overflow-hidden rounded-lg bg-black/40 flex items-center justify-center min-h-[500px] md:min-h-[700px]">
                <img
                  src={quadrosPortfolio[currentSlide]?.image}
                  alt={quadrosPortfolio[currentSlide]?.title}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: '700px' }}
                />
              </div>
              <div className="absolute inset-0 border-2 border-accent opacity-30 rounded-lg m-4"></div>
            </div>

            {/* Title and Details */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-3">
                {quadrosPortfolio[currentSlide]?.title}
              </h3>
              <p className="text-accent text-sm uppercase tracking-widest mb-4">
                {quadrosPortfolio[currentSlide]?.description}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
                {quadrosPortfolio[currentSlide]?.details}
              </p>
              <p className="text-accent text-sm">
                {currentSlide + 1} / {quadrosPortfolio.length}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-12">
              <button
                onClick={prevSlide}
                className="p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="text-center flex-1"></div>
              <button
                onClick={nextSlide}
                className="p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
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
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentSlide
                      ? 'border-accent scale-105'
                      : 'border-accent/50 hover:border-accent'
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

      {/* Técnicas Section */}
      <section className="py-20 md:py-32 bg-background/50 relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Técnicas</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Materiais & Métodos
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Óleo sobre Tela',
                description: 'Técnica clássica que permite camadas ricas de cor e textura, criando profundidade e luminosidade únicos.'
              },
              {
                title: 'Carvão sobre Papel',
                description: 'Técnica expressiva que explora contrastes e detalhes, capturando emoção através de linhas e sombras.'
              }
            ].map((tecnica, index) => (
              <div
                key={index}
                className="p-8 border-2 border-accent border-opacity-20 hover:border-opacity-100 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold text-accent mb-4">{tecnica.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tecnica.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encomendas Section */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Serviços</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Encomendas Personalizadas
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto bg-background/50 border-2 border-accent border-opacity-20 p-8 md:p-12 rounded-lg">
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              Você pode encomendar quadros personalizados com tamanho, técnica e tema de sua escolha. Cada obra é criada exclusivamente para você, respeitando sua visão e preferências artísticas.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Consulta inicial para definir conceito e dimensões</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Esboços e aprovação antes de iniciar a obra</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Processo criativo documentado e compartilhado</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Entrega com certificado de autenticidade</p>
              </div>
            </div>
            <button
              onClick={() => window.open('https://wa.me/5543988627463', '_blank')}
              className="w-full bg-accent text-background font-serif font-bold py-3 px-6 hover:bg-accent/90 transition-all duration-300 uppercase tracking-wider"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
