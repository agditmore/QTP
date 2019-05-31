import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    const component = shallow(<App/>);
    it ('renders', () => {
        expect(component.find('gameType'))
    })
})