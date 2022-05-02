package escola.dominio.aluno;

public class Email {

	private String endereco;
	
	public Email (String endereco) {
		if (endereco == null || !endereco.matches("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")) {
			throw new IllegalArgumentException("Email invalido");
		}
		this.endereco = endereco;	
	}
	
	public String getEmail() {
		return this.endereco;
	}
}
