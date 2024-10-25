import { useState } from "react";
import React from 'react';

      const calculator = () => {
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
                <input
                    type="number"
                    value={numeroUno}
                    onChange={(e) => setNumeroUno(e.target.value)}
                    placeholder="Número uno"
                />
                <input
                    type="number"
                    value={numeroDos}
                    onChange={(e) => setNumeroDos(e.target.value)}
                    placeholder="Número dos"
                />
                <button onClick={sumar}>Sumar</button>
                <button onClick={restar}>Restar</button>
                <button onClick={multiplicar}>Multiplicar</button>
                <button onClick={dividir}>Dividir</button>
                <p>El total es: {total}</p>
            </>
        );
    }

    export default calculator;