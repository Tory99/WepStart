function compareVarialbe(){
    let num1;
    const num2 = 30;
    num2 = 20;
    alert("num2 : " + num2);
}

/* 아이디 값을 가져와 팝업창으로 띄우기 */
function popId() {
    let userId = document.getElementById('login_id').value;

    if(!userId){
        alert("아이디를 입력해주세요");
    } else {
        alert(userId);
    }
}

/* 함수 만들고 호출하기 */
function myFunction() {
    alert('1');
    alert('2');
    alert('3');
}