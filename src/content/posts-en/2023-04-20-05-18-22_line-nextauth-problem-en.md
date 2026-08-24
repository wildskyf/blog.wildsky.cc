---
title: "Potential Issues When Integrating LINE Login with NextAuth.js"
date: 2023-04-20T17:18:22+08:00
slug: "line-nextauth-problem-en"
translationKey: "nextauth-line-login-issues"
excerpt: "I recently had the opportunity to integrate the LINE Login API into a project. Along the way, I ran into a few issues, so I decided to document them and share the solutions."
feature_image: "nextauth-line.jpg"
guid: "line-nextauth-problem-en"
category: "Software Engineering"
tags: ["Next.js"]
---

I recently had the opportunity to integrate the LINE Login API into a project. Along the way, I ran into a few issues, so I decided to document them and share the solutions.

For this project, I chose Next.js for both the frontend and backend, with NextAuth.js handling user authentication.

NextAuth.js provides several convenient built-in features and functions. For example, it works with Next.js Dynamic Routes to handle authentication-related routes under `/api/auth`. On the frontend, developers can simply call `signIn("line")` to redirect users to the LINE Login page automatically. These features saved me quite a bit of work.

However, I still encountered a few issues during the integration process.

First, if you see an `invalid uri` error when being redirected to the LINE Login page, the callback URL may not have been configured in the LINE Developers Console.

If you have already configured the callback URL but still receive the error, try removing all existing callback URLs and adding only the localhost URL. If LINE Login works with localhost alone, your production environment may be missing the required environment variables.

When deploying NextAuth.js to production, remember to configure the following two environment variables:

- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

`NEXTAUTH_URL` should be the base URL of your production website. You can generate `NEXTAUTH_SECRET` with the following command:

```bash
openssl rand -base64 32
```

Alternatively, you can generate one at <https://generate-secret.vercel.app/32>.

Because this integration uses LINE, you will also need to configure `LINE_ID` and `LINE_SECRET`.

If you need to request access to the user's email address, refer to [this article](https://studyhost.blogspot.com/2019/04/clinebot30-line-loginemail.html).

The LINE provider configuration for NextAuth.js should look like this:

```javascript
export const authOptions = {
  providers: [
    LineProvider({
      clientId: process.env.LINE_ID,
      clientSecret: process.env.LINE_SECRET,
      authorization: { params: { scope: 'profile openid email' } },
    }),
  ],
}
```

## References

- <https://next-auth.js.org/configuration/options#nextauth_secret>
- <https://nextjs.org/docs/advanced-features/dynamic-import>
