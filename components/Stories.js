import Image from 'next/image'
import Storycard from '../components/Storycard'
import { useSession } from 'next-auth/react'
// import {PlusIcon} from '@heroicons/react/outline'
import {PlusIcon} from '@heroicons/react/solid'
const stories = [
    {
        id:1,
        name: "Beyonce Knowles",
        src: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/32/1471002537-gettyimages-453482991.jpg",
        profile: "https://cdn.prod.www.spiegel.de/images/0da54d3d-0b9f-4fe9-8255-6f697d21f976_w948_r1.778_fpx49_fpy31.jpg"
    },

    {
        id:2,
        name: "The Ben",
        src: "https://www.ktpress.rw/wp-content/uploads/2019/04/THE-BEN.jpg",
        profile: "https://www.ktpress.rw/wp-content/uploads/2020/09/IMG-20200826-WA0015.jpg"
    },
    {
        id:3,
        name: "LoveBoy",
        src: "https://guardian.ng/wp-content/uploads/2019/07/Burna-Boy.jpg",
        profile: "https://www.16bars.de/wp-content/uploads/2019/07/Bildschirmfoto-2019-07-31-um-16.43.25.png"
    },
    {
        id:4,
        name: "JasonDerulo",
        src: "https://i0.wp.com/popkultur.de/wp-content/uploads/bigsjasonde.jpg",
        profile: "http://www.laut.de/Jason-Derulo/jason-derulo-188941.jpg"
    },
]
const Stories = () =>{
    const session = useSession()
    return(
        <>
        <div className="flex justify-center space-x-3 mx-auto">
        <div className='h-56  w-36 rounded-xl shadow-lg  overflow-hidden relative'>
            

            <Image 
                className='object-cover filter brightness-75'
                src={session.data.user.image}
                layout="fill"
                objectFit='cover'
                />

            <div className='absolute bottom-0 h-12 w-full  bg-white z-50'>
               <div className='flex justify-center border-2 border-white items-center bg-blue-600 mt-[-15px] rounded-full mx-auto w-8 h-8'>
                   <PlusIcon 
                   className='text-white cursor-pointer'
                   />
               </div>
            </div>
              
        </div>
          {stories.map(function(story){
             return(
                 <Storycard 
                    key={story.id}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}/>
             ) 
          })}
        </div>
        </>
    )
}

export default Stories