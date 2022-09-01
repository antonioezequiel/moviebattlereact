import { useState } from 'react';
import styles from './Midia.module.scss';
import { IMovie } from 'interface/IMovie';
import { useEffect } from 'react';

const Midias = ({ lista, setLista }: { lista: IMovie[], setLista: React.Dispatch<React.SetStateAction<IMovie[]>> }) => {
    let listaPro: IMovie[] = [];
    useEffect(() => {
        let posicao = 0;
        listaPro = lista.map(camp => { camp.position = ++posicao; return camp });
    }, [lista])

    return (
        <>
            <h1>Olá , vamos Jogar?</h1>
            <div className={styles.ultimaJogada}>
                <h3>Dados após a última Jogada!</h3>
                <p className={styles.message}></p>
                <p><span>Lifes:</span> </p>
                <p><span>Rounds: </span></p>
                <p className={styles.score}><span>Score: </span> pontos</p>
            </div>
            <div className={styles.sortear}>
                <button>Sortear Mídias</button>
            </div>
            <div>
                <h2>Escolha a Mídia que você acha que teve mais votos no IMDB</h2>
                <div className={styles['container-movies']}>
                    {listaPro.map(movie => (
                        <div>
                            <h3>Dados da {movie.position} ª Midia</h3>
                            <p>Código IMDB: {movie.imdbId}</p>
                            <p>Titulo: {movie.title} </p>
                            <p>Ano: {movie.year} </p>
                            <p>Categoria: {movie.categoria}</p>
                            <button>Esse é a sua escolha?</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.finalizar}>
                <button >Finalizar Partida</button>
            </div>
        </>

    )
}

export default Midias;