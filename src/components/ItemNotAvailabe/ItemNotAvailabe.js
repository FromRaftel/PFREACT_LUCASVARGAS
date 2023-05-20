import { Link } from "react-router-dom";
import styles from "./ItemNotAvailabe.module.css";

const ItemCount = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <div>
                    <input className={styles.notAvailable_email} placeholder='Enter your email here'></input>
               </div> */}
        <div className="row">
          {/* <button className={styles.notAvailable_btn}>Email me when it's back</button> */}
          <div>
            <Link to="/" className={`btn btn-info col m-2' ${styles.back}`}>
              Regresa al Catalogo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
