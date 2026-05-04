# Interactive Digital Guidebook Boilerplate

This is a mobile-optimized, branching interactive guidebook designed for field technicians and users accessing instructions on the go.

## Features
- **Swipe-to-Turn-Page**: Powered by Swiper.js for a native app feel.
- **Branching Logic**: Navigation menu allows users to jump to specific instruction sets (AirPlay, Browser, or Mobile App).
- **Mobile First**: Fixed vertical viewport, large thumb-friendly buttons, and a floating home button.
- **Lightweight**: Zero dependencies other than CDNs (Tailwind CSS and Swiper.js).

## How to Test Locally
1. Clone this repository or download the `index.html` file.
2. Open `index.html` in any modern web browser.
3. For the best experience, use **Chrome DevTools** (F12) and toggle the **Device Toolbar** (Ctrl+Shift+M) to simulate a mobile device.

## Deployment to GitHub Pages
1. Create a new repository on GitHub.
2. Upload `index.html` to the root directory.
3. Go to **Settings** > **Pages**.
4. Under **Branch**, select `main` (or your default branch) and the `/ (root)` folder.
5. Click **Save**.
6. Your guidebook will be live at `https://<your-username>.github.io/<repository-name>/`.

## Customization
- **Branching**: To change where a button goes, update the `onclick="goToBranch(index)"` index. Remember that Swiper indices start at `0`.
- **Colors**: Use Tailwind CSS classes on the slide `div` elements (e.g., `bg-blue-50`) to match your branding.
- **Content**: Edit the text inside the `swiper-slide` divs to add your own steps.
