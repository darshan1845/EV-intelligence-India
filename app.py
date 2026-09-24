from flask import Flask, render_template, request

app = Flask(__name__)
import pickle

# Home Page
@app.route('/')
def home():
    return render_template('home.html')


# Models Page
@app.route('/Models')
def models():
    return render_template('Models.html')


# Dashboards Page
@app.route('/dashboards')
def dashboards():
    return render_template('dashboards.html')


# EV Assistant Page
@app.route('/assistant')
def assistant():
    return render_template('EV_Assistant.html')


# About Page
@app.route('/about')
def about():
    return render_template('about.html')


# Developers Page
@app.route('/developers')
def developers():
    return render_template('developers.html')

@app.route('/energy-consumption')
def energy_consumption():
    return render_template('energy_consumption.html')

@app.route('/anxiety', methods = ['GET', 'POST'])
def anxiety():
    if request.method == 'GET':
        return render_template('anxiety.html')
    elif request.method == 'POST':
        v1 = int(request.form['vehicle_type'])
        v2 = int()



@app.route('/battery_health')
def battery_health():
    return render_template('battery_health.html')

@app.route('/charging_station')
def charging_station():
    return render_template('charging_station.html')


if __name__ == '__main__':
    app.run(debug=True)