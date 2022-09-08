import { temporizador } from "common/util/temporizador";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavegacaoContext } from "./navegacaoProvider";

export const useNavegacaoContext = () => {
    const {setIniciar, setPgLogin, setSortear, setMidias, setJogoFinalizado, sortear, 
            jogoFinalizado, midias, iniciar, pglogin, setTempoRedirect, tempoRedirect} = useContext(NavegacaoContext);

    /* regras de navegação dos componentes*/
    const navigate = useNavigate();
    const navegarParaIniciar = () =>{ setIniciar(true); setPgLogin(false)}
    const navegarParaSortear = () =>{ setSortear(true); setIniciar(false); setMidias(false);}
    const navegarParaExibirMidias = () =>{ setMidias(true); setSortear(false);}
    const navegarParaFinalizar = () =>{ setJogoFinalizado(true); redirecionaJogador()}

     /* regras de exibição dos componentes*/
    const exibeCompMensagem = (): boolean => { return (sortear || jogoFinalizado)}
    const exibeContador = (): boolean => { return jogoFinalizado}
    const exibeCompFinalizar = (): boolean => { return ((sortear || midias) && !jogoFinalizado)}
    const exibeCompMidias = (): boolean => { return (midias && !jogoFinalizado) }
    const exibeCompSortear = (): boolean => { return (sortear && !jogoFinalizado)}
    const exibeCompIniciar = (): boolean => { return iniciar}
    const exibeCompLogin = (): boolean => { return pglogin}
    const tempoRestanteRedirect = (): number => {return tempoRedirect}

    const redirecionaJogador = () => {
        setTimeout(() => {
            navigate('/');
        }, 10000);
        temporizador(tempoRedirect, setTempoRedirect);
    }

    return {
        navegarParaIniciar, 
        navegarParaSortear, 
        navegarParaExibirMidias,
        navegarParaFinalizar,
        exibeCompMensagem,
        exibeContador,
        exibeCompFinalizar,
        exibeCompMidias,
        exibeCompSortear,
        exibeCompIniciar,
        exibeCompLogin,
        tempoRestanteRedirect
    }
}