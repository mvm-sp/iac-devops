Azure Resource Manager 
----------------------

O Azure Resource Manager é o serviço de implantação e gestão do Azure. Fornece uma camada de gestão que lhe permite criar, actualizar, e eliminar recursos na sua conta Azure. Utiliza funcionalidades de gestão, como controle de acesso, bloqueios e etiquetas, para proteger e organizar os seus recursos após a implantação.

### Características:
*   possui templates otimizados para Azure
*   Integraçáo com o portal azure, clients REST ou SDKs 
*   Sintaxe declarativa

### Quando e porque eu utilizaria o Azure Resource Manager 
Como trata-se de uma soluçáo desenvolvida para rodar em uma plataforma única, assim como o [**CloudFormation**](02-1%20Ferramentas.md) seu uso é restrito. Utilizaria por questões de performance e velocidade de implementação em um provedor específico, desde que estivesse certo de que não haveria necessidade de reaizar uma migração de plataforma.

_fonte_ : _https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview_