Instalando o Pulumi
====================

Para este tutorial, seguiremos com uma instalação para ambiente Windows e suporte ao provedor **AWS**, para outros Sistemas Operacionais voce poderá consultar a página de [**instalação**](https://www.pulumi.com/docs/get-started/aws/begin/). Para este exemplo utilizaremos o gerenciador de pacote [**Chocolatery**](https://chocolatey.org/), Utilize o _PowerShell_ para fazer a instalação do [**Pulumi**](https://www.pulumi.com//) no Windows usando permissões elevadas para **Administrador**.

Instale o [**Chocolatery**](https://chocolatey.org/install)
-------------------------------------------------------------

**Requisitos**

*  Windows 7+ / Windows Server 2003+
*  PowerShell v2+ (o mínimo é v3 para instalação a partir deste website devido ao requisito TLS 1.2)
*  .NET Framework 4+ (a instalação tentará instalar .NET 4.0 se não o tiver instalado) (o mínimo é 4.5 para instalar a partir deste website devido ao requisito TLS 1.2)

Primeiro, assegure-se de que está a utilizando privilégios de administrador, ao executar comandos no PowerShell, deve assegurar-se de que a _Get-ExecutionPolicy_ não é restrita. Sugerimos a utilização de _Bypass_ para contornar a política de instalação ou _AllSigned_ para obter um pouco mais de segurança.

````console

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

````

Cole o texto copiado na sessão do _PowerShell_ e pressione <Enter>, aguarde alguns segundos para que o comando termine. Caso a instlaçào o ocorra com sucesso, está pronto a usar Chocolatey! você poderá testar o comando abaixo:

````console

choco -?

````
Com o [**Chocolatery**](https://chocolatey.org/) instalado, o pacote do [**Pulumi**](https://www.pulumi.com//) pode ser configurado em sua máquina através do comando:

````console

choco install pulumi

````

Esta instalação pode demorar alguns minutos e pode ser necessário reiniciar o computador ou sua sessão do _PowerShell_ para que todas as configurações sejam reconhecidas.

_fonte_ : _https://www.pulumi.com/docs/get-started/aws/begin/_