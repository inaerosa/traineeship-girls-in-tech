package lista_ligada;

public class Celula {
    
    private Object elemento;
    private Celula proximo;

    public Celula(Object elemento, Celula c){
        this.elemento = elemento;
        this.proximo = c;
    }

    public Object getElemento(){
        return elemento;
    }

    public Celula getProx(){
        return proximo;
    }

    public void setProximo(Celula proximo){
        this.proximo = proximo;
    }


}
