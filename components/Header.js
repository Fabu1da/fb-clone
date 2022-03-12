import Image from 'next/image'
import HeaderIcons from './HeaderIcons'
import {BellIcon, 
        ChatIcon,
        ChevronDownIcon, 
        HomeIcon, 
        UserGroupIcon, 
        ViewGridIcon } from '@heroicons/react/solid'

import {FlagIcon,
        PlayIcon,
        SearchIcon,
        ShoppingCartIcon } from '@heroicons/react/outline'

import { useSession, signOut } from 'next-auth/react'

const Header = () => {
    const session = useSession();
    console.log(session);
    return (
    <div className='flex sticky top-0 z-50 bg-white p-2 lg:p-5 items-center shadow-md'>
    {/* Header left */}

    <div className='flex items-center '>
        <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
            <SearchIcon 
            className='h-6 text-gray-400'/>
            <input className='flex hidden md:inline-flex ml-2 bg-transparent items-center' type="text" placeholder="Search..." />
        </div>
    </div>

    {/* Header center */}
    <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcons active Icon={HomeIcon} />

            <HeaderIcons Icon={FlagIcon} />

            <HeaderIcons Icon={PlayIcon} />

            <HeaderIcons Icon={UserGroupIcon} />
        </div>
    </div>
    {/* Header right */}

    <div className='flex items-center sm:space-x-2 justify-end'>
        {/* Profile picture goes here */}
        <Image 
        onClick={signOut}
        className="rounded-full"
        width={40}
        height={40}
        src={session.data.user.image}
        layout="fixed"
        />
        <p className=' whitespace-nowrap font-semibold pr-2 '> Welcome, {session.data.user.name ?? session.data.user.email}</p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
    </div>

    </div>)
}

export default Header