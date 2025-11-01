# Instruções de Deploy - Otimizações de Performance

## Pré-Deploy Checklist

- [x] Build local bem-sucedido
- [x] Sem erros de TypeScript
- [x] Sem erros de ESLint
- [x] Critical CSS inline implementado
- [x] Fontes otimizadas
- [x] Resource hints configurados

## Comandos de Deploy

### 1. Build de Produção
```bash
npm run build
```

**Verificar:**
- ✅ Compilação bem-sucedida
- ✅ Tamanho do bundle: ~226 kB First Load JS
- ✅ Sem erros de build

### 2. Deploy para Netlify

#### Opção A: Deploy via Git (Recomendado)
```bash
git add .
git commit -m "feat: otimizações de render blocking CSS"
git push origin main
```

O Netlify fará deploy automático.

#### Opção B: Deploy Manual
```bash
# Se tiver Netlify CLI instalado
netlify deploy --prod
```

## Validação Pós-Deploy

### 1. Verificar Site no Ar
```
https://anacli.pages.dev
```

### 2. Testar PageSpeed Insights
1. Acessar: https://pagespeed.web.dev/
2. Inserir URL: `https://anacli.pages.dev`
3. Clicar em "Analyze"

**Métricas para Observar:**
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Render Blocking Resources
- Total Blocking Time (TBT)

### 3. Verificar Headers HTTP
```bash
curl -I https://anacli.pages.dev
```

**Deve conter:**
```
Link: <https://fonts.googleapis.com>; rel=preconnect
Link: <https://fonts.gstatic.com>; rel=preconnect; crossorigin
```

### 4. Verificar Fontes Carregadas
1. Abrir DevTools (F12)
2. Network tab
3. Filtrar por "font"
4. Verificar que apenas 3 pesos são carregados (400, 600, 700)

### 5. Verificar Critical CSS
1. Abrir DevTools (F12)
2. Elements tab
3. Procurar por `<style>` no `<head>`
4. Verificar presença de CSS inline

## Comparação Antes/Depois

### Antes das Otimizações
- Render Blocking: 320ms
- CSS Bloqueantes: 2 arquivos (17 KiB)
- Pesos de Fonte: 6
- Preconnect: Apenas Instagram

### Depois das Otimizações
- Render Blocking: < 100ms (esperado)
- CSS Bloqueantes: 0 (critical inline)
- Pesos de Fonte: 3 (-50%)
- Preconnect: Google Fonts + Instagram

## Troubleshooting

### Problema: Headers não aparecem
**Solução:** Verificar se `public/_headers` foi incluído no deploy
```bash
ls -la out/_headers
```

### Problema: Fontes ainda carregam 6 pesos
**Solução:** Limpar cache do navegador e do Netlify
```bash
# Netlify CLI
netlify build --clear-cache
```

### Problema: CSS ainda está bloqueando
**Solução:** Verificar se critical CSS está inline no HTML
```bash
curl https://anacli.pages.dev | grep "<style"
```

## Monitoramento Contínuo

### Google Analytics 4 - Core Web Vitals
1. Acessar GA4
2. Reports > Engagement > Events
3. Filtrar por: `web_vitals`

### Lighthouse CI (Opcional)
```bash
npm install -g @lhci/cli
lhci autorun --collect.url=https://anacli.pages.dev
```

## Próximas Otimizações Sugeridas

1. **Lazy Loading de Componentes**
   - Swiper (Instagram carousel)
   - Modais de vídeo
   - Seções abaixo da dobra

2. **Image Optimization**
   - Converter mais imagens para AVIF
   - Implementar lazy loading em todas as imagens
   - Usar `priority` em imagens LCP

3. **Code Splitting**
   - Separar código de analytics
   - Lazy load de bibliotecas pesadas

4. **Service Worker**
   - Cache de assets estáticos
   - Offline support

## Contato

Para dúvidas sobre o deploy ou otimizações:
- Documentação: Ver `CSS_RENDER_BLOCKING_FIX.md`
- Issues: Criar issue no repositório
