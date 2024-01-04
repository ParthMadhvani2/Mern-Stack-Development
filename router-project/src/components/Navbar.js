import React from 'react'
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom'
import {toast} from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly'>
        <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav className='flex gap-3'>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/">About</link>
                </li>
                <li>
                    <link to="/">Contact</link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3'>
            {isLoggedIn &&
                <link to="/login">
                    <button>
                        Login
                    </button>
                </link>
            }
            {!isLoggedIn &&
                <link to="/signup">
                    <button>
                        SignUp
                    </button>
                </link>
            }
            { isLoggedIn &&
                <link to="/logout">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged out");
                    }}>
                        LogOut
                    </button>
                </link>
            }
            {isLoggedIn &&
                <link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </link>
            }
        </div>
        
    </div>
  )
}

export default Navbar