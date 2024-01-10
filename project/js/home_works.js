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


const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
const moveRight = (distance) => {
    const currentPosition = parseInt(childBlock.style.left) || 0;

    if (currentPosition < parentBlock.clientWidth - childBlock.clientWidth) {
        childBlock.style.left = `${currentPosition + distance}px`;
        setTimeout(() => moveRight(distance), 20);
    }
};
moveRight(2);




