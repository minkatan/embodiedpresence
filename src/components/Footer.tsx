export default function Footer() {
    return (
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-stone-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Embodied Presence. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-stone-800">Instagram</a>
              <a href="#" className="hover:text-stone-800">Facebook</a>
              <a href="#" className="hover:text-stone-800">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }