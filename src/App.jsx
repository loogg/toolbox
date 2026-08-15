import React, { useState, useMemo } from 'react';
import siteConfig from './tools-config.json'
import {
  Search,
  Code,
  Image as ImageIcon,
  Palette,
  Shield,
  Clock,
  Calculator,
  Terminal,
  FileText,
  Compass,
  ArrowRight,
  LayoutGrid,
  Cpu,
  Type,
  Columns3,
  Waves
} from 'lucide-react';

const IconMap = {
  Code, ImageIcon, Search, Palette, Shield, Clock, Calculator, Terminal, FileText, Compass, LayoutGrid, Cpu, Type, Columns3, Waves
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = useMemo(() => {
    const cats = new Set(siteConfig.tools.map(tool => tool.category));
    return ['全部', ...Array.from(cats)];
  }, []);

  const filteredTools = useMemo(() => {
    return siteConfig.tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === '全部' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">

      <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <LayoutGrid size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">
                {siteConfig.site.logoText} <span className="font-normal text-slate-500">{siteConfig.site.logoHighlight}</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              {siteConfig.site.navLinks.map((link, index) => (
                <a key={index} href={link.url} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="relative overflow-hidden bg-white border-b border-slate-200">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(#64748b 0.5px, transparent 0.5px)',
            backgroundSize: '16px 16px',
          }}
        ></div>
        <div className="absolute inset-y-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {siteConfig.site.hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            {siteConfig.site.hero.subtitle}
          </p>

          <div className="mx-auto mt-10 max-w-2xl relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full rounded-2xl border-0 py-4 pl-12 pr-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6 transition-all bg-white hover:ring-slate-300"
              placeholder="搜索工具、功能或关键词..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="hidden sm:inline-flex items-center gap-1 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-400">
                <kbd className="font-sans">Ctrl</kbd>
                <kbd className="font-sans">K</kbd>
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-slate-900 text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool) => {
              const IconComponent = IconMap[tool.icon] || LayoutGrid;

              return (
                <a
                  key={tool.id}
                  href={tool.url}
                  className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 overflow-hidden block cursor-pointer outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={24} strokeWidth={1.5} />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-500 border border-slate-100">
                        {tool.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </h3>

                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="mt-auto relative z-10 flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                    立即使用
                    <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 mb-6">
              <Search className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">未找到相关工具</h3>
            <p className="text-slate-500 max-w-sm">
              抱歉，没有找到与 "<span className="text-slate-800 font-medium">{searchQuery}</span>" 相关的工具。请尝试使用其他关键词。
            </p>
            <button
              onClick={() => {setSearchQuery(''); setActiveCategory('全部');}}
              className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              清除搜索条件
            </button>
          </div>
        )}
      </main>

      <footer className="mt-auto border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            {siteConfig.site.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.site.footer.links.map((link, index) => (
              <a key={index} href={link.url} className="text-sm text-slate-400 hover:text-slate-900 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
