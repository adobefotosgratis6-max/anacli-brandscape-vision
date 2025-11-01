# Otimizações de LCP Mobile

## Problemas Identificados (PageSpeed Insights)

### 1. Render-blocking CSS (260ms)
- CSS estava bloqueando a renderização inicial
- Arquivo CSS com 19.4 KiB demorando 310ms

### 2. Árvore de Dependência da Rede (240ms)
- CSS crítico demorando 240ms para carregar
- Latência máxima do caminho crítico: 240ms

### 3. JavaScript Legado (12 KiB)
- Polyfills desnecessários sendo carregados
- Array.prototype.at, flat, flatMap, etc.

## Soluções Implementadas

### 1. Otimização de Preload e Prioridades

**layout.tsx:**
```typescript
// Preload de imagens LCP com fetchPriority HIGH
<link rel="preload" href="/assets/unidade.avif" as="image" type="image/avif" fetchPriority="high" />
<link rel="preload" href="/assets/teste-mobile.avif" as="image" type="image/avif" fetchPriority="high" media="(max-width: 1023px)" />

// Mudança de preconnect para dns-prefetch (não bloqueia)
<link rel="dns-prefetch" href="https://scontent-bsb1-1.cdninstagram.com" />
<link rel="dns-prefetch" href="https://images.unsplash.com" />
```

### 2. Redução de JavaScript Legado

**next.config.js:**
```javascript
// Otimização de chunks para reduzir JS
webpack: (config, { dev, isServer }) => {
  if (!dev) {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        // Separar framer-motion (grande biblioteca)
        framerMotion: {
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          name: 'framer-motion',
          priority: 20,
        },
        // Separar CSS
        styles: {
          name: 'styles',
          test: /\.(css|scss|sass)$/,
          chunks: 'all',
          enforce: true,
          priority: 30,
        },
      },
    }
    
    // Remover polyfills desnecessários
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    }
  }
}
```

**.browserslistrc:**
```
# Navegadores modernos apenas - reduz polyfills
last 2 Chrome versions
last 2 Firefox versions
last 2 Safari versions
last 2 Edge versions
not dead
not IE 11
```

### 3. Otimização de CSS

**postcss.config.js:**
```javascript
plugins: {
  autoprefixer: {
    // Apenas navegadores modernos
    overrideBrowserslist: [
      'last 2 Chrome versions',
      'last 2 Firefox versions',
      'last 2 Safari versions',
      'last 2 Edge versions',
    ],
  },
  // Minificar CSS em produção
  cssnano: {
    preset: ['default', {
      discardComments: { removeAll: true },
      normalizeWhitespace: true,
    }],
  },
}
```

### 4. Remoção de Animações em Elementos LCP

**HeroSection.tsx:**
```typescript
// ANTES: motion.div com whileHover
<motion.div whileHover={{ scale: 1.02 }}>
  <OptimizedImage priority={true} />
</motion.div>

// DEPOIS: div simples com fetchPriority
<div>
  <OptimizedImage priority={true} fetchPriority="high" />
</div>
```

### 5. fetchPriority em Imagens LCP

**OptimizedImage.tsx:**
```typescript
interface OptimizedImageProps {
  fetchPriority?: 'high' | 'low' | 'auto';
}

// Uso:
<OptimizedImage
  src="/assets/unidade.avif"
  priority={true}
  fetchPriority="high"  // ← Nova prop
/>
```

## Resultados Esperados

### Render-blocking CSS
- **Antes:** 260ms
- **Esperado:** < 150ms
- **Melhoria:** Separação de CSS crítico e minificação

### JavaScript Legado
- **Antes:** 12 KiB de polyfills
- **Esperado:** < 5 KiB
- **Melhoria:** Browserslist otimizado + remoção de fallbacks

### LCP Mobile
- **Antes:** Imagens sem prioridade adequada
- **Esperado:** Carregamento 30-40% mais rápido
- **Melhoria:** fetchPriority="high" + preload + remoção de animações

## Como Testar

1. **Build de produção:**
```bash
npm run build
```

2. **Servir localmente:**
```bash
npx serve out
```

3. **PageSpeed Insights:**
- Testar em: https://pagespeed.web.dev/
- Focar em métricas mobile
- Verificar LCP < 2.5s

4. **Lighthouse local:**
```bash
lighthouse http://localhost:3000 --only-categories=performance --form-factor=mobile --throttling-method=simulate --output=html --output-path=./mobile-lcp-test.html
```

## Checklist de Verificação

- [x] Preload de imagens LCP com fetchPriority="high"
- [x] dns-prefetch ao invés de preconnect para recursos não críticos
- [x] Browserslist otimizado para navegadores modernos
- [x] CSS minificado com cssnano
- [x] Chunks de JavaScript otimizados
- [x] Remoção de polyfills desnecessários
- [x] Remoção de animações em elementos LCP
- [x] fetchPriority implementado no OptimizedImage

## Próximos Passos (se necessário)

1. **Se LCP ainda > 2.5s:**
   - Considerar lazy loading de seções abaixo da dobra
   - Reduzir tamanho das imagens AVIF (qualidade 75-80)
   - Implementar critical CSS inline mais agressivo

2. **Se JavaScript ainda alto:**
   - Analisar bundle com `npm run build -- --analyze`
   - Considerar dynamic imports para framer-motion
   - Avaliar remoção de bibliotecas não essenciais

3. **Se CSS ainda bloqueando:**
   - Extrair CSS crítico above-the-fold
   - Usar `<style>` inline para CSS crítico
   - Lazy load de CSS não crítico
