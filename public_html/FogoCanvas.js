///**
// * Fogo canvas
// */

var FogoCanvas = {};

FogoCanvas.utils = {
    AreaJogo : {},
    PecaJogo : {},
    
    firePixelsArray : [],
    fireWidth       : 25,
    fireHeight      : 25,
    image : 0,
    
    fireColorPalette : [
            {"r":7,"g":7,"b":7},
            {"r":31,"g":7,"b":7},
            {"r":47,"g":15,"b":7},
            {"r":71,"g":15,"b":7},
            {"r":87,"g":23,"b":7},
            {"r":103,"g":31,"b":7},
            {"r":119,"g":31,"b":7},
            {"r":143,"g":39,"b":7},
            {"r":159,"g":47,"b":7},
            {"r":175,"g":63,"b":7},
            {"r":191,"g":71,"b":7},
            {"r":199,"g":71,"b":7},
            {"r":223,"g":79,"b":7},
            {"r":223,"g":87,"b":7},
            {"r":223,"g":87,"b":7},
            {"r":215,"g":95,"b":7},
            {"r":215,"g":95,"b":7},
            {"r":215,"g":103,"b":15},
            {"r":207,"g":111,"b":15},
            {"r":207,"g":119,"b":15},
            {"r":207,"g":127,"b":15},
            {"r":207,"g":135,"b":23},
            {"r":199,"g":135,"b":23},
            {"r":199,"g":143,"b":23},
            {"r":199,"g":151,"b":31},
            {"r":191,"g":159,"b":31},
            {"r":191,"g":159,"b":31},
            {"r":191,"g":167,"b":39},
            {"r":191,"g":167,"b":39},
            {"r":191,"g":175,"b":47},
            {"r":183,"g":175,"b":47},
            {"r":183,"g":183,"b":47},
            {"r":183,"g":183,"b":55},
            {"r":207,"g":207,"b":111},
            {"r":223,"g":223,"b":159},
            {"r":239,"g":239,"b":199},
            {"r":255,"g":255,"b":255}
        ],

        
    createFireDataStructure : function () {
        const numberOfPixels = FogoCanvas.utils.fireWidth * FogoCanvas.utils.fireHeight;
        for(let i = 0; i < numberOfPixels; i++) {
            FogoCanvas.utils.firePixelsArray[i] = 0;
        }

    },

    calculeFirePropagation : function () {
         for(let colunm = 0; colunm < FogoCanvas.utils.fireWidth; colunm++) {
            for(let row = 0; row < FogoCanvas.utils.fireHeight; row++) {
                const pixelIndex = colunm + (FogoCanvas.utils.fireWidth * row);
                updateFireIntensityPerPixel(pixelIndex);
            }
        }
        //AreaJogo.getContext().clearRect(0, 0, canvas.width, canvas.height)
        FogoCanvas.utils.renderFire();
    },

    updateFireIntensityPerPixel : function (currentPixelIndex) {
        const belowPixelIndex = currentPixelIndex + FogoCanvas.utils.fireWidth;

        if(belowPixelIndex >= FogoCanvas.utils.fireWidth * FogoCanvas.utils.fireHeight) {
            return;
        }

        const decay = Math.floor(Math.random() * 3);
        const belowPixelFireIntensity = FogoCanvas.utils.firePixelsArray[belowPixelIndex];
        const newFireIntensity =(belowPixelFireIntensity - decay >= 0) ? belowPixelFireIntensity - decay : 0;

        FogoCanvas.utils.firePixelsArray[currentPixelIndex - decay] = newFireIntensity;
    },

    renderFire : function () {
        debugger;
        for(let row = 0; row < FogoCanvas.utils.fireHeight; row++) {
            for(let colunm = 0; colunm < FogoCanvas.utils.fireWidth; colunm++) {
                const pixelIndex    = colunm + (FogoCanvas.utils.fireWidth * row);
                const fireIntensity = FogoCanvas.utils.firePixelsArray[pixelIndex]; 
                const color         = FogoCanvas.utils.fireColorPalette[fireIntensity];
                FogoCanvas.utils.image.data[pixelIndex * 4]       = color.g;
                FogoCanvas.utils.image.data[(pixelIndex * 4) + 1] = color.b;
                FogoCanvas.utils.image.data[(pixelIndex * 4) + 2] = color.r;
                FogoCanvas.utils.image.data[(pixelIndex * 4) + 3] = 255;
            }
        }

        debugger;
    //    for(let i = 0; i < 5; i++) {
    //        context.putImageData(image, x*fireWidth, y*fireWidth);
    //    }
        FogoCanvas.utils.AreaJogo.getContext().putImageData(FogoCanvas.utils.image, 0, 0);

    },

    createFireSource : function () {
        for(let colunm = 0; colunm <= FogoCanvas.utils.fireWidth; colunm++ ) {
            const overFlowPixelIndex = FogoCanvas.utils.fireWidth * FogoCanvas.utils.fireHeight;
            const pixelindex = (overFlowPixelIndex - FogoCanvas.utils.fireWidth) + colunm;

            FogoCanvas.utils.firePixelsArray[pixelindex] = 36;
        }
    },
    
    setAreaJogo : function (oAreaJogo) {
        debugger;
        FogoCanvas.utils.AreaJogo = oAreaJogo;
        FogoCanvas.utils.image =  oAreaJogo.canvas.getContext('2d').createImageData(FogoCanvas.utils.fireWidth, FogoCanvas.utils.fireHeight);
    },
    
    setPecaJogo : function (oPecaJogo) {
        FogoCanvas.utils.PecaJogo = oPecaJogo;
    }, 
    
    getAreaJogo : function () {
        return FogoCanvas.utils.AreaJogo;
    },
    
    getPecaJogo : function () {
        return FogoCanvas.utils.PecaJogo;
    },
    
    getImage : function () {
        return FogoCanvas.utils.image;
    }
    
};

