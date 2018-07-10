from flask import Flask, render_template
import glob
import random
import os

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__)

clusters = []

def load_clusters():
    add1 = ROOT_DIR + "/static/img/clusters/*"
    temp1 = glob.glob(add1)
    print(temp1)
    temp2 = []

    for i in temp1:
        i = i + "\*.jpg"
        temp2.append(i.replace("\\", "/"))
    print(temp2)
    temp3 = []

    for i in temp2:
        temp3.append(glob.glob(i))
    print(temp3)

    for i in temp3:
        lol = []
        for j in i:
            lol.append(j.replace("\\", "/"))
        clusters.append(lol)

load_clusters()

numbers = random.sample(range(0, len(clusters)-1), 2)

@app.route('/')
@app.route('/index.html')
def index():
    return render_template("index.html")


@app.route('/pipeline11.html')
def pipeline11():
    num = numbers[0]
    return render_template("pipeline1.html", temp=clusters, temp_len=len(clusters), temp_num=num, flag_imp=0)

@app.route('/pipeline12.html')
def pipeline12():
    num = numbers[1]
    return render_template("pipeline1.html", temp=clusters, temp_len=len(clusters), temp_num=num, flag_imp=1)


@app.route('/processing.html')
def processing():
    return render_template("processing.html")


@app.route('/pipeline2.html')
def pipeline2():
    temp1 = glob.glob("static\img\clusters_final\*")
    temp = []
    for i in temp1:
        temp.append(i.replace("\\", "/"))
    return render_template("pipeline2.html", temp=temp)


if __name__ == "__main__":
    app.run(host='0.0.0.0', threaded=True)
