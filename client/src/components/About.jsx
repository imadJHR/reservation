import { Button } from "react-scroll"


const About = () => {
  return (
    <div className="flex flex-col min-h-screen" id="about">
        {/* Hero Section */}
<section className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center bg-[#8B4513] justify-center">
<div className="absolute inset-0 bg-black bg-opacity-50"></div>
<div className="relative z-10 text-center text-white">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
  <p className="text-xl">Discover Our Story and Mission</p>
</div>
</section>

{/* About Us Section */}
<section className="py-16 bg-gray-100">
<div className="container mx-auto px-4">
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="md:w-1/2">
      <img src="https://img.freepik.com/photos-gratuite/gens-celebrent-ramadan_23-2151344679.jpg?t=st=1728770257~exp=1728773857~hmac=de0239e92722cecb882c210dc1cb2c23f737006111af5d499ab22ba2250badc2&w=1380" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg" />
    </div>
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold mb-4">Our Story</h2>
      <p className="text-gray-600 mb-6">
        Founded in 2010, Veganfry has been at the forefront of promoting plant-based lifestyles. Our journey began with a simple idea: to make vegan food accessible, delicious, and exciting for everyone.
      </p>
      <p className="text-gray-600 mb-6">
        Over the years, we've grown from a small local eatery to a nationwide chain, but our commitment to quality, sustainability, and animal welfare remains unchanged.
      </p>
      <Button>Learn More</Button>
    </div>
  </div>
</div>
</section>
    </div>
  )
}

export default About