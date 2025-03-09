"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    email_subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    emailjs
      .sendForm(
        "service_26ylv57",
        "template_llc1nth",
        form.current,
        "UbhxEDqoO6dxuMe2M"
      )
      .then(
        () => {
          toast.success("Thank you for reaching out. I'll get back to you as soon as possible.");

          setFormData({
            user_name: "",
            user_email: "",
            email_subject: "",
            message: "",
          });
          form.current.reset();
          setIsSubmitted(true)
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Your email was not sent. ");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-500/50 rounded-lg p-4 text-center"
        >
          <h4 className="text-xl font-semibold text-cyan-400 mb-2">
            Message Sent!
          </h4>
          <p className="text-gray-300">
            Thank you for reaching out. I'll get back to you as soon as
            possible.
          </p>
        </motion.div>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <Input
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <Input
              type="text"
              name="email_subject"
              placeholder="Subject"
              value={formData.email_subject}
              onChange={handleChange}
              required
              className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-400 min-h-[150px]"
            />
          </div>

          <Button
            type="submit"
            onClick={sendEmail}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full cursor-pointer"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Sending...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </div>
            )}
          </Button>
        </form>
      )}
     
    </div>
  );
}
