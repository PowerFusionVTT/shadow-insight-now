# SpyInsta - Instruções para Uso no Elementor

## Arquivos Criados

1. **`spyinsta-elementor.html`** - Versão completa com CSS inline (mais fácil de usar)
2. **`spyinsta-elementor-modular.html`** - Versão modular com CSS separado
3. **`spyinsta-styles.css`** - Arquivo CSS separado para a versão modular

## Como Usar no Elementor

### Opção 1: Versão Completa (Recomendada)

1. **Abra o arquivo `spyinsta-elementor.html`**
2. **Copie todo o conteúdo do arquivo**
3. **No Elementor:**
   - Adicione um widget "HTML"
   - Cole todo o código HTML no campo de código
   - Salve e visualize

### Opção 2: Versão Modular

1. **Upload do CSS:**
   - Faça upload do arquivo `spyinsta-styles.css` para sua pasta de tema ou media
   - Adicione o link CSS no cabeçalho do seu site

2. **HTML:**
   - Copie o conteúdo de `spyinsta-elementor-modular.html`
   - Cole no widget HTML do Elementor

### Opção 3: Seções Separadas (Mais Flexível)

Você pode dividir o código em seções separadas do Elementor:

#### Seção 1: Header
```html
<!-- Copie apenas a seção header do HTML -->
<header class="spy-header">
  <!-- ... conteúdo do header ... -->
</header>
```

#### Seção 2: Hero
```html
<!-- Copie apenas a seção hero do HTML -->
<section class="spy-hero">
  <!-- ... conteúdo do hero ... -->
</section>
```

#### Seção 3: Benefits
```html
<!-- Copie apenas a seção benefits do HTML -->
<section class="spy-benefits">
  <!-- ... conteúdo dos benefits ... -->
</section>
```

E assim por diante...

## Personalização

### Cores Principais
- **Primária**: `#6366f1` (azul)
- **Accent**: `#f59e0b` (laranja)
- **Sucesso**: `#10b981` (verde)
- **Perigo**: `#ef4444` (vermelho)
- **Aviso**: `#f59e0b` (amarelo)

### Classes CSS Importantes

#### Container
- `.spy-container` - Container principal com max-width 1200px

#### Botões
- `.spy-cta-button` - Botão principal de call-to-action

#### Textos
- `.spy-text-primary` - Texto cor primária
- `.spy-text-accent` - Texto cor de destaque
- `.spy-section-title` - Títulos de seção
- `.spy-section-subtitle` - Subtítulos de seção

#### Cards
- `.spy-benefit-card` - Cards de benefícios
- `.spy-testimonial` - Cards de depoimentos

## Responsividade

O código já inclui media queries para dispositivos móveis:
- Breakpoint principal: `768px`
- Layout em grid se adapta automaticamente
- Textos e elementos se ajustam para mobile

## Funcionalidades Incluídas

✅ **Header fixo** com badges animados
✅ **Hero section** com gradiente e mockup
✅ **Grid de benefícios** responsivo
✅ **Seção de segurança** com destaque
✅ **Depoimentos** estilo redes sociais
✅ **Call-to-action final** com animações
✅ **Footer** profissional
✅ **Ícones** usando emojis (compatibilidade universal)
✅ **Animações CSS** suaves
✅ **Design responsivo** completo

## Dicas para Elementor

1. **Performance**: Use a versão completa para melhor performance
2. **Edição**: Para editar textos, modifique diretamente no HTML
3. **Imagens**: Substitua o mockup placeholder por uma imagem real
4. **Links**: Adicione links nos botões CTA conforme necessário
5. **SEO**: Mantenha as tags de título (h1, h2, h3) para SEO

## Modificações Comuns

### Alterar Texto do Botão
Procure por: `🔍 Descobrir a Verdade Agora`
Substitua pelo texto desejado.

### Alterar Cores
Modifique as variáveis CSS no início do arquivo de estilos.

### Adicionar Links
Transforme os botões em links:
```html
<a href="SEU_LINK_AQUI" class="spy-cta-button">
    🔍 Descobrir a Verdade Agora
</a>
```

### Trocar Imagens
Substitua o div `.spy-phone-mockup` por:
```html
<img src="sua-imagem.jpg" alt="App SpyInsta" class="spy-phone-mockup">
```

## Suporte

O código foi criado com foco em:
- ✅ Compatibilidade com Elementor
- ✅ Performance otimizada
- ✅ SEO-friendly
- ✅ Responsividade total
- ✅ Fácil customização

Para dúvidas técnicas, consulte a documentação do Elementor sobre widgets HTML customizados.