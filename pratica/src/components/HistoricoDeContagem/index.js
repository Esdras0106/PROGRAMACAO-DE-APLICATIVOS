import React from "react";
import './styles.css';

const Historico = ({ contagem = [] }) => {
    return (
        <ol className="hitstorico-contagem">
            {contagem.map((contagem, index) => (
                <li key={index}>{contagem}</li>
            ))}
        </ol>
    
);
}
export default Historico;