import Button from "components/button";
import { iniciarPartidaService } from 'service/Service';

const Iniciar = ({estado, setEstado}: {estado: boolean, setEstado: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const iniciarJogo = async () => {
        setEstado(false);
        await iniciarPartidaService();
    }
    return (
        <Button tipo="button" valor="Iniciar" onclick={iniciarJogo} />
    )
}

export default Iniciar;