"use strict";

//import React & ReactDOM for browser rendering
import React from 'react';
import ReactDOM from "react-dom";

require('/react/src/style/scss/global.scss');

import Index from './index';

ReactDOM.render(
    <div>
        <Index />
    </div>,
    document.getElementById('app-container')
);
