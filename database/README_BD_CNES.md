# Análise Estrutural e Diagrama Entidade-Relacionamento da Base de Dados CNES

Este relatório apresenta a análise técnica da base de dados do **Cadastro Nacional de Estabelecimentos de Saúde (CNES)**, fundamentada nos arquivos fornecidos em formato CSV. O objetivo principal é descrever a arquitetura de dados e os relacionamentos fundamentais que sustentam o sistema de informações de saúde brasileiro.

## Arquitetura de Dados e Entidades Centrais

A estrutura de dados do CNES é organizada de forma hierárquica e relacional, utilizando tabelas de referência para padronização e tabelas de relacionamento para a vinculação de recursos. A entidade central de todo o ecossistema é o **Estabelecimento de Saúde**, identificado unicamente pelo código `CO_UNIDADE`. Esta entidade serve como o ponto de convergência para informações geográficas, recursos humanos, equipamentos e serviços prestados.

| Categoria | Entidades Principais | Descrição Funcional |
| :--- | :--- | :--- |
| **Geografia** | `tbEstado`, `tbMunicipio` | Define a localização administrativa e a jurisdição gestora dos estabelecimentos. |
| **Infraestrutura** | `tbEstabelecimento`, `tbTipoUnidade` | Representa as unidades físicas de saúde e suas classificações operacionais. |
| **Recursos Humanos** | `tbDadosProfissionalSus`, `tbEquipe` | Gerencia o cadastro de profissionais e a organização de equipes de trabalho. |
| **Serviços e Bens** | `tbEquipamento`, `tbServicoEspecializado` | Cataloga os recursos tecnológicos e as especialidades oferecidas à população. |

## Dinâmica de Relacionamentos

Os relacionamentos na base de dados são estabelecidos predominantemente através de chaves estrangeiras que vinculam os recursos aos estabelecimentos. A gestão de recursos humanos, por exemplo, é realizada por meio da tabela `tbCargaHorariaSus`, que associa o profissional ao estabelecimento e define sua ocupação via Classificação Brasileira de Ocupações (CBO). Adicionalmente, a tabela `rlEstabEquipeProf` permite uma granularidade maior ao organizar esses profissionais em equipes específicas dentro da unidade.

No âmbito tecnológico e prestacional, o CNES utiliza tabelas de ligação como `rlEstabEquipamento` e `rlEstabServClass`. Estas tabelas não apenas vinculam o recurso ao estabelecimento, mas também carregam atributos quantitativos e qualitativos, como a quantidade de equipamentos em uso e se o serviço é prestado via Sistema Único de Saúde (SUS). Esta modelagem permite uma visão detalhada da capacidade instalada e da oferta de serviços de saúde em todo o território nacional.

> "A integridade referencial da base CNES é mantida através de códigos padronizados pelo DATASUS, garantindo que cada profissional, equipamento ou serviço esteja corretamente ancorado a uma unidade de saúde e a um município gestor."

O diagrama entidade-relacionamento anexo visualiza essas conexões, destacando as chaves primárias e estrangeiras que permitem a navegação entre os diferentes módulos da base de dados.
