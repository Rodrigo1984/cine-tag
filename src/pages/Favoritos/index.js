import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from './Favoritos.module.css'
import Card from "components/Card";
function Favoritos() {
    return (
        <>
        <Banner imagem='favoritos'/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            <Card id='1' titulo='gato' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
        </section>
        </>
    )
}

export default Favoritos;