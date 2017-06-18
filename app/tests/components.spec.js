'use strict';

// react
import React from 'react';

// testing utils
import { spy } from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

// component
import Home from '../components/Home';
import Header from '../components/Header';
import Airport1 from '../components/Airport1';
import Airport2 from '../components/Airport2';
import Distance from '../components/Distance';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import {Provider} from 'react-redux';

describe('<Home />', () => {

  const homeComponent = shallow(<Home />);

  it('should be named "Home"', () => {
    const HomeWrapper = () => <Home />;
    const HomeComponentWrapper = shallow(<HomeWrapper />);
    expect(HomeComponentWrapper.name()).to.equal('Home');
  })

  it('should render one <Header /> component', () => {
    expect(homeComponent.find(Header)).to.have.length(1);
  });

  it('should render one <Airport1 /> component', () => {
    expect(homeComponent.find(Airport1)).to.have.length(1);
  });

  it('should render one <Airport2 /> component', () => {
    expect(homeComponent.find(Airport2)).to.have.length(1);
  });

  it('should render one <Distance /> component', () => {
    expect(homeComponent.find(Distance)).to.have.length(1);
  });

});

describe('<Header />', () => {

  const headerComponent = shallow(<Header />);

  it('should have title "Find distance between two airports:"', () => {
    expect(headerComponent.find('h1').render().text()).to.equal('Find distance between two airports:');
  });

});