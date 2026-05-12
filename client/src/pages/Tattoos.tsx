'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tattooPortfolio = [
  {
    id: 1,
    title: 'Retrato Realista com Cruz',
    style: 'Realismo',
    image: '/manus-storage/Screenshot2026-05-12at16.31.48_65465ba8.png'
  },
  {
    id: 2,
    title: 'Portrait em Cores',
    style: 'Portrait',
    image: '/manus-storage/Screenshot2026-05-12at16.32.31_503dc6a8.png'
  },
  {
    id: 3,
    title: 'Galáxia Colorida',
    style: 'Realismo',
    image: '/manus-storage/Screenshot2026-05-12at16.32.47_ff57ab6e.png'
  },
  {
    id: 4,
    title: 'Retrato Animal Preto e Cinza',
    style: 'Realismo',
    image: '/manus-storage/Screenshot2026-05-12at16.33.06_21d72cd2.png'
  },
  {
    id: 5,
    title: 'Composição Blackwork',
    style: 'Blackwork',
    image: '/manus-storage/Screenshot2026-05-12at16.33.26_776733ef.png'
  },
  {
    id: 6,
    title: 'Retrato Expressivo',
    style: 'Portrait',
    image: '/manus-storage/Screenshot2026-05-12at16.34.15_f20cb0bb.png'
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

      {/* Hero Section - Premium Banner com Logo Simples */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern - Sem texto */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/background-pattern-artistic-ydXnKkJPHhLqZvWmN2pRtX.webp"
            alt="Background Pattern"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-accent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-accent opacity-50"></div>

        <div className="container relative z-10 text-center max-w-4xl">
          {/* Logo Simples e Elegante - Centralizada */}
          <div className="mb-8 animate-fadeInScale" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/leo-logo-simple-JEaKdSZQu54qvAjnXfZxuP.webp"
              alt="Leo V. Freitas Logo"
              className="h-32 md:h-48 mx-auto object-contain drop-shadow-lg"
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            <button className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-serif text-sm uppercase tracking-wider">
              Agendar Sessão
            </button>
            <button className="px-8 py-3 bg-accent text-background hover:opacity-90 transition-all duration-300 font-serif text-sm uppercase tracking-wider">
              Ver Portfólio
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce" style={{ animationDelay: '1s' }}>
            <p className="text-accent text-xs uppercase tracking-widest mb-2">Scroll</p>
            <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Portfólio</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Obras Recentes
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Style Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedStyle(null)}
              className={`px-6 py-2 border-2 transition-all duration-300 font-serif text-sm uppercase tracking-wider ${
                selectedStyle === null
                  ? 'bg-accent text-background border-accent'
                  : 'border-accent text-accent hover:bg-accent hover:text-background'
              }`}
            >
              Todas
            </button>
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-6 py-2 border-2 transition-all duration-300 font-serif text-sm uppercase tracking-wider ${
                  selectedStyle === style
                    ? 'bg-accent text-background border-accent'
                    : 'border-accent text-accent hover:bg-accent hover:text-background'
                }`}
              >
                {style}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg mb-8 aspect-square md:aspect-video">
              <img
                src={filteredPortfolio[currentSlide]?.image}
                alt={filteredPortfolio[currentSlide]?.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 border-2 border-accent opacity-30"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={prevSlide}
                className="p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-2">
                  {filteredPortfolio[currentSlide]?.title}
                </h3>
                <p className="text-accent text-sm uppercase tracking-wider">
                  {filteredPortfolio[currentSlide]?.style}
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  {currentSlide + 1} / {filteredPortfolio.length}
                </p>
              </div>

              <button
                onClick={nextSlide}
                className="p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-2">
              {filteredPortfolio.map((tattoo, index) => (
                <button
                  key={tattoo.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`aspect-square overflow-hidden border-2 transition-all duration-300 ${
                    currentSlide === index
                      ? 'border-accent'
                      : 'border-muted opacity-50 hover:opacity-75'
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

      {/* About Section - Com Foto do Leo */}
      <section className="py-20 md:py-32 bg-card relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto do Leo */}
            <div className="relative animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/manus-storage/pasted_file_NuHx6z_image_d8e2c9f7.png"
                  alt="Leo V. Freitas"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 border-2 border-accent opacity-30"></div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="animate-fadeInRight" style={{ animationDelay: '0.3s' }}>
              <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Sobre</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                Prazer, Leo Freitas
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tatuador há mais de 9 anos, especialista em Realismo, Portrait e Blackwork. Nascido em Londrina/PR, desde cedo tive uma forte conexão com as artes. Desenhar e pintar sempre foram minhas principais formas de expressão.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Meu propósito com cada tatuagem é criar algo exclusivo, autoral e verdadeiramente artístico na pele de cada cliente. Quero que cada pessoa que me procura saia com uma obra de arte única — que eleve sua autoestima e traga uma forma de expressão pessoal.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-8 border-t-2 border-b-2 border-accent border-opacity-20">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent mb-2">9+</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Anos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent mb-2">500+</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Tatuagens</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent mb-2">100%</p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Satisfação</p>
                </div>
              </div>

              <button className="px-8 py-3 bg-accent text-background hover:opacity-90 transition-all duration-300 font-serif text-sm uppercase tracking-wider">
                Agendar Sessão
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Especialidades</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Estilos de Tatuagem
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Realismo',
                description: 'Tatuagens ultra-realistas com detalhes precisos e sombreamento perfeito. Retratos, animais e paisagens com profundidade e textura.'
              },
              {
                title: 'Portrait',
                description: 'Retratos em preto e cinza com foco em expressão e semelhança. Técnica refinada para capturar a essência de cada pessoa.'
              },
              {
                title: 'Blackwork',
                description: 'Composições em preto puro com linhas fortes e geometria. Designs autorais que combinam tradição e modernidade.'
              }
            ].map((style, index) => (
              <div
                key={index}
                className="p-8 border-2 border-accent border-opacity-30 hover:border-opacity-100 transition-all duration-300 text-center"
              >
                <h3 className="text-2xl font-serif font-bold mb-4 text-accent">{style.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Contato</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Vamos Criar Sua Obra
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Informações</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-accent text-sm uppercase tracking-wider mb-2">Endereço</p>
                  <p className="text-muted-foreground">Londrina, Paraná - Brasil</p>
                </div>
                <div>
                  <p className="text-accent text-sm uppercase tracking-wider mb-2">WhatsApp</p>
                  <a href="https://wa.me/5543999999999" className="text-accent hover:text-opacity-80 transition-all">
                    +55 43 9 9999-9999
                  </a>
                </div>
                <div>
                  <p className="text-accent text-sm uppercase tracking-wider mb-2">Instagram</p>
                  <a href="https://instagram.com/leovfreitastattoo" className="text-accent hover:text-opacity-80 transition-all">
                    @leovfreitastattoo
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-80 rounded-lg overflow-hidden border-2 border-accent border-opacity-30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.8468375623397!2d-51.16!3d-23.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f5c0e0e0e0e0e1%3A0x0!2sLondrina%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t-2 border-accent border-opacity-20">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Leo V. Freitas Tattoo Art. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
