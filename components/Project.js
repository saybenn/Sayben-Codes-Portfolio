import React from 'react'
import Image from 'next/image'
import { BiLinkExternal } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

const Project = ({ major }) => {
  return (
    <div
      className={`project relative mx-auto mb-48  h-[350px] w-full items-center justify-between md:h-[375px]  ${
        major.id == 2 && 'flex-row-reverse'
      }`}
    >
      <div className={'project-image relative w-full xs:h-0 sm:h-full '}>
        <Image
          layout="fill"
          src={major.image}
          className={
            major.id !== 2
              ? 'absolute left-0 top-0 h-full w-full rounded-sm hover:z-10 md:w-3/4 '
              : 'absolute right-0 top-0 h-full w-full rounded-sm hover:z-10 md:w-3/4 '
          }
        />
      </div>
      <div
        className={
          major.id % 2 !== 0
            ? 'project-text bg-royal-2 absolute right-0 top-0 flex flex-col justify-center rounded-sm p-4 text-right text-white md:w-7/12'
            : 'project-text bg-royal-2 absolute top-0 left-0 flex flex-col justify-center rounded-sm p-4 text-left text-white  md:w-7/12'
        }
      >
        <p className="font text-3xl">{major.title}</p>
        <p className="text-md font-thin">{major.role}</p>
        <p className="my-2">{major.description}</p>
        <p className="font mb-2 text-sm">{major.stack.join(', ')}</p>
        <div
          className={`flex gap-x-2 ${major.id % 2 !== 0 && 'flex-row-reverse'}`}
        >
          <a target="_blank" href={major.link}>
            <BiLinkExternal
              className="cursor-pointer text-gray-200 hover:text-white"
              size={'1.6em'}
            />
          </a>
          <a target="_blank" href={major.repo}>
            <AiFillGithub
              className="cursor-pointer text-gray-200 hover:text-white"
              size={'1.6em'}
            />
          </a>
        </div>
      </div>{' '}
    </div>
  )
}

export default Project
