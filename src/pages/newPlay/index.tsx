import Finalizar from 'components/finalizar';
import Iniciar from 'components/iniciar';
import Login from 'components/Login';
import Mensagem from 'components/messagem';
import Midias from 'components/midias';
import Sortear from 'components/sortear';
import { IMovie } from 'interface/IMovie';
import { User } from 'interface/User';
import { createContext} from 'react';
import { useState } from 'react';
import styles from './NewPlay.module.scss';

export const AppContext = createContext<any>(null);

const NewPlay = () => {
    const [listaMovie, setListaMovie] = useState<IMovie[]>([]);
    const [user, setUser] = useState<User>(new User);
        
    return (
            <AppContext.Provider value={{user, setUser}}>
            <div className={styles['play-container1']}>
                <div className={styles['play-container']}>
                   <Login />
                   <Iniciar />
                   <Mensagem />
                   <Midias listaMovie={listaMovie} />
                   <Sortear setListaMovie={setListaMovie} />
                   <Finalizar />
                </div>
            </div>
            </AppContext.Provider>
    );
}
export default NewPlay;