/**
 * 小手机 - 逻辑脚本 (JavaScript)
 * 
 * 我们使用的是 Vue 3 的 "Composition API" 写法。
 * 即使没有 Node.js，通过 CDN 引入后，我们也可以使用这种先进的代码组织方式。
 */

// 从 Vue 全局变量中提取我们需要的功能函数
const { createApp, ref, onMounted } = Vue;

// 创建 Vue 应用实例
createApp({
    /**
     * setup 函数是 Vue 3 的逻辑核心。
     * 所有的变量定义和功能函数都写在这里。
     */
    setup() {
        // --- 1. 响应式数据定义 ---
        // 使用 ref() 让数据变成“响应式”，即数据变了，网页上的文字会自动跟着变
        
        // 当前时间字符串，初始值为 00:00
        const currentTime = ref('00:00');
        
        // 当前电量百分比，初始值为 100
        const battery = ref(100);

        // --- 2. 功能函数定义 ---

        /**
         * 获取并格式化当前时间
         * 比如：把 9:5 变成 09:05
         */
        const updateTime = () => {
            const now = new Date();
            // 获取小时并补零
            const hh = String(now.getHours()).padStart(2, '0');
            // 获取分钟并补零
            const mm = String(now.getMinutes()).padStart(2, '0');
            // 更新响应式变量
            currentTime.value = `${hh}:${mm}`;
        };

        /**
         * 获取手机真实的电池电量 (部分现代移动浏览器支持)
         */
        const updateBattery = async () => {
            // 检查浏览器是否支持电池状态 API
            if (navigator.getBattery) {
                try {
                    const b = await navigator.getBattery();
                    // 将 0.88 这种小数转为 88 整数
                    battery.value = Math.floor(b.level * 100);
                    
                    // 监听电量变化事件，如果用户边玩边充，电量会自动更新
                    b.addEventListener('levelchange', () => {
                        battery.value = Math.floor(b.level * 100);
                    });
                } catch (e) {
                    console.log("获取电池信息失败，使用默认值");
                    battery.value = 99;
                }
            } else {
                // 如果浏览器太旧或不支持，显示一个固定的模拟数值
                battery.value = 88;
            }
        };

        // --- 3. 生命周期钩子 ---

        /**
         * onMounted 表示“当网页全部加载并显示在屏幕上时”要执行的操作
         */
        onMounted(() => {
            // 1. 网页一打开就立即显示一次时间
            updateTime();
            
            // 2. 尝试获取一次电量
            updateBattery();
            
            // 3. 开启一个定时器，每隔 1 秒（1000毫秒）重新计算一次时间
            // 这样手机屏幕上的时间就会每一分钟自动跳动
            setInterval(updateTime, 1000);
        });

        // --- 4. 导出数据 ---
        /**
         * 在 setup 的最后，必须返回一个对象。
         * 只有返回了的变量，HTML 模板中才能通过 {{ 变量名 }} 访问到。
         */
        return {
            currentTime,
            battery
        };
    }
}).mount('#app'); // 最后，将这个 Vue 应用挂载到 HTML 中 id="app" 的那个 div 上
