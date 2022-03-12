import Image from 'next/image'
const SideBarRow = ({src, Icon, title})=> {
    return(
        <>
        <div className='flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-xl cursor-pointer'>
    
            {src && (
                <Image
                src={src}
                width={40}
                height={40}
                layout="fixed"
            />
            )}
            
            {Icon && (
                <Icon className="h-8 w-8 text-blue-500" />
            )}
            <p className='hidden md:inline-flex font-medium ml-2'>{title}</p>
        </div>
        </>
    )
}

export default SideBarRow