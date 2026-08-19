# Leo Freitas Studio

Site de portfólio do tatuador **Leo Freitas**, com apresentação do estúdio, galerias de tatuagens e quadros, estilos artísticos, perguntas frequentes e canais de contato.

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

O projeto utiliza **React 19**, **TypeScript**, **Vite**, **Tailwind CSS 4**, componentes Radix/shadcn e **Wouter** para navegação no frontend.

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

## Observações sobre imagens

As imagens do portfólio são carregadas por caminhos de armazenamento do ambiente de publicação. Para atualizar os trabalhos exibidos, altere as referências de imagem nas páginas em `client/src/pages/`.

## Estrutura principal

```text
client/src/
├── components/    # Cabeçalho e componentes compartilhados
├── pages/         # Páginas Tatuagens e Quadros
├── App.tsx        # Rotas e estrutura da aplicação
└── index.css      # Tokens, estilos globais e responsividade
```
