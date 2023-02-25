O que é o Ansible?? 
--------------------------------------------------
O Ansible é uma ferramenta de código aberto para de automação de rotinas de TI usada para configurar, gerenciar e provisionar servidores, redes e outros recursos de computação. Ele permite que os administradores de sistema automatizem tarefas repetitivas e demoradas, tais como instalação de software, atualizações de sistema operacional, configuração de serviços de rede e provisionamento de infraestrutura de nuvem. O Ansible usa uma linguagem imperativa simples e uma arquitetura baseada em _agentless_, portanto não é necessário instalar software adicional nos servidores alvo para que a automação seja executada. O Ansible é amplamente utilizado em ambientes de produção, desde pequenas startups até grandes empresas, devido à sua simplicidade, flexibilidade e escalabilidade.


Qual a Utiidade do Ansible?? 
--------------------------------------------------

O Ansible é um mecanismo de automação de TI open source para automação de processos como [provisionamento](https://www.redhat.com/pt-br/topics/automation/what-is-provisioning), [gerenciamento de configurações](https://www.redhat.com/pt-br/topics/automation/what-is-configuration-management), implantação de aplicações, [orquestração](https://www.redhat.com/pt-br/topics/automation/what-is-orchestration) e muitos outros.

Utilize os recursos de automação do Ansible para instalar softwares, automatizar tarefas rotineiras, provisionar infraestrutura, melhorar segurança e conformidade, aplicar patch em sistemas e compartilhar automação na sua empresa.


Como o Ansible funciona?
------------------------

O Ansible se conecta aos seus nós e envia a eles pequenos programas chamados módulos. Os módulos são usados para realizar tarefas de automação no Ansible. Esses programas são projetados para serem modelos de recursos do estado desejado do sistema. Em seguida, o Ansible executa esses módulos e os remove ao terminar.

Sem eles, você dependeria de comandos ad hoc e scripts para realizar suas tarefas. O Ansible pode ser instalado no [Red Hat® Enterprise Linux®](https://www.redhat.com/pt-br/technologies/linux-platforms/enterprise-linux), [CentOS](https://www.redhat.com/pt-br/topics/linux/what-is-centos) ou [Fedora](https://www.redhat.com/pt-br/topics/linux/fedora-vs-red-hat-enterprise-linux), Ubuntu, Debian e muitos outros sistemas operacionais.

[Ansible: guia de instalação](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

O Ansible é uma ferramenta sem agentes, ou seja, não requer instalação de software para gerenciamento dos nós. Ele acessa seu inventário e lê as informações sobre quais máquinas você deseja gerenciar. O Ansible tem um arquivo de inventário padrão, mas você pode criar o seu próprio arquivo e definir quais servidores quer que sejam gerenciados. 

Ele usa o [protocolo SSH](https://www.ssh.com/ssh/protocol/) para se conectar aos servidores e executar as tarefas. Por padrão, o Ansible usa chaves SSH com o ssh-agent e seu nome de usuário atual para se conectar a máquinas remotas. Não é preciso ter login de raiz. Faça login com qualquer usuário e execute os comandos su ou sudo nos usuários.

[Como o SSH estabelece uma comunicação segura](https://www.redhat.com/sysadmin/ssh-secure-communication)

Depois de se conectar, o Ansible transfere os módulos exigidos pelo comando ou pelo playbook para serem executados na(s) máquina(s) remota(s). Ele usa templates [YAML](https://www.redhat.com/pt-br/topics/automation/what-is-yaml) legíveis para que os usuários programem a automação de tarefas repetitivas sem precisar aprender uma linguagem de programação avançada.

Você pode usar os [módulos integrados](https://docs.ansible.com/ansible/2.8/modules/modules_by_category.html) do Ansible para automatizar tarefas ou escrever os seus próprios. Os módulos do Ansible podem ser escritos em qualquer linguagem que retorne JSON, como Ruby, Python ou bash. Os módulos de [automação do Windows](https://www.redhat.com/pt-br/technologies/management/ansible/automate-microsoft-windows-with-ansible) são escritos até mesmo em Powershell. 

[Dez módulos do Ansible para iniciantes](https://opensource.com/article/19/9/must-know-ansible-modules)


Como usar o Ansible para comandos ad-hoc
----------------------------------------

O Ansible também pode ser usado para executar comandos ad-hoc. Para isso, execute um comando ou chame um módulo diretamente da linha de comando. Não é preciso usar um playbook. Para uma tarefa única, isso não é um problema. Já para comandos mais complexos, é necessário usar um [Ansible playbook](https://www.redhat.com/pt-br/topics/automation/what-is-an-ansible-playbook).

_fonte_ : _https://www.redhat.com/pt-br/topics/automation/learning-ansible-tutorial_