# AI 词典 (未完成)

在 AI 领域有大量的单词缩写，以及新名词。而每个名词背后都有大量的故事，不是一两句话就能解释清楚的。笔者最初在进军 深度学习领域时，被各种新概念、单词缩写折磨的晕头转向，特此收集这些词汇，给初学者提供信息查询。



### LLM(Large Language Model)

大语言模型

> 

-------

### 5-shot



-----

### Pretraining

预训练



-----



### SFT(Supervised Fine-Tuning)

监督微调。

SFT（Supervised Fine-Tuning）监督微调是指在源数据集上预训练一个神经网络模型，即源模型。然后创建一个新的神经网络模型，即目标模型。目标模型复制了源模型上除了输出层外的所有模型设计及其参数。这些模型参数包含了源数据集上学习到的知识，且这些知识同样适用于目标数据集。源模型的输出层与源数据集的标签紧密相关，因此在目标模型中不予采用。微调时，为目标模型添加一个输出大小为目标数据集类别个数的输出层，并随机初始化该层的模型参数。在目标数据集上训练目标模型时，将从头训练到输出层，其余层的参数都基于源模型的参数微调得到。

> 1. 知乎：[人工智能大语言模型微调技术：SFT 监督微调、LoRA 微调方法、P-tuning v2 微调方法、Freeze 监督微调方法](https://zhuanlan.zhihu.com/p/643941480)
-----



### RM(Reward Modeling)

奖励建模。


-----

### RL(Reinforcement Learning)

强化学习


-----

### RLHF(Reinforcement Learning from Human Feedback)

基于人类反馈的强化学习



-----

### Instruction-Tuning

指令微调。

大语言模型在预训练阶段结束后，能胜任的任务是`文本预测`，也就是输入`上文`，预测`下文`。而对于`指令`大模型并不会执行，例如输入‘请写一首关于月亮的诗’，大模型输出的很可能是类似'请写一首关于太阳的诗'、'请写一首关于星星的诗'这样的结果。所以需要加入指令微调，当大模型具有执行指令的能力。

> 1. 知乎：[【Instruction Tuning】ChatGLM 微调实战（附源码）](https://zhuanlan.zhihu.com/p/625468667)
-----

### GPT(Generate Pre-Train)


-----

### LoRA(Low-Rank Adaptation of Large Language Models)

低秩适配。一种常见的模型微调方法，特点是占用内存低，微调速度快。

LoRA（Low-Rank Adaptation of Large Language Models），直译为大语言模型的低阶自适应。LoRA 的基本原理是冻结预训练好的模型权重参数，在冻结原模型参数的情况下，通过往模型中加入额外的网络层，并只训练这些新增的网络层参数。由于这些新增参数数量较少，这样不仅 finetune 的成本显著下降，还能获得和全模型参数参与微调类似的效果。

随着大语言模型的发展，模型的参数量越来越大，比如 GPT-3 参数量已经高达 1750 亿，因此，微调所有模型参数变得不可行。LoRA 微调方法由微软提出，通过只微调新增参数的方式，大大减少了下游任务的可训练参数数量。

> 1. [Paper](https://arxiv.org/abs/2106.09685)
> 2. 知乎：[人工智能大语言模型微调技术：SFT 监督微调、LoRA 微调方法、P-tuning v2 微调方法、Freeze 监督微调方法](https://zhuanlan.zhihu.com/p/643941480)

-----

### QLoRA(Quantized Low Rank adaptation)

量化低秩适配

> 1. [Github](https://github.com/artidoro/qlora)
> 2. [Paper](https://arxiv.org/abs/2305.14314)



-----

### PPO(Proximal Policy Optimisation)



-----

### few shot

小样本

-----

### Zero shot

零样本


-----
### PEFT(Parameter-Efficient Fine-Tuning)

一个针对大模型的高效微调框架

> 1. [大模型高效微调-PEFT框架介绍](https://zhuanlan.zhihu.com/p/644523217)
> 2. [PEFT](https://huggingface.co/docs/peft)

-----

### P-Tuning
一种微调方法

> 1. 知乎：[【P-Tuning】 一种自动学习 prompt pattern 的方法（附源码）](https://zhuanlan.zhihu.com/p/583022692)


-----

### P-Tuning v2

一种微调方法，是 P-Tuning 的改进版，同时借鉴了 prefix-tuning 微调的方法

> 1. 知乎：[人工智能大语言模型微调技术：SFT 监督微调、LoRA 微调方法、P-tuning v2 微调方法、Freeze 监督微调方法](https://zhuanlan.zhihu.com/p/643941480)