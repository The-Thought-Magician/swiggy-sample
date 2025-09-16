# Swiggy Companion App - Frontend Design Document

## Overview
A comprehensive design specification for building static HTML pages that demonstrate all features of the AI-powered food discovery app. This document focuses on page structure, components, and user interactions for prototype development.

## Design System Foundation

### Visual Language
- **Color Palette**: Warm food-centric colors (oranges, reds, yellows) with neutral grays
- **Typography**: Clear hierarchy with readable fonts (Inter/Roboto for UI, food-friendly display fonts for headings)
- **Spacing**: Consistent 4px scale (4, 8, 12, 16, 24, 32, 48, 64px)
- **Corner Radius**: 8px for cards, 4px for buttons, 16px for modals
- **Shadows**: Subtle elevation system (2, 4, 8, 16px blur)

### Responsive Strategy
- **Mobile-first**: 320px minimum width
- **Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px)
- **Desktop**: Multi-column layout with persistent chat sidebar

## Core Pages & Components

### 1. Onboarding/Preference Setup Page
**Route**: `/onboarding`

#### Layout Structure
```
┌─────────────────────────────────────┐
│           Header (Logo)             │
├─────────────────────────────────────┤
│          Progress Indicator         │
│             (Step 2/4)              │
├─────────────────────────────────────┤
│                                     │
│        Main Content Area            │
│     (Preference Collection)         │
│                                     │
├─────────────────────────────────────┤
│        Navigation Buttons           │
│         [Back] [Continue]           │
└─────────────────────────────────────┘
```

#### Components & Features
- **Step Progress Bar**: 4 steps total
  1. Welcome & Location Permission
  2. Cuisine Preferences (multi-select chips)
  3. Dietary Restrictions (veg/non-veg, allergies)
  4. Taste Profile (spice level, budget range)

- **Preference Selection Cards**:
  - Cuisine grid with food imagery
  - Toggle chips for dietary restrictions
  - Slider for spice tolerance (0-5 scale)
  - Budget range slider (₹0-₹1000+)

- **Interactive Elements**:
  - Animated food icons on selection
  - Real-time preference summary panel
  - Skip options for each step

### 2. Dashboard/Discovery Home Page
**Route**: `/`

#### Layout Structure
```
┌─────────────────────────────────────┐
│              Top Bar                │
│    [Location] [Profile] [Chat]      │
├─────────────────────────────────────┤
│           Search Header             │
│    [Search Bar] [Filter Chips]      │
├─────────────────────────────────────┤
│                                     │
│         Content Sections            │
│    - Personalized Recommendations   │
│    - Trending Near You              │
│    - Quick Filters                  │
│    - Restaurant Cards Grid          │
│                                     │
├─────────────────────────────────────┤
│         Bottom Navigation           │
│   [Home] [Chat] [Favorites] [Profile]│
└─────────────────────────────────────┘
```

#### Components & Features
- **Location Selector**: Dropdown with recent locations
- **Search Bar**: With voice input icon and recent searches
- **Filter Chips**: Quick access filters
  - "Veg Only", "< ₹200", "High Rated", "Fast Delivery"
  - Scrollable horizontal list

- **Recommendation Sections**:
  - **For You**: Personalized dish cards
  - **Trending**: Popular items in area
  - **New Restaurants**: Recently added venues
  - **Area Completion**: Badge progress teaser

- **Restaurant/Dish Cards** (2 variants):
  - **Compact**: Image, name, rating, price, favorite button
  - **Featured**: Larger with description, tags, quick add

### 3. Chat Assistant Interface
**Route**: `/chat` (overlay/sidebar on desktop)

#### Layout Structure
```
┌─────────────────────────────────────┐
│          Chat Header                │
│    [Close] AI Assistant [Menu]      │
├─────────────────────────────────────┤
│                                     │
│        Message History              │
│    - User messages (right)          │
│    - AI messages (left)             │
│    - Structured cards (center)      │
│                                     │
├─────────────────────────────────────┤
│         Quick Actions               │
│    [Show Menu] [Veg Only] [< ₹200]  │
├─────────────────────────────────────┤
│         Input Area                  │
│    [Text Input] [Send] [Voice]      │
└─────────────────────────────────────┘
```

#### Components & Features
- **Message Types**:
  - User text bubbles (right-aligned, blue)
  - AI responses (left-aligned, gray)
  - Structured recommendation cards (full-width)
  - Action confirmations (center, highlighted)

- **Structured Cards in Chat**:
  - Dish recommendation with image, details, actions
  - Restaurant summary with menu highlights
  - "Add to favorites" confirmation cards

- **Quick Action Chips**: Below messages
  - "More like this", "Cheaper options", "Healthier choices"
  - "Show full menu", "Check reviews"

- **Input Features**:
  - Voice-to-text button
  - Emoji reactions
  - Suggested prompts when empty

### 4. Restaurant/Dish Detail Page
**Route**: `/restaurant/[id]` or `/dish/[id]`

#### Layout Structure
```
┌─────────────────────────────────────┐
│          Hero Section               │
│    [Back] Image Gallery [Heart]     │
├─────────────────────────────────────┤
│         Title & Meta                │
│   Name, Rating, Price, Tags         │
├─────────────────────────────────────┤
│                                     │
│         Tabbed Content              │
│   [Details] [Menu] [Reviews]        │
│                                     │
├─────────────────────────────────────┤
│        Action Buttons               │
│   [Add to Favorites] [Order Now]    │
└─────────────────────────────────────┘
```

#### Components & Features
- **Hero Gallery**: Swipeable image carousel
- **Rating Display**: Stars + numerical + review count
- **Tag System**: Cuisine, dietary, offers, badges
- **Expandable Details**:
  - Restaurant: hours, location, contact
  - Dish: ingredients, nutritional info, customization

