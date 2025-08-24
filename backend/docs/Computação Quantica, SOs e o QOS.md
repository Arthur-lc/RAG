# **Qubits**

A computação quântica opera com **qubits**, que são as unidades fundamentais de informação quântica. Um qubit se diferencia de um bit clássico em dois aspectos cruciais, baseados nos princípios da mecânica quântica:

1. **Superposição:** Ao contrário de um bit clássico, um qubit pode existir em uma **superposição** de estados. Isso significa que ele pode ser 0, 1, ou uma **combinação de 0 e 1 simultaneamente**. Pense nisso como uma moeda girando no ar antes de cair: ela não é cara nem coroa até o momento da observação. Um qubit, enquanto "no ar", contém uma probabilidade de ser cara ou coroa.  
2. **Entrelaçamento (Emaranhamento):** Quando dois ou mais qubits estão **entrelaçados**, seus estados se tornam intrinsecamente ligados, independentemente da distância física que os separe. A medição do estado de um qubit entrelaçado instantaneamente afeta o estado do outro.

# **Gates Quânticos: As Operações Fundamentais nos Qubits**

Se os qubits são os blocos de construção da informação quântica, os **gates quânticos** são as **operações** que manipulam esses qubits. Eles são os análogos quânticos das portas lógicas (como AND, OR, NOT) que operam em bits clássicos.

A principal função dos gates quânticos é **modificar o estado de um ou mais qubits**. Eles podem fazer isso de várias maneiras:

1. **Alterar o Estado:** Um gate simples, como o **gate Pauli-X** (análogo ao NOT clássico), pode inverter o estado de um qubit, transformando um 0 em 1, e vice-versa.  
2. **Criar Superposição:** O **gate Hadamard** é um exemplo fundamental. Quando aplicado a um qubit em um estado definido (0 ou 1), ele o coloca em um estado de superposição, onde ele é uma combinação igual de 0 e 1\.  
3. **Criar Entrelaçamento:** Gates que operam em múltiplos qubits, como o **gate CNOT (Controlled-NOT)**, são cruciais para criar o entrelaçamento. O CNOT, por exemplo, inverte o estado de um segundo qubit (o "alvo") apenas se o primeiro qubit (o "controle") estiver em um estado específico (geralmente 1). É através desses gates de múltiplos qubits que a interconexão quântica é estabelecida.

# **Colapso da Função de Onda**

O **colapso do estado quântico**, ou **medição**, é o processo irreversível pelo qual um **qubit** em **superposição** (uma combinação probabilística de ∣0⟩ e ∣1⟩) transita para um estado clássico bem definido. Ao medir um qubit, ele força uma "escolha" probabilística entre ∣0⟩ ou ∣1⟩, com a probabilidade de cada resultado determinada pelas **amplitudes de probabilidade** do estado superposto original. Uma vez medido, o qubit perde sua superposição e a informação quântica contida nas amplitudes de probabilidade é irremediavelmente perdida, tornando o resultado acessível para processamento clássico.

Ou seja, apesar de **operar** sobre qubits em **estado de sobreposição**, o resultado processado pelo computador quântico são **bits clássicos,** pois assim que ocorre a medição, o qubit colapsa**.**

# **Principais Desafios: Decoerência e Ruído**

Pelo que eu li, acho que a decorrência é o maior problema da computação quântica. O QOS propõem maneiras de lidar com isso.

### **O Problema Inerente do Ruído Quântico**

O **ruído quântico** refere-se a quaisquer perturbações aleatórias que afetam o estado de um qubit, levando à perda de sua informação quântica. Diferentemente do ruído em sistemas clássicos, que pode frequentemente ser filtrado ou amplificado com sucesso, o ruído quântico é intrínseco à mecânica quântica e se manifesta de formas que são fundamentalmente difíceis de mitigar.

As principais fontes de ruído incluem:

