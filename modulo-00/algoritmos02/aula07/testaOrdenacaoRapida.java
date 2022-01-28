public class testaOrdenacaoRapida{

    private static int particiona(Nota[] notas, int inicio, int termino){
        Nota pivo = notas[termino -1];
        int cont = 0;

        for (int i = 0; i < termino - 1; i++){
            Nota atual = notas[i];
            if (atual.getValor() <= pivo.getValor()){
                troca(notas, i, cont);
                cont++;
            } 
        }

        troca(notas, termino-1, cont);

        return cont;
    }
    

    private static void troca(Nota[] notas, int de, int para){
        Nota nota1 = notas[de];
        Nota nota2 = notas[para];
        notas[para] = nota1;
        notas[de] = nota2;
    }

    private static void ordena(Nota[] notas, int de, int ate){
        int elementos = ate - de;
        if (elementos > 1){
            int posicaoDoPivo = particiona(notas, de, ate);
            ordena(notas, de, posicaoDoPivo);
            ordena(notas, posicaoDoPivo+1, ate);
        }
        
    }

    

    public static void main(String[] args){
        Nota guilherme = new Nota("guilherme", 7);
        Nota[] notas = {
            new Nota("andre", 4),
            new Nota("carlos", 8.5),
            new Nota("ana", 10),
            new Nota("jonas", 3),
            new Nota("juliana", 6.7),
            new Nota("paulo", 9),
            new Nota("mariana", 5),
            new Nota("lucia", 9.3),
            guilherme
        };

        ordena(notas, 0, notas.length);

        for (int i = 0; i < notas.length; i++){
            Nota nota = notas[i];
            System.out.println(nota.getAluno() + " " + nota.getValor());
        }



    }
}