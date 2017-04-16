const MESSAGES = "MESSAGES";
module.exports = {
    list(callback){
        let mesageStr = localStorage.getItem(MESSAGES);
        let messages = mesageStr ? JSON.parse(mesageStr) : [];
        callback(messages);
    },
    add(message, callback){
        this.list((messages)=> {
            message._id = messages.length > 0 ? messages[messages.length - 1]._id + 1 : 1;
            message.creatAt = new Date();
            messages.push(message);
            localStorage.setItem(MESSAGES, JSON.stringify(messages))
            callback(messages);
        });
    },
    delet(_id, callback){
        this.list((messages)=> {
            messages = messages.filter((message)=>message._id != _id);
            localStorage.setItem(MESSAGES, JSON.stringify(messages))
            callback(messages);
        })

    }
}