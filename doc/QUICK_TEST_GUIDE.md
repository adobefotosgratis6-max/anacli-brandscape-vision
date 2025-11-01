# Guia Rápido de Teste - Otimizações PageSpeed

## 🚀 Deploy Rápido

```bash
# 1. Build
npm run build

# 2. Commit
git add .
git commit -m "perf: otimizações de refluxo, CSS crítico e JS legado"
git push origin main
```

## ✅ Checklist de Validação

### 1. Render Blocking (Deve estar VERDE ✅)
**Antes:** 320ms de bloqueio CSS  
**Depois:** <50ms esperado

**Como testar:**
1. PageSpeed Insights
2. Procurar "Render-blocking resources"
3. Deve mostrar 0 ou poucos recursos bloqueantes

### 2. Refluxo Forçado (Deve estar VERDE ✅)
**Antes:** 46ms de layout thrashing  
**Depois:** <10ms esperado

**Como testar:**
1. Chrome DevTools > Performance
2. Gravar scroll da página
3. Procurar "Recalculate Style" e "Layout"
4. Tempo deve ser mínimo

### 3. JavaScript Legado (Deve estar VERDE ✅)
**Antes:** 12 KiB de polyfills  
**Depois:** 0 KiB esperado

**Como testar:**
1. PageSpeed Insights
2. Procurar "Avoid serving legacy JavaScript"
3. Não deve aparecer na lista de problemas

### 4. Latência de Rede (Deve MELHORAR 📈)
**Antes:** 297ms no caminho crítico  
**Depois:** <200ms esperado

**Como testar:**
1. Chrome DevTools > Network
2. Verificar waterfall de carregamento
3. Recursos críticos devem carregar em paralelo

## 🎯 Métricas Alvo

| Métrica | Antes | Meta | Status |
|---------|-------|------|--------|
| Performance Score | 70-80 | 90+ | 🎯 |
| LCP | ~2.5s | <1.8s | 🎯 |
| FCP | ~1.2s | <0.8s | 🎯 |
| TBT | ~150ms | <50ms | 🎯 |
| CLS | 0.05 | <0.02 | 🎯 |

## 🔍 Testes Detalhados

### Teste 1: PageSpeed Insights
```
URL: https://pagespeed.web.dev/
Input: https://anacli.pages.dev
```

**Verificar:**
- [ ] Performance Score > 90
- [ ] Render blocking: VERDE
- [ ] Forced reflow: VERDE
- [ ] Legacy JS: VERDE
- [ ] LCP < 2.5s
- [ ] FCP < 1.8s

### Teste 2: Chrome DevTools Performance

**Passos:**
1. Abrir site em aba anônima
2. F12 > Performance tab
3. Limpar cache (Ctrl+Shift+Del)
4. Clicar em Record (●)
5. Recarregar página (Ctrl+R)
6. Parar gravação após 5s

**Analisar:**
- [ ] FCP < 1s
- [ ] LCP < 2s
- [ ] Layout shifts mínimos
- [ ] Recalculate Style < 50ms total
- [ ] Layout < 50ms total

### Teste 3: Network Waterfall

**Passos:**
1. F12 > Network tab
2. Disable cache ✓
3. Throttling: Fast 3G
4. Recarregar página

**Verificar:**
- [ ] HTML carrega primeiro
- [ ] CSS crítico inline (não bloqueia)
- [ ] Fontes carregam em paralelo
- [ ] Imagens lazy load
- [ ] JS não bloqueia renderização

### Teste 4: Lighthouse CI

```bash
npm install -g @lhci/cli
lhci autorun --collect.url=https://anacli.pages.dev
```

**Verificar:**
- [ ] Performance > 90
- [ ] Accessibility > 95
- [ ] Best Practices > 95
- [ ] SEO > 95

## 🐛 Troubleshooting

### Problema: CSS ainda bloqueando
**Solução:**
```bash
# Verificar se critical CSS está inline
curl https://anacli.pages.dev | grep "<style"
```

### Problema: Refluxo ainda alto
**Solução:**
```bash
# Verificar se passive listeners estão ativos
# DevTools > Performance > Event Listeners
# Deve mostrar "passive: true"
```

### Problema: JS legado ainda presente
**Solução:**
```bash
# Verificar browserslist
npx browserslist

# Deve mostrar apenas navegadores modernos
# Chrome >= 90, Firefox >= 88, etc.
```

### Problema: Bundle não reduziu
**Solução:**
```bash
# Limpar cache e rebuild
rm -rf .next out node_modules/.cache
npm run build
```

## 📊 Comparação Antes/Depois

### Arquivos Modificados
- ✅ `src/app/layout.tsx` - CSS crítico expandido
- ✅ `src/app/globals.css` - CSS layers
- ✅ `next.config.js` - Modularização + browserslist
- ✅ `src/components/ui/resizable-navbar.tsx` - RAF + passive
- ✅ `.browserslistrc` - Navegadores modernos
- ✅ `src/lib/performance.ts` - Utilitários criados

### Tamanho do Bundle
**Antes:** 226 KiB First Load JS  
**Depois:** ~214 KiB esperado (-12 KiB de polyfills)

### Requisições HTTP
**Antes:** ~15 requisições  
**Depois:** ~13 requisições (CSS inline)

### Tempo de Carregamento
**Antes:** ~3.5s (3G)  
**Depois:** ~2.5s esperado (3G)

## 🎉 Sucesso!

Se todos os testes passarem:
- ✅ Performance Score > 90
- ✅ Todos os Core Web Vitals verdes
- ✅ Sem render blocking
- ✅ Sem refluxo forçado
- ✅ Sem JS legado

**Próximo passo:** Monitorar em produção com Google Analytics 4

## 📞 Suporte

Problemas? Verificar:
1. `PAGESPEED_FIXES_ROUND2.md` - Detalhes técnicos
2. `CSS_RENDER_BLOCKING_FIX.md` - Otimizações CSS
3. `DEPLOY_INSTRUCTIONS.md` - Instruções de deploy
