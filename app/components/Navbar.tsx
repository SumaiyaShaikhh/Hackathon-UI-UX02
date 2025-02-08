import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div
        style={{
          background: "#fbebb5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Left Side: Links */}
        <div style={{ display: "flex", gap: "68px", marginLeft: "460px" }}>
          <Link legacyBehavior href="/Home">
            <a
              style={{
                color: "black",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Home
            </a>
          </Link >
          <Link legacyBehavior href="/Shop">
            <a
              style={{
                color: "black",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Shop
            </a>
          </Link>
          <Link legacyBehavior href="/About">
            <a
              style={{
                color: "black",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              About
            </a>
          </Link>
          <Link legacyBehavior href="/Contact">
            <a
              style={{
                color: "black",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </Link>
        </div>

        {/* Right Side: Icons */}
        <div style={{ display: "flex", gap: "20px", marginRight: "40px" }}>
          <FaUser size={18} color="black" />
          <FaSearch size={18} color="black" />
          <FaHeart size={18} color="black" />
          <FaShoppingCart size={18} color="black" />
        </div>
      </div>
    </nav>
  );
}
