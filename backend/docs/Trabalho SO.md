Para começar, vamos relembrar rapidamente o papel de um Sistema Operacional, ou SO. Como vimos na disciplina, um SO é essencialmente o software responsável por gerenciar os componentes de um sistema computacional. Ele tem duas funções principais: atuar como um gerenciador de recursos, controlando a CPU, a memória e os dispositivos de entrada e saída , e ao mesmo tempo, funcionar como uma máquina estendida, que esconde a complexidade do hardware e oferece uma interface mais simples para os programas de usuário. 

Pensem, por exemplo, no gerenciamento de memória. O SO cria a ilusão de que cada programa tem um espaço de memória vasto e só para si, utilizando técnicas como a memória virtual e a paginação, quando, na verdade, ele está organizando e protegendo diferentes partes da memória física. Da mesma forma, no gerenciamento de processos, o SO nos dá a sensação de que vários programas rodam ao mesmo tempo, a multiprogramação, ao alternar o uso da CPU entre eles de forma extremamente rápida. 

Agora, vamos mudar o cenário. Imaginem que trocamos esse hardware clássico e previsível por algo fundamentalmente diferente. Isso é a computação quântica. Na computação que usamos hoje, a unidade básica é o bit, que só pode ter o valor 0 ou 1\. Na computação quântica, a unidade fundamental é o qubit. 

Graças a princípios da mecânica quântica como a superposição e o emaranhamento, um qubit pode representar 0, 1, ou uma combinação de ambos os estados ao mesmo tempo. Isso permite uma forma completamente nova de processar informações.  Enquanto um computador clássico explora um caminho de cada vez para resolver um problema, um computador quântico pode, em teoria, explorar múltiplos caminhos simultaneamente.

E aqui chegamos ao nosso tema principal: se o SO é o gerente do hardware, o que acontece quando esse hardware se torna quântico?  Todos os conceitos que estudamos precisam ser repensados.

* Como um SO gerenciaria a "memória quântica", se os qubits são extremamente frágeis e perdem seu estado em uma fração de segundo, um fenômeno conhecido como decoerência?   
* Como ele faria o escalonamento de "processos quânticos"? Um escalonador clássico se preocupa com a prioridade e o tempo de uso da CPU. Um escalonador quântico teria que basear suas decisões no tempo de vida útil dos qubits.   
* E a comunicação e sincronização entre processos? Como seria uma comunicação interprocessos (IPC) em um ambiente quântico? 

Um SO quântico precisa gerenciar um hardware instável e probabilístico e, além disso, orquestrar a complexa integração entre as operações clássicas e quânticas que rodarão em conjunto. Esses são os novos e gigantescos desafios que a computação quântica impõe aos sistemas operacionais. 