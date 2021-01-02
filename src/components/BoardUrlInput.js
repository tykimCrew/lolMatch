import React, { Component } from 'react';
import styled from 'styled-components';

const UrlInput = styled.input`
    width: 50rem;
    height: 40%;
    font-size: 15px;
    padding-left: 10px;
    border-radius: 3px;
    align-self: center;
    margin-right: 10px;
`;

const SearchBtn = styled.button`
    width: 5rem;
    height: 40%;
    background-color: #001a1a;
    border-color: #ffcc66;
    color: #f3f3f3;
    border-radius: 3px;
    align-self: center;
`;
class BoardUrlInput extends Component {
    render() {
        return (
            <React.Fragment>
                <UrlInput
                    id="boardUrl"
                    placeholder="방송국 게시판 URL을 입력해주세요"
                    value={this.props.boardUrl || ''}
                    onChange={this.props.onChange}
                />
                <SearchBtn onClick={() => this.props.onClick(this.props.boardUrl)}>
                    검색
                </SearchBtn>
            </React.Fragment>
        );
    };
}

export default BoardUrlInput;