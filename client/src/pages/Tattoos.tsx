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
  },

];

const coberturasPortfolio = [
  {
    id: 1,
    title: 'Cobertura Leão',
    style: 'Cobertura',
    image: '/manus-storage/pasted_file_DvQ6eq_image_33b4206b.png'
  },
  {
    id: 2,
    title: 'Cobertura Cavalo',
    style: 'Cobertura',
    image: '/manus-storage/pasted_file_wxN8Yh_image_25e02ef8.png'
  },
  {
    id: 3,
    title: 'Cobertura Caveira',
    style: 'Cobertura',
    image: '/manus-storage/pasted_file_J1Mw78_image_d7c88bec.png'
  },
  {
    id: 4,
    title: 'Cobertura Retrato',
    style: 'Cobertura',
    image: '/manus-storage/pasted_file_RVh7sN_image_4d695bbc.png'
  },
  {
    id: 5,
    title: 'Cobertura Abstrata',
    style: 'Cobertura',
    image: '/manus-storage/pasted_file_RDLyHe_image_6d6924e9.png'
  },
  {
    id: 6,
    title: 'Cobertura Geométrica',
    style: 'Cobertura',
    image: '/manus-storage/pasted_file_02LVDT_image_8cdc75d4.png'
  },
  {
    id: 7,
    title: 'Cobertura Tribal',
    style: 'Cobertura',
    image: '/manus-storage/pasted_file_66olnI_image_59973cfa.png'
  },
  {
    id: 8,
    title: 'Cobertura Floral',
    style: 'Cobertura',
    image: '/manus-storage/pasted_file_UVguXP_image_4d0925da.png'
  }
];

