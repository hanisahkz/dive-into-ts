import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {

    // how method is defined in TS
    // notice that they are all 'public'
    // corresponds to creating a new contact
    public addNewContact (req: Request, res: Response) {
        let newContact = new Contact(req.body);

        newContact.save((err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    // corresponds to retrieving contact list
    public getContacts (req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    // corresponds to getting a specific contact details
    public getContactWithID (req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    // corresponds to updating a single record
    public updateContact (req: Request, res: Response) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    // corresponds to deleting a single record
    public deleteContact (req: Request, res: Response) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }
}