package escola.infra.aluno;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import escola.dominio.AlunoNaoEncontrado;
import escola.dominio.aluno.Aluno;
import escola.dominio.aluno.CPF;
import escola.dominio.aluno.Email;
import escola.dominio.aluno.RepositorioDeAlunos;
import escola.dominio.aluno.Telefone;

public class RepositorioDeAlunosComJDBC implements RepositorioDeAlunos {
	
	private final Connection connection;
	
	public RepositorioDeAlunosComJDBC(Connection connection) {
		this.connection = connection;
	}

	public void matricular(Aluno aluno) {
		try {
			String sql = "INSERT INTO aluno VALUES (?,?,?)";
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1,  aluno.getCPF());
			ps.setString(2, aluno.getNome());
			ps.setString(3,  aluno.getEmail());
			ps.execute();
			
			sql  = "INSERT INTO telefone VALUES(?,?)";
			ps = connection.prepareStatement(sql);
			for (Telefone telefone : aluno.getTelefones()) {
				ps.setString(1,  telefone.getDdd());
				ps.setString(2,  telefone.getNumero());
				ps.execute();
			}
		} catch(SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public Aluno buscarPorCPF(CPF cpf) {
		try {
			String sql = "SELECT id, nome, email FROM aluno WHERE cpf = ?";
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1,  cpf.getNumero());
			
			ResultSet rs = ps.executeQuery();
			boolean encontrou = rs.next();
			if (!encontrou) {
				throw new AlunoNaoEncontrado(cpf);
			}
			
			String nome = rs.getString("nome");
			Email email = new Email(rs.getString("email"));
			Aluno encontrado = new Aluno (cpf, nome, email);
			
			Long id = rs.getLong("id");
			sql = "SELECT ddd, numero FROM telefone WHERE ALUNO = ?";
			ps = connection.prepareStatement(sql);
			ps.setLong(1,  id);
			rs = ps.executeQuery();
			while(rs.next()) {
				String numero = rs.getString("numero");
				String ddd = rs.getString("ddd");
				encontrado.adicionarTelefone(ddd, numero);
			}
			return encontrado;
			
		} catch(SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public List<Aluno> listarTodosAlunosMatriculados() {
		try {
			String sql = "SELECT id, cpf, nome, email FROM aluno";
			PreparedStatement ps = connection.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			List<Aluno> alunos =  new ArrayList<Aluno>();
			while(rs.next()) {
				CPF cpf = new CPF (rs.getString("cpf"));
				String nome = rs.getString("nome");
				Email email = new Email (rs.getString("email"));
				Aluno aluno = new Aluno (cpf, nome, email);
				
				Long id = rs.getLong("id");
				sql = "SELECT ddd, numero FROM telefone WHERE aluno_id = ?";
				PreparedStatement psTelefone = connection.prepareStatement(sql);
				psTelefone.setLong(1, id);
				ResultSet rsTelefone = psTelefone.executeQuery();
				while (rsTelefone.next()) {
					String numero = rsTelefone.getString("numero");
					String ddd = rsTelefone.getString("ddd");
					aluno.adicionarTelefone(ddd, numero);
				}
				
				alunos.add(aluno);
				
			}
			return alunos;	
		} catch(SQLException e) {
			throw new RuntimeException(e);
		}
		
	}



}
