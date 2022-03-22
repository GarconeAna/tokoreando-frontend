import React from "react";

export default function Register() {
    return <>
    <div>
        <label>Nome do usuário</label>
        <input type="text"/>
    </div>
    <div>
        <label>Senha</label>
        <input type="password"/>
    </div>
    <div>
        <a href="/">Cancelar</a>
        <button type="submit">Registrar</button>
    </div>
    </>
}