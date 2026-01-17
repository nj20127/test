# حلّوف ولا مش حلّوف

A fun camera app that detects people and judges if they're "حلّوف" or not!

## How to Use on Your iPhone

Since you have no coding experience, here's the **easiest way** to use this app:

### Option 1: Use it Locally (Recommended for testing)

1. **Open the file on your computer:**
   - Navigate to the `halloof-app` folder
   - Double-click `index.html` to open it in your browser
   - This will work on your computer to test it

2. **To use on your iPhone, you need to host it online.** Continue to Option 2.

### Option 2: Host it Online (To use on iPhone)

The easiest way to get this on your iPhone is to host it on GitHub Pages (free):

1. **Upload to GitHub:**
   - Create a new repository on GitHub
   - Upload the `index.html` file
   - Go to Settings > Pages
   - Select "main" branch and save
   - You'll get a URL like: `https://yourusername.github.io/repo-name/`

2. **Open on iPhone:**
   - Open Safari on your iPhone
   - Go to the URL from step 1
   - Tap "Share" button
   - Tap "Add to Home Screen"
   - Now you have it as an app icon!

### Option 3: Use a Simple Local Server (Advanced)

If you want to test it on your iPhone without uploading to GitHub:

1. Make sure your iPhone and computer are on the same WiFi network
2. On your computer, navigate to the `halloof-app` folder in terminal
3. Run: `python3 -m http.server 8000`
4. Find your computer's IP address (like 192.168.1.5)
5. On your iPhone Safari, go to: `http://YOUR-IP-ADDRESS:8000`

## How the App Works

1. **Tap "ابدأ" (Start)** to begin
2. **Allow camera access** when prompted
3. **Point the camera at a person** - keep them in frame for 2 seconds
4. **The app will "scan"** and make a judgment
5. **75% of the time** it will say "حلّوف"
6. **25% of the time** it will say "مش حلّوف"
7. **Save the image** by tapping "احفظ الصورة" or wait 5 seconds for it to reset

## Features

- ✅ Real-time person detection using AI
- ✅ Fun Arabic graphic design overlay (inspired by your images)
- ✅ 75% chance of "حلّوف" judgment
- ✅ Save captured images
- ✅ Auto-reset after 5 seconds
- ✅ Works on iPhone and desktop
- ✅ No app store needed!

## Design Elements

The app uses colors and design inspired by your reference images:
- **Orange/Red gradients** (#ff6b35, #f7931e) for "حلّوف"
- **Teal/Turquoise gradients** (#00a8a8, #00d9ff) for "مش حلّوف"
- **Arabic typography** with Amiri and Cairo fonts
- **Circular stamp overlay** with decorative patterns

## Technical Details

The app is a single HTML file that includes:
- TensorFlow.js for AI-powered person detection
- Canvas API for image capture and overlay
- MediaDevices API for camera access
- Responsive design for mobile and desktop

## Troubleshooting

**Camera not working?**
- Make sure you allowed camera permissions
- Try using Safari on iPhone (works best)
- HTTPS is required for camera access on mobile (use GitHub Pages or ngrok)

**Not detecting people?**
- Make sure there's good lighting
- Get closer to the camera
- Wait a moment for the AI model to load

**Want to change the probability?**
- Open `index.html` in a text editor
- Find the line: `const isHalloof = Math.random() < 0.75;`
- Change `0.75` to any number between 0 and 1 (e.g., `0.9` for 90% halloof)

Enjoy! 🎉
