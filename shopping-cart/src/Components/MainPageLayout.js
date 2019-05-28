import React from 'react';

const MainPageLayout = (props) => {
    return(
        props.itemsForSale.map((item) => 
        { 
            return(
            <div className="item-container">
                <img src={item.imageSource} alt={item.name+" picture"} />
                <div className="name-and-number">
                <div>
                    <p>{item.name}</p>
                </div>
                <div>
                    Price: {item.price}
                </div>
                <div className="number-buttons">
                    <button onClick={() => props.handleMinusButtonClick(item)}>-</button>
                    <p className="number">{item.numberInCart}</p>
                    <button onClick={() => props.handlePlusButtonClick(item.id)}>+</button>
                </div>
                </div>
            </div>
            )
        })
    )
}

export default MainPageLayout;