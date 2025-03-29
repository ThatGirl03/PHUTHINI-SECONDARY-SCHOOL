
export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Phuthini Secondary School</h3>
            <p className="text-white/80">
              Empowering minds, shaping futures through quality education since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#vision-mission" className="text-white/80 hover:text-primary">About Us</a>
              </li>
              <li>
                <a href="#subjects-offered" className="text-white/80 hover:text-primary">Subjects</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-primary">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>

          {/* Admin Login */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Admin</h3>
            <a
              href="#home"
              className="inline-block px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition-colors duration-300"
            >
              Admin Login
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            &copy; 2025 Phuthini Secondary School. All Rights Reserved.
          </p>
          <p className="text-white/60">
            <a href="https://www.singaweinnovative.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              SINGAWE Innovative
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}