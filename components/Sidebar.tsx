import Head from 'next/head'
import Link from 'next/link'
import {
  AiFillGithub,
  AiOutlineCamera,
  AiOutlineLinkedin,
  AiOutlineFilePdf,
} from 'react-icons/ai'
import { GrDocumentPdf } from 'react-icons/gr'

const Sidebar = () => {
  return (
    <div className="sidebar bg-royal z-30 hidden flex-col items-center justify-start border border-black xl:fixed xl:left-0 xl:flex xl:min-h-screen">
      <Head>
        <link rel="preconnect" href="https://use.typekit.net/zug7ovq.css" />
      </Head>
      <div className="w-full">
        <Link href="#home">
          <img
            className="mx-auto mb-3 h-32"
            src="/images/sayben codes logo.svg"
            alt="sayben codes logo"
          />
        </Link>
      </div>
      <div className="font menu-mid  flex-2 my-5 flex w-full flex-col items-center justify-around text-xl ">
        <Link href="#about">
          <div className="underline-hover -rotate-90 py-6 text-center">
            About
          </div>
        </Link>
        <Link href="#work">
          <div className="underline-hover -rotate-90 py-6 text-center">
            {' '}
            Work{' '}
          </div>
        </Link>
        <Link href="#services">
          <div className="   underline-hover  -rotate-90 py-6 text-center">
            Services{' '}
          </div>
        </Link>
        <Link href="#contact">
          <div className="  underline-hover -rotate-90 py-6 text-center">
            Contact{' '}
          </div>
        </Link>
      </div>
      <div className="menu-bot flex h-full w-full flex-1 flex-col items-center justify-evenly px-2">
        <div className="flex w-full justify-around">
          {' '}
          <a target="_blank" href="https://github.com/saybenn">
            <AiFillGithub
              className="icon gray-text cursor-pointer"
              size={'2em'}
            />
          </a>
          <a target="_blank" href="/files/Web Dev Resume 2022.pdf">
            <AiOutlineFilePdf
              className="icon gray-text cursor-pointer"
              size={'2em'}
            />
          </a>
        </div>
        <div className="flex w-full justify-around">
          <a target="_blank" href="https://www.instagram.com/saybenshoots/">
            <AiOutlineCamera
              className="icon gray-text cursor-pointer"
              size={'2.1em'}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sabin-chambers-31b50a232/"
          >
            <AiOutlineLinkedin
              className="icon gray-text cursor-pointer"
              size={'2em'}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
