import Item from '../Item/Item';
import styles from '../ItemList/ItemList.module.css';

const ItemList = (props) => {
     return (
          <>
          <section className={`row m-1 ${styles.list__container}`}>
               {props.items.map(item =>
               <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    editorial={item.editorial}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                    cover_size={item.cover_size}
                    stock={item.stock}
               />)}
          </section>
          </>
     );
}

export default ItemList;