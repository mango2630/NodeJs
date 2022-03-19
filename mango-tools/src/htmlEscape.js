// 转义html的方法
function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g, (match)=>{
        switch (match) {
            case '<':
                return '$lt'
            case '>':
                return '$gt'
            case '"':
                return '$quot'
            case '&':
                return '$amp'
            default:
                break;
        }
    })
}

module.exports = {
    htmlEscape
}