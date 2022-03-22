import React from "react";

export default function Login() {
    return <>
    <form>
        <div>
            <label>Nome do usuário</label>
            <input type="text"/>
        </div>
        <div>
            <label>Senha</label>
            <input type="password"/>
        </div>

        <div>
            <a src="/register">Criar conta</a>
            <button type="submit">Entrar</button>
        </div>
    </form>
    </>
}