// import { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Animation trigger
//     setIsVisible(true);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);
//     setFormData({ name: '', email: '', message: '' });
    
//     // Reset submission status after 3 seconds
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   return (
//     <div className="bg-gray-50 top-10 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <Helmet>
//         <title>Contact Kodedristi Software | Get in Touch</title>
//         <meta name="description" content="Reach out to Kodedristi Software for inquiries, support, or collaboration opportunities. We're here to help with your software needs." />
//         <meta name="keywords" content="Kodedristi Software, contact, software development, support, inquiry" />
//       </Helmet>

//       <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">Contact Kodedristi Software</h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Contact Information */}
//           <div className="space-y-6">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 CALL US
//               </h2>
//               <p className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
//                 <a href="tel:+1234567891" className="block py-1">+1 (234) 567-891</a>
//               </p>
//               <p className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
//                 <a href="tel:+1234987654" className="block py-1">+1 (234) 987-654</a>
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 LOCATION
//               </h2>
//               <address className="text-gray-600 not-italic">
//                 121 Rock Street, 21 Avenue<br />
//                 New York, NY 92103-9000
//               </address>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 BUSINESS HOURS
//               </h2>
//               <p className="text-gray-600 py-1">Mon - Fri: 10 am - 8 pm</p>
//               <p className="text-gray-600 py-1">Sat, Sun: Closed</p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">SEND US A MESSAGE</h2>
            
//             {isSubmitted && (
//               <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 animate-bounce">
//                 Thank you for contacting Kodedristi Software! We'll get back to you soon.
//               </div>
//             )}
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your Name"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter a valid email address"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Your message here..."
//                   rows="4"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
//                 ></textarea>
//               </div>
              
//               <div className="pt-2">
//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 transform hover:scale-105"
//                 >
//                   SUBMIT MESSAGE
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;