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



### SFT(Supervised FineTuning)

监督微调

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

-----

### GPT(Generate Pre-Train)


-----

### LoRA(Low-Rank Adaptation of Large Language Models)

低秩适配。一种常见的模型微调方法，特点是占用内存低，微调速度快。

> 1. [Paper](https://arxiv.org/abs/2106.09685)

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

### P-Tuning



> 1. [【P-Tuning】 一种自动学习 prompt pattern 的方法（附源码）](https://zhuanlan.zhihu.com/p/583022692)