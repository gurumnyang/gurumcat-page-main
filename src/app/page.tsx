import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800 dark:text-white">
            gurum.cat
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6">
        <section className="text-center py-20">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Image
              src="/profile.png"
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full object-cover"
              priority
              />
            </div>
            <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-4">
              안녕하세요, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">구름냥</span>입니다
            </h1>
            <div className="flex flex-col items-center gap-2 mb-2">
              <span className="text-base text-slate-500 dark:text-slate-300">대한민국 🇰🇷 | MBTI: ENFP</span>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              디시인사이드 챗지피티 갤러리 주딱<br/>
              오픈소스 프로젝트 <a href="https://github.com/gurumnyang/dcinside.js" className="underline text-blue-600 dark:text-blue-400" target="_blank" rel="noopener noreferrer">dcinside.js</a> 등 다양한 개발 활동을 하고 있습니다.<br/>
            </p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              연락하기
            </a>
            <a
              href="https://coff.ee/dccat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              후원
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">저에 대해 더 알아보세요</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">소개</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                diepAPI, Youtube.js 등에 기여하고 있으며, dcinside.js를 개발하였습니다. 또한 2025년부터 디시인사이드 ChatGPT 마이너 갤러리 2대 주딱으로 활동하고 있습니다.
                
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">핵심 가치</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600 dark:text-slate-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  사용자 경험 최우선
                </li>
                <li className="flex items-center text-slate-600 dark:text-slate-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  깔끔하고 읽기 쉬운 코드
                </li>
                <li className="flex items-center text-slate-600 dark:text-slate-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  지속적인 학습과 성장
                </li>
                <li className="flex items-center text-slate-600 dark:text-slate-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  팀워크와 소통
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Skills</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">보유하고 있는 기술 스택</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">NestJS</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">OpenAPI</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
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
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">진행한 주요 프로젝트들</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">dcinside.js</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  디시인사이드 크롤러 라이브러리<br/>
                  <a href="https://github.com/gurumnyang/dcinside.js" className="underline text-blue-600 dark:text-blue-400" target="_blank" rel="noopener noreferrer">GitHub 저장소</a>
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">TypeScript</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded text-xs">Open Source</span>
                </div>
                <div className="mt-8 text-center">
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">ChatGPT 구름툴</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  ChatGPT와 연동되는 생산성 확장 프로그램<br/>
                  <a href="https://github.com/gurumnyang/chatgpt-gurum-tool" className="underline text-blue-600 dark:text-blue-400" target="_blank" rel="noopener noreferrer">구름툴 바로가기</a>
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">V3 Manifest</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Javascript</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded text-xs">Open Source</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">DrabulyTracker</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  드라불리를 효율적으로 추적하는 유튜브 크롤러 GUI
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">JavaScript</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Express</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Contact</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">언제든지 연락주세요!</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
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
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">🐙</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">GitHub</p>
                      <p className="text-slate-600 dark:text-slate-300">github.com/gurumnyang</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">메시지 보내기</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">이름</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">이메일</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">메시지</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-slate-700 dark:text-white"
                      placeholder="메시지를 입력하세요"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
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
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 gurum.cat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
