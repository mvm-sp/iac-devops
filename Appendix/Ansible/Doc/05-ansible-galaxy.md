ansible-galaxy
==========================================================

**Execute várias operações relacionadas a funções e coleções.**

Sinopse
-----------------------------------------------------------

```console

ansible-galaxy [-h] [--version] [-v] TYPE ...

```



Descrição
-----------------------------------------------------------------

Comando para gerenciar funções e coleções do Ansible.

Nenhuma das ferramentas CLI foi projetada para ser executada simultaneamente com elas mesmas. Use um agendador externo e/ou bloqueio para garantir que não haja operações conflitantes.

Opções comuns
-----------------------------------------------------------------------

```console

-version  

```

mostra o número da versão do programa, localização do arquivo de configuração, caminho de pesquisa do módulo configurado, localização do módulo, localização do executável e saída

```console

_h, -help 

```

mostrar esta mensagem de ajuda e sair

```console

_v, -verbose 

```

Faz com que o Ansible imprima mais mensagens de depuração. Adicionar vários -v aumentará a verbosidade, os plug-ins integrados atualmente avaliam até -vvvvvv. Um nível razoável para iniciar é -vvv, a depuração de conexão pode exigir -vvvv.

Ações
---------------------------------------------------------

### _collection_

Execute a ação em uma _collection_ Ansible Galaxy. Deve ser combinado com uma ação adicional como init/install conforme listado abaixo.

#### download da _collection_

```console

-clear-response-cache 

```

Limpe o cache de resposta do servidor existente.

```console

-no-cache 

```

Não use o cache de resposta do servidor.

```console

-pre  

```

Inclua versões de pré-lançamento. Os pré-lançamentos de versão semântica são ignorados por padrão

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60 segundos.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs  

```

Ignore os erros de validação do certificado SSL.

```console

-n, -no-deps 

```

Não baixe as coleções listadas como dependências.

```console

-p  <DOWNLOAD_PATH>, -download-path  <DOWNLOAD_PATH> 

```

O diretório para o qual baixar as coleções.

```console

-r  <REQUISITOS>, -requirements-file  <REQUISITOS> 

```

Um arquivo contendo uma lista de coleções a serem baixadas.

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### inicialização da _collection_

Cria a estrutura de esqueleto de uma função ou _collection_ compatível com o formato de metadados do Galaxy. Requer um nome de função ou _collection_. O nome da _collection_ deve estar no formato `<namespace>.<_collection_>`.

```console

-collection-skeleton  <COLLECTION_SKELETON> 

```

O caminho para um esqueleto de _collection_ no qual a nova _collection_ deve se basear.

```console

-init-path  <INIT_PATH>  

```

O caminho no qual a _collection_ esqueleto será criada. O padrão é o diretório de trabalho atual.

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY>  

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-f, -force 

```

Forçar a substituição de uma função ou _collection_ existente

```console

-s  <API_SERVER>, -server  <API_SERVER>  

```

A URL do servidor da API do Galaxy

#### compilação da _collection_

Crie um artefato de _collection_ do Ansible Galaxy que possa ser armazenado em um repositório central como o Ansible Galaxy. Por padrão, esse comando é criado a partir do diretório de trabalho atual. Você pode, opcionalmente, passar o caminho de entrada da _collection_ (onde está o arquivo `galaxy.yml`).

```console

-output-path  <OUTPUT_PATH> 

```

O caminho no qual a _collection_ é construída. O padrão é o diretório de trabalho atual.

```console

-timeout  <TIMEOUT> 

```


O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY>  

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-f, -force 

```

Forçar a substituição de uma função ou _collection_ existente

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### publicação da _collection_

Publique uma _collection_ no Ansible Galaxy. Requer o caminho para o tarball da _collection_ a ser publicado.

```console

-import-timeout  <IMPORT_TIMEOUT> 

```

O tempo de espera para a conclusão do processo de importação da _collection_.

```console

-no-wait  

```

Não espere pelos resultados da validação da importação.

```console

-timeout  <TIMEOUT>  

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### collection install

```console

-clear-response-cache 

```

Limpe o cache de resposta do servidor existente.

```console

-disable-gpg-verify 

```

Desative a verificação de assinatura GPG ao instalar coleções de um servidor Galaxy

```console

-force-with-deps  

```

Força a substituição de uma _collection_ existente e suas dependências.

```console

-ignore-signature-status-code 

```

