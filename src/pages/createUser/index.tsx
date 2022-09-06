import Button from 'components/button';
import Input from 'components/input';
import { useState } from 'react';
import { cadastrarUsuarioService } from 'service/Service';
import styles from './CreateUser.module.scss';

const CreateUser = () => {
    const [senha, setSenha] = useState<string>('');
    const [confSenha, setConfSenha] = useState<string>('');
    const [login, setLogin] = useState<string>('');

    async function cadastrarUsuario(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (await cadastrarUsuarioService(login, senha)) {
            alert('Usuario cadastrado com sucesso');
            setConfSenha('');
            setSenha('');
            setLogin('');
        } else {
            alert('Erro ao cadastrar o usuário');
        }
    }

    return (
        <div className={styles['new-container']}>
            <h1 className={styles.saudacao}>Olá Novo Jogador, vamos nos cadastrar e jogar grandes partidas?</h1>
            <form onSubmit={(event) => cadastrarUsuario(event)}>
                <div className={styles['form-group']}>
                    <Input tipo='text' estado={login} setEstado={setLogin} placeholder="Coloque um login" label='Login:' required={true} />
                </div>
                <div className={styles['form-group']}>
                    <Input tipo='password' estado={senha} setEstado={setSenha} placeholder="Coloque uma senha" label='Senha:' required={true} />
                </div>
                <div className={styles['form-group']}>
                    <Input tipo='password' estado={confSenha} setEstado={setConfSenha} placeholder="Repetir a senha" label='Repetir Senha:' required={true} />
                    <div>
                        <p></p>
                    </div>
                </div>
                <Button tipo='submit' valor='Salvar' onclick={()=>{console.log('teste')}} />
            </form>
        </div>


    )
}
export default CreateUser;