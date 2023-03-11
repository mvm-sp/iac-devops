Trabalhando com variáveis
==========================================================================================================================================

Uma ótima maneira de construir códigos de infra estrutura bem documentados é com a utiização de variáveis, neste _lab_ vamos criar uma nova instância `EC2` mas com um playbook um pouco mais estruturado

```yaml
---
- name: Provision and configure an EC2 instance with Nginx
  hosts: localhost
  connection: local
  gather_facts: true

  vars:
    region: escolha uma região
    instance_type: seu tipo 
    ami_id: sua imagem ami
    subnet_id: sua subnet
    security_group: nome do security group
    key_name: nome do keypair

  tasks:
  - name: Launch an EC2 instance
    amazon.aws.ec2_instance:
      image_id: "{{ ami_id }}"
      instance_type: "{{ instance_type }}"
      key_name: "{{ key_name }}"
      region: "{{ region }}"
      count: 1
      wait: true
      network:
        assign_public_ip: true
        vpc_subnet_id: "{{ subnet_id }}"
      security_group: "{{ security_group }}"
      tags:
        Name: ansible-web-server
    register: ec2


```

Observando o arquivo podemos ver que todas as variáveis estão agrupadas no bloco `vars:`, dessa forma


Agora vamos aplicar o playbook de configuração para essa nova instância para termos nosso Webserver configurado, o `yaml` deve se parecer com esse:

```yaml

- hosts: webservers
  gather_facts: False

  vars:
   - MyMessage: "Welcome to Ansible world!"

  pre_tasks:
  - name: install python 2
    raw: test -e /usr/bin/python || (apt -y update && apt install -y python-minimal)

  tasks:
   - name: Add epel-release repo
     become: true
     become_user: root
     yum:
       name: https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
       state: present

   - name: Ansible apt install nginx
     become: true
     become_user: root
     yum:
       name: nginx
       state: present

   - name: index.html copy
     become: true
     become_user: root
     template: src=index.html dest=/usr/share/nginx/html/index.html

```

Este exemplo deve ser efeivo para as imagens fornecidas pela AWS `Amazon Linux 2 AMI`, para outras imagens e distribuiçoes, faça as adequações necessárias.