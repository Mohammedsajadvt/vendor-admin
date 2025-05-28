'use client';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from '../redux/slices/sidebarSlice';
import { RootState } from '../redux/store/store';
function SideBar() {
    const dispatch = useDispatch();
    const activeItem = useSelector((state: RootState) => state.sideBar.activeItem);
    const menuItems = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Equipments', path: '/equipments' },
        { name: 'Customers', path: '/customers' },
        { name: 'Vendors', path: '/vendors' },
        { name: 'Masters', path: '/masters' },
        { name: 'Reports', path: '/reports' },
    ];

    const handleExpand = (path: string) => {
        dispatch(setActiveItem(path));
    };

    return (
        <aside className="w-64 h-screen bg-[#FFFFFF] text-center font-[500] text-[#7C7C7C] p-6 fixed">
            <ul className="space-y-6 pt-10">
                {menuItems.map((item) => {
                    return (
                        <li
                            key={item.path}
                            className={`cursor-pointer px-4 py-2 rounded transition-colors ${(activeItem === item.path || (!activeItem && item.path === '/dashboard'))
                                    ? 'bg-[#000000] text-[#FFFFFF]'
                                    : ''
                                }`}
                        >
                            <Link href={item.path} onClick={() => handleExpand(item.path)}>{item.name}
                            </Link>
                        </li>
                    );
                })}
                
            </ul>
        </aside>
    );
}

export default SideBar;
