ansible-pull[](#ansible-pull 
=============================================================

**Gerencia playbooks de um repositório VCS e os executa para o host local**

Sinopse
------------------------------------------------------------

```console

ansible-pull     [-h] [--version] [-v] [--private-key PRIVATE_KEY_FILE]
                 [-u REMOTE_USER] [-c CONNECTION] [-T TIMEOUT]
                 [--ssh-common-args SSH_COMMON_ARGS]
                 [--sftp-extra-args SFTP_EXTRA_ARGS]
                 [--scp-extra-args SCP_EXTRA_ARGS]
                 [--ssh-extra-args SSH_EXTRA_ARGS]
                 [-k | --connection-password-file CONNECTION_PASSWORD_FILE]
                 [--vault-id VAULT_IDS]
                 [--ask-vault-password | --vault-password-file VAULT_PASSWORD_FILES]
                 [-e EXTRA_VARS] [-t TAGS] [--skip-tags SKIP_TAGS]
                 [-i INVENTORY] [--list-hosts] [-l SUBSET] [-M MODULE_PATH]
                 [-K | --become-password-file BECOME_PASSWORD_FILE]
                 [--purge] [-o] [-s SLEEP] [-f] [-d DEST] [-U URL] [--full]
                 [-C CHECKOUT] [--accept-host-key] [-m MODULE_NAME]
                 [--verify-commit] [--clean] [--track-subs] [--check]
                 [--diff]
                 [playbook.yml ...]
                

```

Descrição 
-----------------------------------------------------------------

Usado para obter uma cópia remota do ansible em cada nó gerenciado, cada um configurado para executar via cron e atualizar a fonte do playbook por meio de um repositório de origem. Isso inverte a arquitetura _push_ padrão do ansible em uma arquitetura _pull_, que tem potencial de dimensionamento quase ilimitado.

Nenhuma das ferramentas CLI foi projetada para executar simultaneamente, você deve usar um agendador externo e/ou bloqueio para garantir que não haja operações conflitantes.

O playbook de configuração pode ser ajustado para alterar a frequência cron, locais de log e parâmetros para ansible-pull. Isso é útil tanto para expansão extrema quanto para remediação periódica. O uso do módulo 'fetch' para recuperar logs de execuções de ansible-pull seria uma excelente maneira de coletar e analisar logs remotos de ansible-pull.

Opções comuns 
-----------------------------------------------------------------------

```console

--accept-host-key -del-accept-host-key 

```

adiciona a chave de host para o repo url se ainda não tiver adicionado

```console

--ask-vault-password, --ask-vault-pass 

```

pedir senha do cofre

```console

--become-password-file <BECOME_PASSWORD_FILE>, --become-pass-file <BECOME_PASSWORD_FILE> 

```

Torne-se arquivo de senha

```console

--check

```

não faça nenhuma alteração; em vez disso, tente prever algumas das mudanças que podem ocorrer

```console

--clean 

```

arquivos modificados no repositório de trabalho serão descartados

```console

--connection-password-file <CONNECTION_PASSWORD_FILE>, --conn-pass-file <CONNECTION_PASSWORD_FILE> 

```

Arquivo de senha de conexão

```console

--diff 

```

ao alterar (pequenos) arquivos e modelos, mostre as diferenças nesses arquivos; funciona muito bem com –check

```console

--full  

```

Faça um clone completo, em vez de um raso.

```console

--list-hosts  

```

gera uma lista de hosts correspondentes; não executa mais nada

```console

--private-key <PRIVATE_KEY_FILE>, --key-file <PRIVATE_KEY_FILE> 

```

use este arquivo para autenticar a conexão

```console

--purge 

```

limpar check-out após a execução do playbook

```console

--scp-extra-args <SCP_EXTRA_ARGS>  

```

especifique argumentos extras para passar apenas para scp (por exemplo, -l)

```console

--sftp-extra-args <SFTP_EXTRA_ARGS> 

```

especifique argumentos extras para passar apenas para sftp (por exemplo, -f, -l)

```console

--skip-tags

```

execute apenas execuções e tarefas cujas tags não correspondam a esses valores

```console

--ssh-common-args <SSH_COMMON_ARGS> 

```

especificar argumentos comuns para passar para sftp/scp/ssh (por exemplo, ProxyCommand)

```console

--ssh-extra-args <SSH_EXTRA_ARGS> 

```

especifique argumentos extras para passar apenas para ssh (por exemplo, -R)

```console

--track-subs 

```

os submódulos rastrearão as alterações mais recentes. Isso é equivalente a especificar o sinalizador –remote para git submodule update

```console

--vault-id 

```

a identidade do cofre a ser usada

```console

--vault-password-file, --vault-pass-file 

```

arquivo de senha do cofre

```console

--verify-commit 

```

verifique a assinatura GPG do commit verificado, se falhar, interrompa a execução do playbook. Isso precisa do módulo VCS correspondente para suportar tal operação

```console

--version 

```

mostra o número da versão do programa, localização do arquivo de configuração, caminho de pesquisa do módulo configurado, localização do módulo, localização do executável e saída

```console

-C <CHECKOUT>, --checkout <CHECKOUT> 

```

branch/tag/commit para checkout. O padrão é o comportamento do módulo de repositório.

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

-U <URL>, --url <URL> 

```

URL do repositório do playbook

```console

-c <CONEXÃO>, --connection <CONEXÃO> 

```

tipo de conexão a ser usada (padrão=inteligente)

```console

-d <DEST>, --directory <DEST> 

```

caminho absoluto do diretório de checkout do repositório (caminhos relativos não são suportados)

```console

-e, --extra-vars 

```

defina variáveis adicionais como chave=valor ou YAML/JSON, se o nome do arquivo preceder com @

```console

-f, --force 

```

execute o playbook mesmo se o repositório não puder ser atualizado

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

Nome do módulo do repositório, que o ansible usará para verificar o repositório. As opções são ('git', 'subversion', 'hg', 'bzr'). O padrão é git.

```console

-o, --only-if-changed 

```

execute o playbook apenas se o repositório tiver sido atualizado

```console

-s <SLEEP>, --sleep <SLEEP> 

```

dormir por intervalo aleatório (entre 0 e n número de segundos) antes de iniciar. Esta é uma maneira útil de dispersar solicitações git

```console

-t, --tags 

```

execute apenas jogadas e tarefas marcadas com esses valores

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

_fonte_ : _https://docs.ansible.com/ansible/latest/cli/ansible-pull.html_