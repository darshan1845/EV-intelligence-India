import pandas as pd
from flask import Flask, render_template, request, jsonify
from google import genai
from dotenv import load_dotenv
import os

app = Flask(__name__)
import pickle
battery_health_model=pickle.load(open(r'pickle files/battery_health.pkl', 'rb'))
charging_station_model = pickle.load(open(r'pickle files/ChargingStationRequirement.pkl', 'rb'))
energy_consumption_model = pickle.load(open(r'pickle files/Energyconsumption.pkl', 'rb'))
anxiety_model = pickle.load(open(r'pickle files/anxiety.pkl', 'rb'))

load_dotenv()
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY"))


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

@app.route('/EV_usage_DB')
def EV_usage_DB():
    return render_template('EV_usage_DB.html')

@app.route('/indian_stations_DB')
def india_stations():
    return render_template('indian_stations_DB.html')

@app.route('/vehiclesandstations')
def vehiclesandstations():
    return render_template('vehiclesandstations.html')

# EV Assistant Page
@app.route('/assistant')
def assistant():
    return render_template('EV_Assistant.html')

@app.route('/ev-ai', methods=['POST'])
def ev_ai():

    data = request.get_json()

    user_message = data.get('message', '').strip()

    if user_message == '':
        return jsonify({
            'response': 'Please enter a question.'
        })


    try:

        prompt = f"""
You are a Smart EV Assistant for an Electric Vehicle intelligence website.

Your role:
- Act like a helpful, friendly human EV expert.
- Answer questions about electric vehicles, batteries, charging stations,
  charging, range, energy consumption, EV costs, and related topics.
- Keep your language simple and natural.
- Talk conversationally, as if you are having a normal chat with the user.
- Do not sound robotic or overly formal.
- Give accurate and practical answers.
- Keep every response SHORT: maximum 2 to 5 lines.
- Do not use long explanations, headings, or unnecessary bullet points.
- If the user asks something unrelated to EVs, politely tell them that
  you are primarily an EV Assistant.

User's question:
{user_message}
"""

        interaction = client.interactions.create(
            model="gemini-3.8-flash",
            input=prompt
        )

        ai_response = interaction.output_text

        return jsonify({
            'response': ai_response
        })


    except Exception as e:

        print("Gemini Error:", e)

        return jsonify({
            'response': '⚠️ Sorry, I could not generate a response right now.'
        }), 500

# About Page
@app.route('/about')
def about():
    return render_template('about.html')


# Developers Page
@app.route('/developers')
def developers():
    return render_template('developers.html')

@app.route('/energy_consumption', methods = ['GET', 'POST'])
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
        v11 = float(request.form['traffic_density'])
        v12 = int(request.form['user_income_level'])
        v13 = int(request.form['range_km_estimated'])
        v14 = int(request.form['range_anxiety_risk'])
        v15 = int(request.form['effective_battery_capacity'])

        energy_consumption_pred=energy_consumption_model.predict([[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15]])
    return render_template('result_energy_consumption.html', energy_consumption=energy_consumption_pred)


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
    return render_template('result_battery_health.html',battery_health=battery_health_pred)


@app.route('/charging_station', methods=['GET', 'POST'])
def charging_station():

    if request.method == 'GET':
        return render_template('charging_station.html')

    elif request.method == 'POST':

        # Get selected state as STRING
        state_index = int(request.form['State Name'])

        states = [
            "Andaman and Nicobar Island",
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chandigarh",
            "Chhattisgarh",
            "Dadra and Nagar Haveli and Daman and Diu",
            "Delhi",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Ladakh",
            "Lakshadweep",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Puducherry",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal"
        ]

        selected_state = states[state_index]

        # Get numerical inputs
        v1 = int(request.form['Two Wheeler'])
        v2 = int(request.form['Three Wheeler'])
        v3 = int(request.form['Four Wheeler'])
        v4 = int(request.form['Goods Vehicles'])
        v5 = int(request.form['Public Service Vehicle'])
        v6 = int(request.form['Special Category Vehicles'])
        v7 = int(request.form['Construction Equipment Vehicle'])
        v8 = int(request.form['Other'])
        v9 = int(request.form['Grand Total'])
        v10 = int(request.form['Total Population'])

        # Create dataframe with the 10 numerical features
        input_data = pd.DataFrame([{
            'Two Wheeler': v1,
            'Three Wheeler': v2,
            'Four Wheeler': v3,
            'Goods Vehicles': v4,
            'Public Service Vehicle': v5,
            'Special Category Vehicles': v6,
            'Construction Equipment Vehicle': v7,
            'Other': v8,
            'Grand Total': v9,
            'Total Population': v10
        }])

        # Get the exact 46 columns used during model training
        model_columns = charging_station_model.feature_names_in_

        # Add all missing state columns with 0
        for column in model_columns:
            if column not in input_data.columns:
                input_data[column] = 0

        # Create the selected state's one-hot column
        state_column = "State Name_" + selected_state

        # Set selected state = 1
        if state_column in input_data.columns:
            input_data[state_column] = 1
        else:
            return f"State column not found: {state_column}"

        # Arrange columns in exactly the same order as training
        input_data = input_data[model_columns]

        # Prediction
        charging_station_pred = charging_station_model.predict(input_data)

        return render_template(
            'result_charging_station.html',
            charging_station=charging_station_pred[0]
        )


# if __name__ == '__main__':
#     app.run(debug=True)