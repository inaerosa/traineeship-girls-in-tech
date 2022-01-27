public class TestaIntercalaEmUmArray {

    private static Nota[] intercala(Nota[] notas, int inicial, int miolo, int termino ) {
        Nota[] resultado = new Nota[termino - inicial];
        int atual = 0;
        int atual1 = inicial;
        int atual2 = miolo;

        while (atual1 < miolo && atual2 < termino){
            Nota nota1 = notas[atual1];
            Nota nota2 = notas[atual2];

            if (nota1.getValor() < nota2.getValor()){
                resultado[atual] = nota1;
                atual1++;
            } else{
                resultado[atual] = nota2;
                atual2++;
            }
            atual++;
        }

        while(atual1 < miolo){
            resultado[atual] = notas[atual1];
            atual1++;
            atual++;
        }

        while (atual2 < termino){
            resultado[atual] = notas[atual2];
            atual2++;
            atual++;
        }

        for(int contador = 0; contador < atual ; contador++) {
            notas[inicial + contador] = resultado[contador];
        }

        return notas;
    }

    private static void alfabetica(String[] nomes, int inicio, int miolo, int termino){

        int total = termino - inicio;
        String[] resultado = new String[total];
        int atual = 0;
        int atual1 = inicio;
        int atual2 = miolo;

        while (atual1 < miolo && atual2 < termino){
            String nome1 = nomes[atual];
            String nome2 = nomes[atual2];

            if (nome1.compareTo(nome2) < 0){
                resultado[atual] = nome1;
                atual1++;
            } else {
                resultado[atual] = nome2;
                atual2++;
            }
            atual++;
        }
       
        while(atual1 < miolo) {
            resultado[atual] = nomes[atual1];
            atual1++;
            atual++;
        }
    
        while(atual2 < termino) {
            resultado[atual] = nomes[atual2];
            atual2++;
            atual++;
        }
    
        for (int contador = 0; contador < atual; contador++) {
            nomes[inicio + contador] = resultado[contador];
        }   

        for (int i = 0; i < resultado.length; i++){
            System.out.println(nomes[i]);
        }

    }

    public static void main(String[] args) {
        Nota[] notas = {
            new Nota("andre", 4),
            new Nota("mariana", 5),
            new Nota("carlos", 8.5),
            new Nota("paulo", 9),
            new Nota("jonas", 3),
            new Nota("juliana", 6.7),
            new Nota("guilherme", 7),
            new Nota("lucia", 9.3),
            new Nota("ana", 10)
        };

        String[] nomes = {
            "Andressa",
            "Camila",
            "Enzo",
            "Fernando",
            "Maria",
            "Alberto",
            "Jonas",
            "Junior",
            "Paloma",
            "Paulo"
        };

        Nota[] rank = intercala(notas, 0, 2, notas.length - 1);
        
         alfabetica(nomes, 0, 4, nomes.length);
         

        for (Nota nota : rank){
            System.out.println(nota.getAluno() + " " + nota.getValor());
        }
    }
}
