# Ideias de Design — Leo V. Freitas Tattoo & Art

## Contexto

Criar um site premium para Leo V. Freitas, tatuador especialista em **Realismo, Portrait e Blackwork**, com duas páginas principais: **Tatuagens** e **Quadros**. O site deve inspirar-se no estilo visual do Mu7 Tattoo (escuro, minimalista, cinematográfico) mas com identidade própria do Leo.

---

## Resposta 1: Elegância Noir com Acentos Dourados

**Design Movement:** Luxo Noir Contemporâneo — inspirado em galerias de arte moderna e estúdios de tatuagem de alta gama.

**Core Principles:**
- Minimalismo sofisticado: espaço negativo generoso, tipografia elegante, sem ruído visual.
- Contraste dramático: preto profundo com acentos dourados e vermelhos subtis (homenagem ao site antigo).
- Fotografia como protagonista: imagens de tatuagens e quadros ocupam espaço central, sem competição.
- Navegação intuitiva: transições suaves entre páginas, carrossel fluido, sem distrações.

**Color Philosophy:**
- Fundo: `#0a0a0a` (preto profundo, quase carbono).
- Texto primário: `#f5f5f5` (branco quente, não puro).
- Acentos: `#d4af37` (dourado clássico) para CTAs e destaques.
- Vermelho subtil: `#8b0000` (marrom-vermelho) para linhas divisórias e ênfase ocasional.
- Razão: Evoca sofisticação, autoridade artística e exclusividade.

**Layout Paradigm:**
- Hero assimétrico: imagem de tatuagem/quadro à direita (grande), texto à esquerda (compacto).
- Carrossel de portfólio: galeria em grid 2-3 colunas com hover que revela detalhes.
- Seção "Sobre": texto em coluna única, alinhado à esquerda, com citação destacada em dourado.
- Rodapé: contacto minimalista com ícones dourados.

**Signature Elements:**
- Linha divisória dourada horizontal entre secções (1px, delicada).
- Ícones de tatuagem/arte em dourado nos títulos de secção.
- Cartões de portfólio com overlay escuro ao hover, revelando título e estilo.

**Interaction Philosophy:**
- Hover subtil: cartões ganham brilho dourado suave, sem escala agressiva.
- Transições: fade-in ao scroll, carrossel com swipe suave.
- CTAs: botões com contorno dourado, preenchimento ao hover, transição 200ms.

**Animation:**
- Entrada de página: fade-in + slide suave (300ms ease-out).
- Carrossel: transição de 400ms entre slides, easing suave.
- Hover em cartões: brilho dourado (opacity 0.1 → 0.2, 200ms).
- Scroll reveal: elementos ganham opacidade e translateY suave conforme entram na viewport.

**Typography System:**
- Display: `Playfair Display` (serif elegante, 48-64px) para títulos principais.
- Heading: `Playfair Display` (36-42px) para secções.
- Body: `Lato` (sans-serif legível, 16px) para texto corrido.
- Accent: `Playfair Display` (24px, dourado) para citações e destaques.
- Hierarquia: títulos em maiúsculas espaçadas, corpo em sentença normal.

**Probability:** 0.08

---

## Resposta 2: Modernismo Geométrico com Texturas Orgânicas

**Design Movement:** Brutalismo Digital — formas geométricas precisas combinadas com texturas naturais e imperfeições artísticas.

**Core Principles:**
- Geometria intencional: grids, linhas, ângulos 45°, formas assimétricas.
- Texturas artísticas: ruído, padrões de pintura, efeito aquarela em backgrounds.
- Tipografia ousada: sans-serif geométrica com pesos variados.
- Movimento controlado: animações que reforçam a geometria (rotações, skews, clips).

**Color Philosophy:**
- Fundo: `#1a1a1a` (cinzento muito escuro, não puro preto).
- Texto: `#e8e8e8` (cinzento claro).
- Primário: `#ff6b35` (laranja queimado, energia artística).
- Secundário: `#004e89` (azul profundo, sofisticação).
- Terciário: `#9d4edd` (roxo vibrante, criatividade).
- Razão: Combina energia moderna com profundidade artística.

**Layout Paradigm:**
- Hero com clip-path diagonal: imagem de tatuagem em ângulo 45°, texto em bloco geométrico.
- Portfólio em masonry assimétrico: cartões de tamanhos variados, alguns rotacionados 2-3°.
- Seção "Sobre": coluna dupla com separador visual geométrico.
- Carrossel: transições com skew e rotate, não apenas fade.

**Signature Elements:**
- Linhas diagonais como divisórias entre secções.
- Cartões com clip-path em ângulos variados.
- Ícones geométricos (círculos, quadrados, triângulos) em laranja.
- Padrão de ruído/textura em backgrounds.

**Interaction Philosophy:**
- Hover: rotação suave (2-5°), escala (1.02x), mudança de cor primária.
- Clique: feedback imediato com scale (0.97x) e cor mais vibrante.
- Navegação: transições com skew horizontal (10-15°).

