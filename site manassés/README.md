# Site Manassés

Este é um site responsivo com foco em dispositivos móveis para o projeto Manassés.

## Estrutura de Pastas

```
site manassés/
├── index.html               # Página inicial
├── css/                     # Pasta para todos os estilos
│   └── styles.css           # Arquivo principal de estilos
├── js/                      # Pasta para todos os scripts
│   └── main.js              # Script principal
├── assets/                  # Pasta para todas as mídias
│   ├── images/              # Todas as imagens do site
│   │   ├── header/          # Imagens de cabeçalho
│   │   │   ├── banner-principal.jpg
│   │   │   ├── banner-sobre.jpg
│   │   │   ├── banner-galeria.jpg
│   │   │   └── banner-contato.jpg
│   │   ├── background/      # Imagens de fundo
│   │   ├── team/            # Fotos da equipe
│   │   │   ├── equipe.jpg
│   │   │   ├── pessoa1.jpg
│   │   │   └── pessoa2.jpg
│   │   ├── gallery/         # Imagens da galeria
│   │   │   ├── imagem1-thumb.jpg
│   │   │   ├── imagem1-full.jpg
│   │   │   └── ...
│   │   └── thumbnails/      # Miniaturas de vídeos
│   │       └── video-thumb.jpg
│   ├── videos/              # Vídeos hospedados localmente
│   └── fonts/               # Fontes personalizadas
└── pages/                   # Páginas adicionais do site
    ├── sobre.html
    ├── galeria.html
    └── contato.html
```

## Como Adicionar Conteúdo

### Imagens

1. **Imagens de cabeçalho**: Coloque em `assets/images/header/`
   - Use imagens de largura mínima de 1200px para melhor qualidade
   - Os nomes dos arquivos devem seguir o padrão: `banner-[pagina].jpg`

2. **Fotos da equipe**: Coloque em `assets/images/team/`
   - Idealmente use imagens quadradas para os membros da equipe
   - Resolução recomendada: 400x400px

3. **Imagens da galeria**: Coloque em `assets/images/gallery/`
   - Crie duas versões: thumbnail (menor) e full (tamanho completo)
   - Nomeie seguindo o padrão: `imagem1-thumb.jpg` e `imagem1-full.jpg`

### Vídeos

1. **Para vídeos do YouTube**: 
   - Pegue o ID do vídeo (a parte após `watch?v=` na URL)
   - Atualize no arquivo JavaScript (`js/main.js`)

2. **Para vídeos hospedados localmente**:
   - Coloque seus vídeos na pasta `assets/videos/`
   - Atualize o caminho no arquivo JavaScript

## Customização

1. **Cores**: As cores principais podem ser alteradas editando as classes no Tailwind
2. **Fontes**: Para usar fontes personalizadas, adicione-as na pasta `assets/fonts/` e atualize o CSS
3. **Layout**: O layout é responsivo, mas você pode ajustar para suas necessidades específicas

## Requisitos Técnicos

- Navegador moderno com suporte a HTML5, CSS3 e JavaScript ES6
- Conexão com internet para carregar as bibliotecas externas (Tailwind, Font Awesome)
