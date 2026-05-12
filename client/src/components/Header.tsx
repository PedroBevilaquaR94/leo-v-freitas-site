import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-accent tracking-wider">LEO V.</div>
          <div className="text-xs text-muted-foreground uppercase tracking-widest">Tattoo & Art</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
            Início
          </Link>
          <Link href="/tattoos" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
            Tatuagens
          </Link>
          <Link href="/quadros" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
            Quadros
          </Link>
          <Link href="/#contato" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
            Contato
          </Link>
          <a
            href="https://wa.me/5543988627463"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-accent text-accent text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-200"
          >
            Agendar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
              Início
            </Link>
            <Link href="/tattoos" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
              Tatuagens
            </Link>
            <Link href="/quadros" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
              Quadros
            </Link>
            <Link href="/#contato" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
              Contato
            </Link>
            <a
              href="https://wa.me/5543988627463"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-accent text-accent text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-200"
            >
              Agendar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
