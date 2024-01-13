//hw1(part1)
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");
const regExp = /^[a-z1-9_]+@gmail\.com$/gi
gmailButton.addEventListener("click",() =>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'GOOD!'
        gmailResult.style.color = 'green'

    }else{
        gmailResult.innerHTML = 'ERROR!'
        gmailResult.style.color = 'red'
    }

})

// hw1(part2)
const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
// const moveRight = (distance) => {
//     const currentPosition = parseInt(childBlock.style.left) || 0;
//
//     if (currentPosition < parentBlock.clientWidth - childBlock.clientWidth) {
//         childBlock.style.left = `${currentPosition + distance}px`;
//         setTimeout(() => moveRight(distance), 20);
//     }
// };
// moveRight(2);

// hw2(part1)


// requestAnimationFrame(() => moveRight(distance))

const moveClockwise = () => {
    const distance = 2;
    const currentPositionX = parseInt(childBlock.style.left) || 0;
    const currentPositionY = parseInt(childBlock.style.top) || 0;

    if (
        currentPositionX < parentBlock.clientWidth - childBlock.clientWidth &&
        currentPositionY === 0
    ) {
        childBlock.style.left = `${currentPositionX + distance}px`;
    } else if (
        currentPositionX >= parentBlock.clientWidth - childBlock.clientWidth &&
        currentPositionY < parentBlock.clientHeight - childBlock.clientHeight
    ) {
        childBlock.style.top = `${currentPositionY + distance}px`;
    } else if (
        currentPositionX > 0 &&
        currentPositionY >= parentBlock.clientHeight - childBlock.clientHeight
    ) {
        childBlock.style.left = `${currentPositionX - distance}px`;
    } else if (
        currentPositionX === 0 &&
        currentPositionY > 0
    ) {
        childBlock.style.top = `${currentPositionY - distance}px`;
    }

    setTimeout(moveClockwise, 20);
};

moveClockwise();

// hw2(part2)

let timerInterval;
let seconds = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateTimer();
}

function updateTimer() {
    document.getElementById('seconds').innerText = seconds++;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

resetTimer();








