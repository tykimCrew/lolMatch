import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
    width: 100%;
    height: 3rem;
`;

const FooterString = styled.p`
    color: lightgray;
    text-align: right;
    padding-right: 2rem;
`;

export default class Footer extends Component {
    render() {
        return(
            <React.Fragment>
                <FooterWrap className="footer">
                    <FooterString>Copyrightⓒ2020 xyddl All rights reserved. / e-mail : xyddl0406@gmail.com</FooterString>
                </FooterWrap>
            </React.Fragment>
        );
    }
}