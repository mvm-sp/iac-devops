ansible[](#ansible "Permalink to this headline")
=================================================

**Defina e execute um 'playbook' de tarefa única em um conjunto de hosts**

* [Sinopse](#sinopse)
    
* [Descrição](#descrição)
    
* [Opções comuns](#opções-comuns)
    
* [Ambiente](#ambiente)
    
* [Arquivos](#arquivos)
    
* [Autor](#autor)
    
* [Licença](#licença)
    
* [Veja também](#veja-também)
    

[Sinopse](#id2)[](#synopsis "Permalink to this headline")
-------------------------------------------------- ----------

uso: ansible \[\-h\] \[\--version\] \[\-v\] \[\-b\] \[\--become-method BECOME\_METHOD\]
             \[\--become-user BECOME\_USER\]
             \[\-K | --become-password-file BECOME\_PASSWORD\_FILE\]
             \[\-i INVENTÁRIO\] \[\--list-hosts\] \[\-l SUBSET\] \[\-P POLL\_INTERVAL\]
             \[\-B SECONDS\] \[\-o\] \[\-t TREE\] \[\--private-key PRIVATE\_KEY\_FILE\]
             \[\-u REMOTO\_USER\] \[\-c CONEXÃO\] \[\-T TIMEOUT\]
             \[\--ssh-common-args SSH\_COMMON\_ARGS\]
             \[\--sftp-extra-args SFTP\_EXTRA\_ARGS\]
             \[\--scp-extra-args SCP\_EXTRA\_ARGS\]
             \[\--ssh-extra-args SSH\_EXTRA\_ARGS\]
             \[\-k | --connection-password-file CONNECTION\_PASSWORD\_FILE\] \[\-C\]
             \[\--syntax-check\] \[\-D\] \[\-e EXTRA\_VARS\] \[\--vault-id VAULT\_IDS\]
             \[\--ask-vault-password | --vault-password-file VAULT\_PASSWORD\_FILES\]
             \[\-f FORKS\] \[\-M MODULE\_PATH\] \[\--playbook-dir BASEDIR\]
             \[\--task-timeout TASK\_TIMEOUT\] \[\-a MODULE\_ARGS\] \[\-m MODULE\_NAME\]
             padronizar

[Description](#id3)[](#description "Permalink to this headline")
-------------------------------------------------- ---------------

é uma ferramenta/framework/API extra-simples para fazer ‘coisas remotas’. este comando permite que você defina e execute uma única tarefa 'playbook' em um conjunto de hosts

[Opções comuns](#id4)[](#common-options "Permalink to this headline")
-------------------------------------------------- ---------------------

\--ask-vault-password, \--ask-vault-pass[](#cmdoption-ansible-ask-vault-password "Link permanente para esta definição")

pedir senha do cofre

\--become-method <BECOME\_METHOD>[](#cmdoption-ansible-become-method "Link permanente para esta definição")

método de escalonamento de privilégios a ser usado (padrão=sudo), use ansible-doc -t torne-se -l para listar opções válidas.

\--become-password-file <BECOME\_PASSWORD\_FILE>, \--become-pass-file <BECOME\_PASSWORD\_FILE>[](#cmdoption-ansible-become-password-file "Link permanente para esta definição ")

Torne-se arquivo de senha

\--become-user <BECOME\_USER>[](#cmdoption-ansible-become-user "Link permanente para esta definição")

executar operações como este usuário (padrão=root)

\--connection-password-file <CONNECTION\_PASSWORD\_FILE>, \--conn-pass-file <CONNECTION\_PASSWORD\_FILE>[](#cmdoption-ansible-connection-password-file "Link permanente para esta definição ")

Arquivo de senha de conexão

\--list-hosts[](#cmdoption-ansible-list-hosts "Link permanente para esta definição")

gera uma lista de hosts correspondentes; não executa mais nada

\--playbook-dir <BASEDIR>[](#cmdoption-ansible-playbook-dir "Link permanente para esta definição")

Como esta ferramenta não usa playbooks, use-o como um diretório de playbook substituto. Isso define o caminho relativo para muitos recursos, incluindo funções/ grupo\_vars/ etc.

\--private-key <PRIVATE\_KEY\_FILE>, \--key-file <PRIVATE\_KEY\_FILE>[](#cmdoption-ansible-private-key "Link permanente para esta definição")

use este arquivo para autenticar a conexão

\--scp-extra-args <SCP\_EXTRA\_ARGS>[](#cmdoption-ansible-scp-extra-args "Link permanente para esta definição")

especifique argumentos extras para passar apenas para scp (por exemplo, -l)

\--sftp-extra-args <SFTP\_EXTRA\_ARGS>[](#cmdoption-ansible-sftp-extra-args "Link permanente para esta definição")

especifique argumentos extras para passar apenas para sftp (por exemplo, -f, -l)

\--ssh-common-args <SSH\_COMMON\_ARGS>[](#cmdoption-ansible-ssh-common-args "Link permanente para esta definição")

especificar argumentos comuns para passar para sftp/scp/ssh (por exemplo, ProxyCommand)

\--ssh-extra-args <SSH\_EXTRA\_ARGS>[](#cmdoption-ansible-ssh-extra-args "Link permanente para esta definição")

especifique argumentos extras para passar apenas para ssh (por exemplo, -R)

\--syntax-check[](#cmdoption-ansible-syntax-check "Link permanente para esta definição")

execute uma verificação de sintaxe no playbook, mas não a execute

\--task-timeout <TASK\_TIMEOUT>[](#cmdoption-ansible-task-timeout "Link permanente para esta definição")

definir o limite de tempo limite da tarefa em segundos, deve ser um número inteiro positivo.

\--vault-id[](#cmdoption-ansible-vault-id "Link permanente para esta definição")

a identidade do cofre a ser usada

\--vault-password-file, \--vault-pass-file[](#cmdoption-ansible-vault-password-file "Link permanente para esta definição")

arquivo de senha do cofre

\--version[](#cmdoption-ansible-version "Link permanente para esta definição")

mostra o número da versão do programa, localização do arquivo de configuração, caminho de pesquisa do módulo configurado, localização do módulo, localização do executável e saída

\-B <SEGUNDOS>, \--background <SEGUNDOS>[](#cmdoption-ansible-B "Link permanente para esta definição")

executar de forma assíncrona, falhando após X segundos (padrão = N/A)

\-C, \--check[](#cmdoption-ansible-C "Link permanente para esta definição")

não faça nenhuma alteração; em vez disso, tente prever algumas das mudanças que podem ocorrer

\-D, \--diff[](#cmdoption-ansible-D "Link permanente para esta definição")

ao alterar (pequenos) arquivos e modelos, mostre as diferenças nesses arquivos; funciona muito bem com –check

\-K, \--ask-become-pass[](#cmdoption-ansible-K "Link permanente para esta definição")

pedir senha de escalonamento de privilégio

\-M, \--module-path[](#cmdoption-ansible-M "Link permanente para esta definição")

preceder caminho(s) separado(s) por dois-pontos para a biblioteca do módulo (padrão={{ ANSIBLE\_HOME ~ “/plugins/modules:/usr/share/ansible/plugins/modules” }})

\-P <POLL\_INTERVAL>, \--poll <POLL\_INTERVAL>[](#cmdoption-ansible-P "Link permanente para esta definição")

defina o intervalo de votação se estiver usando -B (padrão = 15)

\-T <TIMEOUT>, \--timeout <TIMEOUT>[](#cmdoption-ansible-T "Link permanente para esta definição")

substituir o tempo limite de conexão em segundos (padrão = 10)

\-a <MODULE\_ARGS>, \--args <MODULE\_ARGS>[](#cmdoption-ansible-a "Link permanente para esta definição")

As opções da ação no formato k=v separados por espaço: -a ‘opt1=val1 opt2=val2’ ou uma string json: -a ‘{“opt1”: “val1”, “opt2”: “val2”}’

\-b, \--become[](#cmdoption-ansible-0 "Link permanente para esta definição")

executar operações com torne-se (não implica solicitação de senha)

\-c <CONEXÃO>, \--connection <CONEXÃO>[](#cmdoption-ansible-1 "Link permanente para esta definição")

tipo de conexão a ser usada (padrão=inteligente)

\-e, \--extra-vars[](#cmdoption-ansible-e "Link permanente para esta definição")

defina variáveis adicionais como chave=valor ou YAML/JSON, se o nome do arquivo preceder com @

\-f <FORKS>, \--forks <FORKS>[](#cmdoption-ansible-f "Link permanente para esta definição")

especifique o número de processos paralelos a serem usados (padrão = 5)

\-h, \--help[](#cmdoption-ansible-h "Link permanente para esta definição")

mostrar esta mensagem de ajuda e sair

\-i, \--inventory, \--inventory-file[](#cmdoption-ansible-i "Link permanente para esta definição")

especifique o caminho do host de inventário ou a lista de hosts separada por vírgulas. –inventory-file está obsoleto

\-k, \--ask-pass[](#cmdoption-ansible-2 "Link permanente para esta definição")

pedir senha de conexão

\-l <SUBSET>, \--limit <SUBSET>[](#cmdoption-ansible-l "Link permanente para esta definição")

limitar ainda mais os hosts selecionados a um padrão adicional

\-m <MODULE\_NAME>, \--module-name <MODULE\_NAME>[](#cmdoption-ansible-3 "Link permanente para esta definição")

Nome da ação a ser executada (padrão=comando)

\-o, \--one-line[](#cmdoption-ansible-o "Link permanente para esta definição")

saída condensada

\-t <ÁRVORE>, \--árvore <ÁRVORE>[](#cmdoption-ansible-4 "Link permanente para esta definição")

log de saída para este diretório

\-u <REMOTE\_USER>, \--user <REMOTE\_USER>[](#cmdoption-ansible-u "Link permanente para esta definição")

conectar como este usuário (padrão=Nenhum)

\-v, \--verbose[](#cmdoption-ansible-v "Link permanente para esta definição")

Faz com que o Ansible imprima mais mensagens de depuração. Adicionar vários -v aumentará a verbosidade, os plug-ins integrados atualmente avaliam até -vvvvvv. Um nível razoável para iniciar é -vvv, a depuração de conexão pode exigir -vvvv.

[Ambiente](#id5)[](#ambiente "Link permanente para este título")
-------------------------------------------------- ---------------

As seguintes variáveis de ambiente podem ser especificadas.

[`ANSIBLE_CONFIG`](../reference_appendices/config.html#envvar-ANSIBLE_CONFIG) – Substitui o arquivo de configuração ansible padrão

Muitos mais estão disponíveis para a maioria das opções em ansible.cfg

[Files](#id6)[](#files "Permalink to this headline")
-------------------------------------------------- ---

`/etc/ansible/ansible.cfg` – Arquivo de configuração, usado se presente

`~/.ansible.cfg` – Arquivo de configuração do usuário, substitui a configuração padrão, se presente

[Autor](#id7)[](#autor "Link permanente para este título")
-------------------------------------------------- -----

Ansible foi originalmente escrito por Michael DeHaan.

Consulte o arquivo AUTHORS para obter uma lista completa de colaboradores.

[Licença](#id8)[](#license "Permalink to this headline")
-------------------------------------------------- -------

Ansible é lançado sob os termos da licença GPLv3+.

[Consulte também](#id9)[](#consulte-também "Link permanente para este título")
-------------------------------------------------- ----------

_ansible(1)_, _ansible-config(1)_, _ansible-console(1)_, _ansible-doc(1)_, _ansible-galaxy(1)_, _ansible-inventory(1)_, _ansible-playbook( 1)_, _ansible-pull(1)_, _ansible-vault(1)_,

[Anterior](../command_guide/command_line_tools.html "Trabalhando com ferramentas de linha de comando") [Próximo](ansible-config.html "ansible-config")

* * *

© Colaboradores do projeto Ansible de direitos autorais. Última atualização em 14 de dezembro de 2022.