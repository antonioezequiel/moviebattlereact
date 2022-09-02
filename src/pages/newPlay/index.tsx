import Finalizar from 'components/finalizar';
import Iniciar from 'components/iniciar';
import Login from 'components/Login';
import Mensagem from 'components/messagem';
import Midias from 'components/midias';
import Sortear from 'components/sortear';
import { IMovie } from 'interface/IMovie';
import { User } from 'interface/User';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NewPlay.module.scss';

const NewPlay = () => {
    const [login, setLogin] = useState<boolean>(true);
    const [iniciar, setIniciar] = useState<boolean>(true);
    const [sortear, setSortear] = useState<boolean>(true);
    const [midias, setMidias] = useState<boolean>(true);
    const [listaMovie, setListaMovie] = useState<IMovie[]>([]);
    const [user, setUser] = useState<User>(new User);
    const [finalizar, setFinalizar] = useState<boolean>(false);
    const [escolherMovie, setEscolherMovie] = useState<boolean>(false);
    const [jogoFinalizado, setJogoFinalizado] = useState<boolean>(false);
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
        if (!sortear && !login) {
            setMidias(true)
        }
    }, [sortear]);

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
    }, [sortear]);

    useEffect(() => {
        if (!login && !iniciar) {
            setMidias(false);
            setSortear(true);
        }
    }, [escolherMovie]);

    useEffect(() => {
        if (!iniciar) {
            setTimeout(() => {
                navigate('/');
            }, 10000);
        }
    }, [jogoFinalizado])

    return (
        <div className={styles['play-container1']}>
            <div className={styles['play-container']}>
                {login && <Login estado={login} setEstado={setLogin} />}
                {iniciar && <Iniciar estado={iniciar} setEstado={setIniciar} setUser={setUser} />}
                {(!midias && !login && !iniciar) && <Mensagem user={user}/>}
                {(!escolherMovie && midias && !jogoFinalizado) && <Midias listaMovie={listaMovie} setUser={setUser} setEscolherMovie={setEscolherMovie} setJogoFinalizado={setJogoFinalizado} />}
                {sortear && <Sortear estado={sortear} setEstado={setSortear} setListaMovie={setListaMovie} />}
                {(sortear || iniciar || midias) && <Finalizar />}
            </div>
        </div>
    )
}
export default NewPlay;