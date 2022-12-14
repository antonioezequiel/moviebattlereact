import { useNavegacaoContext } from 'common/context/navegacaoConsumer';
import { IMovie } from 'interface/IMovie';
import { buscarMidiasService } from 'service/Service';
import styles from './Sortear.module.scss';

const Sortear = ({ setListaMovie }: { setListaMovie: React.Dispatch<React.SetStateAction<IMovie[]>> }) => {
    const {navegarParaExibirMidias, navegarParaSortear, exibeCompSortear} = useNavegacaoContext();
    const buscarMidias = async () => {
        try {
            const listaProv: IMovie[] = await buscarMidiasService().then();
            if(listaProv.length > 0) {
                let posicao = 0;
                setListaMovie(listaProv.map(camp => { camp.position = ++posicao; return camp }));
            
                /* Ajustes de navegação, navega para exibir as mídias */
                navegarParaExibirMidias();
            } else 
                navegarParaSortear();
        } catch (error) {
            console.log(error);
        }     
    }

    return (
        <>
        {exibeCompSortear() && 
            <>
                <h1 className={styles.saudacao}>Vamos sortear as próximas duas mídias para tentarmos adivinhar?</h1>
                <input type="button" className={styles.sortear} value="Sortear mídias" onClick={buscarMidias} />
            </>
        }
        </>
    )
}
export default Sortear;