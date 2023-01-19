ansible-vault
=================================================================

**utilitário de criptografia/descriptografia para arquivos de dados Ansible**

Sinopse
------------------------------------------------------------

```console

uso: ansible-vault \[-h\] \[--version\] \[-v\]
                   {criar, descriptografar, editar, visualizar, criptografar, criptografar_string, rechavear}
                   ...

```

Descrição 
-----------------------------------------------------------------

pode criptografar qualquer arquivo de dados estruturados usado pelo Ansible. Isso pode incluir variáveis de inventário _group_vars/_ ou _host_vars/_, variáveis carregadas por _include_vars_ ou _vars_files_ ou arquivos de variáveis passados na linha de comando ansible-playbook com _-e @file.yml_ ou _ -e @arquivo.json_. Variáveis de função e padrões também estão incluídos!

Como as tarefas, manipuladores e outros objetos do Ansible são dados, eles também podem ser criptografados com o cofre. Se você não deseja expor quais variáveis está usando, pode manter um arquivo de tarefa individual totalmente criptografado.

Opções comuns 
-----------------------------------------------------------------------

```console

--version  

```

mostra o número da versão do programa, localização do arquivo de configuração, caminho de pesquisa do módulo configurado, localização do módulo, localização do executável e saída

```console

-h, --help  

```

mostrar esta mensagem de ajuda e sair

```console

-v, --verbose  

```

Faz com que o Ansible imprima mais mensagens de depuração. Adicionar vários -v aumentará a verbosidade, os plug-ins integrados atualmente avaliam até -vvvvvv. Um nível razoável para iniciar é -vvv, a depuração de conexão pode exigir -vvvv.

Ações 
---------------------------------------------------------

### create 

crie e abra um arquivo em um editor que será criptografado com o segredo do cofre fornecido quando fechado

```console

--ask-vault-password, --ask-vault-pass  

```

pedir senha do cofre

```console

--encrypt-vault-id  <ENCRYPT_VAULT_ID>  

```

o ID do cofre usado para criptografar (necessário se mais de um ID do cofre for fornecido)

```console

--vault-id  

```

a identidade do cofre a ser usada

```console

--vault-password-file, --vault-pass-file  

```

arquivo de senha do cofre

### decrypt 

descriptografar o arquivo fornecido usando o segredo do cofre fornecido

```console

--ask-vault-password, --ask-vault-pass  

```

pedir senha do cofre

```console

--output  <OUTPUT_FILE> 

```

nome do arquivo de saída para criptografar ou descriptografar; use - para stdout

```console

--vault-id  

```

a identidade do cofre a ser usada

```console

--vault-password-file, --vault-pass-file  

```

arquivo de senha do cofre

### edit

abrir e descriptografar um arquivo protegido existente em um editor, que será criptografado novamente quando fechado

```console

--ask-vault-password, --ask-vault-pass  

```

pedir senha do cofre

```console

--encrypt-vault-id  <ENCRYPT_VAULT_ID> 

```

o ID do cofre usado para criptografar (necessário se mais de um ID do cofre for fornecido)

```console

--vault-id 

```

a identidade do cofre a ser usada

```console

--vault-password-file, --vault-pass-file  

```

arquivo de senha do cofre

### view

abra, descriptografe e visualize um arquivo protegido existente usando um pager usando o segredo do cofre fornecido

```console

--ask-vault-password, --ask-vault-pass

```

pedir senha do cofre

```console

--vault-id 

```

a identidade do cofre a ser usada

```console

--vault-password-file, --vault-pass-file   

```

arquivo de senha do cofre

### encrypt

criptografar o arquivo fornecido usando o segredo do cofre fornecido

```console

--ask-vault-password, --ask-vault-pass 

```

pedir senha do cofre

```console

--encrypt-vault-id  <ENCRYPT_VAULT_ID>  

```

o ID do cofre usado para criptografar (necessário se mais de um ID do cofre for fornecido)

```console

--output  <OUTPUT_FILE> 

```

nome do arquivo de saída para criptografar ou descriptografar; use - para stdout

```console

--vault-id  

```

a identidade do cofre a ser usada

```console

--vault-password-file, --vault-pass-file  

```

arquivo de senha do cofre

### encrypt_string

criptografar a string fornecida usando o segredo do cofre fornecido

```console

--ask-vault-password, --ask-vault-pass 

```

pedir senha do cofre

```console

--encrypt-vault-id  <ENCRYPT_VAULT_ID> 

```

o ID do cofre usado para criptografar (necessário se mais de um ID do cofre for fornecido)

```console

--output  <OUTPUT_FILE> 

```

nome do arquivo de saída para criptografar ou descriptografar; use - para stdout

```console

--show-input  

```

Não oculte a entrada quando solicitado pela string para criptografar

```console

--stdin-name  <ENCRYPT_STRING_STDIN_NAME> 

```

Especifique o nome da variável para stdin

```console

--vault-id 

```

a identidade do cofre a ser usada

```console

--vault-password-file, --vault-pass-file  

```

arquivo de senha do cofre

```console

-n, --name  

```

Especifique o nome da variável

```console

-p, --prompt  

```

Solicitar a string para criptografar

### rekey

criptografar novamente um arquivo protegido com um novo segredo, o segredo anterior é necessário

```console

--ask-vault-password, --ask-vault-pass  

```

pedir senha do cofre

```console

--encrypt-vault-id  <ENCRYPT_VAULT_ID> 

```

o ID do cofre usado para criptografar (necessário se mais de um ID do cofre for fornecido)

```console

--new-vault-id  <NEW_VAULT_ID>  

```

a nova identidade do cofre a ser usada para rechavear

```console

--new-vault-password-file  <NEW_VAULT_PASSWORD_FILE>  

```

novo arquivo de senha do cofre para rechavear

```console

--vault-id  

```

a identidade do cofre a ser usada

```console

--vault-password-file, --vault-pass-file  

```

arquivo de senha do cofre


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

_fonte_ : _https://docs.ansible.com/ansible/latest/cli/ansible-vault.html_