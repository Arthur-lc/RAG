# Implicit Communication in Linear Quadratic Gaussian Control Systems

Report issue for preceding element

Gongpu Chen   and Deniz Gunduz The authors are with the Department of Electrical and Electronic Engineering, Imperial College London, London SW7 2AZ, UK (e-mails:{gongpu.chen, d.gunduz}@imperial.ac.uk).

Report issue for preceding element

###### Abstract

Report issue for preceding element

This paper studies implicit communication in linear quadratic Gaussian control systems. We show that the control system itself can serve as an implicit communication channel, enabling the controller to transmit messages through its inputs to a receiver that observes the system state. This communication is considered implicit because (i) no explicit communication channels are needed; and (ii) information is transmitted while simultaneously fulfilling the controller’s primary objective—maintaining the control cost within a specified level. As a result, there exists an inherent trade-off between control and communication performance. This trade-off is formalized through the notion of implicit channel capacity, which characterizes the supremum reliable communication rate subject to a constraint on control performance. We characterize the implicit channel capacity in three settings. When both the controller and the receiver have noiseless observations of the system state, the channel capacity admits a closed-form expression. When only the controller has noiseless observations, the channel capacity is given by the solution of a convex optimization. When both the controller and the receiver have noisy observations, we establish a lower bound on the implicit capacity. Surprisingly, when the controller has noiseless observations, the capacity-achieving input policy adheres to a separation principle, allowing the control and channel coding tasks to be addressed independently, without loss of optimality. Moreover, under this capacity-achieving input policy, the implicit channel can be equivalently translated into a Gaussian MIMO channel, enabling the use of existing channel codes to achieve implicit communication.

Report issue for preceding element

## I Introduction

Report issue for preceding element

