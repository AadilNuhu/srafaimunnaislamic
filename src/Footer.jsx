import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* <!-- Footer --> */}
    <footer class="bg-green-900 text-white pt-12 pb-6">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Srafa-Immuna Islamic Basic School</h3>
                    <p class="mb-4 text-green-200">Providing quality Islamic education since 2003, nurturing young minds with academic excellence and strong moral character.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-green-200 hover:text-white"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-green-200 hover:text-white"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-green-200 hover:text-white"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-green-200 hover:text-white"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-green-200 hover:text-white">Home</a></li>
                        <li><a href="#about" class="text-green-200 hover:text-white">About Us</a></li>
                        <li><a href="#academics" class="text-green-200 hover:text-white">Academics</a></li>
                        <li><a href="#gallery" class="text-green-200 hover:text-white">Gallery</a></li>
                        <li><a href="#contact" class="text-green-200 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-4">Academics</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-green-200 hover:text-white">Nursery</a></li>
                        <li><a href="#" class="text-green-200 hover:text-white">Primary</a></li>
                        <li><a href="#" class="text-green-200 hover:text-white">Junior High</a></li>
                        <li><a href="#" class="text-green-200 hover:text-white">Quran Program</a></li>
                        <li><a href="#" class="text-green-200 hover:text-white">Extracurricular</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-4">Newsletter</h4>
                    <p class="text-green-200 mb-4">Subscribe to our newsletter to receive updates on school news and events.</p>
                    <form class="flex">
                        <input type="email" placeholder="Your email" class="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800" />
                        <button type="submit" class="bg-green-700 px-4 py-2 rounded-r hover:bg-green-600"><i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            
            <div class="border-t border-green-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p class="text-green-200 mb-4 md:mb-0">© 2025 Srafa-Immuna Islamic Basic School. All rights reserved.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-green-200 hover:text-white">Privacy Policy</a>
                    <a href="#" class="text-green-200 hover:text-white">Terms of Service</a>
                    <a href="#" class="text-green-200 hover:text-white">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer