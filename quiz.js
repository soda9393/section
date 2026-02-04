const questions = [
    { q: "새로운 사람을 만나는 자리가 즐겁다.", a: "그렇다", b: "아니다", type: "EI" },
    { q: "혼자 있는 시간보다 사람들과의 시간이 에너지를 준다.", a: "그렇다", b: "아니다", type: "EI" },
    { q: "말하면서 생각이 정리되는 편이다.", a: "그렇다", b: "아니다", type: "EI" },
    { q: "휴식할 때도 누군가와 함께하는 게 좋다.", a: "그렇다", b: "아니다", type: "EI" },
    { q: "사실과 실제 경험을 더 신뢰한다.", a: "그렇다", b: "아니다", type: "SN" },
    { q: "아이디어보다 현실적인 방법이 더 중요하다.", a: "그렇다", b: "아니다", type: "SN" },
    { q: "세부사항을 꼼꼼히 보는 편이다.", a: "그렇다", b: "아니다", type: "SN" },
    { q: "새로운 가능성보다 검증된 방식이 편하다.", a: "그렇다", b: "아니다", type: "SN" },
    { q: "의사결정 시 논리와 기준을 우선한다.", a: "그렇다", b: "아니다", type: "TF" },
    { q: "갈등 상황에서 공정보다 관계를 더 고려한다.", a: "아니다", b: "그렇다", type: "TF" },
    { q: "피드백은 감정보다 정확성이 중요하다.", a: "그렇다", b: "아니다", type: "TF" },
    { q: "중요한 선택에서 마음보다 분석이 먼저다.", a: "그렇다", b: "아니다", type: "TF" },
    { q: "미리 계획을 세우면 마음이 편하다.", a: "그렇다", b: "아니다", type: "JP" },
    { q: "마감 직전보다 일찍 끝내는 편이다.", a: "그렇다", b: "아니다", type: "JP" },
    { q: "일정이 바뀌면 스트레스를 받는다.", a: "그렇다", b: "아니다", type: "JP" },
    { q: "즉흥적 선택보다 준비된 선택을 선호한다.", a: "그렇다", b: "아니다", type: "JP" },
    { q: "팀 활동에서 진행을 이끄는 역할을 자주 맡는다.", a: "그렇다", b: "아니다", type: "EI" },
    { q: "새 주제는 개념부터 이해하려는 편이다.", a: "아니다", b: "그렇다", type: "SN" },
    { q: "친구 고민을 들을 때 해결책을 먼저 제시한다.", a: "그렇다", b: "아니다", type: "TF" },
    { q: "여행은 큰 틀만 정하고 유동적으로 움직이는 편이다.", a: "아니다", b: "그렇다", type: "JP" }
];

const results = {
    ISTJ: { major: "항공통제과", desc: "책임과 질서를 중시하는 성향으로 항공 운항의 기준과 절차를 정확히 지키는 데 강점이 있습니다." },
    ESTJ: { major: "항공통제과", desc: "리더십과 실행력이 뛰어나 상황 판단과 통제 업무에서 안정적인 성과를 기대할 수 있습니다." },
    ISFJ: { major: "항공통제과", desc: "세심함과 책임감이 높아 안전 중심의 항공 통제 환경에 잘 어울립니다." },
    ESFJ: { major: "항공통제과", desc: "협업 능력과 성실함이 좋아 질서 있는 운항 지원 업무에 적합합니다." },

    INTJ: { major: "항공전자과", desc: "논리적 사고와 체계적 분석 능력이 강해 항공 전자 시스템 이해에 유리합니다." },
    INTP: { major: "항공전자과", desc: "원리 탐구와 문제 해결에 강해 전자 회로 및 시스템 분석에 적합합니다." },
    INFJ: { major: "항공전자과", desc: "깊은 통찰력과 집중력으로 정밀한 전자 장비 이해와 개선에 강점을 보입니다." },
    INFP: { major: "항공전자과", desc: "개념 이해와 몰입이 좋아 전자 기술을 창의적으로 해석하고 적용할 수 있습니다." },

    ENTP: { major: "정보통신과", desc: "창의적인 아이디어와 빠른 사고로 통신 문제 해결 및 응용에 강점이 있습니다." },
    ENFP: { major: "정보통신과", desc: "새로운 시도를 즐기는 성향으로 정보통신 분야의 융합형 프로젝트에 잘 맞습니다." },
    ENTJ: { major: "정보통신과", desc: "전략적 사고와 추진력이 뛰어나 통신 시스템 기획과 운영에 적합합니다." },
    ENFJ: { major: "정보통신과", desc: "소통 능력과 실행력이 좋아 정보통신 협업 환경에서 강한 성과를 냅니다." },

    ISTP: { major: "항공기계과", desc: "실습 중심 문제 해결 능력이 뛰어나 기계 정비와 현장 대응에 강합니다." },
    ESTP: { major: "항공기계과", desc: "현장 적응력이 높고 빠른 판단이 가능해 항공기계 실무와 잘 맞습니다." },
    ISFP: { major: "항공기계과", desc: "섬세한 손기술과 집중력을 바탕으로 정밀 기계 작업에 강점을 보입니다." },
    ESFP: { major: "항공기계과", desc: "활동성과 실전 감각이 좋아 현장 중심의 항공기계 실습에 적합합니다." }
};

