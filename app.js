const canvas = document.getElementById("jsCanvas")
const colors = document.getElementsByClassName("controls__color")
const range = document.getElementById("jsRange")
const ctx = canvas.getContext('2d')
const mode = document.getElementById("jsMode")
const save = document.getElementById("jsSave")

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5;

let painting = false;


function onMouseMove(event) {
    const x = event.offsetX
    const y = event.offsetY
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y)

    } else {
        ctx.lineTo(x, y)
        ctx.stroke()
        
    }
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting();
}

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true

}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
}


for (let i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", (event) => {
        ctx.strokeStyle = event.target.style.backgroundColor
    })
}

range.addEventListener("mouseup", (event) => {
    ctx.lineWidth = event.target.value
})

save.addEventListener("click", (event) => {
    console.log(event)
})

mode.addEventListener("click", (event) => {
    console.log(event)
})