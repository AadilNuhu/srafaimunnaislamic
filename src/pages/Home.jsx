import React from 'react'
import Footer from '../Footer'

const Home = () => {
    return (
        <div>
            {/* <!-- Hero Section --> */}
            <header class="relative bg-green-700 text-white">
                <div class="container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">Quality Islamic Education</h1>
                        <p class="text-xl mb-6">Nurturing young minds with academic excellence and Islamic values since 2003.</p>
                        <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <a href="/admission" class="bg-white text-green-800 px-6 py-3 rounded-lg font-medium text-center hover:bg-green-100 transition">Enroll Now</a>
                            <a href="/about" class="border-2 border-white px-6 py-3 rounded-lg font-medium text-center hover:bg-white hover:text-green-800 transition">Learn More</a>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex justify-center">
                        <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" alt="Students learning" class="rounded-lg shadow-2xl max-w-full h-auto max-h-96 object-cover" />
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </header>

            {/* <!-- Quick Info --> */}
            <section class="bg-white py-8 shadow-sm">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div class="p-6 border border-green-100 rounded-lg hover:shadow-md transition">
                            <i class="fas fa-calendar-alt text-green-700 text-3xl mb-3"></i>
                            <h3 class="text-xl font-semibold mb-2">School Calendar</h3>
                            <p class="text-gray-600">View our academic calendar and important dates</p>
                        </div>
                        <div class="p-6 border border-green-100 rounded-lg hover:shadow-md transition">
                            <i class="fas fa-bus text-green-700 text-3xl mb-3"></i>
                            <h3 class="text-xl font-semibold mb-2">Transportation</h3>
                            <p class="text-gray-600">Safe and reliable school transportation services</p>
                        </div>
                        <div class="p-6 border border-green-100 rounded-lg hover:shadow-md transition">
                            <i class="fas fa-utensils text-green-700 text-3xl mb-3"></i>
                            <h3 class="text-xl font-semibold mb-2">School Meals</h3>
                            <p class="text-gray-600">Healthy and halal meals provided daily</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Academics Section --> */}
            <section id="academics" class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-green-800 mb-4">Our Academics</h2>
                        <div class="w-20 h-1 bg-green-600 mx-auto"></div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Nursery --> */}
                        <div class="border border-green-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <div class="bg-green-700 text-white p-4">
                                <h3 class="text-xl font-semibold">Nursery Department</h3>
                                <p class="text-green-100">Ages 2-4 years</p>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-700 mb-4">Our nurturing environment helps young children develop through play-based learning with Islamic values integrated throughout the day.</p>
                                <ul class="space-y-2 mb-6">
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Quran memorization (short surahs)</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Basic Arabic letters</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Early literacy & numeracy</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Social skills development</span>
                                    </li>
                                </ul>
                                <a href="/about" class="text-green-700 font-medium hover:underline">Learn more →</a>
                            </div>
                        </div>

                        {/* <!-- Primary --> */}
                        <div class="border border-green-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <div class="bg-green-700 text-white p-4">
                                <h3 class="text-xl font-semibold">Primary School</h3>
                                <p class="text-green-100">Grades 1-6</p>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-700 mb-4">A comprehensive curriculum that meets national standards while incorporating Islamic studies, Quran, and Arabic language.</p>
                                <ul class="space-y-2 mb-6">
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Core subjects (Math, Science, English)</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Daily Quran classes</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Islamic studies & Arabic</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Extracurricular activities</span>
                                    </li>
                                </ul>
                                <a href="/about" class="text-green-700 font-medium hover:underline">Learn more →</a>
                            </div>
                        </div>

                        {/* <!-- JHS --> */}
                        <div class="border border-green-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <div class="bg-green-700 text-white p-4">
                                <h3 class="text-xl font-semibold">Junior High School</h3>
                                <p class="text-green-100">Grades 7-9</p>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-700 mb-4">Preparing students for secondary education with rigorous academics and strong moral foundation.</p>
                                <ul class="space-y-2 mb-6">
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Advanced academic curriculum</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Tahfiz program available</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Leadership development</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-600 mr-2"></i>
                                        <span>Career guidance</span>
                                    </li>
                                </ul>
                                <a href="/about" class="text-green-700 font-medium hover:underline">Learn more →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Testimonials --> */}
            <section class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-green-800 mb-4">What Parents Say</h2>
                        <div class="w-20 h-1 bg-green-600 mx-auto"></div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold mr-4">A</div>
                                <div>
                                    <h4 class="font-semibold">Amina Mohammed</h4>
                                    <p class="text-sm text-gray-600">Parent of Primary 3 student</p>
                                </div>
                            </div>
                            <p class="text-gray-700 italic">"My daughter has flourished both academically and spiritually since joining Srafa-Immuna. The teachers are dedicated and the Islamic environment is exactly what we wanted for her education."</p>
                            <div class="flex mt-4 text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold mr-4">K</div>
                                <div>
                                    <h4 class="font-semibold">Kwame Ansah</h4>
                                    <p class="text-sm text-gray-600">Parent of JHS 2 student</p>
                                </div>
                            </div>
                            <p class="text-gray-700 italic">"The balance between academic excellence and Islamic teachings is perfect. My son has memorized more Quran here in two years than I have in my whole life!"</p>
                            <div class="flex mt-4 text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold mr-4">F</div>
                                <div>
                                    <h4 class="font-semibold">Fatima Abdulai</h4>
                                    <p class="text-sm text-gray-600">Parent of Nursery student</p>
                                </div>
                            </div>
                            <p class="text-gray-700 italic">"I was nervous about sending my little one to school, but the nurturing environment at Srafa-Immuna put all my fears to rest. She comes home happy every day, reciting new surahs."</p>
                            <div class="flex mt-4 text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Home