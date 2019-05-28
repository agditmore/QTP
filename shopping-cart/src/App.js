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
      totalNoTax: 0,
      itemsForSale
    }
  }

  handlePlusButtonClick = (itemId) =>
  {
    this.setState({
      numberOfItemsInShoppingCart: this.state.numberOfItemsInShoppingCart+1,
      itemsForSale: this.state.itemsForSale.map((item) => item.id===itemId ? 
      {
        ...item,
        numberInCart: item.numberInCart+1
      } 
      : item)
    })
  }

  handleMinusButtonClick = (changedItem) =>
  {
    if (changedItem.numberInCart>0){
      this.setState({
        numberOfItemsInShoppingCart: this.state.numberOfItemsInShoppingCart-1,
        itemsForSale: this.state.itemsForSale.map((item) => item.id===changedItem.id ? 
        {
          ...item,
          numberInCart: item.numberInCart-1
        } 
        : item)
      })
    }
  }

  handleShoppingCartIcon = () => {
    this.setState({
      showMainPage: !this.state.showMainPage
    })
  }

  handleCheckoutButtonClick = () => {
    this.setState({
      numberOfItemsInShoppingCart: 0,
      totalNoTax: 0,
      showMainPage: true,
      itemsForSale: this.state.itemsForSale.map((item) => item.numberInCart > 0 ?
      {
        ...item,
        numberInCart: 0
      }
      :item)
    })
  }

  // addTotalNoTax = (item) => {
  //   let newCost = item.numberInCart*item.price
  //   this.setState({
  //     totalNoTax: this.state.totalNoTax + newCost
  //   })
  // }

//   trackTotalNoTax = (newTotalNoTax) => {
//     this.setState({
//         totalNoTax: this.state.totalNoTax + newTotalNoTax
//     })
// }

  render () {
    return (
      this.state.showMainPage ? 
        <div>
          <ShoppingCartIcon 
          handleShoppingCartIcon={this.handleShoppingCartIcon}
          numberOfItemsInShoppingCart={this.state.numberOfItemsInShoppingCart}
          />
          <MainPageLayout 
          itemsForSale={this.state.itemsForSale}
          handlePlusButtonClick={this.handlePlusButtonClick}
          handleMinusButtonClick={this.handleMinusButtonClick}
          numberOfItemsInShoppingCart={this.state.numberOfItemsInShoppingCart}
          />
        </div> 
        : 
        <div>
          <CartPageLayout 
          numberOfItemsInShoppingCart={this.state.numberOfItemsInShoppingCart}
          handleShoppingCartIcon={this.handleShoppingCartIcon}
          itemsForSale={this.state.itemsForSale}
          handleCheckoutButtonClick={this.handleCheckoutButtonClick}
          />
        </div>
    )
    }
}

export default App;
