# AI Society Research Lab

> 인간과 AI가 공존하는 **미래 AI 기반 사회**의 조건을 연구하는 비영리 독립 연구소 웹사이트입니다.
> 온디바이스·엣지 AI와 디지털 인프라(NAND·DRAM·HDD·GPU)에서 출발해, AI가 사회·경제·개인에
> 미치는 영향과 안전성·거버넌스까지 하나의 프레임으로 다룹니다.

**Live:** https://leemgs.github.io/ai-society-lab/

> ⚙ 이 저장소는 **GitHub Pages**를 통해 정적 웹사이트로 호스팅됩니다. (Branch: `main`, Folder: `/root`)

---

## 👤 창립자 (Founder)

**Geunsik Lim (임근식), Ph.D.** — Founder & Director, On-Device AI & Systems Researcher

임베디드 기기를 위한 시스템 소프트웨어와 온디바이스 AI를 오랜 기간 연구해 온 시스템 소프트웨어
엔지니어입니다. 신경망을 스트림 파이프라인의 필터로 처리하는 온디바이스 AI 프레임워크
**NNStreamer**의 핵심 연구자로, 이 성과로 **Samsung Best Paper Award (2021)** 를 수상했습니다.
Linux, GCC, Glibc, Android, Tizen, GStreamer 등 다양한 오픈소스 생태계에 기여해 왔습니다.

- GitHub: https://github.com/leemgs
- LinkedIn: https://www.linkedin.com/in/leemgs/
- Hugging Face: https://huggingface.co/leemgs
- Homepage: https://leemgs.github.io/

---

## 🔍 사이트 구성

멀티 페이지 정적 사이트이며, 공통 스타일과 스크립트를 `assets/`에서 관리합니다.

| 페이지 | 파일 | 내용 |
| --- | --- | --- |
| 홈 | `index.html` | 비전 히어로, 연구소 개요, 포커스 영역, 미래 사회 질문, 창립자, CTA |
| 소개 | `about.html` | 미션·연구 철학·운영 원칙·창립자 상세 |
| 비전 | `vision.html` | 미래 AI 사회 비전, 다섯 기둥, 연구 로드맵 |
| 연구 & 출판 | `research.html` | 연구 축(Themes)과 이슈 브리프·워킹페이퍼 아카이브 |
| 프로젝트 | `projects.html` | 오픈 프로젝트·도구 개요 |
| 연락처 | `contact.html` | 연결 채널·협업 안내 |

### 주요 특징

- **일관된 헤더/푸터/내비게이션** 과 접근성(건너뛰기 링크, `aria` 속성, 포커스 스타일)
- **딥 네이비 기반 디자인** — 그라데이션, 부드러운 카드·버튼 인터랙션, 벡터 로고(`assets/logo.svg`)
- **스크롤 등장 애니메이션** (`IntersectionObserver`) 및 `prefers-reduced-motion` 존중
- **SEO/공유 최적화** — Open Graph 메타, `sitemap.xml`, `robots.txt`, 사용자 정의 `404.html`

---

## 📁 폴더/파일 구조

```bash
.
├── index.html          # 홈
├── about.html          # 소개
├── vision.html         # 비전 & 로드맵
├── research.html       # 연구 & 출판
├── projects.html       # 프로젝트
├── contact.html        # 연락처
├── 404.html            # 사용자 정의 오류 페이지
├── robots.txt          # 크롤러 안내
├── sitemap.xml         # 사이트맵
├── assets
│   ├── style.css       # 전체 스타일 + 확장 컴포넌트
│   ├── main.js         # 공통 스크립트(내비/리빌/맨 위로/연도)
│   ├── logo.svg        # 로고
│   └── favicon.svg     # 파비콘
├── docs                # 리포트·워킹페이퍼 등 산출물
│   ├── IssueBrief_2025_Chatbot_Risk.pdf
│   ├── ResearchReport_2025_Template.docx
│   └── WorkingPaper_NAND_ModelScaling.docx
└── README.md
```

---

## 🚀 로컬에서 확인하기

간단히 브라우저로 `index.html`을 열어도 되지만, 로컬 서버 사용을 권장합니다.

```bash
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

---

## 🌐 GitHub Pages 배포

1. 저장소 → **Settings** → **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main`, 폴더는 `/ (root)`
4. 저장 후 잠시 기다리면 사이트가 게시됩니다: `https://leemgs.github.io/ai-society-lab/`

---

## 📜 라이선스

본 저장소의 웹 코드/템플릿은 연구 및 비영리 목적에 한해 자유롭게 수정·사용할 수 있습니다.
2차 배포 시 출처 표기를 권장합니다. 사이트에 게시된 모든 견해는 연구자 개인의 관점이며,
별도 명시가 없는 한 어떤 기관·기업의 공식 입장이 아닙니다.
