import Image from "next/image";

export default function Home() {
  return (
    <div className="container-fix flex  items-center min-h-[calc(100vh-18.7rem)]">
      <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
        <Image
          src={"/assets/images/stock-1.png"}
          width={1920}
          height={1080}
          alt="stock-image"
          className="w-96 h-96"
        />
        <p className="text-justify">
          Welcome to InsureChain, a groundbreaking platform that redefines the
          insurance experience through the integration of smart contracts and
          blockchain technology. In a traditional industry, InsureChain stands
          out as an innovator, combining the security and transparency of
          blockchain with the efficiency of smart contracts. Smart Insurance
          Contracts, deployed on the blockchain, usher in a new era of trust,
          transparency, and immutability, fundamentally changing the way
          individuals and businesses approach insurance transactions. The
          decentralized Insurance Marketplace within InsureChain offers a
          diverse range of tailored insurance products, providing users with a
          seamless, secure, and transparent platform to explore, purchase, and
          manage coverage. At the core of InsureChain is a commitment to
          user-centric features. The platform&apos;s transparent claims
          processing simplifies and accelerates the claims journey, allowing
          users to submit, track, and gain insights into the progress of their
          claims effortlessly. Security is paramount, with blockchain technology
          safeguarding personal information and policy details, ensuring the
          highest standards of data protection. InsureChain&apos;s user-friendly
          interface further enhances the overall experience, making it
          accessible and enjoyable for users of all levels of familiarity with
          blockchain technology. Join us on this transformative journey as we
          reshape the future of insurance, offering unparalleled trust,
          efficiency, and security through the power of blockchain and smart
          contracts.
        </p>
      </div>
    </div>
  );
}
