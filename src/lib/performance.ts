/**
 * Utilitários de performance para evitar refluxo forçado e otimizar renderização
 */

/**
 * Debounce para evitar múltiplas execuções
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * RequestAnimationFrame throttle para operações de scroll/resize
 */
export function rafThrottle<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null
  
  return function throttled(...args: Parameters<T>) {
    if (rafId !== null) return
    
    rafId = requestAnimationFrame(() => {
      func(...args)
      rafId = null
    })
  }
}

/**
 * Batch de leituras do DOM para evitar layout thrashing
 */
export class DOMBatcher {
  private readQueue: Array<() => void> = []
  private writeQueue: Array<() => void> = []
  private scheduled = false

  read(callback: () => void) {
    this.readQueue.push(callback)
    this.schedule()
  }

  write(callback: () => void) {
    this.writeQueue.push(callback)
    this.schedule()
  }

  private schedule() {
    if (this.scheduled) return
    this.scheduled = true

    requestAnimationFrame(() => {
      // Executar todas as leituras primeiro
      this.readQueue.forEach(callback => callback())
      this.readQueue = []

      // Depois executar todas as escritas
      this.writeQueue.forEach(callback => callback())
      this.writeQueue = []

      this.scheduled = false
    })
  }
}

/**
 * Hook para observar elementos com Intersection Observer
 */
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  })
}

/**
 * Preload de imagem com prioridade
 */
export function preloadImage(src: string, priority: 'high' | 'low' = 'low'): Promise<void> {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    if (priority === 'high') {
      link.setAttribute('fetchpriority', 'high')
    }
    link.onload = () => resolve()
    link.onerror = reject
    document.head.appendChild(link)
  })
}

/**
 * Lazy load de script externo
 */
export function loadScript(src: string, async = true): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = async
    script.onload = () => resolve()
    script.onerror = reject
    document.body.appendChild(script)
  })
}
