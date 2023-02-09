Google Cloud Deployment Manager
-------------------------------

O Google Cloud Deployment Manager é um serviço de implementação de infra-estruturas que automatiza a criação e gestão dos recursos do Google Cloud. Escreve modelos e ficheiros de configuração flexíveis e utiliza-os para criar implementações que têm uma variedade de serviços Google Cloud, tais como Cloud Storage, Compute Engine, e Cloud SQL, configurados para trabalharem em conjunto. Uma configuração descreve todos os recursos que se pretende para uma única implementação


### Características:
*   configurações escritas no formato YAML
*   Possui templates otimizados para Google Cloud
*   Possibilidade de uso de imagens de outros projetos
*   Possui política de cotas para uso de alguns recursos

### Quando e porque eu utilizaria o Google Cloud Deployment Manager 
E mais uma soluçáo desenvolvida para um fornecedor de serviços cloud específico, assim como o [**CloudFormation**](02-1-6 CloudFormation) seu uso é restrito. Possui a vantagem de ter configurações no formato YAML o que poderia facilitar a migração dos templates para uma outra ferramente ou plataforma, mesmo assim, sua utilização seria recomendada em cenários onde não se prevê alguma tipo de migração.

_fonte_ : _https://cloud.google.com/deployment-manager/docs#docs_