**Etapa 8:** Carregue o Cookbook no Chef Server.

Para carregar o Apache Cookbook que baixei, primeiro mova este arquivo learn\_chef\_httpd para a pasta Cookbooks no chef-repo. Em seguida, altere seu diretório para **_Cookbooks_**.

**Execute t****h****is****:**

1

`mv /root/chef-repo/learn_chef_httpd /root/chef-repo/cookbooks`

Agora vá para este diretório de **_Cookbooks_**.

**Execute isto:**

1

`cd **_cookbooks_** `

Agora neste diretório, execute o comando abaixo para carregar o Apache Cookbook:

** Executar **** t **** é: **

1

`knife **_cookbook_** upload learn_chef_httpd`

![Upload Apache Cookbook - Chef Tutorial](images/chef-08-01.png)

Verifique o Cookbook no console Chef Server Management. Na seção de política, você encontrará o **_Cookbook_** que você carregou. Consulte a captura de tela abaixo:

![Guia de política do Server Chef - Tutorial do Chef](images/chef-08-02.png)

Agora, nossa etapa final é adicionar o Chef Node. Configurei uma Workstations, um Server Chef e agora preciso adicionar meus clientes ao Server Chef para automação.

_fonte_: _https://www.edureka.co/blog/chef-tutorial/_

[Passo 9](09-steps.md)