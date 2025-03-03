let squares = [false,false,false,false,false,false,false,false,false,]

function draw(){
    let s = ''
    squares.map((square, index) => [
        s += `
            
        <div class="square" onclick="toggleSquare(${index})">
            ${square ? '<div class="circle"></div>' : ''}
        </div>
    
        `
    ])
    document.getElementById('container').innerHTML = s
}

function toggleSquare(i){
    squares[i] = !squares[i]
    draw()
}
draw()