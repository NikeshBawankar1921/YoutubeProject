
import Header from '../components/Header'

function UserChannel() {
    return (
        <div className='w-screen h-screen bg-white text-black'>
            <Header/>
            <img className='w-full h-50' src="https://wallpapers.com/images/hd/youtube-background-balmd1zcjzgnp7na.jpg" alt="" />
            <div className='grid grid-cols-3'>

                <div className=' flex col-span-2'>
                    <img className='rounded-full w-30 m-2' src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
                    <div className=' m-2'>
                        <div className="font-bold text-xl">Karina Kapoor</div>
                        <div className="">@Karina_Kapoor22</div>
                        <div className=" ">11.25k Subscribers | 230 videos</div>
                        <div className='rounded-full bg-gray-900 w-fit text-white pl-3 pr-3 p-1 cursor-pointer mt-3'>Subscribe</div>
                    </div>

                </div>
                <div className=''></div> {/*un use div for grid spacing*/}
                <div className=' w-screen mt-3'>
                    <span className='m-3  hover:border-b-2 cursor-pointer' > home</span>
                    <span className='m-3  hover:border-b-2 cursor-pointer'>Videos</span>
                    <span className='m-3 hover:border-b-2 cursor-pointer'>Shorts</span>
                    <span className='m-3 hover:border-b-2 cursor-pointer'>Live</span>
                    <span className='m-3 hover:border-b-2 cursor-pointer'>Playlists</span>
                    <span className='m-3 hover:border-b-2 cursor-pointer'>Community</span>
                    <hr className='opacity-25' />
                    <div className='flex gap-5'>
                        <div className="rounded bg-gray-300 w-fit text-black font-bold pl-3 pr-3 p-1 cursor-pointer m-2 hover:bg-gray-900 hover:text-white">Latest</div>
                        <div className="rounded bg-gray-300 w-fit text-black font-bold pl-3 pr-3 p-1 cursor-pointer m-2 hover:bg-gray-900 hover:text-white">Popular</div>
                        <div className="rounded bg-gray-300 w-fit text-black font-bold pl-3 pr-3 p-1 cursor-pointer m-2 hover:bg-gray-900 hover:text-white">Oldest</div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default UserChannel
