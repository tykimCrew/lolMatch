import React, { Component } from 'react';

class BoardUrlInput extends Component {
    render() {
        return (
            <React.Fragment>
                <input
                    id="boardUrl"
                    placeholder="방송국 게시판 URL을 입력해주세요"
                    value={this.props.boardUrl || ''}
                    onChange={this.props.onChange}
                />
                <button onClick={() => this.props.onClick(this.props.boardUrl)}>
                    검색
                </button>
            </React.Fragment>
        );
    };
}

export default BoardUrlInput;