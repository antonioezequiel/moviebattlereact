import Button from "components/button";
import { IMovie } from "interface/IMovie";
import { buscarMidiasService } from "service/Service";

const Sortear = ({estado, setEstado, setListaMovie}: {estado: boolean, setEstado: React.Dispatch<React.SetStateAction<boolean>>, setListaMovie: React.Dispatch<React.SetStateAction<IMovie[]>>}) => {
    const buscarMidias = async () => {
        setEstado(false);       
        const listaProv: IMovie[] = await buscarMidiasService().then();
        let posicao = 0;
        const listaPro2 = listaProv.map(camp => { camp.position = ++posicao; return camp });
        setListaMovie(listaPro2);
    }

    return (
        <input type="button" value="Sortear mídias" onClick={buscarMidias}/>
    )
}
export default Sortear;