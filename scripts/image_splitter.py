from PIL import Image
import os

def split_image(image_path, mistakes_allowed):
    # Open the image
    original_image = Image.open(image_path)

    # Get the width and height of the original image
    width, height = original_image.size

    # Calculate the width of each piece
    piece_width = width // mistakes_allowed

    # Create a directory to store the pieces
    output_directory = 'image_pieces'
    os.makedirs(output_directory, exist_ok=True)

    # Split the image into pieces
    for i in range(mistakes_allowed):
        left = i * piece_width
        right = (i + 1) * piece_width

        # Crop the image
        piece = original_image.crop((left, 0, right, height))

        # Save the piece
        piece.save(os.path.join(output_directory, f'piece_{i + 1}.png'))

    # Return the list of piece filenames
    return [os.path.join(output_directory, f'piece_{i + 1}.png') for i in range(mistakes_allowed)]

# Example usage
image_path = 'path/to/your/image.png'
mistakes_allowed = 5
pieces = split_image(image_path, mistakes_allowed)
print(f'Image split into {mistakes_allowed} pieces: {pieces}')
