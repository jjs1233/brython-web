i = 3
target = 0
while i < 101:
    for j in range(2,i):
        if i % j == 0:
            target = 1
    if target != 1:
        print(i,"是质数")
    target = 0    
    i = i + 1
print(i)