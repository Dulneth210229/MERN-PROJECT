import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-5 max-w-lg mx-auto mt-5" /*mx-auto centers the form */>
      {/*mx-auto centers the form*/}
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />

        <input
          type="email"
          placeholder="example@gmail.com"
          className="border p-3 rounded-lg"
          id="email"
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-lime-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        Have an account?
        <Link to={"/sign-in"}>
          <span className="text-lime-600">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
