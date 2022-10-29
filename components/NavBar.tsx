import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav
      id="nav-bar"
      className="nav-bar bg-royal flex w-full items-center justify-around px-3 xl:hidden"
    >
      <Head>
        <link rel="preconnect" href="https://use.typekit.net/zug7ovq.css" />
      </Head>
      <a href="#home">
        <Image
          width={60}
          height={92}
          src="/images/logo.png"
          alt="sayben codes logo"
        />
      </a>
      <a href="#about">
        <div className="font underline-hover-2 text-xl">About</div>
      </a>
      <a href="#work">
        <div className="font underline-hover-2 text-xl">Work</div>
      </a>
      <a href="#services">
        <div className="font underline-hover-2 text-xl">Services</div>
      </a>
      <a href="#contact">
        <div className="font underline-hover-2 text-xl">Contact</div>
      </a>
    </nav>
  )
}

export default NavBar
