import Image from "next/image";
import { useSession } from "next-auth/react"
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/solid'
import { useRef, useState } from "react";

import {app, db} from '../Firebase'
import { collection, addDoc, serverTimestamp, doc, setDoc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
const InputBox = () =>{
    const session = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageTopost, setImageTopost] = useState(null)

    const sendPost = (e)=>{
        e.preventDefault();
        if(!inputRef.current.value)
        {
            alert("No data in the field");
        }else{
            const dbInstance = collection(db, 'posts');
            addDoc(dbInstance,
                {
                    message:inputRef.current.value,
                    name: session.data.user.name,
                    email: session.data.user.email,
                    image:session.data.user.image,
                    timestamp: serverTimestamp.apply()
                    
                    }).then((docRef) =>{
                        if(imageTopost){
                            
                            const uploadTask =ref(getStorage(),`posts/${docRef.id}`)                           
                            uploadString(uploadTask, imageTopost, 'data_url').then(() => {
                                getDownloadURL(uploadTask).then(
                                    (url)=>{

                                        setDoc(doc(dbInstance, docRef.id), {
                                            postImage:url
                                        }, { merge: true });
                                    }
                                )
                            });
                            removeImage();
                        }
                    });

        inputRef.current.value ="";
            
        }
       
    }
    

    const addImageTopost = (e) =>{
    
        const reader = new FileReader();
        if(e.target.files[0]){
           
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) =>{
            setImageTopost(readerEvent.target.result)
        }
    }

    const removeImage=()=>{
        setImageTopost(null);
    }
    
    return(
        <>
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 items-center p-4">
                <Image
                className="rounded-full"
                src={session.data.user.image}
                width={40}
                height={40}
                layout="fixed"
                />
            
                <form className="flex flex-grow">
                    <input type="text"
                    ref={inputRef}
                    className="rounded-full w-full h-12 bg-gray-100 px-5 focus:outline-none"
                    placeholder={`What is in your mind, ${session.data.user.name}?`}/>
                    <button 
                    className="bg-blue-500 text-white rounded-full px-3 ml-3 space-x-2" 
                    onClick={sendPost}
                    type="submit" hidden>Send</button>
                </form>

                <div onClick={removeImage} 
                className=" flex flex-col rounded-xl overflow-hidden filter hover:brightness-110 transition duration-150 transform hover:scale-110 cursor-pointer">
                    {imageTopost && (
                        <img 
                        className="h-10 object-fill"
                        src={imageTopost} />
                    )}
                </div>
            </div>

          

            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon 
                    className="h-7 text-red-500"/>
                    <p className="text-xs md:text-sm xl:text-base">
                        Live Video
                    </p>
                </div>
                <div onClick={()=>{filePickerRef.current.click()}} className="inputIcon">
                <CameraIcon 
                    className="h-7 text-green-500"/>
                    <p className="text-xs md:text-sm xl:text-base">
                       Upload/Take 
                    </p>
                <div>
                <input hidden 
                    ref={filePickerRef} 
                    onChange={addImageTopost} 
                    type="file" />
                </div>
                </div>
                <div className="inputIcon">
                <EmojiHappyIcon 
                    className="h-7 text-yellow-500"/>
                    <p className="text-xs md:text-sm xl:text-base">
                       Feeling/Activity
                    </p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default InputBox