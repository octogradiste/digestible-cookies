import json
from statistics import median, mean
import numpy as np

with open("results.json") as f:
    data = json.load(f)


#Time taken to answer
time_banner0 = []
time_banner1 = []
time_banner2 = []

for el in data.keys():
    if data[el]["banner"] == 0:
        time_banner0.append(data[el]["interactions"][-1]["timestamp"]["_seconds"] - data[el]["start"]["_seconds"])
    if data[el]["banner"] == 1:
        time_banner1.append(data[el]["interactions"][-1]["timestamp"]["_seconds"] - data[el]["start"]["_seconds"])
    if data[el]["banner"] == 2:
        time_banner2.append(data[el]["interactions"][-1]["timestamp"]["_seconds"] - data[el]["start"]["_seconds"])

print("times")
print(median(time_banner0))
print(median(time_banner1))
print(median(time_banner2))


ut0 = []
ut1 = []
ut2 = []
#Utility evaluation
for el in data.keys():
    if data[el]["banner"] == 0:
        ut0.append(mean([data[el]["survey"][3]["answer"], 3 + (3 - data[el]["survey"][4]["answer"]),
                         data[el]["survey"][5]["answer"], data[el]["survey"][6]["answer"],
                         data[el]["survey"][7]["answer"], 3 + (3 - data[el]["survey"][8]["answer"]),
                         data[el]["survey"][9]["answer"], 3 + (3 - data[el]["survey"][10]["answer"]),
                         ]))
    if data[el]["banner"] == 1:
        ut1.append(mean([data[el]["survey"][3]["answer"], 3 + (3 - data[el]["survey"][4]["answer"]),
                         data[el]["survey"][5]["answer"], data[el]["survey"][6]["answer"],
                         data[el]["survey"][7]["answer"], 3 + (3 - data[el]["survey"][8]["answer"]),
                         data[el]["survey"][9]["answer"], 3 + (3 - data[el]["survey"][10]["answer"]),
                         ]))    
    if data[el]["banner"] == 2:
        ut2.append(mean([data[el]["survey"][3]["answer"], 3 + (3 - data[el]["survey"][4]["answer"]),
                         data[el]["survey"][5]["answer"], data[el]["survey"][6]["answer"],
                         data[el]["survey"][7]["answer"], 3 + (3 - data[el]["survey"][8]["answer"]),
                         data[el]["survey"][9]["answer"], 3 + (3 - data[el]["survey"][10]["answer"]),
                         ]))
print("usability")        
print(mean(ut0))
print(mean(ut1))
print(mean(ut2))

#understanding
read0 = []
read1 = []
read2 = []

read_test0 = []
read_test1 = []
read_test2 = []

for el in data.keys():
    if data[el]["banner"] == 0:
        read0.append(data[el]["survey"][11]["answer"])
        read_test0.append(mean([np.linalg.norm(1 - data[el]["survey"][12]["answer"]), 
                               np.linalg.norm(5 - data[el]["survey"][13]["answer"]),
                               np.linalg.norm(5 - data[el]["survey"][14]["answer"]),
                               np.linalg.norm(5 - data[el]["survey"][15]["answer"])]))
    if data[el]["banner"] == 1:
        read1.append(data[el]["survey"][11]["answer"])
        read_test1.append(mean([np.linalg.norm(1 - data[el]["survey"][12]["answer"]), 
                               np.linalg.norm(5 - data[el]["survey"][13]["answer"]),
                               np.linalg.norm(5 - data[el]["survey"][14]["answer"]),
                               np.linalg.norm(5 - data[el]["survey"][15]["answer"])]))  
    if data[el]["banner"] == 2:
        read2.append(data[el]["survey"][11]["answer"])
        read_test2.append(mean([np.linalg.norm(1 - data[el]["survey"][12]["answer"]), 
                               np.linalg.norm(5 - data[el]["survey"][13]["answer"]),
                               np.linalg.norm(5 - data[el]["survey"][14]["answer"]),
                               np.linalg.norm(5 - data[el]["survey"][15]["answer"])]))  
print("reading")
print(mean(read0))
print(mean(read1))
print(mean(read2))
print("test reading")
print(5 - mean(read_test0))
print(5 - mean(read_test1))
print(5 - mean(read_test2))