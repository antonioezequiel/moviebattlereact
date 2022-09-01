import Button from "components/button";
import { IMovie } from "interface/IMovie";
import { buscarMidiasService } from "service/Service";

const Sortear = ({estado, setEstado}: {estado: boolean, setEstado: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const buscarMidias = () => {
        console.log('adasdas')
        setEstado(false);       
        console.log(coletaMidias());
    }

    async function coletaMidias() {
        return await buscarMidiasService();
    }

    return (
        <input type="button" value="Sortear mídias" onClick={buscarMidias}/>
    )
}
export default Sortear;