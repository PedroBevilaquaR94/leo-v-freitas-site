import { Link } from 'wouter';
import Header from '@/components/Header';

export default function Home() {
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
          <div className="max-w-2xl">
            <p className="text-accent text-sm uppercase tracking-widest mb-4">Leo V. Freitas</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Realismo com <span className="text-accent">identidade</span> e propósito
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tatuagens em Londrina com traços intensos, autorais e cheios de personalidade. Cada projeto é pensado para refletir quem você é — arte, técnica e autenticidade em cada detalhe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tattoos" className="px-8 py-3 border border-accent text-accent uppercase text-sm tracking-widest hover:bg-accent hover:text-primary transition-all duration-200 text-center">
                Ver Tatuagens
              </Link>
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-primary uppercase text-sm tracking-widest hover:bg-opacity-90 transition-all duration-200 text-center"
              >
                Agendar Sessão
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* About Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prazer, <span className="text-accent">Leo Freitas</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Tatuador há mais de 9 anos, especialista em Realismo, Portrait e Blackwork. Nascido em Londrina/PR, desde cedo tive uma forte conexão com as artes. Desenhar e pintar sempre foram minhas principais formas de expressão.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Meu propósito com cada tatuagem é criar algo exclusivo, autoral e verdadeiramente artístico na pele de cada cliente. Quero que cada pessoa que me procura saia com uma obra de arte única — que eleve sua autoestima e traga uma profunda satisfação pessoal.
              </p>
              <p className="text-accent italic">
                "A tatuagem é muito mais do que um trabalho para mim — é uma forma de vida, uma paixão que alimenta minha alma artística."
              </p>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp"
                alt="Leo Freitas"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border border-accent opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Especialidades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Realismo',
                description: 'Tatuagens realistas com foco em detalhes, sombras e texturas que criam profundidade e vida na pele.'
              },
              {
                title: 'Portrait',
                description: 'Retratos precisos de pessoas especiais, capturando expressões e características únicas com maestria.'
              },
              {
                title: 'Blackwork',
                description: 'Trabalhos em preto sólido com composições fluidas e alto contraste, criando impacto visual máximo.'
              }
            ].map((service, idx) => (
              <div key={idx} className="border border-accent/30 p-8 hover:border-accent transition-colors duration-200">
                <h3 className="text-2xl font-bold mb-4 text-accent">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* Portfolio Preview Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Portfólio</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Link href="/tattoos" className="group relative overflow-hidden aspect-square">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp"
                alt="Tatuagens"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-accent text-center">Tatuagens</h3>
              </div>
            </Link>
            <Link href="/quadros" className="group relative overflow-hidden aspect-square">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-quadro-oleo-cuFMctBA2XtBT8wdfDDpzh.webp"
                alt="Quadros"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-accent text-center">Quadros & Telas</h3>
              </div>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Confira a galeria completa de trabalhos realizados</p>
            <Link href="/tattoos" className="inline-block px-8 py-3 border border-accent text-accent uppercase text-sm tracking-widest hover:bg-accent hover:text-primary transition-all duration-200">
              Explorar Portfólio
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Fale com Leo</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Cada tatuagem é um projeto único e personalizado. Entre em contato para agendar sua sessão, tirar dúvidas ou solicitar um orçamento.
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-foreground">
                <span className="text-accent font-bold">Endereço:</span> R. Alagoas, 792 - Centro, Londrina - PR, 86010-520
              </p>
              <p className="text-foreground">
                <span className="text-accent font-bold">Telefone/WhatsApp:</span> (43) 98862-7463
              </p>
              <p className="text-muted-foreground">Atendimento com horário agendado</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-primary uppercase text-sm tracking-widest hover:bg-opacity-90 transition-all duration-200"
              >
                Enviar Mensagem
              </a>
              <a
                href="https://maps.google.com/?q=R.+Alagoas,+792,+Londrina,+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-accent text-accent uppercase text-sm tracking-widest hover:bg-accent hover:text-primary transition-all duration-200"
              >
                Abrir no Maps
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
