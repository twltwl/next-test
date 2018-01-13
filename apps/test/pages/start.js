import React, {Component} from "react";
import withRedux from "next-redux-wrapper";
import store from '../store'

class Page extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
        store.dispatch({type: 'FOO', payload: 'foo'}); // component will be able to read from store's state when rendered
        return {custom: 'custom'}; // you can pass some custom props to component from here
    }
    render() {
        console.log('render', this.props)
        return (
            <div>
                <div onClick={() => {this.props.dispatch({type: 'FOO', payload: 'test'}); } }>Prop from Redux= {this.props.foo}</div>
                <div>Prop from getInitialProps= {this.props.custom}</div>
            </div>
        )
    }
}

export default withRedux(store, (state) => ({foo: state.foo}))(Page);