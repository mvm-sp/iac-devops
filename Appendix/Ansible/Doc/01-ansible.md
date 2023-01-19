ansible
=================================================

**Defina e execute um 'playbook' de tarefa única em um conjunto de hosts**

    

Sinopse
------------------------------------------------------------

```console

ansible [-h] [--version] [-v] [-b] [--become-method BECOME_METHOD]
            [--become-user BECOME_USER]
            [-K | --become-password-file BECOME_PASSWORD_FILE]
            [-i INVENTORY] [--list-hosts] [-l SUBSET] [-P POLL_INTERVAL]
            [-B SECONDS] [-o] [-t TREE] [--private-key PRIVATE_KEY_FILE]
            [-u REMOTE_USER] [-c CONNECTION] [-T TIMEOUT]
            [--ssh-common-args SSH_COMMON_ARGS]
            [--sftp-extra-args SFTP_EXTRA_ARGS]
            [--scp-extra-args SCP_EXTRA_ARGS]
            [--ssh-extra-args SSH_EXTRA_ARGS]
            [-k | --connection-password-file CONNECTION_PASSWORD_FILE] [-C]
            [--syntax-check] [-D] [-e EXTRA_VARS] [--vault-id VAULT_IDS]
            [--ask-vault-password | --vault-password-file VAULT_PASSWORD_FILES]
            [-f FORKS] [-M MODULE_PATH] [--playbook-dir BASEDIR]
            [--task-timeout TASK_TIMEOUT] [-a MODULE_ARGS] [-m MODULE_NAME]
            pattern

```

Descrição
-----------------------------------------------------------------

é uma ferramenta/framework/API extra-simples para fazer ‘coisas remotas’. este comando permite que você defina e execute uma única tarefa 'playbook' em um conjunto de hosts

Opções comuns
-----------------------------------------------------------------------

```console

--ask-vault-password, --ask-vault-pass

```

pedir senha do cofre

```console

--become-method <BECOME_METHOD>

```

método de escalonamento de privilégios a ser usado (padrão=sudo), use ansible-doc -t torne-se -l para listar opções válidas.

```console

--become-password-file <BECOME_PASSWORD_FILE>, --become-pass-file <BECOME_PASSWORD_FILE>

```

Torne-se arquivo de senha

```console

--become-user <BECOME_USER>

```

executar operações como este usuário (padrão=root)

```console

--connection-password-file <CONNECTION_PASSWORD_FILE>, --conn-pass-file <CONNECTION_PASSWORD_FILE>

```

Arquivo de senha de conexão

```console

--list-hosts

```

gera uma lista de hosts correspondentes; não executa mais nada

```console

--playbook-dir <BASEDIR>

```

Como esta ferramenta não usa playbooks, use-o como um diretório de playbook substituto. Isso define o caminho relativo para muitos recursos, incluindo funções/ grupo_vars/ etc.

```console

--private-key <PRIVATE_KEY_FILE>, --key-file <PRIVATE_KEY_FILE>

```


use este arquivo para autenticar a conexão

```console

--scp-extra-args <SCP_EXTRA_ARGS>

```

especifique argumentos extras para passar apenas para scp (por exemplo, -l)

```console

--sftp-extra-args <SFTP_EXTRA_ARGS>

```

especifique argumentos extras para passar apenas para sftp (por exemplo, -f, -l)

```console

--ssh-common-args <SSH_COMMON_ARGS>

```

especificar argumentos comuns para passar para sftp/scp/ssh (por exemplo, ProxyCommand)

```console

--ssh-extra-args <SSH_EXTRA_ARGS>

```

especifique argumentos extras para passar apenas para ssh (por exemplo, -R)

```console

--syntax-check

```

execute uma verificação de sintaxe no playbook, mas não a execute

```console

--task-timeout <TASK_TIMEOUT>

```

definir o limite de tempo limite da tarefa em segundos, deve ser um número inteiro positivo.

```console

--vault-id

```

a identidade do cofre a ser usada

```console

--vault-password-file, --vault-pass-file

```

