
const selectImageOne = document.querySelector('.select_image_one');
const selectImageTwo = document.querySelector('.select_image_two');


const LoadEventListerners = () => {
    selectImageOne.addEventListener('click', selectHead);
    selectImageTwo.addEventListener('click', selectTail)

}


const selectHead = () => {
    selectImageOne.classList.add('active')
    selectImageTwo.classList.remove('active')

}


const selectTail = () => {
    selectImageOne.classList.remove('active')
    selectImageTwo.classList.add('active')

}






LoadEventListerners()