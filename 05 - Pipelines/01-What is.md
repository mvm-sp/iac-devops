Pipelines de Infra Estrutura
=======================================================

Uma parte importante da disciplina de DevOps é a implementação de `pipelines` de orquestração de tarefas, ou seja, a ordem e a forma de execução de um conjunto de comandos que são necessários para a conclusão de um determinado `job` são delegadas para uma ferramenta específica e, a partir dos recursos oferecidos por estas ferramentas, montamos a codificação dos `steps` pertinentes àquele tipo de solução.

## Ferramentas para configuração de pipelines
* [Buddy](https://buddy.works/) é uma solução criativa de CI/CD para desenvolvedores web que ajuda na transição para DevOps mais fácil. Ela desenvolve, testa e implementa software usando dutos de entrega. Ele suporta todas as linguagens, frameworks e ferramentas de gerenciamento de tarefas amplamente utilizadas.
* [Jenkins](https://www.jenkins.io/) é uma ferramenta de integração contínua e multiplataforma utilizada para construir e testar continuamente aplicações de software. As linguagens de programação Java são usadas para desenvolver o Jenkins. Elas oferecem testes e relatórios em tempo real. Pode ser usada para realizar construções contínuas, executar testes ou realizar tarefas repetitivas.
Os desenvolvedores podem implantar o Jenkins em um recipiente de servlet. Graças à sua simples instalação e configuração, é uma das melhores ferramentas de CD CI. Além disso, o Jenkins pode ser estendido através de plugins que oferecem infinitas possibilidades de implantações contínuas.
* [Buildbot](https://buildbot.net/) foi criado em Python e trabalhou com a estrutura Twisted. O Buildbot é uma plataforma de código aberto que automatiza testes complexos e processos de implantação de aplicações. A popularidade desta ferramenta é porque ela facilita a execução paralela e distribuída de estratégias através de várias plataformas.
* [Urbancode](https://www.ibm.com/cloud/urbancode) oferece entrega contínua, auto-serviço, feedback rápido, atualizações incrementais e automatiza consistentemente as implantações de aplicações. As aplicações também podem ser revertidas e as modificações podem ser distribuídas por servidores, camadas e componentes. Também oferece versões, trilhas de auditoria e outras características.
* [Codeship](https://www.cloudbees.com/products/codeship) é um software que ajuda a implementar e otimizar a CI e o CD na nuvem. Integração de terceiros sem problemas, painéis de projeto e notificações inteligentes são algumas de suas melhores características. Qualquer ferramenta, serviço ou nuvem pode ser integrada à Codeship para um fluxo de trabalho perfeito.  Além disso, ele entrega builds e deployments em menos de 5 minutos.
* [AWS Pipeline](https://aws.amazon.com/getting-started/hands-on/set-up-ci-cd-pipeline/) oferece um conjunto completo de ferramentas DevOps CI CD. Sempre que há uma mudança de código, AWS CodePipeline automatiza a construção, o teste e a implantação de partes do processo de lançamento com base no modelo de lançamento estabelecido. Isto torna possível oferecer recursos e atualizações de forma rápida e eficaz.
Os dutos para código podem ser conectados a outros serviços. Estes podem ser bens de terceiros como o GitHub ou serviços AWS como o Amazon Simple Storage Service. AWS CodePipeline pode tratar de diferentes casos de desenvolvimento e uso operacional
* [Azure CI CD Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) combina CI (integração contínua) e CD (entrega contínua) para testar e construir o código e transferi-lo para o local de destino.
O CD CI Azure é usado para construir e liberar dutos para projetos específicos junto com os Repos Azure, que podem ser usados para manter um repositório central. O projeto desenvolvido pode ser implantado em múltiplos ambientes alvo, incluindo máquinas virtuais, containers ou qualquer plataforma de nuvem.
* [Gitlab](https://docs.gitlab.com/ee/ci/) é uma coleção de ferramentas para controlar várias fases do ciclo de vida do desenvolvimento de software. A oferta principal é um gerente de repositório Git para a web com ferramentas para rastreamento de problemas, análise e um wiki.
Com cada commit ou push no GitLab, você tem a opção de começar a construir, lançar testes e implantar código. Os trabalhos podem ser criados em outro servidor, em uma máquina virtual, ou usando containers Docker.
* [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) é uma plataforma de integração e entrega contínua (CI/CD) que lhe permite automatizar sua construção, teste e implantação de recursos. Você pode criar fluxos de trabalho que constroem e testam cada solicitação de `push` para seu repositório, ou implantar solicitações de `push` atribuídas para a produção.

CI (continuous integration)
---------------------------------

A integração contínua (CI) é a prática de engenharia de software que requer compromissos frequentes com um repositório compartilhado. Você pode ter se acostumado tanto a esta prática que pode se perguntar por que existe um termo para isso.

Para entender isto melhor, vamos considerar o oposto de CI. Antes da CI, as pessoas trabalhariam em `branchs` durante semanas ou meses e depois tentariam fundir esta `branch` a uma outra principal. Pense em tudo o que poderia dar errado durante tal fusão - fundir conflitos e testes fracassados, só para mencionar alguns.

A integração contínua tenta evitar tudo isso, incentivando pequenas e freqüentes atualizações de código. Quando um código é comprometido com um repositório, ele pode ser construído e testado contra fluxos de trabalho de configuração para garantir que o código não introduza nenhum erro.

CD (continuous deployment)
----------------------------------------------
A implantação contínua significa que as mudanças de código são automaticamente implantadas/liberadas em um ambiente de teste ou produção assim que elas são submetidas ao repositório. Isto é freqüentemente alternado com a entrega contínua e isto porque são muito semelhantes. A única diferença é que na entrega contínua, a intervenção humana (por exemplo, o clique de um botão) é necessária para que as mudanças sejam liberadas. Entretanto, na distribuição contínua, tudo acontece automaticamente. 

Vantagens na utilização do conceito CI/CD
-------------------------------------------------

Aqui estão mais vantagens, além daquelas já mencionadas acima:

* O isolamento de falhas é mais simples e rápido. Como as mudanças são menores, é mais fácil isolar as mudanças que causam um bug após a implantação. Isto facilita a correção ou o retrocesso das mudanças, se necessário.
* Como a CI/CD incentiva pequenas e freqüentes mudanças, o tempo de revisão do código é menor.
Uma parte importante do conceito CI/CD é o teste automatizado de fluxos críticos para um projeto. Isso facilita a prevenção de mudanças que podem quebrar esses fluxos na produção.
* Melhor qualidade de código é garantida porque você pode configurar a tarefa para testar contra as regras de promoção

