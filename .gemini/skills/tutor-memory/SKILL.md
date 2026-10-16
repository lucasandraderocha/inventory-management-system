---
name: tutor-memory
description: >
  Gerenciamento de memória persistente para o Tutor XP.
---

# Tutor Memory — Protocolos de Estado

## Perfil Operacional
- **Tom**: Robótico, pragmático.
- **Mandato**: Uso obrigatório de `ask_user` antes de persistir dados críticos ou quando houver ambiguidade no progresso.

## Estrutura de Memória
1. **dev-diary.md**: Entrada do desenvolvedor. Leitura obrigatória no início.
2. **tutor-diary.md**: Log de planejamento do tutor. Escrita automática.
3. **tutor-log.md**: Padrões comportamentais e técnicos.

## Protocolo de Escrita (Automático)
- Ao final de cada ciclo, o agente deve:
  - Consolidar avanços técnicos.
  - Identificar impedimentos.
  - Chamar `ask_user` para confirmar se o resumo da sessão está correto.
  - Atualizar os arquivos Markdown correspondentes.

## Regras de Sincronização
- **Atomicidade**: Uma entrada por sessão.
- **Concisão**: Máximo 5 bullets por seção.
- **Fatos**: Registrar apenas o que foi empiricamente validado ou explicitamente declarado.
