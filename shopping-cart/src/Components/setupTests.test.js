import React from 'react';
import MainPageLayout from './MainPageLayout.js'
import Enzyme from 'enzyme'; 
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
Enzyme.configure({ adapter: new Adapter() }); 


describe('<MainPageLayout />', () => {
    const component = shallow(<MainPageLayout
        itemsForSale={[{name: "testItem", price: 1, numberInCart: 2}, {name: "secondTest", price: 2, numberInCart:1}]} />);
    it ('renders', () => {
        expect(component.find({id:'price-div'}))
    })

    describe('price is 1', () => {
        it ('renders', () => {
            expect(component.find({id:'price-div'}).at(0).text()).toEqual('Price: $1.00')
        });
        
    })

    describe('name is assigned', () => {
        it ('renders', () => {
            expect(component.find({id:'name-div'}).at(0).text()).toEqual('testItem')
        });
    })

    describe('renders multiple items', () => {
        it ('renders', () => {
            expect(component.find({id: 'name-div'}).length).toEqual(2)
        });
    })

})