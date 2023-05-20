import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetch, firestoreFetchSome } from '../../utils/firestoreFetch';

const ItemListContainer = (props) => {
     const [items, setItems] = useState([]);
     const [loading, setLoading] = useState(true);
     const urlParams = useParams();

     // CONSUMIR DESDE DB EN FIRESTORE (FIREBASE)
     useEffect(() => {
          if (urlParams.idCategory === undefined) {
               // function Fecth para setear los datos de la consulta
               firestoreFetch()
                    .then(consulta => setItems(consulta))
                    .then(() => setLoading(false))
                    .catch(error => console.log('Hubo un error en la consulta a la DB', error));
          } else {
               // function Fecth con parámetros para filtrar (campo y valor)
               firestoreFetchSome('idCategory', urlParams.idCategory)
               .then(consulta => setItems(consulta))
               .then(() => setLoading(false))
               .catch(error => console.log('Hubo un error en la consulta a la DB', error));
          }
     }, [urlParams.idCategory]);

     return (
     <>
          <section className={styles.catalogue__container}>
               <h3 className = {styles.greeting}>{props.greeting}</h3>
               {loading ? <img src='https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif' alt='Buscando novedades...'></img> : 
               <ItemList items={items}></ItemList>}
          </section>
     </>
     );
}
export default ItemListContainer;