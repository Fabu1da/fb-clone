import { serverTimestamp, Timestamp } from "firebase/firestore";
import Image from "next/image";

import {ChatIcon, ThumbUpIcon} from '@heroicons/react/outline'
import {ShareIcon} from '@heroicons/react/solid'
const Post = ({name, message, postImage, image, email, timestamp}) =>{
        
        // var date = new Date(new Timestamp(timestamp).seconds.seconds*1000);   
    return(
        <>
        <div className="flex flex-col bg-white p-3 rounded-xl shadow-lg mt-4 ">
            <div className="flex space-x-2 p-2 border-b">
            <div className="rounded-full relative border-4 h-12 w-12 border-blue-500 max-h-fit">
            <Image
                className="rounded-full border-2 border-blue-500"
                src={image}
                layout="fill"
                />
            </div>
                <div>
                    <p className="font-medium">
                        {name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {/* {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} : {date.getHours()}:{date.getMinutes()} */}
                        {timestamp && new Date(new Timestamp(timestamp).seconds.seconds*1000).toDateString()}
                    </p>
                </div>
            </div>
            <div>
                {message}
            </div>
            <div>
                <img
                // src={postImage}
                src={postImage}
                layout="fixed"
                />
            </div>
           
                <div className="flex justify-evenly border-t mt-2 pt-2">
                    <div className="flex hover:bg-gray-100 flex-1 items-center justify-center cursor-pointer text-blue-600 rounded-xl p-1">
                        <ThumbUpIcon 
                        className="h-6 space-x-8"/>
                        Like
                    </div>
                    <div className="flex hover:bg-gray-100 flex-1 items-center justify-center cursor-pointer text-blue-600 rounded-xl p-1">
                        <ChatIcon
                        className="h-6 space-x-8" />
                        Comment
                    </div>
                    <div className="flex hover:bg-gray-100 flex-1 items-center justify-center cursor-pointer text-blue-600 rounded-xl p-1">
                        <ShareIcon
                        className="h-6 space-x-8" />
                        Share
                    </div>
                </div>
            </div>

       
        </>
    )
}

export default Post