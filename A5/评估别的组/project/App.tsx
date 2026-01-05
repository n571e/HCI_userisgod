import { useState } from 'react';
import { Page1ProblemSolving } from './components/Page1ProblemSolving';
import { Page2AssignmentSubmission } from './components/Page2AssignmentSubmission';
import { Page3CodeReview } from './components/Page3CodeReview';
import { BookOpen, Code2, GraduationCap } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'page1' | 'page2' | 'page3'>('page1');

  const pages = [
    { id: 'page1' as const, icon: Code2, label: '问题解决流程', desc: '智能引导学习' },
    { id: 'page2' as const, icon: BookOpen, label: '作业提交流程', desc: 'AI使用确认' },
    { id: 'page3' as const, icon: GraduationCap, label: '代码审查流程', desc: '项目架构理解' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 顶部导航栏 */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-slate-200">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-xl text-slate-900">智学伴平台</h1>
                <p className="text-sm text-slate-500">AI编程学习助手 - 高保真原型</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <span className="text-sm text-blue-700 font-medium">CS101 - 数据结构</span>
              </div>
            </div>
          </div>
          
          {/* 页面切换标签 */}
          <div className="flex gap-3">
            {pages.map((page) => {
              const Icon = page.icon;
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`
                    flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30' 
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <div className="text-left">
                    <div className="font-medium">{page.label}</div>
                    <div className={`text-xs ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                      {page.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 页面内容 */}
      <div className="pt-40">
        {currentPage === 'page1' && <Page1ProblemSolving />}
        {currentPage === 'page2' && <Page2AssignmentSubmission />}
        {currentPage === 'page3' && <Page3CodeReview />}
      </div>
    </div>
  );
}
