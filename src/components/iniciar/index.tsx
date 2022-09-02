import Button from "components/button";
import { User } from "interface/User";
import { iniciarPartidaService } from 'service/Service';

const Iniciar = ({estado, setEstado, setUser}: {estado: boolean, setEstado: React.Dispatch<React.SetStateAction<boolean>>, setUser: React.Dispatch<React.SetStateAction<User>>}) => {
    const iniciarJogo = async () => {
        setEstado(false);
        const user: User = await iniciarPartidaService();
        setUser(user);
    }
    return (
        <Button tipo="button" valor="Iniciar" onclick={iniciarJogo} />
    )
}

export default Iniciar;