* **Flutuações Ambientais:** Variações mínimas de temperatura, campos magnéticos ou vibrações mecânicas podem interagir com os qubits, fazendo-os "vazar" informações para o ambiente. A extrema sensibilidade dos estados quânticos exige que os qubits operem em condições de isolamento quase perfeitas, frequentemente à temperaturas criogênicas (na ordem de milikelvins, próximas ao zero absoluto) e protegidos por blindagem eletromagnética.  
* **Interações com o Ambiente (Decoerência):** A absorção ou emissão de fótons e as colisões com átomos ou elétrons podem causar a **decoerência**, que é a perda irrecuperável das propriedades de superposição e emaranhamento. Este é o mecanismo primário pelo qual a informação quântica é destruída.  
* **Imperfeições no Hardware e Controle:** As portas quânticas e os mecanismos de controle que manipulam os qubits (e.g., pulsos de micro-ondas, lasers) não são ideais. Incertezas ou imprecisões nesses pulsos, bem como o "crosstalk" (interferência indesejada entre qubits adjacentes ou linhas de controle), introduzem erros em cada operação.

---

### **O Problema da Decoerência**

O **tempo de coerência** é a duração máxima durante a qual um qubit consegue manter suas propriedades quânticas de superposição e emaranhamento. Após este período, a **decoerência** leva o qubit a perder sua coerência, e ele efetivamente colapsa para um estado clássico, tornando os cálculos subsequentes inválidos.

Este parâmetro é uma métrica crítica da qualidade de um qubit e do seu ambiente, sendo influenciado por:

* **Tipo de Qubit:** Diferentes arquiteturas de qubits (supercondutores, íons aprisionados, spins, topológicos) apresentam tempos de coerência variados, que vão de microssegundos a segundos, dependendo da robustez intrínseca da sua interação com o ambiente.  
* **Isolamento Ambiental:** Quanto melhor o isolamento de perturbações externas, maior o tempo de coerência. Esforços contínuos são feitos em criogenia, blindagem e designs de sistemas de vácuo.  
* **Pureza dos Materiais e Fabricação:** Defeitos nos materiais e imperfeições nos processos de fabricação podem introduzir impurezas ou interações indesejadas que aceleram a decoerência.  
* **Fidelidade das Operações:** Erros durante a aplicação de portas quânticas e a realização de medições também contribuem para a perda de coerência, efetivamente encurtando o tempo útil do qubit.

Um tempo de coerência longo é essencial para:

* **Profundidade do Circuito:** Permitir a execução de um maior número de operações (portas quânticas) e algoritmos mais complexos antes que o ruído comprometa o cálculo.  
* **Correção de Erros Quânticos (QEC):** A implementação de QEC exige que as operações de codificação, medição de síndrome e recuperação ocorram dentro do tempo de coerência dos qubits físicos. Se os erros ocorrerem muito rapidamente, o próprio overhead da correção de erros pode introduzir mais falhas do que corrige, um desafio conhecido como "limiar de erro".

# **Os Principais Tipos de Arquiteturas de Computadores Quânticos** {#os-principais-tipos-de-arquiteturas-de-computadores-quânticos}

Acho que podemos falar que existem várias arquiteturas e citar algumas para ilustrar.

