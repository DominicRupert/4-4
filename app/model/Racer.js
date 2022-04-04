export class Racer{
    constructor(name, picture, number, distance = 0){
        this.name=name
        this.picture=picture
        this.number=number
        this.distance=distance
    }
    get Template() {
        return `
        <div class="col-md-3 d-flex bg-dark text-white" style="height: 50px; width: 100vw;">
        <div>
            <h1>${this.name}</h1>
            <img src="${this.picture}" alt="">
            <div class="d-flex"></div>
        </div>
    </div>
        `
        

    }
    move(){
    this.distance += Math.floor(Math.random()*3)
    }
}