- **Tabbed Sections**:
  - **Details**: Description, ingredients, allergens
  - **Menu**: Full restaurant menu (for restaurant pages)
  - **Reviews**: Google review snippets with ratings

- **Related Items**: "Similar dishes" or "From same restaurant"
- **Action Buttons**: Large, prominent CTAs

### 5. Profile & Badge Gallery Page
**Route**: `/profile`

#### Layout Structure
```
┌─────────────────────────────────────┐
│          Profile Header             │
│    Avatar, Name, Stats Summary      │
├─────────────────────────────────────┤
│         Tab Navigation              │
│   [Overview] [Badges] [Settings]    │
├─────────────────────────────────────┤
│                                     │
│         Selected Tab Content        │
│                                     │
├─────────────────────────────────────┤
│         Quick Actions               │
│   [Edit Profile] [Preferences]      │
└─────────────────────────────────────┘
```

#### Components & Features
- **Profile Stats**: Orders, favorites, badges earned
- **Badge Gallery Grid**:
  - Earned badges (colored, animated)
  - Locked badges (grayscale with requirements)
  - Progress rings showing completion status

- **Badge Detail Modal**:
  - Area map visualization
  - Restaurant checklist (completed/remaining)
  - Progress percentage and next steps

- **Preferences Panel**: Edit taste profile, dietary restrictions
- **Account Settings**: Notifications, privacy, data export

### 6. Favorites & History Page
**Route**: `/favorites`

#### Layout Structure
```
┌─────────────────────────────────────┐
│           Page Header               │
│    [Back] Favorites [Filter]        │
├─────────────────────────────────────┤
│         Filter Tabs                 │
│  [All] [Restaurants] [Dishes]       │
├─────────────────────────────────────┤
│                                     │
│         Content Grid                │
│     Favorited Items List            │
│                                     │
├─────────────────────────────────────┤
│         Sort Options                │
│  [Recent] [Rating] [Distance]       │
└─────────────────────────────────────┘
```

#### Components & Features
- **Filter System**: By type, cuisine, price range
- **Sort Options**: Recent, rating, distance, frequency
- **Favorite Cards**: Same as discovery cards with "remove" option
- **Empty State**: Illustrations with suggestions to explore
- **Bulk Actions**: Select multiple, remove, share list

## Shared Components Library

### Navigation Components
- **Top Navigation Bar**: Logo, location, profile, chat toggle
- **Bottom Tab Bar**: Home, chat, favorites, profile icons
- **Breadcrumb Navigation**: For deep pages

### Card Components
- **Restaurant Card**: Image, name, cuisine, rating, delivery time
- **Dish Card**: Image, name, price, restaurant, rating, tags
- **Recommendation Card**: Enhanced with AI reasoning snippet
- **Progress Card**: For badge/area completion status

### Interactive Elements
- **Search Bar**: With autocomplete dropdown and voice input
- **Filter Chips**: Multi-select with count indicators
- **Rating Display**: Stars with numerical values
- **Price Range Slider**: With currency formatting
- **Toggle Switches**: For preferences and filters

### Feedback Components
- **Loading States**: Skeleton cards, shimmer effects
- **Empty States**: Illustrations with action prompts
- **Error States**: Retry buttons, fallback content
- **Success Notifications**: Toast messages, inline confirmations

## Interaction Patterns

### Page Transitions
- **Slide Transitions**: Between main sections
- **Modal Overlays**: For details, chat on mobile
- **Drawer Slides**: For filters, settings

### Micro-interactions
- **Card Hover/Tap**: Subtle scale and shadow changes
- **Button States**: Loading spinners, success checkmarks
- **Favorite Actions**: Heart animation, color change
- **Badge Unlock**: Celebration animation with confetti

### Data Loading
- **Progressive Loading**: Show layout first, then content
- **Skeleton Screens**: Match final content structure
- **Infinite Scroll**: For long lists with "load more" trigger

## Mobile-Specific Considerations

### Touch Interactions
- **Minimum Touch Targets**: 44px height for all buttons
- **Swipe Gestures**: Card dismissal, image galleries
- **Pull-to-Refresh**: On main content areas
- **Long Press**: Context menus, quick actions

### Performance Optimizations
- **Image Lazy Loading**: Progressive JPEG, WebP support
- **Virtual Scrolling**: For large lists
- **Code Splitting**: Route-based chunks
- **Service Worker**: Offline fallbacks for favorites

## Desktop Enhancements

### Layout Adaptations
- **Persistent Chat Sidebar**: Right-side panel (400px width)
- **Multi-column Grids**: 2-3 columns for cards
- **Hover States**: Detailed previews, quick actions
- **Keyboard Navigation**: Tab order, shortcuts

### Enhanced Features
- **Drag & Drop**: Reorder favorites, create collections
- **Multiple Windows**: Compare restaurants, multitask
- **Advanced Filters**: More detailed filter panels
- **Bulk Operations**: Multi-select with keyboard shortcuts

## Accessibility Features

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA Labels**: For complex components, status updates
- **Focus Management**: Logical tab order, focus traps in modals
- **Alternative Text**: Descriptive alt tags for food images

### Visual Accessibility
- **High Contrast Mode**: Alternative color scheme
- **Text Scaling**: Support up to 200% zoom
- **Motion Preferences**: Respect `prefers-reduced-motion`
- **Color Independence**: Don't rely solely on color for meaning

This design document provides the foundation for creating comprehensive static HTML pages that demonstrate all features of the Swiggy Companion App. Each page can be built independently while maintaining consistency through the shared component library and design system.