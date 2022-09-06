import { AppContext } from 'pages/newPlay';
import { useContext } from 'react';
import styles from './Mensagem.module.scss';

const Mensagem = ({tempoRedirect}: {tempoRedirect: number}) => {
    const {user, jogoFinalizado} = useContext(AppContext);
    return(
        <>
           <h1 className={styles.saudacao}>Olá {user.usuario?.toLocaleUpperCase()}, vamos Jogar?</h1>
           <div className={styles.ultimaJogada}>
                <h3>Dados após a última Jogada!</h3>
                <p className={styles.message}>{user.message}</p>
                <p><span>Lifes:</span> {user.life} </p>
                <p><span>Rounds: {user.round}</span></p>
                <p className={styles.score}><span>Score: </span> {user.score} pontos</p>
                {jogoFinalizado && <p className={styles.tempoAcabando}>Você será redirecionado em: {tempoRedirect} segundos</p>}
            </div>
        </>
    )
}
export default Mensagem;