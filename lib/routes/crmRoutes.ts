import {Request, Response} from "express";
import {ContactController} from "../controllers/crmController";

// ENDPOINTS:
// '/' GET
// '/contact' GET, POST
// '/contact/:contactId' GET, PUT, DELETE
export class Routes {
    public contactController: ContactController = new ContactController(); //what would be the consistent situation to start using this

    public routes(app): void {
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