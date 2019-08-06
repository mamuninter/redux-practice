import React from 'react'
import { connect } from 'react-redux'

const Count = (props) => {
    return (
        <div>
        <p>{ props.count }</p>
    </div>
    );
};

//  by default this function gets an argument named state, you can name this fuction whatever you want but the connvention is mapStateToProps
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Count);