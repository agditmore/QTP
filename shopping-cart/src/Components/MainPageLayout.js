import React from 'react';

const MainPageLayout = (props) => {
    return(
        props.itemsForSale.map((item) => 
        { 
            return(
            <div className="item-container">
                <img src={item.imageSource} alt={item.name+" picture"} className="image" />
                <div className="name-and-number">
                <div className="name-div">
                    <p>{item.name}</p>
                </div>
                <div className="description-div">
                    <p>{item.description}</p>
                </div>
                <div className="price-div">
                    Price: ${item.price.toFixed(2)}
                </div>
                <div className="number-buttons">
                    <button onClick={() => props.handleMinusButtonClick(item,-1)}>-</button>
                    <p className="number">{item.numberInCart}</p>
                    <button onClick={() => props.handlePlusButtonClick(item,1)}>+</button>
                </div>
                </div>
            </div>
            )
        })
    )
}

export default MainPageLayout;