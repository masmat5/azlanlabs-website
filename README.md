# AzlanLabs website

React + TypeScript + Vite.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
```

- Content (services, steps, projects, contact email): `src/content.ts`
- Brand tokens (colours, fonts, spacing): top of `src/styles.css` (`:root`)
- Fonts: Bricolage Grotesque (headings), Instrument Sans (body), JetBrains Mono (labels). Icons: lucide-react.
- `legacy/` holds the first plain HTML version; safe to delete.

## Contact form (Vercel serverless function)

`api/contact.ts` receives the form and emails it to you through [Resend](https://resend.com).

1. Create a free Resend account and an API key.
2. In Vercel → Project → Settings → Environment Variables add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (where you want to receive messages)
   - `CONTACT_FROM_EMAIL` (a sender on a domain verified in Resend; `onboarding@resend.dev` works for testing, but only delivers to your own Resend account email)
3. Redeploy.

`npm run dev` does not serve `/api`. To test the form locally use `npx vercel dev` with a `.env.local` copied from `.env.example`.
