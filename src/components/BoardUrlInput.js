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

const NaverLadder = styled.p`
    background: #19ce60;
    color: white;
    border-radius: 5px;
    padding: 0.2rem;
    position: absolute;
    right: 50px;
    align-self: center;
    cursor:pointer;
`;

const Elolboard = styled.p`
    background: white;
    border-radius: 5px;
    padding: 0.2rem;
    position: absolute;
    right: 160px;
    align-self: center;
    cursor:pointer;
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
                <NaverLadder
                    onClick={() => window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%82%AC%EB%8B%A4%EB%A6%AC%ED%83%80%EA%B8%B0')}
                >
                    네이버사다리
                </NaverLadder>
                <Elolboard
                    onClick={() => window.open('http://eloboard.com/lol/bbs/board.php?bo_table=rank_list')}
                >
                    CK전적순위
                </Elolboard>
            </React.Fragment>
        );
    };
}

export default BoardUrlInput;