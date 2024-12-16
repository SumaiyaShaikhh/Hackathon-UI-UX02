import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section >
      <table width="100%">
   <tr>
    
      <td style={{width:'50%'}}><h1 className="text-4xl font-bold mb-4">Rocket single seater</h1></td>
       <td style={{width:'30%'} }> <Image src="/Rocketsingleseater1.png"
            alt="Rocket Single Seater"
            width={700}
            height={700}
            className="rounded-lg"></Image>
            </td>
  </tr>
  </table>
    </section>
  );
}
