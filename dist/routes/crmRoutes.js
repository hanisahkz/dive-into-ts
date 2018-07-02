"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ENDPOINTS:
// '/' GET
// '/contact' GET, POST
// '/contact/:contactId' GET, PUT, DELETE
class Routes {
    routes(app) {
        app.route('/')
            .getg((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // note how this is a chained call to GET, POST
        // to the same endpoint '/post'
        // Contact
        app.route('/contact')
            .get((req, res) => {
            // Get all contacts
            res.status(200).send({
                message: 'GET all contacts successfulll!!!!'
            });
        })
            .post((req, res) => {
            // Create new contact
            res.status(200).send({
                message: 'Create new contact successfulll!!!!'
            });
        });
        // Contact detail
        app.route('/contact/:contactId')
            .get((req, res) => {
            // Get a single contact detail
            res.status(200).send({
                message: 'GET specific contact detail successfulll!!!!'
            });
        })
            .put((req, res) => {
            // Update a contact
            res.status(200).send({
                message: 'PUT update specific contact detail successfulll!!!!'
            });
        })
            .delete((req, res) => {
            // Delete a contact
            res.status(200).send({
                message: 'DELETE specific contact detail successfulll!!!!'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map