// import hey from '../images/head.png';
const selectImageOne = document.querySelector('.game_center_right_imgs_one');
const selectImageTwo = document.querySelector('.game_center_right_imgs_two');
const playNow = document.querySelector('#playnow');
const imageHead = document.querySelector('#imagehead');
const imageTail = document.querySelector('#imagetail')


const LoadEventListerners = () => {
    selectImageOne.addEventListener('click', selectHead);
    selectImageTwo.addEventListener('click', selectTail);
    playNow.addEventListener('click', startgame)

}


const selectHead = () => {
    selectImageOne.classList.add('active')
    selectImageTwo.classList.remove('active')

}


const selectTail = () => {
    selectImageOne.classList.remove('active')
    selectImageTwo.classList.add('active')

}

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


const startgame = () => {
    
    resetgame()

    const getNum = generateTwoRandomNumbers(1,2)
        switch (getNum) {
            case 1:
                createImageHead()
                break;
            case 2:
                createImageTail()
                break;

            default:
                break;
    }

   
}

const declearWinner = () => {
    
}






LoadEventListerners()