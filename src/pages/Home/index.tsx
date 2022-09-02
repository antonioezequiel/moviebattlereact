import { User } from 'interface/User';
import { useEffect } from 'react';
import { useState } from 'react';
import { listarCampeoes } from 'service/Service';
import styles from './Home.module.scss';
import coroaOuro from 'assets/coroaOuro.jpg'
import coroaPrata from 'assets/coroaPrata.jpg'
import coroaBronze from 'assets/coroaBronze.jpg'

const Home = () => {
    const [lista, setLista] = useState<User[]>([]);

    useEffect(() => {
        carregarCampeoes();
    }, []);

    const carregarCampeoes = async () => {
        let posicao = 0;
        //obter campeões do jogo
        const listaProv: User[] = await listarCampeoes('1').then();
        const listaOrdenada: User[] = listaProv.sort((a, b) => (a.score > b.score) ? -1 : 1);
        listaOrdenada.map(camp => (camp.position = ++posicao));
        setLista(listaOrdenada);
    }

    return (
        <div className={styles.home_container}>
            <h1 className={styles.home_container__h1}>Nosso Ranking de campeões</h1>
            <div className={styles['search-container']}>
                <form>
                    <input
                        type="text"
                        className={styles.buscar}
                        autoFocus
                        placeholder="Busque por um campeão..."
                    />
                </form>
            </div>
            <div className={styles['moments-container']}>
                {lista.map(camp => (
                    <div className={styles.moment}>
                        <div className={`${Number(camp.position) <= 3 && styles.topPosition} ${Number(camp.position) > 3 && styles.normal}`}>
                            {camp.position == 1 && <img src={coroaOuro} alt="coroaOuro" />}
                            {camp.position == 2 && <img src={coroaPrata} alt="coroaPrata" />}
                            {camp.position == 3 && <img src={coroaBronze} alt="coroaBronze" />}
                            <div className={styles.content}>
                                <h2>{camp.position} ª Posição </h2>
                                <p>Nome: {camp.usuario}</p>
                                <p> {camp.score} pontos</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={Number(lista.length) > 0 && styles.invisivel}>
                <h1 className={styles.home_container__h1}>Não há jogos Salvos!</h1>
            </div>
        </div>
    )
}

export default Home;