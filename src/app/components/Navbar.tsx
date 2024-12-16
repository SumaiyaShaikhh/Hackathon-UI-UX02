import { Bold, Section } from "lucide-react";
import Link from "next/link";
import { jsx } from "react/jsx-runtime";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
          <div style={{background:'#fbebb5', width:'full', padding:'20px'}}>
            <Link legacyBehavior href="/Home" >
              <a style={{color:'black', fontWeight:'bold', marginLeft:'460px', textDecoration:'none' } }>Home</a>
            </Link>
            <Link legacyBehavior href="/Shop">
            <a style={{color:'black', fontWeight:'bold', marginLeft:'68px', textDecoration:'none'}}>Shop</a>
            </Link>
            <Link legacyBehavior href="/About">
            <a style={{color:'black', fontWeight:'bold', marginLeft:'68px', textDecoration:'none'}}>About</a>
            </Link>
            <Link legacyBehavior href="/Contact">
            <a style={{color:'black', fontWeight:'bold', marginLeft:'68px', textDecoration:'none'}}>Contact</a>
            </Link>
          </div>



      {/* <div className="container mx-auto flex items-center justify-between px-6 lg:px-20 py-4">
        <Link legacyBehavior href="/">
          <a className="text-2xl font-bold text-gray-800">Neutral House</a>
        </Link>
        <div className="flex space-x-6">
          <Link legacyBehavior href="/Shop.html">
            <a className="text-gray-600 hover:text-blue-500">Shop</a>
          </Link>
          <Link legacyBehavior href="/About.html">
            <a className="text-gray-600 hover:text-blue-500">About</a>
          </Link>
          <Link legacyBehavior href="/Contact.html">
            <a className="text-gray-600 hover:text-blue-500">Contact</a>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link legacyBehavior href="/profile">
            <a className="text-gray-600 hover:text-blue-500">
              <span className="material-icons">person</span>
            </a>
          </Link>
          <Link legacyBehavior href="/etc.html">
            <a className="text-gray-600 hover:text-blue-500">
              <span className="material-icons">favorite</span>
            </a>
          </Link>
          <Link legacyBehavior href="/etc.html">
            <a className="text-gray-600 hover:text-blue-500">
              <span className="material-icons">shopping_cart</span>
            </a>
          </Link>
        </div> 
      </div>*/}
    </nav>
  );
}
