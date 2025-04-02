import React from 'react'

const Contact = () => {
    return (
        <div>
            {/* <!-- Contact Section --> */}
            <section id="contact" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
                        <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Get In Touch</h3>
                            <p className="text-gray-700 mb-6">We'd love to hear from you. Whether you have questions about admissions, programs, or just want to learn more about our school, our team is ready to assist you.</p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-green-100 text-green-800 p-3 rounded-full mr-4">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Address</h4>
                                        <p className="text-gray-600">Ekumfi, Srafa-Immuna, Central Region, Ghana</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-100 text-green-800 p-3 rounded-full mr-4">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <p className="text-gray-600">+233 24 303 0635 (Administration)</p>
                                        <p className="text-gray-600">+233 54 542 3379 (Admissions)</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-100 text-green-800 p-3 rounded-full mr-4">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="text-gray-600">karimyampah@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-100 text-green-800 p-3 rounded-full mr-4">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">School Hours</h4>
                                        <p className="text-gray-600">Monday - Friday: 7:00 AM - 3:00 PM</p>
                                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM (Islamic Studies)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-green-100 text-green-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-200 transition">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="bg-green-100 text-green-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-200 transition">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="bg-green-100 text-green-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-200 transition">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="bg-green-100 text-green-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-200 transition">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold text-green-800 mb-6">Send Us a Message</h3>
                                <form action="https://formspree.io/f/xldjpeog" method="POST">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="contact-name">Your Name</label>
                                        <input type="text" required name='name' id="contact-name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="contact-email">Email</label>
                                        <input type="email" required name='email' id="contact-email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="contact-subject">Subject</label>
                                        <input type="text" required name='subject' id="contact-subject" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="contact-message">Message</label>
                                        <textarea id="contact-message" required name='message' rows="4" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
                                    </div>
                                    <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded font-medium hover:bg-green-800 transition">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Map --> */}
            {/* <div className="h-96 bg-gray-200">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755238575677!2d-0.2008358250189501!3d5.603480994389373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x6d9f10a55ce4f5e!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1689872115767!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
        </div>
    )
}

export default Contact