const pirateController = require('../controllers/pirate.controllers');

module.exports = (app) => {
    app.post("/api/pirates", pirateController.createPirate)
    app.get('/api/pirates', pirateController.getAllPirates);
    app.get('/api/pirate/:id', pirateController.getOnePirate);
    app.put('/api/pirates/edit/:id', pirateController.updatePirate);
    app.delete('/api/pirates/delete/:id', pirateController.deleteAnExistingPirate);
}