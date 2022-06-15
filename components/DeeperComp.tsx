import { IconContext, IconType } from 'react-icons'
import { AiFillAccountBook } from 'react-icons/ai'

interface Props {
  title: string
  list: Array<String>
  icon: IconType
}
const DeeperComp = ({ title, list, icon }: Props) => {
  console.log(icon)
  return (
    <div className="flex w-1/2 flex-col">
      <div className="top">
        <p className="font text-xl">{title}</p>
        <div className="h-0.5 border border-black"></div>
      </div>
      <div className="bot flex">
        <IconContext.Provider
          value={{
            color: 'black',
          }}
        >
          <div>
            <AiFillAccountBook />
          </div>
        </IconContext.Provider>
        <ul>
          {list.map((listItem) => (
            <li>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DeeperComp
