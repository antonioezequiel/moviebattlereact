import { createContext, useState } from 'react';

export const NavegacaoContext = createContext<any>(null);
NavegacaoContext.displayName = "navegacaoTelaPlay";

export const NavegacaoProvider = ({children}: any) => {
    const [pglogin, setPgLogin] = useState<boolean>(true);
    const [iniciar, setIniciar] = useState<boolean>(false);
    const [sortear, setSortear] = useState<boolean>(false);
    const [midias, setMidias] = useState<boolean>(false);
    const [jogoFinalizado, setJogoFinalizado] = useState<boolean>(false);
    const [tempoRedirect, setTempoRedirect] = useState<number>(9);
    
    return (
        <NavegacaoContext.Provider value={{pglogin, setPgLogin, 
                                            iniciar, setIniciar, 
                                            sortear, setSortear, 
                                            midias, setMidias, 
                                            jogoFinalizado, setJogoFinalizado, 
                                            tempoRedirect, setTempoRedirect}}>
            {children}
        </NavegacaoContext.Provider>
    );
}

