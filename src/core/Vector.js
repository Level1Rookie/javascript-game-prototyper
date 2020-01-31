class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    add(vector2){
        this.x += vector2.x;
        this.y += vector2.y;
    }
    subtract(vector2){
        this.x -= vector2.x;
        this.y -= vector2.y;
    }
    normalized(){
        let total = Math.sqrt(this.x * this.x + this.y * this.y);
        let x = this.x / total;
        let y = this.y / total;
        return new Vector(x,y);
    }
}

export default Vector;