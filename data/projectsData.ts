interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'job_hunter',
    description: `Finds jobs, tailors a CV from verified facts and pre-fills real application forms. It cannot submit without an approval bound to a hash of the CV, letter and form fields. Python, SQLite, Playwright.`,
    imgSrc: '',
    href: 'https://github.com/aryan-bhattarai/job_hunter',
  },
  {
    title: 'devPilot',
    description: `An AI developer assistant on the Model Context Protocol. MCP servers for GitHub, tasks, files and docs search with cited answers, plus a human-approval gate that fails closed.`,
    imgSrc: '',
    href: 'https://github.com/aryan-bhattarai/devPilot',
  },
  {
    title: 'ai-guardrails',
    description: `Provider-agnostic input and output validation for LLM apps. YAML policies, a CLI and a FastAPI service. Fails closed, never logs content, and documents what it cannot catch.`,
    imgSrc: '',
    href: 'https://github.com/aryan-bhattarai/guardrails_ai_scafold',
  },
  {
    title: 'Autonomous Research Agent',
    description: `A LangGraph pipeline that plans, searches, summarises and writes notes, then stores them in Qdrant for follow-up questions. FastAPI backend with streaming progress.`,
    imgSrc: '',
    href: 'https://github.com/aryan-bhattarai/autonomous_research_agent',
  },
  {
    title: 'Glaucoma Detection (published)',
    description: `Attention U-Net segmentation of the optic disc and cup, then DeiT-Tiny classification. 89.77% accuracy and 0.9564 AUC on 12,449 images. Co-authored paper in InJET.`,
    imgSrc: '',
    href: 'https://doi.org/10.3126/injet.v3i2.95539',
  },
  {
    title: 'LLM Fine-Tuning',
    description: `Continued pretraining, instruction tuning and domain adaptation of open models (TinyLlama, Qwen2.5) with LoRA.`,
    imgSrc: '',
    href: 'https://github.com/Aryan2079/LLM_finetuning',
  },
  {
    title: 'Talktive',
    description: `A desktop app for messaging and video calls, built with Tauri.`,
    imgSrc: '',
    href: 'https://github.com/Aryan2079/Talktive',
  },
  {
    title: 'async-play',
    description: `An async echo client and server in Rust, with and without Tokio.`,
    imgSrc: '',
    href: 'https://github.com/Aryan2079/async-play',
  },
]

export default projectsData
