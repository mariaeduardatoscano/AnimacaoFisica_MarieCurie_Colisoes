# Organizacao dos commits

Este documento resume como as cenas 06 e 07 foram separadas em commits reais
para facilitar revisao no GitHub.

## Base anterior

Antes desta etapa, o branch `main` ja continha:

1. `docs: adicionar roteiro textual e visual das Telas 06 e 07`
2. `chore: configurar dependencias e fundacao logica (cores e animacao)`
3. `refactor: implementar componente de tracos animados SVG`

Esses commits registraram o roteiro, a base tecnica inicial, os dados de cores e
percentuais, o helper de progresso e o componente `Draw`.

## Organizacao complementar

Os blocos seguintes completam a versao independente da animacao:

1. `chore: configurar projeto Remotion independente`
   - Ajusta metadados, scripts, TypeScript, ESLint e configuracao do Remotion.

2. `refactor: criar componente de anotacoes textuais`
   - Adiciona `src/components/Note.tsx`, usado para textos com entrada gradual.

3. `refactor: criar estrutura visual das cenas`
   - Adiciona `src/components/Scene.tsx`, com cabecalho, titulo e enquadramento.

4. `feat: implementar cena de dissipacao de energia`
   - Adiciona `src/scenes/Energy.tsx`, com grafico de pizza, legendas e equacoes.

5. `feat: implementar cena de coeficiente de restituicao`
   - Adiciona `src/scenes/Restitution.tsx`, com escala de `e`, simulacoes e formula.

6. `feat: montar composicao final das telas 06 e 07`
   - Adiciona `src/Film.tsx`, `src/Root.tsx` e `src/index.ts`.

7. `docs: documentar execucao e organizacao da entrega`
   - Adiciona este arquivo com o resumo da organizacao e comandos de execucao.

## Fluxo no GitHub

Cada conjunto foi enviado para um branch de trabalho e depois pode ser revisado
por Pull Request antes de entrar no `main`. Isso mantem o historico legivel sem
juntar todo o trabalho em um unico commit.

## Execucao da animacao

Para testar a montagem das cenas 06 e 07 no Remotion:

```sh
npm install
npm run dev
```

O Studio usa a composicao `Anotacoes`, registrada em `src/Root.tsx`, com 840
frames, 30 fps e resolucao 1280 x 720.

Para validar e renderizar:

```sh
npm run lint
npm run render
```

O render configurado gera `out/anotacoes.mov` em ProRes 4444 com transparencia,
para sobrepor ao video principal no editor.
