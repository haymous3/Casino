// import hey from '../images/head.png';
const selectImageOne = document.querySelector('.game_center_right_imgs_one');
const selectImageTwo = document.querySelector('.game_center_right_imgs_two');
const playNow = document.querySelector('#playnow');
const imageHead = document.querySelector('#imagehead');




let headSelect = '';
let tailSelect = ''

const LoadEventListerners = () => {
    selectImageOne.addEventListener('click', selectHead);
    selectImageTwo.addEventListener('click', selectTail);
    // selectSide.addEventListener('click', one)
    // tailSelect.addEventListener('click', two)
   
    

}




const selectHead = () => {
    
    selectImageOne.classList.add('active');
    selectImageTwo.classList.remove('active');

   return document.getElementsByClassName('game_center_right_imgs_one active');

//    return headSelect

}


// headSelect = selectHead()


const selectTail = () => {
    selectImageOne.classList.remove('active');
    selectImageTwo.classList.add('active');

    return document.getElementsByClassName('game_center_right_imgs_two active');
}

// console.log(headSelect)
// tailSelect = selectTail()

const generateTwoRandomNumbers = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min
}

const identifyUserClick = (head, tail) => {

    if(head){
        return 1
    }else if(tail){
        return 2
    }
    if(tail === false){ 
        return 1
    }else if(head === false){
        return 2
    }

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



const startgame = () => {
    resetgame()
    

  
     getNum = generateTwoRandomNumbers(1,2)

     let choose = identifyUserClick(selectHead(), selectTail())

     
    if(getNum === 1){
        createImageHead()
    }else if(getNum === 2){
        createImageTail()
    }else{
        null
    }

    
    console.log(choose)
    console.log(getNum)
    
    if(choose === getNum){
        alert('You won')
    }else{
        alert('try again')
    }

}



// const declearWinner = () => {

//     switch (true) {
//         case headSelect === getNum:
//             alert('You win')
//             break;
//         case tailSelect === getNum:
//             alert('You win')
//             break;
//         case headSelect < getNum:
//             alert('You lose')
//             break;
//         case tailSelect > getNum:
//             alert('You lose')
//         default:
//             break;
//     }

    
    
// }


LoadEventListerners()

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



