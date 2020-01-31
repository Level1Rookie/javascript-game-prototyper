class InputHandler{

    addEventListener(eventType, keycode, action){
        document.addEventListener(eventType, function(event){
            if(event.code == keycode){
                action();
            }
        });
    }
    bind(controllable){
        controllable.subscribe(this.addEventListener);
    }
}

export default InputHandler;