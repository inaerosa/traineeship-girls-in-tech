public class testaEncontraMenores{

    private static int encontraMenores(Nota busca, Nota[] notas){
        int cont = 0;

        for (Nota nota : notas){
            if (nota.getValor() < busca.getValor()){
                cont++;
            }
        }

        return cont;
    }

    public static void main(String[] args){
        Nota guilherme = new Nota("guilherme", 7);
        Nota[] notas = {
            new Nota("andre", 4),
            new Nota("carlos", 8.5),
            new Nota("ana", 10),
            new Nota("jonas", 3),
            new Nota("juliana", 6.7),
            guilherme,
            new Nota("paulo", 9),
            new Nota("mariana", 5),
            new Nota("lucia", 9.3)
        };

        int menores = encontraMenores(guilherme, notas);
        System.out.println(menores);

    }
}