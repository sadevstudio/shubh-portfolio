// import Navbar from '../components/layout/Navbar'
// import Footer from '../components/layout/Footer'

// function Contact() {

//   return (
//     <div className="min-h-screen bg-black text-white">

//       <Navbar />

//       <section className="pt-40 pb-20">

//         <div className="container max-w-5xl">

//           <p className="
//           uppercase
//           tracking-[0.4em]
//           text-red-500
//           mb-6
//           ">
//             Contact
//           </p>

//           <h1 className="
//           big-title
//           text-[5rem]
//           md:text-[8rem]
//           leading-none
//           mb-20
//           ">
//             LET’S
//             <br />
//             WORK
//             <span className="gradient-text"> TOGETHER</span>
//           </h1>

//           <div className="
//           glass
//           rounded-[30px]
//           p-10
//           ">

//             <form className="space-y-8">

//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="
//                 w-full
//                 bg-transparent
//                 border border-white/10
//                 px-6 py-5
//                 outline-none
//                 focus:border-red-500
//                 transition
//                 "
//               />

//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="
//                 w-full
//                 bg-transparent
//                 border border-white/10
//                 px-6 py-5
//                 outline-none
//                 focus:border-red-500
//                 transition
//                 "
//               />

//               <textarea
//                 rows="6"
//                 placeholder="Your Message"
//                 className="
//                 w-full
//                 bg-transparent
//                 border border-white/10
//                 px-6 py-5
//                 outline-none
//                 focus:border-red-500
//                 transition
//                 "
//               ></textarea>

//               <button
//                 className="
//                 px-10 py-5
//                 bg-red-600
//                 hover:bg-red-700
//                 transition
//                 uppercase
//                 tracking-[0.25em]
//                 red-glow
//                 "
//               >
//                 Send Message
//               </button>

//             </form>

//           </div>

//         </div>

//       </section>

//       <Footer />

//     </div>
//   )
// }

// export default Contact








// import {
//   FaPaperPlane,
//   FaInstagram,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaBehance,
//   FaCheckCircle,
//   FaExclamationCircle,
// } from "react-icons/fa";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// import heroImg from "../assets/contact/contact-hero.png";
// import touchImg from "../assets/contact/contact-touch.png";
// import mapImg from "../assets/contact/contact-map.png";
// import footerImg from "../assets/contact/contact-footer.png";
// import signatureImage from "../assets/contact/signature.png";
// import phoneIcon from "../assets/icons/phone.png";
// import locationIcon from "../assets/icons/location.png";
// import emailIcon from "../assets/icons/email.png";

// // ⚠️ PORT CHANGED TO 8080 — port 5000 is blocked by macOS AirPlay
// const API_URL = "http://localhost:8080";

// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function validate(data) {
//   const errors = {};
//   if (!data.name.trim()) errors.name = "Name is required.";
//   else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
//   if (!data.email.trim()) errors.email = "Email is required.";
//   else if (!EMAIL_REGEX.test(data.email.trim())) errors.email = "Enter a valid email address.";
//   if (!data.subject.trim()) errors.subject = "Subject is required.";
//   if (!data.message.trim()) errors.message = "Message is required.";
//   else if (data.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
//   return errors;
// }

// function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus(null);

