'use client';

import { useEffect, useState } from 'react';

/**
 * OPÇÃO 1: Desabilitar COMPLETAMENTE animações no mobile
 * Para máxima performance no PageSpeed Mobile
 */

/**
 * Hook para detectar mobile (≤768px)
 * Mobile = SEM animações
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return isMobile;
}

/**
 * Hook para detectar se deve desabilitar animações
 * true = SEM animações (mobile ou preferência do usuário)
 */
export function useReducedMotion(): boolean {
  const isMobile = useIsMobile();
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Mobile SEMPRE desabilita animações
  return isMobile || prefersReduced;
}

/**
 * Hook para saber se DEVE animar
 * true = Desktop (pode animar)
 * false = Mobile (NÃO animar)
 */
export function useShouldAnimate(): boolean {
  const isMobile = useIsMobile();
  return !isMobile;
}