export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Public Modular Kitchen</h3>
            <p className="text-secondary-300 text-sm">
              Modern, affordable modular kitchen solutions for every home. 
              Quality craftsmanship meets innovative design.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-secondary-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-secondary-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/#location" className="text-secondary-300 hover:text-white transition-colors">
                  Find Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-1 text-sm text-secondary-300">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary-700 text-center text-sm text-secondary-400">
          <p>&copy; {new Date().getFullYear()} Public Modular Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}