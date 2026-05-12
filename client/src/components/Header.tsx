import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-destructive/30">
      <nav className="container py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-1">
          <div className="text-2xl md:text-3xl font-bold text-accent tracking-widest">LEO V.</div>
          <div className="text-xs text-muted-foreground uppercase tracking-widest font-light">Tattoo & Art</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
            Início
          </Link>
          <Link href="/tattoos" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
            Tatuagens
          </Link>
          <Link href="/quadros" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
            Quadros
          </Link>
          <Link href="/#contato" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
            Contato
          </Link>
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
            <Link href="/tattoos" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
              Tatuagens
            </Link>
            <Link href="/quadros" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
              Quadros
            </Link>
            <Link href="/#contato" className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300">
              Contato
            </Link>
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
