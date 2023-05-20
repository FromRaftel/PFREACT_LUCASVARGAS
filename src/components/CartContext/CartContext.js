import {
  collection,
  doc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const { createContext, useState } = require("react");

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  // agregar al carrito - add y update
  const addItem = (item, quantity) => {
    // validar si el produto ya está en el carrito.
    if (isInCart(item.id)) {
      for (const products of cartList) {
        if (products.id === item.id) {
          products.qty += quantity;
        }
      }

      setCartList([...cartList]);
    } else {
      setCartList([
        ...cartList, //spread: agrega al contenido existente
        {
          id: item.id,
          image: item.pictureUrl,
          image_size: item.cover_size,
          name: item.title,
          price: item.price,
          qty: quantity,
        },
      ]);
    }
  };
  // eliminar del carrito
  const removeItem = (idProduct) => {
    setCartList(cartList.filter((item) => item.id !== idProduct));
  };
  // vaciar carrito
  const clear = () => {
    setCartList([]);
  };
  // validar si ya está en el carrito
  const isInCart = (idProduct) => {
    return cartList.find((item) => item.id === idProduct) ? true : false;
  };
  // totales (cantidades) para mostrar en el carrito
  const total_quantity = () => {
    let total = 0;

    for (const products of cartList) {
      total = total + products.qty;
    }
    return total;
  };
  // totales (importes) para mostrar en el carrito
  const total_cost = () => {
    let total = 0;

    for (const products of cartList) {
      total = total + products.price * products.qty;
    }
    return total;
  };
  // finalizar compra
  const createOrder = () => {
    let order = {
      buyer: {
        name: "Lucas es Lucas",
        email: "midireccioneslucas@hotmail.com",
        phone: "1122334455",
      },
      items: cartList.map((it) => {
        return { id: it.id, price: it.price, title: it.name, qty: it.qty };
      }),
      date: serverTimestamp(),
      total: total_cost(),
    };

    const createOrderInFirestore = async () => {
      // agrega el document con un Auto-Id
      const newOrderInFirestore = doc(collection(db, "orders"));
      // usa el Auto-Id generado para agregar los datos al document
      await setDoc(newOrderInFirestore, order);
      return newOrderInFirestore;
    };

    createOrderInFirestore()
      // el contenido del .THEN va entre {} porque se ejecuta más de 1 línea
      .then((result) => {
        alert(`Thank U! Your order code is: ${result.id}`);
        cartList.map(async (item) => {
          const itemRef = doc(db, "comics", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.qty),
          });
        });
        clear();
      })
      .catch((error) => console.log(error));
  };

  return (
    // value: todo lo que está compartido (es un objeto con estados y funciones)
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        total_quantity,
        total_cost,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
