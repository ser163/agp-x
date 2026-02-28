# AGP-X（AI Git 扩展协议）

> 从代码仓库 → 功能网络

AGP-X 试图把代码仓库转化为“功能图谱”。

---

## 核心理念

- 代码不应该重复写
- 功能应该可复用
- AI 应该先检索再生成

---

## 功能

- Function ID（函数标识）
- Embedding（向量化）
- 匹配系统
- 功能图谱

---

## 快速开始

```bash
npm install
node cli/agpx init
node cli/agpx scan
node cli/agpx match "支付 订阅"
