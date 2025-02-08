import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      {/* Hero Section */}
      <table width="100%" style={{ background: "#fbebb5", width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "50%", padding: "240px", fontSize: "160%" }}>
              <h1 className="text-5xl font-bold mb-4 ml-8">Rocket Single Seater</h1>
              <div className="ml-8">
                <Link legacyBehavior href="/shop">
                  <a className="shop-now-btn" style={{ color: "black", fontSize: "1.25rem", fontWeight: "bold" }}>
                    Shop Now
                  </a>
                </Link>
              </div>
            </td>
            <td style={{ width: "30%" }}>
              <Image
                src="/Rocketsingleseater1.png"  // Replace this with your image
                alt="Rocket Single Seater"
                width={700}
                height={700}
                className="rounded-lg"
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Cards Section with Grey Background */}
      <div className="cards-section" style={{ padding: "40px 20px", background: "#e0e0e0" }}>
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="card-container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          {/* Card 1 */}
          <div className="card" style={{ width: "250px", background: "white", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", margin: "10px", textAlign: "center", padding: "20px" }}>
            <Image
              src="/images/card-image1.png"  // Update this to the correct path in your public folder
              alt="Product 1" 
              width={400}
              height={400}
              className="rounded-lg"
            />
            <h3 className="font-bold mt-4">Product 1</h3>
            <p className="mt-2">Side table</p>
            <Link legacyBehavior href="/product/1">
              <a style={{ fontWeight: "bold", fontSize: "1.25rem", color: "black" }} className="mt-4 block">
                View More
              </a>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ width: "250px", background: "white", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", margin: "10px", textAlign: "center", padding: "20px" }}>
            <Image
              src="/images/card-image2.png"  // Update this to the correct path in your public folder
              alt="Product 2"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <h3 className="font-bold mt-4">Product 2</h3>
            <p className="mt-2">Side table</p>
            <Link legacyBehavior href="/product/2">
              <a style={{ fontWeight: "bold", fontSize: "1.25rem", color: "black" }} className="mt-4 block">
                View More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}