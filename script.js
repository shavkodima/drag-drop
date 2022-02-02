const card = document.querySelector('.card');
const dropElem = document.querySelectorAll('.drop');


//когда на место куда хотим дропнуть
const dragEnter = (event)=>{
    console.log("enter");
    event.target.classList.add('hovered')
}

//когда вышли за пределы того места куда хотим дропнуть
const dragLeave = (event)=>{
    console.log("leave");
    event.target.classList.remove('hovered')
}

//drag over and dragdrop работают совместо, для того что бы dragdrop заработал у dragOver отменить стандартное поведение браузера
const dragOver = (event)=>{
    event.preventDefault()
}

const dragDrop = ()=>{
    event.target.append(card)
    event.target.classList.remove('hovered')

}   


dropElem.forEach((elem)=>{
    elem.addEventListener('dragover', dragOver)
    elem.addEventListener('dragenter', dragEnter)
    elem.addEventListener('dragleave', dragLeave)
    elem.addEventListener('drop', dragDrop)
})


//срабатывает когда карточку начинам тянуть
const dragStart = ()=>{
    setTimeout(()=>{
        card.classList.add('hidden')
    },0)
}

//срабатывает когда карточку отпускаем

const dragEnd = ()=>{
    card.classList.remove('hidden')
}


card.addEventListener('dragstart', dragStart)
card.addEventListener('dragend', dragEnd)