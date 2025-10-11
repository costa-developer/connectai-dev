
````markdown
<img src="/public/images/logo.png" alt="Connect AI Logo" width="300" height="150">

# Connect AI

## Introduction

Connect AI  
An AI-powered chatbot that boosts customer engagement with smart, customizable interactions. Using advanced NLP, Connect AI understands user queries and responds intelligently, while letting businesses personalize greetings, capture emails, and redirect chats for a tailored experience.

## Environment Setup

Rename `.env.example` to `.env` and add your own credentials:

```bash
mv .env.example .env
nano .env
````

### Example .env

```bash
# Email
NODE_MAILER_EMAIL=your_email@gmail.com
NODE_MAILER_GMAIL_APP_PASSWORD=your_gmail_app_password

# Pusher
NEXT_PUBLIC_PUSHER_APP_CLUSTER=your_app_cluster
NEXT_PUBLIC_PUSHER_APP_KEY=your_app_key
NEXT_PUBLIC_PUSHER_APP_SECRET=your_app_secret
NEXT_PUBLIC_PUSHER_APP_ID=your_app_id

# OpenAI
OPEN_AI_KEY=your_openai_key

# UploadCare
NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY=your_uploadcare_public_key
UPLOAD_CARE_SECRET_KEY=your_uploadcare_secret_key

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stripe
STRIPE_SECRET=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISH_KEY=your_stripe_publish_key

# Database
DATABASE_URL='your_database_url'
```

## Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Run Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
connect-ai/
│
├── prisma/            # Database ORM and schema
├── public/            # Images, fonts, assets
├── src/               # Source code
│   ├── actions/       # Service logic
│   ├── app/           # Pages and routes
│   ├── components/    # Reusable UI components
│   ├── context/       # Global state
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and libraries
│   ├── schemas/       # Validation schemas
│   └── middleware.ts  # Middleware functions
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```