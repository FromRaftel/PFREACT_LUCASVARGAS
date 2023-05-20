import styles from "./ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { firestoreFetchOne } from "../../utils/firestoreFetch";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const urlParams = useParams();

  // CONSUMIR DESDE DB EN FIRESTORE (FIREBASE)
  useEffect(() => {
    firestoreFetchOne(urlParams.idItem)
      .then((result) => setItem(result))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, [urlParams.idItem]);

  return (
    <>
      <section className={styles.catalogue__container}>
        {loading ? (
          <img
            src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif"
            alt="Buscando novedades..."
          ></img>
        ) : (
          <ItemDetail item={item} />
        )}
      </section>
    </>
  );
};

export default ItemDetailContainer;
