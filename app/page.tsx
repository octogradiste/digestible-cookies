export default function Home() {
  return (
  <div className="h-screen flex flex-col md:flex-row">
    <div className="m-16 mb-0 sm:m-24  md:m-32 md:mr-0 md:w-md ">
      <p className="font-serif font-stretch-expanded text-5xl text-center md:text-7xl md:text-left">
          Digestible
      </p>
      <p className="pt-1 font-serif font-stretch-expanded text-5xl text-center md:text-7xl md:text-left">
          Cookies
      </p>
      <p className="font-2xl pt-10 text-center md:text-left">
        A journey through timeless cookie traditions and innovations, celebrating the sweetest flavors from every culture.
      </p>
      <div className="pt-16 flex justify-center md:justify-start">
        <button type="button" className="bg-black text-white font-bold py-3 px-6 rounded">
          View Recipes
        </button>
      </div>
    </div>
    <div className="relative w-full h-full">
      <img
        src="/cookies.png"
        alt="Cookies"
        className="absolute object-cover object-bottom h-full w-full bottom-0 scale-y-[-1] md:object-left md:scale-none md:top-0"
      />
    </div>
  </div>
  );
}
