# 🎭 Carnaval Bingo 2025 🇧🇷

A fun, interactive bingo game for your Carnaval trip to Brazil! Track crazy experiences with your friends and compete on a real-time leaderboard.

## Features

- **Unique Cards**: Each player gets their own bingo card (21 fixed squares + 4 random from a pool of 8)
- **Real-time Leaderboard**: See who's winning live as friends mark their squares
- **Bulletproof Data Persistence**: Your progress is saved to Firebase AND local storage - you won't lose it!
- **Works Offline**: Mark squares even without internet, syncs when you're back online
- **Beautiful Design**: Vibrant Brazilian carnival theme with animations and confetti
- **Mobile-First**: Designed to work perfectly on all phones, tablets, and browsers

## Your Bingo Squares

### Fixed 21 (Everyone gets these):
1. Made out with 2+ people in one night
2. Ate street food after 3am
3. Witnessed people having sex on the street
4. Took drugs
5. Puked
6. Lost your phone (even temporarily)
7. Swam in the ocean at sunrise
8. Got invited to an after-party
9. Stayed out until the sun came up
10. Danced with someone 2x your age or half your age
11. Got a temporary tattoo or henna
12. Danced on top of something
13. Shared food with a complete stranger
14. Met a stranger from your home country
15. Skinny dipped
16. Convinced a stranger you're Brazilian
17. Made Seika proud
18. Rode on someone's shoulders
19. Lost your voice from screaming/singing
20. Got food poisoning or other illness
21. Got wacked by the police

### Pool of 8 (Everyone gets 4 random):
1. Taught a stranger a dance move
2. Fell asleep in an Uber
3. Started a chant or sing-along
4. Spilled a drink on yourself
5. Got a ridiculous sunburn or tan line
6. Lost or broke sunglasses
7. Found money on the ground
8. Exchanged clothing items with a stranger

---

## Setup Instructions (5 minutes!)

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"** (or "Add project")
3. Name it something like `carnaval-bingo`
4. Disable Google Analytics (not needed) and click **Create**
5. Wait for project to be created, then click **Continue**

### Step 2: Create Firestore Database

1. In the Firebase Console, click **"Build"** in the left sidebar
2. Click **"Firestore Database"**
3. Click **"Create database"**
4. Choose **"Start in test mode"** (for simplicity)
5. Select a location close to Brazil (e.g., `southamerica-east1` for Sao Paulo)
6. Click **Enable**

### Step 3: Get Your Firebase Config

1. In Firebase Console, click the **gear icon** (Settings) next to "Project Overview"
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **web icon** (`</>`) to add a web app
5. Name it `carnaval-bingo-web`
6. **Don't** check "Firebase Hosting" (we'll use GitHub Pages)
7. Click **Register app**
8. You'll see your Firebase config - it looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB.....................",
  authDomain: "carnaval-bingo.firebaseapp.com",
  projectId: "carnaval-bingo",
  storageBucket: "carnaval-bingo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

### Step 4: Add Config to the App

1. Open `index.html` in a text editor
2. Find this section near the top of the `<script>` tag (around line 460):

```javascript
// Firebase Configuration - REPLACE WITH YOUR OWN!
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    ...
};
```

3. Replace it with YOUR config from Step 3
4. Save the file

### Step 5: Deploy to GitHub Pages (Free!)

1. Create a new GitHub repository (or use this one)
2. Make sure `index.html` is in the root of the repository
3. Go to **Settings** > **Pages**
4. Under "Source", select **GitHub Actions** or **Deploy from a branch** (main)
5. Click **Save**
6. Wait 1-2 minutes, then your site will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**Alternative: Deploy to Netlify (also free)**
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your `index.html` file
3. Done! You get a URL instantly

**Alternative: Deploy to Vercel**
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repo
3. It deploys automatically!

---

## How to Play

1. **Open the URL** on your phone
2. **Enter your name** - this generates your unique bingo card
3. **Tap squares** when you complete challenges
4. **Check the leaderboard** to see who's winning
5. **Get all 25** for BINGO! 🎉

## Data Safety - YOUR PROGRESS WILL NOT BE LOST!

Your progress is protected multiple ways:

1. **Firebase Cloud**: Syncs in real-time to the cloud
2. **Local Storage**: Saved on your device as backup
3. **Offline Mode**: Works without internet, syncs when connected
4. **Automatic Recovery**: If you lose connection, your data syncs when you're back online

**The green dot** in the app shows sync status:
- 🟢 Green = Synced to cloud
- 🟡 Yellow = Syncing...
- 🔴 Red = Offline (don't worry, saved locally!)

Even if:
- You close the browser
- Your phone dies
- You lose internet
- You switch devices (just use same name)

**Your progress is SAFE!**

## Tips for Your Group

- **Bookmark the page** or add it to your home screen for easy access
- **Use the same name** each time to keep your progress
- Names are case-insensitive (John = john = JOHN)
- Everyone should use **unique names** to get unique cards
- Share the URL in your WhatsApp group!

## Troubleshooting

**"Progress not saving"**
- Check internet connection
- Make sure you entered the Firebase config correctly
- Try refreshing the page

**"Leaderboard not loading"**
- Check that Firestore is set up in "test mode"
- Verify your Firebase config is correct

**"Page won't load"**
- Make sure you're using HTTPS (not HTTP)
- Try a different browser
- Clear browser cache

**"My card is different from my friend's"**
- That's intentional! Everyone gets 21 fixed squares + 4 unique ones
- The squares are just shuffled differently for each person

---

## Technical Details

- **Frontend**: Vanilla HTML/CSS/JavaScript (no build step!)
- **Backend**: Firebase Firestore (free tier)
- **Hosting**: Any static host (GitHub Pages, Netlify, Vercel)
- **Offline**: Service Worker + localStorage backup
- **Tested on**: Chrome, Safari, Firefox, iOS, Android

---

## Have an amazing Carnaval! 🎭🇧🇷🎉

Salvador • Morro • Rio 2025
