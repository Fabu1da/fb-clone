import { useSession } from "next-auth/react"
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from '@heroicons/react/outline'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon
} from '@heroicons/react/solid'

import SideBarRow from './SideBarRow'

const SideBar = () => {
    const session = useSession();
    console.log(session);
return(
    <>
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
    <SideBarRow
        src={session.data.user.image}
        title={session.data.user.name} 
        />
        <SideBarRow
        Icon={UserIcon}
        title="Friends" />
        <SideBarRow
                Icon={UserGroupIcon}
                title="Groups" />

        <SideBarRow
                Icon={ShoppingBagIcon}
                title="Marketplace" />

        <SideBarRow
                Icon={DesktopComputerIcon}
                title="Watch" />

        <SideBarRow
                Icon={CalendarIcon}
                title="Events" />

        <SideBarRow
                Icon={ClockIcon}
                title="Memories" />

        <SideBarRow
                Icon={ChevronDownIcon}
                title="Watch More" />
    </div>



    </>
)
}

export default SideBar