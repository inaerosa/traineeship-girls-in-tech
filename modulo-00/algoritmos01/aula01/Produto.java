package aula01;

public class Produto {
    private String nome;
    private double preco;

    public Produto(String nome, int preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public double getPreco(){
        return this.preco;
    }

    public String getNome(){
        return this.nome;
    }

    public void setPreco(double preco){
        this.preco = preco;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

}
