package fila;

import java.util.LinkedList;
import java.util.Queue;

public class testaFila {
    public static void main(String[] args){
        Fila fila = new Fila();

        fila.adiciona("Guilherme");
        fila.adiciona("Mauricio");

        System.out.println(fila);

        String x1 = fila.remove();

        System.out.println(x1);

        System.out.println(fila);

        Queue<String> filaDoJava = new LinkedList<String>();

        filaDoJava.add("Mauricio");
    
    }
}
