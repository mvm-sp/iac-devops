ansible-inventory
=============================================================

**funções para configurar inventários no Ansible**

Sinopse
------------------------------------------------------------

```console

ansible-inventory     [-h] [--version] [-v] [-i INVENTORY]
                      [--vault-id VAULT_IDS]
                      [--ask-vault-password | --vault-password-file VAULT_PASSWORD_FILES]
                      [--playbook-dir BASEDIR] [-e EXTRA_VARS] [--list]
                      [--host HOST] [--graph] [-y] [--toml] [--vars]
                      [--export] [--output OUTPUT_FILE]
                      [host|group]

```

Descrição
-----------------------------------------------------------------

usado para exibir ou despejar o inventário configurado como o Ansible o vê

Opções comuns
-----------------------------------------------------------------------

```console

--ask-vault-password, --ask-vault-pass 

```

pedir senha do cofre

```console

--export 

```

Ao fazer um –list, represente de uma forma otimizada para exportação, não como uma representação precisa de como o Ansible o processou

```console

--graph 

```

criar gráfico de inventário, se fornecer padrão, deve ser um nome de grupo válido

```console

--host <HOST>

```

Saída de informações específicas do host, funciona como script de inventário

```console

--list

```

Saída de todas as informações de hosts, funciona como script de inventário


```console

--output <OUTPUT_FILE> 

```

Ao fazer –list, envie o inventário para um arquivo em vez de para a tela

```console

--playbook-dir <BASEDIR> 

```

Como esta ferramenta não usa playbooks, use-o como um diretório de playbook substituto. Isso define o caminho relativo para muitos recursos, incluindo funções/ grupo_vars/ etc.

```console

--toml 

```

Use o formato TOML em vez do JSON padrão, ignorado para –graph

```console

--vars 

```

Adicionar vars à exibição do gráfico, ignorado a menos que seja usado com –graph

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

-e, --extra-vars 

```

defina variáveis adicionais como chave=valor ou YAML/JSON, se o nome do arquivo preceder com @

```console

-h, --help 

```

mostrar esta mensagem de ajuda e sair

```console

-i, --inventory, --inventory-file 

```

especifique o caminho do host de inventário ou a lista de hosts separada por vírgulas. –inventory-file está obsoleto

```console

-v, --verbose

```console

Faz com que o Ansible imprima mais mensagens de depuração. Adicionar vários -v aumentará a verbosidade, os plug-ins integrados atualmente avaliam até -vvvvvv. Um nível razoável para iniciar é -vvv, a depuração de conexão pode exigir -vvvv.

```console

-y, --yaml 

```

Use o formato YAML em vez do JSON padrão, ignorado para –graph


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

_fonte_ : _https://docs.ansible.com/ansible/latest/cli/ansible-inventory.html_