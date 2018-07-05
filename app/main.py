from flask import Flask, render_template
import glob
import random

app = Flask(__name__)
clusters = []


def load_clusters():
    temp1 = glob.glob("static\img\clusters\*")
    # print(temp1)
    temp2 = []

    for i in temp1:
        i = i + "\*.jpg"
        temp2.append(i.replace("\\", "/"))
    # print(temp2)
    temp3 = []

    for i in temp2:
        temp3.append(glob.glob(i))
    # print(temp3)

    for i in temp3:
        lol = []
        for j in i:
            lol.append(j.replace("\\", "/"))
        clusters.append(lol)


load_clusters()


@app.route('/')
@app.route('/index.html')
def index():
    return render_template("index.html")


@app.route('/pipeline1.html')
def pipeline1():
    num = random.randint(0, len(clusters)-1)
    return render_template("pipeline1.html", temp=clusters, temp_len=len(clusters), temp_num=num)


@app.route('/processing.html')
def processing():
    js = open("static\\js\\basic.js", "r")
    print(js.read())
    return render_template("processing.html")


@app.route('/pipeline2.html')
def pipeline2():
    temp1 = glob.glob("static\img\clusters_final\*")
    temp = []
    for i in temp1:
        temp.append(i.replace("\\", "/"))
    return render_template("pipeline2.html", temp=temp)


if __name__ == "__main__":
    app.run(debug=True)
