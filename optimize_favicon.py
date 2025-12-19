from PIL import Image
import os

def create_favicon():
    try:
        # source_path = 'public/logo.png' # Using public logo as source
        # Actually better to use src/assets/logo.png if public isn't the master, but they seem identical.
        # Let's use public/logo.png
        img = Image.open('public/logo.png')
        
        # Save as ICO (includes multiple sizes)
        img.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
        print("Created public/favicon.ico")
        
        # Save as PNG 192x192 (for Apple/Android)
        img_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
        img_192.save('public/icon-192.png')
        print("Created public/icon-192.png")
        
        # Save as PNG 32x32 (for standard icon link if needed)
        img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
        img_32.save('public/favicon.png')
        print("Created public/favicon.png")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_favicon()
