o "Formato" YAML
--------------------------------------------------


YAML (pronuncia-se "yaamel") é um formato direto de serialização de dados projetado para legibilidade humana e interação com linguagens de script como Perl e Python. YAML é otimizado para definições de configuração, arquivos de log, mensagens da Internet e filtragem. Esta especificação descreve o formato de serialização.

 YAML foi proposto por Brian Ingerson \<<briani@ActiveState.com>\>, Clark C. Evans e Oren Ben-Kiki \<<oren@ben-kiki.org>\> em 2001 

YAML é um acrônimo recursivo que significa "YAML Ain't Markup Language" (em português, "YAML não é linguagem de marcação"). No início do seu desenvolvimento YAML significava "Yet Another Markup Language" ("Mais outra linguagem de marcação") para distinguir seu propósito centrado em dados no lugar de documentos marcados. Como é usado frequentemente XML para serialização de dados sendo este uma autêntica linguagem de marcação de documentos, é razoável considerar o YAML como uma linguagem baseada em formatação rápida.

A sintaxe do YAML é baseada em indentação e utiliza uma estrutura hierárquica para representar os dados. O YAML possui três tipos de estruturas de dados principais:

+ Sequências: representam listas de itens, separados por "- " (traço e espaço).
+ Mapeamentos: representam dicionários ou hashes, contendo chaves e valores separados por " : " (dois pontos).
+ Escalares: representam valores simples, como strings, números e booleanos.


Além disso, o YAML permite o uso de comentários (iniciados por "#"), referências a outras partes do documento e inclusão de outros arquivos YAML. Por ser um formato simples e legível, o YAML é muito utilizado em arquivos de configuração, como em sistemas de automação de infraestrutura, como o Ansible.

Exemplo de arquivo YAML:

```yaml
# Exemplo de arquivo YAML
id: 100
nome: Maria
idade: 25
habilidades:
  - C#
  - Ansible
  - MySQL
```

Neste exemplo, temos um mapeamento com quatro chaves: `id`, `nome`, `idade` e `habilidades`. A chave `habilidades` contém uma sequência com três itens. Todos os valores são escalares, exceto a sequência de habilidades, que é uma sequência de itens.