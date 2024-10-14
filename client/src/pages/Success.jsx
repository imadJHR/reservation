import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Clock, Users } from "lucide-react"
import {Link} from "react-router-dom"

export default function ReservationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Reservation Confirmed!
          </h2>
          
        </div>
      
        <div className="mt-8 space-y-4">
          <p className="text-center text-sm text-gray-600">
            A confirmation email has been sent to your email address.
          </p>
          <div className="flex flex-col space-y-4">
            
            <Button asChild variant="outline" className="w-full">
              <Link to="/" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
       
      </div>
    </div>
  )
}