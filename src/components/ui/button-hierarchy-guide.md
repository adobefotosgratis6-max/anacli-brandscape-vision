# Guia de Hierarquia de Botões - Anacli

## Visão Geral
Este sistema de botões hierárquicos foi criado para padronizar todos os botões do projeto Anacli, estabelecendo uma hierarquia visual clara baseada na importância das ações.

## Hierarquia de Botões

### 1. Primary (Primário)
**Uso**: Ações mais importantes e críticas
- **Exemplos**: "Ligar Agora", "WhatsApp", "Seguir no Instagram"
- **Estilo**: Gradiente primary → accent, sombra destacada, efeitos de brilho
- **Quando usar**: CTAs principais, ações de conversão, contato direto

### 2. Secondary (Secundário)  
**Uso**: Ações importantes mas não críticas
- **Exemplos**: "Ver todas as notícias", "Entrar no Portal", "Resultados de Exames"
- **Estilo**: Cor sólida primary, sombra média, efeito sutil
- **Quando usar**: Navegação importante, ações secundárias relevantes

### 3. Tertiary (Terciário)
**Uso**: Ações de apoio e navegação
- **Exemplos**: "Ver no Maps", "Ver Localização", "Ver todos os Convênios", "Ver todas as notícias"
- **Estilo**: Fundo branco, borda accent (magenta)
- **Hover**: Fundo magenta + texto/ícone branco
- **Quando usar**: Links de apoio, navegação secundária, ações complementares

### 4. Ghost (Fantasma)
**Uso**: Ações sutis e links internos
- **Exemplos**: "Ler mais", links de navegação interna
- **Estilo**: Transparente, texto accent (magenta)
- **Hover**: Fundo magenta + texto/ícone branco
- **Quando usar**: Links de leitura, navegação discreta, ações menos importantes

## Tamanhos Disponíveis

- **sm**: 36px altura mínima - Para espaços compactos
- **md**: 44px altura mínima - Tamanho padrão
- **lg**: 52px altura mínima - Para destaque e CTAs

## Propriedades Especiais

- **loading**: Mostra spinner de carregamento
- **disabled**: Estado desabilitado
- **fullWidth**: Ocupa toda a largura disponível
- **icon**: Ícone opcional (esquerda ou direita)

## Cores da Anacli

O sistema usa as cores definidas no design system:
- **Primary**: Verde principal da marca
- **Accent**: Rosa/magenta de destaque  
- **Secondary**: Variações complementares

## Exemplos de Uso

```tsx
// Botão principal - CTA mais importante
<HierarchicalButton hierarchy="primary" size="lg" icon={<Phone />}>
  Ligar Agora
</HierarchicalButton>

// Botão secundário - Ação importante
<HierarchicalButton hierarchy="secondary" size="md" icon={<ArrowRight />}>
  Ver mais detalhes
</HierarchicalButton>

// Botão terciário - Ação de apoio
<HierarchicalButton hierarchy="tertiary" size="md" icon={<Map />}>
  Ver localização
</HierarchicalButton>

// Botão fantasma - Link sutil
<HierarchicalButton hierarchy="ghost" size="sm" icon={<ArrowRight />}>
  Ler mais
</HierarchicalButton>
```

## Migração de Botões Antigos

- `Button` padrão → `HierarchicalButton hierarchy="secondary"`
- Botões com gradiente → `HierarchicalButton hierarchy="primary"`
- Botões outline → `HierarchicalButton hierarchy="tertiary"`
- Links simples → `HierarchicalButton hierarchy="ghost"`

## Benefícios

1. **Consistência Visual**: Todos os botões seguem o mesmo padrão
2. **Hierarquia Clara**: Usuários identificam facilmente ações importantes
3. **Manutenibilidade**: Mudanças centralizadas no componente
4. **Acessibilidade**: Estados de foco e disabled padronizados
5. **Performance**: Animações otimizadas com Framer Motion