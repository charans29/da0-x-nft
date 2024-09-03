function Blink({ avail, onClick }:{ 
    avail: boolean
    onClick: () => void
}) {
  return(
    <>
        {avail
            ?
            <img src="/b.png" style={{height:'20px', width:'30px'}} 
            className="rounded-sm border-[0.25px] border-zinc-500 cursor-pointer"
            onClick={onClick}
            />
            :""
        }
    </>
  )
}

export default Blink