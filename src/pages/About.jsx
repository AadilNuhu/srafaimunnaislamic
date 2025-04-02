import React from 'react'

const About = () => {
    return (
        <div>
            {/* <!-- About Section --> */}
            <section id="about" class="py-16 bg-gray-50">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-green-800 mb-4">About Our School</h2>
                        <div class="w-20 h-1 bg-green-600 mx-auto"></div>
                    </div>

                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="School building" class="rounded-lg shadow-lg w-full" />
                        </div>
                        <div class="md:w-1/2">
                            <h3 class="text-2xl font-semibold text-green-800 mb-4">Our History & Mission</h3>
                            <p class="text-gray-700 mb-4">Founded in 2003, Srafa-Immuna Islamic Basic School has been providing quality education grounded in Islamic values for over 22 years. We are committed to nurturing well-rounded individuals who excel academically while maintaining strong moral character.</p>
                            <p class="text-gray-700 mb-6">Our mission is to create an environment that fosters intellectual growth, spiritual development, and social responsibility, preparing students to be leaders in both their communities and the global society.</p>

                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                    <div>
                                        <h4 class="font-semibold">Qualified Teachers</h4>
                                        <p class="text-gray-600 text-sm">Our staff are certified professionals with Islamic education training.</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                    <div>
                                        <h4 class="font-semibold">Modern Facilities</h4>
                                        <p class="text-gray-600 text-sm">Well-equipped classrooms, library, science lab, and prayer area.</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                    <div>
                                        <h4 class="font-semibold">Holistic Approach</h4>
                                        <p class="text-gray-600 text-sm">Balancing academic excellence with Islamic teachings and character building.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Features Section --> */}
            <section class="py-16 bg-green-700 text-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold mb-4">Why Choose Srafa-Immun?</h2>
                        <div class="w-20 h-1 bg-white mx-auto"></div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div class="text-center p-6">
                            <div class="bg-white text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-quran text-2xl"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Quranic Education</h3>
                            <p class="text-green-100">Daily Quran classes with memorization and tajweed for all students.</p>
                        </div>

                        <div class="text-center p-6">
                            <div class="bg-white text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-user-graduate text-2xl"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Academic Excellence</h3>
                            <p class="text-green-100">Consistently high performance in national examinations.</p>
                        </div>

                        <div class="text-center p-6">
                            <div class="bg-white text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-hands-helping text-2xl"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Character Building</h3>
                            <p class="text-green-100">Developing moral character based on Islamic values.</p>
                        </div>

                        <div class="text-center p-6">
                            <div class="bg-white text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-users text-2xl"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Community</h3>
                            <p class="text-green-100">Strong parent-teacher partnership for student success.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- News & Events --> */}
            <section class="py-16 bg-gray-50">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-green-800 mb-4">News & Events</h2>
                        <div class="w-20 h-1 bg-green-600 mx-auto"></div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <img src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Event" class="w-full h-48 object-cover" />
                                <div class="p-6">
                                    <div class="text-sm text-green-700 mb-2">June 15, 2023</div>
                                    <h3 class="text-xl font-semibold mb-3">Annual Quran Competition</h3>
                                    <p class="text-gray-700 mb-4">Join us for our 10th Annual Quran Memorization Competition featuring students from all classes.</p>
                                    <a href="#" class="text-green-700 font-medium hover:underline">Read more →</a>
                                </div>
                        </div>

                        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Event" class="w-full h-48 object-cover" />
                                <div class="p-6">
                                    <div class="text-sm text-green-700 mb-2">July 28, 2023</div>
                                    <h3 class="text-xl font-semibold mb-3">Graduation Ceremony</h3>
                                    <p class="text-gray-700 mb-4">Celebrating our JHS graduates as they move on to secondary education.</p>
                                    <a href="#" class="text-green-700 font-medium hover:underline">Read more →</a>
                                </div>
                        </div>

                        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Event" class="w-full h-48 object-cover" />
                                <div class="p-6">
                                    <div class="text-sm text-green-700 mb-2">August 10, 2023</div>
                                    <h3 class="text-xl font-semibold mb-3">Open House Day</h3>
                                    <p class="text-gray-700 mb-4">Prospective parents are invited to tour our facilities and meet our staff.</p>
                                    <a href="#" class="text-green-700 font-medium hover:underline">Read more →</a>
                                </div>
                        </div>
                    </div>

                    <div class="text-center mt-10">
                        <a href="#" class="inline-block border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-700 hover:text-white transition">View All News</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About