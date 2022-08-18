import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import {
  AiFillGithub,
  AiOutlineCamera,
  AiOutlineLinkedin,
  AiOutlineFilePdf,
} from 'react-icons/ai'
import { GrDocumentPdf } from 'react-icons/gr'

const NavBar = () => {
  return (
    <nav
      id="footer"
      className="footer flex w-full items-center justify-around border-l-gray-500 px-3 xl:hidden"
    >
      <Head>
        <link rel="preconnect" href="https://use.typekit.net/zug7ovq.css" />
      </Head>
      <div className="menu-bot w-full flex-col items-center justify-center py-8">
        <div className="mb-5 flex w-full justify-around">
          <a target="_blank" href="https://github.com/saybenn">
            <AiFillGithub
              className="icon-footer gray-text cursor-pointer"
              size={'1.8em'}
            />
          </a>
          <a target="_blank" href="/files/2022 Resume.pdf">
            <AiOutlineFilePdf
              className="icon-footer gray-text cursor-pointer"
              size={'1.8em'}
            />
            <p className="font-thick text-center text-xs ">resume</p>
          </a>
          <a target="_blank" href="https://www.instagram.com/saybenshoots/">
            <AiOutlineCamera
              className="icon-footer gray-text cursor-pointer"
              size={'1.9em'}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sabin-chambers-31b50a232/"
          >
            <AiOutlineLinkedin
              className="icon-footer gray-text cursor-pointer"
              size={'1.8em'}
            />
          </a>
        </div>
        <p className="font text-center text-sm italic">
          Designed and developed by Sayben Codes
        </p>
      </div>
    </nav>
  )
}

export default NavBar
