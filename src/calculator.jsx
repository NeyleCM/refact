import { useState } from "react";

      const Calculator = () => {
        const [numeroUno, setNumeroUno] = useState(0);
        const [numeroDos, setNumeroDos] = useState(0);
        const [total, setTotal] = useState(0);
        const sumar = () => {
            setTotal(parseInt(numeroUno) + parseInt(numeroDos));
        };
        const restar = () => {
            setTotal(parseInt(numeroUno) - parseInt(numeroDos));
        };
        const multiplicar = () => {
            setTotal(parseInt(numeroUno) * parseInt(numeroDos));
        };
        const dividir = () => {
            if (parseInt(numeroDos) === 0) {
                return;
            }
            setTotal(parseInt(numeroUno) / parseInt(numeroDos));
        };
        return (
            <>
                <p>
                    <input
                    type="number"
                    value={numeroUno}
                    onChange={(e) => setNumeroUno(e.target.value)}
                    placeholder="Número uno"
                    />
                </p>
                <p>
                    <input
                    type="number"
                    value={numeroDos}
                    onChange={(e) => setNumeroDos(e.target.value)}
                    placeholder="Número dos"
                    />
                </p>
                <button onClick={sumar}>Sumar</button>
                <button onClick={restar}>Restar</button>
                <button onClick={multiplicar}>Multiplicar</button>
                <button onClick={dividir}>Dividir</button>
                <p className="total">El total es: {total}</p>
            </>
        );
    }

    export default Calculator;