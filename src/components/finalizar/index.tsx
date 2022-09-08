import { useNavegacaoContext } from 'common/context/navegacaoConsumer';
import { AppContext } from 'pages/newPlay';
import { useContext } from 'react';
import { finalizarJogoService } from 'service/Service';

const Finalizar = () => {
    const {setUser} = useContext(AppContext);
    const {navegarParaFinalizar, exibeCompFinalizar} = useNavegacaoContext();
    const finalizarJogo = async () => {
        try {
            setUser(await finalizarJogoService());
            /* controle de navegação, para finalizar jogo */ 
            navegarParaFinalizar();
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <>
            {exibeCompFinalizar() &&
            <button type="button" onClick={finalizarJogo}>Finalizar Jogo </button>
            }
        </>
    )
}

export default Finalizar;