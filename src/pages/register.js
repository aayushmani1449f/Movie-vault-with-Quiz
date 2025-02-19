// Registration Page 
export default function Register() {
    return (
      <div className="p-4">
        <h2 className="text-2xl">Register</h2>
        <input type="text" placeholder="Name" className="border p-2 block" />
        <input type="email" placeholder="Email" className="border p-2 block mt-2" />
        <input type="password" placeholder="Password" className="border p-2 block mt-2" />
        <button className="bg-green-500 text-white p-2 mt-2">Register</button>
      </div>
    );
  }