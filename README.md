

## 📋 Overview

**Hotel Management System** is a full-featured web application developed by **Shiv Nand** for managing hotel cabin bookings and reservations. Users can browse available cabins, check real-time availability, make reservations, and manage their bookings through an intuitive, responsive interface.

<!-- Screenshot placeholder - Add screenshot here when available -->

## ✨ Features

- **Cabin Browsing**: Browse all available cabins with detailed descriptions and images
- **Real-time Availability**: Check cabin availability based on selected dates
- **Reservation Management**: Create, edit, and cancel reservations seamlessly
- **User Authentication**: Secure Google OAuth sign-in integration
- **Profile Management**: Update and manage guest profile information
- **Responsive Design**: Fully responsive and accessible UI across all devices
- **Modern UX**: Intuitive user interface with smooth interactions

## 🛠️ Tech Stack

This project is built using modern web technologies:

- **Next.js 14.2** (App Router) - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend-as-a-Service for database and storage
- **NextAuth.js (Auth.js)** - Authentication library with Google OAuth
- **date-fns** - Modern JavaScript date utility library
- **React** - UI library for building interactive interfaces

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- A **Supabase** account and project
- **Google OAuth** credentials (Client ID and Secret)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd hotel-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # NextAuth Configuration
   AUTH_SECRET=your_generated_auth_secret
   AUTH_GOOGLE_ID=your_google_oauth_client_id
   AUTH_GOOGLE_SECRET=your_google_oauth_client_secret
   ```

   > **Note**: Generate `AUTH_SECRET` using `openssl rand -base64 32` or an online generator.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create an optimized production build
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
Hotel Management System/
├── app/
│   ├── _components/          # Reusable UI components
│   │   ├── Cabin.js
│   │   ├── CabinCard.js
│   │   ├── ReservationForm.js
│   │   └── ...
│   ├── _lib/                 # Utilities and services
│   │   ├── actions.js        # Server actions
│   │   ├── auth.js           # Authentication configuration
│   │   ├── data-service.js   # Database queries
│   │   └── supabase.js       # Supabase client
│   ├── _styles/              # Global styles
│   │   └── globals.css
│   ├── api/                  # API routes
│   │   └── auth/
│   ├── account/              # Authenticated routes
│   │   ├── profile/
│   │   └── reservations/
│   ├── cabins/               # Public cabin pages
│   ├── layout.js             # Root layout
│   └── page.js               # Homepage
├── public/                   # Static assets
│   ├── logo.png
│   ├── thumbnail.png
│   ├── sitemap.xml
│   └── robots.txt
├── package.json
└── README.md
```

## 🔒 Environment Variables

Ensure all required environment variables are set in your `.env.local` file:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key |
| `AUTH_SECRET` | Secret key for NextAuth.js (generate securely) |
| `AUTH_GOOGLE_ID` | Google OAuth Client ID |
| `AUTH_GOOGLE_SECRET` | Google OAuth Client Secret |

## 🌐 Deployment

This application can be deployed on any platform that supports Node.js:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Render**
- **Railway**
- **AWS Amplify**

### Deployment Checklist

1. Set all environment variables in your hosting platform
2. Update `public/sitemap.xml` with your production domain
3. Update `public/robots.txt` with your production domain
4. Configure canonical URLs in `app/layout.js`
5. Update Open Graph and Twitter card URLs in `app/layout.js`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shiv Nand**

- Developer & Maintainer of Hotel Management System
- All rights reserved © 2024

---

<div align="center">

**Built with ❤️ by Shiv Nand**

</div>
