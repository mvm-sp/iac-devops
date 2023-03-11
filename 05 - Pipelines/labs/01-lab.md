Criando testes com Molecule
========================================

Com o `Molecule` [instalado](../02-Molecule.md) em seu console `ansible`, crie uma pasta para este exercício, no meu console este é o lab06

```css

mkdir lab/lab06
cd lab/lab06

```

crie um arquivo de `playbook` que cria um `security group`, chamaremos de `security-group.yml`

```yaml
- name: ec2 security group template
  hosts: localhost
  connection: local
  tasks:
  - name: example using security group rule descriptions
    amazon.aws.ec2_security_group:
      name: ansible-sg
      description: sg to ansible hosts
      vpc_id: vpc-6f139812
      region: us-east-1
      rules:
        - proto: tcp
          ports:
          - 80
          cidr_ip: 0.0.0.0/0
          rule_desc: allow all on port 80
```

no mesmo diretório execute o comando para iniciar o `molecule`

```css

molecule init scenario

```
O `molecule` criará a estrutura básica para sua execução:

![initt](../images/05-01-01.png)

Verifique a estrutura criada pelo `molecule`

![tree](../images/05-01-02.png)

Altere a estrutura do seu arquivo molecule/default/converge.yml para adequar-se ao nosso cenário

```yaml
- name: Converge
  hosts: all
  gather_facts: false
  tasks:
    - ansible.builtin.debug:
        msg: "Fake ansible.builtin.import_playbook : ../../security-group.yml"

- name: Include a play after another play
  ansible.builtin.import_playbook: ../../security-group.yml
  ```

  Verifique se suas credenciais estão ok em seu console

```console
aws_access_key_id = xxxxxxxxxxxxxxxx
aws_secret_access_key = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

os comandos para configura suas variáveis de acesso você já conhece:

```css
export AWS_ACCESS_KEY_ID=<ACCESS_KEY_ID>
export AWS_SECRET_ACCESS_KEY=<SECRET_ACCESS_KEY>
```

Podemos realizar o teste do `molecule` utilizando o comando:

```css
molecule test
```
Como resultado você verá a execução dos testes do molecule

![test](../images/05-01-03.png)

Muito bom! Temos testes configurados para nosso `playbook`