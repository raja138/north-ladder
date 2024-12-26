Event Management Platform (EMP)
Overview
The Event Management Platform (EMP) is a Node.js and TypeScript-based application for managing events. It provides a RESTful API that allows users to perform CRUD operations on events, such as creating, updating, deleting, and retrieving event data. The app is designed with scalability and maintainability in mind, using clean code practices and modular architecture.

Features
Add Event: Create a new event with all required details.
Update Event: Modify an existing event by its ID.
Delete Event: Remove an event by its ID.
Retrieve Event: Fetch a specific event by its ID.
List All Events: Retrieve all events with optional filters (e.g., by date, organizer, or location).
Data Structure
Event Object
The structure of an event is as follows:

typescript
Copy code
interface Event {
  id: string; // Unique identifier
  eventName: string; // Name of the event
  eventDate: Date; // Date of the event
  organizer: string; // Organizer's name
  email: string; // Organizer's email
  phone: string; // Organizer's phone number
  location: {
    street: string; // Venue street address
    city: string; // Venue city
    state: string; // Venue state
    zip: string; // Venue zip code
  };
  createdAt: Date; // Timestamp of creation
  updatedAt: Date; // Timestamp of last update
}

Steps to Run the Program
Clone the Repository

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install Dependencies

bash
Copy code
npm install
Build the Project Compile TypeScript to JavaScript:

bash
Copy code
npm run build
Run the Server Start the application:

bash
Copy code
npm run start
API Testing Use tools like Postman or cURL to test the APIs. See below for API details and example requests.
