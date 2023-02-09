Puppet
------

O **Puppet** é uma ferramenta de gerenciamento de configurações de sistemas Unix-like e Windows através de uma linguagem declarativa baseada em **Ruby.**

Características:
----------------

*   Serveres Multi-Master
*   Arquitetura Agent to Master;
*   Suporta segregação de Ambientes (Prod/Homolog/Dev);
*   Comunicação segura SSL;
*   Idempotência;
*   Indisponibilidade do **Master** pode não impactar no funcionamento dos agents.

### Quando e porque eu utilizaria o Puppet?

O puppet é uma ferramenta sensacional para gerenciar um datacenter ou um parque de workstations, por possuir recursos como o **runinterval** em que a configuração é aplicada diversas vezes de acordo com a configuração de intervalo configurada e caso o Server esteja indisponível o agente não para de tentar aplicar a configuração do mesmo, uma vez que ele não precise receber algum arquivo do Server que esteja indisponível.

O Puppet trabalha com a arquitetura multi-master, onde todos os Serveres instalados e configurados na rede trabalham em tempo integral, diferente de ferramentas como o Chef que utiliza Serveres primários e backups.

Outra grande vantagem do puppet é que ele funciona em ambientes Unix e Microsoft nativamente através da instalação do Puppet Agent.

Podemos também expandir as funcionalidades através de recursos como o **Puppet DB** para coletar e inventariar as máquinas e o **Puppet Dashboard** ou o **Foreman** como ferramentas de dashboard para visualizar e verificar as configurações aplicadas no ambiente.

_fonte_: _https://caiodelgado.dev/iac-tools/_