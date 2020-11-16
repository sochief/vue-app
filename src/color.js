export default{
    bind(el,bindings,vnode){
        //when it initialises
        el.style.color = 'red'
    },
    inserted(el,bindings,vnode){
        console.log('inserted')
    },
    update(el,bindings,vnode,oldVnode){
        console.log('update')
    },
    componentUpdated(el,bindings,vnode,oldVnode){
        console.log('component updated')
    },
    unbind(){
        console.log('unbined')
    }
}