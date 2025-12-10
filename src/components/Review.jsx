import { motion } from 'framer-motion';
import { testimonials, navLinks } from '../data';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[calc(100%/5)] md:w-[calc(100%/4)] px-2 md:px-4 ">
      {/*cards*/}
      <div className="bg-gradient-to-tr from-transparent via-[#31163F] to-transparent p-5 md:p-6 rounded-lg shadow-lg border border-gray-700  min-h-[200px] flex flex-col justify-between">
        <div className="flex items-center mb-4">
          <div>
            <h4 className="text-xl font-semibold text-white">
              {testimonial.name}
            </h4>
          </div>
        </div>
        {/* Rating Stars */}
        <div className="flex text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'
              }
            />
          ))}
        </div>
        {/* Quote */}
        <p className="text-gray-300 italic mb-4 flex-grow">
          "{testimonial.quote}"
        </p>
      </div>
    </div>
  );
};
const Review = () => {
  const testimonialsLinkExists = navLinks.some(
    (link) => link.href === '#testimonials'
  );
  if (!testimonialsLinkExists) {
    console.warn(
      "Please add { name: 'Testimonials', href: '#testimonials' } to your navLinks in data.js for the Navbar."
    );
  }

  return (
    <section
      id="testimonials"
      className=" pt-8 md:pt-16 bg-[#190525] text-white overflow-hidden"
    >
      <div className="mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 md:mb-6 text-white">
          Client <span className="text-purple-400">Feedback</span>
        </h2>
        <p className="text-lg md:text-2xl text-center text-gray-400 max-w-2xl mx-auto mb-8  md:mb-16">
          Hear what my amazing clients have to say about working with me.
        </p>
      </div>

      {/* Testimonials Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative  "
      >
        <div className="flex overflow-hidden container w-full max-w-7xl px-[20px] md:px-[40px] mx-auto [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="animate-marquee hover:pause-animation">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Review;
