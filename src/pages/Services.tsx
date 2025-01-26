import React from 'react';
// inport webdev from '../images/web_dev.png'

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto pt-36 px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-28">Our Services</h2>
      
      <p className="text-lg text-gray-600 mb-8">
        We provide a range of services to help your business grow and succeed. From custom software development to digital marketing solutions, we offer end-to-end solutions for all your business needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom Software Development</h3>
          <p className="text-gray-600 mb-4">
            We specialize in creating tailored software solutions that meet your unique business requirements. Whether it's a web app, mobile app, or desktop solution, we've got you covered.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Development</h3>
          <p className="text-gray-600 mb-4">
            Our expert web development team builds responsive, user-friendly websites that provide a seamless experience for your visitors. We focus on clean code and modern design principles.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
          <p className="text-gray-600 mb-4">
            Enhance your online presence with our digital marketing services. From SEO to social media management and PPC campaigns, we help you connect with your audience and grow your brand.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">UI/UX Design</h3>
          <p className="text-gray-600 mb-4">
            We create beautiful and intuitive designs that provide a great user experience. Our UI/UX design services focus on usability, accessibility, and visual aesthetics to engage your users.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Solutions</h3>
          <p className="text-gray-600 mb-4">
            We offer cloud solutions that help your business scale efficiently. Whether it's cloud storage, hosting, or cloud-based software, we provide secure and scalable cloud services.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Consulting</h3>
          <p className="text-gray-600 mb-4">
            Our consulting services are designed to help businesses optimize their operations. From IT strategy to business process improvement, we provide expert advice tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