**Animation:**
- Entrada: elementos surgem com rotate (5°) + scale (0.9) → rotate (0°) + scale (1), 400ms ease-out.
- Carrossel: transição com skewX (-5°) + translateX, 500ms.
- Scroll reveal: elementos ganham opacidade e rotate (0°) conforme entram.
- Hover em cartões: rotate (3°), scale (1.03), shadow expand, 250ms.

**Typography System:**
- Display: `Montserrat Bold` (sans-serif geométrica, 56-72px) para títulos.
- Heading: `Montserrat SemiBold` (40-48px) para secções.
- Body: `Open Sans` (sans-serif clara, 16px) para texto.
- Accent: `Montserrat Bold` (28px, laranja) para destaque.
- Hierarquia: títulos em maiúsculas, corpo em sentença, accent em destaque.

**Probability:** 0.07

---

## Resposta 3: Minimalismo Artesanal com Paleta Quente

**Design Movement:** Artesanato Digital — inspirado em estúdios de arte tradicionais, com paleta quente e tipografia humanista.

**Core Principles:**
- Humanismo: tipografia com serifs, espaçamento generoso, sensação de handmade.
- Paleta quente: terras, ocres, vermelhos suaves, criando intimidade.
- Fotografia em foco: imagens grandes, sem molduras, sangradas nas bordas.
- Navegação intuitiva: menu simples, sem gamificação, apenas essencial.

**Color Philosophy:**
- Fundo: `#2a2420` (castanho muito escuro, como madeira queimada).
- Texto: `#f0ebe5` (bege quente, como papel antigo).
- Primário: `#c85a54` (terracota, calor artístico).
- Secundário: `#8b6f47` (ocre, terra).
- Terciário: `#d4a574` (bege dourado, luz).
- Razão: Evoca ateliê, autenticidade, conexão humana.

**Layout Paradigm:**
- Hero: imagem de tatuagem/quadro sangrada à esquerda, texto em coluna estreita à direita.
- Portfólio: galeria em linha única (scroll horizontal) ou grid 2 colunas com imagens grandes.
- Seção "Sobre": texto em coluna única, citação em itálico, assinado.
- Rodapé: contacto em tipografia serif, sem ícones.

**Signature Elements:**
- Linhas terracota finas entre secções.
- Cartões com borda suave (1px terracota).
- Tipografia serif em títulos, humanista em corpo.
- Espaçamento vertical generoso (gap 4-6rem entre secções).

**Interaction Philosophy:**
- Hover: fade suave em cartões, mudança de cor terracota.
- Clique: feedback tátil com opacity e scale mínimo.
- Navegação: transições suaves, sem saltos abruptos.

**Animation:**
- Entrada de página: fade-in lento (500ms ease-out).
- Carrossel: transição suave (600ms ease-in-out), sem aceleração agressiva.
- Hover em cartões: opacity (0.8 → 1), border color (terracota), 300ms.
- Scroll reveal: fade-in + translateY (20px → 0), 400ms ease-out.

**Typography System:**
- Display: `Cormorant Garamond` (serif elegante, 52-68px) para títulos.
- Heading: `Cormorant Garamond` (38-46px) para secções.
- Body: `Lora` (serif humanista, 16px) para texto corrido.
- Accent: `Cormorant Garamond Italic` (24px, terracota) para citações.
- Hierarquia: títulos em maiúsculas espaçadas, corpo em sentença, citações em itálico.

**Probability:** 0.06

---

## Decisão Final

Escolho a **Resposta 1: Elegância Noir com Acentos Dourados**.

Esta abordagem alinha-se perfeitamente com:
- O estilo visual do Mu7 Tattoo (escuro, minimalista, cinematográfico).
- A identidade do Leo V. Freitas (sofisticação, precisão, autoridade artística).
- A natureza do portfólio (tatuagens realistas e quadros merecem espaço e silêncio visual).
- Usabilidade: navegação clara, sem distrações, foco nas imagens.

A paleta dourada + vermelha subtil homenageia o site antigo, enquanto o preto profundo e espaçamento generoso criam uma experiência premium.

---

## Implementação

Tipografia:
- `Playfair Display` (Google Fonts) para títulos.
- `Lato` (Google Fonts) para corpo.

Cores CSS:
- `--color-bg: #0a0a0a`
- `--color-text: #f5f5f5`
- `--color-accent: #d4af37`
- `--color-accent-dark: #8b0000`

Componentes:
- Hero assimétrico com imagem à direita.
- Carrossel de portfólio com overlay ao hover.
- Seção "Sobre" com citação destacada.
- Navegação fixa com logo e menu.
- Rodapé minimalista.

Animações:
- Fade-in ao scroll.
- Hover em cartões com brilho dourado.
- Transições suaves entre páginas.
