export class Racer{
    constructor(name, picture, number, distance = 0){
        this.name=name
        this.picture=picture
        this.number=number
        this.distance=distance
    }
    move(){
        this.distance += Math.floor(Math.random()*3)
        }
    get Template() {
        return /*html*/ `
        <div class="col-md-3 d-flex bg-dark text-white" style="height: 50px; width: 100vw;">
        <div>
            <h1>${this.name}</h1>
            <img src="${this.picture}" alt="">
            <div class="d-flex">
              <h4>${this.picture}</h4>
              <h4>${this.number}</h4>
              <h4 id="score-${this.name}">${this.distance}</h4>
            </div>
        </div>
    </div>
        `
        

    }
   
}