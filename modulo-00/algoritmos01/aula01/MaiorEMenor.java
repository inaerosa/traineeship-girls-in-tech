package aula01;

public class MaiorEMenor {

    private static int buscaMenor(Funcionario[] funcionarios, int inicio, int termino){
        int menorSalario = 0;

        for (int i = inicio; i < termino; i++){
            if (funcionarios[i].getSalario() < funcionarios[menorSalario].getSalario()){
                menorSalario = i;
            }
        }
        return menorSalario;
    }

    private static int buscaMaior(Funcionario[] funcionarios, int inicio, int termino){
        int maiorSalario = 0;

        for (int i = inicio; i < termino; i++){
            if (funcionarios[i].getSalario() > funcionarios[maiorSalario].getSalario()){
                maiorSalario = i;
            }
        }

        return maiorSalario;
    }

    public static void main(String[] args) {
        Funcionario funcionarios[] = {
            new Funcionario ("Fernando", 3200.00),
            new Funcionario ("Alfredo", 6000.00),
            new Funcionario ("Flavio", 5000.00),
            new Funcionario ("Marcela", 2200.00),
        };

        int maiorSalario = buscaMaior(funcionarios, 0, 4);
        int menorSalario = buscaMenor(funcionarios, 0, 4);

        System.out.println("O maior salario pertence ao funcionario " + funcionarios[maiorSalario].getNome() + " no valor de R$"+ funcionarios[maiorSalario].getSalario());
        System.out.println("O menor salario pertence ao funcionario " + funcionarios[menorSalario].getNome() + " no valor de R$"+ funcionarios[menorSalario].getSalario());
    }
}
