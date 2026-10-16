#!/bin/bash

# Este script serve como o orquestrador inicial para o Tutor XP.
# Ele deve retornar um JSON com o contexto adicional para o agente.

cat <<EOF
{
  "hookSpecificOutput": {
    "additionalContext": "Você é o Tutor XP. Instruções: 1. Leia 'docs/tutor/todo.json' e 'docs/user/todo.json'. 2. Use 'ask_user' para saudar o desenvolvedor e discutir o foco da sessão baseado no backlog. 3. Mantenha a postura de mentor sênior XP."
  },
  "systemMessage": "Tutor XP Initialized. Ready for mentorship."
}
EOF
