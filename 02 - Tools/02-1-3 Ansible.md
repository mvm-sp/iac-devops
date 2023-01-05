Ansible
-------

O **Ansible** é uma ferramenta de automação criada para gerenciar múltiplas máquinas de uma única vez através de **playbooks** escritas no formato **YAML.**

### Características:

*   Arquitetura Master to Nodes;
*   Linguagem de Configuração Simples;
*   Não necessita de agents;
*   Simples de realizar manutenção;
*   Curva de aprendizado curta.

O Ansible é uma ferramenta muito poderosa, uma vez que ela necessita apenas de confiança **SSH** (seja por chave ou senha) e **Python**, o que a maioria das máquinas linux já possúi por padrão.


### Quando e porque eu utilizaria o Ansible?

Gosto muito de utilizar o ansible para algumas finalidades como parametrizar minha workstation, posso criar uma playbook que já instala e parametriza minha máquina por completa.

Um dos pontos mais positivos do ansible é sua curva de aprendizado, facilmente após estudar o ansible por cerca de 4 horas já é possível começar a utilizar ele em sua infraestrutura para pequenas tarefas e tomar proveito de todo o seu poder.

Não gosto de utilizar o ansible para garantir a configuração de um parque de máquinas, por exemplo, porque o ansible não garante (por si só) que a configuração estará ativa em todas as máquinas. Porém podemos utilizar ferramentas de Server como o **Ansible Tower** (ferramenta proprietária da Red Hat e paga) ou o **Ansible AWX** (projeto open source alternativo ao Tower) para potencializar sua utilização.

Outra maneira que eu gosto de utilizar o ansible é somado a outras ferramentas principalmente com o **Terraform** (ainda vamos falar sobre isto.

Através do **chocolatey** ou outro recurso é possível utilizar o ansible para parametrizar e gerenciar softwares em estações Windows.

_fonte_: _https://caiodelgado.dev/iac-tools/_