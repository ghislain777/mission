
const appService =  require("../services/app_service")

const appController =  {}

appController.dashboard = async (req, res) => {
const retour = await appService.getdashboard()
    res.send(retour)
}
module.exports = appController