import { Recibo } from "../../Recibo";
import { Conta } from "../Conta";

export class TransferenciaValor {
    public transferir(contaOrigem: Conta, contaDestino: Conta, valor: number): Recibo {
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
        return new Recibo();
    }
}