

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.instagram.com/careerlift_ai/?next=%2F" className="hover:text-red-400">Instagram</a>
            <a href="#" className="hover:text-blue-400"></a>
            <a href="#" className="hover:text-blue-400"></a>
            <a href="#" className="hover:text-blue-400"></a>
          </div>
        </div>

        {/* Email Subscription */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 rounded bg-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Subscribe
            </button>
          </form>
        </div>

        {/* Join Community */}
        <div>
          <h3 className="font-bold text-lg mb-4">Join Our Community</h3>
          <p className="text-gray-400 mb-2">
            Connect, share, and grow with fellow interview aspirants.
          </p>
          <a 
            href="#community" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Join Now
          </a>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2025 CareerLift. All rights reserved.
      </div>
    </footer>
  );
}
