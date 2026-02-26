import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

// 定义Z-Library特点数据
const features = [
  {
    icon: 'fa-book-open',
    title: '海量藏书',
    description: '拥有超过840万本电子书和8400万篇文章，涵盖各种主题和语言'
  },
  {
    icon: 'fa-download',
    title: '免费下载',
    description: '大多数资源可免费下载，无需付费订阅或会员资格'
  },
  {
    icon: 'fa-language',
    title: '多语言支持',
    description: '支持多种语言的书籍，满足全球读者的需求'
  },
  {
    icon: 'fa-search',
    title: '强大搜索',
    description: '先进的搜索功能，可通过标题、作者、ISBN等多种方式查找'
  },
  {
    icon: 'fa-tablet-alt',
    title: '多格式支持',
    description: '提供多种电子书格式，适配不同设备的阅读需求'
  },
  {
    icon: 'fa-cloud',
    title: '云端存储',
    description: '用户可保存喜爱的书籍到个人云端书架，随时访问'
  }
];

// 常见问题数据
const faqs = [
  {
    question: 'Z-Library是什么？',
    answer: 'Z-Library是一个免费的数字图书馆，提供海量电子书和文章的下载服务，是世界上最大的电子书库之一。'
  },
  {
    question: '如何在Z-Library上下载书籍？',
    answer: '只需访问zlibrarya.github.io，搜索您需要的书籍，点击下载按钮即可获取。大多数资源无需注册即可下载。'
  },
  {
    question: 'Z-Library的书籍来源是什么？',
    answer: 'Z-Library的书籍来自全球各地的贡献者上传，包括公共领域的作品和版权作品。请注意尊重知识产权。'
  },
  {
    question: '下载的书籍支持哪些格式？',
    answer: 'Z-Library提供多种格式，包括PDF、EPUB、MOBI等，满足不同电子阅读器和设备的需求。'
  }
];

