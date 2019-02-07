/**
 * Atulizacao
 */

function Atualizacao(oControleJogo, oAreaoJogo, oPecaJogo) {
    this.AreaJogo = oAreaoJogo;
    this.PecaJogo = oPecaJogo;
    this.Controle = oControleJogo;
    
    this.areaJogo = function() {
        this.AreaJogo.limpar();
        this.Controle.cima();
        this.Controle.baixo();
        this.Controle.direita();
        this.Controle.esquerda();
        //areaJogo.criaAreaJogo();
        this.novaPosicao();
    };

    this.pecaJogo = function(oPecaJogo, i) {
        let pecaJogo = this.PecaJogo;
        if(oPecaJogo instanceof ComponenteJogo) {
            pecaJogo = oPecaJogo;
        }
        
        ctx           = this.AreaJogo.getContext();
        ctx.fillStyle = pecaJogo.cor;
        if(pecaJogo.visivel) {
            ctx.fillRect(pecaJogo.x, pecaJogo.y, (pecaJogo.with), pecaJogo.height);
        } else {
           ctx.fillRect(pecaJogo.x, pecaJogo.y, 0, 0); 
        }
        
//        ctx.fillText(i, pecaJogo.x, pecaJogo.y);
    };
    
    this.novaPosicao = function() {
        this.PecaJogo.velocidadeGravidade += this.PecaJogo.gravidade;
        this.PecaJogo.x += this.PecaJogo.velocidadeX;
        this.PecaJogo.y += this.PecaJogo.velocidadeY;
        this.colisaoDireito();
        this.colisaoEsquerdo();
        this.colisaoInferior();
        this.colisaoSuperior();
    };
    
    this.colisaoInferior = function() {
        var colisorInferior = this.AreaJogo.canvas.height - this.PecaJogo.height;
        if((this.PecaJogo.y*this.PecaJogo.with) > colisorInferior) {
            this.PecaJogo.y = (this.AreaJogo.canvas.height - this.PecaJogo.with) / this.PecaJogo.with;
        }
    };
    
    this.colisaoSuperior = function() {
        var colisorSuperior = 0;
        if(this.PecaJogo.y < colisorSuperior) {
            this.PecaJogo.y = colisorSuperior;
        }
    };
    
    this.colisaoEsquerdo = function() {
        var colisorEsquerdo = 0;
        if(this.PecaJogo.x < colisorEsquerdo) {
            this.PecaJogo.x = colisorEsquerdo;
        }
    };
    
    this.colisaoDireito = function() {
        var colisorDireito = this.AreaJogo.canvas.width - this.PecaJogo.with;
        if((this.PecaJogo.x*this.PecaJogo.with) > colisorDireito) {
            this.PecaJogo.x = (this.AreaJogo.canvas.width - this.PecaJogo.with) / this.PecaJogo.with;
        }
    };
};
