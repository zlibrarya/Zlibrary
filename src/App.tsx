import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import { useState, useEffect } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  
  // 监听路由变化，平滑滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 为图片添加懒加载功能
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('.lazy-load');
      images.forEach(img => {
        if (isElementInViewport(img)) {
          img.classList.add('loaded');
        }
      });
    };
    
    function isElementInViewport(el: Element) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // 初始加载和滚动时检查图片
    lazyLoadImages();
    window.addEventListener('scroll', lazyLoadImages);
    
    return () => {
      window.removeEventListener('scroll', lazyLoadImages);
    };
  }, [location]);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
    </AuthContext.Provider>
  );
}
