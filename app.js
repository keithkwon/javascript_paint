const canvas = document.getElementById("jsCanvas")
const colors = document.getElementsByClassName("controls__color")
const range = document.getElementById("jsRange")
const ctx = canvas.getContext('2d')
const mode = document.getElementById("jsMode")
const save = document.getElementById("jsSave")

canvas.width = 700;
canvas.height = 700;
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "#2c2c2c"
ctx.fillStyle = "#2c2c2c"
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;


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

function changeMode() {
    if (filling) {
        filling = false;
        mode.innerText = 'Fill'
    } else {
        filling = true;
        mode.innerText = 'Paint'
    }
}

function fillCanvas() {
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height)

    }
}



if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
    canvas.addEventListener("mousedown", fillCanvas)
}

if (mode) {
    mode.addEventListener("click", changeMode)
}


for (let i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", (event) => {
        ctx.strokeStyle = event.target.style.backgroundColor
        ctx.fillStyle = event.target.style.backgroundColor
    })
}

range.addEventListener("mouseup", (event) => {
    ctx.lineWidth = event.target.value
})

save.addEventListener("click", (event) => {
    let image = canvas.toDataURL()
    let link = document.createElement("a")
    link.href = image
    link.download = 'download'
    link.click()
})

mode.addEventListener("click", (event) => {
    console.log(event)
})

