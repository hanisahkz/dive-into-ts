import {Request, Response} from "express";

// ENDPOINTS:
// '/' GET
// '/contact' GET, POST
// '/contact/:contactId' GET, PUT, DELETE
export class Routes {
    public routes(app): void {
        app.route('/')
            .getg((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });

        // note how this is a chained call to GET, POST
        // to the same endpoint '/post'
        // Contact
        app.route('/contact')
            // GET endpoint
            .get((req: Request, res: Response) => {
                // Get all contacts
                res.status(200).send({
                    message: 'GET all contacts successfulll!!!!'
                })
            })
            // POST endpoint
            .post((req: Request, res: Response) => {
                // Create new contact
                res.status(200).send({
                    message: 'Create new contact successfulll!!!!'
                })
            });

        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get((req: Request, res: Response) => {
                // Get a single contact detail
                res.status(200).send({
                    message: 'GET specific contact detail successfulll!!!!'
                })
            })
            .put((req: Request, res: Response) => {
                // Update a contact
                res.status(200).send({
                    message: 'PUT update specific contact detail successfulll!!!!'
                })
            })
            .delete((req: Request, res: Response) => {
                // Delete a contact
                res.status(200).send({
                    message: 'DELETE specific contact detail successfulll!!!!'
                })
            });
    }
}