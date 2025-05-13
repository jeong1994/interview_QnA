const qaData = [
  {
    question: "1. RDBMS란 무엇인가요?",
    answer: `관계형 데이터베이스 관리 시스템 입니다<br>
데이터를 행과 열로 구성된 테이블 형태로 저장하고<br>
테이블간의 관계를 정의해서 데이터를 효율적으로 관리할 수 있게 해주는 시스템입니다`
  },
  {
    question: "2. DDL과 DML의 차이점은 무엇인가요?",
    answer: `DDL은 데이터 정의 언어로<br>
테이블, 뷰, 인덱스 같은 데이터베이스 객체의 구조를 정의하거나 변경할 때 사용하고<br>
CREATE ALTER DROP이 있습니다<br><br>
DML은 데이터 조작 언어로<br>
테이블 안의 데이터를 조회, 추가, 수정, 삭제 할 때 사용합니다<br>
SELECT INSERT UPDATE DELETE가 있습니다`
  },
  {
    question: "3. JOIN의 종류와 각 의미는?",
    answer: `INNER JOIN: 두 테이블에서 조건이 일치하는 데이터만 조회하고<br>
LEFT OUTER: 왼쪽 테이블의 모든 데이터와 조건이 일치하는 오른쪽 테이블의 데이터를 조회하면서<br>
일치하지 않는 오른쪽 데이터는 NULL로 표시됩니다<br>
RIGHT OUTER: 오른쪽 기준 LEFT와 방향만 반대<br>
FULL OUTER: 양쪽 테이블 전체 데이터를 가져오고 조건이 맞지 않으면 NULL로 표시됩니다<br>
CROSS JOIN: 모든 조합을 가져옵니다`
  },
  {
    question: "4. 서브쿼리와 조인의 차이점은?",
    answer: `둘 다 여러 테이블의 데이터를 함께 조회하려고 사용하지만<br>
서브쿼리는 쿼리 안에 또 다른 쿼리를 넣는 방식으로 보통 WHERE FROM SELECT절 안에서 사용합니다<br>
조인은 두 테이블을 직접 연결해서 한 테이블처럼 결과를 조회하는 방식입니다<br>
특히 두 테이블 간에 관계가 명확할 때 JOIN이 더 적합하고<br>
성능도 일반적으로는 JOIN이 서브쿼리보다 더 유리한 경우가 많습니다`
  },
  {
    question: "5. 인덱스(Index)란 무엇이고 언제 사용하나요?",
    answer: `인덱스는 검색 속도를 높이기 위해 사용하는 자료구조입니다<br>
전체 데이터를 다 뒤지지 않고도 필요한 데이터를 빠르게 찾을 수 있도록 도와줍니다<br>
보통 WHERE 조건에 자주 사용되는 컬럼이나<br>
조인, 오더바이, 그룹바이에 자주 쓰이는 컬럼에 인덱스를 걸어두면 쿼리 성능을 향상 시킬 수 있습니다<br>
근데 인덱스가 많아지면 INSERT UPDATE DELETE 시 성능이 오히려 떨어져서<br>
자주 조회되거나 조건에 자주 들어가는 컬럼 위주로 선택적으로 설정하는게 중요합니다`
  },
  {
    question: "6. NULL과 0의 차이는?",
    answer: `NULL은 값이 없는, 정해지지 않았다는 의미이고<br>
0은 숫자값이 존재하며 그 값이 0이라는 의미입니다`
  },
  {
    question: "7. 트랜잭션(Transaction)의 4가지 특성(ACID)이란?",
    answer: `원자성 일관성 고립성 지속성이 있고<br>
원자성은 트랜잭션 내 작업은 모두 성공하거나 모두 실패해야 하는 성질<br>
일관성은 트랜잭션 수행 전과 후의 데이터는 제약조건이나 관계 등을 항상 만족해야됩니다<br>
고립성은 동시에 여러 트랜잭션이 수행되도 서로 간섭없이 독립적이어야 하고<br>
지속성은 트랜잭션이 성공적으로 완료 되면 그 결과는 DB에 영구적으로 반영되면서<br>
시스템이 중단돼도 보존되어야 합니다`
  },
  {
    question: "8. 오라클에서 시퀀스(Sequence)는 무엇이고 왜 사용하나요?",
    answer: `고유한 숫자값을 자동으로 생성해주는 객체 입니다<br>
주로 기본키나 일련번호를 자동으로 부여할 때 사용합니다`
  },
  {
    question: "9. VIEW란 무엇이고 어떤 상황에서 쓰나요?",
    answer: `뷰는 하나 이상의 테이블을 조합해서 만든 가상테이블입니다<br>
실제 데이터를 저장하지 않고 지정된 SELECT 쿼리 결과를 테이블처럼 보여주는 객체입니다<br>
복잡한 조인이나 필터 조건이 반복될 때 뷰로 만들어두면 필요할 때마다 쉽게 재사용 할 수 있고<br>
민감한 정보를 포함한 테이블에서 특정 컬럼만 노출하고 싶을 때도 뷰를 활용할 수 있습니다`
  },
  {
    question: "10. ERD란 무엇이며 설계할 때 주의할 점은?",
    answer: `데이터베이스에서 테이블간의 관계를 시각적으로 표현한 다이어그램입니다<br>
설계단계에서 데이터 구조를 명확히 하고 중복 없이 테이블을 구성하기 위해 사용합니다`
  }
];

let usedIndexes = [];
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

function pickRandomIndex() {
  if (usedIndexes.length === qaData.length) return null;

  let index;
  do {
    index = Math.floor(Math.random() * qaData.length);
  } while (usedIndexes.includes(index));

  usedIndexes.push(index);
  return index;
}

function loadQuestion() {
  const index = pickRandomIndex();
  if (index === null) {
    questionEl.textContent = "모든 질문을 다 보셨습니다!";
    answerEl.style.display = "none";
    showAnswerBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  const qa = qaData[index];
  questionEl.textContent = qa.question;
  answerEl.innerHTML = qa.answer;
  answerEl.style.display = "none";
  showAnswerBtn.disabled = false;
  progressEl.textContent = `현재 질문 ${usedIndexes.length} / 총 질문 ${qaData.length}`;
}

showAnswerBtn.onclick = () => {
  answerEl.style.display = "block";
};

nextBtn.onclick = () => {
  loadQuestion();
};

// 첫 질문 로딩
loadQuestion();