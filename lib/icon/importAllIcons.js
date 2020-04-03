//一次性引入虽然方便，但无法使用tree-shaking技术（去掉没有使用的依赖，例如import{A}from'./a',会将a中没用到的依赖去掉，只留下A）优化
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('../icons', true, /\.svg$/))
} catch(error){
    // console.log(error)
}