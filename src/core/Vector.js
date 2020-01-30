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
}

export default Vector;