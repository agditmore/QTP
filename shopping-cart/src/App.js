import React from 'react';
import './App.css';
import { itemsForSale } from './Data';
import MainPageLayout from './Components/MainPageLayout';
import CartPageLayout from './Components/CartPageLayout';
import ShoppingCartIcon from './Components/ShoppingCartIcon';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfItemsInShoppingCart: 0,
      showMainPage: true,
      itemsForSale
    }
  }

  // handlePlusButtonClick = (changedItem) =>
  // {
  //   this.setState({
  //     numberOfItemsInShoppingCart: this.state.numberOfItemsInShoppingCart+1,
  //     totalNoTax: this.state.totalNoTax+changedItem.price,
  //     itemsForSale: this.state.itemsForSale.map((item) => item.id===changedItem.id ? 
  //     {
  //       ...item,
  //       numberInCart: item.numberInCart+1
  //     } 
  //     : item)
  //   })
  // }
  
  handleChangeQuantity = (item, quantity) => {
    if (item.numberInCart>0){
      this.setState({
        itemsForSale: this.state.itemsForSale.map((item) => item.id===item.id ? 
        {
          ...item,
          numberInCart: item.numberInCart+quantity
        } 
        : item)
      })
    }
  }

  // handleMinusButtonClick = (changedItem) =>
  // {
  //   if (changedItem.numberInCart>0){
  //     this.setState({
  //       numberOfItemsInShoppingCart: this.state.numberOfItemsInShoppingCart-1,
  //       totalNoTax: this.state.totalNoTax-changedItem.price,
  //       itemsForSale: this.state.itemsForSale.map((item) => item.id===changedItem.id ? 
  //       {
  //         ...item,
  //         numberInCart: item.numberInCart-1
  //       } 
  //       : item)
  //     })
  //   }
  // }

  handleShoppingCartIcon = () => {
    this.state.numberOfItemsInShoppingCart > 0 ?
    this.setState({
      showMainPage: !this.state.showMainPage
    }) :
    alert("Your cart is empty!")
  }

  handleCheckoutButtonClick = () => {
    this.setState({
      numberOfItemsInShoppingCart: 0,
      showMainPage: true,
      itemsForSale: this.state.itemsForSale.map((item) => item.numberInCart > 0 ?
      {
        ...item,
        numberInCart: 0
      }
      :item)
    })
  }

  render () {
    return (
      this.state.showMainPage ? 
        <div>
          <ShoppingCartIcon 
            handleShoppingCartIcon={this.handleShoppingCartIcon}
            numberOfItemsInShoppingCart={this.state.numberOfItemsInShoppingCart}
          />
          <br />
          <div id="main-page">
            <MainPageLayout 
              itemsForSale={this.state.itemsForSale}
              handlePlusButtonClick={this.handlePlusButtonClick}
              handleMinusButtonClick={this.handleMinusButtonClick}
              numberOfItemsInShoppingCart={this.state.numberOfItemsInShoppingCart}
            />

          </div>
        </div> 
        : 
        <div>
          <CartPageLayout 
            numberOfItemsInShoppingCart={this.state.numberOfItemsInShoppingCart}
            handleShoppingCartIcon={this.handleShoppingCartIcon}
            itemsForSale={this.state.itemsForSale}
            handleCheckoutButtonClick={this.handleCheckoutButtonClick}
            totalNoTax={this.state.itemsForSale.reduce(acc, item) => item.price +acc}
          />
        </div>
    )
    }
}

export default App;
