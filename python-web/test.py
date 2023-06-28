# -*- coding: utf-8 -*-
# __author__="张功挺"
from flask import *
from flask import Flask
#初始化app
app=Flask(__name__)	 







#建立路由
@app.route('/',methods=['GET','POST'])	
def hello():
	if(request.method=='GET'):
		return render_template('index.html')
	elif(request.method=='POST'):
		code=request.form.get("code")

	print(code)
	return "Get the post"

@app.route('/index',methods=['GET','POST'])	
def index():
	if(request.method=='GET'):
		return render_template('index.html')
	elif(request.method=='POST'):
		code=request.form.get("code")

	print(code)
	return "Get the post"





@app.route('/task1',methods=['GET','POST'])	
def task1():
	if(request.method=='GET'):
		return render_template('task1.html')
	elif(request.method=='POST'):
		code=request.form.get("code")

	print(code)
	return "Get the post"



@app.route('/task2',methods=['GET','POST'])	
def task2():
	if(request.method=='GET'):
		return render_template('task2.html')
	elif(request.method=='POST'):
		code=request.form.get("code")

	print(code)
	return "Get the post"



@app.route('/task3',methods=['GET','POST'])	
def task3():
	if(request.method=='GET'):
		return render_template('task3.html')
	elif(request.method=='POST'):
		code=request.form.get("code")

	print(code)
	return "Get the post"




#task4
@app.route('/task4',methods=['GET','POST'])	
def task4():
	if(request.method=='GET'):
		return render_template('task4.html')
	elif(request.method=='POST'):
		code=request.form.get("code")

	print(code)
	return "Get the post"


#task5
@app.route('/task5',methods=['GET','POST'])	
def task5():
	if(request.method=='GET'):
		return render_template('task5.html')
	elif(request.method=='POST'):
		code=request.form.get("code")

	print(code)
	return "Get the post"




#测试路由范例
@app.route('/run_python',methods=['GET','POST'])
def run_python():
	if(request.method=='GET'):
		return "测试界面"
	elif(request.method=='POST'):
		code = request.form.get('code')
		try:
			result = eval(code)
		except:
			return "您输入的有错误!"
		else:
			return str(result)

#定义判断数据奇偶性路由
@app.route('/single_or_double',methods=['GET','POST'])
def single_or_double():
	if(request.method=='GET'):
		return "测试界面"
	elif(request.method=='POST'):
		code = request.form.get('code')
		try:
			result = float(code)%2
			if result == 1:
				return "您输入的是奇数！"
			elif result == 0:
				return "您输入的是偶数！"
			else:
				return "您输入的不是整数！"
		except:
			return "您输入的有错误!"
		else:
			return str(result)

#运行app
if __name__ == '__main__':
	app.run(debug=True)	