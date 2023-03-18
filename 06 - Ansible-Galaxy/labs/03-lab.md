Utiizando o repositório Ansible Galaxy
======================================================

Concluímos o [Lab 02](02-lab.md) onde implementamos a infra para que tal criarmos um novo servidor configurando uma `role` que habilitou serviço do `NGINX`, agora vamos verificar no repositório se já existe uma solução para este tipo de tarefa.

Acesse o Repositório o [Ansibe-Galaxy](https://galaxy.ansible.com/) e pesquise por `nginx`, várias soluções serão listadas, tente baixar a solução `geerlingguy.nginx` e configurá-la para reutilizar a sua estrutura, você pode encontrar instruções no arquivo [README](../../Appendix/Ansible/extras/nginx-role-README.md) que pertence a role. 

```css
sudo ansible-galaxy install --roles-path /etc/ansible/roles geerlingguy.nginx
```

Vamos lá, você já pode começar.

