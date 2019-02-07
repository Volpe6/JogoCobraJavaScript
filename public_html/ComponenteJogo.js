/**
 * Componente do Jogo
 */

function ComponenteJogo(largura, altura, cor, posX, posY, visivel) {
    this.self = this;
    this.with     = largura;
    this.height   = altura; 
    this.x        = posX;
    this.y        = posY;
    this.cor      = cor;
    this.velocidadeX = 0;
    this.velocidadeY = 0;
    this.gravidade   = 0.05;
    this.velocidadeGravidade = 0;
    this.visivel = defaultValue(visivel, true);
    
    this.colisao = function(obj) {
        var esquerdaObjControlavel = this.x,
            direitaObjControlavel  = this.x + (this.with),
            topoObjControlavel     = this.y,
            baseObjControlavel     = this.y + (this.height),
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
    
    this.colisaoCorpo = function(obj) {
        var bColisao = false;
        if((this.x == obj.x) && (this.y == obj.y)) {
            bColisao = true;
        }
        return bColisao;
    };
}

function defaultValue(valor, padrao) {
    
    let retorno = (typeof valor !== 'undefined') ? valor : padrao;
    
    return retorno;
};