import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div>
        <Image src="/img/logo.png" width={30} height={30} alt="logo" />
      </div>

      <ul></ul>
    </div>
  );
};

export default Navbar;
