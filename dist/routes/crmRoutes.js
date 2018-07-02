"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
// ENDPOINTS:
// '/' GET
// '/contact' GET, POST
// '/contact/:contactId' GET, PUT, DELETE
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController(); //what would be the consistent situation to start using this
    }
    routes(app) {
        // note how this is a chained call to GET, POST
        // to the same endpoint '/post'
        // Contact
        app.route('/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact);
        // Contact detail
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map