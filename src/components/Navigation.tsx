import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, BookOpen, BriefcaseIcon, Video, Calendar } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Services", href: "/services" },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "1:1 Sessions", href: "/sessions", icon: Video },
    { name: "Jobs", href: "/jobs", icon: BriefcaseIcon },
    { name: "Our Brand Partner", href: "/brand-partners" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo enlarged to 80px */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/Youthbees-Logo-AI.png"
              alt="YouthBees Logo"
              className="h-40 w-auto drop-shadow-md brightness-110 transition-all duration-200 hover:brightness-125"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:scale-105"
                >
                  {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                  <span className="font-semibold">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <Link to="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 font-semibold">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none focus:text-primary p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-primary/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                  <span className="font-semibold">{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-primary/20">
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10 font-semibold">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