Implicit communication is widespread in nature and human society, with examples including coordination and signaling in starling murmurations \[[1](https://arxiv.org/html/2509.16146v1#bib.bib1)\], fish schooling \[[2](https://arxiv.org/html/2509.16146v1#bib.bib2)\], human body language \[[3](https://arxiv.org/html/2509.16146v1#bib.bib3), [4](https://arxiv.org/html/2509.16146v1#bib.bib4)\], and more \[[5](https://arxiv.org/html/2509.16146v1#bib.bib5), [6](https://arxiv.org/html/2509.16146v1#bib.bib6), [7](https://arxiv.org/html/2509.16146v1#bib.bib7)\]. These phenomena demonstrate that information can be conveyed through observable actions and behaviors, without relying on explicit communication channels. This concept is also appealing in artificial systems, particularly in scenarios where explicit communication is unavailable or where implicit communication can serve as an effective complement. For instance, in autonomous driving \[[8](https://arxiv.org/html/2509.16146v1#bib.bib8), [9](https://arxiv.org/html/2509.16146v1#bib.bib9)\], a vehicle may need to express its intent—such as parking in a specific spot, changing lanes, or dropping off a passenger—to surrounding vehicles to enable safe and coordinated interactions. In human–robot interactions \[[10](https://arxiv.org/html/2509.16146v1#bib.bib10), [11](https://arxiv.org/html/2509.16146v1#bib.bib11), [12](https://arxiv.org/html/2509.16146v1#bib.bib12)\], a robot may need to signal its intent to facilitate smoother cooperation. In swarm robotics \[[13](https://arxiv.org/html/2509.16146v1#bib.bib13), [14](https://arxiv.org/html/2509.16146v1#bib.bib14), [15](https://arxiv.org/html/2509.16146v1#bib.bib15)\], robots often need to exchange information to coordinate their actions, much like birds in flocks or insects in swarms. Implicit communication through actions and behaviors is a promising approach in all of these scenarios, as it mirrors the strategies naturally employed by humans and animals.

Report issue for preceding element

From an information-theoretic perspective, all communication—whether explicit or implicit—requires a channel: an input–output system that allows the receiver to infer, from the observed outputs, the message that is encoded into the inputs by the transmitter. In this sense, existing studies often lack a rigorous definition of implicit communication \[[15](https://arxiv.org/html/2509.16146v1#bib.bib15), [16](https://arxiv.org/html/2509.16146v1#bib.bib16), [17](https://arxiv.org/html/2509.16146v1#bib.bib17)\]. What constitutes the channel in implicit communication? How is information transmitted through this channel? To address these questions, we first propose the following definitions: An explicit communication channel is an input-output system dedicated solely to communication between a transmitter and a receiver. In contrast, an implicit communication channel is a system in which the inputs and outputs serve a primary functional role (e.g., control or decision-making) and simultaneously transmit information that can be decoded by a receiver observing the system outputs. In such cases, communication emerges as a byproduct of the system’s operation through slight but purposeful modifications of the inputs and outputs—without the need for an external signaling mechanism.

Report issue for preceding element

This paper investigates implicit communication in linear quadratic Gaussian (LQG) control systems, where a linear system driven by Gaussian noise evolves under the influence of the controller’s inputs. While the system is primarily designed to perform a control task, we show that it can also function as an implicit communication channel, allowing the controller to transmit messages to a receiver that can observe the system state, without relying on explicit channels. Specifically, the controller can encode the message into the control inputs, and the receiver then decodes the message from its observations of the system state—either noiseless or noisy. However, there is no free lunch—the implicit communication comes at the cost of some degradation in control performance. This is natural, as encoding messages into control inputs typically requires the controller to deviate from the optimal control policy. As a result, there exists a fundamental trade-off between control and communication performance.

Report issue for preceding element

We define the implicit communication channel within this framework using standard information-theoretic principles and formulate the implicit communication problem as a co-design of channel coding and control. The trade-off between control and communication is then characterized by the capacity of the implicit channel, subject to a constraint on the control performance. Our main contributions are theoretical characterizations of the implicit channel capacity in three settings, as summarized below:

Report issue for preceding element

*   1.
    
    We begin by analyzing the case where both the controller and the receiver have noiseless observations of the system state, and we derive a closed-form expression for the implicit channel capacity. The expression coincides with that of the memoryless Gaussian MIMO channel capacity. We show that, under the capacity-achieving input policy, the implicit channel is equivalent to a memoryless Gaussian MIMO channel whose noise is exactly the process noise, and the control constraint translates into a power constraint on the channel input. Moreover, in the case of scalar systems, the implicit channel capacity admits an explicit expression as a function of the optimal control cost and the tolerable control loss, clearly revealing the trade-off between control and communication.
    
    Report issue for preceding element
    
*   2.
    
    We then generalize to the setting in which the controller has noiseless observations while the receiver observes the system state through noise. In this case, we characterize the implicit channel capacity as the solution to a finite-dimensional convex optimization problem. Under the capacity-achieving input policy, the implicit channel can be equivalently translated into a Gaussian MIMO channel with memory, where the noise process forms a hidden Markov chain.
    
    Report issue for preceding element
    
*   3.
    
    Finally, we consider the most general setting, in which both the controller and the receiver have noisy observations. This case is particularly challenging, and we establish only a lower bound on the implicit channel capacity. This bound is achievable using a linear input policy that follows a separation principle, under which the implicit channel can be translated into a Gaussian MIMO channel with memory.
    
    Report issue for preceding element
    

A surprising finding is the emergence of a separation principle in the structure of the optimal input policy when the controller has noiseless observations—the two settings in which we can fully characterize the channel capacity. In these cases, we show that the capacity-achieving input policy is given by the sum of the optimal LQG control input and a Gaussian random variable. Since the optimal control input is fixed by the LQG control objective, implicit communication is achieved by encoding the message into the Gaussian component, which we refer to as the communication signal. In other words, in an LQG control system, implicit communication can be achieved by simply adding a communication signal to the optimal control input. This separation principle significantly simplifies the problem, as it implies that the control and channel coding tasks can be addressed independently, without loss of optimality.

Report issue for preceding element

Whether this separation principle continues to hold in the setting with noisy observations at the controller remains an open question. However, the lower bound we derive corresponds exactly to the maximum rate achievable by the input policies that adhere to this separation structure, making the bound of significant practical relevance.

Report issue for preceding element

The rest of the paper is organized as follows. Section [II](https://arxiv.org/html/2509.16146v1#S2 "II Related Work ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") reviews the related work. Section [III](https://arxiv.org/html/2509.16146v1#S3 "III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") introduces preliminaries on LQG control and formulates the implicit communication problem in the noiseless setting. Section [IV](https://arxiv.org/html/2509.16146v1#S4 "IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") presents the implicit channel capacity and the achievability proof for the noiseless case. Section [V](https://arxiv.org/html/2509.16146v1#S5 "V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") addresses the setting with noisy observations at the receiver. Section [VI](https://arxiv.org/html/2509.16146v1#S6 "VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") establishes a lower bound on the channel capacity when both the controller and the receiver have noisy observations. Section [VII](https://arxiv.org/html/2509.16146v1#S7 "VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") presents the proofs of the main theorems. Finally, Section [VIII](https://arxiv.org/html/2509.16146v1#S8 "VIII Conclusion and Future Work ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") concludes this paper and discusses possible directions of future work.

Report issue for preceding element

### I-A Notations

Report issue for preceding element

For any sequence {xt:t≥1}\\{x\_{t}:t\\geq 1\\}, we will use xijx^{j}\_{i} to denote the subsequence {xi,xi+1,⋯,xj}\\{x\_{i},x\_{i+1},\\cdots,x\_{j}\\}. Specially, x1jx\_{1}^{j} will be simple written as xjx^{j}. Given any positive integer nn, let \[n\]\={1,2,⋯,n}\[n\]=\\{1,2,\\cdots,n\\} be the set of integers between 11 and nn. For any matrix BB, B†B^{\\dagger} denotes the Moore–Penrose inverse of BB such that B​B†\=IBB^{\\dagger}=I. For a square matrix AA, Tr​(A)\\text{Tr}(A) and det(A)\\det(A) denote its trace and determinant, respectively. Positive definite (PD) and positive semi-definite (PSD) matrices are denoted by A≻0A\\succ 0 and A⪰0A\\succeq 0, respectively.

Report issue for preceding element

## II Related Work

Report issue for preceding element

Implicit communication has been studied across various fields \[[18](https://arxiv.org/html/2509.16146v1#bib.bib18), [19](https://arxiv.org/html/2509.16146v1#bib.bib19), [20](https://arxiv.org/html/2509.16146v1#bib.bib20), [21](https://arxiv.org/html/2509.16146v1#bib.bib21)\], with the most relevant to our work being research in control-related domains such as multi-agent systems \[[22](https://arxiv.org/html/2509.16146v1#bib.bib22), [23](https://arxiv.org/html/2509.16146v1#bib.bib23), [24](https://arxiv.org/html/2509.16146v1#bib.bib24)\] and human–robot interactions \[[25](https://arxiv.org/html/2509.16146v1#bib.bib25), [26](https://arxiv.org/html/2509.16146v1#bib.bib26), [27](https://arxiv.org/html/2509.16146v1#bib.bib27)\], where the transmitter is an agent engaged in a control task. Most of these studies are experimental in nature and often rely on machine learning methods, lacking a clear formulation of communication and a fundamental understanding of the complex relationship between control and communication.

Report issue for preceding element

One exception is the work in \[[28](https://arxiv.org/html/2509.16146v1#bib.bib28)\], which models the environment of a Markov decision process (MDP) as a finite-state channel and analyzes the trade-off between the MDP reward and channel coding rate. The channel capacity under a reward constraint is characterized as the solution to a convex optimization problem, where the objective function is the conditional mutual information I​(A;S′|S)I(A;S^{\\prime}|S), with AA denoting the action, and SS and S′S^{\\prime} representing the current and the next states, respectively. The limitation of \[[28](https://arxiv.org/html/2509.16146v1#bib.bib28)\] is that it focuses on MDPs with finite state and action spaces, and only consider the setting with noiseless observations. In contrast, the present work addresses LQG control systems with noisy observations, where the state, observation, and action spaces are all continuous.

Report issue for preceding element

The work in \[[29](https://arxiv.org/html/2509.16146v1#bib.bib29)\] studies a class of finite-state channels in which the previous output serves as the current channel state, referred to as POST channels. The authors present a surprising result: for certain POST channels, feedback does not increase channel capacity. This work is relevant to ours because, to some extent, the implicit communication channel in an LQG control system with noiseless observations can also be viewed as a POST channel. At each time step, the system is in some state xtx\_{t}, which can be interpreted as the channel state. The transmitter (i.e., the controller) applies an input utu\_{t}, resulting a new system state xt+1x\_{t+1}, which can be viewed as the channel input and output, respectively. The current output xt+1x\_{t+1} then becomes the channel state at the next time step. The key differences between the work in \[[29](https://arxiv.org/html/2509.16146v1#bib.bib29)\] and ours are twofold: (i) they focus on channels with finite state and input alphabets; and (ii) their setting does not impose any constraints, whereas our formulation includes a control performance constraint, which is effectively a joint constraint on both inputs and outputs.

Report issue for preceding element

Another line of research relevant to our work is the capacity of Gaussian MIMO channels, which has been extensively studied in the literature \[[30](https://arxiv.org/html/2509.16146v1#bib.bib30), [31](https://arxiv.org/html/2509.16146v1#bib.bib31), [32](https://arxiv.org/html/2509.16146v1#bib.bib32), [33](https://arxiv.org/html/2509.16146v1#bib.bib33)\]. Our analysis shows that, under a linear input policy—which is proved to be capacity-achieving when the controller has noiseless observations—the implicit channel can be equivalently translated into a Gaussian MIMO channel without channel state. In the case where both the controller and the receiver have noiseless observations, the equivalent channel is a memoryless Gaussian MIMO channel, whose capacity is known to admit a closed-form expression, as derived in \[[34](https://arxiv.org/html/2509.16146v1#bib.bib34)\] via the water-filling algorithm. Our achievability proof in this setting builds on this result, with additional analysis related to the control constraint.

Report issue for preceding element

In the more general setting where the receiver has noisy observations, the equivalent channel under the capacity-achieving input policy becomes a Gaussian MIMO channel with memory, in which the noise process forms a hidden Markov chain. The feedback capacity of such channels is studied in \[[35](https://arxiv.org/html/2509.16146v1#bib.bib35)\] and is characterized as the solution to a finite-dimensional convex optimization problem. However, there is no feedback in our setting. To the best of our knowledge, the capacity of this type of Gaussian MIMO channel with memory but without feedback has not been presented in the literature; only some simulation-based algorithms for computing the information rate are available \[[36](https://arxiv.org/html/2509.16146v1#bib.bib36), [37](https://arxiv.org/html/2509.16146v1#bib.bib37)\]. Hence our achievability proof in this setting is of independent interest—at least for linear-Gaussian systems. It is also worth noting that the equivalent channel in our problem does not fall into the category of Gaussian channels with inter-symbol interference (ISI) \[[38](https://arxiv.org/html/2509.16146v1#bib.bib38), [39](https://arxiv.org/html/2509.16146v1#bib.bib39), [40](https://arxiv.org/html/2509.16146v1#bib.bib40)\], as the memory arises solely from the hidden Markov structure of the noise process.

Report issue for preceding element

At the intersection of control and communication, extensive research has been conducted on control under communication constraints \[[41](https://arxiv.org/html/2509.16146v1#bib.bib41), [42](https://arxiv.org/html/2509.16146v1#bib.bib42), [43](https://arxiv.org/html/2509.16146v1#bib.bib43)\], which is also known as networked control \[[44](https://arxiv.org/html/2509.16146v1#bib.bib44)\]. These studies typically assume the presence of an explicit communication channel—often between the sensor and the controller—to enable information exchange within the control loop. The focus of analysis has been on understanding how the communication constraint affects the control performance. For example, the work in \[[45](https://arxiv.org/html/2509.16146v1#bib.bib45)\] analyzes the trade-off between control cost and the information rate over an explicit channel from the sensor to the controller. In contrast, our study introduces implicit communication as a new direction in integrating control and communication. In this framework, no explicit communication channel is assumed; rather, the control system itself serves as the medium for information exchange. From an information-theoretic perspective, implicit communication can be viewed as communication under control constraints, effectively reversing the conventional lens of networked control.

Report issue for preceding element

## III System Model and Preliminaries

Report issue for preceding element

This section begins with an introduction to linear quadratic-Gaussian control systems. We then define implicit communication in this setting, illustrating how communication can occur as a byproduct of LQG control. Finally, we formulate the trade-off between communication and control performance.

Report issue for preceding element

### III-A Linear Quadratic-Gaussian (LQG) Control Systems

Report issue for preceding element

Consider a discrete-time linear control system

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | xt+1\=A​xt+B​ut+wt,\\displaystyle x\_{t+1}=Ax\_{t}+Bu\_{t}+w\_{t}, |     | (1) |

where xt∈ℝd1x\_{t}\\in\\mathbb{R}^{d\_{1}} and ut∈ℝd2u\_{t}\\in\\mathbb{R}^{d\_{2}} are the state and control input at time tt, respectively, wt∈ℝd1w\_{t}\\in\\mathbb{R}^{d\_{1}} is an additive zero-mean white Gaussian noise with covariance matrix Ψw≻0\\Psi\_{w}\\succ 0, and A∈ℝd1×d1A\\in\\mathbb{R}^{d\_{1}\\times d\_{1}} and B∈ℝd1×d2B\\in\\mathbb{R}^{d\_{1}\\times d\_{2}} are fixed matrices. We assume the noise is independent of the state and input. In addition, {wt}\\{w\_{t}\\} is an independent and identically distributed (i.i.d.) sequence, i.e., wtw\_{t} is independent of wkw\_{k} for any t≠kt\\neq k. The initial state x1x\_{1} is randomly sampled from a Gaussian distribution 𝒩​(0,Ψx)\\mathcal{N}(0,\\Psi\_{x}). Finally, we make the usual assumption that the pair (A,B)(A,B) is controllable.

Report issue for preceding element

At each time tt, the controller observes the state xtx\_{t} and computes an input utu\_{t} to control the system. The objective of control over a time horizon of length nn is to minimize the average quadratic cost, defined as

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | min{ut}⁡Jn≜1n​𝔼​\[∑t\=1n(xt⊤​F​xt+ut⊤​G​ut)+xn+1⊤​F​xn+1\],\\displaystyle\\min\_{\\{u\_{t}\\}}\\ J\_{n}\\triangleq\\frac{1}{n}\\mathbb{E}\\left\[\\sum\_{t=1}^{n}\\left(x^{\\top}\_{t}Fx\_{t}+u^{\\top}\_{t}Gu\_{t}\\right)+x^{\\top}\_{n+1}Fx\_{n+1}\\right\], |     | (2) |

where F∈ℝd1×d1F\\in\\mathbb{R}^{d\_{1}\\times d\_{1}} and G∈ℝd2×d2G\\in\\mathbb{R}^{d\_{2}\\times d\_{2}} are PSD matrices. The system is referred to as an LQG control system because it has linear dynamics, a quadratic cost function, and a Gaussian process noise. We next introduce some well-known results on LQG control, which will be useful in the following sections.

Report issue for preceding element

Let Jn∗:=min⁡JnJ^{\*}\_{n}:=\\min J\_{n} denote the minimum cost of the nn\-step LQG control problem. The optimal control policy that achieves Jn∗J^{\*}\_{n} is linear and takes the form ut\=−Kt​xtu\_{t}=-K\_{t}x\_{t}, where the feedback gain KtK\_{t} is given by

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Kt\=(G+B⊤​Γt​B)−1​B⊤​Γt​A.\\displaystyle K\_{t}=(G+B^{\\top}\\Gamma\_{t}B)^{-1}B^{\\top}\\Gamma\_{t}A. |     | (3) |

Here, Γt\\Gamma\_{t} is a PSD matrix determined by the following Riccati difference equation that runs backward in time:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Γt\=F+A⊤​(Γt+1−Γt+1​B​(G+B⊤​Γt+1​B)−1​B⊤​Γt+1)​A, 1≤t≤n,\\displaystyle\\Gamma\_{t}=F+A^{\\top}(\\Gamma\_{t+1}-\\Gamma\_{t+1}B(G+B^{\\top}\\Gamma\_{t+1}B)^{-1}B^{\\top}\\Gamma\_{t+1})A,\\ 1\\leq t\\leq n, |     | (4) |

where Γn+1\=F\\Gamma\_{n+1}=F. Under the optimal control policy, the minimum cost Jn∗J^{\*}\_{n} is given by

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Jn∗\=1n​\[Tr​(Ψx​Γ1)+∑t\=1nTr​(Ψw​Γt+1)\].\\displaystyle J^{\*}\_{n}=\\frac{1}{n}\\left\[\\text{Tr}(\\Psi\_{x}\\Gamma\_{1})+\\sum\_{t=1}^{n}\\text{Tr}(\\Psi\_{w}\\Gamma\_{t+1})\\right\]. |     | (5) |

We refer to ([2](https://arxiv.org/html/2509.16146v1#S3.E2 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) as the nn\-step LQG control problem when nn is finite. For an infinite time horizon, the control objective is to minimize the long-term average quadratic cost, defined as:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | J≜limn→∞Jn\=limn→∞1n​∑t\=1n\[xt⊤​F​xt+ut⊤​G​ut\].\\displaystyle J\\triangleq\\lim\_{n\\to\\infty}J\_{n}=\\lim\_{n\\to\\infty}\\frac{1}{n}\\sum\_{t=1}^{n}\\left\[x^{\\top}\_{t}Fx\_{t}+u^{\\top}\_{t}Gu\_{t}\\right\]. |     | (6) |

Denote by J∗\=min⁡JJ^{\*}=\\min J the minimum cost of the infinite time LQG control. The optimal control policy that achieves J∗J^{\*} is stationary linear and takes the form ut\=−K​xtu\_{t}=-Kx\_{t}, where the feedback gain is

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | K\=(G+B⊤​Γ​B)−1​B⊤​Γ​A.\\displaystyle K=(G+B^{\\top}\\Gamma B)^{-1}B^{\\top}\\Gamma A. |     | (7) |

Matrix Γ\\Gamma is the solution to the discrete-time algebraic Riccati equation (DARE):

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Γ\=F+A⊤​(Γ−Γ​B​(G+B⊤​Γ​B)−1​B⊤​Γ)​A.\\displaystyle\\Gamma=F+A^{\\top}(\\Gamma-\\Gamma B(G+B^{\\top}\\Gamma B)^{-1}B^{\\top}\\Gamma)A. |     | (8) |

Since the system is time-invariant—i.e., A,B,FA,B,F and GG are constant matrices over time, and {wt}\\{w\_{t}\\} is a stationary noise process—there is a well-established relationship between finite-horizon and infinite-horizon LQG control problems. Specifically, as n→∞n\\to\\infty, the finite-horizon optimal cost converges to the infinite-horizon optimal cost, i.e., Jn∗→J∗J^{\*}\_{n}\\to J^{\*}. Moreover, the feedback gain and Riccati solution stabilize, such that Kt\=K,Γt\=ΓK\_{t}=K,\\Gamma\_{t}=\\Gamma for all tt. It follows immediately that the minimum average cost of the infinite-horizon control is given by J∗\=Tr​(Γ​Ψw)J^{\*}=\\text{Tr}(\\Gamma\\Psi\_{w}).

Report issue for preceding element

### III-B Implicit Communication in LQG Control Systems

Report issue for preceding element

This paper studies implicit communication in LQG control systems, where the controller aims not only to minimize the average quadratic cost but also to transmit messages to a receiver through its control inputs. We assume there is no dedicated communication channel between the controller and the receiver; instead, both parties can observe the system state. As such, the LQG control system itself can serve as a communication channel between the controller and receiver, which we refer to as the implicit channel. Communication via this implicit channel is called implicit communication because (i) no explicit channel exists between the transmitter (i.e., the controller) and the receiver, and (ii) information transfer occurs as a “byproduct” of specifically designed control inputs.

Report issue for preceding element

![Refer to caption](x1.png)

Figure 1: Implicit communication in LQG control systems (noiseless observations at controller and receiver).

Report issue for preceding element

We begin with a simple setting in which both the controller and receiver have perfect access to the system state, as shown in Fig. [1](https://arxiv.org/html/2509.16146v1#S3.F1 "Figure 1 ‣ III-B Implicit Communication in LQG Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). Extensions to more general scenarios, where observations are noisy for the receiver or for both parties, will be defined and addressed in later sections. To transmit a message mm, the controller acts as an encoder, selecting an input utu\_{t} at each time tt according to the message mm and the sequence of past and current states xtx^{t}. The receiver then observes the state sequences to decode the message mm. Suppose the message set ℳ\=\[2n​R\]\\mathcal{M}=\[2^{nR}\] and each message mm is drawn uniformly from ℳ\\mathcal{M}. Following standard definitions, a (2n​R,n)(2^{nR},n) code for the implicit channel comprises a pair of encoding and decoding mappings, used to transmit a message over nn time steps. In particular, let 𝒰\=ℝd2\\mathcal{U}=\\mathbb{R}^{d\_{2}} and 𝒳\=ℝd1\\mathcal{X}=\\mathbb{R}^{d\_{1}} denote the input and output alphabets, respectively. Then the encoder’s mapping at time tt is denoted by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | ut:ℳ×𝒳t→𝒰.\\displaystyle u\_{t}:\\mathcal{M}\\times\\mathcal{X}^{t}\\to\\mathcal{U}. |     |

The decoder observes the initial state x1x\_{1} and the following nn states to decode the message, and uses the mapping

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | m^:𝒳n+1→ℳ.\\displaystyle\\hat{m}:\\mathcal{X}^{n+1}\\to\\mathcal{M}. |     |

The average probability of error is then defined as Pe(n)\=P​(m^≠m)P^{(n)}\_{e}=P(\\hat{m}\\neq m). Effectively, we treat the LQG control system as a channel with state: at each time tt, an input utu\_{t} is applied in state xtx\_{t}, resulting an output xt+1x\_{t+1}, which then becomes the channel state at the next time step.

Report issue for preceding element

In general, communicating through the implicit channel requires the controller to deviate from the optimal control policy, resulting in a degradation of control performance. This leads to a fundamental trade-off between control and communication. A natural way to characterize this trade-off is by maximizing communication performance subject to a constraint on control cost. In particular, we say a (2n​R,n)(2^{nR},n) code is admissible if it satisfies the control constraint

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Jn≤Jn∗+V,\\displaystyle J\_{n}\\leq J^{\*}\_{n}+V, |     |

where Jn∗J^{\*}\_{n} is the optimal nn\-step control cost defined in ([5](https://arxiv.org/html/2509.16146v1#S3.E5 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and V≥0V\\geq 0 quantifies the tolerable control loss. A rate RR is said to be achievable if there exists a sequence of admissible (2n​R,n)(2^{nR},n) codes with Pe(n)→0P^{(n)}\_{e}\\to 0 as n→∞n\\to\\infty. The implicit channel capacity C​(V)C(V) is then defined as the supremum of all achievable rates under the control constraint.

Report issue for preceding element

## IV Noiseless Observations at the Controller and the Receiver

Report issue for preceding element

This section presents the capacity of the implicit channel under a control constraint. Given that perfect state observations are available at both the controller and the receiver, the capacity admits a closed-form expression that coincides with a memoryless Gaussian MIMO channel. In the special case of scalar systems, capacity C​(V)C(V) reduces to an explicit function of the minimum control cost J∗J^{\*} and the tolerable control loss VV. We provide the achievability proof in this section, as it offers useful insights into the structure of the channel under the capacity-achieving input policy. The converse proof is lengthy and is therefore deferred to Section [VII](https://arxiv.org/html/2509.16146v1#S7 "VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems").

Report issue for preceding element

### IV-A Capacity

Report issue for preceding element

When both the controller and the receiver have noiseless state observations, the only source of noise in the implicit channel is the process noise wtw\_{t}. As a result, the noise covariance matrix Ψw\\Psi\_{w} plays a central role—not only in control, where the optimal long-term average control cost is given by J∗\=Tr​(Γ​Ψw)J^{\*}=\\text{Tr}(\\Gamma\\Psi\_{w}), but also in communication. Denote by λi\\lambda\_{i} the ii\-th eigenvalue of Ψw\\Psi\_{w}. Since Ψw\\Psi\_{w} is PD, we have λi\>0\\lambda\_{i}>0 for all i∈\[d1\]i\\in\[d\_{1}\]. In addition, Ψw\\Psi\_{w} admits a diagonal decomposition Ψw\=U​Λ​U⊤\\Psi\_{w}=U\\Lambda U^{\\top}, where UU is a unitary matrix and Λ\=𝚍𝚒𝚊𝚐​(λ1,λ2,⋯,λd1)\\Lambda=\\mathtt{diag}(\\lambda\_{1},\\lambda\_{2},\\cdots,\\lambda\_{d\_{1}}) is a diagonal matrix of eigenvalues. We first highlight a key property of a matrix that is related to the capacity.

Report issue for preceding element

###### Lemma 1

Report issue for preceding element

For the LQG control system ([1](https://arxiv.org/html/2509.16146v1#S3.E1 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) with noise covariance matrix Ψw\=U​Λ​U⊤\\Psi\_{w}=U\\Lambda U^{\\top}, define matrices G^≜(B†)⊤​G​B†\\hat{G}\\triangleq(B^{\\dagger})^{\\top}GB^{\\dagger} and Γ^≜U⊤​\[Γ+G^\]​U\\hat{\\Gamma}\\triangleq U^{\\top}\[\\Gamma+\\hat{G}\]U. Then Γ^\\hat{\\Gamma} has non-negative diagonal entries, i.e., Γ^​(i,i)≥0\\hat{\\Gamma}(i,i)\\geq 0 for all ii.

Report issue for preceding element

The proof of this lemma is straightforward. Since Γ\\Gamma is a solution to the DARE defined in ([8](https://arxiv.org/html/2509.16146v1#S3.E8 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), it is guaranteed to be PSD. By definition, GG is also PSD. Hence Γ^\\hat{\\Gamma} must be PSD, which implies that all its diagonal entries are non-negative. Nevertheless, we provide an alternative and more insightful proof in the Appendix. This alternative argument shows if Γ^​(i,i)\=0\\hat{\\Gamma}(i,i)=0 for some ii, then it is possible to make the power of input utu\_{t} unbounded in a certain direction without increasing the control cost. As will be elaborated later, this leads to an unbounded capacity, i.e., C​(V)\=∞C(V)=\\infty. This special case can be ruled out by imposing a slightly stronger condition on GG: if GG is PD, then Γ^\\hat{\\Gamma} is also PD, ensuring that Γ^​(i,i)\>0\\hat{\\Gamma}(i,i)>0 for all ii.

Report issue for preceding element

We now present the capacity of the implicit channel when both the controller and the receiver have noiseless observations.

Report issue for preceding element

###### Theorem 1

Report issue for preceding element

For any V≥0V\\geq 0, the capacity of the implicit channel under the control constraint J≤J∗+VJ\\leq J^{\*}+V is given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | C​(V)\=12​∑i\=1d1log⁡(1+ϕiλi),\\displaystyle C(V)=\\frac{1}{2}\\sum\_{i=1}^{d\_{1}}\\log\\left(1+\\frac{\\phi\_{i}}{\\lambda\_{i}}\\right), |     |

where ϕi\=∞{\\phi}\_{i}=\\infty if Γ^​(i,i)\=0\\hat{\\Gamma}(i,i)=0; otherwise,

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | ϕi\=max⁡(αΓ^​(i,i)−λi,0),\\displaystyle{\\phi}\_{i}=\\max\\left(\\frac{\\alpha}{\\hat{\\Gamma}(i,i)}-{\\lambda\_{i}},0\\right), |     |

with α\\alpha being chosen to satisfy

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | ∑i:Γ^​(i,i)\>0max⁡(α−λi​Γ^​(i,i),0)\=V.\\displaystyle\\sum\_{i:\\hat{\\Gamma}(i,i)>0}\\max\\left({\\alpha}-{\\lambda\_{i}}{\\hat{\\Gamma}(i,i)},0\\right)=V. |     |

The optimal input that achieves the capacity is ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, where KK is the optimal feedback gain defined in ([7](https://arxiv.org/html/2509.16146v1#S3.E7 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and st∼𝒩​(0,Φ)s\_{t}\\sim\\mathcal{N}(0,\\Phi) is independent of wtw\_{t} and xtx\_{t}, with Φ\=U​Φ^​U⊤\\Phi=U\\hat{\\Phi}U^{\\top} and Φ^\=𝚍𝚒𝚊𝚐​(ϕ1,ϕ2,⋯,ϕd1)\\hat{\\Phi}=\\mathtt{diag}(\\phi\_{1},\\phi\_{2},\\cdots,\\phi\_{d\_{1}}).

Report issue for preceding element

Theorem [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") provides key insights into implicit communication in LQG control systems. First, the expression of the capacity matches that of Gaussian MIMO channels. As will be demonstrated clearly in the achievability proof, under the capacity-achieving input policy, the implicit channel effectively reduces to a memoryless Gaussian MIMO channel of the form yt\=st+wty\_{t}=s\_{t}+w\_{t}.

Report issue for preceding element

Second, Theorem [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") reveals a separation principle: the control input and the communication input can be designed independently, without loss of optimality. Specifically, the capacity-achieving input consists of two components: the term −K​xt\-Kx\_{t}, which is exactly the optimal control input for minimizing the quadratic control cost, and the term B†​stB^{\\dagger}s\_{t}, a Gaussian random variable independent of −K​xt\-Kx\_{t}. While the first term is fully determined by the control objective, communication is achieved by encoding information into the second term. Hence we refer to sts\_{t} as the communication signal. As a consequence of this separation structure, given a tolerable control loss VV, the task of maximizing communication performance under the control constraint can be decomposed into two subproblems: (i) computing the optimal LQG control policy; and then (ii) designing the channel code for a Gaussian MIMO channel. This decomposition greatly simplifies the implicit communication problem, as both subproblems are well studied and solvable using existing methods.

Report issue for preceding element

From a control perspective, the communication signal B†​stB^{\\dagger}s\_{t} can be viewed as an additional noise injected into the process by the controller, thereby incurring an extra control cost. The exact value of this additional cost is given in the following lemma:

Report issue for preceding element

###### Lemma 2

Report issue for preceding element

For the LQG control system ([1](https://arxiv.org/html/2509.16146v1#S3.E1 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), under the input policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φ)s\_{t}\\sim\\mathcal{N}(0,\\Phi) is independent of xtx\_{t} and wtw\_{t}, the long-term average control cost is given by J\=J∗+Tr​((Γ+G^)​Φ)J=J^{\*}+\\text{Tr}((\\Gamma+\\hat{G})\\Phi).

Report issue for preceding element

###### Proof:

Report issue for preceding element

See Appendix A. ∎

Report issue for preceding element

By the definition in ([6](https://arxiv.org/html/2509.16146v1#S3.E6 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), the control cost comprises two components: a penalty for the state’s deviation from 0 and an input cost. The communication signal not only raise the input cost by Tr​(G​B†​Φ​(B†)⊤)\=Tr​(G^​Φ)\\text{Tr}(GB^{\\dagger}\\Phi(B^{\\dagger})^{\\top})=\\text{Tr}(\\hat{G}\\Phi), but also increase the state covariance in the steady-state, resulting in an additional cost of Tr​(Γ​Φ)\\text{Tr}(\\Gamma\\Phi).

Report issue for preceding element

Theorem [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") can be specialized to scalar systems, resulting in a capacity expression that is an explicit function of the optimal control cost J∗J^{\*} and tolerable control loss VV.

Report issue for preceding element

###### Theorem 2

Report issue for preceding element

For a scalar LQG system (i.e., d1\=d2\=1d\_{1}=d\_{2}=1), the capacity of the implicit channel under the control constraint J≤J∗+VJ\\leq J^{\*}+V is given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | C​(V)\=12​log⁡(1+VJ∗+B−2​G​Ψw).\\displaystyle C(V)=\\frac{1}{2}\\log\\left(1+\\frac{V}{J^{\*}+B^{-2}G\\Psi\_{w}}\\right). |     |

The optimal input is ut\=−K​xt+B−1​stu\_{t}=-Kx\_{t}+B^{-1}s\_{t}, where KK is the optimal feedback gain defined in ([7](https://arxiv.org/html/2509.16146v1#S3.E7 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and st∼𝒩​(0,V/(Γ+B−2​G))s\_{t}\\sim\\mathcal{N}(0,V/(\\Gamma+B^{-2}G)) is independent of wtw\_{t} and xtx\_{t}.

Report issue for preceding element

###### Proof:

Report issue for preceding element

See Appendix A. ∎

Report issue for preceding element

The expression in Theorem [2](https://arxiv.org/html/2509.16146v1#Thmtheorem2 "Theorem 2 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") can be interpreted as follows. As discussed above, the term B−2​G​ΨwB^{-2}G\\Psi\_{w} is equal to the input cost of a signal B−1​wtB^{-1}w\_{t}—as if the process noise were injected by the control input itself. Therefore, the quantity J∗+B−2​G​ΨwJ^{\*}+B^{-2}G\\Psi\_{w} can be viewed as the overall control cost when the noise wtw\_{t} originates from the controller rather than the environment. The capacity is then determined by the ratio of control costs in two scenarios: (i) the controller injects both wtw\_{t} and sts\_{t} into the process, and (ii) the controller injects only wtw\_{t}.

Report issue for preceding element

### IV-B Achievability Proof

Report issue for preceding element

We now present the achievability proof for Theorem [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), showing that any rate R≤C​(V)R\\leq C(V) can be achieved by the input policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φ)s\_{t}\\sim\\mathcal{N}(0,\\Phi) is independent of xtx\_{t} and wtw\_{t}. Under this policy, the state evolves as follows:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | xt+1\=(A−B​K)​xt+st+wt.\\displaystyle x\_{t+1}=(A-BK)x\_{t}+s\_{t}+w\_{t}. |     | (9) |

Define yt≜xt+1−(A−B​K)​xty\_{t}\\triangleq x\_{t+1}-(A-BK)x\_{t}, then the above process becomes

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | yt\=st+wt.\\displaystyle y\_{t}=s\_{t}+w\_{t}. |     | (10) |

This forms a classic Gaussian MIMO channel with input sts\_{t}, output yty\_{t}, and additive white Gaussian noise wtw\_{t}. The capacity of such a channel under an average input power constraint is well established. Hence the key step in our achievability proof is to show that, under the proposed policy, the control constraint can be equivalently translated into a constraint on the power of signal sts\_{t}. This result is established in Lemma [2](https://arxiv.org/html/2509.16146v1#Thmlemma2 "Lemma 2 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). In particular, under the input policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, the constraint J≤J∗+VJ\\leq J^{\*}+V is equivalent to a weighted power constraint on sts\_{t}: Tr​((Γ+G^)​Φ)\=𝔼​\[s⊤​(Γ+G^)​s\]≤V\\text{Tr}((\\Gamma+\\hat{G})\\Phi)=\\mathbb{E}\[s^{\\top}(\\Gamma+\\hat{G})s\]\\leq V.

Report issue for preceding element

The remainder of the proof largely follows the standard procedure for Gaussian MIMO channels \[[34](https://arxiv.org/html/2509.16146v1#bib.bib34)\], with additional considerations related to the input power constraint, as matrix Γ+G^\\Gamma+\\hat{G} is not guaranteed to be positive definite. Specifically, we use the well-known result that the capacity of the equivalent Gaussian MIMO channel defined in ([10](https://arxiv.org/html/2509.16146v1#S4.E10 "In IV-B Achievability Proof ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) is given by the maximum mutual information I​(s;y)I(s;y), subject to the input constraint. Note that

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | I​(s;y)\=h​(y)−h​(w)\=12​log⁡det(Ψw+Φ)det(Ψw)\=12​log​det(I+Ψw−1​Φ),\\displaystyle I(s;y)=h(y)-h(w)=\\frac{1}{2}\\log\\frac{\\det(\\Psi\_{w}+\\Phi)}{\\det(\\Psi\_{w})}=\\frac{1}{2}\\log\\det(I+\\Psi\_{w}^{-1}\\Phi), |     |

where we omitted the time index tt for notation simplicity. Since Ψw\=U​Λ​U⊤\\Psi\_{w}=U\\Lambda U^{\\top} is positive definite, so is Ψw−1\\Psi\_{w}^{-1}. We thus can diagonalize Ψw−1\\Psi\_{w}^{-1} as Ψw−1\=U​Λ−1​U⊤\\Psi\_{w}^{-1}=U\\Lambda^{-1}U^{\\top}, where Λ−1\=𝚍𝚒𝚊𝚐​(λ1−1,λ2−1,⋯,λd1−1)\\Lambda^{-1}=\\mathtt{diag}(\\lambda\_{1}^{-1},\\lambda^{-1}\_{2},\\cdots,\\lambda\_{d\_{1}}^{-1}). We then have

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | log​det(I+Ψw−1​Φ)\=log​det(I+U​Λ−1​U⊤​Φ)\=log​det(I+Λ−12​U⊤​Φ​U​Λ−12).\\displaystyle\\log\\det(I+\\Psi\_{w}^{-1}\\Phi)=\\log\\det(I+U\\Lambda^{-1}U^{\\top}\\Phi)=\\log\\det(I+\\Lambda^{-\\frac{1}{2}}U^{\\top}\\Phi U\\Lambda^{-\\frac{1}{2}}). |     |

Let Φ^\=U⊤​Φ​U\\hat{\\Phi}=U^{\\top}\\Phi U and Γ^\=U⊤​(Γ+G^)​U\\hat{\\Gamma}=U^{\\top}(\\Gamma+\\hat{G})U, then Tr​((Γ+G^)​Φ)\=Tr​((Γ+G^)​U​Φ^​U⊤)\=Tr​(Γ^​Φ^)≤V\\text{Tr}((\\Gamma+\\hat{G})\\Phi)=\\text{Tr}((\\Gamma+\\hat{G})U\\hat{\\Phi}U^{\\top})=\\text{Tr}(\\hat{\\Gamma}\\hat{\\Phi})\\leq V. Therefore, the capacity of channel ([10](https://arxiv.org/html/2509.16146v1#S4.E10 "In IV-B Achievability Proof ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) is given by

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | C​(V)\=maxΦ^≥0\\displaystyle C(V)=\\max\_{\\hat{\\Phi}\\geq 0} | 12​log​det(I+Λ−12​Φ^​Λ−12)\\displaystyle\\ \\frac{1}{2}\\log\\det(I+\\Lambda^{-\\frac{1}{2}}\\hat{\\Phi}\\Lambda^{-\\frac{1}{2}}) |     |
|     | s.t. | Tr​(Γ^​Φ^)≤V.\\displaystyle\\ \\text{Tr}(\\hat{\\Gamma}\\hat{\\Phi})\\leq V. |     |

It is known that the optimal Φ^\\hat{\\Phi} is a diagonal matrix, because

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | det(I+Λ−12​Φ^​Λ−12)≤∏i\=1d1(1+λi−1​Φ^​(i,i)),\\displaystyle\\det(I+\\Lambda^{-\\frac{1}{2}}\\hat{\\Phi}\\Lambda^{-\\frac{1}{2}})\\leq\\prod\_{i=1}^{d\_{1}}\\left(1+\\lambda\_{i}^{-1}\\hat{\\Phi}(i,i)\\right), |     |

with equality when Φ^\\hat{\\Phi} is diagonal. According to Lemma [1](https://arxiv.org/html/2509.16146v1#Thmlemma1 "Lemma 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), the diagonal entries of Γ^\\hat{\\Gamma} are non-negative. If Γ^\\hat{\\Gamma} has positive diagonal entries, i.e., Γ^​(i,i)\>0\\hat{\\Gamma}(i,i)>0 for all ii, then the above problem can be solved by the well-known water-filling algorithm. In particular, the optimal Φ^\\hat{\\Phi} is a diagonal matrix with the ii\-th diagonal entry given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Φ^​(i,i)\=max⁡(αΓ^​(i,i)−λi,0)\\displaystyle\\hat{\\Phi}(i,i)=\\max\\left(\\frac{\\alpha}{\\hat{\\Gamma}(i,i)}-{\\lambda\_{i}},0\\right) |     |

for all tt, where Γ^​(i,i){\\hat{\\Gamma}(i,i)} is the ii\-th diagonal entry of Γ^\\hat{\\Gamma}, and α\\alpha is chosen to satisfy

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | ∑i\=1d1max⁡(α−λi​Γ^​(i,i),0)\=V.\\displaystyle\\sum\_{i=1}^{d\_{1}}\\max\\left({\\alpha}-{\\lambda\_{i}}{\\hat{\\Gamma}(i,i)},0\\right)=V. |     |

Hence the capacity is given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | C​(V)\=12​∑i\=1d1log⁡(1+Φ^​(i,i)λi).\\displaystyle{C}(V)=\\frac{1}{2}\\sum\_{i=1}^{d\_{1}}\\log\\left(1+\\frac{\\hat{\\Phi}(i,i)}{\\lambda\_{i}}\\right). |     |

On the other hand, if Γ^\\hat{\\Gamma} has zero-valued diagonal entries, the channel capacity is infinity. Without loss of generality, assume that the first kk diagonal entries are zero, and the remaining diagonal entries are positive. Then for diagonal Φ^\\hat{\\Phi}, the constraint can be written as

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Tr​(Γ^​Φ^)\=∑i\=1d1Γ^​(i,i)​Φ^​(i,i)\=∑i\=k+1d1Γ^​(i,i)​Φ^​(i,i)≤V.\\displaystyle\\text{Tr}(\\hat{\\Gamma}\\hat{\\Phi})=\\sum\_{i=1}^{d\_{1}}\\hat{\\Gamma}(i,i)\\hat{\\Phi}(i,i)=\\sum\_{i=k+1}^{d\_{1}}\\hat{\\Gamma}(i,i)\\hat{\\Phi}(i,i)\\leq V. |     |

In other words, if Γ^​(i,i)\=0\\hat{\\Gamma}(i,i)=0, then there is no constraint on Φ^​(i,i)\\hat{\\Phi}(i,i). We thus can make C​(V)C(V) unbounded by choosing Φ^​(i,i)\=∞\\hat{\\Phi}(i,i)=\\infty. Once this occurs, the values of Φ^​(i,i)\\hat{\\Phi}(i,i) for i\>ki>k become non-essential, as the capacity is already infinite. Nevertheless, for completeness and consistency, these remaining values can still be selected according to the water-filling principle. The only difference is that α\\alpha is now chosen to satisfy

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | ∑i\=k+1d1max⁡(α−λi​Γ^​(i,i),0)\=V.\\displaystyle\\sum\_{i=k+1}^{d\_{1}}\\max\\left({\\alpha}-{\\lambda\_{i}}{\\hat{\\Gamma}(i,i)},0\\right)=V. |     |

This completes the achievability proof.

Report issue for preceding element

By restricting attention to linear input policies, the achievability proof is significantly simplified via the channel translation. In contrast, the converse proof is more involved, as general input policies may render the system neither linear nor Gaussian. Fortunately, it can be shown that the mutual information I​(m;xn+1)I(m;x^{n+1}) is maximized by linear policies. On this basis, we prove the converse to the capacity theorem by Fano’s inequality. Please refer to Section [VII-A](https://arxiv.org/html/2509.16146v1#S7.SS1 "VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") for the converse proof.

Report issue for preceding element

## V Noisy Observations at Receiver

Report issue for preceding element

In this section, we extend the implicit communication problem introduced in Section [III](https://arxiv.org/html/2509.16146v1#S3 "III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") to a more general setting in which the receiver only has noisy observation of the system state. In particular, at each time tt, instead of directly observing the state xtx\_{t}, the receiver has access to an observation given by

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | zt\=D​xt+vt,\\displaystyle z\_{t}=Dx\_{t}+v\_{t}, |     | (11) |

where vt∈ℝd1v\_{t}\\in\\mathbb{R}^{d\_{1}} is zero-mean white Gaussian noise with covariance matrix Ψv≻0\\Psi\_{v}\\succ 0, and D∈ℝd1×d1D\\in\\mathbb{R}^{d\_{1}\\times d\_{1}} is the observation matrix. We assume that {vt}\\{v\_{t}\\} is an i.i.d. process, independent of both the process noise {wt}\\{w\_{t}\\} and state sequence {xt}\\{x\_{t}\\}. Additionally, we assume DD is invertible and the pair (A,D)(A,D) is observable.

Report issue for preceding element

![Refer to caption](x2.png)

Figure 2: Implicit communication in LQG control systems with noisy observations at receiver.

Report issue for preceding element

As illustrated in Fig. [2](https://arxiv.org/html/2509.16146v1#S5.F2 "Figure 2 ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), the system can still function as an implicit channel between the controller and receiver. The difference is that the receiver now decodes the message based on the noisy observation sequence zn+1z^{n+1}, rather than the state sequence xn+1x^{n+1}. Therefore, the decoding mapping is now given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | m^:𝒵n+1→ℳ,\\displaystyle\\hat{m}:\\mathcal{Z}^{n+1}\\to\\mathcal{M}, |     |

where 𝒵\=ℝd1\\mathcal{Z}=\\mathbb{R}^{d\_{1}}. The definitions of average probability of error, coding rate, and channel capacity remain the same as in Section [III](https://arxiv.org/html/2509.16146v1#S3 "III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). We denote the capacity of this implicit channel under a control constraint J≤J∗+VJ\\leq J^{\*}+V by Cnor​(V)C\_{\\text{nor}}(V).

Report issue for preceding element

In the remainder of this section, we first present the implicit channel capacity, characterized as the solution to an optimization problem. Then we introduce the Kalman filter and smoother, which play a key role in the capacity analysis. On this basis, we provide the achievability proof, showing that under the capacity-achieving input policy, the implicit channel is equivalent to a Gaussian MIMO channel with memory. The converse proof is deferred to Section [VII-B](https://arxiv.org/html/2509.16146v1#S7.SS2 "VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems").

Report issue for preceding element

### V-A Capacity

Report issue for preceding element

When both the controller and the receiver have noiseless observations, the receiver’s next observation xt+1x\_{t+1} is conditionally independent of all the past observations and inputs given the current state xtx\_{t} and input utu\_{t}. This Markov property enables the implicit channel to be transformed into a memoryless Gaussian channel, where the output at time tt is a function of xt+1x\_{t+1} and xtx\_{t}. In contrast, when the receiver observes the state through noise, its observation sequence forms a hidden Markov process, and the implicit channel becomes one with memory. Consequently, the channel capacity no longer admits a closed-form expression. Instead, we can only characterize it as the solution to an optimization problem.

Report issue for preceding element

###### Theorem 3

Report issue for preceding element

For any V≥0V\\geq 0, with noisy observations at the receiver, the capacity of the implicit channel under the control constraint J≤J∗+VJ\\leq J^{\*}+V is given by the optimization problem

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | Cnor​(V):=maxΦ⪰0\\displaystyle C\_{\\text{nor}}(V):=\\max\_{\\Phi\\succeq 0}\\ | 12​log​det(Ψv+D​Σ​D⊤)−12​log​det(Ψv+D​Ψσ​D⊤)\\displaystyle\\frac{1}{2}\\log{\\det(\\Psi\_{v}+D\\Sigma D^{\\top})}-\\frac{1}{2}\\log{\\det(\\Psi\_{v}+D\\Psi\_{\\sigma}D^{\\top})} |     | (12) |
|     | s.t. | Tr​((Γ+G^)​Φ)≤V\\displaystyle\\text{Tr}((\\Gamma+\\hat{G})\\Phi)\\leq V |     | (13) |
|     |     | Σ\=A¯​(Σ−Σ​D⊤​(D​Σ​D⊤+Ψv)−1​D​Σ)​A¯⊤+Ψw+Φ,\\displaystyle\\Sigma=\\bar{A}\\left(\\Sigma-\\Sigma D^{\\top}(D\\Sigma D^{\\top}+\\Psi\_{v})^{-1}D\\Sigma\\right)\\bar{A}^{\\top}+\\Psi\_{{w}}+\\Phi, |     | (14) |

where A¯\=A−B​K\\bar{A}=A-BK and Ψσ\\Psi\_{\\sigma} is determined by the discrete-time algebraic Riccati equation:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Ψσ\=A¯​(Ψσ−Ψσ​D⊤​(D​Ψσ​D⊤+Ψv)−1​D​Ψσ)​A¯+Ψw.\\displaystyle\\Psi\_{\\sigma}=\\bar{A}(\\Psi\_{\\sigma}-\\Psi\_{\\sigma}D^{\\top}(D\\Psi\_{\\sigma}D^{\\top}+\\Psi\_{v})^{-1}D\\Psi\_{\\sigma})\\bar{A}+\\Psi\_{w}. |     |

The optimal input is ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, where KK is the optimal feedback gain defined in ([7](https://arxiv.org/html/2509.16146v1#S3.E7 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and st∼𝒩​(0,Φ∗)s\_{t}\\sim\\mathcal{N}(0,\\Phi^{\*}) is independent of {wi}\\{w\_{i}\\}, {vi}\\{v\_{i}\\} and {xi}\\{x\_{i}\\}, with Φ∗\\Phi^{\*} being the optimal solution to the above optimization problem.

Report issue for preceding element

Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") shows that the capacity-achieving input policy in this setting remains linear and that the separation principle continues to hold. However, designing the channel code (i.e., the communication signal sts\_{t}) becomes more involved due to the presence of memory in the channel. In the achievability proof, we will show that under the optimal input policy, the implicit channel becomes a Gaussian channel of the form y¯t\=D​st+κt\\bar{y}\_{t}=Ds\_{t}+\\kappa\_{t}, where the noise process {κt}\\{\\kappa\_{t}\\} is a hidden Markov process.

Report issue for preceding element

Under the optimal input policy, the system state evolves linearly, enabling the receiver to estimate the state from its noisy observations using Kalman filter. The output y¯t\\bar{y}\_{t} of the equivalent Gaussian channel is a function of the Kalman filter’s estimate of state, 𝔼​\[xt+1|zt+1\]\\mathbb{E}\[x\_{t+1}|z^{t+1}\]. As will be elaborated in the following sections, Σ\\Sigma is the stabilizing estimation error covariance of 𝔼​\[xt+1|zt\]\\mathbb{E}\[x\_{t+1}|z^{t}\], as defined in ([16](https://arxiv.org/html/2509.16146v1#S5.E16 "In V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), while Ψσ\\Psi\_{\\sigma} is the corresponding estimation error covariance when the communication signal {st}\\{s\_{t}\\} is also available, i.e., for the estimate 𝔼​\[xt+1|zt,st\]\\mathbb{E}\[x\_{t+1}|z^{t},s^{t}\]. The objective function ([12](https://arxiv.org/html/2509.16146v1#S5.E12 "In Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) represents a difference in entropy rates of the process {y¯t}\\{\\bar{y}\_{t}\\} with and without knowledge of the communication signal {st}\\{s\_{t}\\}. In the special case where the receiver has perfect state observations (i.e., D\=ID=I and Ψv\=0\\Psi\_{v}=0), we have Σ\=Φ+Ψw\\Sigma=\\Phi+\\Psi\_{w} and Ψσ\=Ψw\\Psi\_{\\sigma}=\\Psi\_{w}. It is easy to verify that Cnor​(V)C\_{\\text{nor}}(V) in this case reduces to C​(V)C(V) presented in Theorem [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems").

Report issue for preceding element

The optimization problem in Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") appears difficult to solve, making capacity computation seemingly difficult. Fortunately, using the Schur complement, the problem can be reformulated as a convex optimization problem, which can be efficiently solved using standard methods \[[46](https://arxiv.org/html/2509.16146v1#bib.bib46), [47](https://arxiv.org/html/2509.16146v1#bib.bib47)\].

Report issue for preceding element

###### Proposition 1

Report issue for preceding element

For any V≥0V\\geq 0, with noisy observations at the receiver, the capacity of the implicit channel under constraint J≤J∗+VJ\\leq J^{\*}+V is given by the optimization problem

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Cnor​(V):=maxΦ,Σ\\displaystyle C\_{\\text{nor}}(V):=\\max\_{\\Phi,\\Sigma}\\ | 12​log​det(Ψv+D​Σ​D⊤)−12​log​det(Ψv+D​Ψσ​D⊤)\\displaystyle\\frac{1}{2}\\log{\\det(\\Psi\_{v}+D\\Sigma D^{\\top})}-\\frac{1}{2}\\log{\\det(\\Psi\_{v}+D\\Psi\_{\\sigma}D^{\\top})} |     |
|     | s.t. | Tr​((Γ+G^)​Φ)≤V\\displaystyle\\text{Tr}((\\Gamma+\\hat{G})\\Phi)\\leq V |     |
|     |     | \[D​Σ​D⊤+ΨvD​Σ​A¯⊤A¯​Σ​D⊤A¯​Σ​A¯⊤+Ψw+Φ−Σ\]⪰0\\displaystyle\\begin{bmatrix}D\\Sigma D^{\\top}+\\Psi\_{v}&D\\Sigma\\bar{A}^{\\top}\\\\ \\bar{A}\\Sigma D^{\\top}&\\bar{A}\\Sigma\\bar{A}^{\\top}+\\Psi\_{w}+\\Phi-\\Sigma\\end{bmatrix}\\succeq 0 |     |
|     |     | Σ⪰0,Φ⪰0.\\displaystyle\\Sigma\\succeq 0,\\Phi\\succeq 0. |     |

where Ψσ\\Psi\_{\\sigma} is define in Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems").

Report issue for preceding element

###### Proof:

Report issue for preceding element

See Appendix. ∎

Report issue for preceding element

To verify that the problem is a convex optimization \[[48](https://arxiv.org/html/2509.16146v1#bib.bib48)\], note that: (i) the second term of the objective is a constant and does not depend on the decision variables; (ii) the function log​det(⋅)\\log\\det(\\cdot) is concave; (iii) all constraints are linear.

Report issue for preceding element

### V-B Kalman Filter and Smoother

Report issue for preceding element

Before presenting the achievability proof, we first introduce the Kalman filter and smoother, and define the associated matrices. They play a key role in constructing the equivalent Gaussian channel under the optimal input policy.

Report issue for preceding element

Consider the linear system ([1](https://arxiv.org/html/2509.16146v1#S3.E1 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and the observation process ([11](https://arxiv.org/html/2509.16146v1#S5.E11 "In V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). To facilitate the introduction of the Kalman filter and smoother, we assume the input policy takes the form ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φ)s\_{t}\\sim\\mathcal{N}(0,\\Phi) is independent of xt,wtx\_{t},w\_{t}, and vtv\_{t}. Under this policy, the system state evolves as follows:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | xt+1\=A¯​xt+st+wt.\\displaystyle x\_{t+1}=\\bar{A}x\_{t}+s\_{t}+{w}\_{t}. |     |

Suppose that the receiver needs to estimate xtx\_{t} based on the observation sequence zkz^{k}. The optimal unbiased estimator in the minimum mean-square error (MMSE) sense is given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | x^t\|k≜𝔼​\[xt\|zk\],\\displaystyle\\hat{x}\_{t\|k}\\triangleq\\mathbb{E}\[x\_{t}\|z^{k}\], |     |

with the corresponding estimation error covariance defined as Σt|k≜Cov​(xt−x^t|k)\\Sigma\_{t|k}\\triangleq\\text{Cov}(x\_{t}-\\hat{x}\_{t|k}). The problem is referred to as the filtering problem when k\=tk=t and the smoothing problem when k\>tk>t. It is well-known that the Kalman filter \[[49](https://arxiv.org/html/2509.16146v1#bib.bib49)\] is the optimal solution to the filtering problem. Specifically, the Kalman filter consists of a prediction stage and a update stage. In the prediction stage, the filter computes a prediction of the state and its associated error covariance:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | x^t+1\|t\\displaystyle\\hat{x}\_{t+1\|t} | \=A¯​x^t\|t,\\displaystyle=\\bar{A}\\hat{x}\_{t\|t}, |     |
|     | Σt+1\|t\\displaystyle\\Sigma\_{t+1\|t} | \=A¯​Σt\|t​A¯⊤+Φ+Ψw.\\displaystyle=\\bar{A}\\Sigma\_{t\|t}\\bar{A}^{\\top}+\\Phi+\\Psi\_{{w}}. |     |

Upon receiving the new observation zt+1z\_{t+1}, the state estimate is updated as:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | x^t+1\|t+1\=x^t+1\|t+Lt+1​(zt+1−D​x^t+1\|t),\\displaystyle\\hat{x}\_{t+1\|t+1}=\\hat{x}\_{t+1\|t}+L\_{t+1}(z\_{t+1}-D\\hat{x}\_{t+1\|t}), |     | (15) |

where Lt+1L\_{t+1} is the filter gain given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Lt+1\=Σt+1\|t​D⊤​(D​Σt+1\|t​D⊤+Ψv)−1.\\displaystyle L\_{t+1}=\\Sigma\_{t+1\|t}D^{\\top}\\left(D\\Sigma\_{t+1\|t}D^{\\top}+\\Psi\_{v}\\right)^{-1}. |     |

The estimate error covariance of x^t+1|t+1\\hat{x}\_{t+1|t+1} is then given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Σt+1\|t+1\=(I−Lt+1​D)​Σt+1\|t.\\displaystyle\\Sigma\_{t+1\|t+1}=(I-L\_{t+1}D)\\Sigma\_{t+1\|t}. |     |

Since the LQG control system is controllable and observable, and KK is the optimal feedback gain, the matrix A¯\=A−B​K\\bar{A}=A-BK must be stable. Consequently, it is a well-established result that both Σt|t\\Sigma\_{t|t} and LtL\_{t} converge. In particular, Σt+1|t→Σ\\Sigma\_{t+1|t}\\to\\Sigma as t→∞t\\to\\infty, where Σ\\Sigma is the solution to the following discrete Riccati equation (see, e.g., \[[50](https://arxiv.org/html/2509.16146v1#bib.bib50)\]):

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Σ\=A¯​(Σ−Σ​D⊤​(D​Σ​D⊤+Ψv)−1​D​Σ)​A¯⊤+Φ+Ψw,\\displaystyle\\Sigma=\\bar{A}\\left(\\Sigma-\\Sigma D^{\\top}(D\\Sigma D^{\\top}+\\Psi\_{v})^{-1}D\\Sigma\\right)\\bar{A}^{\\top}+\\Phi+\\Psi\_{{w}}, |     | (16) |

and accordingly,

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     |     | L≜limt→∞Lt\=Σ​D⊤​(D​Σ​D⊤+Ψv)−1,\\displaystyle L\\triangleq\\lim\_{t\\to\\infty}L\_{t}=\\Sigma D^{\\top}\\left(D\\Sigma D^{\\top}+\\Psi\_{v}\\right)^{-1}, |     | (17) |
|     |     | Σ~≜limt→∞Σt\|t\=(I−L​D)​Σ.\\displaystyle\\tilde{\\Sigma}\\triangleq\\lim\_{t\\to\\infty}\\Sigma\_{t\|t}=(I-LD)\\Sigma. |     | (18) |

We are also interested in the smoothing problem with k\=t+1k=t+1. This problem can be solved by the Kalman smoother (also known as the Rauch-Tung-Striebel smoother \[[51](https://arxiv.org/html/2509.16146v1#bib.bib51)\]), which computes

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | x^t\|t+1\=x^t\|t+Qt​(x^t+1\|t+1−A¯​x^t\|t),\\displaystyle\\hat{x}\_{t\|t+1}=\\hat{x}\_{t\|t}+Q\_{t}\\left(\\hat{x}\_{t+1\|t+1}-\\bar{A}\\hat{x}\_{t\|t}\\right), |     | (19) |

where the smoother gain Qt\=Σt|t​A¯⊤​Σt+1|t−1Q\_{t}=\\Sigma\_{t|t}\\bar{A}^{\\top}\\Sigma\_{t+1|t}^{-1}. The smoothed error covariance matrix is given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Σt\|t+1\=Σt\|t+Qt​(Σt+1\|t+1−Σt+1\|t)​Qt⊤.\\displaystyle\\Sigma\_{t\|t+1}=\\Sigma\_{t\|t}+Q\_{t}\\left(\\Sigma\_{t+1\|t+1}-\\Sigma\_{t+1\|t}\\right)Q\_{t}^{\\top}. |     |

Since Σt+1|t\\Sigma\_{t+1|t} and Σt|t\\Sigma\_{t|t} converge, it is clear that QtQ\_{t} and Σt|t+1\\Sigma\_{t|t+1} also converge as t→∞t\\to\\infty:

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     |     | Q≜limt→∞Qt\=(I−L​D)​Σ​A¯⊤​Σ−1,\\displaystyle Q\\triangleq\\lim\_{t\\to\\infty}Q\_{t}=(I-LD)\\Sigma\\bar{A}^{\\top}\\Sigma^{-1}, |     | (20) |
|     |     | Σ^≜limt→∞Σt\|t+1\=(I−L​D)​Σ−Q​L​D​Σ​Q⊤.\\displaystyle\\hat{\\Sigma}\\triangleq\\lim\_{t\\to\\infty}\\Sigma\_{t\|t+1}=(I-LD)\\Sigma-QLD\\Sigma Q^{\\top}. |     | (21) |

Now we are ready to present the achievability proof.

Report issue for preceding element

### V-C Achievability Proof

Report issue for preceding element

This section presents the achievability proof for Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). As in Section [IV](https://arxiv.org/html/2509.16146v1#S4 "IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), we show that the capacity Cnor​(V)C\_{\\text{nor}}(V) can be achieved by input ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φ)s\_{t}\\sim\\mathcal{N}(0,\\Phi) is independent of xtx\_{t} and wtw\_{t}. Recall that A¯\=A−B​K\\bar{A}=A-BK, and under this policy:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | xt+1\=A¯​xt+st+wt.\\displaystyle x\_{t+1}=\\bar{A}x\_{t}+s\_{t}+w\_{t}. |     |

Let yt≜xt+1−A¯​xty\_{t}\\triangleq x\_{t+1}-\\bar{A}x\_{t}. At the end of time step tt (i.e., the beginning of time step t+1t+1 in continuous time), the receiver observes zt+1z^{t+1} and uses it to estimate yty\_{t}. From an estimation perspective, sts\_{t} can be viewed as an extra noise. Then the optimal estimator is given as follows:

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | y^t\\displaystyle\\hat{y}\_{t} | ≜𝔼​\[xt+1−A¯​xt\|zt+1\]\\displaystyle\\triangleq\\mathbb{E}\[x\_{t+1}-\\bar{A}x\_{t}\|z^{t+1}\] |     |
|     |     | \=x^t+1\|t+1−A¯​x^t\|t+1\\displaystyle=\\hat{x}\_{t+1\|t+1}-\\bar{A}\\hat{x}\_{t\|t+1} |     |
|     |     | \=(I−A¯​Q)​L​(zt+1−D​A¯​x^t\|t).\\displaystyle=(I-\\bar{A}Q)L(z\_{t+1}-D\\bar{A}\\hat{x}\_{t\|t}). |     | (22) |

As defined in ([15](https://arxiv.org/html/2509.16146v1#S5.E15 "In V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and ([19](https://arxiv.org/html/2509.16146v1#S5.E19 "In V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), x^t+1|t+1\\hat{x}\_{t+1|t+1} and x^t|t+1\\hat{x}\_{t|t+1} are the outcomes of Kalman filter and smoother, respectively. Under this definition, the receiver can construct an equivalent channel by treating y^t\\hat{y}\_{t} as the channel output, with the input-output relationship characterized in the following lemma:

Report issue for preceding element

###### Lemma 3

Report issue for preceding element

Let σt≜xt−x^t|t\\sigma\_{t}\\triangleq x\_{t}-\\hat{x}\_{t|t} denote the estimation error of the Kalman filter. Then {σt:t≥1}\\{\\sigma\_{t}:t\\geq 1\\} forms a Markov chain that evolves according to

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | σt+1\=(I−L​D)​A¯​σt−L​vt+1+(I−L​D)​(st+wt).\\displaystyle\\sigma\_{t+1}=(I-LD)\\bar{A}\\sigma\_{t}-Lv\_{t+1}+(I-LD)(s\_{t}+w\_{t}). |     | (23) |

Moreover, for any t≥1t\\geq 1,

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | y^t\=(I−A¯​Q)​L​\[D​st+vt+1+D​wt+D​A¯​σt\],\\displaystyle\\hat{y}\_{t}=(I-\\bar{A}Q)L\[Ds\_{t}+v\_{t+1}+Dw\_{t}+D\\bar{A}\\sigma\_{t}\], |     |

where LL is the stabilizing Kalman filter gain defined in ([17](https://arxiv.org/html/2509.16146v1#S5.E17 "In V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), and QQ is the stabilizing Kalman smoother gain defined in ([20](https://arxiv.org/html/2509.16146v1#S5.E20 "In V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")).

Report issue for preceding element

Lemma [3](https://arxiv.org/html/2509.16146v1#Thmlemma3 "Lemma 3 ‣ V-C Achievability Proof ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") shows that, under the input policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, we can translate the implicit channel to a Gaussian channel with memory. This channel can be further simplified by observing that (I−A¯​Q)​L(I-\\bar{A}Q)L is invertible. First note that DD and Σ\\Sigma are invertible, hence L\=Σ​D⊤​(D​Σ​D⊤+Ψv)−1L=\\Sigma D^{\\top}\\left(D\\Sigma D^{\\top}+\\Psi\_{v}\\right)^{-1} is also invertible. In addition, I−A¯​QI-\\bar{A}Q is invertible because

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | I−A¯​Q\\displaystyle I-\\bar{A}Q | \=I−A¯​(I−L​D)​Σ​A¯⊤​Σ−1\\displaystyle=I-\\bar{A}(I-LD)\\Sigma\\bar{A}^{\\top}\\Sigma^{-1} |     |
|     |     | \=I−(Σ−Ψw)​Σ−1\=Ψw​Σ−1.\\displaystyle=I-(\\Sigma-\\Psi\_{w})\\Sigma^{-1}=\\Psi\_{w}\\Sigma^{-1}. |     | (24) |

As a result, we obtain a Gaussian MIMO channel that is equivalent to the implicit channel:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | y¯t≜\[(I−A¯​Q)​L\]−1​y^t\=D​st+κt,\\displaystyle\\bar{y}\_{t}\\triangleq\[(I-\\bar{A}Q)L\]^{-1}\\hat{y}\_{t}=Ds\_{t}+\\kappa\_{t}, |     | (25) |

where κt≜(D​wt+vt+1+D​A¯​σt)\\kappa\_{t}\\triangleq(Dw\_{t}+v\_{t+1}+D\\bar{A}\\sigma\_{t}). Since {σt}\\{\\sigma\_{t}\\} is a Markov process, {κt}\\{\\kappa\_{t}\\} forms a hidden Markov process.

Report issue for preceding element

Before proceeding to compute the capacity of the above channel, we show that this translation does not loss any information about sns^{n}: I​(sn;y¯n)\=I​(sn;zn+1)I(s^{n};\\bar{y}^{n})=I(s^{n};z^{n+1}). To see this, applying the chain rule of mutual information yields

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | I​(sn;zn+1,y¯n)\=I​(sn;y¯n)+I​(sn;zn+1\|y¯n)\=I​(sn;zn+1)+I​(sn;y¯n\|zn+1).\\displaystyle I(s^{n};z^{n+1},\\bar{y}^{n})=I(s^{n};\\bar{y}^{n})+I(s^{n};z^{n+1}\|\\bar{y}^{n})=I(s^{n};z^{n+1})+I(s^{n};\\bar{y}^{n}\|z^{n+1}). |     |

By definition, y¯n\\bar{y}^{n} is a function of zn+1z^{n+1}, we thus have I​(sn;y¯n|zn+1)\=0I(s^{n};\\bar{y}^{n}|z^{n+1})=0. Furthermore, since (I−A¯​Q)​L(I-\\bar{A}Q)L is invertible, ([V-C](https://arxiv.org/html/2509.16146v1#S5.Ex32 "V-C Achievability Proof ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) implies that zt+1z\_{t+1} can be determined by y¯t\\bar{y}\_{t} and ztz^{t}—as x^t|t\\hat{x}\_{t|t} is a function of ztz^{t}. Using this fact and the chain rule yields

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | I​(sn;zn+1\|y¯n)\=I​(sn;z1\|y¯n)+∑t\=1nI​(sn;zt+1\|zt,y¯n)\=0.\\displaystyle I(s^{n};z^{n+1}\|\\bar{y}^{n})=I(s^{n};z\_{1}\|\\bar{y}^{n})+\\sum\_{t=1}^{n}I(s^{n};z\_{t+1}\|z^{t},\\bar{y}^{n})=0. |     | (26) |

We thus have

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | I​(sn;zn+1,y¯n)\=I​(sn;y¯n)\=I​(sn;zn+1).\\displaystyle I(s^{n};z^{n+1},\\bar{y}^{n})=I(s^{n};\\bar{y}^{n})=I(s^{n};z^{n+1}). |     |

The capacity of the channel ([25](https://arxiv.org/html/2509.16146v1#S5.E25 "In V-C Achievability Proof ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) admits a well-known expression as follows:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | C\=maxp​(sn)​limn→∞1n​I​(sn;y¯n),\\displaystyle C=\\max\_{p(s^{n})}\\lim\_{n\\to\\infty}\\frac{1}{n}I(s^{n};\\bar{y}^{n}), |     |

subject to the power constraint. Now,

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | 1n​I​(sn;y¯n)\=1n​I​(sn;y¯n,zn+1)\\displaystyle\\frac{1}{n}I(s^{n};\\bar{y}^{n})=\\frac{1}{n}I(s^{n};\\bar{y}^{n},z^{n+1}) | \=1n​\[h​(y¯n,zn+1)−h​(y¯n,zn+1\|sn)\]\\displaystyle=\\frac{1}{n}\[h(\\bar{y}^{n},z^{n+1})-h(\\bar{y}^{n},z^{n+1}\|s^{n})\] |     |
|     |     | \=1n​∑t\=1n\[h​(y¯t,zt+1\|y¯t−1,zt)−h​(y¯t,zt+1\|y¯t−1,zt,sn)\]\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n}\\left\[h(\\bar{y}\_{t},z\_{t+1}\|\\bar{y}^{t-1},z^{t})-h(\\bar{y}\_{t},z\_{t+1}\|\\bar{y}^{t-1},z^{t},s^{n})\\right\] |     |
|     |     | \=1n​∑t\=1n\[h​(y¯t\|zt)−h​(y¯t\|zt,sn)\]\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n}\\left\[h(\\bar{y}\_{t}\|z^{t})-h(\\bar{y}\_{t}\|z^{t},s^{n})\\right\] |     |
|     |     | \=1n​∑t\=1n\[h​(y¯t\|zt)−h​(κt\|zt,sn)\].\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n}\\left\[h(\\bar{y}\_{t}\|z^{t})-h({\\kappa}\_{t}\|z^{t},s^{n})\\right\]. |     |

Since the system is linear Gaussian, all the random variables are joint Gaussian, we thus have

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | h​(y¯t\|zt)−h​(κt\|zt,sn)\=12​log​det(Cov​(y¯t−y~t))−12​log​det(Cov​(κt−κ~t)),\\displaystyle h(\\bar{y}\_{t}\|z^{t})-h({\\kappa}\_{t}\|z^{t},s^{n})=\\frac{1}{2}\\log\\det({\\text{Cov}}(\\bar{y}\_{t}-{\\tilde{y}}\_{t}))-\\frac{1}{2}\\log\\det({\\text{Cov}}({\\kappa}\_{t}-{\\tilde{\\kappa}}\_{t})), |     |

where y~t≜𝔼​\[y¯t|zt\]\\tilde{y}\_{t}\\triangleq\\mathbb{E}\[\\bar{y}\_{t}|z^{t}\] and κ~t≜𝔼​\[κt|zt,sn\]\=𝔼​\[κt|zt,st−1\]\\tilde{\\kappa}\_{t}\\triangleq\\mathbb{E}\[{\\kappa}\_{t}|z^{t},s^{n}\]=\\mathbb{E}\[{\\kappa}\_{t}|z^{t},s^{t-1}\]. First, since x^t|t\=𝔼​\[xt|zt\]\\hat{x}\_{t|t}=\\mathbb{E}\[x\_{t}|z^{t}\] is a function of ztz^{t}, we have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | y¯t≜𝔼​\[y¯t\|zt\]\\displaystyle\\bar{y}\_{t}\\triangleq\\mathbb{E}\[\\bar{y}\_{t}\|z^{t}\] | \=𝔼​\[D​st+vt+1+D​wt+D​A¯​σt\|zt\]\\displaystyle=\\mathbb{E}\[Ds\_{t}+v\_{t+1}+Dw\_{t}+D\\bar{A}\\sigma\_{t}\|z^{t}\] |     |
|     |     | \=D​A¯​𝔼​\[xt−x^t\|t\|zt\]\=0.\\displaystyle=D\\bar{A}\\mathbb{E}\[x\_{t}-\\hat{x}\_{t\|t}\|z^{t}\]=0. |     |

Since y¯t−1\\bar{y}^{t-1} and σt\\sigma\_{t} are independent of D​st+D​wt+vt+1Ds\_{t}+Dw\_{t}+v\_{t+1} (they are correlated only with st−1,wt−1s^{t-1},w^{t-1} and vtv^{t}),

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Cov​(y¯t−y~t)\\displaystyle{\\text{Cov}}(\\bar{y}\_{t}-{\\tilde{y}}\_{t}) | \=Cov​(D​st+vt+1+D​wt+D​A¯​σt)\\displaystyle={\\text{Cov}}(Ds\_{t}+v\_{t+1}+Dw\_{t}+D\\bar{A}\\sigma\_{t}) |     |
|     |     | \=D​(Φ+Ψw+A¯​Σ~​A¯⊤)​D⊤+Ψv\\displaystyle=D(\\Phi+\\Psi\_{w}+\\bar{A}\\tilde{\\Sigma}\\bar{A}^{\\top})D^{\\top}+\\Psi\_{v} |     |
|     |     | \=D​Σ​D⊤+Ψv.\\displaystyle=D\\Sigma D^{\\top}+\\Psi\_{v}. |     |

The last line follows from the identity in Kalman filter: Σ\=A¯​Σ~​A¯⊤+Ψw+Φ\\Sigma=\\bar{A}\\tilde{\\Sigma}\\bar{A}^{\\top}+\\Psi\_{{w}}+\\Phi.

Report issue for preceding element

Similarly,

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | κ~t≜𝔼​\[κt\|sn,zt\]\\displaystyle\\tilde{\\kappa}\_{t}\\triangleq\\mathbb{E}\[{\\kappa}\_{t}\|s^{n},z^{t}\] | \=𝔼​\[vt+1+D​wt+D​A¯​σt\|st−1,zt\]\\displaystyle=\\mathbb{E}\[v\_{t+1}+Dw\_{t}+D\\bar{A}\\sigma\_{t}\|s^{t-1},z^{t}\] |     |
|     |     | \=D​A¯​𝔼​\[σt\|st−1,zt\]\\displaystyle=D\\bar{A}\\mathbb{E}\[\\sigma\_{t}\|s^{t-1},z^{t}\] |     |
|     |     | \=D​A¯​(𝔼​\[xt\|st−1,zt\]−x^t\|t).\\displaystyle=D\\bar{A}(\\mathbb{E}\[x\_{t}\|s^{t-1},z^{t}\]-\\hat{x}\_{t\|t}). |     |

Let x¯t|t\=𝔼​\[xt|st−1,zt\]\\bar{x}\_{t|t}=\\mathbb{E}\[x\_{t}|s^{t-1},z^{t}\] and σ¯t\=xt−x¯t|t\\bar{\\sigma}\_{t}=x\_{t}-\\bar{x}\_{t|t}, we then have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Cov​(κt−κ~t)\\displaystyle{\\text{Cov}}({\\kappa}\_{t}-{\\tilde{\\kappa}}\_{t}) | \=Cov​(vt+1+D​wt+D​A¯​(xt−x^t\|t−x¯t\|t+x^t\|t))\\displaystyle={\\text{Cov}}(v\_{t+1}+Dw\_{t}+D\\bar{A}(x\_{t}-\\hat{x}\_{t\|t}-\\bar{x}\_{t\|t}+\\hat{x}\_{t\|t})) |     |
|     |     | \=D​(Ψw+A¯​Cov​(σ¯t)​A¯⊤)​D⊤+Ψv.\\displaystyle=D(\\Psi\_{w}+\\bar{A}{\\text{Cov}}(\\bar{\\sigma}\_{t})\\bar{A}^{\\top})D^{\\top}+\\Psi\_{v}. |     |

Note that x¯t|t\\bar{x}\_{t|t} can be computed using the standard Kalman filter, with knowledge of the past input sequence st−1s^{t-1}. Consequently, we can easily verify that Cov​(σ¯t){\\text{Cov}}(\\bar{\\sigma}\_{t}) converges to Ψ~σ\\tilde{\\Psi}\_{\\sigma} as t→∞t\\to\\infty, where

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Ψ~σ\=Ψσ−Ψσ​D⊤​(D​Ψσ​D⊤+Ψv)−1​D​Ψσ,\\displaystyle\\tilde{\\Psi}\_{\\sigma}=\\Psi\_{\\sigma}-\\Psi\_{\\sigma}D^{\\top}(D\\Psi\_{\\sigma}D^{\\top}+\\Psi\_{v})^{-1}D\\Psi\_{\\sigma}, |     | (27) |

and Ψσ\\Psi\_{\\sigma} is determined by the following discrete Riccati equation:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Ψσ\=A¯​(Ψσ−Ψσ​D⊤​(D​Ψσ​D⊤+Ψv)−1​D​Ψσ)​A¯+Ψw.\\displaystyle\\Psi\_{\\sigma}=\\bar{A}(\\Psi\_{\\sigma}-\\Psi\_{\\sigma}D^{\\top}(D\\Psi\_{\\sigma}D^{\\top}+\\Psi\_{v})^{-1}D\\Psi\_{\\sigma})\\bar{A}+\\Psi\_{w}. |     | (28) |

In addition, the following identity holds: Ψσ\=A¯​Ψ~σ​A¯⊤+Ψw\\Psi\_{\\sigma}=\\bar{A}\\tilde{\\Psi}\_{\\sigma}\\bar{A}^{\\top}+\\Psi\_{w}. We thus have

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Cov​(κt−κ~t)→D​Ψσ​D⊤+Ψv​ as ​t→∞.\\displaystyle{\\text{Cov}}({\\kappa}\_{t}-{\\tilde{\\kappa}}\_{t})\\to D\\Psi\_{\\sigma}D^{\\top}+\\Psi\_{v}\\text{ as }t\\to\\infty. |     |

Combining the above discussions yields

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | limn→∞1n​I​(sn;y¯n)\=12​log⁡det(Ψv+D​Σ​D⊤)det(Ψv+D​Ψσ​D⊤).\\displaystyle\\lim\\limits\_{n\\to\\infty}\\frac{1}{n}I(s^{n};\\bar{y}^{n})=\\frac{1}{2}\\log\\frac{\\det(\\Psi\_{v}+D\\Sigma D^{\\top})}{\\det(\\Psi\_{v}+D\\Psi\_{\\sigma}D^{\\top})}. |     |

Under the input policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, the control constraint J≤J∗+VJ\\leq J^{\*}+V is the same as that in Theorem [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). That is, the constraint is equivalent to a power constraint on the input: Tr​((Γ+G^)​Φ)≤V\\text{Tr}((\\Gamma+\\hat{G})\\Phi)\\leq V, where G^\=(B†)⊤​G​B†\\hat{G}=(B^{\\dagger})^{\\top}GB^{\\dagger}. Therefore, the channel capacity under the above constraint is given by the following optimization problem:

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | Cnor​(V):=maxΦ⪰0\\displaystyle C\_{\\text{nor}}(V):=\\max\_{\\Phi\\succeq 0}\\ | 12​log⁡det(Ψv+D​Σ​D⊤)det(Ψv+D​Ψσ​D⊤)\\displaystyle\\frac{1}{2}\\log\\frac{\\det(\\Psi\_{v}+D\\Sigma D^{\\top})}{\\det(\\Psi\_{v}+D\\Psi\_{\\sigma}D^{\\top})} |     | (29) |
|     | s.t. | Tr​((Γ+G^)​Φ)≤V\\displaystyle\\text{Tr}((\\Gamma+\\hat{G})\\Phi)\\leq V |     | (30) |
|     |     | Σ\=A¯​(Σ−Σ​D⊤​(D​Σ​D⊤+Ψv)−1​D​Σ)​A¯⊤+Ψw+Φ,\\displaystyle\\Sigma=\\bar{A}\\left(\\Sigma-\\Sigma D^{\\top}(D\\Sigma D^{\\top}+\\Psi\_{v})^{-1}D\\Sigma\\right)\\bar{A}^{\\top}+\\Psi\_{{w}}+\\Phi, |     | (31) |

where Ψσ\\Psi\_{\\sigma} is independent of Φ\\Phi, as defined in ([28](https://arxiv.org/html/2509.16146v1#S5.E28 "In V-C Achievability Proof ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). This completes the achievability proof.

Report issue for preceding element

###### Remark 1

Report issue for preceding element

In this Section, we assume that the receiver’s observation matrix DD is square and invertible. Under this assumption, the transformation from the sequence zn+1z^{n+1} to y¯n\\bar{y}^{n} preserves all information about the random sequence sns^{n} in the input (see the discussion around ([26](https://arxiv.org/html/2509.16146v1#S5.E26 "In V-C Achievability Proof ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))). Consequently, under the input policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, the Gaussian channel y¯t\=D​st+κt\\bar{y}\_{t}=Ds\_{t}+\\kappa\_{t} is equivalent to the original implicit channel. In fact, this property also holds if DD is a full-rank fat matrix, but fails when DD is tall or rank-deficient. However, allowing DD to be a full-rank fat matrix would invalidate the converse proof. Wet thus restrict our attention to the case where DD is invertible.

Report issue for preceding element

## VI Noisy Observations at Controller and Receiver

Report issue for preceding element

In this section, we study implicit communication in LQG systems under the most general setting, where both the controller and the receiver have access only to noisy observations of the system state. The system model is illustrated in Fig. [3](https://arxiv.org/html/2509.16146v1#S6.F3 "Figure 3 ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). Specifically, for the linear system defined in ([1](https://arxiv.org/html/2509.16146v1#S3.E1 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), we assume the receiver’s observation ztz\_{t} is given by ([11](https://arxiv.org/html/2509.16146v1#S5.E11 "In V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), while the controller observes ot∈ℝd3o\_{t}\\in\\mathbb{R}^{d\_{3}} given by

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | ot\=Dc​xt+qt,\\displaystyle o\_{t}=D\_{c}x\_{t}+q\_{t}, |     | (32) |

where Dc∈ℝd3×d1D\_{c}\\in\\mathbb{R}^{d\_{3}\\times d\_{1}} is the observation matrix, qt∼𝒩​(0,Ψq)q\_{t}\\sim\\mathcal{N}(0,\\Psi\_{q}) is an observation noise independent of {xi}\\{x\_{i}\\}, {vi}\\{v\_{i}\\} and {wi}\\{w\_{i}\\}. We assume Ψq≻0\\Psi\_{q}\\succ 0, and that the pair (A,Dc)(A,D\_{c}) is observable.

Report issue for preceding element

![Refer to caption](x3.png)

Figure 3: Implicit communication in LQG control systems with noisy observations at controller and receiver.

Report issue for preceding element

In this setting, the controller computes input utu\_{t} based on its observation history oto^{t}, with an aim of balancing the control and communication performance. Therefore, the encoding mapping at time tt is denoted by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | ut:ℳ×𝒪t→𝒰,\\displaystyle u\_{t}:\\mathcal{M}\\times\\mathcal{O}^{t}\\to\\mathcal{U}, |     |

where 𝒪\=ℝd3\\mathcal{O}=\\mathbb{R}^{d\_{3}} denotes the observation alphabet. Accordingly, the receiver decodes the message using the mapping:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | m^:𝒵n+1→ℳ.\\displaystyle\\hat{m}:\\mathcal{Z}^{n+1}\\to\\mathcal{M}. |     |

The definitions of average probability of error and coding rate follow the standard conventions outlined in Section [III](https://arxiv.org/html/2509.16146v1#S3 "III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). We denote by Cno​(V)C\_{\\text{no}}(V) the capacity of this implicit channel under a control constraint J≤J∗∗+VJ\\leq J^{\*\*}+V, where J∗∗J^{\*\*} is the optimal control cost when the controller’s observations are noisy, as will be discussed shortly.

Report issue for preceding element

Noisy observations at the controller introduce substantial challenges in deriving the capacity of the implicit channel. As a result, we can only establish a lower bound on the capacity, which is achievable using linear input policies. Before presenting this bound, we first provide a brief discussion of control and state estimation in the presence of noisy controller observations.

Report issue for preceding element

### VI-A Optimal Control and Kalman Filtering

Report issue for preceding element

Without considering implicit communication, the optimal control policy that minimizes the long-term average quadratic cost defined in ([6](https://arxiv.org/html/2509.16146v1#S3.E6 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) is given by ut\=−K​xˇt|tu\_{t}=-K\\check{x}\_{t|t}, where KK is the same feedback gain as in the perfect observation case, as defined in ([7](https://arxiv.org/html/2509.16146v1#S3.E7 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), and xˇt|t≜𝔼​\[xt|ot,ut−1\]\\check{x}\_{t|t}\\triangleq\\mathbb{E}\[x\_{t}|o^{t},u^{t-1}\] is the controller’s estimate of the state based on its observations and past inputs. Here, the estimate xˇt|t\\check{x}\_{t|t} can also be computed using the Kalman filter introduced in Section [V](https://arxiv.org/html/2509.16146v1#S5 "V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), with a minor difference that state prediction now incorporates the applied control: xˇt+1|t\=A​xˇt|t+B​ut\\check{x}\_{t+1|t}=A\\check{x}\_{t|t}+Bu\_{t}. As t→∞t\\to\\infty, the covariance of the estimation error xt−xˇt+1|tx\_{t}-\\check{x}\_{t+1|t} converges to Σc\\Sigma\_{c}, which is determined by the discrete-time algebraic Riccati equation:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Σc\=A​(Σc−Σc​Dc⊤​(Dc​Σc​Dc⊤+Ψq)−1​Dc​Σc)​A⊤+Ψw.\\displaystyle\\Sigma\_{c}=A\\left(\\Sigma\_{c}-\\Sigma\_{c}D\_{c}^{\\top}(D\_{c}\\Sigma\_{c}D\_{c}^{\\top}+\\Psi\_{q})^{-1}D\_{c}\\Sigma\_{c}\\right)A^{\\top}+\\Psi\_{w}. |     | (33) |

Note that, unlike Σ\\Sigma defined in ([16](https://arxiv.org/html/2509.16146v1#S5.E16 "In V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), Σc\\Sigma\_{c} is independent of the input policy, as the controller has full knowledge of the inputs. Upon receiving the new observation ot+1o\_{t+1}, the controller updates its state estimate using the standard Kalman filtering formula:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | xˇt+1\|t+1\=xˇt+1\|t+Lˇt+1​(ot+1−Dc​xˇt+1\|t).\\displaystyle\\check{x}\_{t+1\|t+1}=\\check{x}\_{t+1\|t}+\\check{L}\_{t+1}(o\_{t+1}-D\_{c}\\check{x}\_{t+1\|t}). |     | (34) |

Let et≜xt−xˇt|te\_{t}\\triangleq x\_{t}-\\check{x}\_{t|t} denote the estimation error at time tt. As t→∞t\\to\\infty, the controller’s filter gain Lˇt\\check{L}\_{t} and estimation error covariance Cov​(et)\\text{Cov}(e\_{t}) converge to steady-state values:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Lc≜limt→∞Lˇt\=Σc​Dc⊤​(Dc​Σc​Dc⊤+Ψq)−1,\\displaystyle L\_{c}\\triangleq\\lim\_{t\\to\\infty}\\check{L}\_{t}=\\Sigma\_{c}D\_{c}^{\\top}\\left(D\_{c}\\Sigma\_{c}D\_{c}^{\\top}+\\Psi\_{q}\\right)^{-1}, |     | (35) |
|     | Σ~c≜limt→∞Cov​(et)\=(I−Lc​Dc)​Σc.\\displaystyle\\tilde{\\Sigma}\_{c}\\triangleq\\lim\_{t\\to\\infty}\\text{Cov}(e\_{t})=(I-L\_{c}D\_{c})\\Sigma\_{c}. |     | (36) |

Under the policy ut\=−K​x^t|tu\_{t}=-K\\hat{x}\_{t|t}, the optimal long-term average control cost is given by

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | J∗∗\=Tr​(F​Σ~c)+Tr​(Γ​(Σc−Σ~c)).\\displaystyle J^{\*\*}=\\text{Tr}(F\\tilde{\\Sigma}\_{c})+\\text{Tr}(\\Gamma(\\Sigma\_{c}-\\tilde{\\Sigma}\_{c})). |     | (37) |

### VI-B A Lower Bound on the Capacity

Report issue for preceding element

In the settings considered in the previous sections, the controller has noiseless observation of the system state. In such cases, the optimal input policy that achieves the implicit channel capacity adheres to a separation principle—the communication signal can be designed independently and then simply added to the optimal control input of the LQG control problem. This separation greatly simplifies the implicit communication problem, making it more practical and implementable. Therefore, it is a natural desire for the input policy to retain this property even when the controller’s observations are noisy. Such motivated, we will focus on input policies that take the form

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | ut\=−K​xˇt\|t+B†​st,st∼𝒩​(0,Φ),\\displaystyle u\_{t}=-K\\check{x}\_{t\|t}+B^{\\dagger}s\_{t},\\quad s\_{t}\\sim\\mathcal{N}(0,\\Phi), |     | (38) |

and derive the maximum achievable rate within this class of policies. The result serves as a lower bound on the channel capacity.

Report issue for preceding element

We first analyse the control cost of the input policy ([38](https://arxiv.org/html/2509.16146v1#S6.E38 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), which allows us to translate the control cost constraint into an equivalent constraint on the average power of sts\_{t}.

Report issue for preceding element

###### Lemma 4

Report issue for preceding element

For the linear system ([1](https://arxiv.org/html/2509.16146v1#S3.E1 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) with an observation process ([32](https://arxiv.org/html/2509.16146v1#S6.E32 "In VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), the long-term average control cost of the policy ut\=−K​xˇt|t+B†​stu\_{t}=-K\\check{x}\_{t|t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φ)s\_{t}\\sim\\mathcal{N}(0,\\Phi), is given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | J\=J∗∗+Tr​((Γ+G^)​Φ),\\displaystyle J=J^{\*\*}+\\text{Tr}((\\Gamma+\\hat{G})\\Phi), |     |

where G^\=(B†)⊤​G​B†\\hat{G}=(B^{\\dagger})^{\\top}GB^{\\dagger}.

Report issue for preceding element

###### Proof:

Report issue for preceding element

See Appendix C. ∎

Report issue for preceding element

Lemma [4](https://arxiv.org/html/2509.16146v1#Thmlemma4 "Lemma 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") implies that, within the class of policies defined in ([38](https://arxiv.org/html/2509.16146v1#S6.E38 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), the control constraint J≤J∗∗+VJ\\leq J^{\*\*}+V is equivalent to a power constraint on sts\_{t}: Tr​((Γ+G^)​Φ)≤V\\text{Tr}((\\Gamma+\\hat{G})\\Phi)\\leq V. This mirrors the equivalence observed in the settings where the controller has noiseless observations.

Report issue for preceding element

Under the input policy ([38](https://arxiv.org/html/2509.16146v1#S6.E38 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), the system evolves according to the following equation:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | xt+1\=(A−B​K)​xt+B​K​et+st+wt.\\displaystyle x\_{t+1}=(A-BK)x\_{t}+BKe\_{t}+s\_{t}+{w}\_{t}. |     | (39) |

Using a similar argument as before shows that the error process {et}\\{e\_{t}\\} is a Markov chain that evolves according to

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | et+1\=(I−Lc​Dc)​A​et+(I−Lc​Dc)​wt−Lc​qt+1.\\displaystyle e\_{t+1}=(I-L\_{c}D\_{c}){A}e\_{t}+(I-L\_{c}D\_{c})w\_{t}-L\_{c}q\_{t+1}. |     | (40) |

While ete\_{t} and xˇt\\check{x}\_{t} are uncorrelated, we note that ete\_{t} remains correlated with xtx\_{t}:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Cov​(et,xt)\=𝔼​\[et​xt⊤\]−𝔼​\[et​xˇt⊤\]\=𝔼​\[et​et⊤\]\=Σc≻0.\\displaystyle\\text{Cov}(e\_{t},x\_{t})=\\mathbb{E}\[e\_{t}{x}^{\\top}\_{t}\]-\\mathbb{E}\[e\_{t}\\check{x}^{\\top}\_{t}\]=\\mathbb{E}\[e\_{t}e\_{t}^{\\top}\]=\\Sigma\_{c}\\succ 0. |     |

Recall that, when the controller has perfect observations and takes the input policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, the receiver can estimate xt+1−(A−B​K)​xtx\_{t+1}-(A-BK)x\_{t} from zt+1z^{t+1} via the Kalman filter and treat this estimate as the channel output at time tt. Now, with noisy observations at the controller, the state estimation at the controller introduces an additional error term ete\_{t} into the state evolution, as shown in ([39](https://arxiv.org/html/2509.16146v1#S6.E39 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). Because of the correlation between ete\_{t} and xtx\_{t}, the receiver can no longer directly estimate xtx\_{t} using the standard Kalman filter, as it requires the noise to be White Gaussian and independent of the state xtx\_{t}.

Report issue for preceding element

To address this issue, we construct an extended state ρt≜\[xt,et\]\\rho\_{t}\\triangleq\[x\_{t},e\_{t}\] and characterize the system from the receiver’s perspective using the following equivalent form:

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | ρt+1\\displaystyle\\rho\_{t+1} | \=Aρ​ρt+s¯t+w¯t+q¯t+1,\\displaystyle=A\_{\\rho}\\rho\_{t}+\\bar{s}\_{t}+\\bar{w}\_{t}+\\bar{q}\_{t+1}, |     | (41) |
|     | zt\\displaystyle z\_{t} | \=Dρ​ρt+vt,\\displaystyle=D\_{\\rho}\\rho\_{t}+v\_{t}, |     | (42) |

where Dρ≜\[D​ 0\]D\_{\\rho}\\triangleq\[D\\ 0\] and

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Aρ≜\[A−B​KB​K0(I−Lc​Dc)​A\],s¯t≜\[st0\],w¯t≜\[wt(I−Lc​Dc)​wt\],q¯t+1≜\[0−Lc​qt+1\].\\displaystyle A\_{\\rho}\\triangleq\\begin{bmatrix}A-BK&BK\\\\ 0&(I-L\_{c}D\_{c})A\\end{bmatrix},\\ \\bar{s}\_{t}\\triangleq\\begin{bmatrix}s\_{t}\\\\ 0\\end{bmatrix},\\ \\bar{w}\_{t}\\triangleq\\begin{bmatrix}w\_{t}\\\\ (I-L\_{c}D\_{c})w\_{t}\\end{bmatrix},\\ \\bar{q}\_{t+1}\\triangleq\\begin{bmatrix}0\\\\ -L\_{c}q\_{t+1}\\end{bmatrix}. |     | (43) |

The system defined in ([41](https://arxiv.org/html/2509.16146v1#S6.E41 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([42](https://arxiv.org/html/2509.16146v1#S6.E42 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) is equivalent to the one defined by ([39](https://arxiv.org/html/2509.16146v1#S6.E39 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([40](https://arxiv.org/html/2509.16146v1#S6.E40 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and ([11](https://arxiv.org/html/2509.16146v1#S5.E11 "In V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). Note that s¯t,wt¯\\bar{s}\_{t},\\bar{w\_{t}}, q¯t+1\\bar{q}\_{t+1} and vtv\_{t} are all independent with each other, and all of them are independent of ρt\\rho\_{t}—since ete\_{t} is correlated only with st−1,wt−1s^{t-1},w^{t-1}, and qtq^{t}. The covariance matrices of s¯t,wt¯\\bar{s}\_{t},\\bar{w\_{t}}, and q¯t+1\\bar{q}\_{t+1} are given by

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Φ¯\=\[Φ000\],Ψw¯\=\[ΨwΨw​(I−Lc​Dc)⊤(I−Lc​Dc)​Ψw(I−Lc​Dc)​Ψw​(I−Lc​Dc)⊤\],Ψq¯\=\[000Lc​Ψq​Lc⊤\].\\displaystyle\\bar{\\Phi}=\\begin{bmatrix}\\Phi&0\\\\ 0&0\\end{bmatrix},\\Psi\_{\\bar{w}}=\\begin{bmatrix}\\Psi\_{w}&\\Psi\_{w}(I-L\_{c}D\_{c})^{\\top}\\\\ (I-L\_{c}D\_{c})\\Psi\_{w}&(I-L\_{c}D\_{c})\\Psi\_{w}(I-L\_{c}D\_{c})^{\\top}\\end{bmatrix},\\Psi\_{\\bar{q}}=\\begin{bmatrix}0&0\\\\ 0&L\_{c}\\Psi\_{q}L\_{c}^{\\top}\\end{bmatrix}. |     | (44) |

Under this construction, we can estimate

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | yt≜ρt+1−Aρ​ρt\=xt+1−(A−B​K)​xt−B​K​ety\_{t}\\triangleq\\rho\_{t+1}-A\_{\\rho}\\rho\_{t}=x\_{t+1}-(A-BK)x\_{t}-BKe\_{t} |     |

using the standard Kalman filter and smoother described in Section [V-B](https://arxiv.org/html/2509.16146v1#S5.SS2 "V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). This estimation enables us to translate the implicit channel into a Gaussian channel, as formalized in the following lemma.

Report issue for preceding element

###### Lemma 5 (Channel Translation)

Report issue for preceding element

Consider the input policy ut\=−K​xˇt|t+B†​stu\_{t}=-K\\check{x}\_{t|t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φ)s\_{t}\\sim\\mathcal{N}(0,\\Phi) is independent of xˇt|t\\check{x}\_{t|t}. Then the implicit channel under the control constraint J≤J∗∗+VJ\\leq J^{\*\*}+V is equivalent to the Gaussian channel

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | y¯t\=D​st+βt,\\displaystyle\\bar{y}\_{t}=Ds\_{t}+\\beta\_{t}, |     |

subject to the input power constraint 𝔼​\[st⊤​(Γ+G^)​st\]≤V\\mathbb{E}\[s^{\\top}\_{t}(\\Gamma+\\hat{G})s\_{t}\]\\leq V, where the noise term is given by βt\=D​wt+Dρ​Aρ​τt+vt+1\\beta\_{t}=Dw\_{t}+D\_{\\rho}A\_{\\rho}\\tau\_{t}+v\_{t+1}, and τt≜ρt−𝔼​\[ρt|zt\]\\tau\_{t}\\triangleq\\rho\_{t}-\\mathbb{E}\[\\rho\_{t}|z^{t}\] is the estimation error of the Kalman filter for estimating ρt\\rho\_{t}.

Report issue for preceding element

###### Proof:

Report issue for preceding element

The proof is deferred to Section [VII-C](https://arxiv.org/html/2509.16146v1#S7.SS3 "VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). ∎

Report issue for preceding element

The key difference between the Gaussian channel in Lemma [5](https://arxiv.org/html/2509.16146v1#Thmlemma5 "Lemma 5 (Channel Translation) ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") and that in the previous section lies in the noise term. Specifically, we can decompose Dρ​Aρ​τtD\_{\\rho}A\_{\\rho}\\tau\_{t} as follows:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Dρ​Aρ​τt\=D​(A−B​K)​σt+D​B​K​εt,\\displaystyle D\_{\\rho}A\_{\\rho}\\tau\_{t}=D(A-BK)\\sigma\_{t}+DBK\\varepsilon\_{t}, |     |

where σt\=xt−𝔼​\[xt|zt\]\\sigma\_{t}=x\_{t}-\\mathbb{E}\[x\_{t}|z^{t}\] and εt\=et−𝔼​\[et|zt\]\\varepsilon\_{t}=e\_{t}-\\mathbb{E}\[e\_{t}|z^{t}\]. Compared with κt\\kappa\_{t} in the previous section, the presence of noise in the controller’s observations introduces an additional noise term, εt\\varepsilon\_{t}, which is correlated with σt\\sigma\_{t}. Nevertheless, building on the basis of the extended linear system ([41](https://arxiv.org/html/2509.16146v1#S6.E41 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([42](https://arxiv.org/html/2509.16146v1#S6.E42 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), these two correlated noises can be treated as a single process, i.e., τt\\tau\_{t}. Since τt\\tau\_{t} is the estimation error of a Kalman filter, by the same argument as before, {τt}\\{\\tau\_{t}\\} forms a Markov chain, implying that the channel noise process {βt}\\{\\beta\_{t}\\} is a hidden Markov chain. The capacity of the channel in Lemma [5](https://arxiv.org/html/2509.16146v1#Thmlemma5 "Lemma 5 (Channel Translation) ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") can thus be analysed using the same approach as in the achievability proof of Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), leading to a lower bound on Cno​(V)C\_{\\text{no}}(V).

Report issue for preceding element

###### Theorem 4

Report issue for preceding element

For any V≥0V\\geq 0, with noisy observations at the controller and the receiver, the capacity of the implicit channel under the control constraint J≤J∗∗+VJ\\leq J^{\*\*}+V admits a lower bound Cno​(V)≥Cno-lb​(V)C\_{\\text{no}}(V)\\geq C\_{\\text{no-lb}}(V), where Cno-lb​(V)C\_{\\text{no-lb}}(V) is given by an optimization problem:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Cno-lb​(V):=maxΦ⪰0\\displaystyle C\_{\\text{no-lb}}(V):=\\max\_{\\Phi\\succeq 0}\\ | 12​log​det(Dρ​Σρ​Dρ⊤+Ψv)−12​log​det(Dρ​Ψρ​Dρ⊤+Ψv)\\displaystyle\\frac{1}{2}\\log{\\det(D\_{\\rho}\\Sigma\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})}-\\frac{1}{2}\\log{\\det(D\_{\\rho}\\Psi\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})} |     |
|     | s.t. | Tr​((Γ+G^)​Φ)≤V\\displaystyle\\text{Tr}((\\Gamma+\\hat{G})\\Phi)\\leq V |     |
|     |     | Σρ\=Aρ​(Σρ−Σρ​Dρ⊤​(Dρ​Σρ​Dρ⊤+Ψv)−1​Dρ​Σρ)​Aρ⊤+Φ¯+Ψw¯+Ψq¯,\\displaystyle\\Sigma\_{\\rho}={A}\_{\\rho}\\left(\\Sigma\_{\\rho}-\\Sigma\_{\\rho}D\_{\\rho}^{\\top}(D\_{\\rho}\\Sigma\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})^{-1}D\_{\\rho}\\Sigma\_{\\rho}\\right){A}\_{\\rho}^{\\top}+\\bar{\\Phi}+\\Psi\_{\\bar{w}}+\\Psi\_{\\bar{q}}, |     |

where Φ¯,Ψw¯\\bar{\\Phi},\\Psi\_{\\bar{w}}, and Ψq¯\\Psi\_{\\bar{q}} are defined in ([44](https://arxiv.org/html/2509.16146v1#S6.E44 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), and Ψρ\\Psi\_{\\rho} is given by the discrete-time algebraic Riccati equation:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Ψρ\=Aρ​(Ψρ−Ψρ​Dρ⊤​(Dρ​Ψρ​Dρ⊤+Ψv)−1​Dρ​Ψρ)​Aρ⊤+Ψw¯+Ψq¯.\\displaystyle\\Psi\_{\\rho}={A}\_{\\rho}\\left(\\Psi\_{\\rho}-\\Psi\_{\\rho}D\_{\\rho}^{\\top}(D\_{\\rho}\\Psi\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})^{-1}D\_{\\rho}\\Psi\_{\\rho}\\right){A}\_{\\rho}^{\\top}+\\Psi\_{\\bar{w}}+\\Psi\_{\\bar{q}}. |     |

###### Proof:

Report issue for preceding element

The proof is deferred to Section [VII-C](https://arxiv.org/html/2509.16146v1#S7.SS3 "VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). ∎

Report issue for preceding element

The optimization problem in Theorem [4](https://arxiv.org/html/2509.16146v1#Thmtheorem4 "Theorem 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") has the same form as that in Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), as it is obtained by restricting attention to linear input policies. Here, Σρ\\Sigma\_{\\rho} is the stabilizing estimation error covariance of 𝔼​\[ρt+1|zt\]\\mathbb{E}\[\\rho\_{t+1}|z^{t}\], while Ψρ\\Psi\_{\\rho} corresponds to that of 𝔼​\[ρt+1|zt,st\]\\mathbb{E}\[\\rho\_{t+1}|z^{t},s^{t}\]. In the special case where the controller has noiseless observations, we have et\=0e\_{t}=0 for all tt. As a result, Σρ\=\[Σ​ 0;0 0\]\\Sigma\_{\\rho}=\[\\Sigma\\ 0;0\\ 0\] and Ψρ\=\[Ψσ​ 0;0 0\]\\Psi\_{\\rho}=\[\\Psi\_{\\sigma}\\ 0;0\\ 0\]. Then it is easy to verify that Cno-lb​(V)\=Cnor​(V)C\_{\\text{no-lb}}(V)=C\_{\\text{nor}}(V), meaning that the lower bound is tight in this special case.

Report issue for preceding element

Given the same form of the optimization problem, it is unsurprising that Cno-lb​(V)C\_{\\text{no-lb}}(V) can also be computed by solving a convex optimization, as in Proposition [1](https://arxiv.org/html/2509.16146v1#Thmproposition1 "Proposition 1 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems").

Report issue for preceding element

###### Proposition 2

Report issue for preceding element

For any V≥0V\\geq 0, the lower bound Cno-lb​(V)C\_{\\text{no-lb}}(V) is given by the following convex optimization:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Cno-lb​(V)\=maxΦ,Σρ\\displaystyle C\_{\\text{no-lb}}(V)=\\max\_{\\Phi,\\Sigma\_{\\rho}}\\ | 12​log​det(Dρ​Σρ​Dρ⊤+Ψv)−12​log​det(Dρ​Ψρ​Dρ⊤+Ψv)\\displaystyle\\frac{1}{2}\\log{\\det(D\_{\\rho}\\Sigma\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})}-\\frac{1}{2}\\log{\\det(D\_{\\rho}\\Psi\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})} |     |
|     | s.t. | Tr​((Γ+G^)​Φ)≤V\\displaystyle\\text{Tr}((\\Gamma+\\hat{G})\\Phi)\\leq V |     |
|     |     | \[Dρ​Σρ​Dρ⊤+ΨvDρ​Σρ​Aρ⊤Aρ​Σρ​Dρ⊤Aρ​Σρ​Aρ⊤+Φ¯+Ψw¯+Ψq¯−Σρ\]⪰0\\displaystyle\\begin{bmatrix}D\_{\\rho}\\Sigma\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v}&D\_{\\rho}\\Sigma\_{\\rho}{A}\_{\\rho}^{\\top}\\\\ {A}\_{\\rho}\\Sigma\_{\\rho}D\_{\\rho}^{\\top}&{A}\_{\\rho}\\Sigma\_{\\rho}{A}\_{\\rho}^{\\top}+\\bar{\\Phi}+\\Psi\_{\\bar{w}}+\\Psi\_{\\bar{q}}-\\Sigma\_{\\rho}\\end{bmatrix}\\succeq 0 |     |
|     |     | Σρ⪰0,Φ⪰0.\\displaystyle\\Sigma\_{\\rho}\\succeq 0,\\Phi\\succeq 0. |     |

###### Proof:

Report issue for preceding element

The proof follows exactly the same argument as that of Proposition [1](https://arxiv.org/html/2509.16146v1#Thmproposition1 "Proposition 1 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") and is omitted for brevity. ∎

Report issue for preceding element

## VII Proofs

Report issue for preceding element

This section begins with the converse proofs for Theorems [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") and [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), and then presents the proof of Theorem [4](https://arxiv.org/html/2509.16146v1#Thmtheorem4 "Theorem 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). Both converse proofs are based on Fano’s inequality and demonstrate that the mutual information between the message and the receiver’s observation sequence is upper-bounded by the channel capacity. The central step is to demonstrate that this mutual information is maximized by input policies of the form ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}. However, in the setting where both the controller and the receiver have noisy observations, we are unable to establish this property—constituting the main obstacle to deriving the exact capacity in this case.

Report issue for preceding element

### VII-A Converse Proof of Theorem [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")

Report issue for preceding element

To prove the converse to Theorem [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), we show that a sequence of (2n​Rn,n)(2^{nR\_{n}},n) codes with Pe(n)→0P\_{e}^{(n)}\\to 0 must have Rn≤C¯n​(V)+ϵnR\_{n}\\leq\\bar{C}\_{n}(V)+\\epsilon\_{n}, where ϵn→0\\epsilon\_{n}\\to 0 and C¯n​(V)→C​(V)\\bar{C}\_{n}(V)\\to C(V).

Report issue for preceding element

###### Proof:

Report issue for preceding element

First of all, by Fano’s inequality,

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | n​Rn\=H​(m)\\displaystyle nR\_{n}=H(m) | \=H​(m\|xn+1)+I​(m;xn+1)\\displaystyle=H(m\|x^{n+1})+I(m;x^{n+1}) |     |
|     |     | \=I​(m;xn+1)+n​ϵn,\\displaystyle=I(m;x^{n+1})+n\\epsilon\_{n}, |     |

where ϵn→0\\epsilon\_{n}\\to 0 if Pe(n)→0P\_{e}^{(n)}\\to 0. Now,

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | I​(m;xn+1)\\displaystyle I(m;x^{n+1}) | \=h​(xn+1)−h​(xn+1\|m)\\displaystyle=h(x^{n+1})-h(x^{n+1}\|m) |     |
|     |     | \=∑i\=2n+1h​(xi\|xi−1)+h​(x1)−∑i\=2n+1h​(xi\|xi−1,m)−h​(x1\|m)\\displaystyle=\\sum\_{i=2}^{n+1}h(x\_{i}\|x^{i-1})+h(x\_{1})-\\sum\_{i=2}^{n+1}h(x\_{i}\|x^{i-1},m)-h(x\_{1}\|m) |     |
|     |     | \=∑i\=1nh​(xi+1\|xi)−∑i\=1nh​(xi+1\|xi,m).\\displaystyle=\\sum\_{i=1}^{n}h(x\_{i+1}\|x^{i})-\\sum\_{i=1}^{n}h(x\_{i+1}\|x^{i},m). |     |

Here, h​(x1)−h​(x1|m)\=0h(x\_{1})-h(x\_{1}|m)=0 because x1x\_{1} is the initial state, which is independent of the message mm. Since uiu\_{i} is determined by xix^{i} and mm, we have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | h​(xi+1\|xi,m)\\displaystyle h(x\_{i+1}\|x^{i},m) | \=h​(A​xi+B​ui+wi\|m,xi,ui​(xi,m))\\displaystyle=h(Ax\_{i}+Bu\_{i}+w\_{i}\|m,x^{i},u\_{i}(x^{i},m)) |     |
|     |     | \=h​(wi).\\displaystyle=h(w\_{i}). |     |

Also, h​(xi+1|xi)\=h​(A​xi+B​ui+wi|xi)\=h​(B​ui+wi|xi)h(x\_{i+1}|x^{i})=h(Ax\_{i}+Bu\_{i}+w\_{i}|x^{i})=h(Bu\_{i}+w\_{i}|x^{i}). We thus have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | I​(m;xn+1)\\displaystyle I(m;x^{n+1}) | \=∑i\=1nh​(B​ui+wi\|xi)−∑i\=1nh​(wi)\\displaystyle=\\sum\_{i=1}^{n}h(Bu\_{i}+w\_{i}\|x^{i})-\\sum\_{i=1}^{n}h(w\_{i}) |     |
|     |     | ≤∑i\=1nh(Bui+wi\|xi)−n2log(2πe)d1det(Ψw).\\displaystyle\\leq\\sum\_{i=1}^{n}h(Bu\_{i}+w\_{i}\|x\_{i})-\\frac{n}{2}\\log(2\\pi e)^{d\_{1}}\\det(\\Psi\_{w}). |     |

For n≥1n\\geq 1, defined a sequence of optimization problems as follows:

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | C¯n​(V):=max\\displaystyle\\bar{C}\_{n}(V):=\\max\\ | 1n∑i\=1n\[h(Bui+wi\|xi)−12log(2πe)d1det(Ψw)\]\\displaystyle\\frac{1}{n}\\sum\_{i=1}^{n}\\left\[h(Bu\_{i}+w\_{i}\|x\_{i})-\\frac{1}{2}\\log(2\\pi e)^{d\_{1}}\\det(\\Psi\_{w})\\right\] |     | (45) |
|     | s.t. | Jn≤Jn∗+V.\\displaystyle J\_{n}\\leq J\_{n}^{\*}+V. |     | (46) |

Then a sequence of (2n​Rn,n)(2^{nR\_{n}},n) codes satisfying constraint Jn≤Jn∗+VJ\_{n}\\leq J^{\*}\_{n}+V and Pe(n)→0P\_{e}^{(n)}\\to 0 must have

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Rn≤1n​I​(m;xn+1)+ϵn≤C¯n​(V)+ϵn,\\displaystyle R\_{n}\\leq\\frac{1}{n}I(m;x^{n+1})+\\epsilon\_{n}\\leq\\bar{C}\_{n}(V)+\\epsilon\_{n}, |     |

where ϵn→0\\epsilon\_{n}\\to 0 if Pe(n)→0P\_{e}^{(n)}\\to 0. It remains to show that C¯n​(V)→C​(V)\\bar{C}\_{n}(V)\\to C(V) as n→∞n\\to\\infty. The following lemma plays a central role in solving C¯n​(V)\\bar{C}\_{n}(V):

Report issue for preceding element

###### Lemma 6

Report issue for preceding element

For a fixed nn, it is sufficient to optimize C¯n​(V)\\bar{C}\_{n}(V), as defined in ([45](https://arxiv.org/html/2509.16146v1#S7.E45 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([46](https://arxiv.org/html/2509.16146v1#S7.E46 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), over input policies of the form ut\=−Kt​xt+B†​stu\_{t}=-K\_{t}x\_{t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φt)s\_{t}\\sim\\mathcal{N}(0,\\Phi\_{t}) is independent of xtx\_{t} and wtw\_{t}.

Report issue for preceding element

###### Proof:

Report issue for preceding element

Proof of Lemma [6](https://arxiv.org/html/2509.16146v1#Thmlemma6 "Lemma 6 ‣ VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") is presented immediately after the converse proof. ∎

Report issue for preceding element

Lemma [6](https://arxiv.org/html/2509.16146v1#Thmlemma6 "Lemma 6 ‣ VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") implies that we can focus on ut\=−Kt​xt+B†​stu\_{t}=-K\_{t}x\_{t}+B^{\\dagger}s\_{t}, st∼𝒩​(0,Φt)s\_{t}\\sim\\mathcal{N}(0,\\Phi\_{t}), for solving the optimization problem. Under this policy,

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | h(But+wt\|xt)\=h(st+wt)\=12log(2πe)d1det(Φt+Ψw).\\displaystyle h(Bu\_{t}+w\_{t}\|x\_{t})=h(s\_{t}+w\_{t})=\\frac{1}{2}\\log(2\\pi e)^{d\_{1}}\\det(\\Phi\_{t}+\\Psi\_{w}). |     |

We thus can convert problem ([45](https://arxiv.org/html/2509.16146v1#S7.E45 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([46](https://arxiv.org/html/2509.16146v1#S7.E46 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) to an equivalent optimization problem as follows:

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | C¯n​(V):=max{Φt≥0}\\displaystyle\\bar{C}\_{n}(V):=\\max\_{\\{\\Phi\_{t}\\geq 0\\}}\\ | 12​n​∑t\=1nlog​det(I+Ψw−1​Φt)\\displaystyle\\frac{1}{2n}\\sum\_{t=1}^{n}\\log\\det\\left(I+\\Psi\_{w}^{-1}{\\Phi\_{t}}\\right) |     | (47) |
|     | s.t. | 1n​∑t\=1nTr​(Φt​(Γt+1+G^))≤V.\\displaystyle\\frac{1}{n}\\sum\_{t=1}^{n}\\text{Tr}(\\Phi\_{t}(\\Gamma\_{t+1}+\\hat{G}))\\leq V. |     | (48) |

Since Γt\=Γ\\Gamma\_{t}=\\Gamma for all tt as n→∞n\\to\\infty, it is easy to verify that, as n→∞n\\to\\infty, C¯n​(V)\\bar{C}\_{n}(V) converges to the following problem:

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | C¯∞​(V)\=maxΦ≥0\\displaystyle\\bar{C}\_{\\infty}(V)=\\max\_{\\Phi\\geq 0}\\ | 12​log​det(I+Ψw−1​Φ)\\displaystyle\\frac{1}{2}\\log\\det\\left(I+\\Psi\_{w}^{-1}{\\Phi}\\right) |     | (49) |
|     | s.t. | Tr​(Φ​(Γ+G^))≤V.\\displaystyle\\text{Tr}(\\Phi(\\Gamma+\\hat{G}))\\leq V. |     | (50) |

By diagonalizing Ψw−1\\Psi\_{w}^{-1} as Ψw−1\=U​Λ−1​U⊤\\Psi\_{w}^{-1}=U\\Lambda^{-1}U^{\\top}, the above problem reduces to the problem in the achievability proof. We thus conclude that

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | limn→∞C¯n​(V)\=C¯∞​(V)\=C​(V).\\displaystyle\\lim\_{n\\to\\infty}\\bar{C}\_{n}(V)=\\bar{C}\_{\\infty}(V)=C(V). |     |

This completes the converse proof. ∎

Report issue for preceding element

Next, we prove Lemma [6](https://arxiv.org/html/2509.16146v1#Thmlemma6 "Lemma 6 ‣ VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), a key component of the converse proof.

Report issue for preceding element

###### Proof:

Report issue for preceding element

In general, uiu\_{i} is a deterministic function of historical states xix^{i} and message mm. However, since h​(B​ui+wi|xi)h(Bu\_{i}+w\_{i}|x\_{i}) depends only on the conditional distribution of uiu\_{i} given xix\_{i}, we thus focus on xix\_{i} and treat ui​(xi)u\_{i}(x\_{i}) as a stochastic function of xix\_{i}. By definition, the nn\-step average control cost can be expressed as

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | Jn\\displaystyle J\_{n} | \=1n​∑t\=1n+1𝔼​\[xt⊤​F​xt\]+1n​∑t\=1n𝔼​\[ut⊤​G​ut\]\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n+1}\\mathbb{E}\[x^{\\top}\_{t}Fx\_{t}\]+\\frac{1}{n}\\sum\_{t=1}^{n}\\mathbb{E}\[u^{\\top}\_{t}Gu\_{t}\] |     |
|     |     | \=1n​∑t\=1n+1\[Tr​(F​Ψxt)+𝔼​\[xt⊤\]​F​𝔼​\[xt\]\]+1n​∑t\=1n\[Tr​(G​Ψut)+𝔼​\[ut⊤\]​G​𝔼​\[ut\]\],\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n+1}\\left\[\\text{Tr}(F\\Psi\_{x\_{t}})+\\mathbb{E}\[x^{\\top}\_{t}\]F\\mathbb{E}\[x\_{t}\]\\right\]+\\frac{1}{n}\\sum\_{t=1}^{n}\\left\[\\text{Tr}(G\\Psi\_{u\_{t}})+\\mathbb{E}\[u^{\\top}\_{t}\]G\\mathbb{E}\[u\_{t}\]\\right\], |     | (51) |

where Ψxt\\Psi\_{x\_{t}} and Ψut\\Psi\_{u\_{t}} denote the covariance matrices of xtx\_{t} and utu\_{t}, respectively. Equation ([VII-A](https://arxiv.org/html/2509.16146v1#S7.Ex83 "VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) suggests that a constraint on JnJ\_{n} effectively translates into restrictions on the mean and covariance of states and inputs. It is known that, for a given covariance, the differential entropy is maximized by a Gaussian distribution. Therefore, problem ([45](https://arxiv.org/html/2509.16146v1#S7.E45 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([46](https://arxiv.org/html/2509.16146v1#S7.E46 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) can be optimized by a policy in which the conditional distribution of utu\_{t} given xtx\_{t} is Gaussian. We refer to such policies as the type-1 policies and formally define them as follows:

Report issue for preceding element

Type-1 Policies: A policy τ\\tau is classified as a type-1 policy if, for any time tt, the conditional distribution of utu\_{t} given xtx\_{t} is a Gaussian distribution 𝒩​(B†​θt​(xt),B†​Ψt​(xt)​(B†)⊤)\\mathcal{N}(B^{\\dagger}\\theta\_{t}(x\_{t}),B^{\\dagger}\\Psi\_{t}(x\_{t})(B^{\\dagger})^{\\top}), where both the mean θt\\theta\_{t} and covariance matrix Ψt\\Psi\_{t} are functions of the state xtx\_{t}.

Report issue for preceding element

Next, we introduce a subset of type-1 policies, referred to as type-2 policies, which are defined as follows:

Report issue for preceding element

Type-2 Policies: A policy τ′\\tau^{\\prime} is classified as a type-2 policy if, for any time tt, the conditional distribution of utu\_{t} given xtx\_{t} is a Gaussian distribution 𝒩​(B†​θt′​(xt),B†​Φt′​(B†)⊤)\\mathcal{N}(B^{\\dagger}\\theta^{\\prime}\_{t}(x\_{t}),B^{\\dagger}\\Phi^{\\prime}\_{t}(B^{\\dagger})^{\\top}), where the mean θt′\\theta^{\\prime}\_{t} is a function of the state xtx\_{t}, while the covariance matrix Φt′\\Phi^{\\prime}\_{t} is independent of xtx\_{t}.

Report issue for preceding element

Now that C¯n​(V)\\bar{C}\_{n}(V) can be optimized by type-1 policies, we proceed to prove Lemma [6](https://arxiv.org/html/2509.16146v1#Thmlemma6 "Lemma 6 ‣ VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") in two steps: (i) Step 1, we show that it is sufficient to optimize C¯n​(V)\\bar{C}\_{n}(V) over the type-2 policies; (ii) Step 2, we further demonstrate that any type-2 policy has an equivalent linear policy.

Report issue for preceding element

In step 1, we begin by considering an arbitrary type-1 policy τ\\tau and an associated type-2 policy τ′\\tau^{\\prime} satisfying θt′​(xt)\=θt​(xt)\\theta^{\\prime}\_{t}(x\_{t})=\\theta\_{t}(x\_{t}) and Φt′\=Φt≜𝔼​\[Ψt​(xt)\]\\Phi^{\\prime}\_{t}=\\Phi\_{t}\\triangleq\\mathbb{E}\[\\Psi\_{t}(x\_{t})\] for all tt. The goal is to show that both policies yield the same control cost, and that τ′\\tau^{\\prime} achieves an objective value no lower than that of τ\\tau. First note that, for a fixed distribution of xtx\_{t}, both policies induce the same marginal distribution of B​utBu\_{t}. To see this, define ρt≜𝔼​\[θt​(xt)\]\\rho\_{t}\\triangleq\\mathbb{E}\[\\theta\_{t}(x\_{t})\]. Then clearly, under both policies, 𝔼​\[B​ut\]\=ρt\\mathbb{E}\[Bu\_{t}\]=\\rho\_{t}. An application of the law of total covariance shows that the covariance of B​utBu\_{t} is also the same under both policies. In particular, the following holds for both policies:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Cov​(B​ut)\=𝔼​\[Cov​(B​ut\|xt)\]+Cov​(𝔼​\[B​ut\|xt\])\=Φt+Cov​(θt​(xt)).\\displaystyle\\text{Cov}(Bu\_{t})=\\mathbb{E}\\left\[\\text{Cov}(Bu\_{t}\|x\_{t})\\right\]+\\text{Cov}\\left(\\mathbb{E}\[Bu\_{t}\|x\_{t}\]\\right)=\\Phi\_{t}+\\text{Cov}(\\theta\_{t}(x\_{t})). |     | (52) |

Therefore, the marginal distribution of B​utBu\_{t} under both τ\\tau and τ′\\tau^{\\prime} is 𝒩​(ρt,Φt+Cov​(θt​(xt)))\\mathcal{N}(\\rho\_{t},\\Phi\_{t}+\\text{Cov}(\\theta\_{t}(x\_{t}))).

Report issue for preceding element

We then demonstrate that τ\\tau and τ′\\tau^{\\prime} yield the same control cost for the nn\-step LQG control problem. According to ([VII-A](https://arxiv.org/html/2509.16146v1#S7.Ex83 "VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), this can be established by showing that, for any tt, the distributions of xtx\_{t} under the two policies are identical. This claim can be proven using mathematical induction. Initially, note that x1∼𝒩​(0,Ψx)x\_{1}\\sim\\mathcal{N}(0,\\Psi\_{x}) is independent of the control policy, hence the distributions of x1x\_{1} under both policies are identical. Assuming as the induction hypothesis that the distributions of xtx\_{t} under the two policies are identical. Now,

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | xt+1\=A​xt+B​ut​(xt)+wt.\\displaystyle x\_{t+1}=Ax\_{t}+Bu\_{t}(x\_{t})+w\_{t}. |     |

Denote by 𝒩​(ν,Ψ)\\mathcal{N}(\\nu,\\Psi) and 𝒩​(ν′,Ψ′)\\mathcal{N}(\\nu^{\\prime},\\Psi^{\\prime}) the distributions of A​xt+B​utAx\_{t}+Bu\_{t} under policies τ\\tau and τ′\\tau^{\\prime}, respectively. We have

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | ν\=A​𝔼​\[xt\]+𝔼​\[𝔼​\[B​ut​(xt)\|xt\]\]\=A​𝔼​\[xt\]+ρt\=ν′,\\displaystyle\\nu=A\\mathbb{E}\[x\_{t}\]+\\mathbb{E}\[\\mathbb{E}\[Bu\_{t}(x\_{t})\|x\_{t}\]\]=A\\mathbb{E}\[x\_{t}\]+\\rho\_{t}=\\nu^{\\prime}, |     |

and

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Ψ\\displaystyle\\Psi | \=𝔼​\[(A​xt+B​ut)​(A​xt+B​ut)⊤\]−𝔼​\[A​xt+B​ut\]​𝔼​\[A​xt+B​ut\]⊤\\displaystyle=\\mathbb{E}\[(Ax\_{t}+Bu\_{t})(Ax\_{t}+Bu\_{t})^{\\top}\]-\\mathbb{E}\[Ax\_{t}+Bu\_{t}\]\\mathbb{E}\[Ax\_{t}+Bu\_{t}\]^{\\top} |     |
|     |     | \=A​𝔼​\[xt​xt⊤\]​A⊤+𝔼​\[(B​ut)​(B​ut)⊤\]+A​𝔼​\[xt​ut⊤​B⊤\]+𝔼​\[B​ut​xt⊤\]​A⊤−ν​ν⊤\\displaystyle=A\\mathbb{E}\[x\_{t}x^{\\top}\_{t}\]A^{\\top}+\\mathbb{E}\[(Bu\_{t})(Bu\_{t})^{\\top}\]+A\\mathbb{E}\[x\_{t}u^{\\top}\_{t}B^{\\top}\]+\\mathbb{E}\[Bu\_{t}x^{\\top}\_{t}\]A^{\\top}-\\nu\\nu^{\\top} |     |
|     |     | \=A​𝔼​\[xt​xt⊤\]​A⊤+𝔼​\[(B​ut)​(B​ut)⊤\]+A​𝔼​\[𝔼​\[xt​ut⊤​B⊤\|xt\]\]+𝔼​\[𝔼​\[B​ut​xt⊤\|xt\]\]​A⊤−ν​ν⊤\\displaystyle=A\\mathbb{E}\[x\_{t}x^{\\top}\_{t}\]A^{\\top}+\\mathbb{E}\[(Bu\_{t})(Bu\_{t})^{\\top}\]+A\\mathbb{E}\[\\mathbb{E}\[x\_{t}u^{\\top}\_{t}B^{\\top}\|x\_{t}\]\]+\\mathbb{E}\[\\mathbb{E}\[Bu\_{t}x^{\\top}\_{t}\|x\_{t}\]\]A^{\\top}-\\nu\\nu^{\\top} |     |
|     |     | \=A​𝔼​\[xt​xt⊤\]​A⊤+𝔼​\[(B​ut)​(B​ut)⊤\]+A​𝔼​\[xt​θt​(xt)⊤\]+𝔼​\[θt​(xt)​xt⊤\]​A⊤−ν​ν⊤\\displaystyle=A\\mathbb{E}\[x\_{t}x^{\\top}\_{t}\]A^{\\top}+\\mathbb{E}\[(Bu\_{t})(Bu\_{t})^{\\top}\]+A\\mathbb{E}\[x\_{t}\\theta\_{t}(x\_{t})^{\\top}\]+\\mathbb{E}\[\\theta\_{t}(x\_{t})x^{\\top}\_{t}\]A^{\\top}-\\nu\\nu^{\\top} |     |
|     |     | \=Ψ′.\\displaystyle=\\Psi^{\\prime}. |     |

The above implies that the distributions of A​xt+B​utAx\_{t}+Bu\_{t} under both policies are identical. Since xtx\_{t} is independent of wtw\_{t}, so is utu\_{t}. As a result, the distributions of xt+1x\_{t+1} under policies τ\\tau and τ′\\tau^{\\prime} are identical, completing the inductive step. We thus conclude that, starting from the same initial state distribution, policies τ\\tau and τ′\\tau^{\\prime} produce identical state and (marginal) input distributions at every time step. According to ([VII-A](https://arxiv.org/html/2509.16146v1#S7.Ex83 "VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), two policies result in the same control cost if they produce identical state and input distributions at every time step. Hence the control costs of τ\\tau and τ′\\tau^{\\prime} are equal.

Report issue for preceding element

Next, we show that the objective value of τ′\\tau^{\\prime} is greater than or equal to that of τ\\tau. As proved earlier, policies τ\\tau and τ′\\tau^{\\prime} produce identical distributions of xtx\_{t}, ∀t≥1\\forall t\\geq 1. Let ft​(x)f\_{t}(x) denote the probability density function of xtx\_{t}. Under policy τ\\tau,

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | htτ≜h(But+wt\|xt)\=12∫−∞+∞ft(xt)log(2πe)d1det(Ψt(xt)+Ψw)dxt.\\displaystyle h\_{t}^{\\tau}\\triangleq h(Bu\_{t}+w\_{t}\|x\_{t})=\\frac{1}{2}\\int\_{-\\infty}^{+\\infty}f\_{t}(x\_{t})\\log(2\\pi e)^{d\_{1}}\\det(\\Psi\_{t}(x\_{t})+\\Psi\_{w})dx\_{t}. |     |

Under policy τ′\\tau^{\\prime}, we can express B​ut​(xt)\=θt​(xt)+stBu\_{t}(x\_{t})=\\theta\_{t}(x\_{t})+s\_{t}, where st∼𝒩​(0,Φt)s\_{t}\\sim\\mathcal{N}(0,\\Phi\_{t}) is independent of xtx\_{t} and wtw\_{t}. Then

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | htτ′≜h(But+wt\|xt)\=h(st+wt)\=12log(2πe)d1det(Φt+Ψw).\\displaystyle h\_{t}^{\\tau^{\\prime}}\\triangleq h(Bu\_{t}+w\_{t}\|x\_{t})=h(s\_{t}+w\_{t})=\\frac{1}{2}\\log(2\\pi e)^{d\_{1}}\\det(\\Phi\_{t}+\\Psi\_{w}). |     |

Since log​det(⋅)\\log\\det(\\cdot) is a concave function, Jensen’s inequality implies:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | htτ\\displaystyle h\_{t}^{\\tau} | \=12​𝔼​\[log​det(Ψt​(xt)+Ψw)\]+d12​log⁡2​π​e\\displaystyle=\\frac{1}{2}\\mathbb{E}\\left\[\\log\\det(\\Psi\_{t}(x\_{t})+\\Psi\_{w})\\right\]+\\frac{d\_{1}}{2}\\log 2\\pi e |     |
|     |     | ≤12​log​det(𝔼​\[Ψt​(xt)\]+Ψw)+d12​log⁡2​π​e\=htτ′.\\displaystyle\\leq\\frac{1}{2}\\log\\det(\\mathbb{E}\[\\Psi\_{t}(x\_{t})\]+\\Psi\_{w})+\\frac{d\_{1}}{2}\\log 2\\pi e=h\_{t}^{\\tau^{\\prime}}. |     |

It follows immediately that the objective value achieved by τ′\\tau^{\\prime} is at least as large as that of τ\\tau. Combining the above arguments together, the optimal value of the optimization problem ([45](https://arxiv.org/html/2509.16146v1#S7.E45 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([46](https://arxiv.org/html/2509.16146v1#S7.E46 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) can be attained by policies of the form ut\=B†​θt​(xt)+B†​stu\_{t}=B^{\\dagger}\\theta\_{t}(x\_{t})+B^{\\dagger}s\_{t}, where θt​(⋅)\\theta\_{t}(\\cdot) is a deterministic function and st∼𝒩​(0,Φt)s\_{t}\\sim\\mathcal{N}(0,\\Phi\_{t}) is independent of xtx\_{t} and wtw\_{t}. For notation simplicity, we absorb the constant matrix B†B^{\\dagger} into the first term and express the type-2 policies in the simplified form ut\=θt​(xt)+B†​stu\_{t}=\\theta\_{t}(x\_{t})+B^{\\dagger}s\_{t}.

Report issue for preceding element

We then move on to step 2. We will show that, for an arbitrary policy of the form ut\=θt​(xt)+B†​stu\_{t}=\\theta\_{t}(x\_{t})+B^{\\dagger}s\_{t} that achieves an objective value CnC\_{n} and constraint value (i.e., control cost) JnJ\_{n} in problem ([45](https://arxiv.org/html/2509.16146v1#S7.E45 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([46](https://arxiv.org/html/2509.16146v1#S7.E46 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), there exists a linear policy of the form ut\=−Kt​xt+B†​stu\_{t}=-K\_{t}x\_{t}+B^{\\dagger}s\_{t} that achieves the same objective value while attaining a constraint value of as most JnJ\_{n}.

Report issue for preceding element

In particular, let ut\=θt​(xt)+B†​stu\_{t}=\\theta\_{t}(x\_{t})+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φt)s\_{t}\\sim\\mathcal{N}(0,\\Phi\_{t}) is independent of both xtx\_{t} and wtw\_{t}. By definition, the control cost of this policy for the nn\-step control problem is given by

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Jn\\displaystyle J\_{n} | \=1n​∑t\=1n+1𝔼​\[xt⊤​F​xt\]+1n​∑t\=1n𝔼​\[ut⊤​G​ut\]\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n+1}\\mathbb{E}\[x^{\\top}\_{t}Fx\_{t}\]+\\frac{1}{n}\\sum\_{t=1}^{n}\\mathbb{E}\[u^{\\top}\_{t}Gu\_{t}\] |     |
|     |     | \=1n​∑t\=1n+1𝔼​\[xt⊤​F​xt\]+1n​∑t\=1n𝔼​\[θt​(xt)⊤​G​θt​(xt)\]+1n​∑t\=1n𝔼​\[(B†​st)⊤​G​(B†​st)\]\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n+1}\\mathbb{E}\\left\[x^{\\top}\_{t}Fx\_{t}\\right\]+\\frac{1}{n}\\sum\_{t=1}^{n}\\mathbb{E}\\left\[\\theta\_{t}(x\_{t})^{\\top}G\\theta\_{t}(x\_{t})\\right\]+\\frac{1}{n}\\sum\_{t=1}^{n}\\mathbb{E}\[(B^{\\dagger}s\_{t})^{\\top}G(B^{\\dagger}s\_{t})\] |     |
|     |     | ≜Jn′+1n​∑t\=1nTr​(G​B†​Φt​(B†)⊤).\\displaystyle\\triangleq J^{\\prime}\_{n}+\\frac{1}{n}\\sum\_{t=1}^{n}\\text{Tr}(GB^{\\dagger}\\Phi\_{t}(B^{\\dagger})^{\\top}). |     |

Under this policy, the system state evolves as xt+1\=A​xt+B​θt​(xt)+st+wtx\_{t+1}=Ax\_{t}+B\\theta\_{t}(x\_{t})+s\_{t}+w\_{t}. By treating sts\_{t} as an additional noise introduced into the system, we can interpret Jn′J^{\\prime}\_{n} as the control cost of policy u^t\=θt​(xt)\\hat{u}\_{t}=\\theta\_{t}(x\_{t}) in the following system:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | xt+1\=A​xt+B​u^t+wt′,\\displaystyle x\_{t+1}=Ax\_{t}+B\\hat{u}\_{t}+w^{\\prime}\_{t}, |     | (53) |

where the noise wt′\=st+wt∼𝒩​(0,Φt+Ψw)w^{\\prime}\_{t}=s\_{t}+w\_{t}\\sim\\mathcal{N}(0,\\Phi\_{t}+\\Psi\_{w}) is independent of xtx\_{t}. Denote by Jn−J\_{n}^{-} the optimal control cost for system ([53](https://arxiv.org/html/2509.16146v1#S7.E53 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). According to the certainty equivalence principle, the optimal feedback gain depends only on the system dynamics matrices AA and BB, and is independent of the noise variance. Hence u^t\=−Kt​xt\\hat{u}\_{t}=-K\_{t}x\_{t} is the optimal control policy for system ([53](https://arxiv.org/html/2509.16146v1#S7.E53 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), where KtK\_{t} is the same as that defined in ([3](https://arxiv.org/html/2509.16146v1#S3.E3 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). It follows that

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Jn−\=1n​∑t\=1n+1𝔼​\[xt⊤​F​xt\]+1n​∑t\=1n𝔼​\[(Kt​xt)⊤​G​Kt​xt\]≤Jn′.\\displaystyle J^{-}\_{n}=\\frac{1}{n}\\sum\_{t=1}^{n+1}\\mathbb{E}\\left\[x^{\\top}\_{t}Fx\_{t}\\right\]+\\frac{1}{n}\\sum\_{t=1}^{n}\\mathbb{E}\\left\[(K\_{t}x\_{t})^{\\top}GK\_{t}x\_{t}\\right\]\\leq J^{\\prime}\_{n}. |     |

Now, applying the linear policy ut\=−Kt​xt+B†​stu\_{t}=-K\_{t}x\_{t}+B^{\\dagger}s\_{t} to the original system ([1](https://arxiv.org/html/2509.16146v1#S3.E1 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) yields the control cost

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Jn′′\\displaystyle J^{\\prime\\prime}\_{n} | \=1n​∑t\=1n+1𝔼​\[xt⊤​F​xt\]+1n​∑t\=1n𝔼​\[ut⊤​G​ut\]\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n+1}\\mathbb{E}\[x^{\\top}\_{t}Fx\_{t}\]+\\frac{1}{n}\\sum\_{t=1}^{n}\\mathbb{E}\[u^{\\top}\_{t}Gu\_{t}\] |     |
|     |     | \=1n​∑t\=1n+1𝔼​\[xt⊤​F​xt\]+1n​∑t\=1n𝔼​\[(Kt​xt)⊤​G​Kt​xt\]+1n​∑t\=1nTr​(G​B†​Φt​(B†)⊤)\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n+1}\\mathbb{E}\\left\[x^{\\top}\_{t}Fx\_{t}\\right\]+\\frac{1}{n}\\sum\_{t=1}^{n}\\mathbb{E}\\left\[(K\_{t}x\_{t})^{\\top}GK\_{t}x\_{t}\\right\]+\\frac{1}{n}\\sum\_{t=1}^{n}\\text{Tr}(GB^{\\dagger}\\Phi\_{t}(B^{\\dagger})^{\\top}) |     |
|     |     | \=Jn−+1n​∑t\=1nTr​(G​B†​Φt​(B†)⊤)\\displaystyle=J^{-}\_{n}+\\frac{1}{n}\\sum\_{t=1}^{n}\\text{Tr}(GB^{\\dagger}\\Phi\_{t}(B^{\\dagger})^{\\top}) |     |
|     |     | ≤Jn′+1n​∑t\=1nTr​(G​B†​Φt​(B†)⊤)\=Jn.\\displaystyle\\leq J^{\\prime}\_{n}+\\frac{1}{n}\\sum\_{t=1}^{n}\\text{Tr}(GB^{\\dagger}\\Phi\_{t}(B^{\\dagger})^{\\top})=J\_{n}. |     |

In addition, it is easy to see that

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | h​(B​(−Kt​xt+B†​st)+wt\|xt)\=h​(B​(θt​(xt)+B†​st)+wt\|xt)\=h​(st+wt).\\displaystyle h(B(-K\_{t}x\_{t}+B^{\\dagger}s\_{t})+w\_{t}\|x\_{t})=h(B(\\theta\_{t}(x\_{t})+B^{\\dagger}s\_{t})+w\_{t}\|x\_{t})=h(s\_{t}+w\_{t}). |     |

Therefore, as far as the optimization problem ([45](https://arxiv.org/html/2509.16146v1#S7.E45 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([46](https://arxiv.org/html/2509.16146v1#S7.E46 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) is concerned, both the policy ut\=θt​(xt)+B†​stu\_{t}=\\theta\_{t}(x\_{t})+B^{\\dagger}s\_{t} and the linear policy ut\=−Kt​xt+B†​stu\_{t}=-K\_{t}x\_{t}+B^{\\dagger}s\_{t} achieve the same objective value. However, the linear policy yields a smaller or equivalent constraint value. This implies that C¯n​(V)\\bar{C}\_{n}(V) defined in ([45](https://arxiv.org/html/2509.16146v1#S7.E45 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([46](https://arxiv.org/html/2509.16146v1#S7.E46 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) can be achieved by a linear policy of the form ut\=−Kt​xt+B†​st{u}\_{t}=-K\_{t}x\_{t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φt)s\_{t}\\sim\\mathcal{N}(0,\\Phi\_{t}) is independent of xtx\_{t}. The desired result is established.

Report issue for preceding element

∎

Report issue for preceding element

### VII-B Converse Proof of Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")

Report issue for preceding element

This section presents a converse proof for Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). As usual, we show that a sequence of (2n​Rn,n)(2^{nR\_{n}},n) codes with Pe(n)→0P\_{e}^{(n)}\\to 0 must have Rn≤C¯n​(V)+ϵnR\_{n}\\leq\\bar{C}\_{n}(V)+\\epsilon\_{n}, where ϵn→0\\epsilon\_{n}\\to 0 and C¯n​(V)→Cnor​(V)\\bar{C}\_{n}(V)\\to C\_{\\text{nor}}(V) as n→∞n\\to\\infty.

Report issue for preceding element

###### Proof:

Report issue for preceding element

By Fano’s inequality,

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | n​Rn\=H​(m)\\displaystyle nR\_{n}=H(m) | \=H​(m\|zn+1)+I​(m;zn+1)\\displaystyle=H(m\|z^{n+1})+I(m;z^{n+1}) |     |
|     |     | \=I​(m;zn+1)+n​ϵn,\\displaystyle=I(m;z^{n+1})+n\\epsilon\_{n}, |     |

where ϵn→0\\epsilon\_{n}\\to 0 if Pe(n)→0P\_{e}^{(n)}\\to 0. We thus define a series of optimization problems as follows: for n≥1n\\geq 1,

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | C^n​(V):=max\\displaystyle\\hat{C}\_{n}(V):=\\max\\ | 1n​I​(m;zn+1)\\displaystyle\\frac{1}{n}I(m;z^{n+1}) |     | (54) |
|     | s.t. | Jn≤J∗+V.\\displaystyle J\_{n}\\leq J^{\*}+V. |     | (55) |

The goal is to establish an upper bound for C^n​(V)\\hat{C}\_{n}(V), say C^n​(V)≤C¯n​(V)\\hat{C}\_{n}(V)\\leq\\bar{C}\_{n}(V), and show that C¯n​(V)\\bar{C}\_{n}(V) converges to Cnor​(V)C\_{\\text{nor}}(V) as n→∞n\\to\\infty. To this end, we first analyse the form of the optimal input for this optimization problem, as summarized below:

Report issue for preceding element

###### Lemma 7

Report issue for preceding element

For any n≥1n\\geq 1, C^n​(V)\\hat{C}\_{n}(V) defined in ([54](https://arxiv.org/html/2509.16146v1#S7.E54 "In VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([55](https://arxiv.org/html/2509.16146v1#S7.E55 "In VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) can be optimized by policies of the form ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φ)s\_{t}\\sim\\mathcal{N}(0,\\Phi) is independent of {wi}\\{w\_{i}\\} and {xi}\\{x\_{i}\\}.

Report issue for preceding element

###### Proof:

Report issue for preceding element

Proof of the lemma is presented immediately after the converse proof. ∎

Report issue for preceding element

Lemma [7](https://arxiv.org/html/2509.16146v1#Thmlemma7 "Lemma 7 ‣ VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") allows us to focus on the class of input policies taking the form ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, which could significantly simplify the problem. Let us first rewrite I​(m;zn+1)I(m;z^{n+1}) as follows

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | I​(m;zn+1)\\displaystyle I(m;z^{n+1}) | \=h​(zn+1)−h​(zn+1\|m)\\displaystyle=h(z^{n+1})-h(z^{n+1}\|m) |     |
|     |     | \=h​(z1)−h​(z1\|m)+∑t\=1n\[h​(zt+1\|zt)−h​(zt+1\|zt,m)\].\\displaystyle=h(z\_{1})-h(z\_{1}\|m)+\\sum\_{t=1}^{n}\[h(z\_{t+1}\|z^{t})-h(z\_{t+1}\|z^{t},m)\]. |     |

Note that h​(z1)−h​(z1|m)\=0h(z\_{1})-h(z\_{1}|m)=0 because z1z\_{1} and mm are independent. Under the policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, we have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | h​(zt+1\|zt)\\displaystyle h(z\_{t+1}\|z^{t}) | \=h​(D​(A¯​xt+st+wt)+vt+1\|zt)\\displaystyle=h(D(\\bar{A}x\_{t}+s\_{t}+w\_{t})+v\_{t+1}\|z^{t}) |     |
|     |     | \=h​(D​(A¯​(x^t\|t+σt)+st+wt)+vt+1\|zt,x^t\|t)\\displaystyle=h(D(\\bar{A}(\\hat{x}\_{t\|t}+\\sigma\_{t})+s\_{t}+w\_{t})+v\_{t+1}\|z^{t},\\hat{x}\_{t\|t}) |     |
|     |     | \=h​(D​(A¯​σt+st+wt)+vt+1),\\displaystyle=h(D(\\bar{A}\\sigma\_{t}+s\_{t}+w\_{t})+v\_{t+1}), |     |

where A¯\=A−B​K,x^t|t\=𝔼​\[xt|zt\]\\bar{A}=A-BK,\\hat{x}\_{t|t}=\\mathbb{E}\[x\_{t}|z^{t}\] and σt\=xt−x^t|t\\sigma\_{t}=x\_{t}-\\hat{x}\_{t|t}. Since st,wts\_{t},w\_{t} and vt+1v\_{t+1} are all independent of ztz^{t} and xtx\_{t}, they are also independent of σt\\sigma\_{t}. Also, we have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | h​(zt+1\|zt,m)\\displaystyle h(z\_{t+1}\|z^{t},m) | \=h​(D​(A¯​xt+st+wt)+vt+1\|zt,m)\\displaystyle=h(D(\\bar{A}x\_{t}+s\_{t}+w\_{t})+v\_{t+1}\|z^{t},m) |     |
|     |     | ≥h​(D​(A¯​xt+st+wt)+vt+1\|zt,st,m)\\displaystyle\\geq h(D(\\bar{A}x\_{t}+s\_{t}+w\_{t})+v\_{t+1}\|z^{t},s^{t},m) |     |
|     |     | \=h​(D​(A¯​(x¯t+σ¯t)+wt)+vt+1\|zt,st,x¯t,m)\\displaystyle=h(D(\\bar{A}(\\bar{x}\_{t}+\\bar{\\sigma}\_{t})+w\_{t})+v\_{t+1}\|z^{t},s^{t},\\bar{x}\_{t},m) |     |
|     |     | \=h​(D​(A¯​σ¯t+wt)+vt+1),\\displaystyle=h(D(\\bar{A}\\bar{\\sigma}\_{t}+w\_{t})+v\_{t+1}), |     |

where x¯t\=𝔼​\[xt|zt,st\]\\bar{x}\_{t}=\\mathbb{E}\[x\_{t}|z^{t},s^{t}\] and σ¯t\=xt−x¯t\\bar{\\sigma}\_{t}=x\_{t}-\\bar{x}\_{t}. Similarly, σ¯t\\bar{\\sigma}\_{t} is independent of wtw\_{t} and vt+1v\_{t+1}. Note that both x^t\\hat{x}\_{t} and x¯t\\bar{x}\_{t} can be computed by Kalman filter. Denote by Σt|t\\Sigma\_{t|t} and Ψt|t\\Psi\_{t|t} the covariance of σt\\sigma\_{t} and σ¯t\\bar{\\sigma}\_{t}, respectively. We thus have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | 1n​I​(m;zn+1)≤12​n​∑t\=1nlog⁡D​(A¯​Σt\|t​A¯⊤+Φ+Ψw)​D⊤+ΨvD​(A¯​Ψt\|t​A¯⊤+Ψw)​D⊤+Ψv.\\displaystyle\\frac{1}{n}I(m;z^{n+1})\\leq\\frac{1}{2n}\\sum\_{t=1}^{n}\\log\\frac{D(\\bar{A}\\Sigma\_{t\|t}\\bar{A}^{\\top}+\\Phi+\\Psi\_{w})D^{\\top}+\\Psi\_{v}}{D(\\bar{A}\\Psi\_{t\|t}\\bar{A}^{\\top}+\\Psi\_{w})D^{\\top}+\\Psi\_{v}}. |     | (56) |

We can thus define C¯n​(V)\\bar{C}\_{n}(V) as the maximization problem whose objective is the right-hand side of ([56](https://arxiv.org/html/2509.16146v1#S7.E56 "In VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), subject to the constraint in ([55](https://arxiv.org/html/2509.16146v1#S7.E55 "In VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). Under this construction, we have Rn≤C^n​(V)≤C¯n​(V)R\_{n}\\leq\\hat{C}\_{n}(V)\\leq\\bar{C}\_{n}(V) for all nn.

Report issue for preceding element

As we discussed in the achievability proof, as t→∞t\\to\\infty, Σt+1|t\=A¯​Σt|t​A¯⊤+Φ+Ψw\\Sigma\_{t+1|t}=\\bar{A}\\Sigma\_{t|t}\\bar{A}^{\\top}+\\Phi+\\Psi\_{w} converges to Σ{\\Sigma} given in ([16](https://arxiv.org/html/2509.16146v1#S5.E16 "In V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), and Ψt+1|t\=A¯​Ψt|t​A¯⊤+Ψw\\Psi\_{t+1|t}=\\bar{A}\\Psi\_{t|t}\\bar{A}^{\\top}+\\Psi\_{w} converges to Ψσ{\\Psi}\_{\\sigma} given in ([28](https://arxiv.org/html/2509.16146v1#S5.E28 "In V-C Achievability Proof ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). Consequently,

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | limn→∞1n​I​(m;zn+1)≤12​log⁡det(Ψv+D​Σ​D⊤)det(Ψv+D​Ψσ​D⊤).\\displaystyle\\lim\_{n\\to\\infty}\\frac{1}{n}I(m;z^{n+1})\\leq\\frac{1}{2}\\log\\frac{\\det(\\Psi\_{v}+D\\Sigma D^{\\top})}{\\det(\\Psi\_{v}+D\\Psi\_{\\sigma}D^{\\top})}. |     |

Then, as n→∞n\\to\\infty, C¯n​(V)\\bar{C}\_{n}(V) defined by ([54](https://arxiv.org/html/2509.16146v1#S7.E54 "In VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([55](https://arxiv.org/html/2509.16146v1#S7.E55 "In VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) converges to the following problem:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | C¯∞​(V):=maxΦ≥0\\displaystyle\\bar{C}\_{\\infty}(V):=\\max\_{\\Phi\\geq 0}\\ | 12​log⁡det(Ψv+D​Σ​D⊤)det(Ψv+D​Ψσ​D⊤)\\displaystyle\\frac{1}{2}\\log\\frac{\\det(\\Psi\_{v}+D\\Sigma D^{\\top})}{\\det(\\Psi\_{v}+D\\Psi\_{\\sigma}D^{\\top})} |     |
|     | s.t. | Tr​((Γ+G^)​Φ)≤V,\\displaystyle\\text{Tr}((\\Gamma+\\hat{G})\\Phi)\\leq V, |     |

where, by definition, Ψσ\\Psi\_{\\sigma} and Σ\\Sigma are given by

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Ψσ\\displaystyle\\Psi\_{\\sigma} | \=A¯​(Ψσ−Ψσ​D⊤​(D​Ψσ​D⊤+Ψv)−1​D​Ψσ)​A¯+Ψw,\\displaystyle=\\bar{A}(\\Psi\_{\\sigma}-\\Psi\_{\\sigma}D^{\\top}(D\\Psi\_{\\sigma}D^{\\top}+\\Psi\_{v})^{-1}D\\Psi\_{\\sigma})\\bar{A}+\\Psi\_{w}, |     |
|     | Σ\\displaystyle\\Sigma | \=A¯​(Σ−Σ​D⊤​(D​Σ​D⊤+Ψv)−1​D​Σ)​A¯⊤+Ψw+Φ.\\displaystyle=\\bar{A}\\left(\\Sigma-\\Sigma D^{\\top}(D\\Sigma D^{\\top}+\\Psi\_{v})^{-1}D\\Sigma\\right)\\bar{A}^{\\top}+\\Psi\_{w}+\\Phi. |     |

Note that Ψσ\\Psi\_{\\sigma} is independent of Φ\\Phi, while Σ\\Sigma is a function of Φ\\Phi. It follows immediately that C¯∞​(V)\=Cnr​(V)\\bar{C}\_{\\infty}(V)=C\_{\\text{nr}}(V). This completes the converse proof. ∎

Report issue for preceding element

Lemma [7](https://arxiv.org/html/2509.16146v1#Thmlemma7 "Lemma 7 ‣ VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") plays a central role in the converse proof presented above. Its proof is given below.

Report issue for preceding element

###### Proof:

Report issue for preceding element

We first decompose I​(m;zn+1)I(m;z^{n+1}) as follows:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | I​(m;zn+1)\\displaystyle I(m;z^{n+1}) | \=I​(m;xn+1)−I​(m;xn+1\|zn+1)\\displaystyle=I(m;x^{n+1})-I(m;x^{n+1}\|z^{n+1}) |     |
|     |     | \=h​(xn+1)−h​(xn+1\|m)−\[h​(xn+1\|zn+1)−h​(xn+1\|m,zn+1)\].\\displaystyle=h(x^{n+1})-h(x^{n+1}\|m)-\[h(x^{n+1}\|z^{n+1})-h(x^{n+1}\|m,z^{n+1})\]. |     |

It is easy to see that h​(xn+1|m)h(x^{n+1}|m) and h​(xn+1|zn+1)h(x^{n+1}|z^{n+1}) are independent of the input policy:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | h​(xn+1\|m)\\displaystyle h(x^{n+1}\|m) | \=h​(x1\|m)+∑t\=1nh​(xt+1\|xt,m)\\displaystyle=h(x\_{1}\|m)+\\sum\_{t=1}^{n}h(x\_{t+1}\|x^{t},m) |     |
|     |     | \=h​(x1)+∑t\=1nh​(A​xt+B​ut+wt\|xt,m,ut)\\displaystyle=h(x\_{1})+\\sum\_{t=1}^{n}h(Ax\_{t}+Bu\_{t}+w\_{t}\|x^{t},m,u\_{t}) |     |
|     |     | \=h​(x1)+∑t\=1nh​(wt).\\displaystyle=h(x\_{1})+\\sum\_{t=1}^{n}h(w\_{t}). |     |

The second equality holds because utu\_{t} is a function of xtx^{t} and mm. For h​(xn+1|zn+1)h(x^{n+1}|z^{n+1}), an application of the chain rule yields

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | h​(xn+1\|zn+1)\\displaystyle h(x^{n+1}\|z^{n+1}) | \=h​(x1\|zn+1)+∑t\=1nh​(xt+1\|xt,zn+1)\\displaystyle=h(x\_{1}\|z^{n+1})+\\sum\_{t=1}^{n}h(x\_{t+1}\|x^{t},z^{n+1}) |     |
|     |     | \=h​(D−1​(z1−v1)\|zn+1)+∑t\=1nh​(D−1​(zt+1−vt+1)\|xt,zn+1)\\displaystyle=h(D^{-1}(z\_{1}-v\_{1})\|z^{n+1})+\\sum\_{t=1}^{n}h(D^{-1}(z\_{t+1}-v\_{t+1})\|x^{t},z^{n+1}) |     |
|     |     | \=∑t\=1n+1h​(D−1​vt).\\displaystyle=\\sum\_{t=1}^{n+1}h(D^{-1}v\_{t}). |     |

We proceed to show that h​(xn+1|zn+1,m)h(x^{n+1}|z^{n+1},m) is also independent of the input. An application of the chain rule yields

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | h​(xn+1\|zn+1,m)\=h​(x1\|zn+1,m)+∑t\=1nh​(xt+1\|xt,zn+1,m).\\displaystyle h(x^{n+1}\|z^{n+1},m)=h(x\_{1}\|z^{n+1},m)+\\sum\_{t=1}^{n}h(x\_{t+1}\|x^{t},z^{n+1},m). |     |

Clearly h​(x1|zn+1,m)h(x\_{1}|z^{n+1},m) is independent of the input policy. For the remaining terms, note that both p​(xt+1|xt,m)p(x\_{t+1}|x^{t},m) and p​(xt+1|zn+1)p(x\_{t+1}|z^{n+1}) are Gaussian with covariance matrices that are constants. In particular, we have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | p​(xt+1\|xt,m)\\displaystyle p(x\_{t+1}\|x^{t},m) | \=𝒩​(xt+1;A​xt+B​ut,Ψw),\\displaystyle=\\mathcal{N}(x\_{t+1};Ax\_{t}+Bu\_{t},\\Psi\_{w}), |     |
|     | p​(xt+1\|zn+1)\\displaystyle p(x\_{t+1}\|z^{n+1}) | \=𝒩​(xt+1;D−1​zt+1,D−1​Ψv​(D−1)⊤).\\displaystyle=\\mathcal{N}(x^{t+1};D^{-1}z\_{t+1},D^{-1}\\Psi\_{v}(D^{-1})^{\\top}). |     |

From the standard Gaussian fusion rule,

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | p​(xt+1\|zn+1,xt,m)\=𝒩​(xt+1;μf,Σf)∝p​(xt+1\|xt,m)​p​(xt+1\|zn+1),\\displaystyle p(x\_{t+1}\|z^{n+1},x^{t},m)=\\mathcal{N}(x^{t+1};\\mu\_{f},\\Sigma\_{f})\\propto p(x\_{t+1}\|x^{t},m)p(x\_{t+1}\|z^{n+1}), |     |

where Σf−1\=Ψw−1+\[D−1​Ψv​(D−1)⊤\]−1\\Sigma\_{f}^{-1}=\\Psi\_{w}^{-1}+\[D^{-1}\\Psi\_{v}(D^{-1})^{\\top}\]^{-1}. Since Σf\\Sigma\_{f} a constant and independent of the input policy, h​(xt+1|xt,zn+1,m)h(x\_{t+1}|x^{t},z^{n+1},m) is also independent of the input policy for all tt, implying that h​(xn+1|zn+1,m)h(x^{n+1}|z^{n+1},m) is independent of the input policy. We thus have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | arg⁡maxp​(un)⁡I​(m;zn+1)\=arg⁡maxp​(un)⁡h​(xn+1).\\displaystyle\\arg\\max\_{p(u^{n})}I(m;z^{n+1})=\\arg\\max\_{p(u^{n})}h(x^{n+1}). |     | (57) |

Now,

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | maxp​(un)⁡h​(xn+1)\\displaystyle\\max\_{p(u^{n})}h(x^{n+1}) | \=maxp​(un)⁡h​(x1)+∑t\=1nh​(A​xt+B​ut+wt\|xt)\\displaystyle=\\max\_{p(u^{n})}h(x\_{1})+\\sum\_{t=1}^{n}h(Ax\_{t}+Bu\_{t}+w\_{t}\|x^{t}) |     | (58) |
|     |     | ≤maxp​(un)⁡h​(x1)+∑t\=1nh​(B​ut+wt\|xt).\\displaystyle\\leq\\max\_{p(u^{n})}h(x\_{1})+\\sum\_{t=1}^{n}h(Bu\_{t}+w\_{t}\|x\_{t}). |     | (59) |

The inequality holds with equality if the objective h​(x1)+∑t\=1nh​(B​ut+wt|xt)h(x\_{1})+\\sum\_{t=1}^{n}h(Bu\_{t}+w\_{t}|x\_{t}) is maximized by a Markov policy (i.e., when utu\_{t} is conditionally independent of xt−1x^{t-1} given xtx\_{t}). This condition is indeed satisfied, as shown in the converse proof of Theorem [1](https://arxiv.org/html/2509.16146v1#Thmtheorem1 "Theorem 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). In particular, Lemma [6](https://arxiv.org/html/2509.16146v1#Thmlemma6 "Lemma 6 ‣ VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") implies that that the objective in ([59](https://arxiv.org/html/2509.16146v1#S7.E59 "In VII-B Converse Proof of Theorem 3 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), subject to the constraint Jn≤J∗+VJ\_{n}\\leq J^{\*}+V, is maximized by the stationary Markov policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Φ)s\_{t}\\sim\\mathcal{N}(0,\\Phi) is independent of xtx\_{t}. We thus conclude that, under the constraint Jn≤J∗+VJ\_{n}\\leq J^{\*}+V, I​(m;zn+1)I(m;z^{n+1}) is also maximized by the policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}.

Report issue for preceding element

∎

Report issue for preceding element

### VII-C Proof of Theorem [4](https://arxiv.org/html/2509.16146v1#Thmtheorem4 "Theorem 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")

Report issue for preceding element

Thi section presents the proofs of Theorem [4](https://arxiv.org/html/2509.16146v1#Thmtheorem4 "Theorem 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") and Lemma [5](https://arxiv.org/html/2509.16146v1#Thmlemma5 "Lemma 5 (Channel Translation) ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). The lower bound Cno-lb​(V)C\_{\\text{no-lb}}(V) in Theorem [4](https://arxiv.org/html/2509.16146v1#Thmtheorem4 "Theorem 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") corresponds to the capacity of the Gaussian channel stated in Lemma [5](https://arxiv.org/html/2509.16146v1#Thmlemma5 "Lemma 5 (Channel Translation) ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), subject to the control constraint J≤J∗∗+VJ\\leq J^{\*\*}+V. According to Lemma [4](https://arxiv.org/html/2509.16146v1#Thmlemma4 "Lemma 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), the control constraint is equivalent to an input power constraint Tr​(Φ​(Γ+G^))≤V\\text{Tr}(\\Phi(\\Gamma+\\hat{G}))\\leq V. Before proving Theorem [4](https://arxiv.org/html/2509.16146v1#Thmtheorem4 "Theorem 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), we first establish Lemma [5](https://arxiv.org/html/2509.16146v1#Thmlemma5 "Lemma 5 (Channel Translation) ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), as some arguments in this proof are useful in the subsequent derivations.

Report issue for preceding element

###### Proof:

Report issue for preceding element

Since we have fixed the input policy to be ut\=−K​xˇt|t+B†​stu\_{t}=-K\\check{x}\_{t|t}+B^{\\dagger}s\_{t}, the key question is how the receiver can construct a channel output from its observations without losing any information about the input. We begin with the linear system defined in ([41](https://arxiv.org/html/2509.16146v1#S6.E41 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))–([42](https://arxiv.org/html/2509.16146v1#S6.E42 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), which provides an equivalent representation of the system from the receiver’s perspective. For ease of reading, we restate the system equations ([41](https://arxiv.org/html/2509.16146v1#S6.E41 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))–([42](https://arxiv.org/html/2509.16146v1#S6.E42 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) below:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | ρt+1\\displaystyle\\rho\_{t+1} | \=Aρ​ρt+s¯t+w¯t+q¯t+1,\\displaystyle=A\_{\\rho}\\rho\_{t}+\\bar{s}\_{t}+\\bar{w}\_{t}+\\bar{q}\_{t+1}, |     |
|     | zt\\displaystyle z\_{t} | \=Dρ​ρt+vt.\\displaystyle=D\_{\\rho}\\rho\_{t}+v\_{t}. |     |

In this new system, estimates of state ρ^t|t\=𝔼​\[ρt|zt\]\\hat{\\rho}\_{t|t}=\\mathbb{E}\[\\rho\_{t}|z^{t}\] and ρ^t|t+1\=𝔼​\[ρt|zt+1\]\\hat{\\rho}\_{t|t+1}=\\mathbb{E}\[\\rho\_{t}|z^{t+1}\] can be computed using the standard Kalman filter and smoother, respectively. In particular, in the prediction stage, the Kalman filter computes ρ^t+1|t\=Aρ​ρ^t|t\\hat{\\rho}\_{t+1|t}=A\_{\\rho}\\hat{\\rho}\_{t|t} and the associated estimation error covariance matrix

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Σt+1\|t\=Aρ​Σt\|t​Aρ⊤+Φ¯+Ψw¯+Ψq¯.\\displaystyle\\Sigma\_{t+1\|t}=A\_{\\rho}\\Sigma\_{t\|t}A\_{\\rho}^{\\top}+\\bar{\\Phi}+\\Psi\_{\\bar{w}}+\\Psi\_{\\bar{q}}. |     |

Upon receiving the new observation zt+1z\_{t+1}, the Kalman filter updates the estimate as follows:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | ρ^t+1\|t+1\=ρ^t+1\|t+Lt+1​(zt+1−Dρ​ρ^t+1\|t),\\displaystyle\\hat{\\rho}\_{t+1\|t+1}=\\hat{\\rho}\_{t+1\|t}+L\_{t+1}(z\_{t+1}-D\_{\\rho}\\hat{\\rho}\_{t+1\|t}), |     |

where L\_t+1 = Σ\_t+1—t D\_ρ^⊤(D\_ρΣ\_t+1—tD\_ρ^⊤+ Ψ\_v )^-1. The associated estimation error is given by Σ\_t+1—t+1= (I-L\_t+1D\_ρ)Σ\_t+1—t. As t→∞t\\to\\infty, Σt+1|t\\Sigma\_{t+1|t} converges to Σρ\\Sigma\_{\\rho}, which is determined by the DARE:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Σρ\=Aρ​(Σρ−Σρ​Dρ⊤​(Dρ​Σρ​Dρ⊤+Ψv)−1​Dρ​Σρ)​Aρ⊤+Φ¯+Ψw¯+Ψq¯.\\displaystyle\\Sigma\_{\\rho}={A}\_{\\rho}\\left(\\Sigma\_{\\rho}-\\Sigma\_{\\rho}D\_{\\rho}^{\\top}(D\_{\\rho}\\Sigma\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})^{-1}D\_{\\rho}\\Sigma\_{\\rho}\\right){A}\_{\\rho}^{\\top}+\\bar{\\Phi}+\\Psi\_{\\bar{w}}+\\Psi\_{\\bar{q}}. |     | (60) |

Accordingly,

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Lρ≜limt→∞Lt\=Σρ​Dρ⊤​(Dρ​Σρ​Dρ⊤+Ψv)−1,\\displaystyle L\_{\\rho}\\triangleq\\lim\_{t\\to\\infty}L\_{t}=\\Sigma\_{\\rho}D\_{\\rho}^{\\top}(D\_{\\rho}\\Sigma\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})^{-1}, |     |
|     | Σ~ρ≜limt→∞Σt\|t\=(I−Lρ​Dρ)​Σρ.\\displaystyle\\tilde{\\Sigma}\_{\\rho}\\triangleq\\lim\_{t\\to\\infty}\\Sigma\_{t\|t}=(I-L\_{\\rho}D\_{\\rho})\\Sigma\_{\\rho}. |     |

As in Section [V-B](https://arxiv.org/html/2509.16146v1#S5.SS2 "V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), the smoothing problem can be solved by the Kalman smoother, which computes

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | ρ^t\|t+1\=ρ^t\|t+Qt​(ρ^t+1\|t+1−Aρ​ρ^t\|t),\\displaystyle\\hat{\\rho}\_{t\|t+1}=\\hat{\\rho}\_{t\|t}+Q\_{t}\\left(\\hat{\\rho}\_{t+1\|t+1}-{A}\_{\\rho}\\hat{\\rho}\_{t\|t}\\right), |     | (61) |

where the smooth gain Qt\=Σt|t​Aρ⊤​Σt+1|t−1Q\_{t}=\\Sigma\_{t|t}{A}\_{\\rho}^{\\top}\\Sigma\_{t+1|t}^{-1}. Since Σt+1|t\\Sigma\_{t+1|t} and Σt|t\\Sigma\_{t|t} converge, it is clear that QtQ\_{t} also converges as t→∞t\\to\\infty:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Qρ≜limt→∞Qt\=(I−Lρ​Dρ)​Σρ​Aρ⊤​Σρ−1.\\displaystyle Q\_{\\rho}\\triangleq\\lim\_{t\\to\\infty}Q\_{t}=(I-L\_{\\rho}D\_{\\rho})\\Sigma\_{\\rho}{A}\_{\\rho}^{\\top}\\Sigma\_{\\rho}^{-1}. |     | (62) |

Note that

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Σt+1\|t\=Cov​(ρt−ρ^t+1\|t)\=\[Cov​(xt−x^t+1\|t)𝔼​\[(xt−x^t+1\|t)​(et−e^t+1\|t)⊤\]𝔼​\[(et−e^t+1\|t)​(xt−x^t+1\|t)⊤\]Cov​(et−e^t+1\|t)\].\\displaystyle\\Sigma\_{t+1\|t}=\\text{Cov}(\\rho\_{t}-\\hat{\\rho}\_{t+1\|t})=\\begin{bmatrix}\\text{Cov}(x\_{t}-\\hat{x}\_{t+1\|t})&\\mathbb{E}\[(x\_{t}-\\hat{x}\_{t+1\|t})(e\_{t}-\\hat{e}\_{t+1\|t})^{\\top}\]\\\\ \\mathbb{E}\[(e\_{t}-\\hat{e}\_{t+1\|t})(x\_{t}-\\hat{x}\_{t+1\|t})^{\\top}\]&\\text{Cov}(e\_{t}-\\hat{e}\_{t+1\|t})\\end{bmatrix}. |     |

We thus can write Σρ\\Sigma\_{\\rho} as a block matrix as follows:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Σρ≜\[Σ11Σ12Σ21Σ22\],\\displaystyle\\Sigma\_{\\rho}\\triangleq\\begin{bmatrix}\\Sigma\_{11}&\\Sigma\_{12}\\\\ \\Sigma\_{21}&\\Sigma\_{22}\\end{bmatrix}, |     |

where Σ11\=Cov​(xt−x^t+1|t)∈ℝd1×d1\\Sigma\_{11}=\\text{Cov}(x\_{t}-\\hat{x}\_{t+1|t})\\in\\mathbb{R}^{d\_{1}\\times d\_{1}} and Σ22\=Cov​(et−e^t+1|t)∈ℝd1×d1\\Sigma\_{22}=\\text{Cov}(e\_{t}-\\hat{e}\_{t+1|t})\\in\\mathbb{R}^{d\_{1}\\times d\_{1}} are both positive definite. As a result, we can also write

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Lρ\=\[Lρ​1Lρ​2\]≜\[Σ11​D⊤​(D​Σ11​D⊤+Ψv)−1Σ21​D⊤​(D​Σ11​D⊤+Ψv)−1\],\\displaystyle L\_{\\rho}=\\begin{bmatrix}L\_{\\rho 1}\\\\ L\_{\\rho 2}\\end{bmatrix}\\triangleq\\begin{bmatrix}\\Sigma\_{11}D^{\\top}(D\\Sigma\_{11}D^{\\top}+\\Psi\_{v})^{-1}\\\\ \\Sigma\_{21}D^{\\top}(D\\Sigma\_{11}D^{\\top}+\\Psi\_{v})^{-1}\\end{bmatrix}, |     | (63) |

and

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Σ~ρ\=\[(I−Lρ​1​D)​Σ11(I−Lρ​1​D)​Σ12(I−Lρ​2​D)​Σ21(I−Lρ​2​D)​Σ22\].\\displaystyle\\tilde{\\Sigma}\_{\\rho}=\\begin{bmatrix}(I-L\_{\\rho 1}D)\\Sigma\_{11}&(I-L\_{\\rho 1}D)\\Sigma\_{12}\\\\ (I-L\_{\\rho 2}D)\\Sigma\_{21}&(I-L\_{\\rho 2}D)\\Sigma\_{22}\\end{bmatrix}. |     | (64) |

Now, let us define

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | yt≜ρt+1−Aρ​ρt\=s¯t+w¯t+q¯t+1\=\[st+wt(I−Lc​Dc)​wt−Lc​qt+1\].\\displaystyle{y}\_{t}\\triangleq\\rho\_{t+1}-A\_{\\rho}\\rho\_{t}=\\bar{s}\_{t}+\\bar{w}\_{t}+\\bar{q}\_{t+1}=\\begin{bmatrix}s\_{t}+w\_{t}\\\\ (I-L\_{c}D\_{c})w\_{t}-L\_{c}q\_{t+1}\\end{bmatrix}. |     |

Then yty\_{t} can be estimated from zt+1z^{t+1} using the Kalman filter and smoother defined above, that is,

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | y^t≜𝔼​\[yt\|zt+1\]\\displaystyle\\hat{y}\_{t}\\triangleq\\mathbb{E}\[{y}\_{t}\|z^{t+1}\] | \=ρ^t+1\|t+1−Aρ​ρ^t\|t+1\\displaystyle=\\hat{\\rho}\_{t+1\|t+1}-A\_{\\rho}\\hat{\\rho}\_{t\|t+1} |     |
|     |     | \=(I−Aρ​Qρ)​Lρ​(zt+1−Dρ​Aρ​ρ^t\|t).\\displaystyle=(I-A\_{\\rho}Q\_{\\rho})L\_{\\rho}(z\_{t+1}-D\_{\\rho}A\_{\\rho}\\hat{\\rho}\_{t\|t}). |     | (65) |

Denote by ηt\=yt−y^t\\eta\_{t}={y}\_{t}-\\hat{y}\_{t} the estimation error. Then we obtain an equivalent channel

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | y^t\=s¯t+w¯t+q¯t+1−ηt.\\displaystyle\\hat{y}\_{t}=\\bar{s}\_{t}+\\bar{w}\_{t}+\\bar{q}\_{t+1}-\\eta\_{t}. |     |

The following lemma can be derived using the same argument as in Lemma [3](https://arxiv.org/html/2509.16146v1#Thmlemma3 "Lemma 3 ‣ V-C Achievability Proof ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), we thus present it without proof.

Report issue for preceding element

###### Lemma 8

Report issue for preceding element

Let τt\=ρt−ρ^t|t\\tau\_{t}=\\rho\_{t}-\\hat{\\rho}\_{t|t} denote the estimation error of the Kalman filter for the system defined in ([41](https://arxiv.org/html/2509.16146v1#S6.E41 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([42](https://arxiv.org/html/2509.16146v1#S6.E42 "In VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). Then {τt:t≥1}\\{\\tau\_{t}:t\\geq 1\\} forms a Markov chain that evolves according to

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | τt+1\=(I−Lρ​Dρ)​Aρ​τt−Lρ​vt+1+(I−Lρ​Dρ)​(s¯t+w¯t+q¯t+1).\\displaystyle\\tau\_{t+1}=(I-L\_{\\rho}D\_{\\rho})A\_{\\rho}\\tau\_{t}-L\_{\\rho}v\_{t+1}+(I-L\_{\\rho}D\_{\\rho})(\\bar{s}\_{t}+\\bar{w}\_{t}+\\bar{q}\_{t+1}). |     |

Moreover, for any t≥1t\\geq 1,

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | y^t\=(I−Aρ​Qρ)​Lρ​\[Dρ​(s¯t+w¯t+q¯t+1+Aρ​τt)+vt+1\].\\displaystyle\\hat{y}\_{t}=(I-A\_{\\rho}Q\_{\\rho})L\_{\\rho}\[D\_{\\rho}(\\bar{s}\_{t}+\\bar{w}\_{t}+\\bar{q}\_{t+1}+A\_{\\rho}\\tau\_{t})+v\_{t+1}\]. |     | (66) |

Lemma [8](https://arxiv.org/html/2509.16146v1#Thmlemma8 "Lemma 8 ‣ VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") shows that, under the policy ut\=−K​xˇt|t+B†​stu\_{t}=-K\\check{x}\_{t|t}+B^{\\dagger}s\_{t}, the implicit channel can be equivalently translated into a Gaussian channel, as defined in ([66](https://arxiv.org/html/2509.16146v1#S7.E66 "In Lemma 8 ‣ VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). This channel can be further simplified by noting that: (i) from ([63](https://arxiv.org/html/2509.16146v1#S7.E63 "In VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), Lρ∈ℝ2​d1×d1L\_{\\rho}\\in\\mathbb{R}^{2d\_{1}\\times d\_{1}} has rank d1d\_{1} (i.e., full rank); and (ii) using the same argument as in ([V-C](https://arxiv.org/html/2509.16146v1#S5.Ex35 "V-C Achievability Proof ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), (I−Aρ​Qρ)(I-A\_{\\rho}Q\_{\\rho}) is invertible. As a result, the channel in ([66](https://arxiv.org/html/2509.16146v1#S7.E66 "In Lemma 8 ‣ VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) is equivalent to the following:

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | y¯t≜Lρ†​(I−Aρ​Qρ)−1​y^t\\displaystyle\\bar{y}\_{t}\\triangleq L\_{\\rho}^{\\dagger}(I-A\_{\\rho}Q\_{\\rho})^{-1}\\hat{y}\_{t} | \=Dρ​(s¯t+w¯t+q¯t+1+Aρ​τt)+vt+1,\\displaystyle=D\_{\\rho}(\\bar{s}\_{t}+\\bar{w}\_{t}+\\bar{q}\_{t+1}+A\_{\\rho}\\tau\_{t})+v\_{t+1}, |     |
|     |     | \=D​(st+wt)+Dρ​Aρ​τt+vt+1,\\displaystyle=D(s\_{t}+w\_{t})+D\_{\\rho}A\_{\\rho}\\tau\_{t}+v\_{t+1}, |     | (67) |

where Lρ†\=(Lρ⊤​Lρ)−1​Lρ⊤L\_{\\rho}^{\\dagger}=(L\_{\\rho}^{\\top}L\_{\\rho})^{-1}L\_{\\rho}^{\\top} is the left inverse of LρL\_{\\rho}.

Report issue for preceding element

As in the achievability proof of Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), we can also show that this translation does not loss any information about sns^{n}. That is,

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | I​(sn;zn+1,y¯n)\=I​(sn;y¯n)\=I​(sn;zn+1).\\displaystyle I(s^{n};z^{n+1},\\bar{y}^{n})=I(s^{n};\\bar{y}^{n})=I(s^{n};z^{n+1}). |     | (68) |

Since I​(sn;y¯n|zn+1)\=0I(s^{n};\\bar{y}^{n}|z^{n+1})=0, the key step is to show

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | I​(sn;zn+1\|y¯n)\=I​(sn;z1\|y¯n)+∑t\=1nI​(sn;zt+1\|zt,y¯n)\=0.\\displaystyle I(s^{n};z^{n+1}\|\\bar{y}^{n})=I(s^{n};z\_{1}\|\\bar{y}^{n})+\\sum\_{t=1}^{n}I(s^{n};z\_{t+1}\|z^{t},\\bar{y}^{n})=0. |     |

This holds because ([VII-C](https://arxiv.org/html/2509.16146v1#S7.Ex141 "VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) suggests that y¯t\=zt+1−Dρ​Aρ​ρ^t|t\\bar{y}\_{t}=z\_{t+1}-D\_{\\rho}A\_{\\rho}\\hat{\\rho}\_{t|t}, meaning that zt+1z\_{t+1} can be determined by ztz^{t} and y¯t\\bar{y}\_{t}. This completes the proof. ∎

Report issue for preceding element

Now we are ready to prove Theorem [4](https://arxiv.org/html/2509.16146v1#Thmtheorem4 "Theorem 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems").

Report issue for preceding element

###### Proof:

Report issue for preceding element

Lemma [5](https://arxiv.org/html/2509.16146v1#Thmlemma5 "Lemma 5 (Channel Translation) ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") establishes that, when the input policy is restricted to the form ut\=−K​xˇt|t+B†​stu\_{t}=-K\\check{x}\_{t|t}+B^{\\dagger}s\_{t}, the implicit channel becomes equivalent to a Gaussian channel. Therefore, the capacity of this Gaussian channel serves as a lower bound for the capacity of the implicit channel. In this proof, we derive the capacity of the channel in ([VII-C](https://arxiv.org/html/2509.16146v1#S7.Ex144 "VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). The derivation closely follows the same reasoning as in the achievability proof of Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), and thus some details are omitted for brevity. First, let βt\=D​wt+Dρ​Aρ​τt+vt+1\\beta\_{t}=Dw\_{t}+D\_{\\rho}A\_{\\rho}\\tau\_{t}+v\_{t+1}, then according to ([VII-C](https://arxiv.org/html/2509.16146v1#S7.Ex144 "VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and ([68](https://arxiv.org/html/2509.16146v1#S7.E68 "In VII-C Proof of Theorem 4 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")),

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | 1n​I​(sn;y¯n)\=1n​I​(sn;y¯n,zn+1)\\displaystyle\\frac{1}{n}I({s}^{n};\\bar{y}^{n})=\\frac{1}{n}I({s}^{n};\\bar{y}^{n},z^{n+1}) | \=1n​∑t\=1n\[h​(y¯t\|zt)−h​(βt\|zt,sn)\]\\displaystyle=\\frac{1}{n}\\sum\_{t=1}^{n}\\left\[h(\\bar{y}\_{t}\|z^{t})-h({\\beta}\_{t}\|z^{t},{s}^{n})\\right\] |     |
|     |     | \=12​n​∑t\=1nlog​det(Cov​(y¯t−y~t))−log​det(Cov​(βt−β~t)),\\displaystyle=\\frac{1}{2n}\\sum\_{t=1}^{n}\\log\\det({\\text{Cov}}(\\bar{y}\_{t}-{\\tilde{y}}\_{t}))-\\log\\det({\\text{Cov}}({\\beta}\_{t}-{\\tilde{\\beta}}\_{t})), |     |

where y~t≜𝔼​\[y¯t|zt\]\\tilde{y}\_{t}\\triangleq\\mathbb{E}\[\\bar{y}\_{t}|z^{t}\] and β~t≜𝔼​\[βt|zt,sn\]\\tilde{\\beta}\_{t}\\triangleq\\mathbb{E}\[{\\beta}\_{t}|z^{t},{s}^{n}\]. Without loss of optimality, in the remainder of this proof, we assume all the Kalman filters are already in the steady-state; hence each estimation error covariance has converged to its steady-state value. Since ρ^t|t\=𝔼​\[ρt|zt\]\\hat{\\rho}\_{t|t}=\\mathbb{E}\[\\rho\_{t}|z^{t}\] is a function of ztz^{t}, we have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | y~t\=𝔼​\[y¯t\|zt\]\\displaystyle\\tilde{y}\_{t}=\\mathbb{E}\[\\bar{y}\_{t}\|z^{t}\] | \=𝔼​\[Dρ​(s¯t+w¯t+q¯t+1+Aρ​τt)+vt+1\|zt\]\\displaystyle=\\mathbb{E}\[D\_{\\rho}(\\bar{s}\_{t}+\\bar{w}\_{t}+\\bar{q}\_{t+1}+A\_{\\rho}\\tau\_{t})+v\_{t+1}\|z^{t}\] |     |
|     |     | \=Dρ​Aρ​𝔼​\[(ρt−ρ^t\|t)\|zt\]\=0.\\displaystyle=D\_{\\rho}A\_{\\rho}\\mathbb{E}\[(\\rho\_{t}-\\hat{\\rho}\_{t\|t})\|z^{t}\]=0. |     |

It follows that

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Cov​(y¯t−y~t)\=Cov​(y¯t)\\displaystyle{\\text{Cov}}(\\bar{y}\_{t}-{\\tilde{y}}\_{t})=\\text{Cov}(\\bar{y}\_{t}) | \=\[Dρ​(Φ¯+Ψw¯+Ψq¯+Aρ​Σ~ρ​Aρ⊤)​Dρ⊤+Ψv\]\\displaystyle=\[D\_{\\rho}(\\bar{\\Phi}+\\Psi\_{\\bar{w}}+\\Psi\_{\\bar{q}}+A\_{\\rho}\\tilde{\\Sigma}\_{\\rho}A\_{\\rho}^{\\top})D\_{\\rho}^{\\top}+\\Psi\_{v}\] |     |
|     |     | \=Dρ​Σρ​Dρ⊤+Ψv.\\displaystyle=D\_{\\rho}\\Sigma\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v}. |     |

Similarly,

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | β~t\=𝔼​\[βt\|zt,sn\]\=Dρ​Aρ​(𝔼​\[ρt\|zt,s¯n\]−ρ^t\|t).\\displaystyle\\tilde{\\beta}\_{t}=\\mathbb{E}\[{\\beta}\_{t}\|z^{t},{s}^{n}\]=D\_{\\rho}A\_{\\rho}(\\mathbb{E}\[\\rho\_{t}\|z^{t},\\bar{s}^{n}\]-\\hat{\\rho}\_{t\|t}). |     |

Let ρ¯t|t\=𝔼​\[ρt|zt,s¯n\]\=𝔼​\[ρt|zt,s¯t−1\]\\bar{\\rho}\_{t|t}=\\mathbb{E}\[\\rho\_{t}|z^{t},\\bar{s}^{n}\]=\\mathbb{E}\[\\rho\_{t}|z^{t},\\bar{s}^{t-1}\] and σ¯t\=ρt−ρ¯t|t\\bar{\\sigma}\_{t}=\\rho\_{t}-\\bar{\\rho}\_{t|t}. Then

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | Cov​(βt−β~t)\\displaystyle{\\text{Cov}}({\\beta}\_{t}-{\\tilde{\\beta}}\_{t}) | \=Cov​(Dρ​(w¯t+q¯t+1+Aρ​(ρt−ρ^t\|t−ρ¯t\|t+ρ^t\|t))+vt+1)\\displaystyle=\\text{Cov}(D\_{\\rho}(\\bar{w}\_{t}+\\bar{q}\_{t+1}+A\_{\\rho}(\\rho\_{t}-\\hat{\\rho}\_{t\|t}-\\bar{\\rho}\_{t\|t}+\\hat{\\rho}\_{t\|t}))+v\_{t+1}) |     |
|     |     | \=Cov​(Dρ​(w¯t+q¯t+1+Aρ​σ¯t)+vt+1)\\displaystyle=\\text{Cov}(D\_{\\rho}(\\bar{w}\_{t}+\\bar{q}\_{t+1}+A\_{\\rho}\\bar{\\sigma}\_{t})+v\_{t+1}) |     |
|     |     | \=Dρ​Ψρ​Dρ⊤+Ψv,\\displaystyle=D\_{\\rho}\\Psi\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v}, |     |

where Ψρ\\Psi\_{\\rho} is the steady-state value of the estimation error covariance Cov​(ρt−𝔼​\[ρt|zt−1,s¯t−1\])\\text{Cov}(\\rho\_{t}-\\mathbb{E}\[\\rho\_{t}|z^{t-1},\\bar{s}^{t-1}\]), which is determined by the following DARE:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Ψρ\=Aρ​(Ψρ−Ψρ​Dρ⊤​(Dρ​Ψρ​Dρ⊤+Ψv)−1​Dρ​Ψρ)​Aρ⊤+Ψw¯+Ψq¯.\\displaystyle\\Psi\_{\\rho}={A}\_{\\rho}\\left(\\Psi\_{\\rho}-\\Psi\_{\\rho}D\_{\\rho}^{\\top}(D\_{\\rho}\\Psi\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})^{-1}D\_{\\rho}\\Psi\_{\\rho}\\right){A}\_{\\rho}^{\\top}+\\Psi\_{\\bar{w}}+\\Psi\_{\\bar{q}}. |     |

Since Lemma [4](https://arxiv.org/html/2509.16146v1#Thmlemma4 "Lemma 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") has established that the control constraint is equivalent to an input power constraint, it is well-know that the capacity of the Gaussian channel y¯t\=D​st+βt\\bar{y}\_{t}=Ds\_{t}+\\beta\_{t} is given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | maxp​(sn)​limn→∞1n​I​(sn;y¯n)\=maxΦ⪰0⁡12​log⁡det(Dρ​Σρ​Dρ⊤+Ψv)det(Dρ​Ψρ​Dρ⊤+Ψv),\\displaystyle\\max\_{p(s^{n})}\\lim\_{n\\to\\infty}\\frac{1}{n}I(s^{n};\\bar{y}^{n})=\\max\_{\\Phi\\succeq 0}\\frac{1}{2}\\log\\frac{\\det(D\_{\\rho}\\Sigma\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})}{\\det(D\_{\\rho}\\Psi\_{\\rho}D\_{\\rho}^{\\top}+\\Psi\_{v})}, |     |

subject to the input power constraint Tr​((Γ+G^)​Φ)\\text{Tr}((\\Gamma+\\hat{G})\\Phi). The desired results follow immediately.

Report issue for preceding element

∎

Report issue for preceding element

## VIII Conclusion and Future Work

Report issue for preceding element

In this paper, we studied implicit communication in LQG control systems. By defining the control system as an implicit communication channel, we demonstrated that information can be transmitted from the controller to a receiver that observes the system state—without using explicit communication channels—while simultaneously maintaining the control cost within a given level. Specifically, information is encoded into the control inputs and then be decoded by the receiver from noiseless or noisy observations of the state. We formulated the implicit communication problem as a co-design of control and channel coding, and formalized the trade-off between control and communication as the implicit channel capacity, subject to a constraint on control performance. The main contributions of this paper are theoretical characterizations of this implicit channel capacity in three settings. We started from the simplest setting where both the controller and the receiver have noiseless observations of the system state, and derived a closed-form expression for the channel capacity. We then extended the analysis to the setting where the receiver has noisy observations, characterizing the channel capacity as the solution to a finite-dimensional convex optimization. Finally, we studied the general setting where both the controller and the receiver have noisy observations, and established a lower bound on the channel capacity.

Report issue for preceding element

Our analysis reveals two key insights into implicit communication in LQG control systems. First, when the controller has noiseless observations, the capacity-achieving input policy satisfies a separation principle, meaning that the control and channel coding tasks can be addressed independently without loss of optimality. Second, under this input policy, the implicit channel becomes equivalent to a Gaussian MIMO channel, allowing existing channel codes to be applied in implicit communication. These two properties significantly simplifies the practical coding problem and demonstrate that implicit communication can be effectively realized in practical scenarios.

Report issue for preceding element

This work opens a promising new avenue of research at the intersection of control and communication, with many interesting problems remaining to be explored in future work. On the theoretical side, the current point-to-point implicit communication model can be extended to networked settings \[[52](https://arxiv.org/html/2509.16146v1#bib.bib52)\]. For instance, when there are multiple receivers, the implicit channel may take the form of a broadcast channel; when multiple controllers are involved—as in decentralized control systems \[[53](https://arxiv.org/html/2509.16146v1#bib.bib53)\]—the channel becomes a multiple-access channel. These models are particularly relevant for multi-agent systems. Characterizing the capacities of such implicit channels is both interesting and fundamental from an information-theoretic perspective.

Report issue for preceding element

On the application side, exploring how this implicit communication framework can be practically deployed in real-world scenarios—such as autonomous driving, swarm robotics, and human-robot interaction—is a promising direction. Moreover, its application in multi-agent systems raises a profound question: if one agent communicates implicitly with others at the cost of degrading its own control performance, can this communication, in turn, improve the performance of the overall system? Examples from nature suggest a positive answer, but a theoretical understanding of this phenomenon in artificial systems remains an open and challenging problem requiring further investigation.

Report issue for preceding element

## Appendix A

Report issue for preceding element

In this appendix, we present proofs for Section [IV](https://arxiv.org/html/2509.16146v1#S4 "IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems").

Report issue for preceding element

### A.1 Proof of Lemma [1](https://arxiv.org/html/2509.16146v1#Thmlemma1 "Lemma 1 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")

Report issue for preceding element

###### Proof:

Report issue for preceding element

Let KK be the optimal control gain and Γ\\Gamma be the solution to the DARE, as defined in ([7](https://arxiv.org/html/2509.16146v1#S3.E7 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and ([8](https://arxiv.org/html/2509.16146v1#S3.E8 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), respectively. Then the optimal control cost, achieved by ut\=−K​xtu\_{t}=-Kx\_{t}, is given by

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | J∗\=Tr​(Γ​Ψw)\=Tr​(Λ​U⊤​Γ​U).\\displaystyle J^{\*}=\\text{Tr}(\\Gamma\\Psi\_{w})=\\text{Tr}(\\Lambda U^{\\top}{\\Gamma}U). |     |

Consider a sub-optimal control policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, where st∼𝒩​(0,Ψs)s\_{t}\\sim\\mathcal{N}(0,\\Psi\_{s}) is independent of xtx\_{t} and wtw\_{t}. The control cost under this policy is given by (see discussions around ([A.2 Proof of Lemma 2](https://arxiv.org/html/2509.16146v1#Sx1.Ex160 "A.2 Proof of Lemma 2 ‣ Appendix A ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and ([72](https://arxiv.org/html/2509.16146v1#Sx1.E72 "In A.2 Proof of Lemma 2 ‣ Appendix A ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) in the proof of Lemma [2](https://arxiv.org/html/2509.16146v1#Thmlemma2 "Lemma 2 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | J\=J∗+Tr​((Γ+G^)​Ψs)\=J∗+Tr​(Γ^​Ψ^s)\=J∗+∑i\=1d1Γ^​(i,i)​Ψ^s​(i,i),\\displaystyle J=J^{\*}+\\text{Tr}((\\Gamma+\\hat{G})\\Psi\_{s})=J^{\*}+\\text{Tr}(\\hat{\\Gamma}\\hat{\\Psi}\_{s})=J^{\*}+\\sum\_{i=1}^{d\_{1}}\\hat{\\Gamma}(i,i)\\hat{\\Psi}\_{s}(i,i), |     | (69) |

where Ψ^s\=U⊤​Ψs​U\\hat{\\Psi}\_{s}=U^{\\top}{\\Psi}\_{s}U. Suppose that Γ^\\hat{\\Gamma} has kk negative diagonal entries. Without loss of generality, assume that the first kk diagonal entries are negative. Consider a choice of Ψ^s\\hat{\\Psi}\_{s} satisfying Ψ^s​(i,i)\>0\\hat{\\Psi}\_{s}(i,i)>0 for 1≤i≤k1\\leq i\\leq k and Ψ^s​(i,i)\=0\\hat{\\Psi}\_{s}(i,i)=0 for i\>ki>k. Then the policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t} results in a control cost:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | J\=J∗+∑i\=1kΓ^​(i,i)​Ψ^s​(i,i)<J∗.\\displaystyle J=J^{\*}+\\sum\_{i=1}^{k}\\hat{\\Gamma}(i,i)\\hat{\\Psi}\_{s}(i,i)<J^{\*}. |     | (70) |

which is strictly smaller than J∗J^{\*}. However, this contradicts the assumption that ut\=−K​xtu\_{t}=-Kx\_{t} is an optimal policy while ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t} is a sub-optimal policy. Therefore, the assumption that Γ^\\hat{\\Gamma} has negative diagonal entries must be false, completing the proof.

Report issue for preceding element

∎

Report issue for preceding element

### A.2 Proof of Lemma [2](https://arxiv.org/html/2509.16146v1#Thmlemma2 "Lemma 2 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")

Report issue for preceding element

###### Proof:

Report issue for preceding element

Let sts\_{t} follow the Gaussian distribution 𝒩​(0,Φ)\\mathcal{N}(0,\\Phi). The control cost of the policy ut\=−K​xt+B†​stu\_{t}=-Kx\_{t}+B^{\\dagger}s\_{t}, denoted by JJ, can be determined by the Bellman equation:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | f​(x)+J\=x⊤​F​x+𝔼​\[u⊤​G​u\]+𝔼​\[f​(z)\]\\displaystyle f(x)+J=x^{\\top}Fx+\\mathbb{E}\[u^{\\top}Gu\]+\\mathbb{E}\[f(z)\] |     |

where f​(x)f(x) is the differential value function and zz is the next state. We can show that f​(x)\=x​Γ​x⊤f(x)=x\\Gamma x^{\\top}, where Γ\\Gamma is defined in ([8](https://arxiv.org/html/2509.16146v1#S3.E8 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). To see this, substituting f​(x)\=x​Γ​x⊤f(x)=x\\Gamma x^{\\top} and u\=−K​x+B†​su=-Kx+B^{\\dagger}s into the Bellman equation yields

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | x⊤​Γ​x+J\\displaystyle x^{\\top}\\Gamma x+J | \=x⊤​F​x+x⊤​K⊤​G​K​x+𝔼​\[(B†​st)⊤​G​B†​st\]+𝔼​\[z⊤​Γ​z\]\\displaystyle=x^{\\top}Fx+x^{\\top}K^{\\top}GKx+\\mathbb{E}\\left\[(B^{\\dagger}s\_{t})^{\\top}GB^{\\dagger}s\_{t}\\right\]+\\mathbb{E}\[z^{\\top}\\Gamma z\] |     |
|     |     | \=x⊤​F​x+x⊤​K⊤​G​K​x+𝔼​\[(B†​st)⊤​G​B†​st\]+x⊤​(A−B​K)⊤​Γ​(A−B​K)​x+𝔼​\[(w+s)⊤​Γ​(w+s)\]\\displaystyle=x^{\\top}Fx+x^{\\top}K^{\\top}GKx+\\mathbb{E}\\left\[(B^{\\dagger}s\_{t})^{\\top}GB^{\\dagger}s\_{t}\\right\]+x^{\\top}(A-BK)^{\\top}\\Gamma(A-BK)x+\\mathbb{E}\[(w+s)^{\\top}\\Gamma(w+s)\] |     |
|     |     | \=x⊤​\[F+K⊤​G​K+(A−B​K)⊤​Γ​(A−B​K)\]​x+Tr​(G​B†​Φ​(B†)⊤)+Tr​(Γ​(Ψw+Φ)).\\displaystyle=x^{\\top}\[F+K^{\\top}GK+(A-BK)^{\\top}\\Gamma(A-BK)\]x+\\text{Tr}(GB^{\\dagger}\\Phi(B^{\\dagger})^{\\top})+\\text{Tr}(\\Gamma(\\Psi\_{w}+\\Phi)). |     | (71) |

Using the expression of KK defined in ([7](https://arxiv.org/html/2509.16146v1#S3.E7 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), we can derive

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | F+K⊤​G​K+(A−B​K)⊤​Γ​(A−B​K)\=F+A⊤​(Γ−Γ​B​(G+B⊤​Γ​B)−1​B⊤​Γ)​A\=Γ.\\displaystyle F+K^{\\top}GK+(A-BK)^{\\top}\\Gamma(A-BK)=F+A^{\\top}(\\Gamma-\\Gamma B(G+B^{\\top}\\Gamma B)^{-1}B^{\\top}\\Gamma)A=\\Gamma. |     |

The last equality follows from the DARE given in ([8](https://arxiv.org/html/2509.16146v1#S3.E8 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). This verifies that indeed f​(x)\=x​Γ​x⊤f(x)=x\\Gamma x^{\\top} and that

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | J\=Tr​(Γ​(Ψw+Φ))+Tr​(G​B†​Φ​(B†)⊤)\=J∗+Tr​((Γ+G^)​Φ),\\displaystyle J=\\text{Tr}(\\Gamma(\\Psi\_{w}+\\Phi))+\\text{Tr}(GB^{\\dagger}\\Phi(B^{\\dagger})^{\\top})=J^{\*}+\\text{Tr}((\\Gamma+\\hat{G})\\Phi), |     | (72) |

where G^≜(B†)⊤​G​B†\\hat{G}\\triangleq(B^{\\dagger})^{\\top}GB^{\\dagger}. This completes the proof. ∎

Report issue for preceding element

### A.3 Proof of Theorem [2](https://arxiv.org/html/2509.16146v1#Thmtheorem2 "Theorem 2 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")

Report issue for preceding element

###### Proof:

Report issue for preceding element

According to ([49](https://arxiv.org/html/2509.16146v1#S7.E49 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"))-([50](https://arxiv.org/html/2509.16146v1#S7.E50 "In VII-A Converse Proof of Theorem 1 ‣ VII Proofs ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")), the capacity is given by

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | C​(V)\=maxΦ≥0\\displaystyle{C}(V)=\\max\_{\\Phi\\geq 0}\\ | 12​log​det(I+Ψw−1​Φ)\\displaystyle\\frac{1}{2}\\log\\det\\left(I+\\Psi\_{w}^{-1}{\\Phi}\\right) |     | (73) |
|     | s.t.\\displaystyle s.t.\\ | Tr​(Φ​(Γ+G^))≤V.\\displaystyle\\text{Tr}(\\Phi(\\Gamma+\\hat{G}))\\leq V. |     | (74) |

If the system is a scalar system, then det(I+Ψw−1​Φ)\=1+Φ/Ψw\\det\\left(I+\\Psi\_{w}^{-1}{\\Phi}\\right)=1+\\Phi/\\Psi\_{w} and Tr​(Φ​(Γ+G^))\=Φ​(Γ+G^)\\text{Tr}(\\Phi(\\Gamma+\\hat{G}))=\\Phi(\\Gamma+\\hat{G}). By KKT conditions, the optimal value is achieved by a Φ\\Phi that satisfies the equality of the constraint, that is Φ\=V/(Γ+G^)\\Phi=V/(\\Gamma+\\hat{G}). Substituting it into the objective function yields

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | C​(V)\=12​log⁡(1+VΨw​(Γ+G^))\=12​log⁡(1+VJ∗+B−2​G​Ψw).\\displaystyle C(V)=\\frac{1}{2}\\log\\left(1+\\frac{V}{\\Psi\_{w}(\\Gamma+\\hat{G})}\\right)=\\frac{1}{2}\\log\\left(1+\\frac{V}{J^{\*}+B^{-2}G\\Psi\_{w}}\\right). |     |

This completes the proof. ∎

Report issue for preceding element

## Appendix B

Report issue for preceding element

This appendix presents proofs for Section [V](https://arxiv.org/html/2509.16146v1#S5 "V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems").

Report issue for preceding element

### B.1 Proof of Lemma [3](https://arxiv.org/html/2509.16146v1#Thmlemma3 "Lemma 3 ‣ V-C Achievability Proof ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")

Report issue for preceding element

###### Proof:

Report issue for preceding element

First, it is easy to see that {σt:t≥1}\\{\\sigma\_{t}:t\\geq 1\\} forms a Markov chain:

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | σt+1\\displaystyle\\sigma\_{t+1} | \=xt+1−x^t+1\|t+t\\displaystyle=x\_{t+1}-\\hat{x}\_{t+1\|t+t} |     |
|     |     | \=A¯​xt+st+wt−A¯​x^t\|t−L​(zt+1−D​A¯​x^t\|t)\\displaystyle=\\bar{A}x\_{t}+s\_{t}+{w}\_{t}-\\bar{A}\\hat{x}\_{t\|t}-L(z\_{t+1}-D\\bar{A}\\hat{x}\_{t\|t}) |     |
|     |     | \=(I−L​D)​A¯​σt−L​vt+1+(I−L​D)​(st+wt).\\displaystyle=(I-LD)\\bar{A}\\sigma\_{t}-Lv\_{t+1}+(I-LD)(s\_{t}+w\_{t}). |     | (75) |

The last line holds because D​A¯​xt\=D​(xt+1−st−wt)\=zt+1−vt+1−D​(st+wt)D\\bar{A}{x}\_{t}=D(x\_{t+1}-s\_{t}-{w}\_{t})=z\_{t+1}-v\_{t+1}-D(s\_{t}+{w}\_{t}). We note that σt\\sigma\_{t} depends on ztz^{t} and is independent of st,wts\_{t},w\_{t}, and vt+1v\_{t+1}.

Report issue for preceding element

Let εt≜xt−x^t|t+1\\varepsilon\_{t}\\triangleq x\_{t}-\\hat{x}\_{t|t+1} denote the estimation error of the Kalman smoother. Then according to ([19](https://arxiv.org/html/2509.16146v1#S5.E19 "In V-B Kalman Filter and Smoother ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")),

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | εt\\displaystyle\\varepsilon\_{t} | \=xt−x^t\|t−Q​(x^t+1\|t+1−A¯​x^t\|t)\\displaystyle=x\_{t}-\\hat{x}\_{t\|t}-Q\\left(\\hat{x}\_{t+1\|t+1}-\\bar{A}\\hat{x}\_{t\|t}\\right) |     |
|     |     | \=σt−Q​L​(zt+1−D​A¯​x^t\|t)\\displaystyle=\\sigma\_{t}-QL(z\_{t+1}-D\\bar{A}\\hat{x}\_{t\|t}) |     |
|     |     | \=(I−Q​L​D​A¯)​σt−Q​L​(vt+1+D​(st+wt)).\\displaystyle=(I-QLD\\bar{A})\\sigma\_{t}-QL(v\_{t+1}+D(s\_{t}+{w}\_{t})). |     |

Define the estimation error ηt≜yt−y^t\\eta\_{t}\\triangleq y\_{t}-\\hat{y}\_{t}. Then it can be written as

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | ηt\\displaystyle\\eta\_{t} | \=xt+1−x^t+1\|t+1−A¯​(xt−x^t\|t+1)\\displaystyle=x\_{t+1}-\\hat{x}\_{t+1\|t+1}-\\bar{A}\\left(x\_{t}-\\hat{x}\_{t\|t+1}\\right) |     |
|     |     | \=σt+1−A¯​εt\\displaystyle=\\sigma\_{t+1}-\\bar{A}\\varepsilon\_{t} |     |
|     |     | \=(A¯​Q−I)​L​D​A¯​σt+(A¯​Q−I)​L​vt+1+(A¯​Q​L​D+I−L​D)​(st+wt).\\displaystyle=(\\bar{A}Q-I)LD\\bar{A}\\sigma\_{t}+(\\bar{A}Q-I)Lv\_{t+1}+(\\bar{A}QLD+I-LD)(s\_{t}+{w}\_{t}). |     |

We thus have

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | y^t\\displaystyle\\hat{y}\_{t} | \=yt−ηt\=st+wt−ηt\\displaystyle=y\_{t}-\\eta\_{t}=s\_{t}+{w}\_{t}-\\eta\_{t} |     |
|     |     | \=(I−A¯​Q)​L​D​A¯​σt+(I−A¯​Q)​L​vt+1+(I−A¯​Q)​L​D​(st+wt)\\displaystyle=(I-\\bar{A}Q)LD\\bar{A}\\sigma\_{t}+(I-\\bar{A}Q)Lv\_{t+1}+(I-\\bar{A}Q)LD(s\_{t}+w\_{t}) |     |
|     |     | \=(I−A¯​Q)​L​\[D​st+vt+1+D​wt+D​A¯​σt\].\\displaystyle=(I-\\bar{A}Q)L\[Ds\_{t}+v\_{t+1}+Dw\_{t}+D\\bar{A}\\sigma\_{t}\]. |     |

∎

Report issue for preceding element

### B.2 Proof of Proposition [1](https://arxiv.org/html/2509.16146v1#Thmproposition1 "Proposition 1 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")

Report issue for preceding element

###### Proof:

Report issue for preceding element

For ease of reference, we refer to the optimization problems defined in Theorem [3](https://arxiv.org/html/2509.16146v1#Thmtheorem3 "Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") and Proposition [1](https://arxiv.org/html/2509.16146v1#Thmproposition1 "Proposition 1 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems") as 𝚃𝟹\\mathtt{T3} and 𝙿𝟷\\mathtt{P1}, respectively. Since 𝚃𝟹\\mathtt{T3} and 𝙿𝟷\\mathtt{P1} share the same objective function, it suffices to show that they have the same optimal solution. First, define a function

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | f​(Σ,Φ)≜A¯​(Σ−Σ​D⊤​(D​Σ​D⊤+Ψv)−1​D​Σ)​A¯⊤+Ψw+Φ.\\displaystyle f(\\Sigma,\\Phi)\\triangleq\\bar{A}\\left(\\Sigma-\\Sigma D^{\\top}(D\\Sigma D^{\\top}+\\Psi\_{v})^{-1}D\\Sigma\\right)\\bar{A}^{\\top}+\\Psi\_{{w}}+\\Phi. |     |

Under this definition, the constraint ([14](https://arxiv.org/html/2509.16146v1#S5.E14 "In Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) becomes f​(Σ,Φ)\=Σf(\\Sigma,\\Phi)=\\Sigma. We now relax this equality to an inequality:

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | f​(Σ,Φ)−Σ⪰0.\\displaystyle f(\\Sigma,\\Phi)-\\Sigma\\succeq 0. |     | (76) |

Note that D​Σ​D⊤+ΨvD\\Sigma D^{\\top}+\\Psi\_{v} is PD if Σ\\Sigma is PSD. Then by Schur complement for PSD matrices, ([76](https://arxiv.org/html/2509.16146v1#Sx2.E76 "In B.2 Proof of Proposition 1 ‣ Appendix B ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) is equivalent to

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | D​Σ​D⊤+Ψv⪰0​ and ​\[D​Σ​D⊤+ΨvD​Σ​A¯⊤A¯​Σ​D⊤A¯​Σ​A¯⊤+Ψw+Φ−Σ\]⪰0.\\displaystyle D\\Sigma D^{\\top}+\\Psi\_{v}\\succeq 0\\text{ and }\\begin{bmatrix}D\\Sigma D^{\\top}+\\Psi\_{v}&D\\Sigma\\bar{A}^{\\top}\\\\ \\bar{A}\\Sigma D^{\\top}&\\bar{A}\\Sigma\\bar{A}^{\\top}+\\Psi\_{w}+\\Phi-\\Sigma\\end{bmatrix}\\succeq 0. |     |

Therefore, problem 𝙿𝟷\\mathtt{P1} is equivalent to a relaxed version of 𝚃𝟹\\mathtt{T3}, where the equality constraint ([14](https://arxiv.org/html/2509.16146v1#S5.E14 "In Theorem 3 ‣ V-A Capacity ‣ V Noisy Observations at Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) is replaced by the relaxed inequality ([76](https://arxiv.org/html/2509.16146v1#Sx2.E76 "In B.2 Proof of Proposition 1 ‣ Appendix B ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")).

Report issue for preceding element

Before proceeding, we state a standard result about the discrete-time algebraic Riccati equation.

Report issue for preceding element

Fact 1: Given that f​(Σ,Φ)−Σ\=0f(\\Sigma,\\Phi)-\\Sigma=0 and f​(Σ′,Φ′)−Σ′\=0f(\\Sigma^{\\prime},\\Phi^{\\prime})-\\Sigma^{\\prime}=0. If Φ⪰Φ′\\Phi\\succeq\\Phi^{\\prime}, then Σ⪰Σ′\\Sigma\\succeq\\Sigma^{\\prime}.

Report issue for preceding element

The proof of Fact 1 is straightforward. Note that Σ\\Sigma is the fixed point of the discrete recursion: Σt+1\=f​(Σt,Φ)\\Sigma\_{t+1}=f(\\Sigma\_{t},\\Phi). If Φ⪰Φ′\\Phi\\succeq\\Phi^{\\prime} and initializing two recursions from the same PSD matrix Σ0\=Σ0′\\Sigma\_{0}=\\Sigma^{\\prime}\_{0}, then we can show by induction that

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | Σt+1\=f​(Σt,Φ)⪰Σt+1′\=f​(Σt′,Φ′),∀t≥0.\\displaystyle\\Sigma\_{t+1}=f(\\Sigma\_{t},\\Phi)\\succeq\\Sigma^{\\prime}\_{t+1}=f(\\Sigma^{\\prime}\_{t},\\Phi^{\\prime}),\\ \\forall t\\geq 0. |     |

It follows that Σ\=Σ∞⪰Σ′\=Σ∞′\\Sigma=\\Sigma\_{\\infty}\\succeq\\Sigma^{\\prime}=\\Sigma^{\\prime}\_{\\infty}.

Report issue for preceding element

Now, suppose that a tuple (Σ0,Φ1)(\\Sigma\_{0},\\Phi\_{1}) is an optimal solution to 𝙿𝟷\\mathtt{P1}. If f​(Σ0,Φ1)−Σ0\=0f(\\Sigma\_{0},\\Phi\_{1})-\\Sigma\_{0}=0, then this tuple is also an optimal solution to the problem 𝚃𝟹\\mathtt{T3}. We consider the non-trivial case in which the inequality does not hold with equality:

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | ΔΦ≜f​(Σ0,Φ1)−Σ0⪰0.\\displaystyle\\Delta\_{\\Phi}\\triangleq f(\\Sigma\_{0},\\Phi\_{1})-\\Sigma\_{0}\\succeq 0. |     |

Let Φ0\=Φ1−ΔΦ\\Phi\_{0}=\\Phi\_{1}-\\Delta\_{\\Phi}, then we have f​(Σ0,Φ0)−Σ0\=0f(\\Sigma\_{0},\\Phi\_{0})-\\Sigma\_{0}=0. For Φ1\\Phi\_{1}, there also exists a PSD matrix Σ1\\Sigma\_{1} satisfying f​(Σ1,Φ1)−Σ1\=0f(\\Sigma\_{1},\\Phi\_{1})-\\Sigma\_{1}=0. Since Φ1⪰Φ0\\Phi\_{1}\\succeq\\Phi\_{0}, it follows from Fact 1 that Σ1⪰Σ0\\Sigma\_{1}\\succeq\\Sigma\_{0}. Note that the tuple (Σ1,Φ1)(\\Sigma\_{1},\\Phi\_{1}) is a valid solution to both problems 𝙿𝟷\\mathtt{P1} and 𝚃𝟹\\mathtt{T3}. It follows from D​Σ1​D⊤+Ψv⪰D​Σ0​D⊤+Ψv≻0D\\Sigma\_{1}D^{\\top}+\\Psi\_{v}\\succeq D\\Sigma\_{0}D^{\\top}+\\Psi\_{v}\\succ 0 that

Report issue for preceding element

|     |     |     |
| --- | --- | --- |
|     | log​det(D​Σ1​D⊤+Ψv)≥log​det(D​Σ0​D⊤+Ψv).\\displaystyle\\log{\\det(D\\Sigma\_{1}D^{\\top}+\\Psi\_{v})}\\geq\\log{\\det(D\\Sigma\_{0}D^{\\top}+\\Psi\_{v}}). |     |

Since (Σ0,Φ1)(\\Sigma\_{0},\\Phi\_{1}) is assumed to be an optimal solution to 𝙿𝟷\\mathtt{P1}, the above inequality must hold with equality.

Report issue for preceding element

We thus obtain the following conclusion: if (Σ,Φ)(\\Sigma,\\Phi) is an optimal solution to problem 𝙿𝟷\\mathtt{P1}, then one of the following must hold:

Report issue for preceding element

*   (i)
    
    f​(Σ,Φ)−Σ\=0f(\\Sigma,\\Phi)-\\Sigma=0, in which case (Σ,Φ)(\\Sigma,\\Phi) is also an optimal solution to problem 𝚃𝟹\\mathtt{T3}.
    
    Report issue for preceding element
    
*   (ii)
    
    There exists a PSD matrix Σ′⪰Σ\\Sigma^{\\prime}\\succeq\\Sigma such that f​(Σ′,Φ)−Σ′\=0f(\\Sigma^{\\prime},\\Phi)-\\Sigma^{\\prime}=0 and (Σ′,Φ)(\\Sigma^{\\prime},\\Phi) yields the same objective value. In this case, (Σ′,Φ)(\\Sigma^{\\prime},\\Phi) is an optimal solution to both problems.
    
    Report issue for preceding element
    

In both cases, the two optimization problems share an identical optimal solution. This completes the proof.

Report issue for preceding element

∎

Report issue for preceding element

## Appendix C

Report issue for preceding element

The appendix presents proofs for Section [VI](https://arxiv.org/html/2509.16146v1#S6 "VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems").

Report issue for preceding element

### C.1 Proof of Lemma [4](https://arxiv.org/html/2509.16146v1#Thmlemma4 "Lemma 4 ‣ VI-B A Lower Bound on the Capacity ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")

Report issue for preceding element

###### Proof:

Report issue for preceding element

For ease of notation, we will write xˇt|t\\check{x}\_{t|t} as xˇt\\check{x}\_{t} whenever the context is clear. We prove this lemma using a similar argument as in Lemma [2](https://arxiv.org/html/2509.16146v1#Thmlemma2 "Lemma 2 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"). That is, we begin by assuming that the differential value function under the policy ut\=−K​xˇt+B†​stu\_{t}=-K\\check{x}\_{t}+B^{\\dagger}s\_{t} takes the quadratic form f​(xˇt)\=xˇt⊤​Γ​xˇtf(\\check{x}\_{t})=\\check{x}\_{t}^{\\top}\\Gamma\\check{x}\_{t}. Then we show that this function indeed satisfies the Bellman equation. The corresponding average control cost is subsequently derived from the Bellman equation. First, substituting f​(xˇt)\=xˇt⊤​Γ​xˇtf(\\check{x}\_{t})=\\check{x}\_{t}^{\\top}\\Gamma\\check{x}\_{t} into the Bellman equation yields

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | xˇt⊤​Γ​xˇt+J\\displaystyle\\check{x}\_{t}^{\\top}\\Gamma\\check{x}\_{t}+J | \=(xˇt+et)⊤​F​(xˇt+et)+xˇt⊤​K⊤​G​K​xˇt+𝔼​\[(B†​st)⊤​G​B†​st\]+𝔼​\[xˇt+1⊤​Γ​xˇt+1\].\\displaystyle=(\\check{x}\_{t}+e\_{t})^{\\top}F(\\check{x}\_{t}+e\_{t})+\\check{x}\_{t}^{\\top}K^{\\top}GK\\check{x}\_{t}+\\mathbb{E}\\left\[(B^{\\dagger}s\_{t})^{\\top}GB^{\\dagger}s\_{t}\\right\]+\\mathbb{E}\[\\check{x}\_{t+1}^{\\top}\\Gamma\\check{x}\_{t+1}\]. |     | (77) |

Without loss of optimality, we assume the Kalman filter is already in the steady-state. Then according to the Kalman filter formulas,

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | xˇt+1\\displaystyle\\check{x}\_{t+1} | \=(I−Lc​Dc)​(A​xˇt+B​ut)+Lc​ot+1\\displaystyle=(I-L\_{c}D\_{c})(A\\check{x}\_{t}+Bu\_{t})+L\_{c}o\_{t+1} |     |
|     |     | \=(I−Lc​Dc)​(A​xˇt+B​ut)+Lc​(Dc​(A​xt+B​ut+wt)+qt+1)\\displaystyle=(I-L\_{c}D\_{c})(A\\check{x}\_{t}+Bu\_{t})+L\_{c}(D\_{c}(Ax\_{t}+Bu\_{t}+w\_{t})+q\_{t+1}) |     |
|     |     | \=A​xˇt+B​ut+Lc​Dc​(A​et+wt)+Lc​qt+1.\\displaystyle=A\\check{x}\_{t}+Bu\_{t}+L\_{c}D\_{c}(Ae\_{t}+w\_{t})+L\_{c}q\_{t+1}. |     |

Note that Cov​(Dc​(A​et+wt))\=Dc​(A​Σ~c​A⊤+Ψw)​Dc⊤\=Dc​Σc​Dc⊤\\text{Cov}(D\_{c}(Ae\_{t}+w\_{t}))=D\_{c}(A\\tilde{\\Sigma}\_{c}A^{\\top}+\\Psi\_{w})D^{\\top}\_{c}=D\_{c}\\Sigma\_{c}D^{\\top}\_{c}. It follows that

Report issue for preceding element

|     |     |     |     |
| --- | --- | --- | --- |
|     | 𝔼​\[xˇt+1⊤​Γ​xˇt+1\]\\displaystyle\\mathbb{E}\[\\check{x}\_{t+1}^{\\top}\\Gamma\\check{x}\_{t+1}\] | \=𝔼​\[(A​xˇt+B​ut)⊤​Γ​(A​xˇt+B​ut)\]+Tr​(Γ​Lc​(Dc​Σc​Dc⊤+Ψq)​Lc⊤)\\displaystyle=\\mathbb{E}\[(A\\check{x}\_{t}+Bu\_{t})^{\\top}\\Gamma(A\\check{x}\_{t}+Bu\_{t})\]+\\text{Tr}(\\Gamma L\_{c}(D\_{c}\\Sigma\_{c}D\_{c}^{\\top}+\\Psi\_{q})L\_{c}^{\\top}) |     |
|     |     | \=xˇt⊤​(A−B​K)⊤​Γ​(A−B​K)​xˇt+𝔼​\[st⊤​Γ​st\]+Tr​(Γ​Lc​(Dc​Σc​Dc⊤+Ψq)​Lc⊤).\\displaystyle=\\check{x}^{\\top}\_{t}(A-BK)^{\\top}\\Gamma(A-BK)\\check{x}\_{t}+\\mathbb{E}\[s^{\\top}\_{t}\\Gamma s\_{t}\]+\\text{Tr}(\\Gamma L\_{c}(D\_{c}\\Sigma\_{c}D\_{c}^{\\top}+\\Psi\_{q})L\_{c}^{\\top}). |     |

Since Lc\=Σc​Dc⊤​(Dc​Σc​Dc⊤+Ψq)−1L\_{c}=\\Sigma\_{c}D\_{c}^{\\top}(D\_{c}\\Sigma\_{c}D\_{c}^{\\top}+\\Psi\_{q})^{-1} and Σ~c\=(I−Lc​Dc)​Σc\\tilde{\\Sigma}\_{c}=(I-L\_{c}D\_{c})\\Sigma\_{c}, we have Tr(ΓL\_c (D\_c Σ\_cD\_c^⊤+ Ψ\_q) L\_c^⊤) = Tr(ΓΣ\_cD\_c^⊤L\_c^⊤) = Tr(Γ(Σ\_c - ~Σ\_c)). Substituting the above into ([77](https://arxiv.org/html/2509.16146v1#Sx3.E77 "In C.1 Proof of Lemma 4 ‣ Appendix C ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) yields

Report issue for preceding element

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     | xˇt⊤​Γ​xˇt+J\=\\displaystyle\\check{x}\_{t}^{\\top}\\Gamma\\check{x}\_{t}+J= | xˇt⊤​\[F+K⊤​G​K+(A−B​K)⊤​Γ​(A−B​K)\]​xˇt+𝔼​\[et⊤​F​xˇt\]+𝔼​\[xˇt⊤​F​et\]\\displaystyle\\check{x}^{\\top}\_{t}\[F+K^{\\top}GK+(A-BK)^{\\top}\\Gamma(A-BK)\]\\check{x}\_{t}+\\mathbb{E}\[e\_{t}^{\\top}F\\check{x}\_{t}\]+\\mathbb{E}\[\\check{x}\_{t}^{\\top}Fe\_{t}\] |     |
|     |     | +Tr​(G​B†​Φ​(B†)⊤)+Tr​(F​Σ~c)+Tr​(Γ​Φ)+Tr​(Γ​(Σc−Σ~c)).\\displaystyle+\\text{Tr}(GB^{\\dagger}\\Phi(B^{\\dagger})^{\\top})+\\text{Tr}(F\\tilde{\\Sigma}\_{c})+\\text{Tr}(\\Gamma\\Phi)+\\text{Tr}(\\Gamma(\\Sigma\_{c}-\\tilde{\\Sigma}\_{c})). |     | (78) |

It is well-known that, in Kalman filter, the estimation error ete\_{t} and the estimate of state xˇt\\check{x}\_{t} are uncorrelated. We thus have 𝔼​\[et⊤​F​xˇt\]\=𝔼​\[xˇt⊤​F​et\]\=0\\mathbb{E}\[e\_{t}^{\\top}F\\check{x}\_{t}\]=\\mathbb{E}\[\\check{x}\_{t}^{\\top}Fe\_{t}\]=0. Furthermore, as discussed in the proof of Lemma [2](https://arxiv.org/html/2509.16146v1#Thmlemma2 "Lemma 2 ‣ IV-A Capacity ‣ IV Noiseless Observations at the Controller and the Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems"), ([C.1 Proof of Lemma 4](https://arxiv.org/html/2509.16146v1#Sx3.Ex185 "C.1 Proof of Lemma 4 ‣ Appendix C ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) holds if Γ= F+K^⊤GK + (A-BK)^⊤Γ(A-BK), which is the same as that defined in ([8](https://arxiv.org/html/2509.16146v1#S3.E8 "In III-A Linear Quadratic-Gaussian (LQG) Control Systems ‣ III System Model and Preliminaries ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")). This verifies that f​(xˇt)\=xˇt⊤​Γ​xˇtf(\\check{x}\_{t})=\\check{x}\_{t}^{\\top}\\Gamma\\check{x}\_{t} is the differential value function. It follows immediately from the Bellman equation ([C.1 Proof of Lemma 4](https://arxiv.org/html/2509.16146v1#Sx3.Ex185 "C.1 Proof of Lemma 4 ‣ Appendix C ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) and Eq. ([37](https://arxiv.org/html/2509.16146v1#S6.E37 "In VI-A Optimal Control and Kalman Filtering ‣ VI Noisy Observations at Controller and Receiver ‣ Implicit Communication in Linear Quadratic Gaussian Control Systems")) that J = Tr(GB^†Φ(B^†)^⊤) + Tr(F~Σ\_c) + Tr(ΓΦ) + Tr(Γ(Σ\_c - ~Σ\_c)) = J^\*\* + Tr((B^†)^⊤GB^†Φ) + Tr(ΓΦ). This completes the proof. ∎

Report issue for preceding element

## References

Report issue for preceding element

*   \[1\]↑ M. Ballerini, N. Cabibbo, R. Candelier, A. Cavagna, E. Cisbani, I. Giardina, V. Lecomte, A. Orlandi, G. Parisi, A. Procaccini _et al._, “Interaction ruling animal collective behavior depends on topological rather than metric distance: Evidence from a field study,” _Proceedings of the national academy of sciences_, vol. 105, no. 4, pp. 1232–1237, 2008.
*   \[2\]↑ Y. Katz, K. Tunstrøm, C. C. Ioannou, C. Huepe, and I. D. Couzin, “Inferring the structure and dynamics of interactions in schooling fish,” _Proceedings of the National Academy of Sciences_, vol. 108, no. 46, pp. 18 720–18 725, 2011.
*   \[3\]↑ S. Trenholm, _Thinking Through Communication: An Introduction to the Study of Human Communication (9th ed.)_. Routledge, 2020.
*   \[4\]↑ G. Beattie, _Rethinking body language: How hand movements reveal hidden thoughts_. Routledge, 2016.
*   \[5\]↑ C. M. Waters and B. L. Bassler, “Quorum sensing: cell-to-cell communication in bacteria,” _Annual Review of Cell and Developmental Biology_, vol. 21, no. 1, pp. 319–346, 2005.
*   \[6\]↑ W. von Thienen, D. Metzler, D.-H. Choe, and V. Witte, “Pheromone communication in ants: a detailed analysis of concentration-dependent decisions in three species,” _Behavioral ecology and sociobiology_, vol. 68, pp. 1611–1627, 2014.
*   \[7\]↑ S. Sayin, E. Couzin-Fuchs, I. Petelski, Y. Günzel, M. Salahshour, C.-Y. Lee, J. M. Graving, L. Li, O. Deussen, G. A. Sword, and I. D. Couzin, “The behavioral mechanisms governing collective motion in swarming locusts,” _Science_, vol. 387, no. 6737, pp. 995–1000, 2025. \[Online\]. Available: https://www.science.org/doi/abs/10.1126/science.adq7832
*   \[8\]↑ J. F. Fisac, E. Bronstein, E. Stefansson, D. Sadigh, S. S. Sastry, and A. D. Dragan, “Hierarchical game-theoretic planning for autonomous vehicles,” in _2019 International conference on robotics and automation (ICRA)_. IEEE, 2019, pp. 9590–9596.
*   \[9\]↑ W. Schwarting, A. Pierson, J. Alonso-Mora, S. Karaman, and D. Rus, “Social behavior for autonomous vehicles,” _Proceedings of the National Academy of Sciences_, vol. 116, no. 50, pp. 24 972–24 978, 2019.
*   \[10\]↑ R. A. Knepper, C. I. Mavrogiannis, J. Proft, and C. Liang, “Implicit communication in a joint action,” in _Proceedings of the 2017 acm/ieee international conference on human-robot interaction_, 2017, pp. 283–292.
*   \[11\]↑ C. Breazeal, C. D. Kidd, A. L. Thomaz, G. Hoffman, and M. Berlin, “Effects of nonverbal communication on efficiency and robustness in human-robot teamwork,” in _2005 IEEE/RSJ international conference on intelligent robots and systems_. IEEE, 2005, pp. 708–713.
*   \[12\]↑ A. D. Dragan, K. C. Lee, and S. S. Srinivasa, “Legibility and predictability of robot motion,” in _2013 8th ACM/IEEE International Conference on Human-Robot Interaction (HRI)_. IEEE, 2013, pp. 301–308.
*   \[13\]↑ J. Connor, B. Champion, and M. A. Joordens, “Current algorithms, communication methods and designs for underwater swarm robotics: A review,” _IEEE Sensors Journal_, vol. 21, no. 1, pp. 153–169, 2020.
*   \[14\]↑ F. Berlinger, M. Gauci, and R. Nagpal, “Implicit coordination for 3D underwater collective behaviors in a fish-inspired robot swarm,” _Science Robotics_, vol. 6, no. 50, p. eabd8668, 2021. \[Online\]. Available: https://www.science.org/doi/abs/10.1126/scirobotics.abd8668
*   \[15\]↑ A. D’Angelo and E. Pagello, “Making collective behaviours to work through implicit communication,” in _Proceedings of the 2005 IEEE International Conference on Robotics and Automation_. IEEE, 2005, pp. 81–86.
*   \[16\]↑ C. Liang, J. Proft, E. Andersen, and R. A. Knepper, “Implicit communication of actionable information in human-AI teams,” in _Proceedings of the 2019 CHI conference on human factors in computing systems_, 2019, pp. 1–13.
*   \[17\]↑ Z. Tian, S. Zou, I. Davies, T. Warr, L. Wu, H. B. Ammar, and J. Wang, “Learning to communicate implicitly by actions,” in _Proceedings of the AAAI conference on artificial intelligence_, vol. 34, no. 05, 2020, pp. 7261–7268.
*   \[18\]↑ U. Stegmann, _Animal communication theory: Information and influence_. Cambridge University Press, 2013.
*   \[19\]↑ N. Albuquerque, D. S. Mills, K. Guo, A. Wilkinson, and B. Resende, “Dogs can infer implicit information from human emotional expressions,” _Animal cognition_, vol. 25, no. 2, pp. 231–240, 2022.
*   \[20\]↑ M. L. Patterson, A. J. Fridlund, and C. Crivelli, “Four misconceptions about nonverbal communication,” _Perspectives on Psychological Science_, vol. 18, no. 6, pp. 1388–1411, 2023.
*   \[21\]↑ M. A. Denham and A. J. Onwuegbuzie, “Beyond words: Using nonverbal communication data in research to enhance thick description and interpretation,” _International Journal of Qualitative Methods_, vol. 12, no. 1, pp. 670–696, 2013.
*   \[22\]↑ S. Shaw, E. Wenzel, A. Walker, and G. Sartoretti, “ForMIC: Foraging via multiagent RL with implicit communication,” _IEEE Robotics and Automation Letters_, vol. 7, no. 2, pp. 4877–4884, 2022.
*   \[23\]↑ H. Wang, B. Chen, T. Zhang, and B. Wang, “Learning to communicate through implicit communication channels,” in _The Thirteenth International Conference on Learning Representations_, 2025.
*   \[24\]↑ S. Sokota, C. A. S. De Witt, M. Igl, L. M. Zintgraf, P. Torr, M. Strohmeier, Z. Kolter, S. Whiteson, and J. Foerster, “Communicating via Markov decision processes,” in _International Conference on Machine Learning_. PMLR, 2022, pp. 20 314–20 328.
*   \[25\]↑ Y. Che, A. M. Okamura, and D. Sadigh, “Efficient and trustworthy social navigation via explicit and implicit robot–human communication,” _IEEE Transactions on Robotics_, vol. 36, no. 3, pp. 692–707, 2020.
*   \[26\]↑ D. Dey and J. Terken, “Pedestrian interaction with vehicles: roles of explicit and implicit communication,” in _Proceedings of the 9th international conference on automotive user interfaces and interactive vehicular applications_, 2017, pp. 109–113.
*   \[27\]↑ S. Li and X. Zhang, “Implicit intention communication in human–robot interaction through visual behavior studies,” _IEEE Transactions on Human-Machine Systems_, vol. 47, no. 4, pp. 437–448, 2017.
*   \[28\]↑ H. Wu, G. Chen, and D. Gunduz, “Actions speak louder than words: Rate-reward trade-off in Markov decision processes,” in _The Thirteenth International Conference on Learning Representations_, 2025.
*   \[29\]↑ H. H. Permuter, H. Asnani, and T. Weissman, “Capacity of a POST channel with and without feedback,” _IEEE Transactions on Information Theory_, vol. 60, no. 10, pp. 6041–6057, 2014.
*   \[30\]↑ T. M. Cover and S. Pombra, “Gaussian feedback capacity,” _IEEE Transactions on Information Theory_, vol. 35, no. 1, pp. 37–43, 2002.
*   \[31\]↑ S. Verdú _et al._, “A general formula for channel capacity,” _IEEE Transactions on Information Theory_, vol. 40, no. 4, pp. 1147–1157, 1994.
*   \[32\]↑ Y.-H. Kim, “Feedback capacity of stationary Gaussian channels,” _IEEE Transactions on Information Theory_, vol. 56, no. 1, pp. 57–85, 2009.
*   \[33\]↑ L. Brandenburg and A. Wyner, “Capacity of the Gaussian channel with memory: The multivariate case,” _Bell System Technical Journal_, vol. 53, no. 5, pp. 745–778, 1974.
*   \[34\]↑ E. Telatar, “Capacity of multi-antenna Gaussian channels,” _European transactions on telecommunications_, vol. 10, no. 6, pp. 585–595, 1999.
*   \[35\]↑ O. Sabag, V. Kostina, and B. Hassibi, “Feedback capacity of MIMO Gaussian channels,” _IEEE Transactions on Information Theory_, vol. 69, no. 10, pp. 6121–6136, 2023.
*   \[36\]↑ D.-M. Arnold, H.-A. Loeliger, P. O. Vontobel, A. Kavcic, and W. Zeng, “Simulation-based computation of information rates for channels with memory,” _IEEE Transactions on information theory_, vol. 52, no. 8, pp. 3498–3508, 2006.
*   \[37\]↑ A. Feutrill and M. Roughan, “A review of Shannon and differential entropy rate estimation,” _Entropy_, vol. 23, no. 8, p. 1046, 2021.
*   \[38\]↑ W. Hirt and J. L. Massey, “Capacity of the discrete-time Gaussian channel with intersymbol interference,” _IEEE Transactions on Information Theory_, vol. 34, no. 3, pp. 38–38, 2002.
*   \[39\]↑ S. Loyka and C. D. Charalambous, “On the capacity of Gaussian MIMO channels with memory,” _IEEE Communications Letters_, vol. 26, no. 8, pp. 1760–1763, 2022.
*   \[40\]↑ S. Shamai, L. Ozarow, and A. Wyner, “Information rates for a discrete-time Gaussian channel with intersymbol interference and stationary inputs,” _IEEE Transactions on Information Theory_, vol. 37, no. 6, pp. 1527–1539, 1991.
*   \[41\]↑ S. Tatikonda and S. Mitter, “Control under communication constraints,” _IEEE Transactions on Automatic Control_, vol. 49, no. 7, pp. 1056–1068, 2004.
*   \[42\]↑ ——, “Control over noisy channels,” _IEEE Transactions on Automatic Control_, vol. 49, no. 7, pp. 1196–1201, 2004.
*   \[43\]↑ O. Sabag, P. Tian, V. Kostina, and B. Hassibi, “Reducing the LQG cost with minimal communication,” _IEEE Transactions on Automatic Control_, vol. 68, no. 9, pp. 5258–5270, 2022.
*   \[44\]↑ R. A. Gupta and M.-Y. Chow, “Networked control system: Overview and research trends,” _IEEE transactions on industrial electronics_, vol. 57, no. 7, pp. 2527–2535, 2009.
*   \[45\]↑ V. Kostina and B. Hassibi, “Rate-cost tradeoffs in control,” _IEEE Transactions on Automatic Control_, vol. 64, no. 11, pp. 4525–4540, 2019.
*   \[46\]↑ M. Grant and S. Boyd, “CVX: Matlab software for disciplined convex programming, version 2.1,” https://cvxr.com/cvx, Mar. 2014.
*   \[47\]↑ ——, _Graph implementations for nonsmooth convex programs_, ser. Lecture Notes in Control and Information Sciences, V. Blondel, S. Boyd, and H. Kimura, Eds. Springer-Verlag Limited, 2008.
*   \[48\]↑ S. P. Boyd and L. Vandenberghe, _Convex optimization_. Cambridge university press, 2004.
*   \[49\]↑ R. Kalman, “A new approach to linear filtering and prediction problems,” _Trans. ASME, D_, vol. 82, pp. 35–44, 1960.
*   \[50\]↑ V. Krishnamurthy, _Partially observed Markov decision processes_. Cambridge university press, 2016.
*   \[51\]↑ H. E. Rauch, F. Tung, and C. T. Striebel, “Maximum likelihood estimates of linear dynamic systems,” _AIAA journal_, vol. 3, no. 8, pp. 1445–1450, 1965.
*   \[52\]↑ A. El Gamal and Y.-H. Kim, _Network information theory_. Cambridge university press, 2011.
*   \[53\]↑ B.-Z. Kurtaran and R. Sivan, “Linear-quadratic-Gaussian control with one-step-delay sharing pattern,” _IEEE Transactions on Automatic Control_, vol. 19, no. 5, pp. 571–574, 1974.