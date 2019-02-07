/**
 * Controle do componente
 */
function Controle(oAreaJogo, oPecaJogo) {
    this.AreaJogo = oAreaJogo;
    this.PecaJogo = oPecaJogo;
    this.vel = 1;
    
    this.cima = function() {
        if(this.AreaJogo.key && (this.AreaJogo.key == 40)) {
            this.PecaJogo.velocidadeY = this.vel;
            this.PecaJogo.velocidadeX = 0;
        }
    };
    
    this.baixo = function() {
        if(this.AreaJogo.key && (this.AreaJogo.key == 38)) {
            this.PecaJogo.velocidadeY = -this.vel;
            this.PecaJogo.velocidadeX = 0;
        }
    };

    this.direita = function() {
        if(this.AreaJogo.key && (this.AreaJogo.key == 39)) {
            this.PecaJogo.velocidadeX = this.vel;
            this.PecaJogo.velocidadeY = 0;
        }
    };
    
    this.esquerda = function() {
        if(this.AreaJogo.key && (this.AreaJogo.key == 37)) {
            this.PecaJogo.velocidadeX = -this.vel;
            this.PecaJogo.velocidadeY = 0;
        }
    };
    
    this.controleTeclado = function() {
        window.addEventListener('keydown', function (e) {
            areaJogo.key = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            areaJogo.key = false;
        });
    };
    
    this.pararMovimento = function() {
        this.PecaJogo.velocidadeX = 0;
        this.PecaJogo.velocidadeY = 0;
    };
}
