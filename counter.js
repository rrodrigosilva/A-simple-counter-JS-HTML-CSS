let count = 0;

function toAddOne(){
    count++;
    document.getElementsByClassName("counter")[0].innerText = count;
}

function toDecreaseOne() {
    if (count >= 1) {
    count--;
    document.getElementsByClassName("counter")[0].innerText = count;
    } else {
        alert("You can't count less then zero.");
    }
}