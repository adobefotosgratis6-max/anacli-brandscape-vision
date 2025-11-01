# Otimizações PageSpeed - Round 2

## 📊 Problemas Identificados

### 1. Árvore de Dependência de Rede (297ms)
**Problema:** Latência no caminho crítico de carregamento
- `https://anacli.pages.dev` - 183ms
- `css/f12949e43bb3f049.css` - 297ms

### 2. Refluxo Forçado (46ms)
**Problema:** Layout thrashing causado por leituras/escritas do DOM intercaladas
- Chunk principal: 46ms de refluxo
- Vendors: 22ms, 17ms, 5ms, 1ms

### 3. Renderização de Bloqueio (160ms)
**Problema:** CSS ainda bloqueando renderização inicial
- `css/f12949e43bb3f049.css` - 19 KiB, 320ms

### 4. JavaScript Legado (12 KiB)
**Problema:** Polyfills desnecessários para navegadores modernos
- Array.prototype.at
- Array.prototype.flatMap
- Object.fromEntries
- String.prototype.trimEnd

---

## ✅ Soluções Implementadas

### 1. Otimização de Refluxo Forçado

#### A. Navbar com requestAnimationFrame
**Arquivo:** `src/components/ui/resizable-navbar.tsx`

**Antes:**
```typescript
const handleScroll = () => {
  setIsScrolled(window.scrollY > 50);
};
```

**Depois:**
```typescript
const handleScroll = () => {
  lastScrollY = window.scrollY;
  
  if (!ticking) {
    window.requestAnimationFrame(() => {
      setIsScrolled(lastScrollY > 50);
      ticking = false;
    });
    ticking = true;
  }
};
```

**Benefício:** Agrupa leituras do DOM em um único frame, evitando layout thrashing

#### B. Passive Event Listeners
```typescript
window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", handleResize, { passive: true });
```

**Benefício:** Permite ao navegador otimizar scroll sem esperar JavaScript

#### C. Debounce no Resize
```typescript
let resizeTimeout: NodeJS.Timeout;
const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    setIsMobile(window.innerWidth < 768);
  }, 150);
};
```

**Benefício:** Reduz execuções desnecessárias durante resize

### 2. Biblioteca de Performance
**Arquivo:** `src/lib/performance.ts`

Criado utilitários para:
- `debounce()` - Atrasar execuções
- `rafThrottle()` - Throttle com requestAnimationFrame
- `DOMBatcher` - Batch de leituras/escritas do DOM
- `createIntersectionObserver()` - Lazy loading otimizado
- `preloadImage()` - Preload com prioridade
- `loadScript()` - Carregamento assíncrono de scripts

### 3. Eliminação de JavaScript Legado

#### A. Browserslist Configurado
**Arquivo:** `.browserslistrc`

```
[production]
>0.5%
last 2 versions
not dead
not IE 11
Chrome >= 90
Firefox >= 88
Safari >= 14
Edge >= 90
```

**Benefício:** Remove polyfills para navegadores antigos, reduzindo bundle em ~12 KiB

#### B. Modularização de Imports
**Arquivo:** `next.config.js`

```javascript
modularizeImports: {
  'framer-motion': {
    transform: 'framer-motion/dist/es/{{member}}',
  },
}
```

**Benefício:** Tree-shaking mais eficiente do Framer Motion

### 4. Otimização de CSS Crítico

#### A. CSS Inline Expandido
**Arquivo:** `src/app/layout.tsx`

Adicionado ao critical CSS:
- Reset completo de box-sizing
- Estilos base de HTML
- Normalização de imagens e vídeos
- Estilos de botões e links
- Headings

**Tamanho:** ~1.5 KiB inline (vs 19 KiB bloqueante)

#### B. CSS Layers
**Arquivo:** `src/app/globals.css`

```css
@layer base, components, utilities;

@layer base {
  @tailwind base;
}
```

**Benefício:** Melhor controle de cascata e otimização de CSS

#### C. Content Visibility
```css
img, video {
  content-visibility: auto;
}
```

**Benefício:** Renderização lazy de imagens fora da viewport

### 5. Otimização de Fontes

#### A. CSS Variable para Fonte
```typescript
variable: '--font-jakarta'
```

