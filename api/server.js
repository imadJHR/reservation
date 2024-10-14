// Import required modules
import express from "express";
import cors from "cors";
import { body, validationResult } from "express-validator";
import mongoose, { mongo } from "mongoose"; // Import Mongoose
import bodyParser from "body-parser";
import dotenv from "dotenv/config.js"; // Load environment variables

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
// Connect to MongoDB using Mongoose
mongoose
  .connect(
    "mongodb+srv://imadjohar4:imadJHR05$@cluster0.kwjej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Reservation schema and model
const reservationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    specialRequests: { type: String , required:true },
    guests: { type: Number, require: true },
  },
  { collection: "Reservation" }
); // specify your custom collection name

const Reservation = mongoose.model("Reservation", reservationSchema);

// Validation rules for reservation
const reservationValidationRules = [
  body("firstName")
    .isAlpha()
    .withMessage("First name must contain only letters")
    .notEmpty()
    .withMessage("First name is required"),
  body("lastName")
    .isAlpha()
    .withMessage("Last name must contain only letters")
    .notEmpty()
    .withMessage("Last name is required"),
  body("email")
    .isEmail()
    .withMessage("Invalid email format")
    .notEmpty()
    .withMessage("Email is required"),
  body("phone"),
  body("date")
    .isDate()
    .withMessage("Invalid date format")
    .notEmpty()
    .withMessage("Reservation date is required"),
  body("time")
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("Invalid time format (HH:MM)")
    .notEmpty()
    .withMessage("Reservation time is required"),
  body("specialRequests"),
  body("guests")
    .isNumeric()
    .withMessage("Guests must be a number")
    .notEmpty()
    .withMessage("Guests are required"),
];

// Route to handle reservation creation
app.post("/reserve", reservationValidationRules, async (req, res) => {
  // Validate the request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract reservation details from the request body
  const {
    firstName,
    lastName,
    email,
    phone,
    date,
    time,
    specialRequests,
    guests,
  } = req.body;

  // Create a new reservation object
  const newReservation = new Reservation({
    firstName,
    lastName,
    email,
    phone,
    date,
    time,
    specialRequests,
    guests,
  });

  try {
    // Save the reservation to MongoDB
    const savedReservation = await newReservation.save();
    // Send a success response
    res.status(201).json({
      message: "Reservation created successfully",
      reservation: savedReservation,
    });
  } catch (err) {
    // Handle errors during the save operation
    res
      .status(500)
      .json({ error: "Failed to create reservation", details: err });
  }
});

// Route to get all reservations (optional for debugging)
app.get('/reservations', async (req, res) => {
  try {
    // Fetch all reservations from the database
    const allReservations = await Reservation.find();
    // Send the reservations as a JSON response
    res.json(allReservations);
  } catch (err) {
    // Handle errors during the fetch operation
    res.status(500).json({ error: 'Failed to retrieve reservations', details: err });
  }
});
//schema
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true },
})
const Subscriber = mongoose.model('Subscriber',subscriberSchema)
//route
app.post('/subscribe', async (req, res) => {
  const { email } = req.body
  if (!email || !validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }
  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return res.status(200).json({ message: 'Subscribed successfully!' });
  } catch (error) {
    return res.status(500).json({ message: 'Error subscribing' });
  }
})
// Validate email format
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
