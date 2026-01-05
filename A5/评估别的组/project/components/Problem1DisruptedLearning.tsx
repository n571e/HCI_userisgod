import { useState } from 'react';
import { ChevronRight, ChevronDown, FileText, Folder, AlertCircle } from 'lucide-react';

export function Problem1DisruptedLearning() {
  const [showPracticePage, setShowPracticePage] = useState(false);

  if (showPracticePage) {
    return (
      <div className="h-screen flex flex-col bg-white">
        {/* 独立练习页面 - 问题：流程被中断 */}
        <div className="h-12 bg-gray-100 border-b-2 border-black flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowPracticePage(false)}
              className="border border-black px-3 py-1 bg-white hover:bg-gray-100"
            >
              ← 返回
            </button>
            <span>知识巩固练习</span>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto">
          {/* 问题标注 */}
          <div className="border-2 border-black bg-gray-100 p-4 mb-6 flex items-start gap-3">
            <AlertCircle size={24} className="flex-shrink-0 mt-1" />
            <div>
              <div className="mb-1">⚠️ 设计问题：中断式学习流程</div>
              <div className="text-gray-600">
                用户必须离开当前代码环境，跳转到完全独立的页面进行练习。学习上下文被打断，降低学习效率。
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto border-2 border-black p-6">
            <div className="border-b-2 border-black pb-3 mb-6">
              练习题：Python条件语句
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-3">1. 以下哪个是Python中正确的条件语句？</div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="q1" className="w-4 h-4" />
                    <span>A. if x &gt; 5</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="q1" className="w-4 h-4" />
                    <span>B. if x &gt; 5:</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="q1" className="w-4 h-4" />
                    <span>C. if (x &gt; 5)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="q1" className="w-4 h-4" />
                    <span>D. if x &gt; 5 then:</span>
                  </label>
                </div>
              </div>

              <div>
                <div className="mb-3">2. 冒号在Python中的作用是什么？</div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="q2" className="w-4 h-4" />
                    <span>A. 结束语句</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="q2" className="w-4 h-4" />
                    <span>B. 表示代码块开始</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="q2" className="w-4 h-4" />
                    <span>C. 分隔变量</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="q2" className="w-4 h-4" />
                    <span>D. 无特殊作用</span>
                  </label>
                </div>
              </div>

              <button className="w-full border-2 border-black bg-white px-6 py-3 hover:bg-gray-100 mt-6">
                提交答案
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* 问题标注横幅 */}
      <div className="bg-gray-100 border-b-2 border-black px-6 py-3 flex items-center gap-3">
        <AlertCircle size={20} />
        <span>⚠️ 问题版本：AI直接提供完整答案，知识巩固需跳转到独立页面，学习流程被中断</span>
      </div>

      {/* 顶部状态栏 */}
      <div className="h-12 bg-gray-100 border-b-2 border-black flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <span className="border border-black px-3 py-1 bg-white">CS101 - 数据结构</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">AI使用等级：</span>
          <span className="border border-black px-3 py-1 bg-white">允许调试与解释</span>
        </div>
      </div>

      {/* 主工作区 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 左侧面板 - 20% */}
        <div className="w-1/5 border-r-2 border-black flex flex-col">
          {/* 项目文件树 */}
          <div className="flex-1 p-4">
            <div className="border-b border-black pb-2 mb-3">项目文件树</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ChevronDown size={16} className="text-gray-600" />
                <Folder size={16} className="text-gray-600" />
                <span>src/</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <FileText size={16} className="text-gray-600" />
                <span className="bg-gray-200 px-2">main.py</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <FileText size={16} className="text-gray-600" />
                <span>utils.py</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <FileText size={16} className="text-gray-600" />
                <span>test.py</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={16} className="text-gray-600" />
                <Folder size={16} className="text-gray-600" />
                <span>data/</span>
              </div>
            </div>
          </div>
        </div>

        {/* 中部代码编辑器 - 50% */}
        <div className="w-1/2 border-r-2 border-black flex flex-col">
          <div className="h-10 bg-gray-100 border-b-2 border-black flex items-center px-4">
            <span>main.py</span>
          </div>
          <div className="flex-1 p-4 font-mono bg-white">
            <div className="space-y-1">
              <div className="flex">
                <span className="text-gray-400 w-8">1</span>
                <span>def bubble_sort(arr):</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">2</span>
                <span className="ml-8">n = len(arr)</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">3</span>
                <span className="ml-8">for i in range(n):</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">4</span>
                <span className="ml-16">for j in range(0, n-i-1):</span>
              </div>
              <div className="flex bg-red-50">
                <span className="text-gray-400 w-8">5</span>
                <span className="ml-24 text-red-600">if arr[j] &gt; arr[j+1]</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">6</span>
                <span className="ml-32">arr[j], arr[j+1] = arr[j+1], arr[j]</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">7</span>
                <span className="ml-8">return arr</span>
              </div>
            </div>
            
            {/* 错误提示 */}
            <div className="mt-4 border-2 border-red-600 bg-red-50 p-3">
              <div className="text-red-600">SyntaxError: Line 5</div>
              <div className="text-gray-600 mt-1">invalid syntax</div>
            </div>
          </div>
        </div>

        {/* 右侧AI助手面板 - 30% */}
        <div className="w-[30%] flex flex-col bg-gray-50">
          <div className="h-10 bg-gray-100 border-b-2 border-black flex items-center px-4">
            <span>AI助手</span>
          </div>

          {/* 对话区域 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* 用户提问 */}
            <div className="flex justify-end">
              <div className="bg-white border-2 border-black p-3 max-w-[80%]">
                我的排序代码为什么报错？
              </div>
            </div>

            {/* AI回复 - 直接给完整答案 */}
            <div className="flex justify-start">
              <div className="bg-gray-200 border-2 border-black p-3 max-w-[85%]">
                <div className="mb-3">
                  你的代码第5行缺少冒号。Python的if语句后面必须有冒号(:)。
                </div>
                <div className="bg-white border border-black p-2 font-mono mb-3">
                  if arr[j] &gt; arr[j+1]:
                </div>
                <div className="mb-2">修改后的完整代码：</div>
                <div className="bg-white border border-black p-2 font-mono text-sm">
                  <div>def bubble_sort(arr):</div>
                  <div className="ml-4">n = len(arr)</div>
                  <div className="ml-4">for i in range(n):</div>
                  <div className="ml-8">for j in range(0, n-i-1):</div>
                  <div className="ml-12">if arr[j] &gt; arr[j+1]:</div>
                  <div className="ml-16">arr[j], arr[j+1] = arr[j+1], arr[j]</div>
                  <div className="ml-4">return arr</div>
                </div>
                <div className="mt-3 text-gray-600">
                  这样就可以正常运行了！
                </div>
              </div>
            </div>
          </div>

          {/* 独立的练习按钮 - 问题：需要跳转 */}
          <div className="border-t-2 border-black p-4 bg-white">
            <div className="border-2 border-black bg-gray-100 p-3 mb-3">
              <div className="mb-2">💡 建议巩固知识</div>
              <div className="text-gray-600">
                已解决问题，建议完成相关练习
              </div>
            </div>
            <button 
              onClick={() => setShowPracticePage(true)}
              className="w-full border-2 border-black bg-white px-6 py-3 hover:bg-gray-100"
            >
              生成巩固练习 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}