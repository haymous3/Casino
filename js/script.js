// import hey from '../images/head.png';
const selectImageOne = document.querySelector('.game_center_right_imgs_one');
const selectImageTwo = document.querySelector('.game_center_right_imgs_two');
const playNow = document.querySelector('#playnow');
const imageHead = document.querySelector('#imagehead');
const imageTail = document.querySelector('#imagetail')
const one = document.getElementsByClassName('game_center_right_imgs_one active')
const two = document.getElementsByClassName('game_center_right_imgs_two active')



const resultone = one[0]

const LoadEventListerners = () => {
    selectImageOne.addEventListener('click', selectHead);
    selectImageTwo.addEventListener('click', selectTail);
    

}

let getNum;
let headSelect;
let tailSelect;


const selectHead = () => {
    selectImageOne.classList.add('active')
    selectImageTwo.classList.remove('active')

    // console.log(one[0])
     
    // if(one[0].className === 'game_center_right_imgs_one active'){
    //     return 1
    // }

    // return one[0].className;

    return 1
   

}





const selectTail = () => {
    selectImageOne.classList.remove('active');
    selectImageTwo.classList.add('active');

    // if(two[0].className === 'game_center_right_imgs_two active'){
    //     return 2
    // }

    // return two[0].className;

    return 2

}

LoadEventListerners()
 
const generateTwoRandomNumbers = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min
}



const createImageHead = () => {
 
    const createHead = document.createElement('img')
    createHead.src = 'images/head.png'
    createHead.id = "myimg"
    imageHead.appendChild(createHead)
}

const createImageTail = () => {
    const createTail = document.createElement('img')
    createTail.src = 'images/tail.png';

    createTail.id ="myimg"

    imageHead.appendChild(createTail)         
}



 const resetgame = () => {
    const deleteElement = document.getElementById('myimg')
    return deleteElement.remove()

   

 }

 

 headSelect = selectHead();
tailSelect = selectTail();





const startgame = () => {
    resetgame()
   
    
     getNum = generateTwoRandomNumbers(1,2)

     headSelect = selectHead();
     tailSelect = selectTail();

    
    if(getNum === 1){
        createImageHead()
    }else if(getNum === 2){
        createImageTail()
    }else{
        null
    }

    declearWinner()
    console.log(getNum)
    // console.log(headSelect)

 
}

console.log(headSelect)
const declearWinner = () => {

    switch (true) {
        case headSelect === getNum:
            alert('You win')
            break;
        case tailSelect === getNum:
            alert('You win')
            break;
        case headSelect < getNum:
            alert('You lose')
            break;
        case tailSelect > getNum:
            alert('You lose')
        default:
            break;
    }

    
    // if(headSelect === 1 &&  getNum === 1){
    //     alert('You win')
    //     return;
    // } else{
    //     alert('nop')
    // }
    
    // if(tailSelect === 2 && getNum === 2 ){
    //     alert('You don win')
    // }else{
    //     alert('You lost')
    // }
    
}



playNow.addEventListener('click', startgame)





























// if(selectHead() && getNum === 1){
   
//     alert('You won')
   
// }else if(selectTail() && getNum === 2 ){ 
//     alert('win')
// }

// else if(selectHead() && getNum !== 1){
   
//     alert('lose')
// }
// else if(selectTail() && getNum !== 2){
 
//     alert('you lose')
    
// }