Instalando o Ansible em sistemas operacionais específicos
==========================================================================================================================================

O pacote `ansible` sempre pode ser [instalado a partir do PyPI usando pip](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#intro-installation-guide) na maioria dos sistemas, mas também é empacotado e mantido pela comunidade para uma variedade de distribuições Linux.

As instruções a seguir irão guiá-lo através da instalação do pacote `ansible` com o gerenciador de pacotes de sua distribuição preferida.

* [Instalando o Ansible no Fedora ou CentOS](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.htm#installing-ansible-on-fedora-or-centos)
    
* [Instalando o Ansible no Ubuntu](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.htm#installing-ansible-on-ubuntu)
    
* [Instalando o Ansible no Debian](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.htm#installing-ansible-on-debian)
  

[Instalando o Ansible no Fedora ou CentOS](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.htm#installing-ansible-on-fedora-or-centos)
-----------------------------------------------------------------------------------------------------------------------

No Fedora:

```console 
sudo dnf install ansible
``` 
No CentOS:

```console 
sudo yum install epel-release
sudo yum install ansible
```

RPMs para versões atualmente suportadas do CentOS também estão disponíveis em [EPEL](https://fedoraproject.org/wiki/EPEL).

[Instalando o Ansible no Ubuntu](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.htm#installing-ansible-on-ubuntu)
----------------------------------------------------------------------------------------------------

As compilações do Ubuntu estão disponíveis [em um PPA aqui](https://launchpad.net/~ansible/+archive/ubuntu/ansible).

Para configurar o PPA em seu sistema e instalar o Ansible, execute estes comandos:

```console 
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
```

Após adicionar o repositório, atualize seu índice do aptitude novamente para que o sistema esteja ciente dos novos pacotes. Em seguida, instale o `ansible`:

```console 
sudo apt update
sudo apt install ansible
```

Observação

Em distribuições mais antigas do Ubuntu, “software-properties-common” é chamado de “python-software-properties”. Você pode querer usar `apt-get` em vez de `apt` em versões mais antigas. Além disso, esteja ciente de que apenas distribuições mais recentes (ou seja, 18.04, 18.10 e posteriores) têm um sinalizador `-u` ou `--update`. Ajuste seu script conforme necessário.

[Instalando o Ansible no Debian](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.htm#id3)
----------------------------------------------------------------------------------------------------

Os usuários do Debian podem usar a mesma fonte do Ubuntu PPA (usando a tabela a seguir).

| Debian               |     | ubuntu                   |
| -------------------- | --- | ------------------------ |
| Debian 11 (Bullseye) | \-> | Ubuntu 20.04 (Focal)     |
| Debian 10 (Buster)   | \-> | Ubuntu 18.04 (Biônico)   |

>Observação
>
>As versões do Ansible são criadas apenas para o Ubuntu 18.04 (Bionic) ou versões posteriores.
>
>Adicione a seguinte linha a `/etc/apt/sources.list` ou `/etc/apt/sources.list.d/ansible.list`:
>
>deb http://ppa.launchpad.net/ansible/ansible/ubuntu MATCHING\_UBUNTU\_CODENAME\_HERE principal
>
>Exemplo para Debian 11 (Bullseye)
>
>deb http://ppa.launchpad.net/ansible/ansible/ubuntu focal principal
>

Em seguida, execute estes comandos:

```console 
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 93C4A3FD7BB9C367
sudo apt update
sudo apt install ansible
```

Você não pode usar um sistema Windows para o nó de controle Ansible. Consulte [O Ansible pode ser executado no Windows?](https://docs.ansible.com/ansible/latest/os_guide/windows_faq.html#windows-faq-ansible)

_fonte_: _https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.htm#_