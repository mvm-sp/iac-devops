Configurações do Ansible?
------------------------------

As configurações do Ansible podem ser classificadas em dois grupos:  um para de configuração do Ansible e outro(s) de inventário do host.


Arquivo de configuração do Ansible?
-----------------------------------

o arquivo de configuração padrão é `/etc/ansible/ansible.cfg`

Você pode alterar esse arquivo de configuração global ou fazer uma cópia especialmente para um diretório específico. A ordem de localização de um arquivo de configuração é a seguinte:

* ANSIBLE_CONFIG (environment variable)
* ansible.cfg (per directory)
* ~/.ansible.cfg (home directory)
* /etc/ansible/ansible.cfg (global)

O Arquivo de configuração pode ser manipulado por um editor de textos comum com vi, vim ou nano, porém o Ansible reserva esta manipulação pela utilização do comando [ansible-config](../Appendix/Ansible/Doc/02-ansible-config.md), como por exemplo:

para gerar um `ansible.cfg` com o conteúdo totalmente comentado, utilize:

```console

ansible-config init --disabled > ansible.cfg

```

Também pode ter um arquivo mais completo que inclua os plugins existentes:

```console

ansible-config init --disabled -t all > ansible.cfg

```

Você também poderá utilizar o `ansible-config` para verificar quais configurações estão habilitadas para a sua execução.

```console

ansible-config list

```

Ou ainda verificar diferenças entre arquivos locais de configuração e o arquivo global do Ansible:

```console

ansible-config dump -v -\-only-changed 

```

Arquivo de inventário do Ansible?
-----------------------------------

No ansible, arquivos de inventários são aqueles utilizados para armazenar informação sobre os nós(hosts/servidores) remotos, que precisamos ser gerenciados. Por padrão o Ansible utiliza o arquivo localizado em `/etc/ansible/hosts`, mas você pode optar por ter outros arquivos em diretórios específicos para garantir a abrangência de suas execuções. Este arquivo pode ser colocado em qualquer lugar, mas a sua localização precisa de ser configurada ou em um arquivo de configuração ou especificado na linha de comando CLI do Ansible. Este é um daqueles arquivos importantes para manter sua gestão sob controle. Toda vez que, você executa um playbook, verifica os hosts listados no arquivo do inventário, depois utiliza esta informação para fazer a ligação, login e executar tarefas em hosts remotos.

O Ansible automatiza tarefas em nós geridos ou "hosts" na sua infra-estrutura, utilizando uma lista ou grupo de listas conhecidas como inventário. Pode passar nomes de hosts na linha de comando, mas a maioria dos desenvolvedores Ansible cria arquivos de inventário. O seu inventário define os nós geridos que alcançar, com grupos para que possa executar tarefas de automatização em múltiplos hosts ao mesmo tempo. Uma vez definido o seu inventário, usa padrões para seleccionar os hosts ou grupos contra os quais deseja que o Ansible funcione.

Exemplo de arquivo de hosts:

```js

[webservers]
100.0.0.1
200.10.10.10

[databases]
10.5.1.1
10.5.1.2

[ubuntu]
100.0.0.1
200.10.10.10
10.5.1.1
10.5.1.2

```
Neste exemplo temos um arquivo de inventário com quatro hosts distintos que estão identificados em 3 diferentes grupos `webservers`, `databases` e `ubuntu`, esta configuração de inventário permite que as execuções sejam direcionadas para um determinado grupo de acordo com a sua natureza, podemos ter tarefas de manutenção de banco de dados diferentes das tarefas destinadas aos servidores web e ainda tarefas comuns que podem ser aplicadas a todos os servidores com a distribuição ubuntu do linux.