//     const validationErrors = validate(formData);
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(`${API_URL}/api/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: formData.name.trim(),
//           email: formData.email.trim(),
//           subject: formData.subject.trim(),
//           message: formData.message.trim(),
//         }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setStatus({ type: "success", text: "Message sent! I'll get back to you soon." });
//         setFormData({ name: "", email: "", subject: "", message: "" });
//         setErrors({});
//       } else {
//         setStatus({ type: "error", text: data.error || "Failed to send. Please try again." });
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus({
//         type: "error",
//         text: "Network error. Make sure the backend server is running on port 8080.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const baseInput = "w-full bg-transparent border px-6 py-5 outline-none transition duration-300 placeholder:text-white/30 text-white text-sm tracking-wide";

//   return (
//     <div className="bg-black text-white overflow-hidden">
//       <Navbar />

//       {/* HERO */}
//       <section className="relative min-h-screen overflow-hidden border-b border-white/10">
//         <motion.img
//           initial={{ scale: 1.1 }} animate={{ scale: 1.05 }}
//           transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
//           src={heroImg} alt="hero"
//           className="absolute inset-0 w-full h-full object-cover object-center"
//         />
//         <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 25%, rgba(0,0,0,0.62) 50%, rgba(0,0,0,0.38) 75%, rgba(0,0,0,0.55) 100%)" }} />
//         <div className="absolute inset-0 mix-blend-screen opacity-40" style={{ background: "radial-gradient(circle at top right, rgba(255,0,0,0.22), transparent 45%)" }} />

//         <div className="relative z-10 min-h-screen flex items-center justify-start px-8 md:px-20 pt-32 md:pt-40 pb-10">
//           <div className="max-w-2xl ml-5 md:ml-12">
//             <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
//               className="uppercase tracking-[0.5em] text-red-500 text-sm mb-5">Get In Touch</motion.p>
//             <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
//               className="text-[4.5rem] md:text-[6rem] leading-[0.88] uppercase font-black mb-10 tracking-tight">
//               <span className="text-white">CONTACT</span>
//               <span className="text-red-600 ml-4">ME</span>
//             </motion.h1>
//             <div className="w-44 h-[2px] bg-red-600 mb-10 relative">
//               <div className="absolute left-1/2 -translate-x-1/2 -top-[5px] w-3 h-3 rotate-45 bg-red-600" />
//             </div>
//             <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
//               className="text-white/75 text-xl leading-[2] mb-8 max-w-2xl">
//               I'm always open to discussing new projects, creative ideas, anime-inspired visuals and cinematic collaborations.
//             </motion.p>
//             <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
//               className="text-white/55 leading-[2] text-lg mb-4 max-w-2xl">
//               Let's create visuals that feel powerful, emotional and unforgettable.
//             </motion.p>
//             <div className="mt-0 flex flex-col items-start">
//               <img src={signatureImage} alt="Shubh Asawa Signature"
//                 className="w-[620px] md:w-[720px] max-w-none object-contain -ml-32 mt-0" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FORM + INFO */}
//       <section className="grid lg:grid-cols-2 border-b border-white/10">

//         {/* FORM */}
//         <div className="p-8 md:p-16 bg-black/90">
//           <h2 className="uppercase text-3xl text-red-500 tracking-[0.2em] mb-14">Send A Message</h2>

//           <form onSubmit={handleSubmit} className="space-y-8" noValidate>

//             <div>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name"
//                 className={`${baseInput} ${errors.name ? "border-red-500" : "border-white/20 focus:border-red-500"}`} />
//               {errors.name && <p className="mt-2 text-red-400 text-xs tracking-wide flex items-center gap-1"><FaExclamationCircle />{errors.name}</p>}
//             </div>

//             <div>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email"
//                 className={`${baseInput} ${errors.email ? "border-red-500" : "border-white/20 focus:border-red-500"}`} />
//               {errors.email && <p className="mt-2 text-red-400 text-xs tracking-wide flex items-center gap-1"><FaExclamationCircle />{errors.email}</p>}
//             </div>

//             <div>
//               <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject"
//                 className={`${baseInput} ${errors.subject ? "border-red-500" : "border-white/20 focus:border-red-500"}`} />
//               {errors.subject && <p className="mt-2 text-red-400 text-xs tracking-wide flex items-center gap-1"><FaExclamationCircle />{errors.subject}</p>}
//             </div>

//             <div>
//               <textarea rows="7" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"
//                 className={`${baseInput} resize-none ${errors.message ? "border-red-500" : "border-white/20 focus:border-red-500"}`} />
//               {errors.message && <p className="mt-2 text-red-400 text-xs tracking-wide flex items-center gap-1"><FaExclamationCircle />{errors.message}</p>}
//             </div>

//             <button type="submit" disabled={loading}
//               className="group flex items-center gap-4 px-10 py-5 border border-red-600 hover:bg-red-600 transition-all duration-500 uppercase tracking-[0.3em] disabled:opacity-50 disabled:cursor-not-allowed">
//               <FaPaperPlane className={loading ? "animate-pulse" : "group-hover:translate-x-1 transition-transform"} />
//               {loading ? "Sending..." : "Send Message"}
//             </button>

//             <AnimatePresence>
//               {status && (
//                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
//                   className={`flex items-center gap-3 text-sm tracking-[0.1em] uppercase font-medium ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
//                   {status.type === "success" ? <FaCheckCircle size={16} /> : <FaExclamationCircle size={16} />}
//                   {status.text}
//                 </motion.div>
//               )}
//             </AnimatePresence>

//           </form>
//         </div>

//         {/* INFO */}
//         <div className="relative overflow-hidden p-8 md:p-16">
//           <img src={touchImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" />
//           <div className="absolute inset-0 bg-black/50" />
//           <div className="relative z-10">
//             <h2 className="uppercase text-3xl text-red-500 tracking-[0.2em] mb-14">Get In Touch</h2>
//             <div className="space-y-10">

//               <a href="https://maps.google.com/?q=New+Delhi+India" target="_blank" rel="noreferrer" className="flex gap-6 group transition-all duration-500">
//                 <div className="w-16 h-16 rounded-full bg-red-600/10 backdrop-blur-md border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.25)] overflow-hidden group-hover:scale-110 transition-all duration-500">
//                   <img src={locationIcon} alt="location" className="w-8 h-8 object-contain" />
//                 </div>
//                 <div>
//                   <h3 className="uppercase tracking-[0.2em] mb-2 group-hover:text-red-500 transition">Location</h3>
//                   <p className="text-white/70">New Delhi, India</p>
//                 </div>
//               </a>

//               <a href="tel:+917017284828" className="flex gap-6 group transition-all duration-500">
//                 <div className="w-16 h-16 rounded-full bg-red-600/10 backdrop-blur-md border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.25)] overflow-hidden group-hover:scale-110 transition-all duration-500">
//                   <img src={phoneIcon} alt="phone" className="w-8 h-8 object-contain" />
//                 </div>
//                 <div>
//                   <h3 className="uppercase tracking-[0.2em] mb-2 group-hover:text-red-500 transition">Phone</h3>
//                   <p className="text-white/70">+91 70172 84828</p>
//                 </div>
//               </a>

//               <a href="mailto:shubhdesigns3d@gmail.com" className="flex gap-6 group transition-all duration-500">
//                 <div className="w-16 h-16 rounded-full bg-red-600/10 backdrop-blur-md border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.25)] overflow-hidden group-hover:scale-110 transition-all duration-500">
//                   <img src={emailIcon} alt="email" className="w-8 h-8 object-contain" />
//                 </div>
//                 <div>
//                   <h3 className="uppercase tracking-[0.2em] mb-2 group-hover:text-red-500 transition">Email</h3>
//                   <p className="text-white/70 break-all">shubhdesigns3d@gmail.com</p>
//                 </div>
//               </a>

//             </div>
//           </div>
//         </div>

//       </section>

//       {/* LOCATION */}
//       <section className="grid lg:grid-cols-2 border-b border-white/10">
//         <div className="relative min-h-[450px] overflow-hidden">
//           <img src={mapImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>
//         <div className="relative min-h-[450px] overflow-hidden p-8 md:p-20 flex items-center">
//           <img src={footerImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
//           <div className="absolute inset-0 bg-black/80" />
//           <div className="relative z-10 max-w-xl">
//             <p className="uppercase text-red-500 tracking-[0.3em] text-3xl mb-8">Based In New Delhi, India</p>
//             <div className="w-24 h-[2px] bg-red-600 mb-8" />
//             <p className="text-white/70 leading-[2] text-lg mb-8">Open to freelance work, creative collaborations and cinematic visual projects worldwide.</p>
//             <p className="text-white/50 leading-[2]">Let's create something that feels powerful, emotional and unforgettable.</p>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER CTA */}
//       <section className="grid lg:grid-cols-2 border-b border-white/10">
//         <div className="relative overflow-hidden p-8 md:p-20">
//           <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" />
//           <div className="absolute inset-0 bg-black/65" />
//           <div className="relative z-10">
//             <h2 className="text-4xl uppercase mb-8 text-red-500 tracking-[0.2em]">Let's Create Something Epic.</h2>
//             <p className="text-white/70 leading-[2] mb-10">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
//             <a href="/resume/shubh-asawa-resume.pdf" download
//               className="inline-flex items-center gap-4 px-10 py-5 border border-red-600 hover:bg-red-600 transition-all duration-500 uppercase tracking-[0.3em]">
//               <FaPaperPlane />Download Resume
//             </a>
//           </div>
//         </div>

//         <div className="relative overflow-hidden p-8 md:p-20">
//           <img src={touchImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" />
//           <div className="absolute inset-0 bg-black/55" />
//           <div className="relative z-10">
//             <h2 className="text-4xl uppercase mb-12 text-red-500 tracking-[0.2em]">Follow Me</h2>
//             <div className="flex flex-wrap gap-10">
//               <a href="https://www.behance.net/shubhasawa1" target="_blank" rel="noreferrer" className="text-5xl text-white/50 hover:text-red-500 transition-all duration-500 hover:scale-125"><FaBehance /></a>
//               <a href="https://www.instagram.com/shubhdesign3d" target="_blank" rel="noreferrer" className="text-5xl text-white/50 hover:text-red-500 transition-all duration-500 hover:scale-125"><FaInstagram /></a>
//               <a href="https://www.linkedin.com/in/shubhdesign3d/" target="_blank" rel="noreferrer" className="text-5xl text-white/50 hover:text-red-500 transition-all duration-500 hover:scale-125"><FaLinkedinIn /></a>
//               <a href="https://wa.me/917017288428" target="_blank" rel="noreferrer" className="text-5xl text-white/50 hover:text-red-500 transition-all duration-500 hover:scale-125"><FaWhatsapp /></a>
//             </div>
//             <p className="mt-20 uppercase tracking-[0.4em] text-white/40 text-sm">Motion Beyond Reality.</p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default Contact;





import {
  FaPaperPlane,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaBehance,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import heroImg from "../assets/contact/contact-hero.png";
import touchImg from "../assets/contact/contact-touch.png";
import mapImg from "../assets/contact/contact-map.png";
import footerImg from "../assets/contact/contact-footer.png";
import signatureImage from "../assets/contact/signature.png";
import phoneIcon from "../assets/icons/phone.png";
import locationIcon from "../assets/icons/location.png";
import emailIcon from "../assets/icons/email.png";

// ⚠️ PORT CHANGED TO 8080 — port 5000 is blocked by macOS AirPlay
const API_URL = "";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_REGEX.test(data.email.trim())) errors.email = "Enter a valid email address.";
  if (!data.subject.trim()) errors.subject = "Subject is required.";
  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: "success", text: "Message sent! I'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus({ type: "error", text: data.error || "Failed to send. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Network error. Make sure the backend server is running on port 8080.",
      });
    } finally {
      setLoading(false);
    }
  };

  const baseInput = "w-full bg-transparent border px-6 py-5 outline-none transition duration-300 placeholder:text-white/30 text-white text-sm tracking-wide";

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />

     {/* HERO */}