export default function Tattoos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCoberturaSlide, setCurrentCoberturaSlide] = useState(0);
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

  const nextCobertura = () => {
    setCurrentCoberturaSlide((prev) => (prev + 1) % coberturasPortfolio.length);
  };

  const prevCobertura = () => {
    setCurrentCoberturaSlide((prev) => (prev - 1 + coberturasPortfolio.length) % coberturasPortfolio.length);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedStyle]);

  const styles = ['Realismo', 'Portrait', 'Blackwork'];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5543988627463', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/leovfreitastattoo', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section - Logo do Leão com Fundo Escuro */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32">
        {/* Background - Fundo muito escuro */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero-banner-leo_0c2ba533.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* Conteúdo Centralizado */}
        <div className="container relative z-10 text-center max-w-5xl px-4 md:px-8 py-8 md:py-12">
          {/* Logo do Leão - Centralizada e Completa */}
          <div className="mb-8 md:mb-12 animate-fadeInScale flex justify-center" style={{ animationDelay: '0.2s' }}>
            <img
              src="/manus-storage/leo-logo-masculine_67cfc420.png"
              alt="Leo V. Freitas Logo"
              className="h-56 sm:h-64 md:h-80 lg:h-96 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Subtítulo */}
          <p className="text-accent text-xs md:text-sm uppercase tracking-widest mb-6 md:mb-8 font-light animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Tatuagens em Realismo, Portrait e Blackwork
          </p>

          {/* Descrição */}
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-14 md:mb-16 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            Tatuador especialista em técnicas precisas e autorais. Cada trabalho é uma obra de arte única pensada especialmente para você.
          </p>

          {/* CTA Buttons - Funcionais */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            <button 
              onClick={handleWhatsApp}
              className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-serif text-sm uppercase tracking-wider"
            >
              Agendar Sessão
            </button>
            <button 
              onClick={handleWhatsApp}
              className="px-8 py-3 bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-serif text-sm uppercase tracking-wider"
            >
              Agendar Agora
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



      {/* Especialidades Section */}
      <section className="py-20 md:py-32 bg-background relative scroll-mt-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto do Leo */}
            <div className="relative animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/manus-storage/pasted_file_NuHx6z_image_456db5dd.png"
                  alt="Leo V. Freitas"
                  className="w-full h-auto object-contain"
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
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Anos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent mb-2">500+</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Tatuagens</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent mb-2">100%</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Satisfação</p>
                </div>
              </div>

              <button 
                onClick={handleWhatsApp}
                className="px-8 py-3 bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-serif text-sm uppercase tracking-wider w-full"
              >
                Agendar Sessão
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-background relative scroll-mt-20">
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
            <div className="relative overflow-hidden rounded-lg mb-8 bg-black/20 p-4">
              <div className="relative overflow-hidden rounded-lg bg-black/40 flex items-center justify-center min-h-[400px] md:min-h-[600px]">
                <img
                  src={filteredPortfolio[currentSlide]?.image}
                  alt={filteredPortfolio[currentSlide]?.title}
                  className="w-full h-full object-contain max-h-[600px] md:max-h-[700px]"
                />
              </div>
              <div className="absolute inset-0 border-2 border-accent opacity-30 rounded-lg m-4"></div>
            </div>

            {/* Title and Style */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                {filteredPortfolio[currentSlide]?.title}
              </h3>
              <p className="text-accent text-sm uppercase tracking-widest">
                {filteredPortfolio[currentSlide]?.style}
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                {currentSlide + 1} / {filteredPortfolio.length}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={prevSlide}
                className="p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto px-4">
                {filteredPortfolio.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex-shrink-0 w-16 h-16 border-2 transition-all duration-300 ${
                      index === currentSlide
                        ? 'border-accent'
                        : 'border-accent border-opacity-30 hover:border-opacity-100'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coberturas Section */}
      <section className="py-20 md:py-32 bg-background relative scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Especializações</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Coberturas
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Coberturas Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg mb-8 bg-black/20 p-4">
              <div className="relative overflow-hidden rounded-lg bg-black/40 flex items-center justify-center min-h-[400px] md:min-h-[600px]">
                <img
                  src={coberturasPortfolio[currentCoberturaSlide]?.image}
                  alt={coberturasPortfolio[currentCoberturaSlide]?.title}
                  className="w-full h-full object-contain max-h-[600px] md:max-h-[700px]"
                />
              </div>
              <div className="absolute inset-0 border-2 border-accent opacity-30 rounded-lg m-4"></div>
            </div>

            {/* Title and Style */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                {coberturasPortfolio[currentCoberturaSlide]?.title}
              </h3>
              <p className="text-accent text-sm uppercase tracking-widest">
                Cobertura
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                {currentCoberturaSlide + 1} / {coberturasPortfolio.length}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={prevCobertura}
                className="p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="text-center flex-1"></div>
              <button
                onClick={nextCobertura}
                className="p-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
              {coberturasPortfolio.map((cobertura, index) => (
                <button
                  key={cobertura.id}
                  onClick={() => setCurrentCoberturaSlide(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentCoberturaSlide
                      ? 'border-accent scale-105'
                      : 'border-accent/50 hover:border-accent'
                  }`}
                >
                  <img
                    src={cobertura.image}
                    alt={cobertura.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 md:py-32 bg-background/50 relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Especialidades</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Meus Estilos
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Realismo',
                description: 'Tatuagens hiper-realistas com detalhes precisos e sombreamento profundo.'
              },
              {
                title: 'Portrait',
                description: 'Retratos expressivos que capturam a essência e emoção do rosto.'
              },
              {
                title: 'Blackwork',
                description: 'Composições geométricas e abstratas em preto intenso e detalhado.'
              }
            ].map((style, index) => (
              <div
                key={index}
                className="p-8 border-2 border-accent border-opacity-20 hover:border-opacity-100 transition-all duration-300 text-center"
              >
                <h3 className="text-2xl font-serif font-bold text-accent mb-4">{style.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background/50 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Dúvidas Frequentes
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group border border-accent/30 rounded-lg overflow-hidden hover:border-accent/60 transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-background/50 group-open:bg-background">
                <span className="text-lg font-medium text-foreground">Orçamento pode ser feito online?</span>
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-accent/20">
                Sim! Você pode enviar fotos, descrever a ideia e receber um orçamento sem compromisso. Também oferecemos consulta presencial para discutir detalhes.
              </div>
            </details>

            <details className="group border border-accent/30 rounded-lg overflow-hidden hover:border-accent/60 transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-background/50 group-open:bg-background">
                <span className="text-lg font-medium text-foreground">Qual o tempo de resposta?</span>
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-accent/20">
                Respondemos em até 24 horas via WhatsApp ou email. Para consultas mais complexas, agendamos uma conversa direta.
              </div>
            </details>

            <details className="group border border-accent/30 rounded-lg overflow-hidden hover:border-accent/60 transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-background/50 group-open:bg-background">
                <span className="text-lg font-medium text-foreground">O que é Blackwork?</span>
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-accent/20">
                Blackwork é um estilo de tatuagem que utiliza apenas tinta preta em diferentes tonalidades e densidades. Cria designs geométricos, tribais e abstratos com forte impacto visual.
              </div>
            </details>

            <details className="group border border-accent/30 rounded-lg overflow-hidden hover:border-accent/60 transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-background/50 group-open:bg-background">
                <span className="text-lg font-medium text-foreground">Que cuidados exigem a pele antes de ser tatuada?</span>
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-accent/20">
                A pele deve estar hidratada, limpa e sem ferimentos. Evite sol, bebidas alcoólicas 24h antes e durma bem. Não faça tatuagem em pele inflamada ou com problemas dermatológicos.
              </div>
            </details>

            <details className="group border border-accent/30 rounded-lg overflow-hidden hover:border-accent/60 transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-background/50 group-open:bg-background">
                <span className="text-lg font-medium text-foreground">Você dá Workshop particular?</span>
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-accent/20">
                Sim! Oferecemos workshops particulares para interessados em aprender técnicas de tatuagem. Entre em contato para mais informações e disponibilidade.
              </div>
            </details>

            <details className="group border border-accent/30 rounded-lg overflow-hidden hover:border-accent/60 transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-background/50 group-open:bg-background">
                <span className="text-lg font-medium text-foreground">Tatuagem dói?</span>
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-accent/20">
                Sim, tatuagem causa incômodo, mas o nível de dor varia conforme a localização, tamanho e sensibilidade individual. A maioria das pessoas relata ser tolerável.
              </div>
            </details>

            <details className="group border border-accent/30 rounded-lg overflow-hidden hover:border-accent/60 transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-background/50 group-open:bg-background">
                <span className="text-lg font-medium text-foreground">Não sei o que tatuar, você cria o meu projeto?</span>
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-accent/20">
                Claro! Podemos conversar sobre suas ideias, gostos e significados. Vou criar um design personalizado que reflita sua personalidade e visão.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-background relative scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Contato</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Vamos Criar Sua Arte
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <p className="text-accent text-sm uppercase tracking-widest mb-2 font-light">Localização</p>
              <p className="text-foreground font-serif text-lg">R. Alagoas, 792 - Centro</p>
              <p className="text-foreground font-serif text-lg">Londrina - PR, 86010-520</p>
            </div>
            <div className="text-center">
              <p className="text-accent text-sm uppercase tracking-widest mb-2 font-light">WhatsApp</p>
              <button
                onClick={handleWhatsApp}
                className="text-foreground font-serif text-lg hover:text-accent transition-colors duration-300"
              >
                (43) 98862-7463
              </button>
            </div>
            <div className="text-center">
              <p className="text-accent text-sm uppercase tracking-widest mb-2 font-light">Instagram</p>
              <button
                onClick={handleInstagram}
                className="text-foreground font-serif text-lg hover:text-accent transition-colors duration-300"
              >
                @leovfreitastattoo
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 rounded-lg overflow-hidden border-2 border-accent border-opacity-30">
            <iframe
              width="100%"
              height="400"
              frameBorder={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5432109876543!2d-51.4609!3d-23.3045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f4d4d4d4d4d4d5%3A0x1234567890abcdef!2sR.%20Alagoas%2C%20792%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086010-520!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          <div className="text-center">
            <button
              onClick={handleWhatsApp}
              className="px-8 py-3 bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-serif text-sm uppercase tracking-wider"
            >
              Agendar Sessão
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
