export class Message{
    type:String;
    text:String;
    sendBy:String;
    isReadonly:Boolean;
}

export class Chat{
    users:Array<String>;
    type:String;
    createdBy:String;
    message:Array<Message>;
}