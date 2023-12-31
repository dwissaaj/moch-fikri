export default function Movie() {
  return (
    <section className="py-8 bg-cover bg-home-gradient-three bg-no-repeat relative w-dvw h-dvh">
      <div className="p-8 flex flex-col items-center justify-center gap-8">
        <div className=" text-center font-extrabold text-transparent text-3xl md:text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-neutral-900 to-white/80">
          <div className="flex flex-col gap-3 mb-5">
            <p>Professional Artist.

            </p>
            <p>Telling story</p>
          </div>
        </div>
        <div className=' w-[calc(90%-20px)] lg:w-[calc(80%-50px)]'>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="">
              <video className="rounded-2xl" muted={true} autoPlay={true} loop={true}>
                <source src="/home/video/v1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="">
              <video className="rounded-2xl" muted={true} autoPlay={true} loop={true}>
                <source src="/home/video/v2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="">
              <video className="rounded-2xl" muted={true} autoPlay={true} loop={true}>
                <source src="/home/video/v3.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="">
              <video className="rounded-2xl" muted={true} autoPlay={true} loop={true}>
                <source src="/home/video/v4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}