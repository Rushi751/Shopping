import { useState } from "react";

const Shopping=({element})=>{
    const[Show,setShow]=useState(false)
    const shopShow={
        display:Show?"block":"none"
    }
return(
    <div className="Container">
        <div className="shop-1">
            
            <label className="start">Start BootStrap</label>
            <div className="sub-three">
            <label className="home">Home</label>
            <label className="about">About</label>
            <label className="shop">Shop  <label onClick={()=>{
                setShow(!Show)}}>🔻</label></label>
            </div>
            <div style={shopShow}
                className="shop-2">
                <label className="All-products">All Products</label><br></br>
                <hr className="Line-2"></hr>
                <label className="pop-new">Popular Items</label><br></br>
                <label className="pop-new">New Arrivals</label><br></br>
            </div>
           
            <button className="cart"><label>🛒</label>Cart<label>0️⃣</label></button>
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
                <button className="view-options">View options</button>
            </div>
            <div className="div-sec sale">
                <div className="sub-first">450 x 300</div>
                <p className="rush">sale</p>
                <div className="fancy-special">
                    <label className="fancy-product">Special Item</label>
                    <div className="star">⭐⭐⭐⭐⭐</div>
                    <div className="price"><span className="line-through">$20.00</span> $18.00</div>
                </div>
                <button className="view-options-cart">Add to cart</button>
            </div>
            <div className="div-third sale">
            <div className="sub-first">450 x 300</div>
            <p className="rush">sale</p>
            <div className="fancy-sec">
                    <label className="fancy-product">Sale Item</label>
                    <div className="price"><span className="mid-line">$50.00</span> $25.00</div>
                </div>
                <button className="Add-cart-sale">Add To Cart</button>
            </div>
            <div className="div-fourth sale">
            <div className="sub-first">450 x 300</div>
            <div className="fancy-fourth">
                    <label className="fancy-product">Popular Item</label>
                    <div className="star">⭐⭐⭐⭐⭐</div>
                    <div className="price-single">$40.00</div>
                </div>
                <button className="Add-cart-fourth">Add To Cart</button>
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
                <button className="Add-cart-sale">Add To Cart</button>
                </div>
            <div className="div-sec sale">
            <div className="sub-first">450 x 300</div>
            <div className="fancy">
                    <label className="fancy-product">Fancy Product</label>
                    <div className="price">$40.00 - $80.00</div>
                </div>
                <button className="view-options">View options</button>
            </div>
            <div className="div-third sale">
            <div className="sub-first">450 x 300</div>
            <p className="rush">sale</p>
            <div className="fancy-special">
                    <label className="fancy-product">Special Item</label>
                    <div className="star">⭐⭐⭐⭐⭐</div>
                    <div className="price"><span className="line-through">$20.00</span> $18.00</div>
                </div>
                <button className="view-options-cart">Add to cart</button>
            </div>
            <div className="div-fourth sale">
            <div className="sub-first">450 x 300</div>
            <div className="fancy">
                    <label className="fancy-product">Popular Item</label>
                    <div className="star">⭐⭐⭐⭐⭐</div>
                    <div className="price-single">$40.00</div>
                </div>
                <button className="Add-cart">Add To Cart</button>
            </div>
            </div>
        </div>
        <div className="shop-4">
            <h4 className="size-3">Copyright © Your Website 2023</h4>
        </div>
    </div>
)
}
export default Shopping;
