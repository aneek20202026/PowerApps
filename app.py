from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/hello', methods=['GET','POST'])
def hello():
    if(request.method=='GET'):
        return jsonify("Hello")
    if(request.method=='POST'):
        try:
            data = request.json
            print(data)
            
            return jsonify(data)
        except Exception as e:
            return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)