// Login Page 
export default function Login() {
    return (
      <div className="p-4">
        <h2 className="text-2xl">Login</h2>
        <input type="text" placeholder="Email" className="border p-2 block" />
        <input type="password" placeholder="Password" className="border p-2 block mt-2" />
        <button className="bg-blue-500 text-white p-2 mt-2">Login</button>
      </div>
    );
  }