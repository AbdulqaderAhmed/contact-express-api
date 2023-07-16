import express from "express";
import "dotenv/config";
import contactsController from "../controllers/contactsController.js";
import connected from "../config/dbConnection.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { getContacts, getContact, createContact, editContact, deleteContact } =
  contactsController;

app.route("/api/contact").get(getContacts).post(createContact);

app
  .route("/api/contact/:id")
  .get(getContact)
  .put(editContact)
  .delete(deleteContact);

const db = connected();

if (db) {
  app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is started on ", process.env.SERVER_PORT);
  });
}
