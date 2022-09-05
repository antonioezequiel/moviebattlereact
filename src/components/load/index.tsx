import { User } from 'interface/User';
import styles from './Load.module.scss';

const Load = ({hasMore, setHasMore, setPgCamp, pgCamp}: {hasMore: boolean, setHasMore: React.Dispatch<React.SetStateAction<boolean>>,
                                                                setPgCamp: React.Dispatch<React.SetStateAction<number>>, pgCamp:number}) => {
    const buscarMaisCampeoes = () => {
        setHasMore(true);
        setPgCamp(pgCamp + 1);
    }
    return (
        <>
            {hasMore && <div className={styles['text-center']}>
                <button className={styles.load} onClick={buscarMaisCampeoes}>carregar mais campeões...</button>
            </div>}
            {!hasMore && <p className={styles['text-alert']}>A lista de campeões chegou ao fim</p>}
        </>
    )
}

export default Load;