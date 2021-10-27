import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Login from "../components/Login/Login.js";

configure({
   adapter: new Adapter()
});

it('checks if the submit button is there', () => {
   const wrapper = shallow(<Login />);
   expect(wrapper.find('#submit-button1')).to.have.lengthOf(1);
 });

 it('checks if the email input form is there', () => {
   const wrapper = shallow(<Login />);
   expect(wrapper.find('#email')).to.have.lengthOf(1);
 });

 it('checks if the password input is there', () => {
   const wrapper = shallow(<Login />);
   expect(wrapper.find('#password')).to.have.lengthOf(1);
 });


