import Vue from 'vue';
import { mount } from '@vue/test-utils';

import FlightSearch from '@/components/FlightSearch'

describe( '<FlightSearch', () => {

  it( 'should render the correct contents', () => {

    const wrapper = mount(FlightSearch);

    // basic exampl assertion: check that certain tags
    // appear on the page, with certain contents
    // "chai" is our assertion library - it gives
    // us the '

    // console.log( wrapper.html() );
    expect( wrapper.text()).to.contain('Search Flights');

    const heading = wrapper.find('h2');
    expect( heading.text() ).to.equal('Search Flights')

    const selects = wrapper.findAll('select');
    expect( selects.length ).to.equal( 2 );

    const originOption = selects.at(0).findAll('option').at(1);
    //Sim
    originOption.setSelected();

    // Check that our state has updates to reflect this selection
    //console.log('new value of origin:', wrapper.vm.origin);

    expect( wrapper.vm.origin ).to.equal( originOption.text() );

    const destinationOption = selects.at(1).findAll('option').at(2);
    destinationOption.setSelected(); // TODO: async
    expect( wrapper.vm.destination ).to.equal( destinationOption.text() );

    //"DON'T TEST THE FRAMEWORK ITSELF!"

    wrapper.find('button').trigger('click');  //simulate user click

    // console.log( originOption.html() );




  }); //it

}); //describe