<section
  className="
  relative
  min-h-screen
  flex items-center
  overflow-hidden
  "
>

  {/* BACKGROUND IMAGE */}
  <motion.img

    initial={{
      scale: 1.12,
    }}

    animate={{
      scale: 1.03,
      y: [-10, 10, -10],
    }}

    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}

    src={heroImg}
    alt=""

    className="
    absolute inset-0

    w-full
    h-full

    object-cover

    object-[center]

    brightness-[1.05]

    scale-[1.08]
    "
  />

  {/* DARK OVERLAY */}
  <div
    className="
    absolute inset-0
    bg-black/40
    "
  ></div>

  {/* CINEMATIC GRADIENT */}
  <div
    className="
    absolute inset-0

    bg-gradient-to-r

    from-black
    via-black/50
    to-transparent
    "
  ></div>

  {/* RED GLOW */}
  <div
    className="
    absolute

    top-0
    right-[-20%]

    w-[300px]
    h-[300px]

    sm:w-[450px]
    sm:h-[450px]

    md:w-[700px]
    md:h-[700px]

    bg-red-600/20

    blur-[100px]
    md:blur-[160px]

    rounded-full
    "
  ></div>

  {/* CONTENT */}
  <div
    className="
    relative z-10

    w-[92%]
    sm:w-[90%]

    max-w-[1500px]

    mx-auto

    pt-28
    sm:pt-32
    md:pt-36

    pb-16
    "
  >

    <motion.div

      initial={{
        opacity: 0,
        y: 100,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1.2,
      }}

      className="
      max-w-[900px]
      "
    >

      {/* SMALL TITLE */}
      <p
        className="
        uppercase

        tracking-[6px]
        sm:tracking-[10px]
        md:tracking-[14px]

        text-red-600

        mb-5
        md:mb-6

        text-[10px]
        sm:text-xs
        md:text-sm

        font-semibold
        "
      >
        Get In Touch
      </p>

      {/* MAIN TITLE */}
      <h1
        className="
        font-black
        uppercase

        leading-[0.9]

        text-[3rem]
        sm:text-[4.5rem]
        md:text-[6rem]
        lg:text-[8rem]
        "
      >

        LET'S CREATE{" "}

        <span className="text-red-600">
          SOMETHING
        </span>

      </h1>

      {/* DIVIDER */}
      <div
        className="
        w-[70px]
        md:w-[90px]

        h-[2px]

        bg-red-600

        mt-6
        md:mt-8

        mb-6
        md:mb-8
        "
      ></div>

      {/* FIRST TEXT */}
      <p
        className="
        text-white/85

        text-[15px]
        sm:text-[17px]
        md:text-[1.2rem]
        lg:text-[1.3rem]

        leading-[1.9]
        md:leading-[2]

        max-w-[700px]

        font-light
        "
      >

        Whether you have a clear concept or just the beginning of an idea, I'm always open to creative collaborations and new projects.

      </p>

      {/* SECOND TEXT */}
      <p
        className="
        text-white/60

        text-[14px]
        sm:text-base
        md:text-lg

        leading-[1.9]
        md:leading-[2]

        max-w-[650px]

        mt-6
        md:mt-8
        "
      >

       Let's create something with purpose, movement, and character — something people remember.

      </p>

      {/* SIGNATURE */}
      <div
        className="
        mt-2

        flex
        flex-col
        items-start
        "
      >

        <motion.img

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.8,
            duration: 1,
          }}

          src={signatureImage}
          alt="Shubh Asawa Signature"

          className="
          w-[260px]
          sm:w-[380px]
          md:w-[520px]
          lg:w-[720px]

          max-w-full

          object-contain

          ml-[-20px]
          sm:ml-[-40px]
          md:ml-[-80px]
          lg:ml-[-120px]

          mt-2

          opacity-90
          "
        />

      </div>

    </motion.div>

  </div>

  {/* TOP FADE */}
  <div
    className="
    absolute
    top-0
    left-0

    w-full

    h-[120px]
    md:h-[180px]

    bg-gradient-to-b
    from-black
    to-transparent
    "
  ></div>

  {/* BOTTOM FADE */}
  <div
    className="
    absolute
    bottom-0
    left-0

    w-full

    h-[140px]
    md:h-[220px]

    bg-gradient-to-t
    from-black
    to-transparent
    "
  ></div>

