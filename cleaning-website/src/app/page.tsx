import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Herosection />
      <ServiceSection />
      <GallerySection />
      <BeforeAfterSection />
      <ContactSection />
    </div>
  );
}

function Herosection() {
  return (
    <section id="home" className="h-screen bg-[url('/images/sofa.jpg')] bg-cover bg-center relative scroll-mt-24">
      <div className="absolute top-1/3 left-1/2 w-[90%] md:w-2/5 p-6 md:p-10 bg-[#FFF3E3] space-y-4 -translate-x-1/2 rounded-md">
        <p className="text-sm text-gray-600">Your Trusted Cleaning Partner</p>
        <h2 className="text-[#B88E2F] font-extrabold text-3xl md:text-4xl">Breathe New Life <br /> Into Your Home</h2>
        <p className="text-sm font-light text-gray-700">
          We specialize in deep cleaning carpets, sofas, and all kinds of furniture to make your home feel fresh, hygienic, and new again.
        </p>
        <button className="bg-[#B88E2F] mt-3 py-3 px-6 text-white text-xs font-semibold rounded">Get a Free Quote</button>
      </div>
    </section>
  );
}

function ServiceSection() {
  return (
    <section id="services" className="mt-16 scroll-mt-24 px-4">
      <div className="text-center text-2xl md:text-3xl font-extrabold">Our Cleaning Services</div>
      <p className="text-center text-gray-500">We bring shine and freshness to every corner of your home</p>
      <div className="flex flex-wrap gap-12 mt-10 justify-center">
        {[
          { title: "Carpet Cleaning", img: "/images/carpet.jpg" },
          { title: "Sofa Cleaning", img: "/images/sofa.jpg" },
          { title: "Staircase Cleaning", img: "/images/staircase.jpg" },
          { title: "Bedroom Cleaning", img: "/images/bedroom1.jpg" },
          { title: "Hallway Cleaning", img: "/images/hallway.jpg" },
          { title: "Living Room Cleaning", img: "/images/livingroom.jpg" },
          { title: "Dining Table Cleaning", img: "/images/diningtable.jpg" },
          { title: "Rug Cleaning", img: "/images/rug.jpg" },
        ].map((item, idx) => (
          <ServiceCard key={idx} title={item.title} img={item.img} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, img }: { title: string; img: string }) {
  return (
    <div className="w-[150px] md:w-[200px]">
      <Image className="rounded-lg" alt={title} src={img} width={200} height={200} />
    </div>
  );
}

function GallerySection() {
  return (
    <section id="works" className="my-16 scroll-mt-24 px-4">
      <div className="text-center text-2xl md:text-3xl font-extrabold">Our Work in Action</div>
      <p className="text-center mb-6 text-gray-500">See the sparkle we bring to homes like yours</p>
      <ImageGrid images={[
        "/images/sofa1.jpg",
        "/images/sofa2.jpg",
        "/images/carpet1.jpg",
        "/images/carpet2.jpg",
        "/images/rug1.jpg",
        "/images/staircase4.jpg",
        "/images/carpet4.jpg",
        "/images/carpet5.jpg",
      ]} />
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="my-16 px-4">
      <div className="text-center text-2xl md:text-3xl font-extrabold">Before & After</div>
      <p className="text-center mb-6 text-gray-500">See the transformation for yourself</p>
      <ImageGrid images={[
        "/images/sofa3.jpg",
        "/images/beforeafter.jpg",
        "/images/staircase7.jpg",
        "/images/diningtable2.jpg",
      ]} />
    </section>
  );
}

function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="flex flex-wrap gap-12 justify-center">
      {images.map((img, idx) => (
        <Image key={idx} className="rounded-lg" alt={`gallery-${idx}`} src={img} width={200} height={200} />
      ))}
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#f9f9f9] py-10 scroll-mt-24 px-4">
      <div className="text-center text-2xl md:text-3xl font-bold">Contact Us</div>
      <p className="text-center text-gray-500 mb-6">
        We serve Warsaw and surrounding areas. Get in touch to check availability or book a service.
      </p>
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <p className="text-lg font-semibold">Phone / WhatsApp</p>
          <p className="text-[#B88E2F]">+48 000 000 000</p>
          <p className="mt-4 text-lg font-semibold">Email</p>
          <p className="text-[#B88E2F]">cleanwithtrust@example.com</p>
          <p className="mt-4 text-sm text-gray-500">We reply within 2 hours during working hours.</p>
        </div>
      </div>
    </section>
  );
}
