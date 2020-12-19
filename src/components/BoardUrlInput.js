import React, {Component} from 'react';

class BoardUrlInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boardUrlValue : ""
        };
    }

    boardUrlOnChange = (e) => {
        this.setState({
            boardUrlValue : e.target.value
        });
    }

    render() {
        return(
            <React.Fragment>
                <input 
                    id="boardUrl"
                    placeholder="방송국 게시판 URL을 입력해주세요"
                    value={this.state.boardUrlValue}
                    onChange={this.boardUrlOnChange}
                />
                <button onClick={() => this.props.onBtnClick(this.state.boardUrlValue)}>
                    가져오기
                </button>
            </React.Fragment>
        );
    };

    
}

export default BoardUrlInput;