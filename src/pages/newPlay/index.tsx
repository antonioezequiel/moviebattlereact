import Finalizar from 'components/finalizar';
import Iniciar from 'components/iniciar';
import Login from 'components/Login';
import Mensagem from 'components/messagem';
import Midias from 'components/midias';
import Sortear from 'components/sortear';
import { IMovie } from 'interface/IMovie';
import { User } from 'interface/User';
import { useEffect, createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NewPlay.module.scss';

export const AppContext = createContext<any>(null);

const NewPlay = () => {
    const [login, setLogin] = useState<boolean>(true);
    const [iniciar, setIniciar] = useState<boolean>(true);
    const [sortear, setSortear] = useState<boolean>(true);
    const [midias, setMidias] = useState<boolean>(true);
    const [listaMovie, setListaMovie] = useState<IMovie[]>([]);
    const [user, setUser] = useState<User>(new User);
    const [escolherMovie, setEscolherMovie] = useState<boolean>(false);
    const [jogoFinalizado, setJogoFinalizado] = useState<boolean>(false);
    const [tempoRedirect, setTempoRedirect] = useState<number>(10);
    const navigate = useNavigate();

    useEffect(() => {
        if (login) {
            setSortear(!sortear);
            setIniciar(!iniciar);
            setMidias(!midias);
        }
        if (!login) {
            setIniciar(true);
        }
    }, [login]);

    useEffect(() => {
        if (!iniciar && !login) {
            setSortear(true);
        }
    }, [iniciar]);

    useEffect(() => {
        if (!iniciar && !login) {
            setMidias(true);
            setEscolherMovie(false)
        }
        if (!sortear && !login) {
            setMidias(true)
        }
    }, [sortear]);

    useEffect(() => {
        if (!login && !iniciar) {
            setMidias(false);
            setSortear(true);
        }
    }, [escolherMovie]);

    function temporizador(temp: number){
        setTimeout(()=>{
            if(temp > 0 ){
                setTempoRedirect(temp);
                return temporizador(temp - 1);
            }
        }, 1000);
    }

    useEffect(() => {
        if (!iniciar) {
            setTimeout(() => {
                navigate('/');
            }, 12000);
            temporizador(tempoRedirect);
        }
    }, [jogoFinalizado]);

    return (
        <AppContext.Provider value={{user, setUser, jogoFinalizado ,setJogoFinalizado}}>
        <div className={styles['play-container1']}>
            <div className={styles['play-container']}>
                {login && <Login estado={login} setEstado={setLogin} />}
                {iniciar && <Iniciar estado={iniciar} setEstado={setIniciar} />}
                {(!midias && !login && !iniciar) && <Mensagem tempoRedirect={tempoRedirect} />}
                {(!escolherMovie && midias && !jogoFinalizado) && <Midias listaMovie={listaMovie} setEscolherMovie={setEscolherMovie} />}
                {sortear && <Sortear estado={sortear} setEstado={setSortear} setListaMovie={setListaMovie} />}
                {(sortear || iniciar || midias) && <Finalizar />}
            </div>
        </div>
        </AppContext.Provider>
    )
}
export default NewPlay;