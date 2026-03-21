# Deploying a Full‑Stack App  

## (AKA: “Why Does It Work Locally But Explode in Production?”)

Deploying a full‑stack app is simple.  
All you need to do is:

1. Build the frontend  
2. Deploy the backend  
3. Configure the database  
4. Set up environment variables  
5. Pray  
6. Realise you forgot step 5 and pray harder

## Modern Deployment Platforms  

Vercel, Netlify, and Render have made deployment easier than ever.  
You push to GitHub, press a button, and boom — your app is live.

Then you check the logs and discover it crashed instantly because you forgot to set `DATABASE_URL` again.

## Environment Variables  

These are the sacred scrolls of deployment.  
They contain your secrets, your keys, your tokens, and occasionally your shame.

Platforms give you nice dashboards to manage them.  
Scrimshaw prefers to store them in a shoebox under the server rack.

## Monitoring  

Once your app is live, you’ll want to know when it breaks.  
Tools like Sentry and Datadog will alert you immediately.

Or, if you’re like us, Scrimshaw will chew through the Ethernet cable and you’ll find out when the site goes down.
