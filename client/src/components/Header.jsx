import { Button, Navbar, TextInput } from "flowbite-react";
import{Link} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

export default function Header(){

    return(
        <Navbar className="border-b-2">
             {/* Header Logo With Linked Function */}
            <Link to='/' className="self-center whitespace-nowrap text-sm 
            sm:text-xl font-semibold dark:text-white">

                <span className="px-2 py-1 bg-gradient-to-r from-gray-500 via-blue-300 to-blue-500 
                rounded-lg">Easy</span>
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
            <Button className="w-12 h-10 hidden sm:inline" color='grey' pills>
                <FaMoon/>
            </Button>

                {/* Dark Mood / Brighter Mood */}
            
            <Link to='/sign-in'>
                <Button className="bg-green-500">
                    Sign In
                </Button>
            </Link>
            </div>
            


        </Navbar>
    )
}