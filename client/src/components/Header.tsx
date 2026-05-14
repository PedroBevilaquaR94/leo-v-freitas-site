import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-destructive/30">
      <nav className="container py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="text-accent font-bold text-xl tracking-widest">
            LEO<br className="hidden" /> FREITAS
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
            Início
          </Link>
          <a href="#about" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
            Sobre
          </a>
          <a href="#portfolio" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
            Portfólio
          </a>
          <Link href="/quadros" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
            Quadros
          </Link>
          <a href="#contact" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
            Contato
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5543988627463"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-accent text-accent text-xs uppercase tracking-widest font-medium hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Agendar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-destructive/30 bg-background">
          <div className="container py-6 flex flex-col gap-6">
            <Link href="/" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
              Início
            </Link>
            <a href="#about" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
              Sobre
            </a>
            <a href="#portfolio" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
              Portfólio
            </a>
            <Link href="/quadros" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
              Quadros
            </Link>
            <a href="#contact" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
              Contato
            </a>
            <a
              href="https://wa.me/5543988627463"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-accent text-accent text-xs uppercase tracking-widest font-medium hover:bg-accent hover:text-primary transition-all duration-300 text-center"
            >
              Agendar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
