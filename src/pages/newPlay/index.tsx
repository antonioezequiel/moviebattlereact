import Iniciar from 'components/iniciar';
import Login from 'components/Login';
import Midias from 'components/midias';
import Sortear from 'components/sortear';
import { IMovie } from 'interface/IMovie';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './NewPlay.module.scss';

const NewPlay = () => {
    const [login, setLogin] = useState<boolean>(true);
    const [iniciar, setIniciar] = useState<boolean>(true);
    const [sortear, setSortear] = useState<boolean>(true);
    const [midias, setMidias] = useState<boolean>(true);
    const [lista, setLista] = useState<IMovie[]>([]);

    useEffect(() => {
        if (login) {
            setSortear(!sortear);
            setIniciar(!iniciar);
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

    return (
        <div className={styles['play-container1']}>
            <div className={styles['play-container']}>
                {login && <Login estado={login} setEstado={setLogin} />}
                {iniciar && <Iniciar estado={iniciar} setEstado={setIniciar} />}
                {sortear && <Sortear estado={sortear} setEstado={setSortear} />}
                {sortear && <Midias lista={lista} setLista={setLista}/>}
            </div>
        </div>
    )
}
export default NewPlay;