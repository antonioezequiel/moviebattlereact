import { NavegacaoContext, NavegacaoProvider } from 'common/context/navegacao';
import Finalizar from 'components/finalizar';
import useDidMountEffect from 'components/hooks/useDidMountEffect';
import Iniciar from 'components/iniciar';
import Login from 'components/Login';
import Mensagem from 'components/messagem';
import Midias from 'components/midias';
import Sortear from 'components/sortear';
import { IMovie } from 'interface/IMovie';
import { User } from 'interface/User';
import { useEffect, createContext, useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NewPlay.module.scss';

export const AppContext = createContext<any>(null);

const NewPlay = () => {
    const [listaMovie, setListaMovie] = useState<IMovie[]>([]);
    const [user, setUser] = useState<User>(new User);
    const [jogoFinalizado, setJogoFinalizado] = useState<boolean>(false);
    const [tempoRedirect, setTempoRedirect] = useState<number>(9);
    const navigate = useNavigate();

    const {login, iniciar, midias, sortear, 
           setLogin, setIniciar, setSortear, setEscolherMovie} = useContext(NavegacaoContext);

    function temporizador(temp: number){
        setTimeout(()=>{
            if(temp > 0 ){
                setTempoRedirect(temp);
                return temporizador(temp - 1);
            }
        }, 1000);
    }

    useEffect(() => {
        if (jogoFinalizado) {
            setTimeout(() => {
                navigate('/');
            }, 10000);
            temporizador(tempoRedirect);
        }
    }, [jogoFinalizado]); 
    
    return (
            <AppContext.Provider value={{user, setUser, jogoFinalizado ,setJogoFinalizado}}>
            <div className={styles['play-container1']}>
                <div className={styles['play-container']}>
                    {login && <Login setEstado={setLogin} />}
                    {iniciar && <Iniciar estado={iniciar} setEstado={setIniciar} />}
                    {(sortear || jogoFinalizado) && <Mensagem tempoRedirect={tempoRedirect} />}
                    {(midias && !jogoFinalizado) && <Midias listaMovie={listaMovie} setEscolherMovie={setEscolherMovie} />}
                    {(sortear && !jogoFinalizado) && <Sortear estado={sortear} setEstado={setSortear} setListaMovie={setListaMovie} />}
                    {((sortear || midias) && !jogoFinalizado) && <Finalizar />}
                </div>
            </div>
            </AppContext.Provider>
    );
}
export default NewPlay;