import  { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChefHat, Coffee, Star } from 'lucide-react'

const OurTeam = () => {
  const [activeCategory, setActiveCategory] = useState("Kitchen Staff")

  const teamCategories = [
    {
      name: "Kitchen Staff",
      icon: <ChefHat className="h-5 w-5" />,
      members: [
        {
          name: "John Doe",
          role: "Head Chef",
          image: "/placeholder.svg?height=200&width=200&text=John",
          bio: "With over 15 years of culinary experience, John brings a wealth of knowledge and creativity to our kitchen. His passion for farm-to-table cuisine shines through in every dish.",
          specialty: "Farm-to-table cuisine"
        },
        {
          name: "Jane Smith",
          role: "Sous Chef",
          image: "/placeholder.svg?height=200&width=200&text=Jane",
          bio: "Jane's attention to detail and innovative approach to traditional recipes have made her an invaluable part of our culinary team. She specializes in creating unique flavor combinations.",
          specialty: "Innovative flavor combinations"
        },
        {
          name: "Mike Johnson",
          role: "Pastry Chef",
          image: "/placeholder.svg?height=200&width=200&text=Mike",
          bio: "Mike's exquisite pastries and desserts are the perfect ending to any meal. His creations are not just delicious but also visually stunning.",
          specialty: "Artistic dessert presentations"
        }
      ]
    },
    {
      name: "Service Staff",
      icon: <Coffee className="h-5 w-5" />,
      members: [
        {
          name: "Emily Brown",
          role: "Restaurant Manager",
          image: "/placeholder.svg?height=200&width=200&text=Emily",
          bio: "Emily ensures that every aspect of your dining experience is perfect. Her attention to detail and warm personality create a welcoming atmosphere for all our guests.",
          specialty: "Customer experience management"
        },
        {
          name: "David Lee",
          role: "Head Waiter",
          image: "/placeholder.svg?height=200&width=200&text=David",
          bio: "David's extensive knowledge of our menu and wine list, combined with his impeccable service, enhances the dining experience of our guests.",
          specialty: "Wine pairing recommendations"
        },
        {
          name: "Sarah Wilson",
          role: "Bartender",
          image: "/placeholder.svg?height=200&width=200&text=Sarah",
          bio: "Sarah's creative cocktails and friendly demeanor make her a favorite among our patrons. She has a knack for crafting the perfect drink to complement your meal.",
          specialty: "Craft cocktail creation"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      
      <Tabs defaultValue="Kitchen Staff" className="w-full mb-8">
        <TabsList className="w-full justify-center">
          {teamCategories.map((category) => (
            <TabsTrigger
              key={category.name}
              value={category.name}
              onClick={() => setActiveCategory(category.name)}
              className="flex items-center gap-2"
            >
              {category.icon}
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {teamCategories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.members.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-gray-600 mb-4">{member.specialty}</p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Learn More</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{member.name}</DialogTitle>
                          <DialogDescription>{member.role}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Avatar className="w-32 h-32 mx-auto">
                            <AvatarImage src={member.image} alt={member.name} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <p className="text-center">{member.bio}</p>
                          <div className="flex items-center justify-center gap-1">
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                            <span className="font-semibold">Specialty:</span> {member.specialty}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default OurTeam