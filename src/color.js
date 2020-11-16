/* eslint-disable */
export default{
    bind(el,binding,vnode){
        console.log('bind')
        // el.style.color = 'blue'
        el.style.color = binding.value
    }
}
/* eslint-enable */