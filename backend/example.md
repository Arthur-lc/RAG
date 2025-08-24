# **Documento de Requisitos do Sistema**  **Gerenciamento de quadras esportivas**

#  **Versão 1.0**

Arthur Lima da Costa \- 202135041  
Mário José da Silva Neto \- 201965507B   
Leonardo Chaves Costa \- 2019645208AB  
Samuel de Souza Rodrigues \- 202135015

# **1\. Prefácio** {#1.-prefácio}

## **1.1 Público-alvo** {#1.1-público-alvo}

Este documento especifica os requisitos do “Gerenciamento de quadras esportivas”, fornecendo aos stakeholders uma visão de como será o produto final e aos projetistas e desenvolvedores as informações necessárias para o projeto e implementação, e realização dos testes e homologação do sistema. 

## **1.2 Histórico da versão**

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 18/09/2023 | 0.0 | Criação do documento de requisitos. | Arthur, Mário, Samuel, Leonardo |
| 18/09/2023 | 0.1 |  identificação dos requisitos de usuário. | Arthur, Mário, Samuel, Leonardo |
| 14/11/2023 | 0.2 | Descrição dos requisitos de sistema. | Arthur e Samuel |
| 15/11/2023 | 0.3 | Arquitetura do Sistema. | Arthur e Samuel |
| 16/11/2023 | 0.4 | Descrição dos casos de uso, incluindo a descrição dos atores, pré-condições, fluxo padrão e fluxo alternativo. | Arthur |
| 25/11/2023 | 0.5 | Modelo de fluxo reserva de quadras e diagrama de atividades início partida | Samuel |
| 25/11/2023 | 0.6 | Diagrama de objetos | Arthur |
| 26/11/2023 | 0.7 | Descrevendo as mudanças previstas (evolução de hardware), mudanças nas necessidades de usuário. | Samuel |
| 26/11/2023 | 0.8 | Apresentando detalhes e informações específicas. | Mário |
| 26/11/2023 | 0.9 | Protótipo de telas do aplicativo. | Arthur |
| 26/11/2023 | 1.0 | Modelo do banco de dados. | Arthur |

# **2\. Introdução** {#2.-introdução}

## **2.1. Necessidades do sistema e suas funções** {#2.1.-necessidades-do-sistema-e-suas-funções}

O gerenciamento de quadras esportivas é uma tarefa desafiadora que requer um planejamento eficaz para otimizar os recursos disponíveis, como tempo, dinheiro e trabalho humano. Para abordar os principais problemas associados a essa gestão, é essencial desenvolver um aplicativo mobile que atenda às necessidades específicas dos clientes e proprietários de quadras esportivas. Abaixo, destacamos as principais necessidades e funções desse aplicativo:

### **2.1.1. Agendamento de quadras** {#2.1.1.-agendamento-de-quadras}

Os clientes precisam de uma maneira fácil e conveniente de verificar a disponibilidade das quadras e fazer reservas. O aplicativo deve permitir que eles visualizem os horários disponíveis e escolham o horário desejado.

### **2.1.2. Gestão de Conflitos de Horário** {#2.1.2.-gestão-de-conflitos-de-horário}

Para evitar conflitos de horário, o aplicativo deve coordenar automaticamente as reservas e garantir que não haja sobreposições.

### **2.1.3. Feedback dos Clientes** {#2.1.3.-feedback-dos-clientes}

Para avaliar a qualidade dos serviços oferecidos, o aplicativo deve incluir uma função de avaliação e feedback. Os clientes podem compartilhar suas opiniões e experiências, fornecendo informações valiosas para a melhoria contínua**.**

### **2.1.4. Histórico de Reservas** {#2.1.4.-histórico-de-reservas}

Uma função de histórico de reservas permite que os clientes e administradores acompanhem todas as reservas anteriores, facilitando o controle financeiro e a gestão de registros**.**

### **2.1.5. Relatórios e Análises** {#2.1.5.-relatórios-e-análises}

Para auxiliar na tomada de decisões estratégicas, o aplicativo pode gerar relatórios e análises sobre a utilização das quadras, receitas, feedback dos clientes e outras métricas relevantes.

## **2.2. Interoperabilidade** {#2.2.-interoperabilidade}

A interoperabilidade com os sistemas ASAAS e o Filmaeu aprimoraria a funcionalidade do aplicativo, proporcionando aos clientes uma experiência mais abrangente e conveniente. Além disso, a integração com sistemas externos pode simplificar processos, como pagamentos e solicitações de serviços adicionais, tornando o aplicativo ainda mais valioso para os usuários

