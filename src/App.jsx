import { useSelector } from 'react-redux';

import Cart from './pages/Cart/Cart';

import { addItem, removeItem, calculateTotal } from './redux/cart/cart';
import data from './api.json';
import { useDispatch } from 'react-redux';

function App() {
    const cartItems = useSelector((state) => state.cart.item);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        dispatch(calculateTotal(item.price));
    };

    return (
        <>
            <div className='App'>
                <Cart cartItems={cartItems} />
                <div className='header'>
                    <h1>Галерея</h1>

                    <button>Корзина ({cartItems.length})</button>
                </div>

                <div className='main'>
                    {data.map((item) => (
                        <div className='card' key={item.id}>
                            <div className='fakeimg'>Здесь могла бы быть ваша реклама</div>
                            <h3>{item.name}</h3>
                            <h2>Цена: {item.price}</h2>
                            <div className='buttons'>
                                <button onClick={() => handleAddItem(item)}>Добавить</button>
                                <button onClick={() => dispatch(removeItem(item))}>Удалить</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
