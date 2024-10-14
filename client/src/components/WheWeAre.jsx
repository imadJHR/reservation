import  { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from 'lucide-react'


const WhereWeAre = () => {
  const [activeLocation, setActiveLocation] = useState("New York")

  const locations = [
    {
      city: "Casablanca",
      address: "123 Broadway, New York, NY 10001",
      phone: "+1 (212) 555-1234",
      hours: "Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM",
      frame:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26610.900572686398!2d-7.6672556108493595!3d33.51795774519446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d07a826b0d9%3A0x6464ebaae0d1d64e!2sSidi%20Maarouf%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1728947215365!5m2!1sfr!2sma" 
    },
    {
      city: "Tanger",
      address: "456 Oxford Street, London, W1C 1AP",
      phone: "+44 20 7123 4567",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
      frame:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26610.900572686398!2d-7.6672556108493595!3d33.51795774519446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d07a826b0d9%3A0x6464ebaae0d1d64e!2sSidi%20Maarouf%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1728947215365!5m2!1sfr!2sma"
    },
    {
      city: "Marrakech",
      address: "789 Roppongi Hills, Minato, Tokyo 106-6108",
      phone: "+81 3-1234-5678",
      hours: "Mon-Fri: 9AM-7PM, Sat-Sun: 10AM-3PM",
      frame:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26610.900572686398!2d-7.6672556108493595!3d33.51795774519446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d07a826b0d9%3A0x6464ebaae0d1d64e!2sSidi%20Maarouf%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1728947215365!5m2!1sfr!2sma"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Where We Are</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Our Global Presence</CardTitle>
            <CardDescription>Explore our offices around the world</CardDescription>
          </CardHeader>
          <CardContent>
          <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26610.900572686398!2d-7.6672556108493595!3d33.51795774519446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d07a826b0d9%3A0x6464ebaae0d1d64e!2sSidi%20Maarouf%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1728947215365!5m2!1sfr!2sma" width="600" height="450"  ></iframe>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Locations</CardTitle>
            <CardDescription>Select a city to view details</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="New York" className="w-full">
              <TabsList className="w-full justify-start mb-4">
                {locations.map((location) => (
                  <TabsTrigger
                    key={location.city}
                    value={location.city}
                    onClick={() => setActiveLocation(location.city)}
                  >
                    {location.city}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {locations.map((location) => (
                <TabsContent key={location.city} value={location.city}>
                  <iframe 
                    src={location.frame} 
                    alt={`${location.city} Office`} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {location.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      {location.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      {location.hours}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button>Contact This Location</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visit Us</CardTitle>
            <CardDescription>Experience our {activeLocation} office</CardDescription>
          </CardHeader>
          <CardContent>
            <img 
              src={`/placeholder.svg?height=300&width=400&text=${activeLocation}+Office+Interior`}
              alt={`${activeLocation} Office Interior`}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-600">
              Our {activeLocation} office showcases our commitment to innovation and collaboration. 
              With state-of-the-art facilities and a vibrant work environment, we invite you to 
              experience the heart of our operations. Schedule a visit today and see how we're 
              shaping the future of our industry.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Schedule a Visit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default WhereWeAre