### **2.2.1. Interoperabilidade com Sistema de Pagamento (ASAAS):**  {#2.2.1.-interoperabilidade-com-sistema-de-pagamento-(asaas):}

Para permitir a interoperabilidade com o sistema de pagamento ASAAS, o aplicativo pode integrar a API de pagamentos fornecida pelo ASAAS. Isso permitirá que os clientes façam pagamentos de reservas diretamente por meio do aplicativo, usando métodos de pagamento suportados pelo ASAAS, como cartões de crédito, boletos, entre outros. A integração pode incluir recursos como a geração de faturas, verificação de status de pagamento e registro de transações.

### **2.2.2. Interoperabilidade com Sistema de Gravação de Melhores Momentos (Filmaeu):** {#2.2.2.-interoperabilidade-com-sistema-de-gravação-de-melhores-momentos-(filmaeu):}

Para oferecer aos clientes a opção de gravar os melhores momentos das partidas, o aplicativo pode integrar o sistema de gravação Filmaeu. Isso pode ser feito por meio de uma funcionalidade que permite aos usuários solicitar serviços de gravação diretamente no aplicativo. A solicitação seria encaminhada para o sistema Filmaeu, que registraria a solicitação, coordenaria a gravação e disponibilizaria os vídeos aos clientes por meio do aplicativo após o processamento.

## **2.3. Como o sistema se ajusta aos negócios** {#2.3.-como-o-sistema-se-ajusta-aos-negócios}

O sistema de gerenciamento de quadras esportivas é altamente benéfico para os negócios, oferecendo melhorias significativas na eficiência operacional, na satisfação do cliente e no sucesso geral da organização. Ele automatiza processos de agendamento, coordenação de horários e gestão de reservas, economizando tempo e recursos. Além disso, proporciona uma experiência mais conveniente aos clientes, integrando sistemas de pagamento e oferecendo serviços adicionais, como gravação de melhores momentos. Isso resulta em clientes mais satisfeitos e leais. A gestão financeira é otimizada, e conflitos de horários são evitados, aumentando a utilização dos recursos. A programação automatizada de manutenção e limpeza melhora a segurança e a qualidade das instalações. A análise de dados ajuda na tomada de decisões informadas, contribuindo para o crescimento dos negócios. Em resumo, o sistema de gerenciamento de quadras esportivas se adapta aos negócios ao proporcionar eficiência, satisfação do cliente e uma vantagem competitiva.

# **3\. Glossário** {#3.-glossário}

A correta interpretação deste documento exige o conhecimento de algumas convenções e termos específicos, que são descritos a seguir.

## **3.1. Identificação dos requisitos** {#3.1.-identificação-dos-requisitos}

Por convenção, a referência a requisitos é feita através do nome da subseção onde eles estão descritos seguidos do identificador do requisito, conforme a especificação a seguir: \[nome da subseção. identificador do requisito\]  
Por exemplo, o requisito funcional deve estar descrito em um bloco identificado pelo número \[RF016\]. Já o requisito não funcional deve estar descrito na seção de requisitos não funcionais em um bloco identificado por \[RNF008\].  
Os requisitos devem ser identificados com um identificador único. A numeração inicia com o identificador \[RF001\] ou \[RNF001\] e prossegue sendo incrementada à medida que forem surgindo novos requisitos.

## **3.2. Partida** {#3.2.-partida}

Uma partida é a estrutura gerada pela relação de um usuário, uma quadra e um período de tempo. Toda vez que um usuário alugar uma quadra, ele passa a ser responsável por uma partida que ocorrerá na quadra alugada durante o período em que a quadra foi alugada.

# **4\. Definição de requisitos de usuário** {#4.-definição-de-requisitos-de-usuário}

## **4.1. Requisitos funcionais** {#4.1.-requisitos-funcionais}

### **4.1.1. Funcionalidades de usuário** {#4.1.1.-funcionalidades-de-usuário}

\[RF001\] O usuário deve ser capaz de criar uma conta no aplicativo.  
\[RF002\] O usuário deve ser capaz de fazer login no aplicativo.  
\[RF003\] O usuário deve ser capaz de visualizar as quadras disponíveis em determinado momento.  
\[RF004\] O usuário deve ser capaz de alugar quadras.  
\[RF005\] O usuário deve ser capaz de realizar o pagamento do aluguel.  
\[RF006\] O usuário deve ser capaz de registrar formas de pagamento padrão.

### **4.1.2. Partidas Públicas** {#4.1.2.-partidas-públicas}

