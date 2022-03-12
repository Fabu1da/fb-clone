import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
     <div className='grid place-items-center justify-center h-screen'>
       <div className='flex flex-col items-center'>
        <Image 
        src="https://links.papareact.com/5me"
        width={200}
        height={200}/>
      <p className='mt-2'>
        Not signed in 
      </p>
      <button className='bg-blue-600 py-3 px-5 mt-5 rounded-full text-white' onClick={() => signIn()}>Sign in</button>
       </div>
      </div>
    </>
  )
}