import React from 'react';

const Admission = () => {
    return (
        <div>
            {/* Admission Section */}
            <section id="admission" className="py-16 bg-green-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row">
                        {/* Admission Process */}
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
                            <p className="text-green-100 mb-6">
                                We welcome applications for all classes from Nursery to JHS. Our admission process is designed to ensure each student is placed in the appropriate learning environment.
                            </p>

                            <div className="space-y-4">
                                {/* Step 1 */}
                                <div className="flex items-start">
                                    <div className="bg-white text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">1</div>
                                    <div>
                                        <h4 className="font-semibold">Application</h4>
                                        <p className="text-green-100 text-sm">Submit completed application form with required documents.</p>
                                    </div>
                                </div>
                                {/* Step 2 */}
                                <div className="flex items-start">
                                    <div className="bg-white text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">2</div>
                                    <div>
                                        <h4 className="font-semibold">Assessment</h4>
                                        <p className="text-green-100 text-sm">Student assessment to determine appropriate class placement.</p>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="flex items-start">
                                    <div className="bg-white text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">3</div>
                                    <div>
                                        <h4 className="font-semibold">Interview</h4>
                                        <p className="text-green-100 text-sm">Meeting with parents/guardians and student.</p>
                                    </div>
                                </div>
                                {/* Step 4 */}
                                <div className="flex items-start">
                                    <div className="bg-white text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">4</div>
                                    <div>
                                        <h4 className="font-semibold">Admission</h4>
                                        <p className="text-green-100 text-sm">Payment of fees and completion of enrollment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Request Information Form */}
                        <div className="md:w-1/2 w-full bg-white text-gray-800 rounded-lg shadow-xl p-8">
                            <h3 className="text-2xl font-semibold mb-4 text-green-800">Request Information</h3>
                            <form action="https://formspree.io/f/xldjpeog" method="POST" className="space-y-4">
                                {/* Parent's Name */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="name">Parent's Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name='parentName'
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>
                                {/* Email */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name='email'
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>
                                {/* Phone */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        name='phone'
                                        id="phone"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>
                                {/* Student's Name & Age */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="student">Student's Name & Age</label>
                                    <input
                                        type="text"
                                        id="student"
                                        name='studentName&Age'
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                                    />
                                </div>
                                {/* Class of Interest */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="interest">Class of Interest</label>
                                    <select
                                        id="interest"
                                        name='classOfInterest'
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                                    >
                                        <option>Nursery</option>
                                        <option>Kindergarten</option>
                                        <option>Primary 1-3</option>
                                        <option>Primary 4-6</option>
                                        <option>JHS</option>
                                    </select>
                                </div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-green-700 text-white py-3 rounded font-medium hover:bg-green-800 transition"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admission;