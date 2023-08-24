import React, {useState} from "react";

export const Header = ({allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal}) => {
    const [active, setActive] = useState(false);
    const onDeleteProduct = product => {
        const results = allProducts.filter(item => item.id !== product.id);
        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };
    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (<header>
        <h1>Tienda de Libros</h1>
        <div className="container-icon">
            <div className="container-cart-icon" onClick={() => setActive(!active)}>
                <img
                    src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png"
                    alt="carrito" className="icon-cart"
                />
                <svg className="icon-cart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div className="count-products">
                    <span id="contador-productos">{countProducts}</span>
                </div>
            </div>
            <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                {allProducts.length ? (<>
                    <div className='row-product'>
                        {allProducts.map(product => (<div className='cart-product' key={product.id}>
                            <div className='info-cart-product'>
                                <span className='cantidad-productocarrito'>{product.quantity}</span>
                                <img src={product.urlImage} height="30px"/>
                                <p className='titulo-productocarrito'>
                                    {product.title}
                                </p>
                                <span className='precio-productocarrito'>${product.price}</span>
                            </div>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                                alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)}
                            />
                        </div>))}
                    </div>
                    <div className='cart-total'>
                        <h3>Total:</h3>
                        <span className='total-pagar'>${total}</span>
                    </div>
                    <button className='btn-clear-all' onClick={onCleanCart}>Vaciar Carrito</button>
                </>) : (<p className='cart-empty'>El carrito está vacío</p>)}
            </div>
        </div>
    </header>);
}
