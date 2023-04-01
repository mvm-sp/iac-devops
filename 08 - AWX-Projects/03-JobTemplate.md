Configurando um Job Template
==========================================

Um `Job Template` é a própria definição de executar  Ansible playbooks. Portanto, para criar um novo modelo de trabalho ou executar o modelo de trabalho, precisamos adicionar o Ansible playbook de nosso `Projeto`, as `Credenciais` para autenticação, e as máquinas alvo que estão armazenadas nos `Inventários`.

Vá até o menu `Templates` a clique no botão `add`

![image](images/08-03-01.png)

Você verá que é aqui que tudo se encaixa, preencha os dados de seu template, perceba que este cadastro irá exigir dados que configuramos nos passos anteriores como o `Inventário` que será utilizado, o `Projeto` onde estão os playbooks, as `Credenciais` necessárias para a execução do projeto e qual é o `Playbook` que desejamos executar.

![image](images/08-03-02.png)

Depois de concluir o cadastro você poderá solicitar a execução de seu `template` clicando no ícone de execução (`Launch Template`)

![image](images/08-03-03.png)

Acompanhe a execução em sua lista de `jobs`

![image](images/08-03-04.png)

Caso tudo corra bem, você terá os detalhes da execução semelhante a este

![image](images/08-03-05.png)

>DICA: durante a execução de seu `job` é possível ver mais detalhes das `tasks` que fazem parte do `playbook`, faça um teste aumentando o nivel de `verbosity` de seu `template`

![image](images/08-03-06.png)

Agora você descobriu se seu inventário está acessível para execução de `playbooks` mais complexos