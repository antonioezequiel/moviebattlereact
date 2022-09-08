import Button from 'components/button';
import { User } from 'interface/User';
import { iniciarPartidaService } from 'service/Service';
import { useContext } from 'react';
import { AppContext } from 'pages/newPlay';
import { useNavegacaoContext } from 'common/context/navegacaoConsumer';

const Iniciar = () => {
    const {setUser} = useContext(AppContext);
    const {navegarParaSortear, exibeCompIniciar} = useNavegacaoContext();
    const iniciarJogo = async () => {
        try {
            const user: User = await iniciarPartidaService();
            setUser(user);
            /* Ajustes da navegaçao, navega para exibir a opção de sortear */
            navegarParaSortear();
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <>
        {exibeCompIniciar() && 
            <Button tipo="button" valor="Iniciar" onclick={iniciarJogo} />}
        </>
    )
}

export default Iniciar;