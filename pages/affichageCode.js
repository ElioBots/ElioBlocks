function runCode()
{
    var code = Blockly.Arduino.workspaceToCode(workspace);
    eval(code);
}
