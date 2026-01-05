import { useState } from 'react';
import { ChevronRight, ChevronDown, FileText, Folder, CheckCircle2, AlertTriangle, Send, Sparkles, Download, FileSearch, TrendingUp } from 'lucide-react';

export function Page3CodeReview() {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['src']);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => 
      prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]
    );
  };

  const reviewItems = [
    {
      title: '架构一致性',
      status: 'good',
      icon: CheckCircle2,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: '代码结构符合MVC模式，模块划分清晰',
      score: 95
    },
    {
      title: '性能',
      status: 'warning',
      icon: AlertTriangle,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      description: '冒泡排序时间复杂度O(n²)，对于大数据集可考虑快速排序',
      suggestion: '添加提前终止优化',
      score: 70
    },
    {
      title: '代码可读性',
      status: 'good',
      icon: CheckCircle2,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: '变量命名清晰，逻辑易于理解',
      score: 92
    },
    {
      title: '测试覆盖',
      status: 'good',
      icon: CheckCircle2,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: '包含基本测试用例，覆盖主要功能',
      score: 85
    },
    {
      title: '文档完整性',
      status: 'warning',
      icon: AlertTriangle,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      description: '建议添加函数文档字符串(docstring)',
      score: 68
    }
  ];

  const overallScore = Math.round(reviewItems.reduce((acc, item) => acc + item.score, 0) / reviewItems.length);

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
              <div className="flex bg-[#2d2a1e] border-l-2 border-amber-500">
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
                <span className="text-[#d4d4d4]">]:</span>
              </div>
              <div className="flex bg-[#2d2a1e] border-l-2 border-amber-500">
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
              <div className="flex hover:bg-[#2a2d2e] transition-colors">
                <span className="text-[#858585] w-12 text-right pr-4 select-none">11</span>
                <span className="text-[#dcdcaa]">print</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#9cdcfe]">result</span>
                <span className="text-[#d4d4d4]">)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧AI审查面板 */}
      <div className="w-96 bg-white border-l border-slate-200 flex flex-col shadow-xl">
        {/* 头部 */}
        <div className="h-14 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center px-4 shadow-md">
          <Sparkles className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-semibold">智学伴AI助手</span>
        </div>

        {/* 标签页 */}
        <div className="flex border-b border-slate-200 bg-slate-50">
          <button className="px-6 py-3 text-slate-500 hover:bg-white hover:text-slate-700 transition-colors">
            对话
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 font-medium border-b-2 border-blue-600 transition-colors">
            审查
          </button>
        </div>

        {/* 审查报告区域 */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-gradient-to-b from-white to-slate-50">
          <div className="space-y-4">
            {/* 标题 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FileSearch className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">代码质量审查报告</h3>
                  <p className="text-sm text-blue-100">基于项目架构分析</p>
                </div>
              </div>
            </div>

            {/* 审查项目 */}
            <div className="space-y-3">
              {reviewItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className={`${item.bgColor} border ${item.borderColor} rounded-xl p-4 transition-all hover:shadow-md`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Icon size={18} className={item.iconColor} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-slate-800">{item.title}</span>
                          <span className={`text-sm font-bold ${item.iconColor}`}>{item.score}%</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                        {item.suggestion && (
                          <div className="mt-2 p-2 bg-white/70 rounded-lg border border-current/20">
                            <div className="text-xs font-semibold text-slate-700 mb-1">💡 建议</div>
                            <div className="text-xs text-slate-600">{item.suggestion}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* 进度条 */}
                    <div className="mt-3 h-1.5 bg-white/70 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.iconColor.replace('text', 'bg')} transition-all duration-500`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 总体评分 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">总体评分</span>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  B+
                </div>
              </div>
              
              <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden mb-2">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                  style={{ width: `${overallScore}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse-subtle"></div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">得分</span>
                <span className="text-blue-300 font-semibold">{overallScore}/100</span>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="space-y-2 pt-2">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-4 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <FileSearch className="w-5 h-5" />
                查看详细报告
              </button>
              <button className="w-full bg-white border-2 border-slate-200 text-slate-700 rounded-xl px-4 py-3 font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                导出审查结果
              </button>
            </div>
          </div>
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
