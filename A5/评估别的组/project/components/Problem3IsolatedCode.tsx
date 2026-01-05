import { ChevronRight, ChevronDown, FileText, Folder, AlertCircle } from 'lucide-react';

export function Problem3IsolatedCode() {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* 问题标注横幅 */}
      <div className="bg-gray-100 border-b-2 border-black px-6 py-3 flex items-center gap-3">
        <AlertCircle size={20} />
        <span>⚠️ 问题版本：AI只能看到当前文件，缺乏项目整体架构理解，生成孤立代码片段</span>
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
        {/* 左侧面板 - 20% - 问题：仅显示文件结构，无上下文理解 */}
        <div className="w-1/5 border-r-2 border-black flex flex-col">
          {/* 基础文件树 */}
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
                <span>models.py</span>
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
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-gray-600" />
                <span>README.md</span>
              </div>
            </div>

            {/* 问题：缺少项目上下文面板 */}
            <div className="mt-6 border-2 border-black bg-gray-100 p-3">
              <div className="text-gray-600">
                ⚠️ 缺少项目架构分析
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
            {/* 问题标注 */}
            <div className="mb-4 border-2 border-black bg-gray-100 p-4 flex items-start gap-3 font-sans">
              <AlertCircle size={24} className="flex-shrink-0 mt-1" />
              <div>
                <div className="mb-1">⚠️ 设计问题：孤立代码生成</div>
                <div className="text-gray-600">
                  AI无法理解项目整体架构，生成的代码可能与现有代码风格、模块设计不一致，导致集成困难。
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex">
                <span className="text-gray-400 w-8">1</span>
                <span>from utils import process_data</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">2</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">3</span>
                <span>def main():</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">4</span>
                <span className="ml-8">data = [64, 34, 25, 12, 22]</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">5</span>
                <span className="ml-8"># 需要调用排序函数</span>
              </div>
              <div className="flex bg-yellow-50">
                <span className="text-gray-400 w-8">6</span>
                <span className="ml-8">sorted_data = ???</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-8">7</span>
                <span className="ml-8">print(sorted_data)</span>
              </div>
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
                我需要一个排序函数，应该怎么实现？
              </div>
            </div>

            {/* AI回复 - 问题：孤立的代码建议 */}
            <div className="flex justify-start">
              <div className="bg-gray-200 border-2 border-black p-3 max-w-[85%]">
                <div className="mb-3">
                  你可以使用这个排序函数：
                </div>
                <div className="bg-white border border-black p-3 font-mono text-sm mb-3">
                  <div>def sort_array(arr):</div>
                  <div className="ml-4">return sorted(arr)</div>
                </div>
                <div className="text-gray-600">
                  直接调用Python内置的sorted()函数即可。
                </div>
              </div>
            </div>

            {/* 用户尝试使用 */}
            <div className="flex justify-end">
              <div className="bg-white border-2 border-black p-3 max-w-[80%]">
                好的，我添加到代码里了
              </div>
            </div>

            {/* AI警告 - 问题：事后警告，而非主动理解 */}
            <div className="flex justify-start">
              <div className="bg-gray-200 border-2 border-black p-3 max-w-[85%]">
                <div className="mb-3">
                  代码已添加。请注意：
                </div>
                <div className="bg-white border border-black p-3">
                  <div className="mb-2 text-gray-600">⚠️ 提示</div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>请确保相关函数已实现</li>
                    <li>检查导入路径是否正确</li>
                    <li>注意函数命名一致性</li>
                  </ul>
                </div>
                <div className="mt-3 text-gray-600">
                  如遇到问题请检查项目结构
                </div>
              </div>
            </div>

            {/* 架构不匹配问题 */}
            <div className="border-2 border-black bg-white p-3">
              <div className="mb-2">⚠️ 潜在问题</div>
              <div className="text-gray-600 space-y-2">
                <div className="border-b border-gray-300 pb-2">
                  <div className="mb-1">命名不一致</div>
                  <div className="text-sm">
                    建议函数名可能与项目中已有的bubble_sort()不一致
                  </div>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <div className="mb-1">架构不匹配</div>
                  <div className="text-sm">
                    项目采用MVC模式，AI建议的代码未考虑模块分层
                  </div>
                </div>
                <div>
                  <div className="mb-1">缺少错误处理</div>
                  <div className="text-sm">
                    未检查输入有效性，可能导致运行时错误
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 输入框 */}
          <div className="border-t-2 border-black p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="输入您的问题..."
                className="flex-1 border-2 border-black px-3 py-2"
              />
              <button className="border-2 border-black bg-white px-6 py-2 hover:bg-gray-100">
                发送
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
