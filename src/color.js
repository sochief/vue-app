/* eslint-disable */
export default{
    bind(el,bindings,vnode){
        const arg = bindings.arg
        // el.style.color = 'blue'
        el.style[arg] = bindings.value
    }
}
/* eslint-enable */