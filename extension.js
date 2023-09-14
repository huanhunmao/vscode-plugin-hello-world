const vscode  = require("vscode");

/**
 * 插件被激活时触发，代码入口
 * @param {*} context 插件上下文
 */
const activate = function(context){
    console.log('active !');
    // 注册

    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', function(){
        vscode.window.showInformationMessage('Hello World Vscode , I am Marxu !')
    }))
}

const deactivate = function(){
    console.log('deactivated ...');
}

module.exports = {
    activate,
    deactivate
}