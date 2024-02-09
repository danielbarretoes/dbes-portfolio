const Hero = () => {
  return (
    <div className="max-w-[1024px] p-2 px-4 mx-auto pt-12 flex flex-col gap-6">
      <div className="flex justify-center">
        <img className="max-w-96 aspect-auto" src="/assets/ascii.png" alt="" />
      </div>
      <div className="bg-gray-900 w-[80%] max-w-full mx-auto h-auto p-4 rounded-md">
        <div className="w-fit mx-auto">
          <p className="inconsolata typewriter w-fit text-xl">
            I'm Daniel Barreto
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
