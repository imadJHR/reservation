import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReservationForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    time: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://reservation-api-xdr1.onrender.com/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json()

      navigate("/success",{state:{formData}})
      
    } catch (err) {
      alert("Error creating reservation");
      
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 pb-10 min-h-screen bg-gradient-to-br from-rose-100 to-teal-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center rounded-lg shadow-2xl overflow-hidden"id="reservation">
      <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Elegant table setting" 
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      <div className="md:w-1/2 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Make a Reservation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700">Phone</label>
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="block text-gray-700">Guests</label>
          <Input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            min="1"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700">Date</label>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700">Time</label>
          <Input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-gray-700">Special Requests</label>
          <Textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Any special requests?"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full text-white py-2 px-4 rounded-lg"
        >
          Make Reservation
        </Button>
      </form>
    </div>
      </div>
    </div>
  );
};

export default ReservationForm;
