ansible-doc
==========================================================

**ferramenta de documentação de plugins**

Sinopse
-----------------------------------------------------------

```console

ansible-doc [-h] [--version] [-v] [-M MODULE_PATH]
                [--playbook-dir BASEDIR]
                [-t {become,cache,callback,cliconf,connection,httpapi,inventory,lookup,netconf,shell,vars,module,strategy,test,filter,role,keyword}]
                [-j] [-r ROLES_PATH]
                [-e ENTRY_POINT | -s | -F | -l | --metadata-dump]
                [--no-fail-on-errors]
                [plugin ...]

```

Descrição
-----------------------------------------------------------------

exibe informações sobre os módulos instalados nas bibliotecas Ansible. Ele exibe uma lista concisa de plug-ins e suas descrições curtas, fornece uma impressão de suas strings de DOCUMENTAÇÃO e pode criar um pequeno “snippet” que pode ser colado em um playbook.

Opções comuns
----------------------------------------------------------------------

```console

--metadata-dump

```

**Somente para uso interno** Despeja metadados json para todas as entradas, ignora outras opções.

```console

--no-fail-on-errors

```

**Somente para uso interno** Usado apenas para –metadata-dump. Não falhe em erros. Relate a mensagem de erro no JSON.

```console

--playbook-dir <BASEDIR>

```

Como esta ferramenta não usa playbooks, use-o como um diretório de playbook substituto. Isso define o caminho relativo para muitos recursos, incluindo funções _grupo_vars_ etc.

```console

--version

```

mostra o número da versão do programa, localização do arquivo de configuração, caminho de pesquisa do módulo configurado, localização do módulo, localização do executável e saída

```console

-F, --list_files

```

Mostrar nomes de plug-in e seus arquivos de origem sem resumos (implica –list). Um argumento fornecido será usado para filtragem, pode ser um namespace ou um nome de coleção completo.

```console

-M, --module-path

```

preceder caminho(s) separado(s) por dois-pontos para a biblioteca do módulo (padrão={{ ANSIBLE_HOME ~ “/plugins/modules:/usr/share/ansible/plugins/modules” }})

```console

-e <ENTRY_POINT>, --entry-point <ENTRY_POINT>

```

Selecione o ponto de entrada para a(s) função(ões).

```console

-h, --help

```

mostrar esta mensagem de ajuda e sair

```console

-j, --json

```

Altere a saída para o formato json.

```console

-l, --list

```

Liste os plug-ins disponíveis. Um argumento fornecido será usado para filtragem, pode ser um namespace ou um nome de coleção completo.

```console

-r, --roles-path

```

O caminho para o diretório que contém suas funções.

```console

-s, --snippet

```

Mostrar snippet de playbook para estes tipos de plug-in: inventário, pesquisa, módulo

```console

-t <TIPO>, --type <TIPO>

```

Escolha qual tipo de plug-in (o padrão é “módulo”). Os tipos de plugins disponíveis são: ('become', 'cache', 'callback', 'cliconf', 'connection', 'httpapi', 'inventory', 'lookup', 'netconf', 'shell', 'vars', 'módulo', 'estratégia', 'teste', 'filtro', 'função', 'palavra-chave')

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

_fonte_ : _https://docs.ansible.com/ansible/latest/cli/ansible-doc.html_