import { Racer } from "./model/Racer.js"




let racer1 = new Racer('Mario','https://thiscatdoesnotexist.com'  ,' 1')
let racer2 = new Racer('Luigi','https://thiscatdoesnotexist.com'  ,' 2')
let racer3 = new Racer('Wario','https://thiscatdoesnotexist.com'  ,' 3')
let racer4 = new Racer('Waluigi','https://thiscatdoesnotexist.com'  ,' 4')

export const AppState = {
    racers: [racer1, racer2, racer3, racer4]
}