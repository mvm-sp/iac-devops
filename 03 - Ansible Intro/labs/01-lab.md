Realizar teste de conectividade com os servidores
----------------------------------------------------


Para realizar este laboratório, você precisa ter realizado o a configuração do exercicio de [configuração de hosts](../../Appendix/Ansible/04-configure-hosts.md). A partir  de seu console voc/~e execuratá o comando de checagem de conectividade do `Ansible` para o seu parque de servidores.

Crie um diretório `posmack/labs/lab01` e nesse diretório crie um arquivo de `hosts` para este exercício e execute o comando: 

```console

ansible -i hosts all -m ping

```
Verifique as configurações de seus servidores:

```console

ansible all -i hosts -m setup -a 'filter=ansible_distribution,ansible_distribution_version,ansible_memfree_mb,ansible_memtotal_mb,ansible_processor_cores*,ansible_architecture' 


```