package aula01;

public class MenorPreco {

    private static int buscaMenor(Produto[] produtos, int inicio, int termino){
        int maisBarato = 0;

        for (int i = inicio; i < termino; i++){
            if (produtos[i].getPreco() < produtos[maisBarato].getPreco()){
                maisBarato = i;
            }
        }
        return maisBarato;
    }

    public static void main(String[] args) {

        Produto produtos[] = {
            new Produto ("Lamborghini", 1000000),
            new Produto("Jipe", 46000),
            new Produto("Brasília", 16000),
            new Produto("Smart", 46000),
            new Produto("Fusca", 17000)
        };

        int maisBarato = buscaMenor(produtos, 0, 4);

        System.out.println(maisBarato);
        System.out.println("O carro " + produtos[maisBarato].getNome() + " e o mais barato e custa R$"+produtos[maisBarato].getPreco());
        
    }
}
