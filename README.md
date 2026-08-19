# Leo Freitas Studio

Site de portfólio do tatuador **Leo Freitas**, implementado em **HTML, CSS e TypeScript puros**. Não utiliza React, Tailwind CSS ou uma biblioteca de componentes.

## Principais seções

| Área | Conteúdo |
|---|---|
| Início | Apresentação do estúdio, identidade visual e atalhos para agendamento. |
| Sobre | Trajetória artística e especializações do tatuador. |
| Portfólio | Galeria de trabalhos em Realismo, Portrait e Blackwork. |
| Coberturas | Carrossel dedicado a trabalhos de cobertura. |
| Quadros | Página separada para obras em óleo e carvão. |
| Contato | WhatsApp, Instagram e localização do estúdio em Londrina/PR. |

## Tecnologias

O projeto utiliza **HTML semântico**, **CSS responsivo**, **TypeScript puro** para interações e **Vite** para desenvolvimento e build.

## Executar localmente

```bash
pnpm install
pnpm dev
```

O servidor de desenvolvimento ficará disponível em `http://localhost:3000`.

## Verificação e build

```bash
pnpm check
pnpm build
```

## Publicação no GitHub Pages

O GitHub Pages deste repositório utiliza a **raiz do branch `main`**. Após alterações no código-fonte, execute `pnpm build` e copie o conteúdo de `dist/public/` para a raiz antes de enviar as mudanças ao repositório. Os arquivos `index.html`, `quadros.html`, `assets/`, `.nojekyll` e `CNAME` são a versão publicada no domínio personalizado.

## Observações sobre imagens

As imagens do portfólio são carregadas por caminhos de armazenamento do ambiente de publicação. Para atualizar os trabalhos exibidos, altere as referências de imagem nas páginas em `client/src/pages/`.

## Estrutura principal

```text
client/
├── index.html       # Página principal: tatuagens e contato
├── quadros.html     # Página de obras em óleo e carvão
└── src/
    ├── styles.css   # Identidade visual, responsividade e animações
    ├── data.ts      # Dados das galerias e referências de imagens
    ├── site.ts      # Menu mobile e carrosséis reutilizáveis
    ├── main.ts      # Interações da página principal
    └── quadros.ts   # Interações da página de quadros
```
