import { Button, Navbar, TextInput } from "flowbite-react";
import{Link} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import { useLocation } from "react-router-dom";

export default function Header(){
    const path = useLocation().pathname;
    return(
        <Navbar className="border-b-2">
             {/* Header Logo With Linked Function */}
            <Link to='/' className="self-center whitespace-nowrap text-md 
            sm:text-xl font-semibold dark:text-white ">
               
                <span className="mr-0.5 px-2 py-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 
                rounded-lg text-white text-shadow-sm" >Easy</span>
                Blog            
            </Link>

            {/* Header Search Bar */}

            <form>
                <TextInput
                    type='text'
                    placeholder="Search..."
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                
                />
            </form>

            {/* Header Search Bar For Small Screen */}

            <Button className="w-12 h-10 lg:hidden border-2" color='grey' pill>
                <AiOutlineSearch/>
            </Button>

            
            <div className="flex gap-2 md:order-2">
                {/* Dark Mood / Brighter Mood */}
            <Button className="w-12 h-10 hidden sm:inline bg-gray-700" pill >
                <FaMoon/>
            </Button>

                {/* Sign In Button */}
            
            <Link to='/sign-in'>
                <Button outline gradientMonochrome="success">
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle/>
            </div>

            {/* Nav Option */}
            <Navbar.Collapse>
                <Navbar.Link active={path === "/" } as={'div'}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects'>Projects</Link>
                </Navbar.Link>

            </Navbar.Collapse>
            


        </Navbar>
    )
}