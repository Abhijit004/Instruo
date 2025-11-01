from PIL import Image
import os

"""
🪄 REQUIREMENTS:
- Python 3.x
- Pillow package (install with: pip install pillow)

📜 INSTRUCTIONS:
Place this script above or inside the directory containing `.webp` images.
It will convert all `.webp` files to `.png` format and save them to /PngImages.
"""

input_dir = './client/public/assets/Team'
output_dir = os.path.join(input_dir, 'PngImages')
os.makedirs(output_dir, exist_ok=True)

GREEN = "\033[92m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
RESET = "\033[0m"


def convert_to_png(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")  # convert to RGBA for PNG transparency
    img.save(output_path, 'PNG')
    print(f"{GREEN}Converted:{RESET} {os.path.basename(output_path)}")


print(f"\n{CYAN}Scanning directory:{RESET} {input_dir}\n")

count = 0
new_converted = []

for filename in os.listdir(input_dir):
    lower_name = filename.lower()
    if not lower_name.endswith('.webp'):
        continue

    input_path = os.path.join(input_dir, filename)
    png_name = os.path.splitext(filename)[0] + '.png'
    output_path = os.path.join(output_dir, png_name)

    if os.path.exists(output_path):
        print(f"{YELLOW}Already exists:{RESET} {png_name}")
        continue

    convert_to_png(input_path, output_path)
    new_converted.append(png_name)
    count += 1

print(f"\n{GREEN}Conversion complete.{RESET}")
print(f"Total .webp → .png files converted: {count}\n")

if new_converted:
    print("New PNG files created:")
    for f in new_converted:
        print(f"  {f}")
else:
    print(f"{YELLOW}No new files were converted. All up to date.{RESET}")

print()
