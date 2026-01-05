import { useState } from 'react';
import { ChevronRight, ChevronDown, FileText, Folder, Send, Sparkles, Lightbulb, CheckCircle2, Circle } from 'lucide-react';

export function Page1ProblemSolving() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['src']);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => 
      prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]
    );
  };

  return (
    <div className="h-[calc(100vh-160px)] flex bg-slate-50">
      {/* 左侧面板 */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col shadow-sm">
        {/* 文件树 */}
        <div className="flex-1 border-b border-slate-200">
          <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
            <h3 className="font-semibold text-sm text-slate-700">项目文件树</h3>
          </div>
          <div className="p-3 space-y-1">
            <div>
              <button 
                onClick={() => toggleFolder('src')}
                className="flex items-center gap-2 w-full px-2 py-1.5 rounded hover:bg-slate-100 transition-colors"
              >
                {expandedFolders.includes('src') ? 
                  <ChevronDown size={16} className="text-slate-500" /> : 
                  <ChevronRight size={16} className="text-slate-500" />
                }
                <Folder size={16} className="text-blue-500" />
                <span className="text-sm text-slate-700">src</span>
              </button>
              {expandedFolders.includes('src') && (
                <div className="ml-6 space-y-1 mt-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-blue-50 border border-blue-200">
                    <FileText size={16} className="text-blue-600" />
                    <span className="text-sm text-blue-700 font-medium">main.py</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-100 transition-colors">
                    <FileText size={16} className="text-slate-400" />
                    <span className="text-sm text-slate-600">utils.py</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-100 transition-colors">
                    <FileText size={16} className="text-slate-400" />
                    <span className="text-sm text-slate-600">test.py</span>
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => toggleFolder('data')}
              className="flex items-center gap-2 w-full px-2 py-1.5 rounded hover:bg-slate-100 transition-colors"
            >
              <ChevronRight size={16} className="text-slate-500" />
              <Folder size={16} className="text-yellow-500" />
              <span className="text-sm text-slate-700">data</span>
            </button>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-100 transition-colors">
              <FileText size={16} className="text-slate-400" />
              <span className="text-sm text-slate-600">README.md</span>
            </div>
          </div>
        </div>

        {/* 项目上下文面板 */}
        <div className="flex-1 p-4 bg-gradient-to-b from-white to-slate-50">
          <div className="mb-3">
            <h3 className="font-semibold text-sm text-slate-700 mb-3">项目上下文</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>MVC架构</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>3个核心模型</span>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="text-xs font-semibold text-slate-700 mb-2">核心组件</div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>数据处理模块</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>排序算法</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>测试套件</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 中部代码编辑器 */}
      <div className="flex-1 flex flex-col bg-[#1e1e1e]">
        {/* 标签栏 */}
        <div className="h-10 bg-[#252526] border-b border-[#3e3e42] flex items-center px-2">
          <div className="px-4 py-1.5 bg-[#1e1e1e] text-white text-sm border-t-2 border-blue-500 flex items-center gap-2">
            <FileText size={14} />
            <span>main.py</span>
          </div>
        </div>

        {/* 代码区域 */}
        <div className="flex-1 overflow-auto custom-scrollbar">
          <div className="p-4 font-mono text-sm">
            <div className="space-y-0.5">
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">1</span>
                <span className="text-[#569cd6]">def</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#dcdcaa]">bubble_sort</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#9cdcfe]">arr</span>
                <span className="text-[#d4d4d4]">):</span>
              </div>
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">2</span>
                <span className="text-[#d4d4d4]">    </span>
                <span className="text-[#9cdcfe]">n</span>
                <span className="text-[#d4d4d4]"> = </span>
                <span className="text-[#dcdcaa]">len</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#9cdcfe]">arr</span>
                <span className="text-[#d4d4d4]">)</span>
              </div>
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">3</span>
                <span className="text-[#d4d4d4]">    </span>
                <span className="text-[#569cd6]">for</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#9cdcfe]">i</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#569cd6]">in</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#dcdcaa]">range</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#9cdcfe]">n</span>
                <span className="text-[#d4d4d4]">):</span>
              </div>
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">4</span>
                <span className="text-[#d4d4d4]">        </span>
                <span className="text-[#569cd6]">for</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#9cdcfe]">j</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#569cd6]">in</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#dcdcaa]">range</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#b5cea8]">0</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#9cdcfe]">n</span>
                <span className="text-[#d4d4d4]">-</span>
                <span className="text-[#9cdcfe]">i</span>
                <span className="text-[#d4d4d4]">-</span>
                <span className="text-[#b5cea8]">1</span>
                <span className="text-[#d4d4d4]">):</span>
              </div>
              <div className="flex bg-[#3c1f1e] border-l-2 border-red-500">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">5</span>
                <span className="text-[#d4d4d4]">            </span>
                <span className="text-[#569cd6]">if</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#9cdcfe]">arr</span>
                <span className="text-[#d4d4d4]">[</span>
                <span className="text-[#9cdcfe]">j</span>
                <span className="text-[#d4d4d4]">] &gt; </span>
                <span className="text-[#9cdcfe]">arr</span>
                <span className="text-[#d4d4d4]">[</span>
                <span className="text-[#9cdcfe]">j</span>
                <span className="text-[#d4d4d4]">+</span>
                <span className="text-[#b5cea8]">1</span>
                <span className="text-[#d4d4d4]">]</span>
                <span className="relative ml-2">
                  <span className="text-red-400 underline decoration-wavy">缺少冒号</span>
                </span>
              </div>
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">6</span>
                <span className="text-[#d4d4d4]">                </span>
                <span className="text-[#9cdcfe]">arr</span>
                <span className="text-[#d4d4d4]">[</span>
                <span className="text-[#9cdcfe]">j</span>
                <span className="text-[#d4d4d4]">], </span>
                <span className="text-[#9cdcfe]">arr</span>
                <span className="text-[#d4d4d4]">[</span>
                <span className="text-[#9cdcfe]">j</span>
                <span className="text-[#d4d4d4]">+</span>
                <span className="text-[#b5cea8]">1</span>
                <span className="text-[#d4d4d4]">] = </span>
                <span className="text-[#9cdcfe]">arr</span>
                <span className="text-[#d4d4d4]">[</span>
                <span className="text-[#9cdcfe]">j</span>
                <span className="text-[#d4d4d4]">+</span>
                <span className="text-[#b5cea8]">1</span>
                <span className="text-[#d4d4d4]">], </span>
                <span className="text-[#9cdcfe]">arr</span>
                <span className="text-[#d4d4d4]">[</span>
                <span className="text-[#9cdcfe]">j</span>
                <span className="text-[#d4d4d4]">]</span>
              </div>
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">7</span>
                <span className="text-[#d4d4d4]">    </span>
                <span className="text-[#569cd6]">return</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#9cdcfe]">arr</span>
              </div>
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">8</span>
                <span></span>
              </div>
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">9</span>
                <span className="text-[#9cdcfe]">data</span>
                <span className="text-[#d4d4d4]"> = [</span>
                <span className="text-[#b5cea8]">64</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#b5cea8]">34</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#b5cea8]">25</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#b5cea8]">12</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#b5cea8]">22</span>
                <span className="text-[#d4d4d4]">]</span>
              </div>
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">10</span>
                <span className="text-[#9cdcfe]">result</span>
                <span className="text-[#d4d4d4]"> = </span>
                <span className="text-[#dcdcaa]">bubble_sort</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#9cdcfe]">data</span>
                <span className="text-[#d4d4d4]">)</span>
              </div>
            </div>
            
            {/* 错误提示 */}
            <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✕</span>
                </div>
                <div>
                  <div className="text-red-400 font-semibold mb-1">SyntaxError: Line 5</div>
                  <div className="text-red-300 text-sm">invalid syntax - 缺少冒号</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧AI助手面板 */}
      <div className="w-96 bg-white border-l border-slate-200 flex flex-col shadow-xl">
        {/* 头部 */}
        <div className="h-14 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center px-4 shadow-md">
          <Sparkles className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-semibold">智学伴AI助手</span>
        </div>

        {/* 标签页 */}
        <div className="flex border-b border-slate-200 bg-slate-50">
          <button className="px-6 py-3 bg-white text-blue-600 font-medium border-b-2 border-blue-600 transition-colors">
            对话
          </button>
          <button className="px-6 py-3 text-slate-500 hover:bg-white hover:text-slate-700 transition-colors">
            审查
          </button>
        </div>

        {/* 对话区域 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-gradient-to-b from-white to-slate-50">
          {/* 用户提问 */}
          <div className="flex justify-end animate-slide-in">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-md">
              我的排序代码为什么报错？
            </div>
          </div>

          {/* AI回复 */}
          <div className="flex justify-start animate-slide-in">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 max-w-[90%] shadow-sm">
              <div className="mb-4 text-slate-700">
                让我们一起思考这个问题。我注意到第5行有语法错误。
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-900">引导问题</span>
                </div>
                <div className="text-amber-800">
                  你觉得这一行缺少了什么语法元素？
                </div>
              </div>
              
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-4 py-2.5 font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                {showAnswer ? '隐藏答案' : '显示答案'}
              </button>
            </div>
          </div>

          {/* 答案展开 */}
          {showAnswer && (
            <div className="flex justify-start animate-slide-in">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl rounded-tl-sm p-4 max-w-[90%] shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-green-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">答案解析</span>
                </div>
                
                <p className="mb-4 text-slate-700">
                  Python的if语句后面需要冒号(:)。第5行应该写成：
                </p>
                
                <div className="bg-[#1e1e1e] rounded-lg p-3 font-mono text-sm mb-4 border border-slate-700">
                  <span className="text-[#569cd6]">if</span>
                  <span className="text-[#d4d4d4]"> </span>
                  <span className="text-[#9cdcfe]">arr</span>
                  <span className="text-[#d4d4d4]">[</span>
                  <span className="text-[#9cdcfe]">j</span>
                  <span className="text-[#d4d4d4]">] &gt; </span>
                  <span className="text-[#9cdcfe]">arr</span>
                  <span className="text-[#d4d4d4]">[</span>
                  <span className="text-[#9cdcfe]">j</span>
                  <span className="text-[#d4d4d4]">+</span>
                  <span className="text-[#b5cea8]">1</span>
                  <span className="text-[#d4d4d4]">]</span>
                  <span className="text-[#10b981]">:</span>
                </div>

                {/* 即时微练习 */}
                <div className="border-t-2 border-green-300 pt-4 mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                      🎯
                    </div>
                    <span className="font-semibold text-slate-800">即时微练习</span>
                  </div>
                  
                  <div className="mb-3 text-sm text-slate-700">
                    以下哪个是Python中正确的条件语句？
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { id: 'A', text: 'if x > 5', correct: false },
                      { id: 'B', text: 'if x > 5:', correct: true },
                      { id: 'C', text: 'if (x > 5)', correct: false },
                      { id: 'D', text: 'if x > 5 then:', correct: false }
                    ].map((option) => {
                      const isSelected = selectedAnswer === option.id;
                      const showResult = isSelected && option.correct;
                      
                      return (
                        <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                          <div 
                            onClick={() => setSelectedAnswer(option.id)}
                            className={`
                              w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                              ${isSelected 
                                ? showResult 
                                  ? 'border-green-500 bg-green-500' 
                                  : 'border-blue-500 bg-blue-500'
                                : 'border-slate-300 group-hover:border-blue-400'
                              }
                            `}
                          >
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                          <span className={`
                            text-sm transition-colors
                            ${showResult ? 'text-green-700 font-semibold' : 'text-slate-700'}
                          `}>
                            {option.id}. {option.text}
                            {showResult && ' ✓'}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 输入框 */}
        <div className="border-t border-slate-200 p-4 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="输入您的问题..."
              className="flex-1 border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-6 py-2.5 hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
