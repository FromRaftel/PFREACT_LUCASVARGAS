import style from './Counter.module.css';

const Counter = (props) => {
     return (
          <div className={style.counter}>
               <span>{props.cant}</span>
          </div>
     )
}

export default Counter;