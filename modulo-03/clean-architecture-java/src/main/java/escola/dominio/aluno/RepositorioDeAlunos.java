package escola.dominio.aluno;

import java.sql.SQLException;
import java.util.List;

public interface RepositorioDeAlunos {
	
	void matricular(Aluno aluno);
	Aluno buscarPorCPF(CPF cpf);
	List<Aluno> listarTodosAlunosMatriculados() throws SQLException;
	
}
