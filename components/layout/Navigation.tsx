import { navItems, type PageId, type ServiceId } from "@/lib/content";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

type NavigationProps = {
  activePage: PageId;
  onNavigate: (page: PageId, service?: ServiceId) => void;
};

export default function Navigation({
  activePage,
  onNavigate,
}: NavigationProps) {
  return (
    <nav id="nav">
      <div className="nav-inner">
        <button
          className="logo"
          onClick={() => onNavigate("home")}
          aria-label="Go to home"
        >
          <div className="logo-box">
            <PlaceholderImage
              src="/home/logo.png"
              label="Andalucia emblem"
              alt="Andalucia Engineering Consulting star emblem"
            />
          </div>
          <div className="logo-words">
            <b>Andalucia</b>
            <span>Engineering Consulting</span>
          </div>
        </button>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={activePage === item.id ? "active" : ""}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => onNavigate("contact")} className="nav-pill">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
