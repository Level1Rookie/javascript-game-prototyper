class InputHandler{

    register(eventType, keycode, action){
        document.addEventListener(eventType, function(event){
            if(event.code == keycode){
                action();
            }
        });
    }
    subscribe(controllable){
        controllable.bind(this.register);
    }
}

export default InputHandler;