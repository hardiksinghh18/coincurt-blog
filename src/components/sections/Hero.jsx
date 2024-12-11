import React from 'react'

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to the Developer Blog
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Discover in-depth technical content, tutorials, and insights from the developer community.
          </p>
        </div>
        <div className="space-x-4">
        <button>Start Reading</button>
         <button>Browse Categories</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
