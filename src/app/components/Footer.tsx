export default function Footer() {
  return (
    <footer className="bg-[#fff7e6] text-gray-800 border-t border-[#f1e2c6]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#bc8925]">
            YourBrand
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Building smart digital experiences with modern design and powerful
            technology. Simple, elegant and user-focused solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#bc8925] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#bc8925] transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#bc8925] transition">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#bc8925] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#bc8925] transition">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#bc8925] transition">
                Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#bc8925] transition">
                Consulting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#bc8925] transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>

          <p className="text-sm text-gray-600 mb-4">
            Subscribe to get latest updates and offers.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l-lg border border-[#e8d8b5] focus:outline-none"
            />

            <button
              type="submit"
              className="bg-[#bc8925] text-white px-4 rounded-r-lg hover:bg-[#a6761f] transition"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f1e2c6] py-5 text-center text-sm text-gray-600">
        © 2026 YourBrand. All rights reserved.
      </div>

    </footer>
  );
}