\[RF007\] O usuário deve ser capaz de tornar sua partida pública.  
\[RF008\] O usuário deve ser capaz de consultar partidas públicas.  
\[RF009\] O usuário deve ser capaz de se juntar a partidas públicas.

### **Funcionalidades de Funcionário** {#funcionalidades-de-funcionário}

\[RF010\] O funcionário deve ser capaz de registrar quadras.  
\[RF011\] O funcionário deve ser capaz de editar quadras.  
\[RF012\] O funcionário deve ser capaz de excluir quadras.  
\[RF013\] O sistema deve notificar um funcionário para realizar a limpeza das quadras.

### **4.1.4. Avaliações** {#4.1.4.-avaliações}

\[RF014\] O usuário deve ser capaz de enviar uma avaliação sobre uma quadra que alugou.  
\[RF015\] O usuário deve ser capaz de enviar uma avaliação sobre uma partida que participou.

### **4.1.5. Relatórios** {#4.1.5.-relatórios}

\[RF016\] O funcionário deve ser capaz de gerar relatórios financeiros.  
\[RF017\] O usuário deve ser capaz de enviar uma avaliação sobre os demais participantes com quem jogou.  
\[RF018\] O funcionário deve ser capaz de gerar relatórios sobre as partidas.  
\[RF019\] O funcionário deve ser capaz de gerar relatórios sobre os usuários.  
\[RF020\] O funcionário deve ser capaz de gerar relatórios sobre as quadras.

## **4.2. Requisitos não funcionais** {#4.2.-requisitos-não-funcionais}

4.2.1. \[RNF001\] O aplicativo deve ser portátil para os sistemas IOS e Android.  
4.2.2. \[RNF002\] O sistema deve ser capaz de realizar *rollback* em uma transação de pagamento com erro.  
4.2.3. \[RNF003\] O sistema deve garantir a segurança dos dados sensíveis do usuário.   
4.2.4. \[RNF004\] O sistema deve estar sempre disponível ao usuário.  
4.2.5. \[RNF005\] O sistema deve ser otimizado para exigir menos recursos de armazenamento.  
4.2.6. \[RNF006\] O sistema deve ser otimizado para exigir menos recursos de processamento.

## 

## 

# **5\. Arquitetura do sistema** {#5.-arquitetura-do-sistema}

# ![][image1]

# **6\. Especificação de Requisitos de Sistema** {#6.-especificação-de-requisitos-de-sistema}

## **6.1. Especificação de Requisitos Funcionais de Sistema** {#6.1.-especificação-de-requisitos-funcionais-de-sistema}

### **6.1.1. Funcionalidades de usuário** {#6.1.1.-funcionalidades-de-usuário}

#### a
| \[RF001\] O usuário deve ser capaz de criar uma conta no aplicativo. |  |
| :---- | :---- |
| Descrição | Este requisito implica que o aplicativo deve fornecer uma funcionalidade que permita aos usuários criar contas pessoais. Isso irá envolver a coleta de informações básicas, como nome, endereço de e-mail e senha, além de incluir verificações de segurança, como confirmação de e-mail ou número de telefone. |
| Atores | Usuário. |
| Pré-condições | Nenhum usuário deve estar logado no aplicativo. |
| Fluxo padrão | O usuário seleciona a opção de “Cadastrar”; O usuário preenche os campos: Nome; E-mail; Telefone; Senha. O usuário clica no botão de criar conta. |
| Fluxos alternativos | Ao inserir um e-mail já cadastrado, o aplicativo deve informar ao usuário. Ao inserir um e-mail invalido, o aplicativo deve informar ao usuário. Ao inserir um telefone invalido, o aplicativo deve informar ao usuário. |

#### a
| \[RF002\] O usuário deve ser capaz de fazer login no aplicativo. |  |
| :---- | :---- |
| Descrição | Uma vez que os usuários tenham uma conta, eles devem ser capazes de fazer login no aplicativo para acessar suas funcionalidades personalizadas. Isso irá envolver a verificação do nome de usuário e senha, para autenticar o usuário. |
| Atores | Usuário. |
| Pré-condições | O usuário já deve estar cadastrado no sistema e nenhum usuário deve estar logado no aplicativo. |
| Fluxo padrão | Usuário abre o aplicativo; Usuário informa e-mail ou telefone; O usuário clica no botão “Login”. |
| Fluxos alternativos | Caso as informações inseridas não sejam correspondentes a nenhuma conta cadastrada, o aplicativo deve informar ao usuário. |

#### a
| \[RF003\] O usuário deve ser capaz de visualizar as quadras disponíveis em determinado momento. |  |
| :---- | :---- |
| Descrição | O usuário deve ser capaz de escolher uma data e hora e visualizar as quadras disponíveis para alugar nesse período. |
| Atores | Usuário. |
| Pré-condições | O usuário deve estar logado no aplicativo |
| Fluxo padrão | Usuário seleciona a opção “Alugar quadra”; Usuário insere o período que deseja alugar a quadra; O aplicativo mostra todas as quadras disponíveis naquele período. |
| Fluxos alternativos | Caso nenhuma quadra esteja disponível no período escolhido, o aplicativo deve informar o usuário. |

#### a
| \[RF004\] O usuário deve ser capaz de alugar quadras. |  |
| :---- | :---- |
| Descrição | A partir da lista de quadras disponíveis descrita no \[RF003\] os usuários devem ter a capacidade de alugar uma das quadras. Isso envolve a seleção de uma e realização do pagamento. |
| Atores | Usuário. |
| Pré-condições | O usuário deve estar na página da lista de quadras. |
| Fluxo padrão | Usuário seleciona uma quadra; Aplicativo mostra as informações da quadra; Usuário seleciona a opção de alugar a quadra; Aplicativo calcula o preço do aluguel; Aplicativo leva o usuário à tela de pagamento. |
| Fluxos alternativos | Caso o usuário decida não alugar a quadra selecionada, ele tem a opção de voltar para a lista de quadras. |

#### a
| \[RF005\] O usuário deve ser capaz de realizar o pagamento do aluguel. |  |
| :---- | :---- |
| Descrição | Durante o processo de aluguel da quadra, o usuário deve poder efetuar o pagamento para confirmar a reserva da quadra. Esse pagamento será executado pela integração com um sistema de pagamento online. |
| Atores | Usuário. |
| Pré-condições | O usuário já deve ter passado pelo processo de alugar uma quadra \[RF004\] |
| Fluxo padrão | Aplicativo oferece as opções de pagamento já cadastradas pelo usuário e a opção de utilizar outra forma de pagamento; Usuário seleciona uma das opções; Sistema registra o pagamento e o aluguel da quadra. |
| Fluxos alternativos | Caso o usuário escolhe utilizar outra forma de pagamento, ele deve inserir todas as informações do cartão; |

#### a
| \[RF006\] O usuário deve ser capaz de registrar formas de pagamento padrão |  |
| :---- | :---- |
| Descrição | O usuário deve ser capaz de cadastrar formas de pagamento padrão para facilitar o processo de pagamento em futuras transações. |
| Atores | Usuário |
| Pré-condições | O usuário deve estar logado no aplicativo e na aba de configurações |
| Fluxo padrão | Usuário seleciona “Adicionar formas de pagamento”. Usuário informa o tipo de forma de pagamento (débito ou crédito). Usuário informa as informações do cartão: Nome do titular Número do cartão Data de validade Código de segurança |
| Fluxos alternativos | Caso alguma informação esteja invalida, o usuário deve informar o usuário e impedir o registro. |

### **6.1.2. Partidas Públicas** {#6.1.2.-partidas-públicas}
#### b
| \[RF007\] O usuário deve ser capaz de tornar sua partida pública |  |
| :---- | :---- |
| Descrição | Os usuários têm a opção de tornar sua partida pública. Isso significa que todas as informações como data, hora e quadra estarão disponíveis para outros usuários. Além disso, o usuário deve informar a quantidade máxima de usuários que podem se juntar à sua partida. |
| Atores | Usuário. |
| Pré-condições | O usuário deve ter uma quadra alugada. |
| Fluxo padrão | Usuário entra na página “minhas partidas”; Usuário seleciona uma partida Aplicativo mostra as informações da partida; Usuário seleciona a opção “tornar partida pública”; Usuário deve informar a quantidade máxima de usuários que podem se juntar à partida. |
#### b
| \[RF008\] O usuário deve ser capaz de consultar partidas públicas |  |
| :---- | :---- |
| Descrição | Os usuários devem ser capazes de visualizar uma lista com todas as partidas públicas de outros usuários. |
| Atores | Usuário. |
| Pré-condições | Devem existir partidas públicas registradas no sistema. |
| Fluxo padrão | Usuário entra na página “partidas públicas”; Aplicativo mostra todas as partidas públicas. |
| Fluxos alternativos | Caso não tenha nenhuma partida pública registrada, o aplicativo deve informar ao usuário. |
#### b
| \[RF009\] O usuário deve ser capaz de se juntar a partidas públicas |  |
| :---- | :---- |
| Descrição | A partir da lista de partidas públicas, os usuários devem ser capazes de se juntar a partidas a sua escolha. O sistema deve impedir que o limite de ingressantes não seja excedido. |
| Atores | Usuário. |
| Pré-condições | O usuário deve estar na página “partidas públicas”. |
| Fluxo padrão | Usuário escolhe uma partida da lista de partidas públicas; Aplicativo mostra as informações da partida; Usuário seleciona a opção “juntar-se à partida”. |
| Fluxos alternativos | Caso o usuário decida não se juntar à partida, ele tem a opção de voltar à lista de partidas. Caso a quantidade máxima de participantes tenha sido excedida, o aplicativo deve informar ao usuário e impedir que o usuário se junte à partida. |

