Github Actions
=======================================================

De acordo com a [documentação](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) da GitHub Actions, "GitHub Actions é uma plataforma de integração e entrega contínua (CI/CD) que permite automatizar sua construção, teste e distribuição de fluxos. Você pode criar fluxos de trabalho que constroem e testam cada solicitação de `pull` para seu repositório, ou implantar solicitações de `pull` fundidas para a produção".

Isto significa que com o GitHub Actions, você pode configurar fluxos CI/CD que funcionam quando certas ações são tomadas em um repositório. Você pode decidir executar testes para cada solicitação `pull` (PR) criada ou _mergeada_, você pode automaticamente implantar PR, e você pode até mesmo configurar um fluxo de trabalho para adicionar as etiquetas apropriadas quando um PR é criado.

Configurando Github Actions
--------------------------------------------
1. Crie um repositório no GitHub, ou você pode usar um repositório existente. No repositório, clique na guia `Actions`.  Um fluxo de trabalho simples com a estrutura mínima necessária já é sugerido, e você mesmo tem a opção de configurar um fluxo de trabalho.
2. Clique no botão Configurar para o fluxo de trabalho simples. Vamos tentar entender o que está acontecendo aqui.
3. `Workflows` - Observe o diretório no qual o arquivo é criado: `.github/workflows`. Um fluxo de trabalho é um processo automatizado configurável que executa um ou mais trabalhos. Você pode ver que o arquivo de fluxo de trabalho criado aqui é um arquivo YAML. Um fluxo de trabalho é definido por um arquivo YAML em seu arquivo `.github/workflows`.
e é acionado por um evento definido no arquivo.
O arquivo criado contém o código abaixo. Vamos usá-lo para explicar outros componentes das Ações GitHub, sendo o fluxo de trabalho um componente:

```yaml

# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.

```

**Eventos**

Em cada fluxo de trabalho criado, é preciso especificar um evento específico que aciona o fluxo de trabalho:

```yaml

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

```

**Jobs**

Um `job` é um conjunto de etapas que um fluxo de trabalho deve executar no mesmo corredor. Isto pode ser um roteiro de shell ou uma ação. As etapas são executadas em ordem no mesmo corredor e dependem uma da outra. Isto é bom porque os dados podem ser compartilhados de uma etapa para outra.

Os `jobs` são executados em paralelo, mas você também pode configurar um trabalho para depender de outro trabalho. Por exemplo, você pode querer implantar um PR fundido somente quando a construção for bem sucedida ou quando os testes tiverem passado.

**Runners**

Isto indica o servidor no qual o trabalho deve ser executado. Pode ser o Ubuntu Linux, Microsoft Windows ou MacOS, ou você pode hospedar seu próprio corredor no qual o trabalho deve ser executado.

No exemplo de fluxo de trabalho, queremos que o trabalho seja executado na última versão do Ubuntu:

```yaml
# The type of runner that the job will run on
    runs-on: ubuntu-latest
```

**Actions**

Uma ação realiza uma tarefa complexa e repetitiva. É uma aplicação personalizada para a plataforma GitHub Actions. As ações são realmente importantes para reduzir a quantidade de código que você precisa para configurar um fluxo de trabalho. Você pode tanto escrever uma ação ou usar uma ação já existente do GitHub Marketplace.

Aqui está um trecho de uma ação que é usada no fluxo de trabalho de amostra:

```yaml
# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
- uses: actions/checkout@v2
```

