package escola.infra.aluno;

import java.util.ArrayList;
import java.util.List;

import escola.dominio.AlunoNaoEncontrado;
import escola.dominio.aluno.Aluno;
import escola.dominio.aluno.CPF;
import escola.dominio.aluno.RepositorioDeAlunos;

public class RepositorioDeAlunosEmMemoria implements RepositorioDeAlunos	{

	private List<Aluno> matriculados = new ArrayList<Aluno>();
	
	public void matricular(Aluno aluno) {
		this.matriculados.add(aluno);
	}

	public Aluno buscarPorCPF(CPF cpf) {
		return this.matriculados.stream()
				.filter(a -> a.getCPF().equals(cpf.getNumero()))
				.findFirst()
				.orElseThrow(() -> new AlunoNaoEncontrado(cpf));
	}

	public List<Aluno> listarTodosAlunosMatriculados()  {
		return this.matriculados;
	}

}
