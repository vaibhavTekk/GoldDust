'use client'

import { Element3,Setting2, EmptyWallet, StatusUp, DocumentText1, ArrangeHorizontalSquare, Notification, Profile2User, Headphone, SmsEdit, LogoutCurve, Logout} from 'iconsax-react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Sidebar(){
    const pathname = usePathname();

    const sidebar = [
    {title: 'Overview', links: [
        {label: 'Dashboard', path: '/', targetSegment: null, icon:<Element3 variant="Bold"/>},
        {label: 'Market', path: '/market', targetSegment: null, icon:<StatusUp />},
        {label: 'Portfolio', path: '/portfolio', targetSegment: null, icon:<EmptyWallet />},
        {label: 'News', path: '/news', targetSegment: null, icon:<DocumentText1 />},
        {label: 'Exchange', path: '/exchange', targetSegment: null, icon:<ArrangeHorizontalSquare />},
    ]},
    {title: 'Account', links: [
        {label: 'Notification', path: '/notification', targetSegment: null, icon:<Notification/>},
        {label: 'Community', path: '/community', targetSegment: null, icon:<Profile2User />},
        {label: 'Setting', path: '/settings', targetSegment: null, icon:<Setting2 />},
    ]},
    ]

    const sidebarbottom =  [
        {label: 'Support', path: '/support', targetSegment: null, icon:<Headphone/>},
        {label: 'Messages', path: '/community', targetSegment: null, icon:<SmsEdit />},
        {label: 'Logout', path: '/settings', targetSegment: null, icon:<Logout color="rgb(239 68 68)" />, red: true},
    ]

    return(
        <aside className="fixed text-gray-500 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full pl-12 pr-4 py-12 overflow-y-auto  bg-[#f9f9f9] border-r-2 flex flex-col justify-between items-start">
            <div className='w-full'>
            <div className="logo text-2xl mb-4">
                GoldDust.fi
            </div>
            <div>
            {sidebar.map((l,i) => {
                return(
                <div key={i} className="">
                <p className="font-medium p-2 text-gray-500 my-2">{l.title}</p>
                <ul className="space-y-4 font-medium">
                    {l.links.map((l,i) => {
                        return(
                            <Link key={i} href={l.path} className={pathname == l.path ? "flex w-full items-center p-2 rounded-[6px] group text-gray-200 bg-blue-500" : "flex w-full items-center p-2 rounded-[6px] hover:bg-gray-100 group"}>
                                {l.icon}
                                <p className="ml-3">{l.label}</p>
                            </Link>
                        )
                    })}
                </ul>
                </div>)
            })}
            </div>
            </div>
            <ul className="space-y-4 font-medium justify-flex-end w-full">
                    {sidebarbottom.map((l,i) => {
                        if (l.red){
                            return(
                                <Link key={i} href={l.path} className={pathname == l.path ? "flex w-full items-center p-2 rounded-[6px] group" : "flex w-full items-center p-2 rounded-[6px] text-red-500 bg-red-100 group"}>
                                    {l.icon}
                                    <p className="ml-3">{l.label}</p>
                                </Link>
                            ) 
                        }

                        return(
                            <Link key={i} href={l.path} className={pathname == l.path ? "flex w-full items-center p-2 rounded-[6px] group text-gray-200 bg-blue-500" : "flex w-full items-center p-2 rounded-[6px] hover:bg-gray-100 group"}>
                                {l.icon}
                                <p className="ml-3">{l.label}</p>
                            </Link>
                        )
                    })}
            </ul>

            </div>
        </aside>
    )
}

