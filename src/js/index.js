import React from 'react';

export default class extends React.Component {

    render() {
        const {state} = this;
        return (<div style={{fontFamily:'arial'}}>
            <h1>BOILERPLATE-PROJECT-NAME</h1>
            <h3>Created By: BOILERPLATE-AUTHOR</h3>
            <div>I'm running in a Docker container</div>

            <div>Try updating `/src/js/index.js`</div>
            <div>Hot reloading will automatically trigger a refresh</div>
        </div>);
    }

}
