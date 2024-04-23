import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

# creating a flask app
app = Flask(__name__)

# loading pickle model
model = pickle.load(open('model.pkl', 'rb'))


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict")
def prediction():
    return render_template('predict.html')

@app.route("/predict", methods=["POST"])
def predict():
    float_features = [float(x) for x in request.form.values()]
    features = [np.array(float_features)]
    # predicting the result
    prediction = model.predict(features)
    prediction_text = ""
    if prediction[0] == 0:
        prediction_text = "Person does not have a Heart Disease"
    else:
        prediction_text = "Person has Heart Disease"

    return render_template('result.html', prediction_text=prediction_text)


if __name__ == '__main__':
    app.run(debug=True)
