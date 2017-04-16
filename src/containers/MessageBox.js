import  React/*, {Component}*/ from "react";
import  MessageList from "../component/MessageList"
import  MessageForm from "../component/MessageForm"
export  default  class MessageBox extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: []
        }
    }

    componentWillMount() {
        this.props.store.list((messages)=> {
            this.setState({messages});
        });
    }

    addMessage(message) {
        /*   let messages = this.state.messages;
         message.id = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
         message.creatAt = new Date();
         messages.push(message);*/
        this.props.store.add(message, (messages)=> {
            this.setState({
                messages
            });
        });
    }

    delMessage(_id) {
        this.props.store.delet(_id, (messages)=> {
            this.setState({messages})
        })
        /*let messages = this.state.messages;
         messages = messages.filter((message)=>message.id != id);
         this.setState({messages});*/
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="text-center">
                        欢迎留言
                    </h3>
                </div>
                <div className="panel-body">
                    <MessageList delMessage={this.delMessage.bind(this)} messages={this.state.messages}/>
                </div>
                <div className="panel-footer">
                    <MessageForm addMessage={this.addMessage.bind(this)}/>
                </div>
            </div>
        )
    }
}
