# Decision

# Desafio mega-hack - front

## url da aplicação em produdação

- <https://decision-hackaton.netlify.app/>

## Como rodar este app

- clone este repositório 
- instale as dependências `yarn` ou `npm i`
- para executar a aplicação`yarn start` ou `npm start`

## layout no figma

- <https://www.figma.com/file/VxtHJFWdCFed0EuEOAWBib/Vtex-onlyview?node-id=1%3A8>

## Árvore de arquivos do projeto

```
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── images
│   │       ├── ic_arrowDown.svg
│   │       ├── ic_arrowUp.svg
│   │       ├── ic_ellipsis.svg
│   │       ├── ic_eyesClosed.svg
│   │       ├── ic_eyesOpened.svg
│   │       ├── ic_initialLogo.svg
│   │       ├── ic_lamp.svg
│   │       ├── index.ts
│   │       └── logo.svg
│   ├── common
│   │   ├── colors.ts
│   │   └── strings.ts
│   ├── components
│   │   ├── button
│   │   │   └── index.ts
│   │   ├── containers
│   │   │   ├── containerWithLogo
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── containerWithNavBar
│   │   │   │   ├── index.tsx
│   │   │   │   ├── navbar
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   └── styles.ts
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── inputs
│   │   │   ├── index.ts
│   │   │   ├── inputPassword
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.ts
│   │   │   └── input.ts
│   │   └── progressBar
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── customHooks
│   │   ├── index.ts
│   │   ├── useFixMenu.tsx
│   │   └── UseFormController.tsx
│   ├── index.tsx
│   ├── pages
│   │   ├── BusinessTips
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── FinancialGoal
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Home
│   │   │   ├── homeComponents
│   │   │   │   ├── financialGoalStatus
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   ├── financialIncome
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── insideContainer
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   ├── overview
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   ├── rentsByPlatform
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   └── salutation
│   │   │   │       ├── index.tsx
│   │   │   │       └── styles.ts
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── index.ts
│   │   ├── Login
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Register
│   │   │   └── index.tsx
│   │   └── VtexIntegration
│   │       └── index.tsx
│   ├── react-app-env.d.ts
│   ├── redux
│   │   ├── auth
│   │   │   ├── actions.ts
│   │   │   ├── index.ts
│   │   │   ├── selectors.ts
│   │   │   └── types.ts
│   │   ├── baseInitialState.ts
│   │   ├── financialGoal
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   └── information
│   │       ├── index.ts
│   │       ├── Retrieve
│   │       │   ├── actions.ts
│   │       │   └── index.ts
│   │       ├── selectors.ts
│   │       └── types.ts
│   ├── routes
│   │   ├── index.tsx
│   │   └── routeWrapper.tsx
│   ├── saga
│   │   ├── index.ts
│   │   └── profileSagas.ts
│   ├── services
│   │   └── api
│   │       ├── index.ts
│   │       └── profile.ts
│   ├── serviceWorker.ts
│   └── styles
│       ├── card.ts
│       ├── index.ts
│       ├── reset.ts
│       └── SpaceBetweenInputs.ts
├── tsconfig.json
└── yarn.lock
```