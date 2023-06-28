from browser import document as doc, window as win
import sys


def get_attack():
    return 1

def safe():
    return 1

editor = win.ace.edit("editor");
editor.setTheme("ace/theme/xcode");
editor.session.setMode("ace/mode/python");
editor.setFontSize(13);
editor.setHighlightActiveLine(False);

win.ace.require("ace/ext/language_tools");
editor.setOptions({
    "enableBasicAutocompletion": True,
    "enableSnippets": True,
    "enableLiveAutocompletion": True
});




res = win.ace.edit("show1");
res.setTheme("ace/theme/xcode");
res.session.setMode("ace/mode/powershell");
res.setFontSize(25);


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



def run1(event):            
    RedirectStd() 
    exec(editor.getValue()) 



doc["button1"].bind("click", run1) 


