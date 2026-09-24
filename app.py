from flask import Flask, render_template

app = Flask(__name__)
import pickle

# Home Page
@app.route('/')
def home():
    return render_template('home.html')


# Models Page
@app.route('/models')
def models():
    return render_template('models.html')


# Dashboards Page
@app.route('/dashboards')
def dashboards():
    return render_template('dashboards.html')


# EV Assistant Page
@app.route('/assistant')
def assistant():
    return render_template('assistant.html')


# About Page
@app.route('/about')
def about():
    return render_template('about.html')


# Developers Page
@app.route('/developers')
def developers():
    return render_template('developers.html')


if __name__ == '__main__':
    app.run(debug=True)