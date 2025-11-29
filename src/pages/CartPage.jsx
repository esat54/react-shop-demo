import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';


function CartPage() {
    const cartItems = useSelector(state => state.cart.items);
    const uniqueCount = useSelector(state => state.cart.totalUniqueItems);
    const totalCount = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);


    return (
        <div className="cart-page-container">
            <div className="cart-page-header">
                <h1 className="cart-page-title">Sepetim</h1>

                {cartItems.length > 0 && (
                    <div className="cart-summary">
                        <div className="cart-summary-item">
                            <div className="cart-summary-label">Ürün Çeşidi</div>
                            <div className="cart-summary-value">{uniqueCount}</div>
                        </div>
                        <div className="cart-summary-item">
                            <div className="cart-summary-label">Toplam Adet</div>
                            <div className="cart-summary-value">{totalCount}</div>
                        </div>
                        <div className="cart-summary-item">
                            <div className="cart-summary-label">Toplam Fiyat</div>
                            <div className="cart-summary-value">${totalAmount.toFixed(2)}</div>
                        </div>
                    </div>
                )}
            </div>

            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Sepetinizde ürün bulunmamaktadır.</p>
            ) : (
                <div className="cart-list">
                    {cartItems.map(item => (
                        <CartItem key={item.id} product={item} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default CartPage;