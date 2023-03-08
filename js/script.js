
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

const startgame = () => {
  


setTimeout(() => {
    if(generateTwoRandomNumbers(1, 2) === 1){
        imageHead.classList.add('display')
        console.log(generateTwoRandomNumbers(1,2))
    }else{
        imageTail.classList.add('display')
    }
}, 1000);
 


}






LoadEventListerners()