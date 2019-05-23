import React from 'react';

const SuperPeople = (props) => {
    const heroesList = props.superPeople.map(hero => <p key={hero.id}>{hero.name} has {hero.power}</p>)
    const restaurantsList = props.restaurants.map(r => <p key={r}>{r}</p>)
    return <div key="hero">
    <h1>My Super Heroes: </h1>{heroesList}
    <h1>Restaurants: </h1>{restaurantsList}
    <button onClick={() => props.onClick()}>Click me</button>
    <p>{props.randomPerson} likes to eat at {props.randomRestaurant}</p>
    </div>
}

export default SuperPeople;