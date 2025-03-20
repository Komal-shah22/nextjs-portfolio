import Image from 'next/image';
import { useState, useEffect } from 'react';

const certifications = [
  { name: 'Name', image: '/about-image.jpeg' },
  { name: 'Name', image: '/cert2.jpg' },
  { name: 'ECON', image: '/cert3.jpg' },
  { name: 'TECHNOVATE', image: '/cert4.jpg' },
  { name: 'INNOVATEHUB', image: '/cert5.jpg' },
];

export default function Certifications() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex >= certifications.length - visibleCards ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards]);

  return (
    <section className="bg-black text-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="certificate-bg text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-12 text-[#58c6f1]">
          My Experienced Certification
        </h2>

        <div className="relative mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / visibleCards)}%)` }}
          >
            {certifications.concat(certifications).map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex-shrink-0 mx-2"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#58c6f1]">
                  <Image src={cert.image} alt={cert.name} layout="fill" objectFit="cover" />
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-semibold">{cert.name}</h3>
                <button className="mt-2 text-blue-400 hover:underline">Certificate</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
