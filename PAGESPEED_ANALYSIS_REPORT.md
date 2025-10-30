# Análise de Performance - PageSpeed Insights

## 📊 Métricas Atuais do Build

### Bundle Size Analysis
```
Route (app)                              Size     First Load JS
┌ ○ /                                    9.9 kB          222 kB
└ ○ /_not-found                          138 B           212 kB
+ First Load JS shared by all            212 kB
  ├ chunks/fd9d1056-df8cc75c6246e943.js  53.6 kB
  └ chunks/vendors-91b5c992e48d63ce.js   156 kB
  └ other shared chunks (total)          2.43 kB
```

## 🔍 Problemas Identificados

### 1. **Imagens Não Otimizadas** ⚠️
**Impacto**: Alto - Afeta LCP (Largest Contentful Paint)

Arquivos com `<img>` tags não otimizadas:
- `src/components/Footer.tsx` (3 ocorrências)
- `src/components/sections/CertificatesSection.tsx` (1 ocorrência)
- `src/components/sections/ConveniosSection.tsx` (2 ocorrências)
- `src/components/sections/FinalStatementSection.tsx` (1 ocorrência)
- `src/components/sections/HeroSection.tsx` (4 ocorrências)
- `src/components/sections/NewsSection.tsx` (1 ocorrência)
- `src/components/ui/resizable-navbar.tsx` (1 ocorrência)
- `src/components/ui/video-thumbnail.tsx` (1 ocorrência)

### 2. **Bundle JavaScript Grande** ⚠️
**Impacto**: Médio - Afeta FCP (First Contentful Paint)
- First Load JS: 222 kB (recomendado < 200 kB)
- Vendors chunk: 156 kB (muito grande)

### 3. **Configuração de Imagens Deprecated** ⚠️
**Impacto**: Baixo - Aviso de configuração
- `images.domains` deve ser substituído por `images.remotePatterns`

## 🚀 Otimizações Recomendadas

### Prioridade ALTA

#### 1. Substituir `<img>` por `<Image />` do Next.js
```tsx
// ❌ Atual
<img src="/path/image.jpg" alt="Description" />

// ✅ Otimizado
import Image from 'next/image'
<Image 
  src="/path/image.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

#### 2. Implementar Lazy Loading para Imagens
- Usar `priority={true}` apenas para imagens above-the-fold
- Implementar `placeholder="blur"` para melhor UX

#### 3. Otimizar Imagens Estáticas
- Converter para AVIF/WebP
- Redimensionar para tamanhos apropriados
- Comprimir com qualidade otimizada

### Prioridade MÉDIA

#### 4. Reduzir Bundle Size
```javascript
// next.config.js
experimental: {
  optimizePackageImports: [
    'framer-motion',
    'lucide-react', 
    '@radix-ui/react-dialog',
    '@radix-ui/react-slot',
    'swiper' // Adicionar
  ]
}
```

#### 5. Code Splitting Avançado
```javascript
// Lazy loading de componentes pesados
const InstagramCarousel = dynamic(() => import('./InstagramCarousel'), {
  loading: () => <div>Carregando...</div>,
  ssr: false
})
```

#### 6. Otimizar Framer Motion
```tsx
// Usar imports específicos
import { motion } from 'framer-motion/dist/framer-motion'
// Ou usar LazyMotion para reduzir bundle
import { LazyMotion, domAnimation, m } from 'framer-motion'
```

### Prioridade BAIXA

#### 7. Atualizar Configuração de Imagens
```javascript
// next.config.js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'scontent-bsb1-1.cdninstagram.com',
    },
    {
      protocol: 'https', 
      hostname: 'lh3.googleusercontent.com',
    }
  ]
}
```

#### 8. Implementar Service Worker
```javascript
// next.config.js
experimental: {
  swcPlugins: [
    ['next-superjson-plugin', {}]
  ]
}
```

## 📈 Métricas Esperadas Após Otimizações

### Antes (Estimado)
- **Performance Score**: 60-70
- **LCP**: 3.5-4.5s
- **FCP**: 2.0-2.5s
- **CLS**: 0.1-0.2
- **Bundle Size**: 222 kB

### Depois (Projetado)
- **Performance Score**: 85-95
- **LCP**: 1.5-2.0s
- **FCP**: 1.0-1.5s
- **CLS**: < 0.1
- **Bundle Size**: 180-200 kB

## 🛠️ Plano de Implementação

### Fase 1: Otimização de Imagens (1-2 dias)
1. Substituir todas as tags `<img>` por `<Image />`
2. Adicionar dimensões apropriadas
3. Implementar lazy loading
4. Converter imagens para AVIF/WebP

### Fase 2: Otimização de Bundle (1 dia)
1. Implementar code splitting
2. Otimizar imports do Framer Motion
3. Configurar tree shaking avançado

### Fase 3: Configurações Avançadas (0.5 dia)
1. Atualizar configuração de imagens
2. Implementar headers de cache
3. Configurar compressão

## 🔧 Scripts de Análise

```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Analisar performance local
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html

# Analisar bundle size
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer .next/static/chunks/*.js
```

## 📋 Checklist de Otimização

- [ ] Substituir todas as tags `<img>` por `<Image />`
- [ ] Implementar lazy loading para imagens
- [ ] Converter imagens para formatos modernos
- [ ] Otimizar bundle JavaScript
- [ ] Implementar code splitting
- [ ] Configurar headers de cache
- [ ] Atualizar configuração de imagens
- [ ] Testar com Lighthouse
- [ ] Validar métricas Core Web Vitals

## 🎯 Metas de Performance

- **Performance Score**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1