# Tarefas e Melhorias do Projeto

Este arquivo descreve tarefas potenciais e áreas para melhoria com base no estado atual do diretório `src`.

## Alta Prioridade

- **Completar Traduções para Alemão:**
  - Substituir todos os placeholders `[pt: ...]` em `src/utils/translations.ts` pelo texto correto em alemão.
  - Traduzir placeholders específicos como `gallery.sectionTitle: '[DE: Enjoy Our Galery]'`.
- **Atualizar Informações Desatualizadas/Incorretas:**
  - Atualizar `de.location.taxiDescription` para refletir as operações em Zurique em vez de São Paulo.
  - Verificar todos os endereços, números de telefone e detalhes operacionais em todos os idiomas.

## Média Prioridade

- **Refatorar Traduções:**
  - Considerar dividir o arquivo grande `src/utils/translations.ts` em arquivos menores e mais gerenciáveis. Opções:
    - Por idioma (ex: `src/utils/translations/de.json`, `src/utils/translations/pt.json`).
    - Por funcionalidade/página dentro de cada idioma (ex: `src/utils/translations/de/common.json`, `src/utils/translations/de/home.json`).
  - Refatorar como as traduções específicas de página (`hundebetreuungPage`, `hundetrainingPage`) são acessadas. Integrá-las na estrutura principal de tradução ou carregá-las dinamicamente nas páginas respectivas.
- **Refatorar Componentes Grandes:**
  - Analisar `src/pages/Services.tsx` (e potencialmente outros) e dividi-lo em subcomponentes menores e reutilizáveis para melhorar a legibilidade e a manutenibilidade.
- **Integrar Conteúdo Específico da Página:**
  - Garantir que o conteúdo definido em `de.hundebetreuungPage` e `de.hundetrainingPage` seja exibido corretamente nas páginas de detalhes dos serviços respectivos (provavelmente tratado por `src/pages/ServiceDetails.tsx` ou lógica de roteamento similar).

## Baixa Prioridade / Considerações Futuras

- **Revisar `PerformanceContext`:**
  - Entender o propósito e o uso de `src/contexts/PerformanceContext.tsx`. Garantir que seja necessário e implementado de forma eficiente.
- **Limpeza e Consistência do Código:**
  - Revisar o código em busca de duplicações potenciais.
  - Garantir estilo de codificação e formatação consistentes.
  - Adicionar comentários para lógica complexa ou não óbvia.
- **Revisão de Acessibilidade (A11y):**
  - Realizar uma verificação básica de acessibilidade (HTML semântico, texto alternativo para imagens, navegação por teclado).
- **Testes:**
  - Implementar testes unitários e/ou de integração para componentes críticos e funções utilitárias (especialmente a lógica de tradução).
- **Revisão de Dependências:**
  - Verificar o `package.json` em busca de dependências desatualizadas ou não utilizadas.
