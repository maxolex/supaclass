# Getting Started

Follow these steps to install and run the Supaclass frontend:

## 1. Clone the repository

```bash
git clone https://github.com/maxolex/supaclass.git
cd supaclass
```

### 2. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### 5. Start the production server

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Project Structure

The project follows a standard Next.js App Router structure:

- `/app` - Contains all the application pages and layouts
- `/components` - Reusable UI components
- `/public` - Static assets (SVGs, images, etc.)

## Implemented Pages

1. **Authentication Flow**
   - `/login` - Login page
   - `/signup` - Signup page
   - `/verification` - Code verification page
   - `/profile/setup` - User profile setup
   - `/phone-verification` - Phone number verification
   - `/welcome` - Welcome page after successful authentication

2. **Program Setup Flow**
   - `/program/setup` - Program selection (existing or new)
   - `/program/existing` - Existing program integration

3. **Dashboard**
   - `/dashboard` - Main dashboard page after authentication

## Technologies Used

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React** for UI components

## Customization

You can customize the colors and theme by modifying the `tailwind.config.ts` file.

<!-- See public/README.md for information about public assets. -->

- SVG icons for social login (Google, Apple)
- Logo assets
- Other static files

## Icon Attribution

Icons are custom-made for the Supaclass platform.
