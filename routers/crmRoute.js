import {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact
} from '../controllers/crmController'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            next();
        }, getContacts)

        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactId')
        .get(getContactWithId);

    app.route('/contact/:contactId')
        // put request
        .put(updateContact)

        // delete request
        .delete(deleteContact)
};

export default routes;
