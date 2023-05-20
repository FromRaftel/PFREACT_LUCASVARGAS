import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  const isInStock = props.stock;

  return (
    <>
      <article className="card-group col-6 col-md-4 col-lg-3 col-xl-2 p-1 mx-1 my-3">
        <div className="card h-100">
          <Link to={`/item/${props.id}`}>
            <img
              className="card-img-top"
              src={props.pictureUrl}
              width={props.cover_size}
              alt="cover"
            ></img>
          </Link>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className="card-text">
              <p>{props.editorial}</p>
              <p>$ {props.price}</p>
              {isInStock ? (
                <p>
                  Stock Disponible <strong> {props.stock}</strong>
                </p>
              ) : (
                <p>
                  <strong>Sin Stock</strong>
                </p>
              )}
            </div>
            <div className={`card-footer ${styles.comic__link}`}>
              <Link
                className={`btn btn-dark ${styles.comic__link}`}
                to={`/item/${props.id}`}
              >
                ir a comprar
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Item;
