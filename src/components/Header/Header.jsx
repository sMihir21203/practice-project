import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-white border-gray-950 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          {/* logo  */}
          <Link to='/' className='flex items-center'>
            <img
              className='mr-3 h-12 rounded-xl'
              src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png'
              alt='Logo'
            />
          </Link>
          {/* logo  */}

          <div className='flex items-center lg:order-2'>
            {/* login */}
            <Link
              to='#'
              className='text-gray-800 hover:bg-gray-500 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus outline-none'
            >
              Log In
            </Link>
            {/* login */}

            {/* Get Start */}
            <Link
              to='#'
              className='text-white bg-orange-500 hover:bg-orange-400 hover:text-black focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
            >
              Get Start
            </Link>
            {/* Get Start */}
          </div>

          <div
            className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0'>
              {/* HomeBtn */}
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-slate-800"
                    } border-b border-gray-400 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* HomeBtn */}

              {/* AboutBtn */}
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-800"
                    } border-b border-gray-400 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              {/* AboutBtn */}

              {/* ContactBtn */}
              <li>
                <NavLink
                  to='/contact'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-800"
                    } border-b border-gray-400 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              {/* ContactBtn */}

              {/* GitHubBtn */}
              <li>
                <NavLink
                  to='/github'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-800"
                    } border-b border-gray-400 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  GitHub
                </NavLink>
              </li>
              {/* GitHubBtn */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
