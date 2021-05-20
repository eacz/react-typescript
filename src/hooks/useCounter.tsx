import { useState } from "react";

export const useCounter = (inicial: number = 0) => {
  const [valor, setValor] = useState<number>(inicial);

  const acumular = (n:number) => {
    setValor(valor + n);
  }

  return {
    valor,
    acumular
  }
}
