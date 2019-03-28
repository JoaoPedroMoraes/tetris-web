function drawScreen(i,j) {

    var screen = document.createElement('table'); //Cria um 
    screen.className = 'screen';
    document.getElementById('target').appendChild(screen);

    for (var x = 0; x < i; x++) {
        var row = document.createElement('tr');
        screen.appendChild(row);

        for (var y = 0; y < j; y++) {
            var column = document.createElement('th');
            row.appendChild(column);

            var pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.id = 'ij-' + x + '-' + y;
            pixel.setAttribute('onclick','pixelClick(' + x + ',' + y + ');')
            column.appendChild(pixel);
        }
    }
}

function pixelPaint(i, j) { //plota um pixel na screen
    document.getElementById('ij-' + i + '-' + j).className = 'pixel on';
}

function pixelClean(i, j) { //limpa um pixel da screen
    document.getElementById('ij-' + i + '-' + j).className = 'pixel';
}

function pixelClick(i, j) {
    if (document.getElementById('ij-' + i + '-' + j).className == 'pixel off') {
        pixelPaint(i, j);
    } else {
        pixelClean(i, j);
    }
}

function screenClean(i, j) { //limpa todos os pixels da tela
    for (var x = 0; x < i; x++) {
        for (var y = 0; y < j; y++) {
            pixelClean(x, y);
        }
    }
}