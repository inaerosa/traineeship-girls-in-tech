public class Nota {
    
    private String nome;
    private double valor;

    public Nota(String nome, double valor){
        this.nome = nome;
        this.valor = valor;
    }

    public String getAluno(){
        return nome;
    }

    public double getValor(){
        return valor;
    }
}
