import { useContext } from 'react';
import styles from './Midia.module.scss';
import { IMovie } from 'interface/IMovie';
import { User } from 'interface/User';
import { jogarService } from 'service/Service';
import { AppContext } from 'pages/newPlay';
import { useNavegacaoContext } from 'common/context/navegacaoConsumer';

interface Props { listaMovie: IMovie[] }

const Midias = ({listaMovie}: Props) => {
    const {setUser} = useContext(AppContext);
    const {navegarParaSortear, navegarParaFinalizar, exibeCompMidias} = useNavegacaoContext();

    async function escolhaFilme(movie: IMovie) {
        try {
            const user: User = await jogarService(movie.imdbId);
            setUser(user);

            /* navegação dos componentes dependendo do estado das vidas*/
            if (user.life === 0)
                navegarParaFinalizar();
            else
                navegarParaSortear();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        {exibeCompMidias() &&
            <div className={styles.containerGeral}>
                {listaMovie.length > 0 && 
                    <h2 className={styles.apresentacaoMovies}>Escolha a Mídia que você acha que teve mais votos no IMDB</h2>}
                <div className={styles.container_movies}>
                    {listaMovie.map(movie => (
                        <div key={movie.imdbId} className={`${movie.position == 1 && styles.positionOne} ${movie.position == 2 && styles.positionTwo}`}>
                            <h3 className={styles.tituloMovie}>Dados da {movie.position} ª Midia</h3>
                            <img src={movie.foto} alt={movie.title} className={styles.imgMovie} />
                            <p className={styles.dadosMovie}>Código IMDB: {movie.imdbId}</p>
                            <p className={styles.dadosMovie}>Titulo: {movie.title} </p>
                            <p className={styles.dadosMovie}>Ano: {movie.year} </p>
                            <p className={styles.dadosMovie}>Categoria: {movie.categoria}</p>
                            <button className={styles.escolherMovie} onClick={() => escolhaFilme(movie)}>Esse é a sua escolha?</button>
                        </div>
                    ))}
                </div>
            </div>
        }
        </>
    )
}

export default Midias;