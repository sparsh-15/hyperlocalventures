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

## Visitors not working?

1. Ensure your Firestore rules include the `visits` collection (see `firestore.rules`).
2. Open DevTools → Console. If you see "Visit tracking failed", it's a Firestore rules issue.
3. Visit the homepage (not /admin) in a new tab or incognito to test—visitors are recorded once per session.
