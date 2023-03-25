Ansible AWX
=======================================================

Ansible `AWX` é o projeto Ansible Automation Controller (antiga Ansible Tower), ele fornece uma moderna interface web-UI e API para gerenciar Ansible Playbooks, inventários, Credenciais e Vaults entre sua equipe em sua organização. O código fonte `AWX` está disponível sob a licença Apache 2.0. A Plataforma de Automação `ansible` é suportada pela Red Hat, enquanto a comunidade suporta o `AWX`. A solução foi desenvolvida em Python com o framework DJango.

Arquitetura
------------------------------------------------------

Não existe uma documentação robusta disponível na _internet_, segundo um estudo feito por [Ávaro Bacelar](https://medium.com/@alvarobacelar), alguns componentes podem ser identificados:

* **awx_task**: Responsável por realizar todas as tasks do AWX. Escrito em Python, ele faz o uso do Ansible (obviamente) para executar todas as tasks que são agendadas e as que são disparadas pelo launch;
* **awx_web**: Este componente fornece a interface Web e faz todo o intermédio entre o awx_task e o usuário. Como dito anteriormente, é escrito em Python e usa o framework DJango;
* **awx_memcached**: É um serviço  usado para armazenamento de chave valor (KV) que o AWX utiliza para armazenar algumas informações e realizar “troca de figurinhas” entre o awx_tasks e o awx_web;
* **awx_rabbitmq**: Este é um serviço de mensageria desenvolvido em Erlang, implementado para suportar mensagens em um protocolo denominado Advanced Message Queueing Protocol (AMQP). Na arquitetura do AWX ele é utilizado para realizar o troca de mensagens entre o awx_web e o awx_tasks permitindo o desacoplamento entre esses dois serviços.
* **awx_postgres**: É o banco de dados utilizado pelo AWX para armazenar todas as informações criadas pela interface Web. Você pode usar tanto um banco já existente ou subir um container com o banco (o que é default na instalação).

Requisitos
--------------------------------------------

Além dos compenentes que uma instalação de `AWX` carrega, sua arquitetura de funcionamento é baseada em _containers_, o `AWX` pode ser instalado no cluster do Kubernetes, Minikube, K3S, OpenShift ou em um ambiente somente com Docker.

Cada instalação tem sua particularidade, mas para todas elas será exigido a disponiblização de :

* Minimo de 4GB de memoria RAM
* Minimo de 2 CPU cores
* Minimo de 20GB de espaço em disco
* Se você executar em um PostgreSQL separado, a versão minima é 9.6.

De acordo com sua escolha, alguns conhecimentos adicoinais serão requeridos, por exemplo, uma instalação baseada em **Kubernetes**, exigirá um conhecimento básico da sua arquitetura, como a identificação dos _namespaces_, _nodes_, _deployments_, _services_ e _pods_, além da lógica de construção e nível de exposição de cada peça de seu _cluster_.



