'use client';

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 selection:bg-blue-200/50 dark:selection:bg-blue-700/40">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/40 border-b border-slate-200/60 dark:border-slate-700/50">
        <nav aria-label="주요" role="navigation" className="container mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
          <a href="#top" className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white hover:opacity-90 transition-opacity">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">gurum.cat</span>
          </a>
          <div className="hidden sm:flex gap-6 items-center">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">소개</a>
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">기술</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">프로젝트</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">연락처</a>
            {/* Dark mode toggle (prefers-color-scheme 활용) */}
            <button
              aria-label="Toggle theme"
              onClick={() => {
                const c = document.documentElement.classList;
                c.toggle("dark");
                try { localStorage.setItem("theme", c.contains("dark") ? "dark" : "light"); } catch {}
              }}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="sr-only">Toggle theme</span>
              <svg className="h-4 w-4 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main id="top" className="container mx-auto max-w-6xl px-6">
        <section className="relative text-center py-24 sm:py-28" id="main">
          {/* Aura background */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-10 -translate-x-1/2 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute right-10 bottom-0 h-40 w-40 sm:h-60 sm:w-60 rounded-full bg-purple-500/20 blur-3xl"></div>
          </div>

          <div className="mb-10">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse blur opacity-30" />
              <div className="absolute inset-1 rounded-full bg-white dark:bg-slate-800" />
              <Image
                src="/profile.png"
                alt="Profile"
                width={160}
                height={160}
                className="relative rounded-full object-cover ring-2 ring-white/80 dark:ring-slate-700 shadow-xl"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              안녕하세요, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow">구름냥</span>입니다
            </h1>
            <div className="flex flex-col items-center gap-2 mb-3">
              <span className="text-base text-slate-500 dark:text-slate-300">대한민국 🇰🇷 | MBTI: ENFP</span>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              디시인사이드 챗지피티 갤러리 주딱<br/>
              오픈소스 프로젝트 <a href="https://github.com/gurumnyang/dcinside.js" className="underline decoration-2 underline-offset-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">dcinside.js</a> 등 다양한 개발 활동을 하고 있습니다.<br/>
            </p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2">프로젝트 보기
                <svg className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
            <a
              href="#contact"
              className="group border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2">연락하기
                <svg className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4Z"/></svg>
              </span>
            </a>
            <a
              href="https://coff.ee/dccat"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>후원</span>
              <svg className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21V8"/><path d="M7 12h10"/></svg>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">저에 대해 더 알아보세요</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">소개</h3>
            <div className="prose prose-slate dark:prose-invert max-w-none leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                오픈소스 개발과 커뮤니티 운영을 병행하고 있습니다. <strong>dcinside.js</strong>를 개발했고
                <strong> diepAPI</strong>, <strong>Youtube.js</strong> 등에 기여했으며, 2025년부터는 디시인사이드 <strong>ChatGPT 마이너 갤러리</strong>에서 활동하고 있습니다.
                또한 <strong>3D 모델링</strong> 작업도 병행하고 있으며, <strong>Blender</strong>를 사용하여 다양한 모델을 제작하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">Skills</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">보유하고 있는 기술 스택</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-slate-800/70 p-6 rounded-2xl shadow-lg ring-1 ring-inset ring-slate-200/60 dark:ring-slate-700/50 transition-transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-slate-800/70 p-6 rounded-2xl shadow-lg ring-1 ring-inset ring-slate-200/60 dark:ring-slate-700/50 transition-transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">NestJS</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">OpenAPI</span>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-slate-800/70 p-6 rounded-2xl shadow-lg ring-1 ring-inset ring-slate-200/60 dark:ring-slate-700/50 transition-transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Blender</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">VS Code</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">GitHub Actions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">진행한 주요 프로젝트들</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 dark:bg-slate-800/70 rounded-2xl shadow-lg overflow-hidden ring-1 ring-inset ring-slate-200/60 dark:ring-slate-700/50 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">dcinside.js</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  디시인사이드 크롤러 라이브러리<br/>
                  <a href="https://github.com/gurumnyang/dcinside.js" className="underline decoration-2 underline-offset-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub 저장소</a>
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">TypeScript</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded text-xs">Open Source</span>
                </div>
                <div className="mt-8 text-center"></div>
              </div>
            </div>
            
            <div className="group bg-white/80 dark:bg-slate-800/70 rounded-2xl shadow-lg overflow-hidden ring-1 ring-inset ring-slate-200/60 dark:ring-slate-700/50 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">ChatGPT 구름툴</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  ChatGPT와 연동되는 생산성 확장 프로그램<br/>
                  <a href="https://github.com/gurumnyang/chatgpt-gurum-tool" className="underline decoration-2 underline-offset-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">구름툴 바로가기</a>
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">V3 Manifest</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Javascript</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded text-xs">Open Source</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/80 dark:bg-slate-800/70 rounded-2xl shadow-lg overflow-hidden ring-1 ring-inset ring-slate-200/60 dark:ring-slate-700/50 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">DrabulyTracker</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  드라불리를 효율적으로 추적하는 유튜브 크롤러 GUI
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">JavaScript</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Express</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">Contact</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">언제든지 연락주세요!</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">연락처 정보</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">이메일</p>
                      <p className="text-slate-600 dark:text-slate-300">contact@gurum.cat</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">🐙</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">GitHub</p>
                      <a href="https://github.com/gurumnyang?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        github.com/gurumnyang
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">💬</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Discord 서버</p>
                      <a href="https://discord.gg/M5BkpzThwD" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                        discord.gg/M5BkpzThwD
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">🤖</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">ChatGPT 갤러리</p>
                      <a href="https://gall.dcinside.com/mgallery/board/lists?id=chatgpt" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">
                        ChatGPT 마갤 (주딱)
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-slate-800/70 p-8 rounded-2xl shadow-lg ring-1 ring-inset ring-slate-200/60 dark:ring-slate-700/50">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">메시지 보내기</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">이름</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">이메일</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">메시지</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      placeholder="메시지를 입력하세요"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-lg hover:shadow-blue-600/30"
                  >
                    메시지 보내기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-slate-900 text-white mt-8">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="container mx-auto max-w-6xl px-6 py-8 text-center">
          <p className="text-sm text-white/80">&copy; 2025 gurum.cat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
