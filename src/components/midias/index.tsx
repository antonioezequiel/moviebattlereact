import { useContext, useState } from 'react';
import styles from './Midia.module.scss';
import { IMovie } from 'interface/IMovie';
import { User } from 'interface/User';
import { jogarService } from 'service/Service';
import { AppContext } from 'pages/newPlay';

interface Props {
    listaMovie: IMovie[],
    setEscolherMovie: React.Dispatch<React.SetStateAction<boolean>>
}

const Midias = ({ listaMovie, setEscolherMovie}: Props) => {
    const {setUser, setJogoFinalizado} = useContext(AppContext);
    async function escolhaFilme(movie: IMovie) {
        setEscolherMovie(true);
        const user: User = await jogarService(movie.imdbId);
        setUser(user);

        if (user.life === 0) {
            setJogoFinalizado(true);
        }
    }
    return (
        <>
            <div className={styles.containerGeral}>
                {listaMovie.length > 0 && <h2 className={styles.apresentacaoMovies}>Escolha a Mídia que você acha que teve mais votos no IMDB</h2>}
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
        </>

    )
}

export default Midias;