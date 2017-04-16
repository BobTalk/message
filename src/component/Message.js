import React from "react";
import  moment from  'moment';
export  default  class MessageForm extends React.Component {
    render() {
        let {message} = this.props;
        return (
            <li className="list-group-item">
                <span>{message.username}:{message.content}</span>
                <button className="btn btn-danger btn-xs pull-right"
                        onClick={this.props.delMessage.bind(this, message._id)}>删 除
                </button>
                <span className="pull-right">{moment(message.creatAt).format('YYYY-MM-DD HH:mm:ss')}</span>
            </li>
        )
    }
}

