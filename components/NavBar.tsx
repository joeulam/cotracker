import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; // Mobile navbar menu icon
import { GrClose } from 'react-icons/gr'; // Mobile navbar menu close icon
import themeIcon from '../public/icons/toggletheme.svg';
import logo from "../public/assets/cotrackerswhite.png"
const NavBar = ({page}) => {
    return (
        <nav className='fixed top-0 left-0 w-full z-[999]'>
            <div className='hidden md:flex bg-[#4D4D4D] text-white font-mono m-auto justify-between items-center p-1'>
                <ul>
                    <div className='flex items-center'>
                        <li className='p-4 pr-6'>
                            <Link href='/' className='hover:brightness-90 relative transition-all'>
                                <Image src={logo} height={38} alt='CoTrackers'/>
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link href='#about' className='hover:brightness-90 relative transition-all'>
                                About
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link href='#whytrack' className='hover:brightness-90 relative transition-all'>
                                Why Track?
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link href='#team' className='hover:brightness-90 relative transition-all'>
                                Meet the Team
                            </Link>
                        </li>
                        <li className='p-4'>
                            <Link href='#contact' className='hover:brightness-90 relative transition-all'>
                                Contact Us
                            </Link>
                        </li>
                    </div>
                </ul>
                <ul>
                    <div className='flex items-center'>
                        <li className='p-2'>
                            <Image src={themeIcon} width={32} alt='Toggle Light/Dark Theme' className='invert'/>
                        </li>
                        <li className='p-2'>
                            <div className='flex w-[100px] h-[42px] rounded-[10px] border-[3px] border-zinc-300 items-center justify-center'>
                                <h2><a href='/login'>Log In</a></h2>
                            </div>
                        </li>
                        <li className='p-2'>
                            <div className='flex w-[100px] h-[42px] rounded-[10px] bg-[#f3f3f3] items-center justify-center'>
                                <h2 className='text-[#141414]'><a href='/signup'>Sign Up</a></h2>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;