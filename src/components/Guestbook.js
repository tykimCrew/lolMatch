import React, { Component } from 'react';
import styled from 'styled-components';

const GeustbookWrap = styled.input`
    border: 1px gold solid;
    width: 100px;
    height: 50px;
`;

export default class Guestbook extends Component {
    render() {
        return(
            <React.Fragment>
                <GeustbookWrap type="button"/>
            </React.Fragment>
        );
    }
}
