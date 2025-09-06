# Automação de Testes com Cypress

Este projeto contém testes automatizados usando Cypress com Page Object Model (POM) para realizar buscas no Yahoo, incluindo geração de relatórios com Allure.

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) (v22.17.0 ou superior)
- [Java](https://www.java.com/) (v24.0.2 ou superior) - Necessário para o Allure Report
- NPM (geralmente instalado com Node.js)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd automacao-renato-cypress
```

2. Instale as dependências:
```bash
npm install
```

3. Instale o Allure Command Line globalmente:
```bash
npm install -g allure-commandline
```

## 📁 Estrutura do Projeto

```
automacao-renato-cypress/
├── cypress/
│   ├── e2e/                    # Arquivos de teste
│   │   ├── yahooTests.cy.js    # Testes usando POM
│   │   └── yahooTestsDirect.cy.js # Testes sem POM
│   ├── pages/                  # Page Objects
│   │   └── YahooPage.js       # Page Object do Yahoo
│   └── support/                # Arquivos de suporte
├── allure-results/            # Resultados do Allure (gerado após execução)
├── allure-report/            # Relatório do Allure (gerado após execução)
└── package.json
```

## 🎯 Funcionalidades Testadas

- **Busca no Yahoo**
  - Realiza uma pesquisa por "Pacto Soluções"
  - Valida os resultados da busca
  - Captura screenshots da página de resultados

## ⚡ Executando os Testes

### Modo Headless (sem interface gráfica)
```bash
npm run cy:test
```

### Modo Interativo
```bash
npm run cypress:open
```

## 📊 Relatórios Allure

O projeto utiliza Allure Report para gerar relatórios detalhados dos testes. Para gerar e visualizar os relatórios:

1. Limpar relatórios anteriores:
```bash
npm run allure:clear
```

2. Executar os testes:
```bash
npm run cy:test
```

3. Gerar o relatório:
```bash
allure generate allure-results --clean -o allure-report
```

4. Visualizar o relatório:
```bash
allure open allure-report
```

## 📝 Scripts Disponíveis

```json
{
  "test": "cypress run",
  "cypress:open": "cypress open",
  "cy:test": "cypress run --env allure=true",
  "allure:clear": "if exist allure-results rmdir /s /q allure-results && if exist allure-report rmdir /s /q allure-report && if exist cypress\\screenshots rmdir /s /q cypress\\screenshots && if exist cypress\\videos rmdir /s /q cypress\\videos",
  "allure:report": "allure generate allure-results --clean -o allure-report",
  "allure:serve": "allure serve allure-results",
  "allure:open": "start allure-report/index.html",
  "allure:history": "if exist allure-report\\history xcopy /s /y allure-report\\history allure-results\\history\\ && if exist allure-report rmdir /s /q allure-report"
}
```

## 🔍 Page Objects

O projeto utiliza o padrão Page Object Model (POM) para melhor organização e manutenibilidade dos testes. Os page objects estão localizados em `cypress/pages/` e encapsulam os seletores e ações específicas de cada página.

## 📷 Screenshots

Os screenshots são capturados automaticamente durante a execução dos testes e podem ser encontrados em:
- `cypress/screenshots/` (após execução dos testes)
- Também são incluídos no relatório Allure

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📌 Versões

- Cypress: 15.1.0
- @shelex/cypress-allure-plugin: 2.41.2
- allure-commandline: 2.13.8
