这份报告是为你准备的 **10分钟自学汇报 PPT 内容大纲与讲稿**。

**选定论文：** *Social-RAG: Retrieving from Group Interactions to Socially Ground AI Generation*
**发表会议：** CHI 2025
**核心主题：** 如何利用 RAG（检索增强生成）技术，让 AI 智能体通过学习群组聊天记录，生成符合群组社交规范和兴趣的内容。

---

## 汇报 PPT 大纲 (建议页数：10-12页)

### 1. 封面 (Title Slide)
*   **标题：** Social-RAG: Retrieving from Group Interactions to Socially Ground AI Generation
*   **中文译名：** Social-RAG：从群组互动中检索以实现 AI 生成的社交接地
*   **作者：** Ruotong Wang, Xinyi Zhou, 等 (University of Washington & Allen Institute for AI)
*   **会议：** CHI 2025
*   **汇报人：** [你的名字/小组名]

### 2. 宏观背景 (The Big Picture) - [1分钟]
*   **一句话总结：** 本文提出了一种新的工作流 **Social-RAG**，通过检索群组的历史互动（如聊天记录、点赞），让 AI 智能体（Agent）能够“读懂空气”，生成符合群组兴趣和社交规范的内容。
*   **核心价值：** 解决 AI 在群组协作中常常显得“不知所措”或“令人烦躁”的问题，探索 **Human-AI Collaboration**（人机协作）中 AI 如何融入人类社交空间。
*   **应用场景：** 学术群组的论文推荐机器人 (**PaperPing**)。

> **🗣️ 讲稿参考：**
> 大家好，今天我们要汇报的论文来自 CHI 2025，题目是 Social-RAG。简单来说，这篇文章探讨了一个问题：当我们把 AI 放入群聊时，它如何才能不像一个冷冰冰的机器，而是像一个懂大家兴趣的“熟人”？作者提出了 Social-RAG，利用群组历史互动数据来“接地气”地生成内容。

### 3. 研究背景与问题 (Context & Problem) - [1.5分钟]
*   **现有问题 (The Gap)：**
    *   **社交感知缺失：** 现有的 AI 智能体（如聊天机器人）通常使用通用的模板，不懂群组的特定偏好（Social Norms）。
    *   **“冷启动”困难：** 为了让 AI 懂你，通常需要用户手动填表或投票（Explicit Feedback），这很麻烦且干扰群组。
    *   **RAG 的局限：** 传统的 **RAG (Retrieval Augmented Generation)** 检索的是事实知识（如维基百科），忽略了 **Social Knowledge**（社交知识/群组动态）。
*   **核心挑战：** 如何在不打扰用户的前提下，让 AI 自动学习群组的偏好和规范？

> **🗣️ 讲稿参考：**
> 目前在群组里的 AI 往往很尴尬，要么发的东西没人看，要么发得太频繁打扰大家。虽然 RAG 技术很火，但大家通常用它检索事实（Fact），比如“法国首都是哪”。但这篇论文提出，我们应该检索“社交事实（Social Facts）”，比如“这个群最近在热烈讨论什么”或者“张三喜欢什么样的论文”。

### 4. 研究问题 (Research Questions) - [0.5分钟]
*   **RQ1 (Feedback):** 这种隐式反馈机制（点赞、历史记录）收集群组兴趣的效果如何？
*   **RQ2 (Explanation):** 基于社交信号的 AI 解释（Social Explanations）能否有效传达相关性？
*   **RQ3 (Practices):** AI 是否会破坏群组原有的社交习惯？
*   **RQ4 (Common Ground):** AI 能否促进群组的共同基础（Common Ground）？

### 5. 研究方法论 (Methodology) - [1.5分钟]
本文采用了标准的 **User-Centered Design (UCD)** 流程：
1.  **Formative Studies (形成性研究):**
    *   采访 13 位研究员 + 问卷调查 26 人。
    *   **发现：** 学者们喜欢在群里分享论文，但写推荐语很累；他们更喜欢**中立、简短**的推荐语，并希望看到**社交上下文**（如：谁可能感兴趣）。
2.  **System Design (系统设计):** 开发了 **Social-RAG** 工作流和 **PaperPing** 系统。
3.  **Field Deployment (实地部署):**
    *   **18 个 Slack 频道**，覆盖 **500+ 研究人员**。
    *   时长：**3个月**。
    *   数据：日志分析 + 退出访谈 + 离线评估任务。

> **🗣️ 讲稿参考：**
> 这篇文章的方法论非常扎实。他们首先通过访谈确定了用户需求——大家其实很想分享论文，但懒得写推荐语。然后他们开发了系统，并进行了长达3个月的真实环境部署，覆盖了500多名用户，这在 HCI 研究中是非常大规模的实地研究。

