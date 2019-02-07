

/* global canvas */

/**
 * Area do jogo
 */
function AreaJogo() {
    this.self    = this;
    this.canvas  = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    this.criaAreaJogo = function() {
        this.canvas.width   = 400;
        this.canvas.height = 400;
        this.context       = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    };
    
//    this.intervalo = setInterval(atualizacao, 20);
//    
//    this.paraIntervalo = function() {
//        clearInterval(this.intervalo());
//    };
    
    this.setAltura = function(altura) {
        this.canvas.height = altura;
    };

    this.setLagura = function(largura) {
        this.canvas.width = largura;
    };

    this.limpar = function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
    };
    
    this.getContext = function () {
        return this.context;
    };
    
}

function defaultValue(valor, padrao) {
    
    let retorno = (typeof valor !== 'undefined') ? valor : padrao;
    
    return retorno;
};
