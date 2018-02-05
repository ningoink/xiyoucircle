import { addClass, removeClass } from '../commonjs/util'

const controlDropMenuWrapper = () => {
    let status = false
    return function (){
        let args = Array.prototype.slice.call(arguments)
        if (status) {
            args.forEach(item=> {
                removeClass(item.element,  item.willActionClass)
            })
            status = false
        } else {
            args.forEach(item=> {
                addClass(item.element,  item.willActionClass)
            })
            status = true
        }
    }
}

export {
    controlDropMenuWrapper
}