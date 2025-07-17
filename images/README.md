# TeachInspire Images Directory

This directory contains all images for the TeachInspire landing page.

## Directory Structure

```
images/
├── hero/
│   └── transformation.png (Hourglass→Lightbulb transformation)
├── sections/
│   ├── overwhelmed-teacher.png (Overwhelmed teacher, back view)
│   └── course-dashboard.png (Course dashboard screenshot)
└── README.md (This file)
```

## Image Requirements

### Hero Section
- **File**: `hero/transformation.png`
- **Purpose**: Symbolizes efficiency transformation
- **Style**: Professional illustration/graphic
- **Alt text**: "Transformation d'un sablier en ampoule symbolisant l'efficacité"
- **Source**: Teachinspire Header.png from assets

### Problems Section
- **File**: `sections/overwhelmed-teacher.png`
- **Purpose**: Represents current pain points
- **Style**: Professional, sympathetic tone, back view
- **Alt text**: "Enseignant débordé vu de dos face à ses défis pédagogiques"
- **Source**: overwhelmed teacher.png from assets

### Training Section
- **File**: `sections/course-dashboard.png`
- **Purpose**: Shows tangible product/community interface
- **Style**: Clean interface screenshot
- **Alt text**: "Capture d'écran du tableau de bord de cours montrant l'interface utilisateur"
- **Source**: online community.png from assets

## Technical Specifications

### Format Guidelines
- **Current Format**: PNG (high quality, web-ready)
- **Optimization**: Images are web-optimized from source assets
- **Responsive**: Images scale appropriately with CSS

### Performance
- All images should include `loading="lazy"` attribute (except hero image)
- Hero image uses `loading="eager"` for immediate display
- Compress images to balance quality and file size
- Target: Keep total image payload under 500KB

### Accessibility
- All images must have descriptive French alt text
- Decorative images should have empty alt attributes (`alt=""`)
- Complex images should have longer descriptions if needed

## Image Sources

You can source images from:
- **Stock Photos**: Unsplash, Pexels (free)
- **Illustrations**: unDraw, Storyset (free)
- **Icons**: Heroicons, Feather Icons (free)
- **Custom**: Create or commission custom graphics

## Implementation Status

✅ **IMAGES SUCCESSFULLY IMPLEMENTED**

All placeholder images have been replaced with actual assets:
- Hero image: `images/hero/transformation.png` ✅
- Problems image: `images/sections/overwhelmed-teacher.png` ✅
- Training image: `images/sections/course-dashboard.png` ✅

The HTML references have been updated and all images are now live on the site.
