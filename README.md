# JS Informatics — Official Company Website & Management Platform

> **Official Tagline:** *Connecting Technology. Protecting What Matters.*  
> **Location:** Thrissur, Kerala, India  
> **Brand Positioning:** Complete security, connectivity and IT solutions provider (CCTV surveillance, structured LAN networking, enterprise Wi-Fi, computer hardware, systems software support, and business IT maintenance).

---

## 1. Brand Identity & Visual System

- **Primary Brand (Navy Blue):** `#0B2D5B` — Navigations, authoritative headings, dark footers.
- **Primary Accent (Technology Blue):** `#00AEEF` — High-priority buttons, active states, technology accents.
- **Light Accent (Light Blue):** `#E6F0FA` — Category badges, card backings, highlights.
- **Main Background (White):** `#FFFFFF`
- **Light Background:** `#F5F8FC` — Contrast background for alternating sections.
- **Main Text (Dark Charcoal):** `#1F2937`
- **Secondary Text (Slate Grey):** `#64748B`
- **Borders:** `#E2E8F0`

### Typography
- **Headings & Titles:** `Montserrat` (Next.js Google Fonts)
- **Body & UI Elements:** `Inter` (Next.js Google Fonts)

### Custom Logo Assets
All vector SVG logos are stored in `public/logo/`:
- `js-logo-horizontal.svg` — Main horizontal brand mark with tagline
- `js-logo-white.svg` — Monochromatic white and technology blue variant for dark navy backgrounds
- `js-logo-icon.svg` — Interlocking geometric "JS" monogram with circuit traces and networking nodes
- `public/favicon.svg` & `src/app/icon.svg` — Dynamic favicon for browsers

---

## 2. Technology Stack

- **Framework:** Next.js 16 (App Router) with React 19 & TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Icons:** Lucide React
- **ORM & Database:** Prisma ORM with SQLite (local development) and PostgreSQL (production ready)
- **Forms & Validation:** React Hook Form with Zod schemas shared across client & server
- **Authentication:** Secure HTTP-only cookies with JWT (`jose`) and `bcryptjs` password hashing
- **SEO:** Next.js Metadata API, dynamic XML Sitemap, dynamic `robots.txt`, and Schema.org JSON-LD

---

## 3. Key Website Sections & Features

### Public Website
1. **Homepage (`/`):** 12 structured sections:
   - Hero banner with official tagline and high-res visual
   - Company Introduction
   - Core Services (6 service categories)
   - Featured Products with *"Contact us for pricing"* labels
   - Residential Solutions (Villas, multi-storey Wi-Fi roaming, perimeter CCTV)
   - Business IT Solutions (Offices, shops, Cat6 cabling, AMCs)
   - Genuine "Why Choose Us" value propositions (no fabricated statistics)
   - 4-step Working Process
   - Thrissur & Central Kerala local service areas
   - Interactive FAQ accordion
   - Quotation and service ticket CTA banner
   - Branded Navy Blue footer
2. **Service Catalogue (`/services` & `/services/[slug]`):**
   - Individual technical detail pages for:
     1. CCTV & Security Solutions
     2. LAN Networking Solutions
     3. Wi-Fi Installation & Support
     4. Computer Hardware Services
     5. Computer Software Support
     6. Business IT Support & AMCs
   - Dedicated **Ethical Remote IT Support Framework** (strict consent, zero persistent backdoors, no password retention).
3. **Product Catalogue (`/products` & `/products/[slug]`):**
   - 10 equipment categories with search, category filtering, and specifications table.
   - One-click WhatsApp direct enquiry generator with product name pre-filled.
4. **Tailored Solutions (`/solutions`):** Residential vs Commercial architecture and feature comparison matrix.
5. **About Us (`/about`):** Company mission, local Thrissur roots, and privacy commitment.
6. **Contact & Service Request Hub (`/contact`):**
   - General Inquiry Form
   - Quotation Request Form
   - Service Repair Ticket Form
   - Unique auto-generated tracking numbers (e.g. `JSI-QUO-82914`, `JSI-SRV-10293`).