const majorThemes = {
    "항공통제과": {
        className: "theme-control",
        icon: "🛫"
    },
    "항공전자과": {
        className: "theme-electronics",
        icon: "🔌"
    },
    "정보통신과": {
        className: "theme-network",
        icon: "📡"
    },
    "항공기계과": {
        className: "theme-mechanical",
        icon: "⚙️"
    }
};

let currentIdx = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function resetQuizState() {
    currentIdx = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    document.getElementById("progress").style.width = "0%";
    document.getElementById("question-number").innerText = `1 / ${questions.length}`;
    document.getElementById("result-screen").classList.remove("theme-control", "theme-electronics", "theme-network", "theme-mechanical", "theme-default");
}

function toggleMajorPreview() {
    const preview = document.getElementById("major-preview");
    preview.style.display = preview.style.display === "none" ? "block" : "none";
}

function closeMajorPreview() {
    document.getElementById("major-preview").style.display = "none";
}

function startQuiz() {
    resetQuizState();
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    showQuestion();
}

function goToStartFromQuiz() {
    resetQuizState();
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}

function showQuestion() {
    const q = questions[currentIdx];
    const answerAButton = document.getElementById("answer-a");
    const answerBButton = document.getElementById("answer-b");

    document.getElementById("question-text").innerText = q.q;
    answerAButton.innerText = q.a;
    answerBButton.innerText = q.b;

    answerAButton.classList.remove("answer-yes", "answer-no");
    answerBButton.classList.remove("answer-yes", "answer-no");
    answerAButton.classList.add(q.a === "그렇다" ? "answer-yes" : "answer-no");
    answerBButton.classList.add(q.b === "그렇다" ? "answer-yes" : "answer-no");

    document.getElementById("question-number").innerText = `${currentIdx + 1} / ${questions.length}`;

    const progress = ((currentIdx + 1) / questions.length) * 100;
    document.getElementById("progress").style.width = `${progress}%`;
}

function selectAnswer(choice) {
    const q = questions[currentIdx];
    const type = q.type;

    if (choice === 0) {
        scores[type[0]] += 1;
    } else {
        scores[type[1]] += 1;
    }

    currentIdx += 1;
    if (currentIdx < questions.length) {
        showQuestion();
        return;
    }
    showResult();
}

function showResult() {
    document.getElementById("question-screen").style.display = "none";
    const resultScreen = document.getElementById("result-screen");
    resultScreen.style.display = "block";

    let mbti = "";
    mbti += scores.E >= scores.I ? "E" : "I";
    mbti += scores.S >= scores.N ? "S" : "N";
    mbti += scores.T >= scores.F ? "T" : "F";
    mbti += scores.J >= scores.P ? "J" : "P";

    const result = results[mbti] || {
        major: "탐색형 전공",
        desc: "한 가지 성향으로 단정하기 어려워요. 관심 과목을 중심으로 더 탐색해 보세요."
    };
    const theme = majorThemes[result.major] || {
        className: "theme-default",
        icon: "✈️"
    };

    resultScreen.classList.remove("theme-control", "theme-electronics", "theme-network", "theme-mechanical", "theme-default");
    resultScreen.classList.add(theme.className);

    document.getElementById("mbti-type").innerText = mbti;
    document.getElementById("major-icon").innerText = theme.icon;
    document.getElementById("major-name").innerText = result.major;
    document.getElementById("major-desc").innerText = result.desc;
}
