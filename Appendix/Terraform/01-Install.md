Instalando o Terraform Windows/Linux
==========================================================================================================================================

Recupere o binário `terraform` baixando um binário pré-compilado ou compilando-o a partir do código-fonte.
<details><summary>

DownLoad do Binário
---------------------

</summary>
<p>


Para instalar o Terraform, encontre o [pacote apropriado](https://developer.hashicorp.com/terraform/downloads) para o seu sistema e baixe-o como um arquivo zip.

Após baixar o Terraform, descompacte o pacote. O Terraform é executado como um único binário chamado `terraform`. Quaisquer outros arquivos no pacote podem ser removidos com segurança e o Terraform ainda funcionará.

</p>
</details>

<details><summary>

Clone a partir do Git
------------------------

</summary>
<p>
Para compilar o binário Terraform a partir da fonte, clone o [repositório Terraform HashiCorp](https://github.com/hashicorp/terraform).

$ git clone https://github.com/hashicorp/terraform.git

     $ git clone https://github.com/hashicorp/terraform.git
    


Navegue até o novo diretório.

$ cd terraform

     $ cd terraform
    

Em seguida, compile o binário. Este comando irá compilar o binário e armazená-lo em `$GOPATH/bin/terraform`.

$ go install

     $ go install
    

</p>
</details>

Por fim, certifique-se de que o binário `terraform` esteja disponível em seu `PATH`. Este processo será diferente dependendo do seu sistema operacional.

<details><summary>

Mac ou Linux
----------------

</summary>
<p>

Imprima uma lista de locais separados por dois pontos em seu `PATH`.

$ eco $PATH

     $ eco $PATH
    


Mova o binário do Terraform para um dos locais listados. Este comando assume que o binário está atualmente em sua pasta de downloads e que seu `PATH` inclui `/usr/local/bin`, mas você pode personalizá-lo se seus locais forem diferentes.

$ mv ~/Downloads/terraform /usr/local/bin/

     $ mv ~/Downloads/terraform /usr/local/bin/

Para obter mais detalhes sobre como adicionar binários ao seu caminho, consulte [este artigo do Stack Overflow](https://stackoverflow.com/questions/14637979/how-to-permanently-set-path-on-linux).    

</p>
</details>

<details><summary>

Windows
------------
</summary>
<p>

[Este artigo Stack Overflow](https://stackoverflow.com/questions/1618280/where-can-i-set-path-to-make-exe-on-windows) contém instruções para definir o PATH no Windows por meio do usuário interface.

</p>
</details>