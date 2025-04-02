import React from 'react'

const Gallery = () => {
  return (
    <div>
        {/* <!-- Gallery Section --> */}
        <section id="gallery" class="py-16 bg-gray-50">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-green-800 mb-4">School Gallery</h2>
                        <div class="w-20 h-1 bg-green-600 mx-auto"></div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
                            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" alt="Classroom" class="w-full h-64 object-cover hover:scale-105 transition duration-500" />
                            <div class="p-4 bg-white">
                                <p class="text-gray-700">Students engaged in classroom learning</p>
                            </div>
                        </div>

                        <div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
                            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Science lab" class="w-full h-64 object-cover hover:scale-105 transition duration-500" />
                            <div class="p-4 bg-white">
                                <p class="text-gray-700">Hands-on science experiments</p>
                            </div>
                        </div>

                        <div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
                            <img src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80" alt="Sports" class="w-full h-64 object-cover hover:scale-105 transition duration-500" />
                            <div class="p-4 bg-white">
                                <p class="text-gray-700">Annual sports day activities</p>
                            </div>
                        </div>

                        <div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
                            <img src="https://images.unsplash.com/photo-1571260898933-d1a9c8d8a0f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Prayer" class="w-full h-64 object-cover hover:scale-105 transition duration-500" />
                            <div class="p-4 bg-white">
                                <p class="text-gray-700">Students performing Dhuhr prayer</p>
                            </div>
                        </div>

                        <div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Graduation" class="w-full h-64 object-cover hover:scale-105 transition duration-500" />
                            <div class="p-4 bg-white">
                                <p class="text-gray-700">Graduation ceremony</p>
                            </div>
                        </div>

                        <div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80" alt="Library" class="w-full h-64 object-cover hover:scale-105 transition duration-500" />
                            <div class="p-4 bg-white">
                                <p class="text-gray-700">School library resources</p>
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-10">
                        <a href="#" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition">View More Photos</a>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Gallery