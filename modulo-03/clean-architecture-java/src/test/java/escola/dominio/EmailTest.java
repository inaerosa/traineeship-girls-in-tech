package escola.dominio;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import escola.dominio.aluno.Email;

class EmailTest {

	@Test
	void naoDeveriaCriarEmailsComEnderecosInvalidos() {
		assertThrows(IllegalArgumentException.class, ()-> new Email(null));
		assertThrows(IllegalArgumentException.class, ()-> new Email(""));
		assertThrows(IllegalArgumentException.class, ()-> new Email("emailinvalido"));
	}

}
