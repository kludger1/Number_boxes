// select Elements and create variables
const boxes = document.querySelectorAll(".col")



// define function
for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = i + 1
}
const colors = [
    'rgb(255, 255, 255)',
    'rgb(255, 165, 0)',
    'rgb(0, 128, 0)',
    'rgb(128, 0, 128)',
    'rgb(255, 192, 203)'
]

class Squares {
    constructor(colors) {
        this.colors = colors
        this.addClickHandler()
    }

    changeNumber(num) {
        // console.log("running changeNumber")
        // console.log(num)
        for(var i=num; i>0; i--){
            let value = parseInt(boxes[i-1].textContent)
            value = (value >= 9)? 1 : value + 1
            boxes[i-1].textContent = value
        }
    }
    changeColor(num) {
        // console.log("running changeColor")
        // console.log(num)
        for (var i=num; i>0; i--){
            let style = window.getComputedStyle(boxes[i-1])
            let index = this.colors.indexOf(style.backgroundColor)
            index = (index >= this.colors.length -1) ? 0 : index + 1
            boxes[i-1].style.backgroundColor = this.colors[index]
            console.log(index)
        }
    }
    addClickHandler(){
        boxes.forEach(box=>{
            box.addEventListener("click", e=>{
               this.changeNumber(box.dataset.place)
               this.changeColor(box.dataset.place)    
               
            })
        })
    }
}


// run function and/or add event listeners
const squares = new Squares(colors)
console.log(squares.colors)


