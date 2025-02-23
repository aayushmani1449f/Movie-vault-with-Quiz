export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} IMDb Clone. All rights reserved.</p>
    </footer>
  );
}