import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import styles from "../Cart/Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartList = useContext(CartContext);

  return (
    <>
      <section>
        <article className="row m-3">
          <div className={`btn btn-info col-3 ${styles.cart__btn__back}`}>
            <Link to="/" className={`${styles.cart__link__back}`}>
              Atras
            </Link>
          </div>
          {cartList.cartList.length > 0 ? (
            <div
              className={`btn btn-danger offset-6 col-3 ${styles.cart__btn__empty}`}
              onClick={cartList.clear}
            >
              Vaciar carrito?
            </div>
          ) : (
            <h5>El carrito esta vacio.. </h5>
          )}
        </article>
        {cartList.cartList.length > 0 ? (
          cartList.cartList.map((item) => (
            <>
              {/* <article key={item.id} className={`row m-2 card-footer card-header border-dark ${styles.cart__item__container}`}>
                              <div className="col-2 h-100 m-1">
                                   <img className="col-12" src={item.image} alt='product_image'></img>
                              </div>
                              <div className="col-8">
                                   <p className="col-12"><em>{item.name}</em></p>
                                   <div className="row">
                                        <p className="col-4"><small>$ {item.price}</small></p>
                                        <p className="col-3"><small>x {item.qty}</small></p>
                                        <p className="col-5"><small><strong>$ {item.price * item.qty}</strong></small></p>
                                   </div>
                                   <div className="row">
                                        <p className="col-12"><small>code: {item.id}</small></p>
                                   </div>
                              </div>
                              <div className="col-1 m-1">
                                   <div className="btn btn-danger" onClick={() => cartList.removeItem(item.id)}>X</div>
                              </div>
                         </article> */}
              <div className="card m-3 border-dark">
                <div className="row g-0 m-2">
                  <div className="col-2 h-100 m-auto">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt="product_image"
                    ></img>
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        <small>
                          $ {item.price} x {item.qty} u.
                        </small>
                      </p>
                      {/* <p className="card-text"><small className="text-muted">x {item.qty}</small></p> */}
                      <p className="card-text">
                        <strong>$ {item.price * item.qty}</strong>
                      </p>
                      <p className="col-12">
                        <small className="text-muted">Item: {item.id}</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-1 m-auto text-center">
                    <div
                      className="btn btn-danger"
                      onClick={() => cartList.removeItem(item.id)}
                    >
                      X
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <h3> </h3>
        )}
      </section>
      <section>
        {cartList.cartList.length > 0 ? (
          <article className="row m-4">
            <div className="card offset-1 col-5 border-dark text-center">
              Productos: <strong>{cartList.total_quantity()} U.</strong>
            </div>
            <div className="card col-5 border-dark text-center">
              Total <strong>$ {cartList.total_cost()}</strong>
            </div>
          </article>
        ) : (
          <h3> </h3>
        )}
      </section>
      {cartList.cartList.length > 0 ? (
        <section>
          <article className="row">
            <div
              className={`btn btn-success offset-4 col-4 ${styles.cart__btn__buy}`}
              onClick={cartList.createOrder}
            >
              Finalizar Compra
            </div>
          </article>
          <article className="row m-3">
            <div className={`btn btn-info col-3 ${styles.cart__btn__back}`}>
              <Link to="/" className={styles.cart__link__back}>
                Atras
              </Link>
            </div>
            <div
              className={`btn btn-danger offset-6 col-3 ${styles.cart__btn__empty}`}
              onClick={cartList.clear}
            >
              Vaciar carrito
            </div>
          </article>
        </section>
      ) : (
        <h3> </h3>
      )}
    </>
  );
};

export default Cart;