### **6.1.3. Funcionalidades de funcionário** {#6.1.3.-funcionalidades-de-funcionário}
#### c
| \[RF010\] O funcionário deve ser capaz de registrar quadras |  |
| :---- | :---- |
| Descrição | Este requisito refere-se à capacidade do funcionário de adicionar novas quadras ao sistema. |
| Atores | Funcionário. |
| Pré-condições | Nenhuma. |
| Fluxo padrão | Funcionário abre a lista de quadras; Funcionário seleciona a opção “Adicionar nova quadra”; Funcionário insere as informações sobre a quadra: Nome Fotos da quadra Listas de esportes que podem ser praticados Funcionário seleciona a opção “Adicionar nova quadra”; |
| Fluxos alternativos | Caso já exista uma quadra com o nome digitado, o aplicativo deve informar o funcionário. |
#### c
| \[RF011\] O funcionário deve ser capaz de editar quadras. |  |
| :---- | :---- |
| Descrição | Uma vez registradas, as informações das quadras devem ser editáveis pelos funcionários. Isso irá incluir a capacidade de atualizar todos os detalhes da quadra. |
| Atores | Funcionário. |
| Pré-condições | Devem existir quadras cadastradas no sistema. |
| Fluxo padrão | Funcionário abre a lista de quadras; Aplicativo mostra todas as quadras cadastradas; Funcionário seleciona uma quadra; Aplicativo mostra todas as informações da quadra selecionada; Funcionário clica no botão de editar; Funcionário altera os campos; Funcionário clica em salvar; |
| Fluxos alternativos | Caso o nome da quadra seja alterado e o novo nome já seja de outra quadra, o aplicativo deve avisar o funcionário. |
#### c
| \[RF012\] O funcionário deve ser capaz de excluir quadras. |  |
| :---- | :---- |
| Descrição | Este requisito indica que os funcionários têm a capacidade de remover quadras do banco de dados. |
| Atores | Funcionário. |
| Pré-condições | Devem existir quadras cadastradas no sistema. |
| Fluxo padrão | Funcionário abre a lista de quadras; Aplicativo mostra todas as quadras cadastradas; Funcionário seleciona uma quadra; Aplicativo mostra todas as informações da quadra selecionada; Funcionário clica na opção “Excluir quadras”; Aplicativo perguntar a o funcionário se ele tem certeza; Funcionário seleciona a opção “sim”; O sistema exclui a quadra da base de dados.  |
| Fluxos alternativos | Se, ao perguntar ao funcionário se ele tem certeza, a resposta for não, nada deve ser feito. |
#### c
| \[RF013\] O sistema deve notificar um funcionário para realizar a limpeza das quadras. |  |
| :---- | :---- |
| Descrição | Este requisito sugere que o sistema deve ser capaz de enviar notificações automáticas aos funcionários para realizar a limpeza das quadras 1h antes do período de aluguel. |
| Atores | Funcionário. |
| Pré-condições | O funcionário deve estar na página de “limpeza e manutenção“. |
| Fluxo padrão | Aplicativo mostra uma planilha contendo as informações: Quadra; Funcionário; Horário; Funcionário deve marcar que está a caminho da quadra. |

