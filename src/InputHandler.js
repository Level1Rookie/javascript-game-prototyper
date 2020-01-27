class InputHandler{
    constructor(document){
    }
    register(controllable,eventType, keycode, action){
        document.addEventListener(eventType, function(event){
            if(event.code == keycode){
                action(controllable);
            }
        });
    }
}

export default InputHandler;