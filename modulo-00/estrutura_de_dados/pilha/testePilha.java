package pilha;

import java.util.Stack;

public class testePilha {
    public static void main(String[] args){
        Pilha pilha = new Pilha();

        pilha.push("Inaê");
        System.out.println(pilha);

        pilha.push("Fabi");
        System.out.println(pilha);

        String r1 = pilha.pop();
        System.out.println(r1);

        pilha.push("Nina");

        String r2 = pilha.pop();
        System.out.println(r2);


        Stack<String> stack = new Stack<String>();
        stack.push("Inaê");
        stack.push("Fabi");

        String nome = stack.peek();
        System.out.println(nome);
    }
}
