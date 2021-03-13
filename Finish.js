class finish{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, 200, 100, options);
    }
    display(){

        fill ("yellow")

        console.log(this.body.position.y)


        rectMode (CENTER)
        rect(this.body.position.x,this.body.position.y,200,100)

    }
}