import Button from "components/button";
import { User } from "interface/User";
import { finalizarJogoService } from "service/Service";

const Finalizar = ({setUser, setJogoFinalizado} : {setUser: React.Dispatch<React.SetStateAction<User>>, setJogoFinalizado: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const finalizarJogo = async () => {
        setJogoFinalizado(true);
        setUser(await finalizarJogoService());
    }
    return (
        <button type="button" onClick={finalizarJogo}>Finalizar Jogo </button>
    )
}

export default Finalizar;