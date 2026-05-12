import { Link } from 'wouter';
import Header from '@/components/Header';
import Divider from '@/components/Divider';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/pattern-abstract-dark-4YSHvKtDXrQe3EUBVLk6Dt.webp"
            alt="pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent text-sm uppercase tracking-widest mb-8 font-light">Leo V. Freitas</p>
            <h1 className="mb-8 leading-tight">
              Realismo com <span className="text-accent">identidade</span> e propósito
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              Tatuagens em Londrina com traços intensos, autorais e cheios de personalidade. Cada projeto é pensado para refletir quem você é — arte, técnica e autenticidade em cada detalhe.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/tattoos" className="px-8 py-3 border-2 border-accent text-accent uppercase text-sm tracking-widest font-medium hover:bg-accent hover:text-primary transition-all duration-300 text-center">
                Ver Tatuagens
              </Link>
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-primary uppercase text-sm tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300 text-center"
              >
                Agendar Sessão
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* About Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="mb-12">
                <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Sobre</p>
                <h2 className="mb-8">
                  Prazer,<br /><span className="text-accent">Leo Freitas</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Tatuador há mais de 9 anos, especialista em Realismo, Portrait e Blackwork. Nascido em Londrina/PR, desde cedo tive uma forte conexão com as artes. Desenhar e pintar sempre foram minhas principais formas de expressão.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Meu propósito com cada tatuagem é criar algo exclusivo, autoral e verdadeiramente artístico na pele de cada cliente. Quero que cada pessoa que me procura saia com uma obra de arte única — que eleve sua autoestima e traga uma profunda satisfação pessoal.
              </p>
              <p className="text-accent italic text-lg leading-relaxed">
                "A tatuagem é muito mais do que um trabalho para mim — é uma forma de vida, uma paixão que alimenta minha alma artística."
              </p>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp"
                alt="Leo Freitas"
                className="w-full h-auto object-cover border-2 border-destructive"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-destructive opacity-30" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-12 mt-24">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-accent mb-2">9+</p>
              <p className="text-muted-foreground uppercase text-sm tracking-widest">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-accent mb-2">600+</p>
              <p className="text-muted-foreground uppercase text-sm tracking-widest">Trabalhos Realizados</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-accent mb-2">100%</p>
              <p className="text-muted-foreground uppercase text-sm tracking-widest">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Specialties Section */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="mb-20">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Especialidades</p>
            <h2>Técnicas & Estilos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
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
              <div key={idx} className="border-2 border-destructive/40 p-12 hover:border-accent transition-colors duration-300">
                <h3 className="text-2xl font-bold text-accent mb-6">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Portfolio Preview */}
      <section className="py-24 md:py-40">
        <div className="container">
          <div className="mb-20">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Portfólio</p>
            <h2>Trabalhos Selecionados</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Link href="/tattoos" className="group relative overflow-hidden aspect-square">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-tattoo-realistic-WwXBgLfrNBUtSDukeaZ5xo.webp"
                alt="Tatuagens"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center border-2 border-destructive">
                <h3 className="text-4xl font-bold text-accent text-center">Tatuagens</h3>
              </div>
            </Link>
            <Link href="/quadros" className="group relative overflow-hidden aspect-square">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663174737934/AD7j4ZJdmTvG7jXfmqT9Xk/hero-quadro-oleo-cuFMctBA2XtBT8wdfDDpzh.webp"
                alt="Quadros"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center border-2 border-destructive">
                <h3 className="text-4xl font-bold text-accent text-center">Quadros</h3>
              </div>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/tattoos" className="inline-block px-8 py-3 border-2 border-accent text-accent uppercase text-sm tracking-widest font-medium hover:bg-accent hover:text-primary transition-all duration-300">
              Explorar Portfólio Completo
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      {/* Contact Section */}
      <section id="contato" className="py-24 md:py-40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm uppercase tracking-widest mb-4 font-light">Contato</p>
            <h2 className="mb-12">Fale com Leo</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Cada tatuagem é um projeto único e personalizado. Entre em contato para agendar sua sessão, tirar dúvidas ou solicitar um orçamento.
            </p>
            <div className="space-y-6 mb-12 text-lg">
              <p className="text-foreground">
                <span className="text-accent font-medium">Endereço:</span><br />R. Alagoas, 792 - Centro, Londrina - PR, 86010-520
              </p>
              <p className="text-foreground">
                <span className="text-accent font-medium">Telefone/WhatsApp:</span><br />(43) 98862-7463
              </p>
              <p className="text-muted-foreground">Atendimento com horário agendado</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5543988627463"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-primary uppercase text-sm tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Enviar Mensagem
              </a>
              <a
                href="https://maps.google.com/?q=R.+Alagoas,+792,+Londrina,+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-accent text-accent uppercase text-sm tracking-widest font-medium hover:bg-accent hover:text-primary transition-all duration-300"
              >
                Abrir no Maps
              </a>
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