Um código de status a ser ignorado durante a verificação da assinatura (por exemplo, NO_PUBKEY). Forneça esta opção várias vezes para ignorar uma lista de códigos de status. As descrições das opções podem ser vistas em L([https://github.com/gpg/gnupg/blob/master/doc/DETAILS#general-status-codes](https://github.com/gpg/gnupg/ blob/master/doc/DETAILS#general-status-codes)).

```console

-keyring  <KEYRING> 

```

As Chaves usadas durante a verificação da assinatura

```console

-no-cache 

```

Não use o cache de resposta do servidor.

```console

-offline  

```

Instale artefatos de coleta (tarballs) sem entrar em contato com nenhum servidor de distribuição. Isso não se aplica a coleções em repositórios Git remotos ou URLs para tarballs remotos.

```console

-pre 

```

Inclua versões de pré-lançamento. Os pré-lançamentos de versão semântica são ignorados por padrão

```console

-required-valid-signature-count  <REQUIRED_VALID_SIGNATURE_COUNT>  

```

O número de assinaturas que devem verificar a coleta com sucesso. Deve ser um inteiro positivo ou -1 para significar que todas as assinaturas devem ser usadas paraverifique a _collection_. Anexe o valor com + para falhar se nenhuma assinatura válida for encontrada para a _collection_ (por exemplo, +all).

```console

-signature 

```

Uma fonte de assinatura adicional para verificar a autenticidade do MANIFEST.json antes de instalar a _collection_ de um servidor Galaxy. Use em conjunto com um nome de _collection_ posicional (mutuamente exclusivo com –requirements-file).

```console

-timeout  <TIMEOUT>

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY>

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-U, -upgrade 

```

Atualize os artefatos de _collection_ instalados. Isso também atualizará as dependências, a menos que –no-deps seja fornecido

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-f, -force 

```

Forçar a substituição de uma função ou _collection_ existente

```console

-i, -ignore-errors 

```

Ignore os erros durante a instalação e continue com a próxima _collection_ especificada. Isso não irá ignorar erros de conflito de dependência.

```console

-n, -no-deps 

```

Não baixe coleções listadas como dependências.

```console

-p  <COLLECTIONS_PATH>, -collections-path  <COLLECTIONS_PATH> 

```

O caminho para o diretório que contém suas coleções.

```console

-r  <REQUISITOS>, -requirements-file  <REQUISITOS> 

```

Um arquivo contendo uma lista de coleções a serem instaladas.

```console

-s  <API_SERVER>, -server  <API_SERVER>  

```

A URL do servidor da API do Galaxy

#### lista de _collection_

Listar coleções ou funções instaladas

```console

-format  <OUTPUT_FORMAT> 

```

Formato para exibir a lista de coleções.

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY>  

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-p, -collections-path

```

Um ou mais diretórios para pesquisar coleções além do padrão COLLECTIONS_PATHS. Separe vários caminhos com ':'.

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### verificação da _collection_

```console

-ignore-signature-status-code 

```

Um código de status a ser ignorado durante a verificação da assinatura (por exemplo, NO_PUBKEY). Forneça esta opção várias vezes para ignorar uma lista de códigos de status. As descrições das opções podem ser vistas em L([https://github.com/gpg/gnupg/blob/master/doc/DETAILS#general-status-codes](https://github.com/gpg/gnupg/ blob/master/doc/DETAILS#general-status-codes)).

```console

-keyring  <KEYRING> 

```

As Chaves usadas durante a verificação da assinatura

```console

-offline 

```

Valide a integridade da _collection_ localmente sem entrar em contato com o servidor para hash de manifesto canônico.

```console

-required-valid-signature-count  <REQUIRED_VALID_SIGNATURE_COUNT> 

```

O número de assinaturas que devem verificar a coleta com sucesso. Deve ser um número inteiro positivo ou all para significar que todas as assinaturas devem ser usadas para verificar a coleta. Anexe o valor com + para falhar se nenhuma assinatura válida for encontrada para a coletaíon (por exemplo, +all).

```console

-signature 

```

Uma fonte de assinatura adicional para verificar a autenticidade do MANIFEST.json antes de usá-lo para verificar o restante do conteúdo de uma _collection_ de um servidor Galaxy. Use em conjunto com um nome de _collection_ posicional (mutuamente exclusivo com –requirements-file).

```console

-timeout  <TIMEOUT>  

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-i, -ignore-errors

```

Ignore os erros durante a verificação e continue com a próxima coleta especificada.

```console

-p, -collections-path 

```

Um ou mais diretórios para pesquisar coleções além do padrão COLLECTIONS_PATHS. Separe vários caminhos com ':'.

```console

-r  <REQUISITOS>, -requirements-file  <REQUISITOS> 

```

Um arquivo contendo uma lista de coleções a serem verificadas.

```console

-s  <API_SERVER>, -server  <API_SERVER>  

```

A URL do servidor da API do Galaxy

### role

Execute a ação em uma função do Ansible Galaxy. Deve ser combinado com uma ação adicional como excluir/instalar/iniciar conforme listado abaixo.

#### role init

Cria a estrutura de esqueleto de uma função ou _collection_ compatível com o formato de metadados do Galaxy. Requer um nome de função ou _collection_. O nome da _collection_ deve estar no formato `<namespace>.<_collection_>`.

```console

-init-path  <INIT_PATH> 

```

O caminho no qual a função esqueleto será criada. O padrão é o diretório de trabalho atual.

```console

-offline 

```

Não consulte a API do Galaxy ao criar funções

```console

-role-skeleton  <ROLE_SKELETON>  

```

O caminho para um esqueleto de função no qual a nova função deve se basear.

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY>  

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-type  <ROLE_TYPE> 

```

Inicialize usando um tipo de função alternativo. Os tipos válidos incluem: 'container', 'apb' e 'network'.

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-f, -force 

```


Forçar a substituição de uma função ou _collection_ existente

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### role remove

remove a lista de funções passadas como argumentos do sistema local.

```console

-timeout  <TIMEOUT>  

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-p, -roles-path 

```

O caminho para o diretório que contém suas funções. O padrão é o primeiro gravável configurado via DEFAULT_ROLES_PATH: {{ ANSIBLE_HOME ~ “/roles:/usr/share/ansible/roles:/etc/ansible/roles” }}

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### role delete

Exclua uma função do Ansible Galaxy.

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-s  <API_SERVER>, -server  <API_SERVER>

```

A URL do servidor da API do Galaxy

#### role list

Listar coleções ou funções instaladas

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

_p, -roles-path 

```

O caminho para o diretório que contém suas funções. O padrão é o primeiro gravável configurado via DEFAULT_ROLES_PATH: {{ ANSIBLE_HOME ~ “/roles:/usr/share/ansible/roles:/etc/ansible/roles” }}

-s  <API_SERVER>, -server  <API_SERVER> role-list-s 

A URL do servidor da API do Galaxy

#### pesquisa de função

procura funções no servidor Ansible Galaxy

```console

-author  <AUTHOR>  

```

Nome de usuário do GitHub

```console

-galaxy-tags  <GALAXY_TAGS>

```

lista de tags de galáxias para filtrar

```console

-platforms  <PLATFORMS>  

```

lista de plataformas de sistema operacional para filtrar por

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### role import

usado para importar uma função para o Ansible Galaxy

```console

-branch  <REFERÊNCIA> 

```

O nome de uma ramificação a ser importada. O padrão é o branch padrão do repositório (geralmente master)

```console

-no-wait 

```

Não espere pelos resultados da importação.

```console

-role-name  <ROLE_NAME>

```

O nome que a função deve ter, se for diferente do nome do repo

```console

-status 

```

Verifique o status da solicitação de importação mais recente para determinado github_user/github_repo.

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### role setup

Configure uma integração do Github ou Travis para as funções do Ansible Galaxy

```console

-list 

```

Liste todos os seusintegrações.

```console

-remove  <REMOVE_ID> 

```

Remova a integração correspondente ao valor de ID fornecido. Use –list para ver os valores de ID.

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY>  

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-p, -roles-path 

```

O caminho para o diretório que contém suas funções. O padrão é o primeiro gravável configurado via DEFAULT_ROLES_PATH: {{ ANSIBLE_HOME ~ “/roles:/usr/share/ansible/roles:/etc/ansible/roles” }}

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### role info

imprime informações detalhadas sobre uma função instalada, bem como informações disponíveis na API do Galaxy.

```console

-offline 

```

Não consulte a API do Galaxy ao criar funções

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-p, -roles-path 

```

O caminho para o diretório que contém suas funções. O padrão é o primeiro gravável configurado via DEFAULT_ROLES_PATH: {{ ANSIBLE_HOME ~ “/roles:/usr/share/ansible/roles:/etc/ansible/roles” }}

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy

#### role install

```console

-force-with-deps 

```

Força a substituição de uma função existente e suas dependências.

```console

-timeout  <TIMEOUT> 

```

O tempo de espera pelas operações no servidor Galaxy é padronizado em 60s.

```console

-token  <API_KEY>, -api-key  <API_KEY> 

```

A chave de API do Ansible Galaxy, que pode ser encontrada em [https://galaxy.ansible.com/me/preferences](https://galaxy.ansible.com/me/preferences).

```console

-c, -ignore-certs 

```

Ignore os erros de validação do certificado SSL.

```console

-f, -force

```


Forçar a substituição de uma função ou _collection_ existente

```console

-g, -keep-scm-meta 

```

Use tar em vez da opção de arquivo scm ao empacotar a função.

```console

-i, -ignore-errors 

```

Ignore os erros e continue com a próxima função especificada.

```console

-n, -no-deps 

```


Não baixe funções listadas como dependências.

```console

-p, -roles-path 

```

O caminho para o diretório que contém suas funções. O padrão é o primeiro gravável configurado via DEFAULT_ROLES_PATH: {{ ANSIBLE_HOME ~ “/roles:/usr/share/ansible/roles:/etc/ansible/roles” }}

```console

-r  <REQUISITOS>, -role-file  <REQUISITOS> 

```

Um arquivo contendo uma lista de funções a serem instaladas.

```console

-s  <API_SERVER>, -server  <API_SERVER> 

```

A URL do servidor da API do Galaxy


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

_fonte_ : _https://docs.ansible.com/ansible/latest/cli/ansible-galaxy.html_