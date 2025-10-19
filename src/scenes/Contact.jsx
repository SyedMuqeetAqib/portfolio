import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import GlassCard from "../components/GlassCard";
import GlassButton from "../components/GlassButton";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from
            you. Send me a message and let's discuss how we can work together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <GlassCard className="max-w-2xl mx-auto">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <input
                  className="w-full glass-input rounded-lg p-4 text-white placeholder-gray-400 font-medium"
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="text-red-400 mt-2 text-sm">
                    {errors.name.type === "required" && "Name is required."}
                    {errors.name.type === "maxLength" && "Name is too long."}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  className="w-full glass-input rounded-lg p-4 text-white placeholder-gray-400 font-medium"
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 mt-2 text-sm">
                    {errors.email.type === "required" && "Email is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  className="w-full glass-input rounded-lg p-4 text-white placeholder-gray-400 font-medium resize-none"
                  placeholder="Your Message"
                  rows="6"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="text-red-400 mt-2 text-sm">
                    {errors.message.type === "required" &&
                      "Message is required."}
                    {errors.message.type === "maxLength" &&
                      "Message is too long."}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <GlassButton
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Send Message
                </GlassButton>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
