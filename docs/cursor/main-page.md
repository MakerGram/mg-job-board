# MakerGram Job Board

"Build a responsive web app for a **crowdsourced job board** for the MakerGram community. The platform should allow members to discover and share job opportunities.

### **Core Features**
1. **Job Listing Page**: Display all job postings in a card/grid format with essential details:
   - Job Title
   - Company Name
   - Location
   - Salary (if available)
   - Type (Full-time, Part-time, Freelance, Internship)
   - Tags (e.g., Electronics, Design, Software, Robotics)
   - Last Date to Apply

2. **Job Detail Page**:
   - Clicking a job should open a modal or a new page with full job details.
   - Includes: Who posted it, description, how to apply, and external links if available.

3. **Job Posting**:
   - A button **'Post a Job'** should redirect users to a Google Form link where they can submit job opportunities.

4. **Search & Filtering**:
   - Allow users to filter/search jobs based on **tags**, job type, or location.

### **Additional Requirements**
- **Tech Stack**: Use **React (Next.js preferred)** for frontend. Tailwind CSS for styling.
- **State Management**: Keep job listings in a simple JSON format.
- **Minimalist UI**: Clean, modern, and mobile-friendly interface.

Deliver a **production-ready** codebase with proper routing, reusable components, and state management."

---

## 🛠 Cursor.ai Rules for MakerGram Job Board

### **1. General Structure**
- The platform must be built with **Next.js (React)** for performance and SEO benefits.
- Use **Tailwind CSS** for styling to ensure a clean, modern, and responsive UI.
- Jobs should be stored in a **JSON file** (for static data) or **Firebase** (for dynamic updates).

### **2. Job Posting & Management**
- A **“Post a Job”** button should redirect users to a **Google Form** where they can submit job listings.
- Jobs should be **fetched dynamically** and displayed on the site.
- Ensure each job listing includes:
  - Title
  - Company Name
  - Location
  - Salary (if available)
  - Type (Full-time, Part-time, Freelance, Internship)
  - Tags (Electronics, Software, Robotics, etc.)
  - Last Date to Apply
  - Job Description
  - Who posted it

### **3. User Experience & Navigation**
- The **home page** should display job listings in a **grid/card format**.
- Clicking on a job should open a **modal or separate page** with full job details.
- Users should be able to **search and filter** jobs based on **tags, type, or location**.
- Ensure smooth **client-side navigation** using Next.js routing (`useRouter`).

### **4. Performance & Optimization**
- Use **static generation (getStaticProps)** for improved performance if using a JSON file.
- Optimize images and assets for **faster loading**.

### **5. UI/UX Guidelines**
- Minimalist and **dark/light theme support** (if possible).
- Use **icons & color codes** to indicate job types (e.g., 💻 for remote, 🏢 for on-site).
- Maintain **accessibility (a11y) standards** for better usability.
- use shadcn and black and white theme

### **6. Deployment & Maintenance**
- Deploy on **Vercel** (recommended) for seamless Next.js integration.
- Ensure **easy maintainability** with clear **component-based architecture**.
- Add a **README.md** with setup instructions.

---


