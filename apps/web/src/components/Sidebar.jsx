'use client'

import { Element3,Setting2, EmptyWallet, StatusUp, DocumentText1, ArrangeHorizontalSquare, Notification, Profile2User, Headphone, SmsEdit, LogoutCurve} from 'iconsax-react';
import Link from 'next/link';

export default function Sidebar(){
    const links = [
        {label: 'Dashboard', path: '/', targetSegment: null, icon:<Element3 variant="Bold"/>},
        {label: 'Market', path: '/market', targetSegment: null, icon:<StatusUp />},
        {label: 'Portfolio', path: '/portfolio', targetSegment: null, icon:<EmptyWallet />},
        {label: 'News', path: '/news', targetSegment: null, icon:<DocumentText1 />},
        {label: 'Exchange', path: '/exchange', targetSegment: null, icon:<ArrangeHorizontalSquare />},
    ];

    return(
        <aside className="fixed text-gray-500 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full pl-12 pr-4 py-12 overflow-y-auto  bg-[#f9f9f9] border-r-2 flex flex-col justify-between items-start">
            <div className='w-full'>
            <div className="logo text-2xl mb-4">
                GoldDust.fi
            </div>
            <p className="font-medium p-2 text-gray-500 my-2">Overview</p>
            <ul className="space-y-4 font-medium ">
                {links.map((l,i) => {
                    return(
                        <Link key={i} href={l.path} className="flex w-full items-center p-2 rounded-[6px] hover:bg-gray-100 group active:text-gray-200 active:bg-blue-500">
                            {l.icon}
                            <p className="ml-3">{l.label}</p>
                        </Link>
                    )
                })}
            </ul>
            <p className="font-medium p-2 text-gray-500 my-2">Account</p>
            <ul className="space-y-2 font-medium">
                <li className="flex items-center p-2 rounded-[6px] hover:bg-gray-100 group">
                    <Notification />
                    <p className="ml-3">Notification</p>
                </li>
                <li className="flex items-center p-2 rounded-[6px] hover:bg-gray-100 group">
                    <Profile2User />
                    <p className="ml-3">Community</p>
                </li>                
                <li className="flex items-center p-2 rounded-[6px] hover:bg-gray-100 group">
                    <Setting2 />
                    <p className="ml-3">Setting</p>
                </li>                
            </ul>
            </div>

            <ul className="space-y-2 font-medium justify-flex-end">
                <li className="flex items-center p-3 rounded-[6px] hover:bg-gray-100 group">
                    <Headphone />
                    <p className="ml-3">Support</p>
                </li>
                <li className="flex items-center p-3 rounded-[6px] hover:bg-gray-100 group">
                    <SmsEdit />
                    <p className="ml-3">Messages</p>
                </li>                
                <li className="flex items-center p-3 text-red-500 bg-red-100 rounded-[6px] hover:bg-gray-100 group">
                    <LogoutCurve color="rgb(239 68 68)"/>
                    <p className="ml-3">Logout</p>
                </li>                
            </ul>
            </div>
        </aside>
    )
}