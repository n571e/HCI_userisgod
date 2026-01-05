import { ChevronRight, ChevronDown, FileText, Folder, Check, AlertCircle } from 'lucide-react';

export function Problem2StaticPolicy() {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* 问题标注横幅 */}
      <div className="bg-gray-100 border-b-2 border-black px-6 py-3 flex items-center gap-3">
        <AlertCircle size={20} />
        <span>⚠️ 问题版本：静态政策文本容易被忽略，无交互式确认，学术诚信边界模糊</span>
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
                <span>main.py</span>
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

        {/* 中部作业提交区域 - 50% */}
        <div className="w-1/2 border-r-2 border-black flex flex-col">
          {/* 静态政策文本 - 问题：小字、容易忽略 */}
          <div className="bg-gray-100 border-b border-gray-400 px-4 py-2">
            <div className="text-gray-600">
              AI使用政策：本课程允许使用AI工具进行调试和解释，但不允许直接生成完整代码解决方案。提交时请确保遵守相关规定。
            </div>
          </div>

          <div className="h-10 bg-gray-100 border-b-2 border-black flex items-center px-4">
            <span>作业提交</span>
          </div>
          
          <div className="flex-1 p-8 bg-white">
            {/* 问题标注 */}
            <div className="border-2 border-black bg-gray-100 p-4 mb-6 flex items-start gap-3">
              <AlertCircle size={24} className="flex-shrink-0 mt-1" />
              <div>
                <div className="mb-1">⚠️ 设计问题：静态政策声明</div>
                <div className="text-gray-600">
                  政策以小字显示在页面顶部，没有交互式确认流程。用户容易忽略或误解AI使用规范，导致学术诚信问题。
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-6">
              <div className="border-b-2 border-black pb-3 mb-6">
                作业3：冒泡排序实现
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-300">
                  <Check size={20} className="text-gray-600" />
                  <FileText size={20} className="text-gray-600" />
                  <span>main.py</span>
                  <span className="ml-auto text-gray-600">已完成</span>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b border-gray-300">
                  <Check size={20} className="text-gray-600" />
                  <FileText size={20} className="text-gray-600" />
                  <span>utils.py</span>
                  <span className="ml-auto text-gray-600">已完成</span>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b border-gray-300">
                  <Check size={20} className="text-gray-600" />
                  <FileText size={20} className="text-gray-600" />
                  <span>test.py</span>
                  <span className="ml-auto text-gray-600">已完成</span>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b border-gray-300">
                  <Check size={20} className="text-gray-600" />
                  <FileText size={20} className="text-gray-600" />
                  <span>README.md</span>
                  <span className="ml-auto text-gray-600">已完成</span>
                </div>
              </div>

              <div className="bg-gray-100 border border-black p-4 mb-6">
                <div className="mb-2">提交要求：</div>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>实现冒泡排序算法</li>
                  <li>包含完整的测试用例</li>
                  <li>代码需要有适当的注释</li>
                </ul>
              </div>

              {/* 简单的提交按钮 - 问题：无交互式确认 */}
              <button className="w-full border-2 border-black bg-white px-6 py-4 hover:bg-gray-100">
                提交作业
              </button>

              {/* 小字提示 - 问题：容易被忽略 */}
              <div className="mt-3 text-center text-gray-600">
                提交即表示您已阅读并同意遵守AI使用政策
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
            <div className="flex justify-start">
              <div className="bg-gray-200 border-2 border-black p-3 max-w-[85%]">
                你的代码已经准备好提交了！
              </div>
            </div>

            {/* 缺少AI使用情况的自动记录 */}
            <div className="border-2 border-black bg-white p-3">
              <div className="text-gray-600 mb-2">对话历史</div>
              <div className="space-y-2">
                <div className="text-sm pb-2 border-b border-gray-300">
                  <div className="text-gray-600">15:30</div>
                  <div>如何修复语法错误？</div>
                </div>
                <div className="text-sm pb-2 border-b border-gray-300">
                  <div className="text-gray-600">15:32</div>
                  <div>排序算法优化建议？</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600">15:35</div>
                  <div>测试用例怎么写？</div>
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