</section>

      {/* FORM + INFO */}
<section className="relative grid lg:grid-cols-2 border-b border-white/10 overflow-hidden">

  {/* FORM */}
  <div className="relative overflow-hidden p-8 md:p-16 bg-black/90">

    {/* BACKGROUND ATMOSPHERE */}

    <div
      className="
      absolute
      top-0
      right-0
      w-[400px]
      h-[400px]
      bg-red-600/10
      blur-[140px]
      rounded-full
      "
    />

    {/* CINEMATIC OVERLAY */}

    <div
      className="
      absolute inset-0
      bg-gradient-to-br
      from-red-950/10
      via-transparent
      to-transparent
      "
    />

    {/* CONTENT */}

    <motion.div

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

      viewport={{
        once: true,
      }}

      className="relative z-10"
    >

      {/* TITLE */}

      <motion.h2

        initial={{
          opacity: 0,
          x: -40,
        }}

        whileInView={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          delay: 0.2,
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}

        className="
        uppercase
        text-3xl
        text-red-500
        tracking-[0.2em]
        mb-14
        "
      >

        Send A Message

      </motion.h2>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
        noValidate
      >

        {/* NAME */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.3,
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"

            className={`
              ${baseInput}
              backdrop-blur-md
              bg-white/[0.03]
              transition-all
              duration-500
              hover:border-red-500/60
              focus:shadow-[0_0_30px_rgba(255,0,0,0.15)]

              ${errors.name
                ? "border-red-500"
                : "border-white/20 focus:border-red-500"
              }
            `}
          />

          {errors.name && (

            <p
              className="
              mt-2
              text-red-400
              text-xs
              tracking-wide
              flex
              items-center
              gap-1
              "
            >

              <FaExclamationCircle />

              {errors.name}

            </p>

          )}

        </motion.div>

        {/* EMAIL */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.4,
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}
        >

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"

            className={`
              ${baseInput}
              backdrop-blur-md
              bg-white/[0.03]
              transition-all
              duration-500
              hover:border-red-500/60
              focus:shadow-[0_0_30px_rgba(255,0,0,0.15)]

              ${errors.email
                ? "border-red-500"
                : "border-white/20 focus:border-red-500"
              }
            `}
          />

          {errors.email && (

            <p
              className="
              mt-2
              text-red-400
              text-xs
              tracking-wide
              flex
              items-center
              gap-1
              "
            >

              <FaExclamationCircle />

              {errors.email}

            </p>

          )}

        </motion.div>

        {/* SUBJECT */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.5,
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}
        >

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"

            className={`
              ${baseInput}
              backdrop-blur-md
              bg-white/[0.03]
              transition-all
              duration-500
              hover:border-red-500/60
              focus:shadow-[0_0_30px_rgba(255,0,0,0.15)]

              ${errors.subject
                ? "border-red-500"
                : "border-white/20 focus:border-red-500"
              }
            `}
          />

          {errors.subject && (

            <p
              className="
              mt-2
              text-red-400
              text-xs
              tracking-wide
              flex
              items-center
              gap-1
              "
            >

              <FaExclamationCircle />

              {errors.subject}

            </p>

          )}

        </motion.div>

        {/* MESSAGE */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.6,
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}
        >

          <textarea
            rows="7"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"

            className={`
              ${baseInput}
              resize-none
              backdrop-blur-md
              bg-white/[0.03]
              transition-all
              duration-500
              hover:border-red-500/60
              focus:shadow-[0_0_30px_rgba(255,0,0,0.15)]

              ${errors.message
                ? "border-red-500"
                : "border-white/20 focus:border-red-500"
              }
            `}
          />

          {errors.message && (

            <p
              className="
              mt-2
              text-red-400
              text-xs
              tracking-wide
              flex
              items-center
              gap-1
              "
            >

              <FaExclamationCircle />

              {errors.message}

            </p>

          )}

        </motion.div>

        {/* BUTTON */}

        <motion.button

          type="submit"

          disabled={loading}

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          whileHover={{
            scale: 1.03,
            y: -3,
          }}

          whileTap={{
            scale: 0.97,
          }}

          transition={{
            delay: 0.7,
            duration: 0.35,
          }}

          viewport={{
            once: true,
          }}

          className="
          group
          relative
          overflow-hidden
          flex
          items-center
          gap-4
          px-10
          py-5
          border
          border-red-600
          uppercase
          tracking-[0.3em]
          disabled:opacity-50
          disabled:cursor-not-allowed
          "
        >

          {/* SHINE EFFECT */}

          <div
            className="
            absolute
            top-0
            left-[-120%]
            w-[80%]
            h-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            skew-x-[-25deg]
            group-hover:left-[140%]
            transition-all
            duration-1000
            "
          />

          {/* ICON */}

          <FaPaperPlane
            className={`
              relative z-10
              ${loading
                ? "animate-pulse"
                : "group-hover:translate-x-1 transition-transform"
              }
            `}
          />

          {/* TEXT */}

          <span className="relative z-10">

            {loading
              ? "Sending..."
              : "Send Message"
            }

          </span>

        </motion.button>

        {/* STATUS */}

        <AnimatePresence>

          {status && (

            <motion.div

              initial={{
                opacity: 0,
                y: 10,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
              }}

              className={`
                flex
                items-center
                gap-3
                text-sm
                tracking-[0.1em]
                uppercase
                font-medium

                ${status.type === "success"
                  ? "text-green-400"
                  : "text-red-400"
                }
              `}
            >

              {status.type === "success"
                ? <FaCheckCircle size={16} />
                : <FaExclamationCircle size={16} />
              }

              {status.text}

            </motion.div>

          )}

        </AnimatePresence>

      </form>

    </motion.div>

  </div>


        {/* INFO */}
<section
  className="
  relative
  overflow-hidden
  flex
  "
>
  {/* BACKGROUND IMAGE */}

  <motion.img

    initial={{
      scale: 1.12,
    }}

    animate={{
      scale: 1.03,
      y: [-10, 10, -10],
    }}

    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}

    src={touchImg}
    alt=""

    className="
    absolute inset-0
    w-full h-full
    object-cover
    brightness-[0.95]
    scale-[1.08]
    "
  />

  {/* DARK OVERLAY */}

  <div
    className="
    absolute inset-0
    bg-black/35
    "
  ></div>

  {/* CINEMATIC BLEND */}

  <div
    className="
    absolute inset-0
    bg-gradient-to-r
    from-black
    via-black/40
    to-transparent
    "
  ></div>

  {/* RED GLOW */}

  <div
    className="
    absolute
    top-0
    right-0
    w-[700px]
    h-[700px]
    bg-red-600/15
    blur-[180px]
    rounded-full
    "
  ></div>

  {/* CONTENT */}

  <div
 className="
