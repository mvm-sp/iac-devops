ansible-console
=================================================================

**Console REPL para executar tarefas Ansible.**

Sinopse
-----------------------------------------------------------

```console

ansible-console [-h] [--version] [-v] [-b]
                    [--become-method BECOME_METHOD]
                    [--become-user BECOME_USER]
                    [-K | --become-password-file BECOME_PASSWORD_FILE]
                    [-i INVENTORY] [--list-hosts] [-l SUBSET]
                    [--private-key PRIVATE_KEY_FILE] [-u REMOTE_USER]
                    [-c CONNECTION] [-T TIMEOUT]
                    [--ssh-common-args SSH_COMMON_ARGS]
                    [--sftp-extra-args SFTP_EXTRA_ARGS]
                    [--scp-extra-args SCP_EXTRA_ARGS]
                    [--ssh-extra-args SSH_EXTRA_ARGS]
                    [-k | --connection-password-file CONNECTION_PASSWORD_FILE]
                    [-C] [--syntax-check] [-D] [--vault-id VAULT_IDS]
                    [--ask-vault-password | --vault-password-file VAULT_PASSWORD_FILES]
                    [-f FORKS] [-M MODULE_PATH] [--playbook-dir BASEDIR]
                    [-e EXTRA_VARS] [--task-timeout TASK_TIMEOUT] [--step]
                    [pattern]

```

Descrição
----------------------------------------------------------------

Um REPL que permite a execução de tarefas ad-hoc em um inventário escolhido a partir de um bom shell com conclusão de tabulação integrada (baseado no ansible-shell de dominis).

Ele suporta vários comandos, e você pode modificar sua configuração em tempo de execução:

* cd \[padrão\]: alterar host/grupo (você pode usar padrões de host, por exemplo: app\*.dc\*:!app01\*)
    
* list: lista os hosts disponíveis no caminho atual
    
* listar grupos: listar grupos incluídos no caminho atual
    
* torne-se: alterne o sinalizador de tornar-se
    
* !: força o módulo shell em vez do módulo ansible (!yum update -y)
    
* verbosidade \[num\]: define o nível de verbosidade
    
* garfos \[num\]: define o número de garfos
    
* torne-se_usuário \[usuário\]: defina o tornar-se_usuário
    
* remote_user \[user\]: defina o remote_user
    
* torne-se_método \[método\]: defina o método de escalonamento de privilégio
    
* check \[bool\]: alterna o modo de verificação
    
* diff \[bool\]: alterna o modo de comparação
    
* timeout \[inteiro\]: defina o tempo limite das tarefas em segundos (0 para desabilitar)
    
* help \[command/module\]: exibe a documentação para o comando ou módulo
    
* exit: sair do ansible-console
    

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

--step

```

um passo de cada vez: confirme cada tarefa antes de executá-la

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

-T <TIMEOUT>, --timeout <TIMEOUT>

```

substituir o tempo limite de conexão em segundos (padrão = 10)

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

```console

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

_fonte_ : _https://docs.ansible.com/ansible/latest/cli/ansible-console.html_