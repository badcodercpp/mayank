import React from 'react';
import _noop from 'lodash/noop';

function Substitute({Component = _noop}){
    return (
        <div>
            this is header
            <Component />
        </div>
    )
}

function WithHeader(Component){
    return function Comp(){
        return (
            <Substitute Component={Component} />
        )
    }
}
export default WithHeader;