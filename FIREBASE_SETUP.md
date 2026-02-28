# Firebase Firestore Setup for Contact Form

If the contact form stays on "Submitting..." or shows a permission error, update your Firestore security rules:

## Option A: Firebase Console (recommended)

1. Go to [Firebase Console](https://console.firebase.google.com) → your project **hyprlocalventuresweb**
2. Open **Firestore Database** (create it if needed)
3. Go to **Rules** tab
4. Replace the rules with the contents of `firestore.rules` (includes contactSubmissions + visits for visitor tracking)
5. Click **Publish**

## Option B: Firebase CLI

```bash
firebase deploy --only firestore
```

If you get "Permission denied" from the CLI, use Option A to publish rules directly in the Console.
