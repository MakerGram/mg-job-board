# MakerGram Job Board Favicon Guide

This guide explains how to change the favicon (the small icon that appears in browser tabs) for your MakerGram Job Board application.

## Option 1: Quick Replace (Basic)

The simplest way to change the favicon is to replace the existing favicon.ico file:

1. Create or obtain a favicon.ico file (ideally 32x32 pixels)
2. Replace the file at `src/app/favicon.ico`
3. Restart your development server

## Option 2: Using the Helper Script (Recommended)

We've included a helper script that makes it easy to update your favicon:

1. Run the script from the project root:
   ```bash
   chmod +x update-favicon.sh
   ./update-favicon.sh
   ```
2. Follow the prompts to:
   - Use a local image file
   - Download and use the MakerGram logo
   - Use an image from a custom URL
3. Restart your development server

## Option 3: Manual Comprehensive Setup (Advanced)

For the best cross-browser and device support, you should use multiple favicon formats:

1. Generate favicon files in different sizes:
   - favicon.ico (32x32)
   - icon.png (32x32)
   - icon-192.png (192x192)
   - icon-512.png (512x512)
   - apple-icon.png (180x180)

2. Place these files in the `public` directory

3. The `layout.tsx` file already includes the metadata configuration for these files:
   ```typescript
   export const metadata: Metadata = {
     // ... existing metadata
     icons: {
       icon: [
         { url: '/favicon.ico' },
         { url: '/icon.png', type: 'image/png', sizes: '32x32' },
         { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
         { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
       ],
       apple: [
         { url: '/apple-icon.png', sizes: '180x180' },
       ],
     },
   };
   ```

## Tools for Creating Favicons

Here are some tools you can use to create favicon files:

1. [Favicon.io](https://favicon.io/) - Easy online favicon generator
2. [RealFaviconGenerator](https://realfavicongenerator.net/) - Comprehensive favicon generator
3. [Figma](https://www.figma.com/) - Design your own favicon

## Troubleshooting

If you don't see your new favicon after updating:

1. Clear your browser cache
2. Try opening the site in an incognito/private window
3. Make sure you've restarted your development server
4. Check that the favicon files are in the correct locations
5. Verify that the paths in the metadata configuration match your file locations

## Additional Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Web Favicon Standards](https://www.w3.org/2005/10/howto-favicon)