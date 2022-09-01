import Button from 'components/button';
import Input from 'components/input';
import { IUserToken } from 'interface/IUserToken';
import { useEffect } from 'react';
import { useState } from 'react';
import { logarUsuarioService } from 'service/Service';
import styles from './Login.module.scss';

const Login = ({estado, setEstado}: {estado: boolean, setEstado: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [login, setLogin] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    function logarUsuario (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        executarLogin();
    }

    async function executarLogin() {
       const userToken: IUserToken = await logarUsuarioService(login, senha);
       console.log(userToken);
       setEstado(false);
       
    }

    return (
        <div className={styles["new-container"]}>
            <h1>Faça o login para iniciar uma partida</h1>
            <form onSubmit={(event) => logarUsuario(event)}>
                <div className={styles["form-group"]}>
                    <Input estado={login} label='' placeholder='Digite seu login' required={true} setEstado={setLogin} tipo='text' />
                </div>
                <div className={styles["form-group"]}>
                    <Input estado={senha} label='' placeholder='Digite sua senha' required={true} setEstado={setSenha} tipo='password' />
                </div>
                <button type='submit'>logar</button>
                
            </form>
        </div>
    )
}

export default Login;