**Benefício:** Acesso mais rápido via CSS variable

#### B. Fetchpriority nos Preloads
```html
<link rel="preload" href="/assets/logo.svg" fetchPriority="high" />
```

**Benefício:** Prioriza recursos críticos no carregamento

---

## 📈 Resultados Esperados

### Antes
| Métrica | Valor |
|---------|-------|
| Refluxo Forçado | 46ms |
| Render Blocking | 320ms (19 KiB) |
| JavaScript Legado | 12 KiB |
| Latência Crítica | 297ms |

### Depois (Estimado)
| Métrica | Valor | Melhoria |
|---------|-------|----------|
| Refluxo Forçado | <10ms | -78% |
| Render Blocking | <50ms | -84% |
| JavaScript Legado | 0 KiB | -100% |
| Latência Crítica | <200ms | -33% |

### Impacto em Core Web Vitals

1. **LCP (Largest Contentful Paint)**
   - Antes: ~2.5s
   - Depois: ~1.8s (estimado)
   - Melhoria: -28%

2. **FCP (First Contentful Paint)**
   - Antes: ~1.2s
   - Depois: ~0.8s (estimado)
   - Melhoria: -33%

3. **TBT (Total Blocking Time)**
   - Antes: ~150ms
   - Depois: ~50ms (estimado)
   - Melhoria: -67%

4. **CLS (Cumulative Layout Shift)**
   - Antes: 0.05
   - Depois: 0.02 (estimado)
   - Melhoria: -60%

---

## 🧪 Como Testar

### 1. Build Local
```bash
npm run build
```

### 2. Verificar Tamanho do Bundle
```bash
# Procurar por "First Load JS"
npm run build | grep "First Load"
```

**Esperado:** Redução de ~12 KiB no bundle principal

### 3. Testar Refluxo no DevTools
1. Abrir Chrome DevTools
2. Performance tab
3. Gravar carregamento da página
4. Procurar por "Recalculate Style" e "Layout"
5. Verificar redução de tempo

### 4. PageSpeed Insights
```
https://pagespeed.web.dev/
```

**Métricas para observar:**
- ✅ Render blocking resources (deve estar verde)
- ✅ Avoid forced reflow (deve estar verde)
- ✅ Legacy JavaScript (deve estar verde)
- ✅ Network critical path (deve melhorar)

### 5. Lighthouse CI
```bash
npm install -g @lhci/cli
lhci autorun --collect.url=https://anacli.pages.dev
```

---

## 📝 Checklist de Deploy

- [x] Otimização de refluxo forçado
- [x] Passive event listeners
- [x] RequestAnimationFrame para scroll
- [x] Debounce para resize
- [x] Browserslist configurado
- [x] CSS crítico expandido
- [x] CSS layers implementado
- [x] Content visibility para imagens
- [x] Fetchpriority em preloads
- [x] Modularização de imports
- [x] Biblioteca de performance criada

---

## 🔄 Próximas Otimizações

### Curto Prazo
1. **Lazy load de Swiper**
   - Carregar apenas quando seção Instagram estiver visível
   - Economia: ~40 KiB

2. **Preconnect Dinâmico**
   - Conectar ao Instagram CDN apenas quando necessário
   - Economia: ~100ms de latência inicial

3. **Image Sprites**
   - Combinar ícones pequenos em sprite
   - Redução: -5 requisições HTTP

### Médio Prazo
1. **Service Worker**
   - Cache de assets estáticos
   - Offline support
   - Melhoria: Carregamento instantâneo em visitas repetidas

2. **HTTP/3**
   - Configurar no Netlify
   - Melhoria: -20% latência

3. **Resource Hints Dinâmicos**
   - Prefetch de páginas prováveis
   - Prerender de conteúdo crítico

---

## 📚 Referências

- [Avoid Forced Reflow](https://web.dev/avoid-large-complex-layouts-and-layout-thrashing/)
- [Eliminate Render-Blocking Resources](https://web.dev/render-blocking-resources/)
- [Serve Modern Code](https://web.dev/serve-modern-code-to-modern-browsers/)
- [Critical Request Chains](https://web.dev/critical-request-chains/)
- [Content Visibility](https://web.dev/content-visibility/)