relative
z-10
w-full
pl-8
md:pl-14
"
>

    <motion.div

      initial={{
        opacity: 0,
        y: 80,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

      viewport={{
        once: true,
      }}

      className="max-w-[750px]"
    >

      {/* TOP TEXT */}

      <p
        className="
        uppercase
        tracking-lg
        text-red-500
        mb-8
        text-sm
        "
      >

        Get In Touch

      </p>

      {/* TITLE */}

      <h2
  className="
  text-[3rem]
  md:text-[5rem]
  leading-[0.95]
  font-black
  uppercase
  "
>

        LET'S
        <br />

        CONNECT

      </h2>

      {/* LINE */}

      <div
        className="
        w-[120px]
        h-[2px]
        bg-red-500
        mt-10
        mb-14
        "
      ></div>

      {/* ITEMS */}

      <div className="space-y-10">

        {/* LOCATION */}

        <motion.a

          initial={{
            opacity: 0,
            x: -50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            delay: 0.2,
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          href="https://maps.google.com/?q=New+Delhi+India"

          target="_blank"

          rel="noreferrer"

          className="
          group
          flex
          items-center
          gap-8
          "
        >

          {/* ICON */}

          <div
            className="
            relative
            w-20
            h-20
            rounded-full
            bg-red-600/10
            border
            border-red-500/20
            backdrop-blur-md
            flex
            items-center
            justify-center
            overflow-hidden
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-red-500
            "
          >

            <div
              className="
              absolute
              inset-0
              bg-red-500/10
              blur-2xl
              "
            />

            <img
              src={locationIcon}
              alt="location"
              className="
              relative
              z-10
              w-9
              h-9
              object-contain
              "
            />

          </div>

          {/* TEXT */}

          <div>

            <h3
              className="
              uppercase
              tracking-[0.25em]
              text-lg
              mb-2
              transition
              duration-500
              group-hover:text-red-500
              "
            >

              Location

            </h3>

            <p className="text-white/65 text-lg">
              New Delhi, India
            </p>

          </div>

        </motion.a>

        {/* PHONE */}

        <motion.a

          initial={{
            opacity: 0,
            x: -50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            delay: 0.4,
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          href="tel:+917017288428"

          className="
          group
          flex
          items-center
          gap-8
          "
        >

          <div
            className="
            relative
            w-20
            h-20
            rounded-full
            bg-red-600/10
            border
            border-red-500/20
            backdrop-blur-md
            flex
            items-center
            justify-center
            overflow-hidden
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-red-500
            "
          >

            <div
              className="
              absolute
              inset-0
              bg-red-500/10
              blur-2xl
              "
            />

            <img
              src={phoneIcon}
              alt="phone"
              className="
              relative
              z-10
              w-9
              h-9
              object-contain
              "
            />

          </div>

          <div>

            <h3
              className="
              uppercase
              tracking-[0.25em]
              text-lg
              mb-2
              transition
              duration-500
              group-hover:text-red-500
              "
            >

              Phone

            </h3>

            <p className="text-white/65 text-lg">
              +91 70172 88428
            </p>

          </div>

        </motion.a>

        {/* EMAIL */}

        <motion.a

          initial={{
            opacity: 0,
            x: -50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            delay: 0.6,
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          href="mailto:shubhdesigns3d@gmail.com"

          className="
          group
          flex
          items-center
          gap-8
          "
        >

          <div
            className="
            relative
            w-20
            h-20
            rounded-full
            bg-red-600/10
            border
            border-red-500/20
            backdrop-blur-md
            flex
            items-center
            justify-center
            overflow-hidden
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-red-500
            "
          >

            <div
              className="
              absolute
              inset-0
              bg-red-500/10
              blur-2xl
              "
            />

            <img
              src={emailIcon}
              alt="email"
              className="
              relative
              z-10
              w-9
              h-9
              object-contain
              "
            />

          </div>

          <div>

            <h3
              className="
              uppercase
              tracking-[0.25em]
              text-lg
              mb-2
              transition
              duration-500
              group-hover:text-red-500
              "
            >

              Email

            </h3>

            <p className="text-white/65 text-lg break-all">
              shubhdesigns3d@gmail.com
            </p>

          </div>

        </motion.a>

      </div>

    </motion.div>

  </div>

  {/* TOP FADE */}

  <div
    className="
    absolute
    top-0
    left-0
    w-full
    h-[180px]
    bg-gradient-to-b
    from-black
    to-transparent
    "
  ></div>

  {/* BOTTOM FADE */}

  <div
    className="
    absolute
    bottom-0
    left-0
    w-full
    h-[220px]
    bg-gradient-to-t
    from-black
    to-transparent
    "
  ></div>

</section>

      </section>

      {/* LOCATION */}
<section className="grid lg:grid-cols-2 border-b border-white/10">

  {/* LEFT IMAGE */}

  <div className="relative min-h-[450px] overflow-hidden">

    <motion.img

      initial={{
        scale: 1.12,
      }}

      animate={{
        scale: 1.03,
        y: [-10, 10, -10],
      }}

      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      src={mapImg}
      alt=""

      className="
      absolute inset-0
      w-full h-full
      object-cover
      scale-110
      brightness-[0.95]
      "
    />

    {/* OVERLAY */}

    <div
      className="
      absolute inset-0
      bg-black/40
      "
    />

    {/* RED GLOW */}

    <div
      className="
      absolute
      top-0
      left-0
      w-[350px]
      h-[350px]
      bg-red-600/10
      blur-[120px]
      rounded-full
      "
    />

  </div>

  {/* RIGHT CONTENT */}

  <div
    className="
    relative
    min-h-[450px]
    overflow-hidden
    p-8
    md:p-20
    flex
    items-center
    "
  >

    {/* BACKGROUND */}

    <motion.img

      initial={{
        scale: 1.12,
      }}

      animate={{
        scale: 1.03,
        y: [-10, 10, -10],
      }}

      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      src={footerImg}
      alt=""

      className="
      absolute inset-0
      w-full h-full
      object-cover
      opacity-50
      scale-110
      "
    />

    {/* DARK OVERLAY */}

    <div
      className="
      absolute inset-0
      bg-black/80
      "
    />

    {/* CINEMATIC BLEND */}

    <div
      className="
      absolute inset-0
      bg-gradient-to-r
      from-black
      via-black/70
      to-transparent
      "
    />

    {/* RED ATMOSPHERE */}

    <div
      className="
      absolute
      top-0
      right-0
      w-[400px]
      h-[400px]
      bg-red-600/10
      blur-[140px]
      rounded-full
      "
    />

    {/* CONTENT */}

    <motion.div

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

      viewport={{
        once: true,
      }}

      className="relative z-10 max-w-xl"
    >

      {/* TITLE */}

      <motion.p

        initial={{
          opacity: 0,
          x: -40,
        }}

        whileInView={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          delay: 0.2,
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}

        className="
        uppercase
        text-red-500
        tracking-[0.3em]
        text-3xl
        mb-8
        "
      >

        Based In New Delhi, India

      </motion.p>

      {/* DIVIDER */}

      <motion.div

        initial={{
          width: 0,
        }}

        whileInView={{
          width: "96px",
        }}

        transition={{
          delay: 0.4,
          duration: 1,
        }}

        viewport={{
          once: true,
        }}

        className="
        h-[2px]
        bg-red-600
        mb-8
        "
      />

      {/* TEXT */}

      <motion.p

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.5,
          duration: 1,
        }}

        viewport={{
          once: true,
        }}

        className="
        text-white/70
        leading-[2]
        text-lg
        mb-8
        "
      >

        Open to freelance projects, creative collaborations, and remote opportunities worldwide across motion design, 3D, visual design, CGI, and video editing.

      </motion.p>

      {/* SECOND TEXT */}

      <motion.p

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.7,
          duration: 1,
        }}

        viewport={{
          once: true,
        }}

        className="
        text-white/50
        leading-[2]
        "
      >

        Let's create something meaningful, memorable, and made to move.
      </motion.p>

    </motion.div>

  </div>

</section>

      {/* FOOTER CTA */}
<section className="relative grid lg:grid-cols-2 border-b border-white/10 overflow-hidden">

  {/* LEFT SIDE */}

  <div className="relative overflow-hidden p-8 md:p-20">

    {/* BACKGROUND IMAGE */}

    <motion.img

      initial={{
        scale: 1.12,
      }}

      animate={{
        scale: 1.03,
        y: [-10, 10, -10],
      }}

      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      src={heroImg}
      alt=""

      className="
      absolute inset-0
      w-full h-full
      object-cover
      opacity-90
      scale-110
      "
    />

    {/* DARK OVERLAY */}

    <div
      className="
      absolute inset-0
      bg-black/65
      "
    />

    {/* CINEMATIC BLEND */}

    <div
      className="
      absolute inset-0
      bg-gradient-to-r
      from-black
      via-black/40
      to-transparent
      "
    />

    {/* RED GLOW */}

    <div
      className="
      absolute
      top-0
      right-0
      w-[400px]
      h-[400px]
      bg-red-600/10
      blur-[140px]
      rounded-full
      "
    />

    {/* CONTENT */}

    <motion.div

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

      viewport={{
        once: true,
      }}

      className="relative z-10"
    >

      {/* TITLE */}

      <motion.h2

        initial={{
          opacity: 0,
          x: -40,
        }}

        whileInView={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          delay: 0.2,
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}

        className="
        text-4xl
        uppercase
        mb-8
        text-red-500
        tracking-[0.2em]
        "
      >

        LET'S CREATE SOMETHING MEANINGFUL
      </motion.h2>

      {/* TEXT */}

      <motion.p

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.4,
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}

        className="
        text-white/70
        leading-[2]
        mb-10
        "
      >

        Have a project in mind, an idea to explore, or simply want to connect? I'd love to hear from you.
      </motion.p>

      {/* BUTTON */}

      <motion.a

        href="/resume/shubh-asawa-resume.pdf"

        download

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        whileHover={{
          scale: 1.03,
          y: -3,
        }}

        whileTap={{
          scale: 0.97,
        }}

        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}

        viewport={{
          once: true,
        }}

        className="
        group
        relative
        overflow-hidden
        inline-flex
        items-center
        gap-4
        px-10
        py-5
        border
        border-red-600
        uppercase
        tracking-[0.3em]
        "
      >

        {/* SHINE */}

        <div
          className="
          absolute
          top-0
          left-[-120%]
          w-[80%]
          h-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          skew-x-[-25deg]
          group-hover:left-[140%]
          transition-all
          duration-1000
          "
        />

        <FaPaperPlane className="relative z-10" />

        <span className="relative z-10">
          Download Resume
        </span>

      </motion.a>

    </motion.div>

  </div>

  {/* RIGHT SIDE */}

  <div className="relative overflow-hidden p-8 md:p-20">

    {/* BACKGROUND */}

    <motion.img

      initial={{
        scale: 1.12,
      }}

      animate={{
        scale: 1.03,
        y: [-10, 10, -10],
      }}

      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      src={touchImg}
      alt=""

      className="
      absolute inset-0
      w-full h-full
      object-cover
      opacity-90
      scale-110
      "
    />

    {/* DARK OVERLAY */}

    <div
      className="
      absolute inset-0
      bg-black/55
      "
    />

    {/* CINEMATIC BLEND */}

    <div
      className="
      absolute inset-0
      bg-gradient-to-l
      from-black
      via-black/30
      to-transparent
      "
    />

    {/* RED GLOW */}

    <div
      className="
      absolute
      top-0
      left-0
      w-[400px]
      h-[400px]
      bg-red-600/10
      blur-[140px]
      rounded-full
      "
    />

    {/* CONTENT */}

    <motion.div

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

      viewport={{
        once: true,
      }}

      className="relative z-10"
    >

      {/* TITLE */}

      <motion.h2

        initial={{
          opacity: 0,
          x: 40,
        }}

        whileInView={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          delay: 0.2,
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}

        className="
        text-4xl
        uppercase
        mb-12
        text-red-500
        tracking-[0.2em]
        "
      >

        Follow Me

      </motion.h2>

      {/* ICONS */}

      <div className="flex flex-wrap gap-10">

        {[
          {
            icon: <FaBehance />,
            link: "https://www.behance.net/shubhasawa1",
          },

          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/shubhdesign3d",
          },

          {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/shubhdesign3d/",
          },

          {
            icon: <FaWhatsapp />,
            link: "https://wa.me/917017288428",
          },

        ].map((item, index) => (

          <motion.a

            key={index}

            href={item.link}

            target="_blank"

            rel="noreferrer"

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            whileHover={{
              scale: 1.2,
              y: -8,
            }}

            transition={{
              delay: index * 0.12,
              duration: 0.5,
            }}

            viewport={{
              once: true,
            }}

            className="
            text-5xl
            text-white/50
            hover:text-red-500
            transition-all
            duration-500
            "
          >

            {item.icon}

          </motion.a>

        ))}

      </div>

      {/* BOTTOM TEXT */}

      <motion.p

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.6,
          duration: 1,
        }}

        viewport={{
          once: true,
        }}

        className="
        mt-20
        uppercase
        tracking-[0.4em]
        text-white/40
        text-sm
        "
      >

        Motion Beyond Reality.

      </motion.p>

    </motion.div>

  </div>

  {/* BOTTOM BLACK SHADOW */}

  <div
    className="
    absolute
    bottom-0
    left-0
    w-full
    h-[180px]
    bg-gradient-to-t
    from-black
    to-transparent
    pointer-events-none
    "
  />

</section>

      <Footer />
    </div>
  );
}

export default Contact;