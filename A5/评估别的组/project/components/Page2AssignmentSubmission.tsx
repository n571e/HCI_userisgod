import { useState } from 'react';
import { ChevronRight, ChevronDown, FileText, Folder, Check, Send, Sparkles, FileCheck, AlertCircle, Info } from 'lucide-react';

export function Page2AssignmentSubmission() {
  const [showModal, setShowModal] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['src']);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => 
      prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]
    );
  };

  const getSliderLabel = (value: number) => {
    if (value < 25) return { text: '禁止', color: 'text-red-600', bg: 'bg-red-100' };
    if (value < 50) return { text: '仅调试', color: 'text-amber-600', bg: 'bg-amber-100' };
    if (value < 75) return { text: '允许协作', color: 'text-blue-600', bg: 'bg-blue-100' };
    return { text: '鼓励创新', color: 'text-purple-600', bg: 'bg-purple-100' };
  };

  const currentLabel = getSliderLabel(sliderValue);

  return (
    <div className="h-[calc(100vh-160px)] flex bg-slate-50 relative">
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
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-100 transition-colors">
                    <FileText size={16} className="text-slate-400" />
                    <span className="text-sm text-slate-600">main.py</span>
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
                  <Check size={14} className="text-green-500" />
                  <span>数据处理模块</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Check size={14} className="text-green-500" />
                  <span>排序算法</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Check size={14} className="text-green-500" />
                  <span>测试套件</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 中部作业提交区域 */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="h-14 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 flex items-center px-6 shadow-sm">
          <FileCheck className="w-5 h-5 text-blue-600 mr-2" />
          <span className="font-semibold text-slate-700">作业提交</span>
        </div>
        
        <div className="flex-1 overflow-auto custom-scrollbar p-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">作业3：冒泡排序实现</h2>
                  <p className="text-sm text-slate-500">CS101 - 数据结构</p>
                </div>
              </div>

              {/* 文件列表 */}
              <div className="space-y-3 mb-8">
                {[
                  { name: 'main.py', size: '2.4 KB' },
                  { name: 'utils.py', size: '1.8 KB' },
                  { name: 'test.py', size: '3.2 KB' },
                  { name: 'README.md', size: '1.1 KB' }
                ].map((file) => (
                  <div key={file.name} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <FileText className="w-5 h-5 text-slate-400" />
                    <div className="flex-1">
                      <div className="font-medium text-slate-700">{file.name}</div>
                      <div className="text-xs text-slate-500">{file.size}</div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      已完成
                    </span>
                  </div>
                ))}
              </div>

              {/* 提交要求 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">提交要求</span>
                </div>
                <ul className="space-y-2">
                  {[
                    '实现冒泡排序算法',
                    '包含完整的测试用例',
                    '代码需要有适当的注释',
                    '确认AI使用政策'
                  ].map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-blue-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 提交按钮 */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-6 py-4 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FileCheck className="w-5 h-5" />
                提交作业
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧AI助手面板 */}
      <div className="w-96 bg-white border-l border-slate-200 flex flex-col shadow-xl">
        <div className="h-14 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center px-4 shadow-md">
          <Sparkles className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-semibold">智学伴AI助手</span>
        </div>

        <div className="flex border-b border-slate-200 bg-slate-50">
          <button className="px-6 py-3 bg-white text-blue-600 font-medium border-b-2 border-blue-600 transition-colors">
            对话
          </button>
          <button className="px-6 py-3 text-slate-500 hover:bg-white hover:text-slate-700 transition-colors">
            审查
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-gradient-to-b from-white to-slate-50">
          <div className="flex justify-start animate-slide-in">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-slate-700 mb-2">
                    你的代码已经准备好提交了！
                  </div>
                  <div className="text-sm text-slate-500">
                    记得确认AI使用政策哦 📝
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

      {/* AI使用确认模态弹窗 */}
      {showModal && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-slide-in">
          <div className="bg-white rounded-2xl w-[600px] max-w-[90%] shadow-2xl overflow-hidden">
            {/* 弹窗标题 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">AI使用确认</h3>
                <p className="text-blue-100 text-sm">学术诚信声明</p>
              </div>
            </div>

            {/* 弹窗内容 */}
            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-900">
                    请根据课程政策确认AI使用情况。诚实申报AI使用程度是学术诚信的重要体现。
                  </p>
                </div>
              </div>

              {/* 刻度盘 */}
              <div className="space-y-4">
                <div className="font-semibold text-slate-800">
                  选择AI使用程度
                </div>
                
                {/* 刻度标签 */}
                <div className="flex justify-between px-1 text-xs text-slate-500">
                  <span>禁止</span>
                  <span>仅调试</span>
                  <span>允许协作</span>
                  <span>鼓励创新</span>
                </div>

                {/* 滑块 */}
                <div className="relative px-1">
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                      style={{ width: `${sliderValue}%` }}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-blue-500 rounded-full shadow-lg transition-all duration-300 ease-out"
                    style={{ left: `calc(${sliderValue}% - 12px)` }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse-subtle"></div>
                  </div>
                </div>

                {/* 当前选择 */}
                <div className={`${currentLabel.bg} border border-current rounded-xl p-4 text-center transition-all`}>
                  <div className="text-sm text-slate-600 mb-1">当前选择</div>
                  <div className={`text-2xl font-bold ${currentLabel.color}`}>
                    {currentLabel.text}
                  </div>
                </div>
              </div>

              {/* AI协作使用说明 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-sm font-semibold text-slate-700 mb-3">等级说明</div>
                <div className="space-y-2">
                  {[
                    { level: '禁止', desc: '未使用AI辅助工具', color: 'bg-red-100 text-red-700' },
                    { level: '仅调试', desc: 'AI帮助查找和修复错误', color: 'bg-amber-100 text-amber-700' },
                    { level: '允许协作', desc: 'AI提供代码建议和优化', color: 'bg-blue-100 text-blue-700' },
                    { level: '鼓励创新', desc: '充分利用AI探索新方法', color: 'bg-purple-100 text-purple-700' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`px-2 py-1 rounded font-medium text-xs ${item.color}`}>
                        {item.level}
                      </div>
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 按钮 */}
              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 border-2 border-slate-300 text-slate-700 rounded-xl px-6 py-3 font-semibold hover:bg-slate-50 transition-all"
                >
                  取消
                </button>
                <button className="flex-1 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-xl px-6 py-3 font-semibold hover:from-blue-100 hover:to-purple-100 transition-all">
                  生成协作报告
                </button>
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-6 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  确认并提交
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