### **6.1.4. Avaliações** {#6.1.4.-avaliações}
#### d
| \[RF014\] O usuário deve ser capaz de enviar uma avaliação sobre uma quadra que alugou |  |
| :---- | :---- |
| Descrição | Após participar de uma partida, os usuários podem fornecer feedback sobre a experiência, avaliando a quadra em uma escala de 1 a 5\. |
| Atores | Usuário |
| Pré-condições | O usuário deve ter participado de uma partida recentemente. |
| Fluxo padrão | Ao abrir o aplicativo após ter participado de uma partida, o aplicativo mostra uma tela de avaliação da partida; O usuário informa em uma escala de 1 a 5 sua satisfação com relação à qualidade da quadra. |
| Fluxos alternativos | O usuário pode não querer responder, por tanto deve ter uma opção para sair da tela de avaliação. |
#### d
| \[RF015\] O usuário deve ser capaz de enviar uma avaliação sobre uma partida que participou |  |
| :---- | :---- |
| Descrição | Após participar de uma partida, os usuários podem avaliar a partida em uma escala de 1 a 5\. |
| Atores | Usuário |
| Pré-condições | O usuário deve ter participado de uma partida recentemente. |
| Fluxo padrão | Ao abrir o aplicativo após ter participado de uma partida o aplicativo mostra uma tela de avaliação da partida; O usuário informa em uma escala de 1 a 5 sua satisfação com relação à partida. |
| Fluxos alternativos | O usuário pode não querer responder, por tanto deve ter uma opção para sair da tela de avaliação. |

### **6.1.5. Relatórios** {#6.1.5.-relatórios}
#### e
| \[RF016\] O funcionário deve ser capaz de gerar relatórios financeiros |  |
| :---- | :---- |
| Descrição | Este requisito implica que os funcionários têm a capacidade de gerar relatórios relacionados à receita mensal proveniente dos aluguéis das quadras. |
| Atores | Funcionário. |
| Pré-condições | O Funcionário deve estar na página de relatórios do aplicativo. |
| Fluxo padrão | Aplicativo mostra as opções de relatórios; Funcionário seleciona a opção “Relatório Financeiro”; Aplicativo mostra o relatório. |
#### e
| \[RF017\] O usuário deve ser capaz de enviar uma avaliação sobre os demais participantes com quem jogou |  |
| :---- | :---- |
| Descrição | Após participar de uma partida, os usuários podem avaliar os outros jogadores em uma escala de 1 a 5\. |
| Atores | Usuário |
| Pré-condições | O usuário deve ter participado de uma partida recentemente. |
| Fluxo padrão | Ao abrir o aplicativo após ter participado de uma partida, o aplicativo mostra uma tela de avaliação da partida; O usuário informa em uma escala de 1 a 5 sua satisfação com relação aos outros participantes da partida. |
| Fluxos alternativos | O usuário pode não querer responder, por tanto deve ter uma opção para sair da tela de avaliação, |
#### e
| \[RF018\] O funcionário deve ser capaz de gerar relatórios sobre as partidas |  |
| :---- | :---- |
| Descrição | Os funcionários devem ter a capacidade de escolher um período de tempo e gerar relatórios que abordam dados relacionados aos usuários do sistema. Isso irá incluir as informações: quantas partidas foram realizadas (públicas, privadas e ambas), qual foi a avaliação média das partidas. |
| Atores | Funcionário. |
| Pré-condições | O Funcionário deve estar na página de relatórios do aplicativo. |
| Fluxo padrão | Aplicativo mostra as opções de relatórios; Funcionário seleciona a opção “Relatório de Partidas”; Funcionário informa o período de tempo que o relatório precisa abranger; Aplicativo gera o relatório contendo: Quantas partidas foram realizadas; Qual foi a avaliação média das partidas. |
#### e
| \[RF019\] O funcionário deve ser capaz gerar relatórios sobre os usuários |  |
| :---- | :---- |
| Descrição | Os funcionários devem ter a capacidade de escolher um período de tempo e gerar relatórios que abordam dados relacionados aos usuários do sistema. |
| Atores | Funcionário. |
| Pré-condições | O Funcionário deve estar na página de relatórios do aplicativo. |
| Fluxo padrão | Aplicativo mostra as opções de relatórios; Funcionário seleciona a opção “Relatório de Usuários”; Funcionário informa o período de tempo que o relatório precisa abranger; Aplicativo gera o relatório contendo: Quantos usuários se cadastraram; Quantos usuários alugaram quadras Quantos usuários participaram de partidas públicas. |
#### e
| \[RF020\] O funcionário deve ser capaz de gerar relatórios sobre as quadras |  |
| :---- | :---- |
| Descrição | Os funcionários devem ter a capacidade de escolher um período de tempo e gerar relatórios que abordam dados relacionados às quadras. |
| Atores | Funcionário. |
| Pré-condições | O Funcionário deve estar na página de relatórios do aplicativo. |
| Fluxo padrão | Aplicativo mostra as opções de relatórios; Funcionário seleciona a opção “Relatório de Quadras”; Funcionário informa o período de tempo que o relatório precisa abranger; Aplicativo gera o relatório contendo: Quantas vezes cada quadra foi alugada; Quais as quadras mais alugadas; Avaliação das quadras pelos usuários. |

