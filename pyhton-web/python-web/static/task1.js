from browser import document as doc, window as win
import sys

editor = win.ace.edit("editor");
editor.setTheme("ace/theme/xcode");
editor.session.setMode("ace/mode/python");
editor.setFontSize(20);
editor.setHighlightActiveLine(False);

win.ace.require("ace/ext/language_tools");
editor.setOptions({
    "enableBasicAutocompletion": True,
    "enableSnippets": True,
    "enableLiveAutocompletion": True
});

editor2 = win.ace.edit("editor2");
editor2.setTheme("ace/theme/xcode");
editor2.session.setMode("ace/mode/python");
editor2.setFontSize(20);
editor2.setHighlightActiveLine(False);

win.ace.require("ace/ext/language_tools");
editor2.setOptions({
    "enableBasicAutocompletion": True,
    "enableSnippets": True,
    "enableLiveAutocompletion": True
});



res = win.ace.edit("show1");
res.setTheme("ace/theme/xcode");
res.session.setMode("ace/mode/powershell");
res.setFontSize(25);

res2 = win.ace.edit("show2");
res2.setTheme("ace/theme/xcode");
res2.session.setMode("ace/mode/powershell");
res2.setFontSize(25);  


#like-file 重定向后 会执行 write 方法，截取文本到 res
class RedirectStd:
    def __init__(self, MAX=1024):
        sys.stdout = self
        sys.stderr = self
        self.MAX = MAX  
        self.text = ''

    def write(self, text):
        m = len(self.text)
        n = len(text)
        if m > self.MAX:
            self.text = self.text[n:]
        self.text += text
        # 刷新 res 内容
        res.setValue(self.text)

class RedirectStd2:
    def __init__(self, MAX=1024):
        sys.stdout = self
        sys.stderr = self
        self.MAX = MAX  
        self.text = ''

    def write(self, text):
        m = len(self.text)
        n = len(text)
        if m > self.MAX:
            self.text = self.text[n:]
        self.text += text
        # 刷新 res 内容
        res2.setValue(self.text)

def run1(event):
    RedirectStd()
    exec(editor.getValue()) 


def run2(event):            
    RedirectStd2()
    exec(editor2.getValue()) 


doc["button1"].bind("click", run1) 

doc["button2"].bind("click", run2) 