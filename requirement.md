# Swiggy Companion App – Functional & UI Requirements (Refined)

## 1\. Objective

Design a frontend-focused application (prototype/MVP) that simulates a personalised food discovery and recommendation experience powered by AI, with functional UI flows and mock/integrated data sources where feasible.

## 2\. Core Capabilities

1. Location-based discovery:  
   - If available, retrieve (scrape or via approved API) restaurant lists, menus, and item details for a selected location.  
   - Data points: restaurant name, cuisine types, ratings, delivery ETA, pricing info, menu categories, individual item details (name, price, description, rating if available, veg/non-veg tags, offers).  
2. AI-drivenpersonalisationn:  
   - Suggest dishes or restaurants based on user preferences (taste profile, dietary tags, past favourites, time of day, budget).  
   - Support contextual recommendations (e.g., "healthy breakfast under 200").  
3. Conversational assistant (chat):  
   - Natural-language queries (e.g., “Show top biryani near me under 300”).  
   - Multi-turn refinement (“Make it spicier options”, “Only veg now”).  
   - Tool invocation (function calling) to:  
     - Fetch menu data.  
     - Aggregate restaurant info.  
     - Scrape Google reviews (via serper.dev).  
     - Retrieve user profile/favourites/history.  
4. Dynamic dish list generation:  
   - For a user request (e.g., “Paneer dishes”), generate a structured card list:  
     - Dish name  
     - Restaurant name  
     - Price  
     - Rating (item and/or restaurant)Tags/badgess (spicy, vegan, bestseller, offer)  
     - Availability indicators  
   - On card expand/click: show Google review snippets (serper.dev), restaurant summary, and related items.  
5. User profile:  
   - View past (simulated or captured) selections/interactions.  
   - Favourite items & restaurants (add/remove).  
   - Taste preferences (cuisines, dietary filters, spice level).  
6. Gamification:  
   - Badge system based on “area completion”:  
     - Areas defined via clusters of locations (predefined polygons or proximity density).  
     - Earn a badge after interacting with (or “ordering” in simulation) from all required restaurants or a threshold within an area.  
     - Badge gallery in profile with progress indicators (e.g., 3/7 restaurants tried).  
7. Data sourcing strategy:  
   - Swiggy data: Use the most reliable scraping or reverse-engineering approach only if compliant with legal and ToS constraints; otherwise, simulate with seed JSON.  
   - Google reviews: Integrate serper.dev (query by restaurant name \+ locality).  
   - AI features: Use Gemini API for:  
     - Preference modeling  
     - Natural-language parsing  
     - Recommendation ranking rationale  
8. Frontend-only emphasis:  
   - Primary goal: polished UX, believable interactions.  
   - Where backend required (e.g., session state), use a lightweight mock API or local persistence (e.g., IndexedDB / LocalStorage) unless a minimal backend is added.  
9. Agent architecture (conceptual):  
   - Orchestrator (LLM) routes intents.  
   - Tool schema examples:  
     - getRestaurants(location)  
     - getMenu(restaurantId)  
     - searchDishes(query, filters)  
     - getGoogleReviews(restaurantName, location)  
     - getUserProfile(userId)  
     - updateFavorites(userId, entity)  
     - getAreaProgress(userId)  
10. Accessibility & performance:  
    - Semantic markup, keyboard navigation, and high-contrast mode.  
    - Lazy load large lists, skeleton placeholders, and caching of previously viewed menus.

## 3\. UI / UX Design Guidelines

- Core screens:  
  1. Onboarding/preference setup  
  2. Location & discovery dashboard  
  3. Chat assistant panel (persistent or slide-over)  
  4. Dish / restaurant detail modal or page  
  5. Profile & badges  
  6. Favorites & history  
- Chat UI:  
  - Message types: user text, AI text, structured recommendation blocks, action confirmations.  
  - Inline quick filters (chips): “Veg”, “\< ₹200”, “High Rated”, “Spicy”.  
  - Regeneration / refine buttons (e.g., “More like this”, “Cheaper”, “Healthier”).  
- Recommendation cards:  
  - Compact state: image (placeholder ok), name, price, rating, quick action (favourite).  
  - Expanded state: description, add to list, similar items, Google review snippets.  
- Badge gallery:  
  - Grid with earned vs locked states.  
  - Progress ring or bar per area.  
- Visual language:  
  - Warm palette (food-centric), subtle gradients, micro-interactions for hover/tap.  
  - Use consistent spacing scale (e.g., 4/8/12/16).  
- State feedback:  
  - Loading (skeletons), empty states with suggestion prompts.  
  - Error rescue flows (retry scrape, fallback to cached/simulated data).  
- Responsiveness:  
  - Mobile-first, adaptive layout for desktop (multi-column \+ persistent chat).

## 4\. Data Models (High-Level)

- Restaurant: id, name, location, cuisines\[\], rating, avgCost, deliveryEta, tags\[\], menu\[\]  
- MenuItem: id, restaurantId, name, description, price, rating, veg, tags\[\], availability  
- User: id, preferences { cuisines\[\], dietary\[\], spiceLevel }, favorites { restaurants\[\], items\[\] }, history\[\], badges\[\]  
- Badge: id, areaId, name, description, icon, criteria { requiredRestaurants\[\], threshold }, progress { completed, total }  
- ReviewSnippet: id, restaurantId, source, excerpt, rating, url

## 5\. AI Interaction Flow (Example)

User query → Intent parsing (dish search/preference refinement/area progress) → Tool calls (data retrieval) → AI synthesis (rank \+ annotate) → UI renders structured cards → Optional follow-up suggestions → User modifies filters → Loop.

## 6\. Technology Considerations

- Frontend stack: React (Next.js or Vite) / Vue / SvelteKit (choose one early).  
- State management: Zustand / Redux Toolkit / Vue Pinia.  
- Data fetching: React Query / SWR.  
- Design system: Tailwind \+ component primitives (Radix UI / Headless UI).  
- Agent orchestration (frontend prototype): Function registry \+ Gemini API call wrapper \+ deterministic tool invocation rules.  
- Scraping layer: Abstract behind a service interface; for prototype use, mock adapters to avoid brittle scraping during UI build.  
- Caching: In-memory \+ IndexedDB for menus already fetched.
