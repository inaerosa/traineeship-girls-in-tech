package alura.service.reajuste;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import alura.ValidacaoException;
import alura.model.Funcionario;

public class ValidacaoPeriodicidadeEntreReajustes implements ValidacaoReajuste {
	
	@Override
	public void validar(Funcionario funcionario, BigDecimal aumento) {
		LocalDate dataUltimoReajuste = funcionario.getDataUltimoReajuste();
		LocalDate dataAtual = LocalDate.now();
		
		long mesesDesdeUltimoReajuste = ChronoUnit.MONTHS.between(dataUltimoReajuste, dataAtual);
		
		if (mesesDesdeUltimoReajuste < 6) {
			throw new ValidacaoException("Intervalo entre reajustes deve ser entre no mínimo 6 meses!");
		}
		
	}
}
