import { useFavoritoContext } from 'Contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png'

function Card({ id, titulo, capa}) {
    const { favorito, adicionarFavorito} = useFavoritoContext()
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={capa}></img>
            <h2>{titulo}</h2>
            <img src={iconeFavoritar} alt="Favoritar filme" className={styles.favoritar} onClick={() => {
                adicionarFavorito({id, titulo, capa})
            }}></img>
        </div>
    )
}

export default Card;