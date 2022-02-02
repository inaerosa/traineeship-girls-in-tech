package vetor;

public class testaVetor {
    public static void main(String[] args){
        Aluno a1 = new Aluno ("Joao");
        Aluno a2 = new Aluno ("Jose");
        Aluno a3 = new Aluno ("Maria");
        Vetor lista = new Vetor();
        lista.adiciona(a1);
        lista.adiciona(a2);

        System.out.println(lista.contem(a3));
        
        System.out.println(lista);

        lista.adiciona(1, a3);

        System.out.println(lista);

        lista.remove(2);

        System.out.println(lista);
    }
}
