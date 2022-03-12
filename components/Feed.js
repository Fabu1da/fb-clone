import Stories from './Stories'
const Feed =()=>{
    return(
        <>
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
            {/* Feed story */}
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <Stories />
            </div>
            {/* Form */}
            {/* POst */}
        </div>
        </>
    )
}

export default Feed