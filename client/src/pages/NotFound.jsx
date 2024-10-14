import { Button } from "@/components/ui/button"
import { UtensilsCrossed } from "lucide-react"
import {Link} from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <UtensilsCrossed className="mx-auto h-24 w-24 text-amber-600" />
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oops! It seems the dish you're looking for isn't on our menu.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-500">
            Don't worry, our chef has plenty of other delicious options for you.
          </p>
          <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
            <Link to="/">
              Return to Home Page
            </Link>
          </Button>
          <p className="text-xs text-gray-400">
            Error 404 - The requested page could not be found.
          </p>
        </div>
      </div>
    </div>
  )
}