## **6.2. Especificação dos Requisitos Não Funcionais** {#6.2.-especificação-dos-requisitos-não-funcionais}

### **6.2.1. \[RNF001\] O aplicativo deve ser portátil para os sistemas IOS e Android.**  
	O aplicativo deve ser projetado e desenvolvido de maneira a ser executado nos sistemas operacionais IOS e Android. Isso implica na utilização de tecnologias e ferramentas que permitam a adaptação do aplicativo a ambas as plataformas, garantindo uma experiência uniforme para usuários de ambas as versões. A interface de usuário deve ser equivalente em ambos os sistemas para que um usuário acostumado com uma versão não tenha problemas ao mudar para a outra.

### **6.2.2. \[RNF002\] O sistema deve ser capaz de realizar *rollback* em uma transação de pagamento com erro.** {#6.2.2.-[rnf002]-o-sistema-deve-ser-capaz-de-realizar-rollback-em-uma-transação-de-pagamento-com-erro.}

Durante a transação de aluguel de quadras o sistema deve garantir que, em caso de falhas na comunicação com o servidor as informações e o estado da transação persistam, para que o usuário possa continuar o aluguél de onde ele parou

### **6.2.3. \[RNF003\] O sistema deve garantir a segurança dos dados sensíveis do usuário.** {#6.2.3.-[rnf003]-o-sistema-deve-garantir-a-segurança-dos-dados-sensíveis-do-usuário.}

	O sistema terá armazenadas informações sensíveis sobre os usuários, como nome, Informações do cartão. Por tanto, segundo a lei geral da proteção de dados pessoais (LGPD), o sistema deve garantir que esses dados não sejam acessados por ninguém além do próprio usuário.

### **6.2.4. \[RNF004\] O sistema deve estar sempre disponível ao usuário.** {#6.2.4.-[rnf004]-o-sistema-deve-estar-sempre-disponível-ao-usuário.}

	O sistema garante disponibilidade contínua e ininterrupta aos usuários, assegurando que esteja operacional 24 horas por dia, 7 dias por semana. Isso inclui a minimização do tempo de inatividade para a manutenções programadas e a prontidão para lidar com falhas imprevistas.

### **6.2.5. \[RNF005\] O sistema deve ser otimizado para exigir menos recursos de armazenamento.** {#6.2.5.-[rnf005]-o-sistema-deve-ser-otimizado-para-exigir-menos-recursos-de-armazenamento.}

	O sistema deve ser projetado e implementado de maneira a otimizar o uso de recursos de armazenamento, visando a eficiência na alocação e gestão de dados. Isso implica na minimização do espaço ocupado por dados armazenados sem comprometer a integridade ou desempenho do sistema. Estratégias como boas práticas no projeto dos bancos relacionais e ou não relacionais, visando o arquivamento eficiente dos dados, devem ser implementadas.

### **6.2.6. \[RNF006\] O sistema deve ser otimizado para exigir menos recursos de processamento.** {#6.2.6.-[rnf006]-o-sistema-deve-ser-otimizado-para-exigir-menos-recursos-de-processamento.}

	O sistema deve ser projetado e implementado com foco na otimização do processamento, buscando a eficiência no uso de recursos computacionais. Isso envolve a implementação de algoritmos eficientes.

# **7\. Modelos de Sistema** {#7.-modelos-de-sistema}

## **7.1** **Casos de uso** {#7.1-casos-de-uso}

![][image2]

## 	**7.2 Fluxo reserva de quadra \[BPMN\]** {#7.2-fluxo-reserva-de-quadra-[bpmn]}

## 

## **7.3 Diagrama atividade início de partida** {#7.3-diagrama-atividade-início-de-partida}

## **![][image3]**

## **7.4 Diagrama de objetos** {#7.4-diagrama-de-objetos}

## **![][image4]**

# **8\. Evolução de Sistema** {#8.-evolução-de-sistema}

## **8.1. Mudanças Previstas** {#8.1.-mudanças-previstas}

**8.1.1. Atualizações de Funcionalidades**: À medida que o sistema é utilizado e recebe feedback, são esperadas mudanças para melhorar a usabilidade e adicionar novas funcionalidades, como notificações em tempo real, integração com redes sociais, etc.

**8.1.2. Integração com Sistemas Externos**: Mudanças podem ocorrer para permitir a integração com outros sistemas, como sistemas de pagamentos de turistas de outros países, para facilitar transações financeiras relacionadas às reservas.

