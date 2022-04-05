import {AppState} from "AppState.js"
import { racerService } from "RacerService.js"
function _drawRacers(){
    let template = ''
    const racers = AppState.racers
racers.forEach(r => template += r.template);
document.getElementById('racers').innerHTML=template
}

function _drawDistance() {
    AppState.racers.forEach(r => {
      document.getElementById(`distance-${r.name}`).innerText = r.distance.toString()
    })
  }
function _moveRacers(){
    AppState.racers
    }


export class RaceController {
constructor(){
    this.drawRacers()
}
drawRacers(){
    _drawRacers()
}

}