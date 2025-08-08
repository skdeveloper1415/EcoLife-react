import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
   <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
           
            <span className="text-xl font-semibold">EcoLife</span>
          </div>

          {/* Desktop Navigation  */}
          <div className="hidden md:flex">
            <nav className="flex space-x-4 navbar">
              <a href="/" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium">Home</a>
              <a href="/" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium">About</a>
              <a href="/" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium">Product</a>
              <a href="/" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium">Contact</a>
              </nav>
          </div>
          <div>addda</div>
        </div>

       

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">
                Home
              </a>
              <a href="#products" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">
                Products
              </a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="w-full">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
   </>
  )
}

export default Navigation