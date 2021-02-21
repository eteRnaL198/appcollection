type Props = {
  data: Data
}

type Data = {
  title: string,
  version: string,
  desc: string,
  img: string,
  link: string,
}

const Card = (props: Props) => {
  return (
    <div className="flex flex-row-reverse">
      <p className="font-bold text-2xl">{props.data.title}</p>
      <img src={props.data.img} alt=""/>
    </div>
  )
}

export default Card;