SaltStack 
---------

O **SaltStack** é um software de gerenciamento de configuração open source baseado em Python. Ele permite execução remota, ideal para aplicação da abordagem de infraestrutura como código na implantação e gerenciamento de nuvem. 

### Características:

*   Sistema de integração nativa com outros frameworks
*   Controla o estado das configurações
*   Baseado em CLI
*   Escalabilidade e resistência.
*   Configurações de [**Salt Master**](https://docs.saltproject.io/en/latest/glossary.html#term-Master) e [**Salt Minion**](https://docs.saltproject.io/en/latest/glossary.html#term-Minion)

### Quando e porque eu utilizaria o SaltStack

O Salt é um framework de código aberto escrito em Python para configuração de equipamentos, portanto similar ao [**Ansible**](02-1-3%20Ansible.md). Ele é capaz de manter **_Nodes_** remotos em estados definidos. Por exemplo, pode garantir que pacotes específicos sejam instalados e que serviços específicos estejam em execução e também pode consultar e executar comandos em **_Nodes_** individuais ou usando um critério de seleção arbitrário.

_fonte:_ _https://docs.saltproject.io/en/latest/topics/index.html_