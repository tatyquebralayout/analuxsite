# Tarefas e Melhorias do Projeto

Este arquivo descreve tarefas potenciais e áreas para melhoria com base no estado atual do diretório `src`.

## Alta Prioridade

- ✅ **Completar Traduções para Alemão:**
  - ✅ Substituir todos os placeholders `[pt: ...]` em `src/utils/translations.ts` pelo texto correto em alemão.
  - ✅ Traduzir placeholders específicos como `gallery.sectionTitle: '[DE: Enjoy Our Galery]'`.
- **Atualizar Informações Desatualizadas/Incorretas:**
  - ✅ Atualizar `de.location.taxiDescription` para refletir as operações em Zurique em vez de São Paulo.
  - Verificar todos os endereços, números de telefone e detalhes operacionais em todos os idiomas.

## Média Prioridade

- ✅ **Refatorar Traduções:**
  - ✅ Considerar dividir o arquivo grande `src/utils/translations.ts` em arquivos menores e mais gerenciáveis. Opções:
    - ✅ Por idioma (ex: `src/utils/translations/de.json`, `src/utils/translations/pt.json`).
    - ✅ Por funcionalidade/página dentro de cada idioma (ex: `src/utils/translations/de/common.ts`, `src/utils/translations/de/pages.ts`).
  - ✅ Refatorar como as traduções específicas de página (`hundebetreuungPage`, `hundetrainingPage`) são acessadas. Integrá-las na estrutura principal de tradução ou carregá-las dinamicamente nas páginas respectivas.
- **Refatorar Componentes Grandes:**
  - Analisar `src/pages/Services.tsx` (e potencialmente outros) e dividi-lo em subcomponentes menores e reutilizáveis para melhorar a legibilidade e a manutenibilidade.
- **Integrar Conteúdo Específico da Página:**
  - Garantir que o conteúdo definido em `de.hundebetreuungPage` e `de.hundetrainingPage` seja exibido corretamente nas páginas de detalhes dos serviços respectivos (provavelmente tratado por `src/pages/ServiceDetails.tsx` ou lógica de roteamento similar).
- ✅ **Melhorar Estrutura de Testes:**
  - ✅ Substituir usos de `any` por tipos mais específicos nos mocks de framer-motion
  - ✅ Remover imports não utilizados como `screen` e `LanguageProvider`
  - ✅ Criar tipos adequados para props de componentes mockados
  - Separar testes em níveis (unidade, integração, e2e)
  - Criar mocks reutilizáveis para componentes comuns

## Baixa Prioridade / Considerações Futuras

- ✅ **Revisar `PerformanceContext`:**
  - ✅ Entender o propósito e o uso de `src/contexts/PerformanceContext.tsx`. Garantir que seja necessário e implementado de forma eficiente.
- ✅ **Limpeza e Consistência do Código:**
  - ✅ Revisar o código em busca de duplicações potenciais.
  - ✅ Garantir estilo de codificação e formatação consistentes.
  - ✅ Adicionar comentários para lógica complexa ou não óbvia.
- **Revisão de Acessibilidade (A11y):**
  - ✅ Realizar uma verificação básica de acessibilidade (HTML semântico, texto alternativo para imagens, navegação por teclado em Header/Footer).
  - ✅ Verificar alt text em todas as imagens (Galeria, Equipe, etc.).
  - FAZER: Refatorar `Gallery.tsx` e dados de tradução para usar `alt` text descritivo para imagens da galeria.
  - FAZER: Testar navegação por teclado e leitor de tela em toda a aplicação.
- **Expandir Cobertura de Testes:**
  - Implementar testes unitários para componentes individuais
  - Adicionar testes de integração para fluxos críticos
  - Implementar helpers de teste para simplificar a configuração
  - Garantir que todos os ícones e componentes externos sejam mockados corretamente
  - Configurar testes para verificar que as traduções são aplicadas corretamente
- **Revisão de Dependências:**
  - ✅ Verificar o `package.json` em busca de dependências desatualizadas (`npm outdated`) ou não utilizadas (parece OK).
  - ✅ Verificar versões específicas de dependências de teste:
    - ✅ `jest-dom` (@testing-library/jest-dom@^6.6.3)
    - ✅ `testing-library/react` (@testing-library/react@^16.3.0)
    - ✅ `framer-motion` (^11.18.2)
    - ✅ `lucide-react` (^0.344.0)
    - ✅ `react-intersection-observer` (^9.16.0)
  - ✅ Resolver vulnerabilidades reportadas pelo npm audit
- ✅ **Consolidar tipos:**
  - ✅ Criar arquivos de tipos bem organizados e importá-los onde necessário.
- ✅ **Refatorar componentes:**
  - ✅ Unificar componentes com funcionalidades semelhantes (ex: AnimatedElement).
- ✅ **Reorganizar estrutura:**
  - ✅ Considerar uma estrutura mais coesa para dados e tipos.
- ✅ **Extrair lógica comum:**
  - ✅ Mover a lógica duplicada para funções utilitárias centralizadas.
