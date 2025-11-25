# CLAUDE.md - AI Assistant Guide for alvindang.github.io

## Repository Overview

This is a personal portfolio website for Alvin Dang, a lifecycle marketing and product growth leader. The site is a single-page portfolio hosted on GitHub Pages with a custom domain (alvindang.com).

**Repository**: alvindang.github.io
**Type**: GitHub Pages Personal Website
**Domain**: alvindang.com
**Tech Stack**: HTML, CSS (inline), JavaScript (jQuery, Instafeed.js)
**Hosting**: GitHub Pages

## Codebase Structure

```
alvindang.github.io/
├── index.html          # Main portfolio page (single-page application)
├── CNAME               # Custom domain configuration (alvindang.com)
├── CNAME.html          # Duplicate CNAME file (unclear purpose)
├── _config.yml         # Jekyll configuration for GitHub Pages
├── README.md           # Repository description (minimal)
├── img/                # Images directory
│   ├── favicon.png     # Site favicon (referenced but may be missing)
│   └── lul.html        # Empty HTML file (purpose unclear)
└── .DS_Store           # macOS system file (should be in .gitignore)
```

## Architecture & Technology

### Core Technologies

1. **HTML5**: Single-page structure with semantic markup
2. **CSS**: Inline styles within `<style>` tags in index.html
3. **JavaScript Libraries**:
   - jQuery 1.7.2 (loaded from Google CDN)
   - Instafeed.js (Instagram feed integration - referenced but file missing)
4. **Fonts**: Adobe Typekit (proxima-nova font family)
5. **Jekyll**: Minimal configuration for GitHub Pages

### Key Features

1. **Personal Bio Section** (`#whoami`):
   - Animated fade-in effect (1000ms delay, 700ms animation)
   - Professional background and career history
   - Social media links (LinkedIn, Instagram, Twitter/X)
   - Email contact (obfuscated via JavaScript to prevent spam)

2. **Instagram Integration**:
   - Uses Instafeed.js to fetch user's Instagram photos
   - Access token: `141970.467ede5.edbc9c37472d41b790e1db8948793f11`
   - User ID: 141970
   - Displays random photos as background with captions
   - Navigation controls for browsing photos

3. **Responsive Design**:
   - Desktop layout: Bio positioned absolutely (top-left)
   - Mobile layout: Stacked layout with adjusted sizing
   - Media query: `@media only screen and (max-device-width: 480px)`

### Color Scheme

The site uses a consistent brand color: `#0C6E99` (teal/blue)
- All link colors use this single color
- Original design referenced Layer Vault color palette (commented in code)
- Selection color: `#222` (dark gray)

## Development Workflows

### Making Changes

1. **HTML/CSS Updates**:
   - All styling is inline in `index.html` (lines 22-129)
   - No separate CSS file exists
   - Changes to content or styling require editing `index.html`

2. **Content Updates**:
   - Bio content: Lines 146-176 in `index.html`
   - Current employment: Line 153 (currently Homebase)
   - Previous experience: Line 156
   - Social links: Lines 156, 160

3. **Testing Locally**:
   ```bash
   # Option 1: Simple HTTP server
   python3 -m http.server 8000

   # Option 2: Jekyll (if installed)
   jekyll serve
   ```

4. **Deployment**:
   - Push to main/master branch
   - GitHub Pages automatically deploys
   - Changes appear at https://alvindang.com within minutes

### Git Workflow

- **Main Branch**: Main development and production branch
- **Feature Branches**: Use `claude/` prefix for AI-assisted work
- **Commit Messages**: Clear, descriptive (see recent commits)

## Key Conventions for AI Assistants

### DO:

1. **Preserve Brand Identity**:
   - Keep the color scheme (`#0C6E99`) consistent
   - Maintain the clean, minimal aesthetic
   - Respect the existing typography (proxima-nova)

2. **Maintain Responsive Design**:
   - Test changes on both desktop and mobile breakpoints
   - Preserve the media query behavior
   - Keep bio readable on small screens

3. **Update Professional Information Carefully**:
   - Current employer/status (line 153)
   - Previous experience (line 156)
   - Social media links (validate URLs)

4. **Respect Email Obfuscation**:
   - Keep the JavaScript-based email obfuscation (lines 167-175)
   - This prevents spam bots from scraping the email address

5. **Test Instagram Integration**:
   - Note: Instafeed.js file appears to be missing
   - Instagram API token may need updating
   - Test that photos load correctly

### DON'T:

1. **Don't Break Single-Page Structure**:
   - This is intentionally a one-page site
   - Don't split into multiple HTML files unless explicitly requested

2. **Don't Change Core Layout**:
   - The absolute positioning of `#whoami` is intentional
   - The background Instagram photo feature is a key design element

