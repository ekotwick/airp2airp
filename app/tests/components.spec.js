'use strict';

// react
import React from 'react';

// testing utils
import { spy } from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// component
import Home from '../components/Home';
import Header from '../components/Header';
import Airport1 from '../components/Airport1';
import Airport2 from '../components/Airport2';
import Distance from '../components/Distance';

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

describe('<Airport1 />', () => {

	const ap1Wrapper = shallow(<Airport1 />);
	const ap1ChangeSpy = spy();
	const ap1Input = ap1Wrapper.find('input');
	const ap1Datalist = ap1Wrapper.find('datalist');
	const ap1Select = ap1Wrapper.find('select');

	it('should render one input html node...', () => {
		expect(ap1Input).to.have.length(1);
	});

	it('...which should have a placeholder value of "Enter first airport name"', () => {
		expect(ap1Input.node.props.placeholder).to.equal('Enter first airport name');
	});

	it('should render one datalast node', () => {
		expect(ap1Datalist).to.have.length(1);
	});

	it('should link the input and datalist nodes together', () => {
		expect(ap1Datalist.node.props.id).to.equal('airportsFirst');
		expect(ap1Input.node.props.list).to.eql('airportsFirst');
	});

	it('should render one select node...', () => {
		expect(ap1Select).to.have.length(1);
	});

	it('should have the input and select nodes call an `onChange` function', () => {
		const ap1OnChange = spy();
		const ap1OnChangeWrapper = shallow(<Airport1 onChange={ap1OnChangeWrapper} />);
		expect(ap1Select.node.props.onChange).to.be.a('function');
		expect(ap1Input.node.props.onChange).to.be.a('function');
		ap1Input.simulate('change');
		expect(ap1OnChange.callCount).to.equal(1);
		ap1Select.simulate('change');
		expect(ap1OnChange.callCount).to.equal(2);
	});

});

describe('<Airport2 />', () => {

	const ap2Wrapper = shallow(<Airport2 />);
	const ap2ChangeSpy = spy();
	const ap2Input = ap2Wrapper.find('input');
	const ap2Datalist = ap2Wrapper.find('datalist');
	const ap2Select = ap2Wrapper.find('select');

	it('should render one input html node...', () => {
		expect(ap2Input).to.have.length(1);
	});

	it('...which should have a placeholder value of "Enter second airport name"', () => {
		expect(ap2Input.node.props.placeholder).to.equal('Enter second airport name');
	});

	it('should render one datalast node', () => {
		expect(ap2Datalist).to.have.length(1);
	});

	it('should link the input and datalist nodes together', () => {
		expect(ap2Datalist.node.props.id).to.equal('airportsSecond');
		expect(ap2Input.node.props.list).to.eql('airportsSecond');
	});

	it('should render one select node...', () => {
		expect(ap2Select).to.have.length(1);
	});

	it('should have the input and select nodes call an `onChange` function', () => {
		const ap2OnChange = spy();
		const ap2OnChangeWrapper = shallow(<Airport2 onChange={ap2OnChangeWrapper} />);
		expect(ap2Select.node.props.onChange).to.be.a('function');
		expect(ap2Input.node.props.onChange).to.be.a('function');
		ap2Input.simulate('change');
		expect(ap2OnChange.callCount).to.equal(1);
		ap2Select.simulate('change');
		expect(ap2OnChange.callCount).to.equal(2);
	});

});

describe('<Distance />', () => {

	const DistanceComponent = shallow(<Distance />);
	const pre = DistanceComponent.find('pre');

	it('render 1 pre html node', () => {
		expect(pre).to.have.length(1);
	});

});