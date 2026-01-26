const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--jumia-dark))] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">About Jumia Delivery</h3>
          <p className="text-sm leading-relaxed">Nigeria's leading courier service. Fast, reliable, and affordable logistics for everyone.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.jumia.com.ng/sp-help-center/" className="hover:text-white transition">Help Center</a></li>
            <li><a href="https://www.jumia.com.ng/sp-contact/" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="https://www.jumia.com.ng/sp-term-condition-jumia-delivery/" className="hover:text-white transition">Dispute Resolution</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.jumia.com.ng/sp-term-condition-jumia-delivery/" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="https://www.jumia.com.ng/sp-privacy/" className="hover:text-white transition">Privacy Notice</a></li>

          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Connect</h3>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition cursor-pointer"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition cursor-pointer"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition cursor-pointer"></div>
          </div>
          <p className="text-xs mt-4">© 2025 Jumia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
