import { useState, useRef } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MagneticButton from '../components/ui/MagneticButton'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaWhatsapp,
  FaMusic,
} from 'react-icons/fa'

import SamuraiHero from '../assets/images/samurai-hero.png'
import AboutBg from '../assets/images/about-bg.png'
import ShowreelSection from '../components/home/ShowreelSection'
import ThankYouSection from '../components/home/ThankYouSection'
import SamuraiExpertise from '../assets/images/samurai-expertise.png'
import SamuraiBattle from '../assets/images/samurai-battle.png'

import projects from "../data/projects";

import BlenderLogo from '../assets/images/blender.png'
import AeLogo from '../assets/images/after-effects.png'
import PsLogo from '../assets/images/photoshop.png'
import PrLogo from '../assets/images/premiere-pro.png'
import AiLogo from '../assets/images/illustrator.png'
import FigmaLogo from '../assets/images/figma.png'

import SamuraiOrbit from '../assets/images/samurai-orbit.png'

function Home() {
  const sliderRef = useRef(null)

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[700px] md:min-h-[100svh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-red-700/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-purple-700/10 blur-[180px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.02, y: [-6, 6, -6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[12%] md:top-[8%] right-[-55%] sm:right-[-40%] md:right-[-18%] lg:right-[-10%] w-[150vw] sm:w-[120vw] md:w-[82vw] lg:w-[72vw] h-[60vh] sm:h-[70vh] md:h-[100vh] will-change-transform transform-gpu [backface-visibility:hidden] [transform:translateZ(0)]"
            style={{
              backgroundImage: `url(${SamuraiHero})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center right',
              backgroundSize: 'contain',
            }}
          ></motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-red-900/10 mix-blend-screen"></div>
        </motion.div>

        {/* SOCIAL SIDEBAR */}
        <div className="absolute left-4 md:left-6 top-[68%] md:top-[58%] lg:top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6 z-20">
          <a href="https://wa.me/917017288428" target="_blank" rel="noreferrer" className="text-white/60 hover:text-red-500 transition duration-300 text-base md:text-xl">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/shubhdesign3d" target="_blank" rel="noreferrer" className="text-white/40 hover:text-red-500 transition text-base md:text-xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/shubhdesign3d/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-red-500 transition text-base md:text-xl">
            <FaLinkedin />
          </a>
          <a href="https://www.behance.net/shubhasawa1" target="_blank" rel="noreferrer" className="text-white/40 hover:text-red-500 transition text-base md:text-xl">
            <FaBehance />
          </a>
          <a href="https://designtime.ai.studio/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-red-500 transition text-base md:text-xl">
            <FaMusic />
          </a>
        </div>

        {/* MAIN CONTENT */}
        <div className="container relative z-20 min-h-[700px] md:min-h-[100svh] flex items-center px-4 sm:px-6 md:px-8">
          <div className="max-w-full md:max-w-[520px] lg:max-w-[650px] ml-12 md:ml-16 lg:ml-24 pt-28 md:pt-20 lg:pt-24 px-2 md:px-0">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="uppercase tracking-[0.35em] md:tracking-[0.5em] text-red-500 mb-6 md:mb-8 text-[10px] sm:text-xs md:text-sm"
            >
              Motion Designer • 3D Artist • Visual Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="big-title text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[10rem] leading-[0.9] uppercase"
            >
              SHUBH
              <br />
              <span className="gradient-text drop-shadow-[0_0_60px_rgba(255,0,0,0.8)]">
                ASAWA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mt-6 md:mt-8"
            >
              Crafting cinematic motion graphics, 3D visuals, CGI ads, and visual stories that bring ideas to life through motion, design, and creative direction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 mt-8 md:mt-10"
            >
              <Link to="/portfolio">
                <MagneticButton>EXPLORE MY WORK</MagneticButton>
              </Link>

              <Link to="/contact">
                <button className="px-8 py-4 md:px-10 md:py-5 border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl hover:bg-purple-500/20 hover:border-purple-400 transition uppercase tracking-[0.2em] md:tracking-[0.25em] purple-glow text-sm md:text-base">
                  START A PROJECT
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="relative py-24 md:py-40 overflow-hidden border-t border-b border-white/10 bg-black">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <motion.img
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.03, y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            src={SamuraiExpertise}
            alt="Samurai Background"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.25em] md:tracking-[0.5em] text-red-500 text-[10px] md:text-sm mb-4 md:mb-6">
                Creative Expertise
              </p>
              <h2 className="big-title text-[3rem] sm:text-[4rem] md:text-[6rem] xl:text-[7.5rem] leading-[0.92] uppercase mb-6 md:mb-10">
                WHAT
                <br />
                I DO
              </h2>
              <p className="text-white/65 text-base md:text-lg leading-[1.9] md:leading-relaxed max-w-full md:max-w-[520px]">
                A multidisciplinary creative focused on visual design, motion graphics, 3D visuals, CGI advertising, video editing, and visual storytelling. I combine design and motion to create clear, cinematic, and engaging visual experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
              {[
                { title: 'Motion Design', icon: '✦', number: '01', text: "Creating engaging motion graphics, animations, and cinematic visual experiences that bring ideas to life." },
                { title: 'Visual Design', icon: '赤', number: '02', text: "Designing compelling graphics, compositions, and visual identities with a strong focus on clarity, aesthetics, and storytelling." },
                { title: '3D & CGI', icon: '◉', number: '03', text: "Creating detailed 3D visuals, product animations, CGI advertisements, and cinematic environments." },
                { title: 'Video Editing', icon: '刀', number: '04', text: "Crafting dynamic video edits with strong pacing, transitions, sound, and visual storytelling." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10 bg-black/20 backdrop-blur-xl p-5 md:p-8 min-h-[250px] md:min-h-[320px] transition duration-500 shadow-[0_0_40px_rgba(255,0,0,0.08)] hover:border-red-500/30 hover:bg-black/35 hover:shadow-[0_0_60px_rgba(255,0,0,0.18)]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/[0.04] via-transparent to-red-500/[0.04]"></div>

                  <div className="relative z-10 flex items-center justify-between mb-10 md:mb-14">
                    <span className="text-red-500 text-3xl md:text-4xl group-hover:scale-110 transition duration-500">
                      {item.icon}
                    </span>
                    <span className="text-white/15 big-title text-4xl md:text-5xl">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="relative z-10 text-[2rem] md:text-4xl big-title leading-none mb-5 md:mb-8 group-hover:text-red-400 transition duration-500">
                    {item.title}
                  </h3>

                  <p className="relative z-10 text-white/55 text-sm md:text-base leading-[1.8] group-hover:text-white/75 transition duration-500">
                    {item.text}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-700"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENT WORK SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-b border-white/10 bg-black">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <motion.img
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.03, y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            src={SamuraiBattle}
            alt="Samurai Battle"
            className="w-full h-full object-cover opacity-55"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/80"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[900px] md:h-[900px] bg-red-600/10 blur-[160px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="w-full relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.25em] md:tracking-[0.5em] text-red-500 text-[10px] md:text-sm mb-4 md:mb-6">
                Recent Work
              </p>
              <h2 className="big-title text-[3rem] sm:text-[4rem] md:text-[7.5rem] leading-[0.92] uppercase mb-6 md:mb-8">
                SELECTED
                <br />
                VISUALS
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-[1.9] md:leading-relaxed max-w-full md:max-w-[520px]">
                Explore a collection of cinematic motion graphics, 3D visuals, CGI ads, video edits, and visual design projects crafted with creativity, detail, and strong visual storytelling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-wrap items-center gap-6 mt-2 md:mt-12"
            >
              <Link to="/portfolio">
                <MagneticButton>VIEW MY WORK</MagneticButton>
              </Link>
            </motion.div>
          </div>

          {/* PROJECT SLIDER */}
          <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 w-10 md:w-40 h-full z-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-10 md:w-24 h-full z-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

            <div
              ref={sliderRef}
              onMouseEnter={() => {
                if (sliderRef.current) sliderRef.current.style.animationPlayState = 'paused'
              }}
              onMouseLeave={() => {
                if (sliderRef.current) sliderRef.current.style.animationPlayState = 'running'
              }}
              className="flex gap-4 md:gap-8 w-max px-4 md:px-8 animate-marquee"
            >
              {[...projects, ...projects].map((project, index) => (
                <Link key={index} to={`/portfolio/${project.slug}`} className="block">
                  <motion.div
                    whileHover={{ y: -16, scale: 1.02 }}
                    className="group relative overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-black/20 backdrop-blur-xl aspect-[16/9] min-w-[300px] sm:min-w-[420px] md:min-w-[720px] transition duration-500 hover:border-red-500/30 hover:shadow-[0_0_70px_rgba(255,0,0,0.22)]"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/[0.08] via-transparent to-red-500/[0.05]"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500/10 transition duration-500"></div>

                    <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-10 z-10">
                      <p className="uppercase tracking-[0.2em] md:tracking-[0.35em] text-red-500 text-[9px] md:text-xs mb-3 md:mb-4">
                        Featured Work
                      </p>
                      <h3 className="text-[2rem] sm:text-[2.8rem] md:text-5xl big-title leading-none mb-4 md:mb-6 group-hover:text-red-400 transition duration-500">
                        {project.title}
                      </h3>
                      <div className="w-12 md:w-16 h-[2px] bg-red-500 group-hover:w-24 md:group-hover:w-28 transition-all duration-500"></div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <style>{`
              @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marqueeScroll 190s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* CREATIVE STACK SECTION */}
      <section className="relative py-24 md:py-40 overflow-hidden border-t border-white/10 bg-black">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1, y: -20 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <motion.img
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.03, y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            src={SamuraiOrbit}
            alt="Samurai Background"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[900px] md:h-[900px] bg-red-600/10 blur-[180px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.25em] md:tracking-[0.5em] text-red-500 text-[10px] md:text-sm mb-4 md:mb-6">
              Creative Workflow
            </p>
            <h2 className="big-title text-[3rem] sm:text-[4rem] md:text-[7rem] leading-[0.92] uppercase mb-6 md:mb-8">
              TOOLS &
              <br />
              EXPERTISE
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-[1.9] md:leading-relaxed max-w-full md:max-w-[520px]">
              A professional creative workflow combining design, motion, 3D, video editing, and visual storytelling to transform concepts into polished, cinematic visual experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {[
              { name: 'Blender', logo: BlenderLogo },
              { name: 'After Effects', logo: AeLogo },
              { name: 'Photoshop', logo: PsLogo },
              { name: 'Premiere Pro', logo: PrLogo },
              { name: 'Illustrator', logo: AiLogo },
              { name: 'Figma', logo: FigmaLogo },
            ].map((software, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -14, scale: 1.04 }}
                className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10 min-h-[220px] md:min-h-[270px] flex flex-col items-center justify-center text-center transition duration-500 hover:border-red-500/30 hover:bg-red-500/[0.03] hover:shadow-[0_0_80px_rgba(255,0,0,0.22)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/[0.05] via-transparent to-red-500/[0.05]"></div>
                <img
                  src={software.logo}
                  alt={software.name}
                  className="w-20 h-20 md:w-28 md:h-28 object-contain mb-6 md:mb-8 relative z-10 group-hover:scale-110 transition duration-500"
                />
                <h3 className="text-[1.6rem] md:text-2xl big-title leading-none relative z-10 group-hover:text-red-400 transition duration-500">
                  {software.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="relative overflow-hidden py-10 md:py-16 border-t border-b border-white/10 bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900/10 via-transparent to-purple-900/10"></div>
        <div className="absolute left-0 top-0 w-10 md:w-32 h-full z-20 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 w-10 md:w-32 h-full z-20 bg-gradient-to-l from-black to-transparent"></div>

        <div className="whitespace-nowrap flex overflow-hidden relative">
          {[0, 1].map((row) => (
            <motion.div
              key={row}
              animate={{ x: ['0%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="flex shrink-0 items-center gap-10 md:gap-20 pr-10 md:pr-20"
            >
              {[
                'MOTION DESIGN',
                '3D & CGI',
                'VIDEO EDITING',
                'VISUAL DESIGN',
                '3D ANIMATION',
                'CGI ADVERTISING',
                'VISUAL STORYTELLING',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-10 md:gap-20">
                  <h2 className="big-title text-[2rem] sm:text-[3rem] md:text-[6rem] uppercase text-white/10 hover:text-red-500 transition duration-500">
                    {item}
                  </h2>
                  <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]"></div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.03, y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${AboutBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></motion.div>

        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/40"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-red-600/10 blur-[160px] rounded-full"></div>

        <div className="container relative z-10 min-h-[600px] md:min-h-[700px] flex items-center px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-full md:max-w-[650px]"
          >
            <p className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-red-500 text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6">
              About Me
            </p>
            <h2 className="big-title text-[3rem] sm:text-[4rem] md:text-[7rem] leading-[0.9] uppercase mb-6 md:mb-10">
              Multidisciplinary
              <br />
              DESIGNER
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              I'm Shubh Asawa, a Motion Designer, 3D Artist, Visual Designer, and Video Editor focused on creating engaging visual experiences through design, motion, 3D, and storytelling.
            </p>
            <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10 md:mb-12">
              I work across motion graphics, 3D animation, CGI advertising, video editing, and visual design, turning ideas and concepts into polished, cinematic visuals that communicate clearly and capture attention.
            </p>

            <div className="flex flex-wrap gap-6 md:gap-10 mb-10 md:mb-14">
              <div>
                <h3 className="text-[2.8rem] md:text-[4rem] big-title text-red-500 leading-none">
                  30+
                </h3>
                <p className="uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/40 text-[10px] md:text-sm mt-2">
                  Creative Projects
                </p>
              </div>

              <div>
                <h3 className="text-[2.8rem] md:text-[4rem] big-title text-purple-400 leading-none">
                  2+
                </h3>
                <p className="uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/40 text-[10px] md:text-sm mt-2">
                  Years Learning
                </p>
              </div>
            </div>

            <Link to="/about">
              <MagneticButton>MORE ABOUT ME</MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <ShowreelSection />
      <ThankYouSection />

      <Footer />
    </div>
  )
}

export default Home