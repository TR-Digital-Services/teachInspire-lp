# TeachInspire Landing Page

A conversion-focused landing page for TeachInspire AI training services targeting French-speaking language institutes.

## 🎯 Project Overview

**Client**: Grégory Le Dall  
**Target**: French-speaking language institute decision makers  
**Goal**: Convert visitors to discovery call bookings  
**Local URL**: http://teachinspire.test/

## 🚀 Features

### ✅ Implemented
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1200px
- **Critical Header Animation**: Animated text sequence in hero section
- **Semantic HTML**: Proper structure with accessibility in mind
- **Performance Optimized**: Lazy loading, optimized CSS, fast load times
- **French Content**: All content in French as required
- **CTA Integration**: Cal.com booking and email contact links
- **Accessibility**: WCAG 2.1 AA compliance features

### 🎨 Design System
- **Colors**: Organic, natural palette with creamy backgrounds
- **Typography**: Playfair Display (headings) + Inter (body)
- **Layout**: Clean, sophisticated simplicity
- **Animations**: Smooth transitions with reduced motion support

## 📁 Project Structure

```
TeachInspire/
├── index.html              # Main landing page
├── css/
│   ├── main.css            # Main styles and responsive design
│   └── animations.css      # Header animation styles
├── js/
│   ├── main.js            # General functionality
│   └── animations.js      # Header animation logic
├── images/
│   ├── hero/              # Hero section images
│   ├── sections/          # Section-specific images
│   └── README.md          # Image requirements guide
└── README.md              # This file
```

## 🔧 Technical Stack

- **HTML5**: Semantic markup with proper meta tags
- **CSS3**: Custom properties, Grid, Flexbox
- **Vanilla JavaScript**: No frameworks, optimized performance
- **Google Fonts**: Inter + Playfair Display
- **Accessibility**: WCAG 2.1 AA compliant

## 🎬 Header Animation

The critical header animation displays in the hero section:

**Sequence**: "Créer des cours sur mesure est..."
1. "chronophage" (red, strikethrough) - 1.5s
2. "rapide" (green) - 1.5s
3. "générique" (red, strikethrough) - 1.5s
4. "adapté" (green) - 1.5s
5. "complexe" (red, strikethrough) - 1.5s
6. "fluide" (green, remains visible)

**Features**:
- Smooth CSS transitions
- Accessibility support (reduced motion)
- Mobile responsive
- Plays once on page load

## 📱 Responsive Breakpoints

```css
/* Mobile First (default) */
.container { max-width: 100%; padding: 0 20px; }

/* Tablet */
@media (min-width: 768px) {
  .container { max-width: 750px; padding: 0 40px; }
}

/* Desktop */
@media (min-width: 1200px) {
  .container { max-width: 1200px; padding: 0 60px; }
}
```

## 🔗 Integrations

### Primary CTA
- **Cal.com**: https://cal.com/greg-teachinspire/decouverte-teachinspire
- Opens in new tab
- Tracked for analytics

### Secondary CTA
- **Email**: greg@teachinspire.me
- Pre-filled subject: "Demande d'information TeachInspire"
- Tracked for analytics

## 🖼️ Images Needed

1. **Hero**: Hourglass→Lightbulb transformation (SVG preferred)
2. **Problems**: Overwhelmed teacher, back view (JPG)
3. **Training**: Course dashboard screenshot (PNG)

See `images/README.md` for detailed specifications.

## 🚀 Getting Started

### For Laragon Development

1. **Ensure the site is accessible at**: http://teachinspire.test/
2. **Add images**: Place required images in the `images/` subdirectories
3. **Test**: Open http://teachinspire.test/ in your browser
4. **Verify animation**: Check that header animation plays correctly

### Testing Checklist

- [ ] Header animation works on page load
- [ ] All CTAs link correctly (Cal.com + email)
- [ ] Images load with proper lazy loading
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] French text displays correctly
- [ ] Page loads under 3 seconds
- [ ] Accessibility features work (keyboard navigation, screen readers)

## 🎯 Conversion Goals

### Primary CTA
- **Action**: Book discovery call
- **Platform**: Cal.com integration
- **Duration**: 45 minutes
- **Target**: Language institute decision makers

### Secondary CTA
- **Action**: Direct email contact
- **Email**: greg@teachinspire.me
- **Response**: Within 24 hours

## 📊 Performance Targets

- **Load Time**: Under 3 seconds
- **Mobile Performance**: 90+ Lighthouse score
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Proper meta tags and semantic HTML

## 🔧 Development Notes

### Next Steps
1. Add actual images to replace placeholders
2. Test header animation across different devices
3. Verify Cal.com integration works correctly
4. Run accessibility audit
5. Optimize images for web delivery
6. Test email functionality

### Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile iOS Safari, Android Chrome
- Graceful degradation for older browsers

## 📞 Support

**Project Owner**: Grégory Le Dall  
**Email**: greg@teachinspire.me  
**Response Time**: Within 24 hours

---

**Note**: All content is in French as this targets French-speaking language institutes.
