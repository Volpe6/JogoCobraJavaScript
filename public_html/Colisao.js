/**
 * Colisao
 */

function Colisao(obj, obj1) {
    this.Componente = obj;
    this.AreaJogo   = obj1
    
    this.verificaColisao = function() {
        this.colisaoDireito();
        this.colisaoEsquerdo();
        this.colisaoInferior();
        this.colisaoSuperior();
    };
    
    this.colisaoInferior = function() {
        var colisorInferior = this.AreaJogo.canvas.height - this.Componente.height;
        if(this.Componente.y > colisorInferior) {
            this.Componente.y = colisorInferior;
        }
    };

    this.colisaoSuperior = function() {
        var colisorSuperior = 0;
        if(this.Componente.y < colisorSuperior) {
            this.Componente.y = colisorSuperior;
        }
    };

    this.colisaoEsquerdo = function() {
        var colisorEsquerdo = 0;
        if(this.Componente.x < colisorEsquerdo) {
            this.Componente.x = colisorEsquerdo;
        }
    };

    this.colisaoDireito = function() {
        debugger;
        var colisorDireito = this.AreaJogo.canvas.width - this.Componente.with;
        if(this.Componente.x > colisorDireito) {
            this.Componente.x = colisorDireito;
        }
    };    
    
    this.colisaoOutroObj = function(obj) {
        var esquerdaObjControlavel = this.Componente.x,
            direitaObjControlavel  = this.Componente.x + (this.Componente.with),
            topoObjControlavel     = this.Componente.y,
            baseObjControlavel     = this.Componente.y + (this.Componente.height),
            esquerdaDoObjAtual     = obj.x,
            direitaDoObjAtual      = obj.x + (obj.with),
            topoDoObjAtual         = obj.y,
            baseObjAtual           = obj.y + (obj.height),
            colisao                = true;
        if((baseObjControlavel < topoDoObjAtual) || (topoObjControlavel > baseObjAtual) || (direitaObjControlavel < esquerdaDoObjAtual) || (esquerdaObjControlavel > direitaDoObjAtual)) {
            colisao = false;
        }
        return colisao;
    };
}