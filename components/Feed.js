import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'
const Feed =()=>{
    return(
        <>
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-2 overflow-y-auto'>
            {/* Feed story */}
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <Stories />
            </div>
            {/* Form */}
            <InputBox />
            {/* POst */}
            <Posts />
        </div>
        </>
    )
}

export default Feed