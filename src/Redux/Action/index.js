/*
在ActionCreator里面完成数据的获取与处理的工作。并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
 */
export const Increment = 'increment'
export const Decrement = 'decrement'

export const increment = (opts) => ({
    type: Increment,
    opts
}
)
export const decrement = (opts) => ({
    type: Decrement,
    opts
})
