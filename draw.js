let board = document.querySelector('.board');
var ctx = board.getContext('2d');

document.addEventListener('DOMContentLoaded', function() {
    let isDrawing = false;
    let x = 0;
    let y = 0;

    window.onresize = function() { 
        redraw(); 
    }

    board.addEventListener('mousedown', e => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    });
      
    board.addEventListener('mousemove', e => {
        if (isDrawing === true) {
            drawLine(x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        }
    });
    
    board.addEventListener('mouseup', e => {
        if (isDrawing === true) {
            drawLine(x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
        }
    });

    let tools = document.querySelectorAll('.tool');
    let showOptions = document.querySelector('.show_tool_options');

    tools.forEach(function(tool) {
        tool.addEventListener('click', function() {
            let options = this.querySelector('.tool_options');

             if(options.innerHTML === '') {
                showOptions.style.padding = '0';
            } else {
                showOptions.style.padding = '3px';
            }

            showOptions.innerHTML = options.innerHTML;
 
            if(this.id === 'pencil') {
                ctx.strokeStyle = 'black';
            } else if(this.id === 'eraser') {
                ctx.strokeStyle = 'white';
            } else if(this.id === 'sticky_pad') {
                createStickyNote();
            }
        })
    })
})

function redraw() {
    board.width = window.innerWidth;
    board.height = window.innerHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, board.width, board.height);
    ctx.restore();
}

function changeSize(slider) {
    ctx.lineWidth = slider.value;
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}