No artigo sobre o [**QOS**](https://arxiv.org/pdf/2406.19120) (Abstract, 2º paragrafo) quando dizem *“QOS exposes a **hardware-agnostic** API for transparent quantum job execution”,* entendi que estão dizendo que o QOS funcionaria para qualquer arquitetura.

## **1\. Computadores Quânticos Supercondutores (superconducting quantum computers)**

Esta é, talvez, a abordagem mais conhecida e a que tem recebido maior investimento de grandes empresas como **IBM** e **Google**.

* **Como funciona:** Os qubits são feitos de circuitos elétricos supercondutores (que conduzem eletricidade sem resistência a temperaturas extremamente baixas, próximas do zero absoluto, cerca de \-273 °C). A informação quântica é codificada em estados de energia ou fluxos de corrente nesses circuitos.  
* **Vantagens:** Operações de gate muito rápidas (na ordem de nanossegundos) e um caminho demonstrado para a escalabilidade em termos de número de qubits em um único chip.  
* **Desafios:** Exigem temperaturas criogênicas extremas e são muito sensíveis ao ruído e à decoerência.

---

## **2\. Computadores Quânticos de Íons Presos (Trapped Ion Quantum Computers)**

Esta é outra abordagem líder, com empresas como **IonQ** sendo proeminentes.

* **Como funciona:** Qubits são átomos ionizados (com carga elétrica) que são suspensos e isolados no vácuo usando campos eletromagnéticos. Lasers são usados para manipular os estados eletrônicos desses íons, que representam os qubits.  
* **Vantagens:** Têm uma fidelidade de gate e tempos de coerência excepcionalmente altos (ou seja, os qubits mantêm seu estado quântico por mais tempo), e a conectividade entre os íons pode ser mais flexível ("all-to-all connectivity" em alguns arranjos).  
* **Desafios:** As operações de gate tendem a ser mais lentas em comparação com os qubits supercondutores, e a escalabilidade para um grande número de íons mantendo o controle individual preciso é um desafio de engenharia complexa.

---

## **3\. Computadores Quânticos Fotônicos (Photonic Quantum Computers)**

Empresas como Xanadu e PsiQuantum estão explorando essa via.

* **Como funciona:** Qubits são codificados em propriedades de fótons (partículas de luz), como sua polarização, fase ou caminho. As operações quânticas são realizadas usando componentes ópticos como divisores de feixe e espelhos.  
* **Vantagens:** Podem operar à temperatura ambiente, o que é uma grande vantagem em termos de infraestrutura. Fótons são excelentes para transmitir informações e têm pouca interação com o ambiente, levando a longos tempos de coerência.  
* **Desafios:** É difícil manter os fótons interagindo de forma eficiente para realizar operações de gate complexas, e o processo de medição de fótons pode ser destrutivo.

---

## **4\. Computadores Quânticos de Átomos Neutros (Neutral Atom Quantum Computers)**

Essa arquitetura tem ganhado destaque recentemente.

* **Como funciona:** Utiliza átomos neutros (sem carga elétrica líquida) que são aprisionados e manipulados por lasers altamente focados (pinças ópticas). Os qubits são tipicamente codificados nos estados de spin eletrônico dos átomos.  
* **Vantagens:** Oferecem alta escalabilidade potencial e longos tempos de coerência. A capacidade de mover os átomos individualmente permite redes de qubits reconfiguráveis.  
* **Desafios:** As operações de gate podem ser mais lentas, e o controle preciso de um grande número de lasers para manipular cada átomo é complexo.

---

## **5\. Qubits de Ponto Quântico (Quantum Dots / Silicon Qubits)**

Intel e algumas startups estão investindo nessa abordagem.

* **Como funciona:** Os qubits são baseados no spin de elétrons aprisionados em "pontos quânticos" em semicondutores, frequentemente silício, de forma semelhante aos transistores em chips clássicos.  
* **Vantagens:** Beneficia-se da vasta experiência da indústria de semicondutores e pode ser mais compatível com os métodos de fabricação existentes, o que sugere um potencial de escalabilidade a longo prazo.  
* **Desafios:** Manter a coerência do spin do elétron e o controle preciso em temperaturas criogênicas.

---

## **6\. Computadores Quânticos Topológicos (Topological Quantum Computers)**

Embora ainda em estágio inicial de pesquisa, com interesse da Microsoft, é uma área de grande promessa.

* **Como funciona:** A informação quântica é codificada nas "propriedades topológicas" de quasipartículas exóticas chamadas "ányons", que existem em sistemas bidimensionais. A manipulação dessas partículas através de "tranças" no espaço-tempo forma os gates quânticos.  
* **Vantagens:** A principal vantagem é a **robustez inerente contra erros**. Como a informação é armazenada em propriedades globais (topológicas) do sistema, ela é muito menos suscetível a perturbações locais e decoerência. Isso os torna potencialmente "tolerantes a falhas" desde o projeto.  
* **Desafios:** A existência e a manipulação dos ányons ainda são em grande parte teóricas e sua realização experimental é extremamente complexa.

# **Abstraindo as especificidades do hardware**

Uma das funções de um SO é abstrair as especificidades do hardware, parte desse desafio é que o mesmo SO precisa lidar com hardwares diferentes. No artigo sobre o [QOS](#qos:-a-quantum-operating-system), eles falam sobre a heterogeneidade que é essa ideia de hardwares diferentes, no caso seriam as diferentes [arquiteturas](#os-principais-tipos-de-arquiteturas-de-computadores-quânticos).

O QOS propõe suportar todas elas, além de criar abstrações.

## **Heterogeneidade e Dinamismo dos Recursos Quânticos**

"Across space, QPUs vary in terms of technology, e.g., **superconducting qubits** \[19, 69\] or **trapped ions** \[30\], architectures of the same technology, e.g., Falcon or Osprey superconducting QPUs \[32\], and noise properties (formally called **noisemodel**) even for the same architecture \[23\], e.g., two identical QPUs exhibit different noise errors, etc. Across time, the QPUs are calibrated regularly to maintain their performance \[31, 77, 82\], a process that generates **calibration data**. These data quantify the noise errors and change unpredictably after each calibration cycle."  
\[Artigo do QOS\]

Este parágrafo destaca as **duas maiores fontes de variabilidade** nos processadores quânticos (QPUs):

### **Variação "Across Space" (Através do Espaço \- Diversidade de Hardware):**

* **Tecnologia:** Como discutimos, existem diferentes paradigmas de hardware (qubits supercondutores, íons presos, fotônicos, etc.). Cada um tem suas próprias características, como a forma de criar qubits, a maneira de aplicar gates e as fontes de erro predominantes. Um QOS precisa ser capaz de lidar com essa diversidade.

* **Arquiteturas da Mesma Tecnologia:** Mesmo dentro de uma única tecnologia (como qubits supercondutores), existem diferentes "gerações" ou "famílias" de processadores (ex: Falcon, Osprey da IBM). Essas arquiteturas podem ter diferentes números de qubits, diferentes topologias de conectividade entre os qubits e características de desempenho distintas. Um QOS eficiente precisa otimizar o uso desses diferentes designs.

* **Propriedades de Ruído (Noise Model):** Esta é uma das características mais problemáticas. **Nenhum QPU é perfeito.** O ruído (decoerência, erros de gate, etc.) é inerente. O mais importante é que, mesmo duas QPUs *idênticas* (do mesmo fabricante, mesmo modelo), podem exibir **diferentes modelos de ruído**. Isso significa que a taxa e o tipo de erro podem variar de uma máquina para outra, exigindo que o QOS (ou o software de controle) leve isso em consideração ao executar um circuito.

### **Variação "Across Time" (Através do Tempo \- Dinamismo do Hardware):**

* **Calibração Regular:** Os QPUs são sistemas extremamente sensíveis. Para manter seu desempenho e reduzir os erros, eles precisam ser **calibrados regularmente**. Este é um processo complexo que ajusta os parâmetros de controle (ex: a duração e a amplitude dos pulsos de micro-ondas para um gate específico).

* **Dados de Calibração:** Cada ciclo de calibração gera **novos dados** que "quantificam os erros de ruído". Isso nos dá uma "foto" atualizada da saúde e do desempenho de cada qubit e gate.

* **Mudança Imprevisível:** O mais desafiador é que esses dados de calibração (e, consequentemente, as características de ruído do QPU) **mudam imprevisivelmente** após cada ciclo de calibração. Isso significa que um algoritmo otimizado para um QPU em um determinado momento pode não ter o mesmo desempenho alguns dias depois, após uma nova calibração que alterou as características de ruído dos qubits.

# **QOS: A Quantum Operating System** {#qos:-a-quantum-operating-system}

[(https://arxiv.org/pdf/2406.19120)](https://arxiv.org/pdf/2406.19120)

---

## **Componentes do QOS**

**Fonte:** Artigo, no começo da p.2 

O QOS abstrai a complexidade subjacente do gerenciamento de recursos quânticos e explora sistematicamente as vantagens e desvantagens associadas à computação quântica. Para isso, o QOS expõe hardware-agnostic APIs e é composto por quatro componentes principais: 

1. **Mitigador de Erros:** um componente que compõe técnicas complementares para aumentar a fidelidade, atenuando o ruído do hardware;  
2. **Estimador:** que prevê o desempenho da fidelidade em QPUs heterogêneas para orientar as decisões de agendamento;  
3. **Multiprogramador:** que agrupa trabalhos compatíveis na mesma QPU para melhorar a utilização da QPU e, ao mesmo tempo, minimizar a perda de fidelidade;  
4. **Agendador:** que executa o agendamento de trabalhos com vários objetivos e com reconhecimento de fidelidade para reduzir a latência de enfileiramento e equilibrar a carga da QPU.

# **Termos Chave**

Gerado pelo **notebooklm** com base no artigo do QOS.

* **QOS (Quantum Operating System):** Um sistema operacional de nuvem projetado para gerenciar recursos quânticos, mitigando suas limitações inerentes e equilibrando os tradeoffs de design da computação quântica, como fidelidade e utilização.  
* **QPU (Quantum Processing Unit):** A unidade de hardware que executa operações quânticas, equivalente a uma CPU em computadores clássicos.  
* **NISQ (Noisy Intermediate-Scale Quantum):** Refere-se à era atual dos computadores quânticos, caracterizados por um número limitado de qubits e a presença significativa de ruído e erros de hardware.  
* **Fidelidade (Fidelity):** Uma métrica que mede a similaridade entre a distribuição de probabilidade ruidosa de um resultado de execução de circuito quântico e a distribuição de probabilidade ideal (sem ruído). Um valor mais alto (próximo de 1\) indica melhor qualidade do resultado.  
* **Qernel:** A abstração central do QOS, que atua como um denominador comum para seus mecanismos. Armazena propriedades estáticas (como tamanho, profundidade, tipo de portas do circuito) e dinâmicas (como status de execução e estimativas de fidelidade) de um trabalho quântico.  
* **Mitigador de Erros (Error Mitigator):** Um componente do QOS que aplica técnicas de pré-processamento e pós-processamento para reduzir os erros de ruído de hardware e ambientais, visando aumentar a fidelidade dos programas quânticos.  
* **Estimador (Estimator):** Um componente do QOS responsável por prever a fidelidade de execução de um Qernel em diferentes QPUs sem a necessidade de execução real ou simulação dispendiosa, usando modelos analíticos e de regressão.  
* **Multi-programador (Multi-programmer):** Um componente do QOS que agrupa múltiplos Qernels (trabalhos) para execução na mesma QPU, visando aumentar a utilização da QPU enquanto minimiza a perda de fidelidade, considerando a compatibilidade dos Qernels.  
* **Agendador (Scheduler):** Um componente do QOS que atribui e executa Qernels em QPUs, otimizando para a fidelidade máxima e os tempos de espera mínimos. Lida com o tradeoff fundamental entre esses objetivos conflitantes.  
* **Qubit:** A unidade básica de informação em um computador quântico, que pode existir em uma superposição de 0 e 1 simultaneamente.  
* **Porta Quântica (Quantum Gate):** Operações aplicadas a qubits em um circuito quântico, análogas a portas lógicas em circuitos clássicos.  
* **Crosstalk:** Efeitos de interferência destrutiva entre qubits que estão fisicamente próximos ou interagindo, levando a erros e degradação da fidelidade.  
* **Decoherência (Decoherence):** A perda de propriedades quânticas (superposição e emaranhamento) de um qubit devido à interação com o ambiente, geralmente resultando na colapso para um estado clássico.  
* **Utilização Efetiva (Effective Utilization):** Uma métrica de utilização definida pelo QOS que captura tanto a dimensão espacial (número de qubits da QPU usados) quanto a temporal (duração dos trabalhos e ociosidade) do uso da QPU.  
* **Hotspot (de ruído):** Qubits ou portas em um circuito quântico que são particularmente suscetíveis a erros de ruído, contribuindo desproporcionalmente para a degradação da fidelidade.  
* **Congelamento de Qubits (Qubit Freezing):** Uma técnica de mitigação de erros que identifica qubits com muitas conexões (hotspots) e particiona o circuito, substituindo esses qubits por valores binários, o que remove suas portas não locais ruidosas.  
* **Corte de Circuito (Circuit Cutting):** Uma técnica de mitigação de erros que divide circuitos grandes em fragmentos menores para execução em QPUs menores, com os resultados sendo reconstruídos classicamente.  
* **Reuso de Qubits (Qubit Reuse/Recycling):** Uma técnica que reduz os requisitos de qubits físicos ao reutilizar um qubit após sua função na computação ser concluída, medindo-o, redefinindo-o e reatribuindo-o a outro qubit lógico.  
* **Transpilação (Transpilation):** O processo de converter o código de nível de circuito (lógico) em instruções executáveis em uma QPU específica, incluindo mapeamento de qubits lógicos para físicos e roteamento.  
* **Supermarq Features Vectors:** Um conjunto de métricas usadas para quantificar as propriedades estruturais e computacionais dos circuitos quânticos, como paralelismo, potencial de aceleração e suscetibilidade a erros.  
* **Balanceamento de Carga (Load Balancing):** A distribuição de trabalhos ou tarefas entre diferentes QPUs para otimizar o desempenho do sistema, reduzir os tempos de espera e evitar sobrecarregar máquinas individuais.

