import { clearCart, removeItem } from '../../redux/cart/cart';
import { useDispatch, useSelector } from 'react-redux';

const Cart = ({ cartItems }) => {
    const dispatch = useDispatch();
    const cartSum = useSelector((state) => state.cart.total);
    return (
        <div className='cart'>
            <div className='header'>
                <h1>Корзина</h1>

                <div>
                    <h2>Корзина ({cartItems.length})</h2>
                    <h3>Сумма: {cartSum}</h3>
                </div>

                <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
            </div>
            <div className='main'>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <div className='card' key={item.id}>
                            <div className='fakeimg'>Здесь могла бы быть ваша реклама</div>
                            <h3>{item.name}</h3>
                            <h2>Цена: {item.price}</h2>
                            <div className='buttons'>
                                <button onClick={() => dispatch(removeItem(item))}>Удалить</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>Корзина пуста :(</h2>
                )}
            </div>
        </div>
    );
};

export default Cart;
