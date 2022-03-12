import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Login from './Login'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  if(!session) return <Login />;

  return (
    <div>
      <Head>
        <title>The facebook clone</title>        
      </Head>
  
        {loading && <div className="">Loading...</div>}
        {
        session &&
          <>
            <Header/>
            {/* sidebar */}
            <main className='flex'>
              <SideBar />
            
            {/* Feed */}
              <Feed />
           
            {/* Widget */}
            </main>
        
          <h1>Clone facebook </h1>
          </>
        }
          
    
    </div>
  )
}

