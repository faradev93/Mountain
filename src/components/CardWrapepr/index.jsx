export default function Cardwrapper(begir) {
  return (
    <div className="bg-white rounded-xl w-[304px] h-[290px] flex flex-col items-center justify-center">
      <div className="bg-slate-200 w-64 h-[173px] rounded-xl flex justify-center ">
        <img src={begir.data.image} width={173} height={173} alt="#" />
      </div>
      <p className="m-3">{begir.data.name}</p>
      <p className="m-1 text-gray-500 font-mono font-extrabold line ">
      {begir.data.email}
      </p>
    </div>
  );
}