export default function Home() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // 滚动动画效果
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 切换FAQ答案显示
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 导航栏变体动画
  const navbarVariants = {
    scrolled: {
      backgroundColor: isDark ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    initial: {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    }
  };

  // 特征卡片变体动画
  const featureCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className={cn('min-h-screen', isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900')} itemScope itemType="https://schema.org/WebPage">
      {/* 导航栏 */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300"
        variants={navbarVariants}
        animate={scrolled ? 'scrolled' : 'initial'}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-book text-2xl text-blue-600"></i>
            <h1 className="text-xl font-bold">Z-Library</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#features" className="hidden md:block hover:text-blue-500 transition-colors">特点</a>
            <a href="#how-it-works" className="hidden md:block hover:text-blue-500 transition-colors">使用方法</a>
            <a href="#faq" className="hidden md:block hover:text-blue-500 transition-colors">常见问题</a>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="切换主题"
            >
              <i className={isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
            </button>
            <a 
              href="https://zlibrarya.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-medium"
            >
              访问官网
            </a>
          </div>
          
          {/* 移动端菜单按钮 */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </motion.header>

      <main>
        {/* 英雄区域 */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className={cn('absolute inset-0', isDark ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 to-purple-50')}></div>
            {/* 背景装饰 */}
            <div className="absolute top-20 left-10 opacity-10">
              <i className="fa-solid fa-book-open text-[200px] text-blue-500"></i>
            </div>
            <div className="absolute bottom-10 right-10 opacity-10">
              <i className="fa-solid fa-book text-[200px] text-purple-500"></i>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600" itemProp="headline">
                 Z-Library
               </h1>
               <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" itemProp="description">
                 世界上最大的免费电子书图书馆，拥有超过840万本电子书和8400万篇文章，为知识的传播和共享开辟新途径。访问官网zlibrarya.github.io免费下载海量资源。
               </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a 
                  href="https://zlibrarya.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 font-medium text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1"
                >
                  <i className="fa-external-link-alt mr-2"></i>立即访问Z-Library官网
                </a>
                <a 
                  href="#features" 
                  className={cn('px-6 py-3 rounded-full transition-all duration-300 font-medium text-lg', isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg')}
                >
                  了解更多
                </a>
              </div>
            </motion.div>
            
            {/* 统计数据 */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className={cn('p-4 rounded-2xl', isDark ? 'bg-gray-800' : 'bg-white shadow-md')}>
                <p className="text-3xl md:text-4xl font-bold text-blue-600">840万+</p>
                <p className="text-sm md:text-base mt-2">电子书</p>
              </div>
              <div className={cn('p-4 rounded-2xl', isDark ? 'bg-gray-800' : 'bg-white shadow-md')}>
                <p className="text-3xl md:text-4xl font-bold text-purple-600">8400万+</p>
                <p className="text-sm md:text-base mt-2">文章</p>
              </div>
              <div className={cn('p-4 rounded-2xl', isDark ? 'bg-gray-800' : 'bg-white shadow-md')}>
                <p className="text-3xl md:text-4xl font-bold text-green-600">200+</p>
                <p className="text-sm md:text-base mt-2">支持语言</p>
              </div>
              <div className={cn('p-4 rounded-2xl', isDark ? 'bg-gray-800' : 'bg-white shadow-md')}>
                <p className="text-3xl md:text-4xl font-bold text-orange-600">10亿+</p>
                <p className="text-sm md:text-base mt-2">下载次数</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* 特点和优势部分 */}
        <section id="features" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4" itemProp="name">为什么选择 Z-Library？</h2>
               <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                 Z-Library 提供了无与伦比的数字资源获取体验，拥有超过840万本电子书和8400万篇文章，让知识触手可及。访问zlibrarya.github.io开始您的免费阅读之旅。
               </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureCardVariants}
                  className={cn('p-6 rounded-2xl', isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50 shadow-lg')}
                >
                  <div className={cn('w-14 h-14 flex items-center justify-center rounded-full mb-5 text-blue-600', isDark ? 'bg-blue-900/30' : 'bg-blue-100')}>
                    <i className={`fa-solid ${feature.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className={cn('text-gray-600 dark:text-gray-300')}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 如何使用部分 */}
        <section id="how-it-works" className={`py-20 px-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">如何使用 Z-Library 免费下载电子书</h2>
               <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                 简单几步，在zlibrarya.github.io畅享海量知识资源，免费下载电子书和文章。
               </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  step: 1,
                  title: '访问网站',
                  description: '前往 zlibrarya.github.io，进入Z-Library主页',
                  icon: 'fa-globe'
                },
                {
                  step: 2,
                  title: '搜索资源',
                  description: '在搜索框中输入书名、作者或关键词，查找您需要的书籍',
                  icon: 'fa-search'
                },
                {
                  step: 3,
                  title: '免费下载',
                  description: '选择合适的格式，点击下载按钮，获取您喜爱的书籍',
                  icon: 'fa-download'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={cn('p-6 rounded-2xl h-full', isDark ? 'bg-gray-800' : 'bg-white shadow-lg')}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full mb-5 bg-blue-600 text-white text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className={cn('text-gray-600 dark:text-gray-300')}>{step.description}</p>
                  </div>
                  
                  {/* 连接线（仅在非移动设备上显示） */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-8 transform translate-x-1/2 -translate-y-1/2">
                      <i className={`fa-solid fa-arrow-right text-blue-500 text-xl`}></i>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 图片展示部分 */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
               <img 
                 src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20library%20website%20interface%2C%20digital%20bookshelf%2C%20search%20interface%2C%20clean%20design&sign=b0401f34d13067ebf76b721f90036be0" 
                 alt="Z-Library界面展示 - 世界最大的免费数字图书馆，提供电子书下载服务" 
                 className="w-full h-auto object-cover lazy-load"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">沉浸式阅读体验</h3>
                <p className="text-gray-200 text-lg mb-6 max-w-2xl">
                  Z-Library致力于为全球读者提供高质量的数字阅读资源，让知识的获取变得更加便捷和普及
                </p>
                <a 
                  href="https://zlibrarya.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-medium w-fit"
                >
                  立即体验
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* 常见问题部分 */}
        <section id="faq" className={`py-20 px-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">关于Z-Library的常见问题</h2>
               <p className="text-lg text-gray-600 dark:text-gray-300">
                 解答您关于Z-Library免费电子书平台的常见疑问，帮助您更好地使用zlibrarya.github.io。
               </p>
            </motion.div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={cn('rounded-xl overflow-hidden', isDark ? 'bg-gray-800' : 'bg-white shadow-md')}
                >
                  <button 
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <i className={`fa-solid ${activeFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform duration-300`}></i>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeFaq === index ? 'auto' : 0,
                      opacity: activeFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-4 ${isDark ? 'border-t border-gray-700 pt-4' : 'border-t border-gray-100 pt-4'}`}>
                      <p className={cn('text-gray-600 dark:text-gray-300')}>{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 号召性行动部分 */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className={`rounded-3xl p-8 md:p-12 text-center ${isDark ? 'bg-gradient-to-r from-blue-900/60 to-purple-900/60' : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-6">立即开始您的免费知识探索之旅</h2>
               <p className="text-lg mb-8 max-w-2xl mx-auto">
                 加入数百万读者的行列，在Z-Library发现无限可能的知识世界。访问zlibrarya.github.io，免费下载超过840万本电子书和8400万篇文章。
               </p>
              <a 
                href="https://zlibrarya.github.io" 
                target="_blank" 
                rel="noopener noreferrer"
                 className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full transition-all duration-300 font-bold text-lg shadow-lg transform hover:-translate-y-1"
               >
                 立即访问 Z-Library 官网 (zlibrarya.github.io)
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* 页脚 */}
      <footer className={`py-12 px-6 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <i className="fa-solid fa-book text-2xl text-blue-600"></i>
              <h2 className="text-xl font-bold">Z-Library</h2>
            </div>
            
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'github'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-colors`}
                  aria-label={`访问Z-Library的${social}页面`}
                >
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">关于Z-Library</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-blue-500 transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">联系方式</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">捐赠支持</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">志愿者招募</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">使用指南</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-blue-500 transition-colors">新手指南</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">搜索技巧</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">下载帮助</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">常见问题</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">资源分类</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-blue-500 transition-colors">热门书籍</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">最新上传</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">分类浏览</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">推荐阅读</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">法律信息</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-blue-500 transition-colors">使用条款</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">版权声明</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">免责声明</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
               官方网址：<a href="https://zlibrarya.github.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">zlibrarya.github.io</a> - 世界最大的免费电子书下载平台
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Z-Library介绍页. 本页面仅用于介绍，非官方网站。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}