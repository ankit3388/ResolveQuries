const mongooes=require('mongoose')
const AnswerSchema =new mongoose.Schema({
    question_id:{
        type:mongoose.Schema.Type.objectID,
        ref:"Questions",

    },
    answer:String,
    created_at:{
        type:Date,
        deafault:Date.now(),
    },
    user:Object,
    comment_id:{
        type:mongooes.Schema.type.objectID,
        ref:"comments",
    },
    
})
module.export=mogooes.model("Anwers",AnswerSchema);