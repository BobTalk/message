let $ = require("jquery");
let api = 'http://localhost:9000/messages';
module.exports = {
    list(callback){
        $.get(api).done(messages=>callback(messages))
    },
    add(message, callback){
        $.post(api, message).done(messages=>callback(messages))
    },
    delet(_id, callback){
        $.ajax({
            url: api,
            type: 'delete',
            data: {_id}
        }).done(messages=>callback(messages))
    }
}