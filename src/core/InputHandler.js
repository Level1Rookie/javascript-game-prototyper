const events = require('events');

class InputHandler{
    constructor(){
        this.em = new events.EventEmitter();
        this.subscribers = {
            "keyboard": [],
            "mouse": []
        };

        this.em.on('keyup', (data)=>{
            this.subscribers.keyboard.forEach(s => s.notify(data))
        });
        this.em.on('keydown', (data)=>{
            this.subscribers.keyboard.forEach(s => s.notify(data))
        });
        this.em.on('mousedown', (data)=>{
            this.subscribers.mouse.forEach(s => s.notify(data))
        });
        this.em.on('mouseup', (data)=>{
            this.subscribers.mouse.forEach(s => s.notify(data))
        });

        document.addEventListener('keydown',(event) => {
            this.em.emit('keydown',{
                'type': 'keydown',
                'code': event.code
            });
        });
        document.addEventListener('keyup', (event)=>{
            this.em.emit('keyup',{
                'type': event.type,
                'code': event.code
            });
        });
        document.addEventListener('mousedown', (event) => {
            this.em.emit('mousedown',{
                'type': event.type,
                'clientX': event.clientX,
                'clientY': event.clientY
            });
            //console.log(`[${event.clientX}, ${event.clientY}]`);
        })
        document.addEventListener('mouseup', (event) => {
            this.em.emit('mouseup',{
                'type': event.type,
                'clientX': event.clientX,
                'clientY': event.clientY
            });
            //console.log(`[${event.clientX}, ${event.clientY}]`);
        })
    }

    subscribeBy(controllable, channel){
        this.subscribers[channel].push(controllable);
    }
}

export default InputHandler;