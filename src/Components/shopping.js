/* eslint-disable no-undef */
import { useState } from "react";

const Shopping=({element})=>{
  /*  const [add,setAdd]=useState(0)
    const [remove,setRemove]=useState(0)
    const[Show,setShow]=useState(false)
    const shopShow={
        display:Show?"block":"none"
    }*/
    const [Show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);
  
    const shopShow = {
      display: Show ? "block" : "none",
    };
  
    const handleAddToCart = (itemId) => {
      setCartItems([...cartItems, { id: itemId }]);
    };
  
    const handleRemoveFromCart = (itemId) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
    };
  
    const isInCart = (itemId) => {
      return cartItems.some((item) => item.id === itemId);
    };
return(
    <><div className="Container">
        <div className="shop-1">

            <label className="start">Start BootStrap</label>
            <div className="sub-three">
                <label className="home">Home</label>
                <label className="about">About</label>
                <label className="shop">Shop  <label onClick={() => {
                    setShow(!Show);
                } }>🔻</label></label>
            </div>
            <div style={shopShow}
                className="shop-2">
                <label className="All-products">All Products</label><br></br>
                <hr className="Line-2"></hr>
                <label className="pop-new">Popular Items</label><br></br>
                <label className="pop-new">New Arrivals</label><br></br>
            </div>

            <button className="cart">
                <label>🛒</label>Cart<label>{cartItems.length}</label></button>
        </div>
        <div className="shop-3">
            <h1 className="size-1">Shop in style</h1>
            <h3 className="size-2">With this shop homepage template</h3>

        </div>
        <div className="shopping-section">
            <div className="sub-shop">
                <div className="div-first sale">
                    <div className="sub-first">450 x 300</div>
                    <div className="fancy">
                        <label className="fancy-product">Fancy Product</label>
                        <div className="price">$40.00 - $80.00</div>
                    </div>
                    <button
                className="Add-cart-sale"
                onClick={() =>
                  isInCart(1) ? handleRemoveFromCart(1) : handleAddToCart(1)
                }
              >
                {isInCart(1) ? "Remove From Cart" : "Add To Cart"}
              </button>
                </div>
                <div className="div-sec sale">
                    <div className="sub-first">450 x 300</div>
                    <p className="rush">sale</p>
                    <div className="fancy-special">
                        <label className="fancy-product">Special Item</label>
                        <div className="star">⭐⭐⭐⭐⭐</div>
                        <div className="price"><span className="line-through">$20.00</span> $18.00</div>
                    </div>
                    <button
                className="Add-cart-sale"
                onClick={() =>
                  isInCart(2) ? handleRemoveFromCart(2) : handleAddToCart(2)
                }
              >
                {isInCart(2) ? "Remove From Cart" : "Add To Cart"}
              </button>
                </div>
                <div className="div-third sale">
                    <div className="sub-first">450 x 300</div>
                    <p className="rush">sale</p>
                    <div className="fancy-sec">
                        <label className="fancy-product">Sale Item</label>
                        <div className="price"><span className="mid-line">$50.00</span> $25.00</div>
                    </div>
                    {/* <button className="Add-cart-sale"
       onClick={
         ()=>{
           setAdd(add+1)
         }
     }>Add To Cart</button>
      <button className="Add-cart-sale"
         onClick={()=>{
                  setRemove(remove-1)
         }}>Remove From Cart
     </button>*/}
                    <button
                className="Add-cart-sale"
                onClick={() =>
                  isInCart(3) ? handleRemoveFromCart(3) : handleAddToCart(3)
                }
              >
                {isInCart(3) ? "Remove From Cart" : "Add To Cart"}
              </button>
                
            </div>
            <div className="div-fourth sale">
                <div className="sub-first">450 x 300</div>
                <div className="fancy-fourth">
                    <label className="fancy-product">Popular Item</label>
                    <div className="star">⭐⭐⭐⭐⭐</div>
                    <div className="price-single">$40.00</div>
                </div>
                <button
                className="Add-cart-sale"
                onClick={() =>
                  isInCart(4) ? handleRemoveFromCart(4) : handleAddToCart(4)
                }
              >
                {isInCart(4) ? "Remove From Cart" : "Add To Cart"}
              </button>
            </div>
        </div>
        <div className="sub-shop">
            <div className="div-first sale">
                <div className="sub-first">
                    450 x 300</div>
                <p className="rush">sale</p>
                <div className="fancy-sec">
                    <label className="fancy-product">Sale Item</label>
                    <div className="price"><span className="mid-line">$50.00</span> $25.00</div>
                </div>
                <button
                className="Add-cart-sale"
                onClick={() =>
                  isInCart(5) ? handleRemoveFromCart(5) : handleAddToCart(5)
                }
              >
                {isInCart(5) ? "Remove From Cart" : "Add To Cart"}
              </button>
            </div>
            <div className="div-sec sale">
                <div className="sub-first">450 x 300</div>
                <div className="fancy">
                    <label className="fancy-product">Fancy Product</label>
                    <div className="price">$40.00 - $80.00</div>
                </div>
                <button
                className="Add-cart-sale"
                onClick={() =>
                  isInCart(6) ? handleRemoveFromCart(6) : handleAddToCart(6)
                }
              >
                {isInCart(6) ? "Remove From Cart" : "Add To Cart"}
              </button>
            </div>
            <div className="div-third sale">
                <div className="sub-first">450 x 300</div>
                <p className="rush">sale</p>
                <div className="fancy-special">
                    <label className="fancy-product">Special Item</label>
                    <div className="star">⭐⭐⭐⭐⭐</div>
                    <div className="price"><span className="line-through">$20.00</span> $18.00</div>
                </div>
                <button
                className="Add-cart-sale"
                onClick={() =>
                  isInCart(7) ? handleRemoveFromCart(7) : handleAddToCart(7)
                }
              >
                {isInCart(7) ? "Remove From Cart" : "Add To Cart"}
              </button>
      

            </div>
            <div className="div-fourth sale">
                <div className="sub-first">450 x 300</div>
                <div className="fancy">
                    <label className="fancy-product">Popular Item</label>
                    <div className="star">⭐⭐⭐⭐⭐</div>
                    <div className="price-single">$40.00</div>
                </div>
                <button
                className="Add-cart-sale"
                onClick={() =>
                  isInCart(8) ? handleRemoveFromCart(8) : handleAddToCart(8)
                }
              >
                {isInCart(8) ? "Remove From Cart" : "Add To Cart"}
              </button>
      </div>

            </div>
        </div>
    <div className="shop-4">
            <h4 className="size-3">Copyright © Your Website 2023</h4>
        </div>
        </div>
        </>
    
)
}
export default Shopping;
