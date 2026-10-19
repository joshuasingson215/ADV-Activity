# Joshua Temario Singson — Portfolio

My personal portfolio, built with **Next.js** (App Router).

## Pages

| Route        | Page      | Contents                                                     |
| ------------ | --------- | ------------------------------------------------------------ |
| `/`          | Home      | Hero and the services I offer (Open to Work)                 |
| `/portfolio` | Portfolio | Job experience and project list with hover previews          |
| `/about`     | About     | About me, skills, certificates, and contact details          |
| `/gallery`   | Gallery   | Project screenshots, certificates, and photos with a viewer  |

The `Header` component (`components/Header.jsx`) builds its links from `navLinks` in
`lib/content.js` and highlights the link for the page you are on.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3001.

## Edit content

Experience, projects, skills, certificates, and contact details all live in `lib/content.js`.

Design based on [davydsgn-dev/WebsitePortfolio](https://github.com/davydsgn-dev/WebsitePortfolio).
