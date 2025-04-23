import { useState, useEffect } from 'react';

/**
 * Hook personalizado para persistir estado no localStorage
 *
 * Permite armazenar e recuperar valores do localStorage com
 * tipagem forte, sincronizando o estado entre diferentes abas/janelas.
 *
 * @param key - Chave para armazenar o valor no localStorage
 * @param initialValue - Valor inicial caso não exista no localStorage
 * @returns Um array com o valor armazenado e uma função para atualizá-lo
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Função para ler o valor do localStorage
  const readValue = (): T => {
    // Retorna o valor inicial se estiver rodando no servidor (SSR)
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      // Tenta obter o valor do localStorage
      const item = window.localStorage.getItem(key);
      // Retorna o valor parseado ou o valor inicial se não existir
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Erro ao ler a chave "${key}" do localStorage:`, error);
      return initialValue;
    }
  };

  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Função para atualizar o valor no estado e no localStorage
  const setValue = (value: T) => {
    try {
      // Permite que o valor seja uma função (como o setState do React)
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Atualiza o estado
      setStoredValue(valueToStore);

      // Salva no localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Erro ao definir a chave "${key}" no localStorage:`, error);
    }
  };

  // Escuta mudanças nesta chave do localStorage em outras abas/janelas
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}
