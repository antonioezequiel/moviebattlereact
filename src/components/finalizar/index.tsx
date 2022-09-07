import { AppContext } from 'pages/newPlay';
import { useContext } from 'react';
import { finalizarJogoService } from 'service/Service';

const Finalizar = () => {
    const {setUser, setJogoFinalizado} = useContext(AppContext);
    const finalizarJogo = async () => {
        setUser(await finalizarJogoService()); 
        setJogoFinalizado(true);
    }
    return (
        <button type="button" onClick={finalizarJogo}>Finalizar Jogo </button>
    )
}

export default Finalizar;