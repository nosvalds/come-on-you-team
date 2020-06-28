import React, { Component } from "react";
import loader from '../../img/loader-large.png';

class Loading extends Component {

    // triggers the handleLoad action when Loading component first renders
    componentDidMount() {
        // if loaded flag is already true we don't need to query the API again
        if (!this.props.loaded) {
            this.props.handleLoad();
        }
    }

    render() {
        // displays the loader image until loaded is true. Then it displays the children component (what Loaded wraps)
        const { children, loaded } = this.props;
        return loaded ? children : (
            <div className="loader" aria-label="Loading...">
                <img alt="Loading" src={loader} />
            </div>
        );
}
}
export default Loading;