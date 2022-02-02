package vetor;
import java.util.Arrays;

public class Vetor {
    private Aluno[] alunos = new Aluno[100];
    private int contAluno = 0;

    private void garanteEspaco(){
        if (contAluno == alunos.length){
            Aluno[] novoArray = new Aluno[alunos.length*2];
            for (int i = 0; i < alunos.length; i++){
                novoArray[i] = alunos[i];
            }
            this.alunos = novoArray;
        }
    }

    public void adiciona(Aluno aluno){
        this.garanteEspaco();
        this.alunos[contAluno] = aluno;
        contAluno++;
    }

    public void adiciona(int posicao, Aluno aluno){
        this.garanteEspaco();
        if (!posicaoValida(posicao)){
            throw new IllegalArgumentException("Posicao invalida");
        }
        
        for (int i = contAluno - 1; i >= posicao; i-=1){
            alunos[i+1] = alunos[i];
        }
        alunos[posicao] = aluno;
        contAluno++;
    }

    private boolean posicaoValida(int posicao){
        return posicao >= 0 && posicao <= contAluno;
    }

    private boolean posicaoOcupada(int posicao){
        return posicao >= 0 && posicao < contAluno;
    }
    public Aluno pega (int posicao){
        if (!posicaoOcupada(posicao)){
            throw new IllegalArgumentException("Posicao invalida!");
        }
        return alunos[posicao];
    }

    public void remove (int posicao){
        for (int i = posicao; i < this.contAluno; i++){
           this.alunos[i] = this.alunos[i+1];
        }
        contAluno--;
    }

    public boolean contem(Aluno aluno){
        for (int i = 0; i < contAluno; i++){
            if (aluno.equals(alunos[i])){
                return true;
            }
        }
        return false;
    }

    public int tamanho(){
        return contAluno;
    }

    public String toString(){
        return Arrays.toString(alunos);
    }

}
