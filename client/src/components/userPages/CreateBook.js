import React from 'react';
import {connect} from 'react-redux';

import {createBook} from '../../actions/bookActions';


class CreateBook extends React.Component () {

}

const mapStateToProps = (state)=>({
    books: state.book
});

export default connect(mapStateToProps)(CreateBook);