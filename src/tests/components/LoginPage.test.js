import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

describe('LoginPage snapshot', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<LoginPage/>);
        expect(wrapper).toMatchSnapshot()
    })
});

describe('Login actions', () => {
    test('should call startLogin on button click', () => {
        const startLogin = jest.fn();
        const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
        wrapper.find('button').simulate('click');
        expect(startLogin).toHaveBeenCalled();
    })
});