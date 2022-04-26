package alura.service.reajuste;

import java.math.BigDecimal;

import alura.model.Funcionario;

public interface ValidacaoReajuste {
	void validar (Funcionario funcionario, BigDecimal aumento);
}
