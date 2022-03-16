import Image from 'next/image'
const Storycard = ({name, src, profile}) =>{
    return(
        <>
        <div className='h-56 w-36 rounded-xl shadow-lg  overflow-hidden relative'>
            <div className="rounded-full relative border-4 h-12 w-12 border-blue-500 max-h-fit">
                <Image 
                    className='absolute opacite-0 shadow-lg lg:opacite-300 rounded-full z-50 m-5'
                    src={profile}
                    width={40}
                    height={40}
                    layout="fixed"
                    objectFit='cover'
                    />
            </div>

            <Image 
                className='object-cover filter brightness-75'
                src={src}
                layout="fill"
                objectFit='cover'
                />
                <p className='absolute bottom-2 left-2 text-white z-50'>{name}</p>
        </div>
        </>
    )
}

export default Storycard