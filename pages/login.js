import Image from "next/image";

export default function Login() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div className="flex flex-col items-center max-w-md mt-16">
        <div className="flex justify-around w-full">
          <span className="text-pink-500 text-xl">Login</span>
          <div className="bg-gradient-to-b from-pink-300 to-pink-500 w-0.5 rounded"></div>
          <span className="text-xl">Sign Up</span>
        </div>
        <p className="text-6xl text-white mt-12">Welcome back!</p>
        <p className="text-xl text-white mt-8">Sign in to get the most out of Insights.</p>
        <div className="flex items-center w-full relative mt-10">
          <img className="absolute left-3 w-8" src="/user.png" alt="user" />
          <input className="bg-transparent rounded-lg border border-gray-300 p-5 text-white pl-14 flex-grow" type="text" placeholder="Username"/>
        </div>
        <div className="flex items-center w-full relative mt-6">
          <img className="absolute left-3 w-8" src="/key.png" alt="user" />
          <input className="bg-transparent rounded-lg border border-gray-300 p-5 text-white pl-14 flex-grow" type="password" placeholder="Password"/>
        </div>
        <div className="mt-6 flex justify-between items-center w-full">
          <div className="form-check flex items-center">
            <input className="w-4 h-4 mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label inline-block text-gray-600" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <p className="text-gray-600">Forgot Password?</p>
        </div>
        <button className="bg-gradient-to-r from-pink-300 to-pink-500 mt-6 p-5 rounded-xl text-3xl font-medium w-full">Login</button>
      </div>

      <img
        className="absolute bottom-0 right-0 max-w-4xl"
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/polka.png"
        // width={500}
        // height={500}
      />
    </div>
  );
}
