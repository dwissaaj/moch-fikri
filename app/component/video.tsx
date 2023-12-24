export default function Video() {
    <div className="flex flex-col items-center justify-center gap-12">
        <div className="py-6 text-center font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-neutral-900 to-white/80">
          <p>Professional Artist.
            
          </p>
          <p>Telling story</p>
        </div>
        <div className='mt-18 w-[calc(80%-120px)]'>
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
}