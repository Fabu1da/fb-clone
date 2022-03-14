import { collection, orderBy, Timestamp } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { useCollection, firestore } from 'react-firebase-hooks/firestore';
import { db } from '../Firebase';
import Post from './Post'

const Posts = () => {

  var i=0;
  const [value, loading, error] = useCollection(
    collection(db,'posts'), orderBy("timestamp","asc"), setTimeout(()=>{
      "iam searching"
    },3000)
  );
  return (
    <div>
      
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span className='flex justify-center p-2 text-blue-500 font-medium '>Collection: Loading...</span>}
        {value && (
          <span>
            
              {value.docs.map(post=>
                {

                    return(
                      <div key={post.id}>
                    
                        <Post 
                        name={post.data().name}
                        message ={post.data().message}
                        email = {post.data().email}
                        image = {post.data().image}
                        timestamp = {post.data().timestamp}
                        postImage = {post.data().postImage}
                        />
                      </div>
                    )
                })}
              
          </span>
        )}
     
    </div>
  );
};

export default Posts