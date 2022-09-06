import Button from 'components/button';
import { User } from 'interface/User';
import { iniciarPartidaService } from 'service/Service';
import { useContext } from 'react';
import { AppContext } from 'pages/newPlay';

const Iniciar = ({estado, setEstado}: {estado: boolean, setEstado: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {user, setUser} = useContext(AppContext);
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