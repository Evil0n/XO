let Field = document.getElementById('Field')
let Move = 0
Field.addEventListener("click", function (event) {
    if (Move % 2 === 0) {
        event.target.innerHTML = 'X';
    } else{
        event.target.innerHTML = 'O';
    }
    Move++
    check()
})

function check() {
    let cells = document.getElementsByClassName('Cell');
    let arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for(let i = 0; i<arr.length; i++){
        if(cells[arr[i][0]].innerHTML== 'X'&& cells[arr[i][1]].innerHTML== 'X'&& cells[arr[i][2]].innerHTML== 'X') {
            alert('X Wins');
            location.reload();
        }else if(cells[arr[i][0]].innerHTML== 'O'&& cells[arr[i][1]].innerHTML== 'O'&& cells[arr[i][2]].innerHTML== 'O'){
            alert('O Wins');
            location.reload();
        }
    }
}
