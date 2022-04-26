package alura.model;

import java.math.BigDecimal;

public class Terceirizado extends Funcionario {

	private String empresa;
	private DadosPessoais dadosPessoais;
	
	public Terceirizado(String nome, String cpf, Cargo cargo, BigDecimal salario) {
		super(nome, cpf, cargo, salario);
	}

	public String getEmpresa() {
		return this.empresa;
	}
	
	public void setEmpresa(String empresa) {
		this.empresa = empresa;
	}
	
	@Override
	public void promover(Cargo novoCargo) {
		super.promover(novoCargo);
	}
	
	@Override
	public void atualizarSalario(BigDecimal novoSalario) {
		
	}
}
