package lista_ligada;

public class ListaLigada {
    
    private Celula primeira = null;
    private Celula ultima = null;
    private int totalElementos = 0;

    public void adicionaNoComeco(Object elemento){
        Celula nova = new Celula(elemento, primeira);
        this.primeira = nova;

        if (this.totalElementos == 0){
            this.ultima = this.primeira;
        }

        this.totalElementos++;
    }

    public void adiciona(Object elemento) {
        if (this.totalElementos == 0){
            adicionaNoComeco(elemento);
        }

        Celula nova = new Celula(elemento, null);
        this.ultima.setProximo(nova);
        this.ultima = nova;

        this.totalElementos++;
    }

    private boolean posicaoOcupada(int posicao){
        return posicao >= 0 && posicao < this.totalElementos;
    }

    private Celula pegaCelula(int posicao){
        if (!posicaoOcupada(posicao)){
            throw new IllegalArgumentException("posicao inexistente");
        }

        Celula atual = primeira;

        for (int i = 0; i < posicao; i++){
            atual = atual.getProx();
        }
        return atual;
    }   
    
    public void adiciona(int posicao, Object elemento){
        if (posicao == 0){
            adicionaNoComeco(elemento);
        } else if (posicao == this.totalElementos) {
            adiciona(elemento);
        } else {
            Celula anterior = this.pegaCelula(posicao-1);
            Celula nova = new Celula(elemento, anterior.getProx());    
            anterior.setProximo(nova);
            this.totalElementos++;
        }
    }

    public Object pega(int posicao){
        return this.pegaCelula(posicao).getElemento();
    }

    public void removeDoComeco(){
        if (this.totalElementos == 0){
            throw new IllegalArgumentException("lista vazia");
        }

        this.primeira = this.primeira.getProx();
        this.totalElementos--;

        if (this.totalElementos == 0){
            this.ultima = null;
        }
    }

    public void remove(int posicao){}

    public int tamanho() {
        return this.totalElementos;
     }

    public boolean contem(Object o) {return false;}

    @Override
    public String toString(){
        if (this.totalElementos == 0){
            return "[]";
        }

        Celula atual = primeira;
        StringBuilder builder = new StringBuilder("[");

        for (int i = 0; i < totalElementos; i++){
            builder.append(atual.getElemento());
            builder.append(",");
            
            atual = atual.getProx();
        }   

        builder.append("]");

        return builder.toString();

    }

}
