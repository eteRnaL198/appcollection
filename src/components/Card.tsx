type Props = {
  data: Data;
  handleClick: (idx: number) => void;
  idx: number;
}

type Data = {
  title: string,
  version: string,
  desc: string,
  img: string,
  url: string,
  click: number,
}

const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex items-center mb-8">
      <a onClick={() => props.handleClick(props.idx)} href={props.data.url} className=" bg-white flex flex-col justify-between -ml-32 px-6 py-4 rounded-3xl shadow-xl w-4/5">
        <p className="font-bold mb-1 text-2xl tracking-wide">{props.data.title}</p>
        <div className="mb-2 text-lg">
          <p>ver {props.data.version}</p>
          <p>{props.data.desc}</p>
        </div>
        <p className="bg-indigo-300 font-bold mx-auto rounded-full tracking-widest text-center text-white w-2/3">Play</p>
      </a>
      <img src={props.data.img} alt="" className="order-first rounded-3xl shadow-xl w-3/4"/>
    </div>
  )
}

export default Card;