"use client"
import React from "react"
import heroImg from '../../assets/hero-img.jpeg'
import lighttwitterIcon from '../../assets/twitter-light.svg'
import lightgithubIcon from '../../assets/github-light.svg'
import lightlinkedinIcon from '../../assets/linkedin-light.svg'
import darktwitterIcon from '../../assets/twitter-dark.svg'
import darkgithubIcon from '../../assets/github-dark.svg'
import darklinkedinIcon from '../../assets/linkedin-dark.svg'
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Hero() {
    const { theme, setTheme } = useTheme()

    return (
        <section id="hero" className="flex flex-col md:flex-row items-center justify-center md:gap-20 bg-gray-100 dark:bg-gray-900 p-6 md:p-12">
            <div className="w-56 h-56 md:w-80 md:h-80 md:min-w-56 mb-6 md:mb-0">
                <Image className="rounded-full object-cover shadow-lg" src={heroImg} alt="Mohammad Mirzaei Profile Picture" />
             </div>
            <div className="text-center md:text-left space-y-4 md:space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Mohammad <br /> Mirzaei
                </h1>
                <h2 className="text-2xl md:text-3xl text-sky-600 dark:text-cyan-400">
                    Software Developer Intern
                </h2>
                <div className="flex justify-center md:justify-start space-x-6 mt-4">
                    <a href="{data.twitterlink}" target="_blank">
                        <Image className="w-6 h-6 md:w-8 md:h-8" src={darktwitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="{data.githublink}" target="_blank">
                        <Image className="w-6 h-6 md:w-8 md:h-8" src={darkgithubIcon} alt="Github icon" />
                    </a>
                    <a href="{data.linkedinlink}" target="_blank">
                        <Image className="w-6 h-6 md:w-8 md:h-8" src={darklinkedinIcon} alt="LinkedIn icon" />
                    </a>
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    I'm a passionate Computer Science Student at University of California, Irvine.
                </p>
                <a href="resume-link" download>
                    <button className="mt-4 md:mt-6 px-6 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-blue-800 dark:bg-cyan-600 dark:hover:bg-blue-600">
                    Download Resume
                    </button>
                </a>
            </div>
        </section>
    )
}
