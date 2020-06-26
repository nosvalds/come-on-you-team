import React, { Component } from "react";
import loader from '../../img/loader-large.png';

class Loading extends Component {
    componentDidMount() {
        if (!this.props.loaded) {
            this.props.handleLoad();
        }
    }

    render() {
        const { children, loaded } = this.props;
        return loaded ? children : (
            <div className="loader" aria-label="Loading...">
                <img alt="Loading" src={loader} />
            </div>
        );
}
}
export default Loading;