3. **Don't Add Build Complexity**:
   - No build tools (webpack, gulp, etc.) are used
   - Keep it simple and static
   - Avoid introducing dependencies

4. **Don't Commit System Files**:
   - .DS_Store should be in .gitignore
   - Add .gitignore if making multiple changes

5. **Don't Update Social Media Without Verification**:
   - Verify usernames before updating links
   - Check that profiles are active/correct

## Common Tasks & Solutions

### Update Current Employment

**Location**: `index.html:153`
```html
I'm an experienced lifecycle, marketing & product growth leader, currently building the lifecycle marketing & product growth teams at <a href="https://www.joinhomebase.com" class="green">Homebase</a>.
```

### Update Social Media Links

- **Instagram**: `index.html:160` - Update username in URL
- **Twitter/X**: `index.html:160` - Update @handle in follow button
- **LinkedIn**: `index.html:156` - Update profile URL

### Fix Missing Resources

1. **favicon.png**: Referenced but missing from `img/` directory
2. **instafeed.min.js**: Referenced (line 17) but missing from repository
   - Should be downloaded from Instafeed.js library
   - Or removed if Instagram integration is deprecated

### Update Instagram Integration

**Instagram API Token**: Located at `index.html:192`
- May need regeneration if Instagram feed stops working
- Requires Instagram Developer account
- Alternative: Remove feature if API access is unavailable

## Known Issues & Technical Debt

1. **Missing Dependencies**:
   - `instafeed.min.js` is referenced but not in repository
   - `img/favicon.png` is referenced but missing

2. **Deprecated/Legacy Code**:
   - jQuery 1.7.2 is very outdated (2012)
   - Instagram API integration may be deprecated
   - HTTP Typekit URL (line 18) should be HTTPS

3. **File System**:
   - `.DS_Store` should be gitignored
   - `img/lul.html` appears to be unused
   - `CNAME.html` duplicates CNAME (unclear purpose)

4. **Security**:
   - Instagram access token is exposed in public repository
   - Mixed content warning: HTTP Typekit URL on HTTPS site

5. **Code Organization**:
   - All CSS is inline (could be extracted for maintainability)
   - No JavaScript minification/optimization
   - No .gitignore file

## Testing Checklist

Before deploying changes:

- [ ] Desktop layout renders correctly
- [ ] Mobile layout renders correctly (test on actual device or DevTools)
- [ ] All links work and go to correct destinations
- [ ] Email obfuscation still functions
- [ ] Bio animation plays smoothly
- [ ] Instagram feed loads (if implemented)
- [ ] No console errors in browser DevTools
- [ ] Favicon displays correctly
- [ ] Custom domain (alvindang.com) resolves correctly
- [ ] Meta tags are accurate and up-to-date

## Deployment Notes

### GitHub Pages Configuration

- **Custom Domain**: Configured via CNAME file
- **Jekyll Processing**: Minimal config in `_config.yml`
- **Branch**: Deploys from main/master branch
- **URL**: https://alvindang.com (custom) or https://alvindang.github.io (GitHub)

### DNS Configuration

The CNAME file points to `alvindang.com`. Ensure DNS records are configured:
- `A` records pointing to GitHub Pages IPs
- OR `CNAME` record pointing to `alvindang.github.io`

## Recommended Improvements

When appropriate, consider suggesting:

1. **Add .gitignore**:
   ```
   .DS_Store
   *.log
   node_modules/
   ```

2. **Update jQuery**:
   - Migrate to modern vanilla JavaScript or latest jQuery
   - Current version (1.7.2) has security vulnerabilities

3. **Extract CSS**:
   - Move inline styles to external `style.css`
   - Improves maintainability and caching

4. **Fix Mixed Content**:
   - Change Typekit URL to HTTPS (line 18)

5. **Instagram Alternative**:
   - Consider static gallery or remove feature
   - Instagram API access is restricted for new apps

6. **Add Meta Tags**:
   - Open Graph tags for social sharing
   - Twitter Card tags
   - Updated favicon with multiple sizes

## Contact & Professional Info

When updating professional information, current structure includes:

- **Name**: Alvin Dang
- **Current Role**: Lifecycle marketing & product growth at Homebase
- **Previous Roles**: Wealthsimple, Shopify, Ariad Communications, BlackBerry
- **Location**: Toronto, Ontario, Canada
- **Availability**: Open for select consulting/freelance

## References

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Instagram Basic Display API**: https://developers.facebook.com/docs/instagram-basic-display-api
- **Instafeed.js**: https://instafeedjs.com/
- **Adobe Typekit**: https://fonts.adobe.com/

---

**Last Updated**: 2025-11-25
**Maintained By**: AI Assistants working with repository owner
**Version**: 1.0.0
