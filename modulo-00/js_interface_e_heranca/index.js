import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Cliente } from "./Cliente.js";

const diretor = new Diretor("Rodrigo", 10000, 123455678);
diretor.cadastrar_senha("123456");

const gerente = new Gerente("Ricardo", 5000, 123456788);
gerente.cadastrar_senha("123");

const cliente = new Cliente("Lais", 3123123123, "456");


const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteLogado, diretorLogado, clienteLogado);

