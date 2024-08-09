OpenTofu
-------------------------------

OpenTofu é uma iniciatitiva da [Linux Foundation](https://www.linuxfoundation.org/) a partir de um fork do repositório do terraform da versão 1.16, ou seja, o OpenTofu nasce já na mesma versão e totalmente compatível com o Terraform.
Mas qual o motivo para o nascimento desta iniciativa? Você pode ter todos os detalhes no [manifesto](https://opentofu.org/manifesto/) do projeto, mas basicamente, há uma desconfiança da comunidade [open source](https://www.redhat.com/en/topics/open-source/what-is-open-source-software) a partir da alteração da licença de distribuição do terraform por parte da empresa mantenedora, a [Hashcorp](https://www.hashicorp.com/), que a partir de Agosto de 2023 passou a distribuir todas as suas soluções sob um contrato baseado na [BSL](https://en.wikipedia.org/wiki/Business_Source_License) *Business Source License* em substituição a [MPL](https://www.mozilla.org/en-US/MPL/) *Mozilla Source License*. 
A partir dessa divisão, os projetos devem seguir caminhos independentes, a comunidade Linux será responsável pelas evoluções do OpenToFu atendendo aos interesses da própria comunidade e de desenvolvedores e promete garantir que teremos uma ferramenta tão robusta quanto o Terraform sob um licença de uso público, alinhada com o conceito de software *open source*.

### Características:
*   É agnostica a clouds;
*   Linguagem de código aberto mantida pela comunidade;
*   Executa o planejamento de execução antes da aplicação da configuração;
*   Interage com as Clouds mais utilizadas no mercado;
*   Integração com outras ferramentas de Infrastructure as code.
*   Possui seu proprio repositório de módulos (Registry)

### Quando e porque eu utilizaria o OpenToFu
Como o OpenTofu foi concebido a partir do conceito do [Terraform](/02%20-%20Tools/02-1-05%20Terraform.md) suas recomendações são, basicamente, as mesmas. Como trata-se de um projeto recente, suas evoluções poderão sugerir aplicações diferentes de seu "projeto pai", a conferir.

_fonte_ : _https://opentofu.org/docs/intro/_