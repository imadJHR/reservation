import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';

export default function RestaurantFooter() {
    const [email , setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
      setIsLoading(true);
      try {
        const response = await axios.post('http://localhost:3000/subscribe', { email })
        toast.success(response.data.message,{position:toast.POSITION.TOP_CENTER})
      } catch (error) {
        const errorMessage = error.response?.data?.message|| 'Subscription failed. Please try again.'
        toast.error(errorMessage,{position:toast.POSITION.TOP_CENTER})
        

        
      }
      setIsLoading(true)
    }

  return (
    <footer className="bg-gradient-to-r from-amber-100 to-orange-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h1 className='text-3xl font-bold'>IMAD JOHAR</h1>
            <p className="text-gray-600 text-sm">
              Experience culinary excellence in a warm, inviting atmosphere. Our passion for food and dedication to service ensure an unforgettable dining experience.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Contact Us</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                    <span>Csablanca, Sidimaarouf ,residence Loubna</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-amber-600" />
                    <span>(+212) 656629707</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-amber-600" />
                    <span>imadjohar4@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Hours</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-amber-600" />
                    <span>Mon-Fri: 11am-10pm</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-amber-600" />
                    <span>Sat: 4pm-11pm</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-amber-600" />
                    <span>Sun: 4pm-9pm</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" md:gap-8">
              
              <div className="mt-12 w-full md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Newsletter</h3>
                <p className="mt-4 text-base text-gray-600">Sign up for special offers and updates.</p>
                <form  onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <Button type="submit" disabled={isLoading} className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Subscribe
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 xl:text-center">
            &copy; 2024 Fine Dining Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}