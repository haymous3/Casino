// import hey from '../images/head.png';
const selectImageOne = document.querySelector('.game_center_right_imgs_one');
const selectImageTwo = document.querySelector('.game_center_right_imgs_two');
const playNow = document.querySelector('#playnow');
const imageHead = document.querySelector('#imagehead');
const gameCenterOne = document.querySelector('.game_center_left_one')
const imageTail = document.querySelector('#imagetail');
const selectImgHead = document.querySelector('#select_img_head');
const selectImgTail = document.querySelector('#select_img_tail');
// const play = document.querySelector('.play')




const LoadEventListerners = () => {
    selectImageOne.addEventListener('click', selectHead);
    
    selectImageTwo.addEventListener('click', selectTail);
    selectImgHead.addEventListener('click', a)
    selectImgTail.addEventListener('click', b)
   
   
}


let result;
let results;

const randomwinners = (probabilityRatio, computer, users) => {
    return Math.random() < probabilityRatio ? computer : users
}

const resetgame = () => {
    const deleteElement = document.querySelectorAll('.myimg')
    return deleteElement.forEach((img) => img.remove())


 }



const selectHead = (head) => {
    
    selectImageOne.classList.add('active')
    selectImageTwo.classList.remove('active')
   
}

const selectTail = () => {
    
    selectImageTwo.classList.add('active')
    selectImageOne.classList.remove('active')
 
}


const a = () => {
    result =  randomwinners(0.6, 1, 2)
    console.log(result)
   return result
    
}

const b = () => {
    results =  randomwinners(0.6, 1, 2)
console.log(results)
    return results
}


let myfunvtion = true

const startgame = () => {

gameCenterOne.style.display = 'none'

       if(result === 1 && myfunvtion){
        
     imageTail.style.display = 'block'
     setTimeout(() => {
        alert('computer win')
        myfunvtion = false
     }, 1000);
     
      
    }
    
    else if(results === 1){
        imageHead.style.display = 'block';

        setTimeout(() => {
            alert('computer win')
        }, 1000);
       

    }else if(result === 2){
        imageHead.style.display = 'block'
       setTimeout(() => {
        alert('you win')
       }, 1000);
        
    }

    else if(results === 2){
        imageTail.style.display ='block'
        setTimeout(() => {
            alert('you win')
        }, 1000);
        
    }
   

    
}





LoadEventListerners()

playNow.addEventListener('click', startgame)

// play.addEventListener('click', plays)




// const createImageHead = () => {
 
//     const createHead = document.createElement('img')
//     createHead.src = 'images/head.png'
//     createHead.id = "myimg"
//     imageHead.appendChild(createHead)
// }

// const createImageTail = () => {
//     const createTail = document.createElement('img')
//     createTail.src = 'images/tail.png';

//     createTail.id ="myimg"

//     imageHead.appendChild(createTail)         
// }