arquivo de senha do cofre

```console

--version

```

mostra o número da versão do programa, localização do arquivo de configuração, caminho de pesquisa do módulo configurado, localização do módulo, localização do executável e saída

```console

-B <SEGUNDOS>, --background <SEGUNDOS>

```

executar de forma assíncrona, falhando após X segundos (padrão = N/A)

```console

-C, --check

```

não faça nenhuma alteração; em vez disso, tente prever algumas das mudanças que podem ocorrer

```console

-D, --diff

```

ao alterar (pequenos) arquivos e modelos, mostre as diferenças nesses arquivos; funciona muito bem com –check

```console

-K, --ask-become-pass

```

pedir senha de escalonamento de privilégio

```console

-M, --module-path

```


preceder caminho(s) separado(s) por dois-pontos para a biblioteca do módulo (padrão={{ ANSIBLE_HOME ~ “/plugins/modules:/usr/share/ansible/plugins/modules” }})

```console

-P <POLL_INTERVAL>, --poll <POLL_INTERVAL>

```

defina o intervalo de votação se estiver usando -B (padrão = 15)

```console

-T <TIMEOUT>, --timeout <TIMEOUT>

```

substituir o tempo limite de conexão em segundos (padrão = 10)

```console

-a <MODULE_ARGS>, --args <MODULE_ARGS>

```

As opções da ação no formato k=v separados por espaço: -a ‘opt1=val1 opt2=val2’ ou uma string json: -a ‘{“opt1”: “val1”, “opt2”: “val2”}’

```console

-b, --become

```

executar operações com torne-se (não implica solicitação de senha)

```console

-c <CONEXÃO>, --connection <CONEXÃO>

```

tipo de conexão a ser usada (padrão=inteligente)

```console

-e, --extra-vars

```

defina variáveis adicionais como chave=valor ou YAML/JSON, se o nome do arquivo preceder com @

```console

-f <FORKS>, --forks <FORKS>

```

especifique o número de processos paralelos a serem usados (padrão = 5)

```console

-h, --help

```

mostrar esta mensagem de ajuda e sair

```console

-i, --inventory, --inventory-file

```

especifique o caminho do host de inventário ou a lista de hosts separada por vírgulas. –inventory-file está obsoleto

```console

-k, --ask-pass

```

pedir senha de conexão

```console

-l <SUBSET>, --limit <SUBSET>

```

limitar ainda mais os hosts selecionados a um padrão adicional

```console

-m <MODULE_NAME>, --module-name <MODULE_NAME>

```
Nome da ação a ser executada (padrão=comando)

```console

-o, --one-line

```

saída condensada

```console

-t <TREE>, --tree <TREE>

```

log de saída para este diretório

```console

-u <REMOTE_USER>, --user <REMOTE_USER>

```

conectar como este usuário (padrão=Nenhum)

```console

-v, --verbose

```

Faz com que o Ansible imprima mais mensagens de depuração. Adicionar vários -v aumentará a verbosidade, os plug-ins integrados atualmente avaliam até -vvvvvv. Um nível razoável para iniciar é -vvv, a depuração de conexão pode exigir -vvvv.


Ambiente
-----------------------------------------------------------------

As seguintes variáveis de ambiente podem ser especificadas.

[`ANSIBLE_CONFIG`](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#envvar-ANSIBLE_CONFIG) – Substitui o arquivo de configuração ansible padrão

Muitos mais estão disponíveis para a maioria das opções em ansible.cfg

Arquivos
----------------------------------------------------

`/etc/ansible/ansible.cfg` – Arquivo de configuração, usado se presente

`~/.ansible.cfg` – Arquivo de configuração do usuário, substitui a configuração padrão, se presente

Autor
-------------------------------------------------------

Ansible foi originalmente escrito por Michael DeHaan.

Consulte o arquivo AUTHORS para obter uma lista completa de colaboradores.

Licença
---------------------------------------------------------

Ansible é lançado sob os termos da licença GPLv3+.

_fonte_ : _https://docs.ansible.com/ansible/latest/cli/ansible.html_