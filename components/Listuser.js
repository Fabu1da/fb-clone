import Image from "next/image"
const Listuser = ({name, profile}) =>{
    return (
        <div className='flex items-center w-full space-x-2 p-2 hover:bg-blue-200 rounded-xl cursor-pointer'>
             
             <div className="rounded-full bg-blue-900 relative border-4 h-12 w-12 border-blue-500 max-h-fit">
               
               
             <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className=" z-10 bottom-[-4px] right-[-4px] inline-flex absolute  rounded-full h-4 w-4 border-2 border-white bg-green-500"></span>


                <Image
                className="rounded-full"
                src={profile}
                width={40}
                height={40}
                layout="fixed"
                objectFit='cover'
                />

               
            </div>

            <div>
                {name}
            </div>
        </div>
    )
}

export default Listuser