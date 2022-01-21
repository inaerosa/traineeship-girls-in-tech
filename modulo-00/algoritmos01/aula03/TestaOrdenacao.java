public class TestaOrdenacao {

    private static void ordena (Produto[] produtos, int quantidadeDeElementos) {
        for(int atual =0; atual < quantidadeDeElementos - 1; atual++) {
            
            int menor = buscaMenor(produtos, atual, quantidadeDeElementos- 1);
            
            Produto produtoAtual = produtos[atual];
            Produto produtoMenor = produtos[menor];

            produtos[atual] = produtoMenor;
            produtos[menor] = produtoAtual; 
         }
    }

    private static int buscaMenor(Produto[] produtos, int inicio, int termino) {
        int maisBarato = inicio;
        for(int atual = inicio; atual <= termino; atual++){
            if(produtos[atual].getPreco() < produtos[maisBarato].getPreco()) {
                maisBarato = atual;
            }
        }
        return maisBarato;
    }

    public static void main(String[] args) {
        Produto produtos[] = {
                new Produto("Lamborghini", 1000000),
                new Produto("Jipe", 46000),
                new Produto("Brasília", 16000),
                new Produto("Smart", 46000),
                new Produto("Fusca", 17000)
        };   

        int maisBarato = buscaMenor(produtos, 0, 4);
        System.out.println(maisBarato);
        System.out.println("O carro " + produtos[maisBarato].getNome()
                             + " é o mais barato, e custa "
                             + produtos[maisBarato].getPreco());

        ordena(produtos, produtos.length);

        for(Produto produto : produtos) {
            System.out.println(produto.getNome() + " custa " + produto.getPreco());
        }
    }
}