FogoCanvas.createFire = function () {
    FogoCanvas.utils.createFireDataStructure();
    FogoCanvas.utils.createFireDataStructure();
    FogoCanvas.utils.renderFire();
    FogoCanvas.utils.calculeFirePropagation();
};

//FogoCanvas.getImage = function () {
//    const image = 
//}


//
debugger;
var x = 1;
var velx = 1;
var vely = 1;
var y = 1;
var firePixelsArray = [];
var fireWidth       = 25;
var fireHeight      = 25;
var canvas          = document.getElementById('canvas');
var context         = canvas.getContext('2d');
//canvas.width          = 800;
//canvas.height         = 500;

var snakeHead;
var snakeTail = [];
var position = [];

var image = context.createImageData(fireWidth, fireHeight);

var fireColorPalette = [
    {"r":7,"g":7,"b":7},
    {"r":31,"g":7,"b":7},
    {"r":47,"g":15,"b":7},
    {"r":71,"g":15,"b":7},
    {"r":87,"g":23,"b":7},
    {"r":103,"g":31,"b":7},
    {"r":119,"g":31,"b":7},
    {"r":143,"g":39,"b":7},
    {"r":159,"g":47,"b":7},
    {"r":175,"g":63,"b":7},
    {"r":191,"g":71,"b":7},
    {"r":199,"g":71,"b":7},
    {"r":223,"g":79,"b":7},
    {"r":223,"g":87,"b":7},
    {"r":223,"g":87,"b":7},
    {"r":215,"g":95,"b":7},
    {"r":215,"g":95,"b":7},
    {"r":215,"g":103,"b":15},
    {"r":207,"g":111,"b":15},
    {"r":207,"g":119,"b":15},
    {"r":207,"g":127,"b":15},
    {"r":207,"g":135,"b":23},
    {"r":199,"g":135,"b":23},
    {"r":199,"g":143,"b":23},
    {"r":199,"g":151,"b":31},
    {"r":191,"g":159,"b":31},
    {"r":191,"g":159,"b":31},
    {"r":191,"g":167,"b":39},
    {"r":191,"g":167,"b":39},
    {"r":191,"g":175,"b":47},
    {"r":183,"g":175,"b":47},
    {"r":183,"g":183,"b":47},
    {"r":183,"g":183,"b":55},
    {"r":207,"g":207,"b":111},
    {"r":223,"g":223,"b":159},
    {"r":239,"g":239,"b":199},
    {"r":255,"g":255,"b":255}
];

function createFire() {
    //snakeHead = new ComponenteJogo(fireWidth, fireWidth, 'red', x, y, false);
    
    
    document.addEventListener('keydown', keyPush);
    createFireDataStructure();
    createFireSource();
    renderFire();
    setInterval(calculeFirePropagation, 20);
}

function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight;
    for(let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0;
    }
    
}

function calculeFirePropagation() {
     for(let colunm = 0; colunm < fireWidth; colunm++) {
        for(let row = 0; row < fireHeight; row++) {
            const pixelIndex = colunm + (fireWidth * row);
            updateFireIntensityPerPixel(pixelIndex);
        }
    }
    context.clearRect(0, 0, canvas.width, canvas.height)
    renderFire();
}

function updateFireIntensityPerPixel(currentPixelIndex) {
    const belowPixelIndex = currentPixelIndex + fireWidth;
    
    if(belowPixelIndex >= fireWidth * fireHeight) {
        return;
    }
    
    const decay = Math.floor(Math.random() * 3);
    const belowPixelFireIntensity = firePixelsArray[belowPixelIndex];
    const newFireIntensity =(belowPixelFireIntensity - decay >= 0) ? belowPixelFireIntensity - decay : 0;
    
    firePixelsArray[currentPixelIndex - decay] = newFireIntensity;
}

function renderFire() {
    debugger;
    for(let row = 0; row < fireHeight; row++) {
        for(let colunm = 0; colunm < fireWidth; colunm++) {
            const pixelIndex    = colunm + (fireWidth * row);
            const fireIntensity = firePixelsArray[pixelIndex]; 
            const color         = fireColorPalette[fireIntensity];
            image.data[pixelIndex * 4]       = color.g;
            image.data[(pixelIndex * 4) + 1] = color.b;
            image.data[(pixelIndex * 4) + 2] = color.r;
            image.data[(pixelIndex * 4) + 3] = 255;
        }
    }
    
    debugger;
    for(let i = 0; i < position.length; i++) {
        context.putImageData(image, position[i].x*fireWidth, position[i].y*fireWidth);
    }
    position.push({x:x, y:y});

     while (position.length > 20) {
         position.shift();
     }
    
}

function createFireSource() {
    for(let colunm = 0; colunm <= fireWidth; colunm++ ) {
        const overFlowPixelIndex = fireWidth * fireHeight;
        const pixelindex = (overFlowPixelIndex - fireWidth) + colunm;
        
        firePixelsArray[pixelindex] = 36;
    }
}

function keyPush(event) {
    switch (event.keyCode) {
        case 40:
           y += vely;
            x += 0; 
            //alert('cima');
            break;
        case 38:
             y += -vely;
            x += 0;
           // alert('baixo');
            
            break;
        case 39:
            x += velx;
            y += 0;
           // alert('direita');
            break;
        case 37:
            x += -velx;
            y += 0;
            //alert('esquerda');
            break;
    }
}

createFire();

