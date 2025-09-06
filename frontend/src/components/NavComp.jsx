import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavComp() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/', current: location.pathname === '/' || location.pathname==='/' },
    { name: 'Blogs', path: '/blogs', current: location.pathname === '/blogs' },
    { name: 'Certifications', path: '/certificates', current: location.pathname === '/certificates' },
    { name: 'Projects', path: '/projects', current: location.pathname === '/projects' },
    { name: 'Contact Me', path: '/contact', current: location.pathname === '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Disclosure as="nav" className="sticky top-0 bg-black/90 backdrop-blur-sm w-screen border-b border-green-700/30 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green-900/30 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset transition-all duration-300">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link 
  to="/" 
  className="hover:text-green-300 transition-colors duration-300 font-mono text-2xl font-bold tracking-widest"
>
  <span className="text-green-600">[</span>SSH<span className="text-green-600">]</span>
</Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current 
                        ? 'bg-green-900/30 text-green-400 border border-green-700/50' 
                        : 'text-gray-400 hover:bg-green-900/20 hover:text-green-300 hover:border hover:border-green-700/30',
                      'rounded-md px-4 py-2 text-sm font-mono transition-all duration-300 border border-transparent'
                    )}
                  >
                    {item.name.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-green-400 font-mono hidden md:block">ONLINE</span>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-sm z-50 sm:hidden shadow-lg border-b border-green-700/30">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={() => handleNavigation(item.path)}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current 
                  ? 'bg-green-900/30 text-green-400 border border-green-700/50' 
                  : 'text-gray-400 hover:bg-green-900/20 hover:text-green-300',
                'rounded-md px-3 py-2 text-base font-mono w-full text-left transition-all duration-300 border border-transparent'
              )}
            >
              &gt; {item.name.toUpperCase()}
            </DisclosureButton>
          ))}
        </div>
        
        <div className="border-t border-green-700/30 px-2 py-3">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-green-400 font-mono">SYSTEM_STATUS: ONLINE</span>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}