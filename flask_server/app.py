from flask import Flask, request, jsonify
import image_splitter

app = Flask(__name__)

@app.route('/split-image', methods=['POST'])
def split_image_route():
    data = request.json
    image_path = data['imagePath']
    mistakes_allowed = data['mistakesAllowed']
    
    # Call the image processing function (replace with your image_splitter logic)
    image_pieces = image_splitter.split_image(image_path, mistakes_allowed)

    return jsonify({'imagePieces': image_pieces})
if __name__ == '__main__':
    app.run(debug=True)
