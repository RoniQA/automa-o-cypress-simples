# Automação de Testes com Cypress

Este projeto contém testes automatizados usando Cypress com duas abordagens diferentes (Page Object Model e Direta) para realizar buscas no Yahoo, incluindo geração de relatórios com Allure, screenshots automáticos e logs detalhados.

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) (v22.17.0 ou superior)
- [Java](https://www.java.com/) (v24.0.2 ou superior) - Necessário para o Allure Report
- NPM (geralmente instalado com Node.js)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/RoniQA/automa-o-cypress-simples.git
cd automacao-cypress-simples
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

- **Busca no Yahoo (Duas Versões)**
  1. **Com Page Object Model (yahooTests.cy.js)**
     - Implementa o padrão POM para melhor organização
     - Captura screenshots após validação dos resultados
     - Inclui logs detalhados das ações
  
  2. **Versão Direta (yahooTestsDirect.cy.js)**
     - Implementação mais simples e direta
     - Também inclui captura de screenshots
     - Logs detalhados de cada ação

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

Os screenshots são capturados automaticamente durante a execução dos testes:
- **yahooTests.cy.js**: Salva como 'yahoo-search-results'
- **yahooTestsDirect.cy.js**: Salva como 'yahoo-direct-search-results'

Localização dos screenshots:
- `cypress/screenshots/` (após execução dos testes)
- Também são incluídos no relatório Allure

## 🔍 Implementações Específicas

### Page Object Model (YahooPage.js)
- Implementa métodos reutilizáveis para navegação
- Inclui validações robustas
- Integração com Allure para relatórios detalhados
- Logs detalhados de cada ação

### Testes Diretos (yahooTestsDirect.cy.js)
- Implementação mais simples e direta
- Mantém as mesmas validações de qualidade
- Inclui logs detalhados para melhor visibilidade na interface do Cypress

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
