CLI do Ansible
------------------------------

O Ansible possui uma vasta coleção de comandos CLI (_Command Line Interface_) para execução de tarefas e configurações de _pipelines_ e ambientes, você pode acessar detalhes nas páginas desse repositorio

* [ansible](../Appendix/Ansible/Doc/01-ansible.md) : 
  automatiza uma única tarefa em um ou mais hosts. comandos ad hoc são rápidos e fáceis, mas não são reutilizáveis. Os comandos ad hoc demonstram a simplicidade e o poder do Ansible. Os conceitos aqui aprendidos serão retratados diretamente para a linguagem do playbook, ele é ótimo para tarefas que você repete raramente. Por exemplo, se você quiser desligar todas as máquinas em seu laboratório para as férias de Natal, você poderia executar um rápido comando em Ansible sem escrever um playbook complexo.

```console   

ansible 10.0.0.1 -m setup     #Exibe informações detalhadas de um determonado host 
ansible webservers -m service -a "name=httpd state=started"   #Inicia o serviço http em hosts do grupo webservers

```

* [ansible-config](../Appendix/Ansible/Doc/02-ansible-config.md) 
  este grupo permite que você possa alterar parâmetros de execução e de ambiente para uma determinada operação, como por exemplo aumentar o nível do _verbose_ em um conjuno de comandos críticos

```console

ansible-config init --disabled > teste.cfg           #Gera um arquivo de configurações com o conteúdo comentado

ansible-config init --disabled -t all > ansible.cfg  #Gera um arquivo de configurações com o conteúdo comentado e os módulos disponíveis

```


* [ansible-console](../Appendix/Ansible/Doc/03-ansible-console.md)
  Ele permite a execução em tempo real de módulos Ansible ou comandos arbitrários. Assim como o Ansible normal, as conexões com os hosts são feitas via SSH e a configuração segue as práticas padrão do Ansible, possui a capacidade de  `--limit <by-tag>` como por exemplo  `--limit masters`, e você pode começar a ver porque ansible-console é tão poderosa.

```console

ansible-console -i hosts --become -u root     #Acessa o console do ansible utiizando um inventário específico e credenciais de root

```

* [ansible-doc](../Appendix/Ansible/Doc/04-ansible-doc.md) 
  O comando ansible-doc tem uma função, fornecer documentação para o Ansible. Ele cobre principalmente os módulos principais do Ansible, dos quais você pode encontrar uma lista completa executando o comando `ansible-doc --list`

```console

ansible-doc --list      #lista todos os módulos com documentação disponível
ansible-doc add_host    #exibe a documentação do módulo add_host do ansible

```
* [ansible-galaxy](../Appendix/Ansible/Doc/05-ansible-galaxy.md) 
  é um multiplicador, acessa um repositório aberto construído pela comunidade Ansibe, através desse comando você pode implementar soluções complexas rapidamente, criar suas próprias coleções e disponibiliza-las para ourtos desenvolvedores

```console

ansible-galaxy install geerlingguy.mysql         #instala a collection geerlingguy.mysql no ambiente de desenvolvimento
ansible-galaxy remove geerlingguy.mysql          #Remove a collection geerlingguy.mysql no ambiente de desenvolvimento 

```

* [ansible-inventory](../Appendix/Ansible/Doc/06-ansible-inventory.md)
  fornece detalhes de seus arquivos de inventário do host. Pode ser útil se você quiser ter uma idéia de como seus hosts estão agrupados. Você terá uma visão lógica de seus grupos e hosts

```console   

ansible-inventory -i hosts --graph     #Exibe a representação gráfica de um inventário específico
ansible-inventory --list               #Retorna o inventário no formato padrão

```   

* [ansible-playbook](../Appendix/Ansible/Doc/07-ansible-playbook.md) 
  Pode ser considerado o grupo de comandos mais uilizado no dia-a-dia do administrador de infra, através do ansible-playbook, tarefas complexas podem ser agrupadas em arquivos YAML e aplicadas a grupos de hosts, ela permite auditar cada passo da execução garantindo que todo o plano seja executado com sucesso.

```console   

ansible-playbook site.yml --limit "us-west-1"         #Executa o playbook site.yml limitado a região de north vriginia
ansible-playbook site.yml -i /path/to/inventory.ini   #Executa o playbook site.yml utilizando um inventário específico

```

* [ansible-pull](../Appendix/Ansible/Doc/08-ansible-pull.md)
  Usado para baixar uma cópia remota de um playbook em cada nó gerenciado, Isto inverte a arquitetura push padrão do ansible em uma arquitetura pull, que tem um alto potencial de escalonamento. Permite baixar um playbook de um repositório Git (por exemplo, GitHub) e depois executá-lo, salvando assim as etapas habituais como clonagem (ou atualização da cópia de trabalho) do repositório.

```console   

ansible-pull -U https://git.example.com/test.git       #Baixa um repositório a partir da URL

```

* [ansible-vault](../Appendix/Ansible/Doc/09-ansible-vault.md)
  pode criptografar qualquer arquivo de dados estruturado utilizado pelo Ansible. Isto pode incluir variáveis group_vars/ ou host_vars/ inventário, variáveis carregadas por include_vars ou vars_files, ou arquivos de variáveis passados na linha de comando do ansible-playbook com `-e @file.yml` ou `-e @file.json`. Variáveis de função e defaults também estão incluídas! Se você não gostaria de expor quais variáveis você está usando, você pode manter um arquivo de tarefas individuais totalmente criptografado.

```console

ansible-vault view vault.yml     #permite a visualização de um arquivo criptografado pelo ansible-vault create

```