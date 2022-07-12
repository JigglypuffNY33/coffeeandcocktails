import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DrinkCard from './DrinkCard.jsx'
import CartItem from './CartItem.jsx'


class Dashboard extends Component {
    constructor(props){
        super(props);  
        this.state = {
            randomVar: true
        }
        this.rerenderFunction = this.rerenderFunction.bind(this);
    }

    // Reinacting a react hook
    rerenderFunction(){
      this.setState({
        randomVar: !this.state.randomVar
      })
      console.log(this.state.randomVar)
    }

    render(){
        const drinkCards = [];

        for(let i = 0; i < this.props.drinksList.length; i++){
          console.log('each item being passed down: ', this.props.drinksList[i])
            drinkCards.push(<DrinkCard key={i} drinkItem={this.props.drinksList[i]} rerenderFunction={this.rerenderFunction}/>)
        }

        const shoppingCartList = [];

          for(let i = 0; i < this.props.drinksList.length; i++){
            // console.log(typeof parseInt(JSON.parse((localStorage.getItem(localStorage.key(i)))).total))
            console.log('json version of each key/value:', localStorage.getItem(localStorage.key(i)))
            console.log('parsed version of each key/value:', JSON.parse(localStorage.getItem(localStorage.key(i))))
            console.log('total of each key/value:', JSON.parse(localStorage.getItem(localStorage.key(i))).total)

            if(JSON.parse((localStorage.getItem(localStorage.key(i))))){
              let v = parseInt(JSON.parse((localStorage.getItem(localStorage.key(i)))).total);
              // console.log('v: ', v)
              if(v){
              // if(parseInt(JSON.parse((localStorage.getItem(localStorage.key(i)))).total) > 0){
                console.log('this ran')
                shoppingCartList.push(<CartItem key={i + 'shoppingCartItem'} shoppingCartItem={this.props.drinksList[i]}/>)
              }
            }
          }
        return (
        <div>
          <h1>Hey this is the dashboard/hompage</h1>
          <Link to='/checkout'>Buy your coffee</Link>
          <br></br>
          <Link to='/login'>Sign out</Link>
          <div className="drinksDisplay">
            {drinkCards}
          </div> 
        <div className="dashboardCartDisplay">
            {shoppingCartList}
          </div>     
        </div>
        )
    }
}

export default Dashboard;