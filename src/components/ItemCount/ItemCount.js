import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cant, setCant] = useState(initial);

  const countItem = (operation) => {
    if (operation === "+") {
      if (cant < stock) {
        setCant(cant + 1);
      }
    } else {
      if (cant > 1) {
        setCant(cant - 1);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.controls}>
          <button
            className={styles.controls__btn}
            onClick={() => countItem("-")}
          >
            -
          </button>
          <div>{cant}</div>
          <button
            className={styles.controls__btn}
            onClick={() => countItem("+")}
          >
            +
          </button>
        </div>
        <div className={`row`}>
          <div>
            <Link to="/" className={`btn btn-info col-4 m-2' ${styles.back}`}>
              Regresar al Catalogo
            </Link>
            <div
              className={`btn btn-success col-4 m-2 ${styles.add}`}
              onClick={() => onAdd(cant)}
            >
              Añadir al Carrito
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
