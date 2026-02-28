import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { 
  Home, 
  LayoutDashboard, 
  User, 
  TrendingUp, 
  Settings, 
  Info,
  Flame,
  Trophy,
  Award
} from 'lucide-react';

interface NavItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home' },
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: User, label: 'Account' },
  { icon: TrendingUp, label: 'Progress' },
  { icon: Settings, label: 'Settings' },
  { icon: Info, label: 'About Us' },
];

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sidebar entrance animation
      gsap.fromTo(
        sidebarRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      );

      // Logo animation
      gsap.fromTo(
        logoRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'expo.out' }
      );

      // User section animation
      gsap.fromTo(
        userRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.3, ease: 'expo.out' }
      );

      // Nav items stagger animation
      if (navRef.current) {
        const navItems = navRef.current.querySelectorAll('.nav-item');
        gsap.fromTo(
          navItems,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, delay: 0.4, ease: 'power2.out' }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className="fixed left-0 top-0 h-screen w-[260px] bg-white border-r border-gray-100 z-50 flex flex-col overflow-hidden"
    >
      {/* Logo Section */}
      <div ref={logoRef} className="p-6 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold font-heading text-orato-green tracking-tight">
            ORATO
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Language Learning</p>
      </div>

      {/* User Profile Section */}
      <div ref={userRef} className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-orato-green flex items-center justify-center text-white font-semibold text-lg">
            JD
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">John Doe</h3>
            <p className="text-xs text-orato-green font-medium">Intermediate</p>
          </div>
        </div>
        
        {/* User Stats */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-orato-orange" />
            <span className="text-sm font-semibold text-gray-700">15</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-orato-yellow" />
            <span className="text-sm font-semibold text-gray-700">2,450</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-orato-purple" />
            <span className="text-sm font-semibold text-gray-700">12</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav ref={navRef} className="flex-1 px-4 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredItem === item.label;
            
            return (
              <li key={item.label}>
                <button
                  className={`nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    item.active
                      ? 'bg-orato-green-light text-orato-green'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    transform: isHovered && !item.active ? 'translateX(8px)' : 'translateX(0)',
                  }}
                >
                  <Icon 
                    className={`w-5 h-5 transition-all duration-300 ${
                      isHovered || item.active ? 'scale-110' : ''
                    }`} 
                  />
                  <span>{item.label}</span>
                  {item.active && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orato-green animate-pulse" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom decoration */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-orato-green-light to-transparent rounded-xl p-4">
          <p className="text-xs text-orato-green-dark font-medium">Keep learning!</p>
          <p className="text-xs text-gray-500 mt-1">You&apos;re on a 15-day streak</p>
        </div>
      </div>
    </aside>
  );
}
