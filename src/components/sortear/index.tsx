import { NavegacaoContext } from 'common/context/navegacao';
import { IMovie } from 'interface/IMovie';
import { useContext } from 'react';
import { buscarMidiasService } from 'service/Service';
import styles from './Sortear.module.scss';

const Sortear = ({ estado, setEstado, setListaMovie }: { estado: boolean, setEstado: React.Dispatch<React.SetStateAction<boolean>>, setListaMovie: React.Dispatch<React.SetStateAction<IMovie[]>> }) => {
    const {setMidias, setEscolherMovie} = useContext(NavegacaoContext);
    const buscarMidias = async () => {
        setEstado(false);
        const listaProv: IMovie[] = await buscarMidiasService().then();
        let posicao = 0;
        const listaPro2 = listaProv.map(camp => { camp.position = ++posicao; return camp });
        setListaMovie(listaPro2);
        
        /* Ajustes de navegação */
        setMidias(true);
        setEscolherMovie(false)
    }

    return (
        <>
            <h1 className={styles.saudacao}>Vamos sortear as próximas duas mídias para tentarmos adivinhar?</h1>
            <input type="button" className={styles.sortear} value="Sortear mídias" onClick={buscarMidias} />
        </>
    )
}
export default Sortear;