### 6. 系统设计 (System Design) - [2分钟]
*   **核心概念：Social-RAG 工作流 (4步)**
    1.  **Index (索引):** 收集群聊历史，提取“Social Facts”（谁分享了什么，谁点了赞）。
    2.  **Retrieve (检索):** 当有新内容（如新论文）时，检索相关的社交信号（Social Signals）。
        *   *信号示例：* “这篇论文引用了群友A上周分享的文章”、“群友B之前点赞过类似话题”。
    3.  **Generate (生成):** 利用 LLM 生成带有**社交解释**的推荐语。
    4.  **Feedback (反馈):** 用户的点赞/回复会成为新的历史数据，闭环优化。
*   **PaperPing 界面展示:**
    *   展示论文截图 Figure 2/3。
    *   **特点：** 会 @感兴趣的人，会引用之前的讨论（Link to context）。

> **🗣️ 讲稿参考：**
> 这是核心的系统设计。不同于传统 RAG 检索文档，Social-RAG 检索的是“社交信号”。比如，PaperPing 推荐论文时，不仅仅说“这是一篇关于 LLM 的论文”，而是说“@张三，这篇论文和你上周分享的那篇很像，而且李四也点过赞”。这种解释让 AI 显得非常有“情商”。

### 7. 研究结果 (Results/Findings) - [2分钟]
*   **定量结果 (Quantitative):**
    *   **高相关性：** 75.7% 的推荐被认为与群组偏好相关。
    *   **解释的有效性：** 离线评估显示，带有 **Social Signals** 的解释（如：“因为张三喜欢过...”）显著优于普通的 **TLDR**（仅摘要）。
    *   **低负担：** 88% 的用户认为使用该系统几乎不需要额外努力。
*   **定性发现 (Qualitative):**
    *   **"Invited Robot Guest":** 用户觉得 AI 像一个受邀的机器人客人，没有破坏原有对话。
    *   **Fostering Common Ground:** 帮助群成员发现彼此的兴趣（“原来你也关注这个方向”）。
    *   **局限：** 在非常不活跃的群组（死群）里，AI 也很难救活；有时候解释可能会过度解读（Hallucination of social intent）。

### 8. 讨论与贡献 (Discussion & Contributions) - [1分钟]
*   **理论贡献：** 提出了 **Social Grounding** 的分层模型（从通用的 Category-level 到个性化的 Individual-level）。
*   **设计启示：**
    *   **Implicit Feedback (隐式反馈):** 利用现有的点赞/聊天记录比强制用户填表更有效。
    *   **Transparency (透明度):** AI 需要解释“为什么推荐给你”，引用社交历史是建立信任的好方法。
    *   **Tension:** 平衡“群组兴趣”和“个人兴趣”是一个难点。

### 9. 总结与反思 (Takeaways) - [0.5分钟]
*   **Takeaway 1:** 未来的 AI 助手不应只懂知识，更要懂“关系”和“历史”。
*   **Takeaway 2:** **Social-RAG** 提供了一个很好的范式，将群聊数据转化为 AI 的长期记忆和社交直觉。
*   **对我们组的启发：** （根据你们组的方向填写，例如：我们可以参考它利用历史数据的方式；或者我们在做群组协作时也要考虑社交信号的提取。）

---

## 演讲关键技巧提示 (Presentation Tips)

1.  **区分 "Social-RAG" 和 "PaperPing"：**
    *   **Social-RAG** 是思想/工作流（The Workflow/Concept）。
    *   **PaperPing** 是具体的实现系统（The System/App）。
    *   *汇报时要强调 PaperPing 只是 Social-RAG 的一个应用实例。*

2.  **强调 "Social Facts" (社交事实)：**
    *   这是本文最核心的创新点。传统 RAG 检索文本，他们检索的是“人与内容的交互”。

3.  **展示真实案例：**
    *   在讲系统时，一定要指着 PPT 上的截图（Figure 2 或 Figure 4），念出 AI 生成的具体句子（例如：“@Tom，这篇论文你可能感兴趣，因为它引用了你上周分享的那篇...”），这比讲原理更直观。

4.  **时间控制：**
    *   这篇论文内容很多（25页），不要陷入具体的算法细节（比如 Embeddings 怎么算的），重点讲 **Design Goal（设计目标）** 和 **Field Study（实地部署）** 的用户反馈。

希望这份大纲能帮助你们组顺利完成汇报！如有具体某页 PPT 需要更详细的文字，请随时告诉我。