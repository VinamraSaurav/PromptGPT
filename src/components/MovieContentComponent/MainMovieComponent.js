
const MainMovieComponent = ({data}) => {
    const {key,name,id,type,site}=data;
    
  return (
    <div className="m-4">
        <iframe
      className="-mt-16 mx-auto w-[92vw] lg:w-[85vw] p-2 max-w-[1515px] aspect-video"
        
        
        src={"https://www.youtube.com/embed/"+key+"?&rel=0&showinfo=0&color=white&iv_load_policy=3&mute=1&disablekb=1"}
        title="YouTube video player"
        // frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      >
      {/* <div className="z-[-1] w-screen ascpect-video absolute top-0 bottom-0 left-0 right-0"> */}
      {/* </div> */}
      </iframe>
      <div className="text-xl font-popins px-2 my-1">{name}</div>
      <div className="px-2">

      <div className='w-fit p-1 text-md text-white/80 bg-black/30'>{type}</div>
      </div>
    </div>
  )
}

export default MainMovieComponent