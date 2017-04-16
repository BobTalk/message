import React from "react";
export  default  class MessageForm extends React.Component {
    constructor() {
        super();
    }
    handleSubmit(event) {
        event.preventDefault();
        var username = this.username.value;
        var content = this.content.value;
        this.props.addMessage({username,content});
        this.content.value = '';
    }
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="username" className="control-label col-md-2">
                        姓名:
                    </label>
                    <div className="col-md-10">
                        <input type="text" required="required"
                               ref={ref=> {
                                   this.username = ref
                               }}
                               name="username" id="username" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label col-md-2">
                        内容:
                    </label>
                    <div className="col-md-10">
                        <textarea type="text"  rows="10" cols="30" required="required"
                                  ref={ref=> {
                                      this.content = ref
                                  }}
                                  name="content" id="content" className="form-control"></textarea>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-10 col-md-offset-2">
                        <button className="btn btn-primary">提交</button>
                    </div>
                </div>
            </form>
        )
    }
}