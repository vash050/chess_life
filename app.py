from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():  # put application's code here
    return render_template("index.html")


@app.route('/v1/', methods=['POST'])
def get_cell():
    print(request.data.decode())
    return render_template("index.html")


if __name__ == '__main__':
    app.run()
