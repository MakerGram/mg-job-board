export function Footer() {
  return (
    <footer className="border-t py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 font-medium">
              © {new Date().getFullYear()} MakerGram Job Board. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://makergram.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-[#0070f3]"
            >
              About
            </a>
            <a
              href="https://makergram.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-[#0070f3]"
            >
              Privacy
            </a>
            <a
              href="https://makergram.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-[#0070f3]"
            >
              Terms
            </a>
            <a
              href="https://makergram.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-[#0070f3]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}