**8.1.3. Aprimoramento da Interface do Usuário**: Com base no feedback do usuário, são previstas mudanças na interface do usuário para tornar a navegação mais intuitiva e agradável.

## **8.2. Evolução de Hardware** {#8.2.-evolução-de-hardware}

**8.2.1. Melhorias na Infraestrutura de Servidores**: O sistema pode precisar de atualizações na infraestrutura de servidores para lidar com um aumento no número de usuários e garantir tempos de resposta rápidos, especialmente em períodos de alta demanda.

**8.2.2. Compatibilidade com Novos Dispositivos**: Conforme novos dispositivos e tecnologias emergem, o sistema pode precisar ser atualizado para garantir compatibilidade e uma experiência consistente em diferentes plataformas.

## **8.3. Mudanças nas Necessidades de Usuário** {#8.3.-mudanças-nas-necessidades-de-usuário}

**8.3.1. Novos Recursos Requisitados pelos Usuários**: À medida que os usuários interagem com o sistema, novas necessidades podem surgir. Pode ser necessário adicionar funcionalidades específicas solicitadas pelos usuários para atender às suas expectativas.

**8.3.2. Adaptação a Mudanças no Comportamento do Usuário**: Mudanças nos padrões de comportamento do usuário podem levar a ajustes na interface do usuário e nos processos para melhor atender às expectativas e preferências dos usuários.

# 

# **9\. Apêndices** {#9.-apêndices}

Este apêndice fornece informações detalhadas sobre os requisitos de hardware e a estrutura da base de dados para o sistema de gerenciamento de quadras esportivas.

## **9.1. Hardware** {#9.1.-hardware}

### **9.1.1. Requisitos de Dispositivos dos Usuários Finais** {#9.1.1.-requisitos-de-dispositivos-dos-usuários-finais}

O aplicativo será compatível com dispositivos móveis iOS (versão 14 ou superior) e Android (versão 7 ou superior). Recomenda-se que os dispositivos atendam às seguintes especificações mínimas:

iOS:  
Processador A10 Fusion ou superior.  
Memória RAM de 2 GB ou superior.

Android:  
Processador Snapdragon 625 ou equivalente.  
Memória RAM de 2 GB ou superior.

### **9.1.2. Requisitos de Servidores** {#9.1.2.-requisitos-de-servidores}

Para a hospedagem do sistema e gerenciamento de dados, recomenda-se um servidor com as seguintes especificações:

Processador: Intel Xeon ou equivalente.  
Memória: 8 GB de RAM.  
Armazenamento: SSD com capacidade mínima de 256 GB.  
Conexão de Rede: Conexão de alta velocidade com largura de banda adequada para suportar o tráfego esperado.

### **9.1.3. Protótipo das Telas do Aplicativo** {#9.1.3.-protótipo-das-telas-do-aplicativo}

Esse protótipo tem como objetivo a validação dos requisitos funcionais do sistema e não representa a versão final do aplicativo. Nele são representadas as telas de login e criação de contas e a tela principal do aplicativo mostrando as principais opções de ação do usuário, assim como as telas de aluguel de quadras e de procura de partidas públicas.

**Figura 9.1.1** \- Telas de login e criação de contas  
![][image5]![][image6]

**Figura 9.1.2** \- Tela principal do aplicativo  
![][image7]

**Figura 9.1.3** \- Telas de seleção de quadras para alugar  
![][image8]

**Figura 9.1.4** \- Tela de seleção de partidas públicas  
![][image9]

## **9.2. Base de Dados** {#9.2.-base-de-dados}

**9.2.1 Estrutura da Base de Dados**  
O sistema será baseado em uma estrutura de banco de dados relacional. A seguir, estão as principais entidades e suas relações:

Entidades Principais:  
Usuários: informações de registro, preferências, histórico de reservas.  
Quadras Esportivas: detalhes sobre as quadras disponíveis, horários de funcionamento, preços.  
Reservas: informações sobre reservas realizadas pelos usuários.

**Figura 9.2.1** \- Modelo do banco de dados  
![][image10]

**2.2 Segurança e Privacidade dos Dados**  
A base de dados será protegida por meio de mecanismos de autenticação e autorização, com permissões de acesso definidas de acordo com os níveis de usuário.  
Dados sensíveis serão criptografados para garantir a segurança e privacidade dos usuários.

**2.3 Estratégias de Backup e Recuperação**  
Serão implementados backups diários da base de dados, armazenados em local seguro e de fácil recuperação.  
Testes regulares de restauração serão conduzidos para garantir a eficácia dos procedimentos de backup.