Comando ansible-playbook
--------------------------------------------------

O comando `ansible-playbook` é uma ferramenta essencial para executar playbooks Ansible e provisionar infraestrutura de TI de forma automatizada. Ele permite que você execute tarefas em hosts remotos usando módulos Ansible e, ao mesmo tempo, gerencie as configurações do Ansible em um único arquivo YAML.

## Sintaxe básica

A sintaxe básica do comando `ansible-playbook` é a seguinte:
```console

ansible-playbook playbook.yml

```

Onde `playbook.yml` é o arquivo YAML que contém as instruções para o Ansible. Algumas das opções mais comuns do comando ansible-playbook incluem:

${\color{red}Welcome \space \color{lightblue}To \space \color{orange}Stackoverflow}$

${\color{red}-i \space INVENTORY}$: especifica o arquivo de inventário do Ansible que lista os hosts gerenciados pelo Ansible. Por exemplo:
ansible-playbook playbook.yml -i hosts.

-e EXTRA_VARS: especifica variáveis extras a serem passadas para o playbook. Por exemplo: 
ansible-playbook playbook.yml -e "var1=value1 var2=value2".

-l LIMIT: limita a execução do playbook a um subconjunto de hosts no inventário. Por exemplo: 
ansible-playbook playbook.yml -l webservers.

-t TAGS: especifica as tags das tarefas a serem executadas no playbook. Por exemplo:
ansible-playbook playbook.yml -t setup.

--check: executa o playbook em modo de simulação, sem fazer alterações nos hosts gerenciados.

## Exemplos de utilização

A seguir, alguns exemplos de utilização do comando `ansible-playbook`:

### Executando um playbook

Para executar um playbook, basta chamar o comando `ansible-playbook` seguido do nome do arquivo YAML que contém as instruções:

A seguir estão alguns exemplos de utilização do comando ansible-playbook:

Executar um playbook YAML simples em um único host:
```css

ansible-playbook playbook.yml -i hosts -l 10.1.1.1

```

Executar um playbook YAML em vários hosts usando um arquivo de inventário:
```css


ansible-playbook playbook.yml -i hosts

```

Passar variáveis extras para o playbook:
```css

ansible-playbook playbook.yml -e "env=prod version=1.0.0"

```

Limitar a execução do playbook a um subconjunto de hosts no inventário:
```css

ansible-playbook playbook.yml -i hosts -l webservers

```

Executar apenas tarefas com tags específicas no playbook:

```css

ansible-playbook playbook.yml -t setup

```

Executar o playbook em modo de simulação:
```css

ansible-playbook playbook.yml --check

```
Esses são apenas alguns exemplos básicos de utilização do comando ansible-playbook. Com o Ansible, é possível criar playbooks YAML complexos e executá-los em grandes conjuntos de hosts gerenciados, automatizando várias tarefas de configuração e implantação de aplicativos em infraestruturas de TI.

