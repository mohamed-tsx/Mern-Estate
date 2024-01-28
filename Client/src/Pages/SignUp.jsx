import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          id="username"
          placeholder="username"
          className="border rounded-lg p-3"
        />
        <input
          type="email"
          id="email"
          placeholder="username"
          className="border rounded-lg p-3"
        />
        <input
          type="password"
          id="password"
          placeholder="username"
          className="border rounded-lg p-3"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex mt-5 gap-2">
        <p>Have an account? </p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
