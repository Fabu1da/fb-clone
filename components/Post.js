import { Timestamp } from "firebase/firestore";
import Image from "next/image";
const Post = ({name, message, postImage, image, email, timestamp}) =>{

        var date = new Date(new Timestamp(timestamp).seconds.seconds*1000);

   
    
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
                        {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} : {date.getHours()}:{date.getMinutes()}
                    </p>
                </div>
            </div>
            <div>
                {message}
            </div>
            <div>
                <img
                src={postImage} />
            </div>
        </div>
        </>
    )
}

export default Post