import { Children, createContext, useState } from 'react';

export const NavegacaoContext = createContext<any>(null);
NavegacaoContext.displayName = "navegacaoTelaPlay";

export const NavegacaoProvider = ({children}: any) => {
    const [login, setLogin] = useState<boolean>(true);
    const [iniciar, setIniciar] = useState<boolean>(false);
    const [sortear, setSortear] = useState<boolean>(false);
    const [midias, setMidias] = useState<boolean>(false);
    const [escolherMovie, setEscolherMovie] = useState<boolean>(false);
    return (
        <NavegacaoContext.Provider value={{login, setLogin, 
                                            iniciar, setIniciar, 
                                            sortear, setSortear, 
                                            midias, setMidias, 
                                            escolherMovie, 
                                            setEscolherMovie}}>
            {children}
        </NavegacaoContext.Provider>
    );
}