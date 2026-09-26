from ipaddress import v4_int_to_packed

from flask import Flask, render_template, request

app = Flask(__name__)
import pickle
battery_health_model=pickle.load(open(r'C:\Users\HP\Documents\EV Project\EV Station Websiite\pickle files\battery_health.pkl', 'rb'))
charging_station_model = pickle.load(open(r'C:\Users\HP\Documents\EV Project\EV Station Websiite\pickle files\ChargingStationRequirement.pkl', 'rb'))
anxiety_model = pickle.load(open(r'C:\Project\EV station website\pickle files\anxiety.pkl', 'rb'))
energy_consumption_model=pickle.load(open('pickle files/ChargingStationRequirement.pkl'))

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

@app.route('/energy-consumption', methods = ['GET','POST'])
def energy_consumption():
    if request.method == 'GET':
        return render_template('energy_consumption.html')
    elif request.method == 'POST':
        v1 = int(request.form['vehicle_type'])
        v2 = int(request.form['battery_capacity_kwh'])
        v3 = int(request.form['battery_health_pct'])
        v4 = int(request.form['distance_km'])
        v5 = int(request.form['daily_trip_count'])
        v6 = int(request.form['charging_frequency_per_week'])
        v7 = int(request.form['charging_type'])
        v8 = int(request.form['charging_station_distance_km'])
        v9 = int(request.form['electricity_cost_per_kwh'])
        v10 = int(request.form['weather_condition'])
        v11 = int(request.form['traffic_density'])
        v12 = int(request.form['user_income_level'])
        v13 = int(request.form['range_km_estimated'])
        v14 = int(request.form['range_anxiety_risk'])
        v15 = int(request.form['effective_battery_capacity'])

        energy_consumption_pred=energy_consumption.predict([[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15]])
    return render_template('energy_consumption.html', energy_consumption=energy_consumption_pred)


@app.route('/anxiety', methods = ['GET', 'POST'])
def anxiety():
    if request.method == 'GET':
        return render_template('anxiety.html')
    elif request.method == 'POST':
        v1 = int(request.form['vehicle_type'])
        v2 = int(request.form['battery_capacity_kwh'])
        v3 = int(request.form['battery_health_pct'])
        v4 = int(request.form['distance_km'])
        v5 = int(request.form['daily_trip_count'])
        v6 = int(request.form['charging_frequency_per_week'])
        v7 = int(request.form['charging_type'])
        v8 = int(request.form['charging_station_distance_km'])
        v9 = int(request.form['energy_consumed_kwh'])
        v10 = int(request.form['electricity_cost_per_kwh'])
        v11 = int(request.form['weather_condition'])
        v12 = float(request.form['traffic_density'])
        v13 = int(request.form['user_income_level'])
        v14 = int(request.form['range_km_estimated'])
        v15 = int(request.form['effective_battery_capacity'])

        anxiety_pred = anxiety_model.predict([[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15]])
        if anxiety_pred == 1:
            anxiety_pred = "High Risk of Range Anxiety"
        elif anxiety_pred == 0:
            anxiety_pred = "Low Risk of Range Anxiety"
    return render_template('result_anxiety.html', anxiety=anxiety_pred)

@app.route('/battery_health',methods = ['GET', 'POST'])
def battery_health():
    if request.method == 'GET':
       return render_template('battery_health.html')
    elif request.method == 'POST':
        v1 = int(request.form['vehicle_type'])
        v2 = int(request.form['battery_capacity_kwh'])
        v3 = int(request.form['distance_km'])
        v4 = int(request.form['daily_trip_count'])
        v5 = int(request.form['charging_frequency_per_week'])
        v6 = int(request.form['charging_type'])
        v7 = int(request.form['charging_station_distance_km'])
        v8 = int(request.form['energy_consumed_kwh'])
        v9 = int(request.form['electricity_cost_per_kwh'])
        v10 = int(request.form['weather_condition'])
        v11 = float(request.form['traffic_density'])
        v12 = int(request.form['user_income_level'])
        v13 = int(request.form['range_km_estimated'])
        v14 = int(request.form['user_income_level'])
        v15 = int(request.form['effective_battery_capacity'])

        battery_health_pred=battery_health_model.predict([[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15]])
    return render_template('result_battery_health.html',battery_health=battery_health_pred[0])


@app.route('/charging_station',methods = ['GET', 'POST'])
def charging_station():
    if request.method == 'GET':
        return render_template('charging_station.html')
    elif request.method == 'POST':
        v1 = int(request.form['State Name'])
        v2 = int(request.form['Two Wheeler'])
        v3 = int(request.form['Three Wheeler'])
        v4 = int(request.form['Four Wheeler'])
        v5 = int(request.form['Goods Vehicles'])
        v6 = int(request.form['Public Service Vehicle'])
        v7 = int(request.form['Special Category Vehicles'])
        v8 = int(request.form['Construction Equipment Vehicle'])
        v9 = int(request.form['Other'])
        v10 = int(request.form['Grand Total'])
        v11 = int(request.form['Total Population'])

        charging_station_pred=charging_station_model.predict([[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11]])
    return render_template('result_charging_station.html',charging_station=charging_station_pred)


if __name__ == '__main__':
    app.run(debug=True)