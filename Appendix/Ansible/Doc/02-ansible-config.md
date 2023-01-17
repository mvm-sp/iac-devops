ansible-config
================================================================== 

Mostra a configuração do ansible.

Sinopse
-----------------------------------------------------------
```console

ansible-config [-h] [--version] [-v] {list,dump,view,init} ...

```

Descrição
----------------------------------------------------------------

Classe de linha de comando de configuração

Opções comuns
----------------------------------------------------------------------

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

### list

listar e gerar configurações disponíveis

```console

--format  <FORMAT>, -f  <FORMAT>

```

Formato de saída para lista

```console

-c  <CONFIG\_FILE>, --config  <CONFIG\_FILE>

```

caminho para o arquivo de configuração, o padrão é o primeiro arquivo encontrado em precedência.

```console

-t  <TIPO>, --type  <TIPO>

```

Filtre para um tipo de plug-in específico.

### dump

Mostra as configurações atuais, mescla ansible.cfg se especificado

```console

--format  <FORMAT>, -f  <FORMAT>

```

Formato de saída para despejo

```console

--only-changed, --changed-only

```

Mostrar apenas as configurações que foram alteradas do padrão

```console

-c  <CONFIG\_FILE>, --config  <CONFIG\_FILE>

```

caminho para o arquivo de configuração, o padrão é o primeiro arquivo encontrado em precedência.

```console

-t  <TIPO>, --type  <TIPO>

```

Filtre para um tipo de plug-in específico.

### view

Exibe o arquivo de configuração atual

```console

-c  <CONFIG\_FILE>, --config  <CONFIG\_FILE>

```

caminho para o arquivo de configuração, o padrão é o primeiro arquivo encontrado em precedência.

```console

-t  <TIPO>, --type  <TIPO>

```

Filtre para um tipo de plug-in específico.

### init

```console

--disabled

```

Prefixa todas as entradas com um caractere de comentário para desativá-las

```console

--format  <FORMAT>, -f  <FORMAT>

```

Formato de saída para init

```console

-c  <CONFIG\_FILE>, --config  <CONFIG\_FILE>

```

caminho para o arquivo de configuração, o padrão é o primeiro arquivo encontrado em precedência.

```console

-t  <TIPO>, --type  <TIPO>

```

Filtre para um tipo de plug-in específico.


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

_fonte_ : 