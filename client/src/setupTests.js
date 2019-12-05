import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter() });


//enzyme setup for our tests
//jest will run this file before running any test code