# AI Society Research Lab (Non-profit, 1-person Lab)

AI 기반 사회와 디지털 인프라(NAND·HDD·GPU 등)에 대한 리포트, 워킹페이퍼 등을
공개하기 위한 비영리 1인 연구소 웹사이트용 리포지토리입니다.

> ⚙ 이 레포는 **GitHub Pages**를 통해 정적 웹사이트로 호스팅되는 것을 전제로 합니다.

---

## 🔍 주요 특징

- **멀티 페이지 구조**
  - `index.html`: 메인/홈 (연구소 개요, 핵심 주제, 요약)
  - `about.html`: 연구소 소개 (미션, 연구 철학)
  - `research.html`: 연구 축 & 출판 목록
  - `projects.html`: 프로젝트 개요
  - `contact.html`: 연락처 & 협업 안내
- **공통 스타일**
  - `assets/style.css`에서 전체 페이지 스타일 및 애니메이션 관리
- **비영리 AI 사회 연구소 느낌의 디자인**
  - 딥 네이비 기반 컬러, 그라데이션, 부드러운 카드 및 버튼 인터랙션
  - AI와 사회, 인프라 키워드를 반영한 심플 벡터 로고 (`assets/logo.svg`) 포함

---

## 📁 폴더/파일 구조

```bash
.
├── index.html          # 메인 페이지
├── about.html          # 연구소 소개
├── research.html       # 연구 & 출판
├── projects.html       # 프로젝트
├── contact.html        # 연락처
├── assets
│   ├── style.css       # 전체 스타일
│   └── logo.svg        # AI Society Research Lab 로고
└── README.md
```

---

## 🚀 GitHub Pages 배포 방법

1. **리포지토리 생성**

   GitHub에서 새 리포지토리를 생성합니다.  
   예: `ai-law-society-lab`

2. **파일 업로드**

   위 구조대로 파일을 리포지토리에 추가합니다.

   ```bash
   git clone https://github.com/<your-id>/ai-law-society-lab.git
   cd ai-law-society-lab

   # 이 폴더 안에 index.html, about.html, ... , assets/ 등을 넣은 뒤
   git add .
   git commit -m "Initial AI Law & Society Lab website"
   git push origin main
   ```

3. **GitHub Pages 설정**

   - 리포지토리 → **Settings** → **Pages**
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` 선택, 폴더는 `/root`
   - 저장 후 잠시 기다리면 사이트 URL이 생성됩니다.

   예시:

   ```
   https://<your-github-id>.github.io/ai-law-society-lab/
   ```

---

## ✏ 커스터마이징 포인트

### 1. 연구소 이름 / 타이틀

현재는 이름을 다음과 같이 가정해 두었습니다.

- 영문: **AI Society Research Lab**
- 한글: **AI 사회 연구소** (텍스트 설명에서 사용 가능)

필요하다면 각 HTML 파일의 `<title>` 태그와 헤더의 로고 옆 텍스트를
원하시는 정식 연구소 이름으로 교체하시면 됩니다.

### 2. 연락처 정보

`contact.html`에서 다음 항목을 실제 값으로 교체하세요.

```html
이메일: contact@ailawsociety.org
GitHub: https://github.com/ailawsociety
```

현재 값은 예시일 뿐이며, 실제 운용 시에는 본인이 관리하는 계정으로 변경하는 것을 권장합니다.

### 3. 연구 & 출판 / 프로젝트 내용

- `research.html`의 논문·리포트 항목
- `projects.html`의 프로젝트 설명

현재는 사용자의 관심사(예: AI 안전성, 자살 유도 리스크, NAND·HDD 수요 등)에 맞춘 예시 텍스트가 들어 있습니다.
실제 진행 중인 연구 제목·요약·링크로 교체하면 바로 개인 연구소 포트폴리오 페이지로 활용할 수 있습니다.

---

## 🧪 로컬에서 테스트하기

간단히 브라우저로 `index.html`을 열어도 되지만,
원하시면 아래처럼 간단한 로컬 서버를 띄울 수 있습니다.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속 후 페이지를 확인하세요.

---

## 📜 라이선스 (예시)

연구소 성격에 따라 자유롭게 선택하시면 됩니다.  
별도 라이선스를 지정하지 않으셨다면 아래와 같은 문구를 둘 수 있습니다.

```text
본 리포지토리의 코드 및 웹 템플릿은 연구 및 비영리 목적에 한해 자유롭게 수정 및 사용 가능합니다.
상업적 사용 또는 2차 배포 시에는 출처 표기를 권장합니다.
```

(공식 라이선스를 사용하고 싶으시면 MIT, Apache-2.0, CC BY 등도 고려하실 수 있습니다.)