7. **Legal:** Privacy Policy (`/privacy-policy`) and Terms & Conditions (`/terms-and-conditions`).

### Secure Admin Dashboard (`/admin`)
- **Protected by Authentication:** Session guarded via HTTP-only JWT cookies.
- **KPI Metrics Overview:** Real database counts of inquiries, pending quotes, active repairs, products, and services.
- **Enquiry Management (`/admin/enquiries`):** Filter by status (`NEW`, `CONTACTED`, `QUOTATION_SENT`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`), search by customer name/phone/reference, inspect details, log internal technician notes, and export to CSV.
- **Product Management (`/admin/products`):** Add, edit, delete products, manage JSON specifications, and toggle featured items.
- **Service Management (`/admin/services`):** Toggle publish/draft status and edit taglines.
- **Website Settings (`/admin/settings`):** Manage company contact numbers, WhatsApp number, email, address, operating hours, and service areas.

---

## 4. Local Development Setup

### Prerequisites
- Node.js 18.18+ (tested on Node.js v26)
- npm 10+

### Installation Steps
```powershell
# 1. Clone or navigate to the repository
cd "C:\Users\NETCOM\.gemini\antigravity\scratch\js-informatics"

# 2. Install dependencies
npm install

# 3. Synchronize database schema (creates local dev.db)
npx prisma db push

# 4. Seed the database with initial products, services, settings, and demo admin
npx tsx prisma/seed.ts

# 5. Start the development server
npm run dev
```

Visit `http://localhost:3000` to view the website.

---

## 5. Admin Credentials

- **Admin Login URL:** `http://localhost:3000/admin/login`
- **Default Username:** `admin` (or `admin@jsinformatics.in`)
- **Default Password:** `AdminPassword123!`

*(Make sure to change the default admin password in production via database or admin settings)*.

---

## 6. Production Deployment Guide (Vercel + PostgreSQL)

### 1. Database Configuration (Supabase, Neon, or Managed PostgreSQL)
In `prisma/schema.prisma`, update the datasource provider to `postgresql`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### 2. Environment Variables
Configure the following environment variables in your Vercel Project Settings:

| Variable | Description | Example |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db?sslmode=require` |
| `JWT_SECRET` | Strong random secret string | `openssl rand -base64 32` |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL | `https://jsinformatics.in` |

### 3. Build & Deploy
In Vercel:
- **Framework Preset:** Next.js
- **Build Command:** `prisma generate && next build`
- **Output Directory:** `.next`

Run database migrations against the production database:
```bash
npx prisma db push
npx tsx prisma/seed.ts
```

---

## 7. SEO & Schema.org Structured Data

- **XML Sitemap:** Accessible at `/sitemap.xml` (dynamically lists all static pages, services, and products).
- **Robots Policy:** Accessible at `/robots.txt` (allows public indexing, blocks `/admin/` and `/api/admin/`).
- **Structured Data (JSON-LD):**
  - `LocalBusiness` & `WebSite` schema on all pages with Thrissur coordinates (`10.5276° N, 76.2144° E`), phone, and business hours.
  - `Service` schema on all 6 individual service pages.
  - `Product` schema on all product detail pages.
  - `BreadcrumbList` schema on all service and product detail pages.

---

## 8. Security & Privacy Ethics

- **Zero Credential Harvesting:** JS Informatics never records, stores, or logs customer CCTV master passwords, Wi-Fi keys, router credentials, or operating system logins.
- **Ethical Remote Support:** Remote diagnostics require explicit customer consent, use reputable software, leave zero persistent background access, and terminate upon session completion.
- **Security Headers:** Strict Transport Security (HSTS), X-Frame-Options (SAMEORIGIN), X-Content-Type-Options (nosniff), and Referrer-Policy configured on all HTTP responses.
