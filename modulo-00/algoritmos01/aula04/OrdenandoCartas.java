public class OrdenandoCartas{

    private static int buscaMenor(int[] cartas){
        int menor = 0;

        for (int i = 1; i < cartas.length; i++){
            if (cartas[i] < cartas[menor] ){
                menor = i;
            }            
        }
        return cartas[menor];
    }

    private static void ordena(int[] cartas){

        for (int i = 0; i < cartas.length; i++){
            //variavel menor recebe o menor valor do array
            int menor = buscaMenor(cartas);

            //carta atual recebe a posição no array dentro do laço de repetição
            int cartaAtual = cartas[i];

            //carta menor recebe a posição da menor carta dentro do array
            int cartaMenor = cartas[menor];
            
            //carta na posição i do array recebe a carta menor
            cartas[i] = cartaMenor;

            //carta na posição de valor menor recebe a carta atual
            cartas[menor] = cartaAtual;  
        }
    }

    public static void main (String[] args) {
        int[] cartas = {7,4,10,2,8};
        
        ordena(cartas);

        for (int carta : cartas){
            System.out.println(carta);
        }
    }
}