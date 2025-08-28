console.log("스크립트 연결 됐어요");
// 눈에 보이는 요소가 아니기에 연결 되었다고 표시해주는것!

// console창은 개발자의 노트같은 개념

// >>
// 함수를 선언하고 이름을 정해줌!
// {그리고 그 안에 쓸 내용 적음}
function alertted() {
    alert("테스트 입니다.");
}

// alertted();
// 함수를 만들어놓고 호출해야함
// 그럼 알림창으로 뜸

// id 만든걸 불러와야하는데 그러기 위해선 '변수'가 필요


// JavaScript의 변수
// 변수는 var, let, const로 선언할 수 있습니다.

// var(function scope)는 이름 하나 선언해서 모두를 부를 수 있음
// 초기에 만들어진 개념
// 그러다보니 버그가 많음, 개발자 말고 다른 사람도 변경 가능해서 보안성 낮음
// 이후 let, const순으로 만들어짐. 둘 다 하나의 명령어에 이름 하나만 부를 수 있음
// 우리는 가장 최신버전만 알면 됨~


const toggleBtn = document.getElementById('toggleBtn');
// toggleBtn 이라는 const(변수)를 선언, 변수니까 =부등호 들어가는 것
// document : 문서
// .getElementById : id로 가져오겠다는 뜻
// class는 css에서 .@@로 호출하지만 id는 #으로 호출

// const toggleBtn = document.getElementsByClassName('navbar_toggleBtn');

const toggleBtn = document.querySelector('#toggleBtn');
// const toggleBtn = document.querySelector('.navbar_toggleBtn');
// querySelector는 id든 class든 상관없이 불러오는 명령어. 제일 많이 씀
// # . 으로 부를 이름 구분해주기
const menu = document.querySelector('#navbarMenu');
const sns = document.querySelector('#navbarSns');

console.log(toggleBtn);
console.log(menu);
console.log(sns);

function toggleMenu() {
    // menu.style.display = 'block' 처리하면 pc화면 menu에서도 block이 되어버림
    // menu.style.display = 'flex'
    // 이렇게 하면 다시 클릭했을 때 사라지지 않음. >토글이라는 의미가 없음/ 간단하게 짜기 위해 html의 힘을 빌려야함
    menu.classList.toggle('active');
    // 메뉴 안에 있는 .클래스를 .토글(넣었다뻿다)할 것이다('active를')
    sns.classList.toggle('active');
}
// toggleMenu(); 얘는 무조건 호출하는 명령어
// 우리는 클릭했을 때 보여야하는거니까 조건이 붙어야함

toggleBtn.addEventListener('click', toggleMenu);
// event를 add한다('클릭'하면, 내가 만든 이 함수를 호출한다.)
// ('click',toggleMenu())뒤에 ()안 써도 자동 호출이니 그냥 이름만 불러주면 됨

// event는 클릭, 마우스 움직임, 키 클릭 등 생겨나는 말 그대로 이벤트들
// 종류는 다양하니 구글에서 검색해서 쓰면 됨