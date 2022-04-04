import { RaceController } from "./RaceController.js"


class App{
    racersController = new RaceController()
}

window["app"]=new App()