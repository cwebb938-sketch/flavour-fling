import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════
   FLAVOUR FLING — Full Production Build
   Restaurant-quality recipes for home cooks
   ═══════════════════════════════════════════ */

const RECIPES = [
  {
    id: 1, title: "Miso-Glazed Aubergine", subtitle: "with pickled radish & sesame",
    time: "35 min", difficulty: "Intermediate", category: "Mains", cuisine: "Japanese-Inspired",
    hero: "🍆", color: "#8B6914", description: "Caramelised white miso meets silky roasted aubergine. The kind of dish that makes people ask for the recipe.",
    serves: 2, calories: 310, protein: "8g", tags: ["vegetarian", "quick", "date-night"], season: "all",
    ingredients: [
      { item: "large aubergines, halved", qty: "2", section: "Main" },
      { item: "white miso paste", qty: "3 tbsp", section: "Main" },
      { item: "mirin", qty: "2 tbsp", section: "Main" },
      { item: "rice vinegar", qty: "1 tbsp", section: "Main" },
      { item: "sesame oil", qty: "1 tbsp", section: "Main" },
      { item: "caster sugar", qty: "1 tsp", section: "Main" },
      { item: "radishes, thinly sliced", qty: "4", section: "Pickle" },
      { item: "rice wine vinegar", qty: "1 tbsp", section: "Pickle" },
      { item: "toasted sesame seeds", qty: "1 tbsp", section: "Garnish" },
      { item: "spring onions, sliced", qty: "2", section: "Garnish" },
      { item: "steamed rice", qty: "to serve", section: "Serve" },
    ],
    steps: [
      { text: "Score the aubergine flesh in a cross-hatch pattern. Rub with sesame oil and roast cut-side down at 200°C for 20 minutes.", timer: 1200 },
      { text: "Whisk together miso, mirin, rice vinegar, and sugar. Quick-pickle the radishes in rice wine vinegar with a pinch of sugar.", timer: null },
      { text: "Flip aubergines cut-side up, spoon over the miso glaze, and return to oven for 12–15 minutes until deeply caramelised.", timer: 780 },
      { text: "Serve over steamed rice, topped with pickled radish, sesame seeds, and spring onions.", timer: null },
    ],
    tips: "The key is patience with the initial roast — you want the flesh completely soft before glazing. Use the best white miso you can find.",
  },
  {
    id: 2, title: "Brown Butter Gnocchi", subtitle: "sage, walnuts & parmesan",
    time: "45 min", difficulty: "Advanced", category: "Mains", cuisine: "Italian",
    hero: "🥔", color: "#6B5B3E", description: "Pillowy potato gnocchi from scratch, finished in nutty brown butter with crispy sage leaves. Worth every minute.",
    serves: 4, calories: 520, protein: "14g", tags: ["comfort", "weekend-project", "impressive"], season: "autumn",
    ingredients: [
      { item: "floury potatoes (Maris Piper)", qty: "800g", section: "Gnocchi" },
      { item: "'00' flour, plus extra", qty: "200g", section: "Gnocchi" },
      { item: "egg yolk", qty: "1", section: "Gnocchi" },
      { item: "nutmeg, freshly grated", qty: "pinch", section: "Gnocchi" },
      { item: "unsalted butter", qty: "100g", section: "Brown Butter" },
      { item: "sage leaves", qty: "12", section: "Brown Butter" },
      { item: "walnuts, roughly chopped", qty: "50g", section: "Brown Butter" },
      { item: "Parmesan, finely grated", qty: "generous", section: "Finish" },
      { item: "flaky sea salt & black pepper", qty: "", section: "Finish" },
    ],
    steps: [
      { text: "Bake potatoes whole at 200°C until completely tender — about 1 hour. Halve and rice the flesh while still hot.", timer: 3600 },
      { text: "Make a well in the riced potato. Add flour, egg yolk, salt and nutmeg. Bring together gently. Roll into ropes, cut into pillows.", timer: null },
      { text: "Brown the butter until nutty and amber. Add sage leaves (they'll crackle) and walnuts.", timer: null },
      { text: "Boil gnocchi in well-salted water — done when they float. Transfer directly into brown butter, toss, finish with parmesan.", timer: 180 },
    ],
    tips: "Rice the potatoes while hot — cold potatoes create gluey gnocchi. Resist adding more flour; the dough should feel slightly tacky.",
  },
  {
    id: 3, title: "Crispy Duck Leg Confit", subtitle: "lentils du Puy & mustard vinaigrette",
    time: "2.5 hrs", difficulty: "Advanced", category: "Mains", cuisine: "French",
    hero: "🦆", color: "#4A3728", description: "Slow-cooked until the meat falls from the bone, then blasted until the skin shatters. Bistro-grade, your kitchen.",
    serves: 2, calories: 680, protein: "42g", tags: ["date-night", "impressive", "weekend-project"], season: "winter",
    ingredients: [
      { item: "duck legs", qty: "2", section: "Duck" },
      { item: "flaky salt", qty: "2 tbsp", section: "Duck" },
      { item: "garlic cloves, crushed", qty: "4", section: "Duck" },
      { item: "thyme sprigs", qty: "4", section: "Duck" },
      { item: "bay leaves", qty: "2", section: "Duck" },
      { item: "duck fat (to submerge)", qty: "generous", section: "Duck" },
      { item: "Puy lentils", qty: "200g", section: "Lentils" },
      { item: "carrot, finely diced", qty: "1", section: "Lentils" },
      { item: "shallots, finely diced", qty: "2", section: "Lentils" },
      { item: "Dijon mustard", qty: "2 tbsp", section: "Vinaigrette" },
      { item: "red wine vinegar", qty: "1 tbsp", section: "Vinaigrette" },
      { item: "extra virgin olive oil", qty: "3 tbsp", section: "Vinaigrette" },
      { item: "flat-leaf parsley", qty: "handful", section: "Finish" },
    ],
    steps: [
      { text: "Salt duck legs generously with flaky salt, garlic, thyme and bay. Refrigerate uncovered for at least 4 hours, ideally overnight.", timer: null },
      { text: "Brush off salt, submerge in duck fat, cook at 140°C for 2–2.5 hours until meat yields easily.", timer: 8100 },
      { text: "Simmer lentils with carrot and shallot until just tender. Whisk together mustard, vinegar and olive oil.", timer: 1500 },
      { text: "Blast duck legs skin-side up under a hot grill until skin is shatteringly crisp. Serve on dressed lentils.", timer: 300 },
    ],
    tips: "The overnight salt cure seasons the meat all the way through and draws out moisture for crispier skin.",
  },
  {
    id: 4, title: "Charred Hispi Cabbage", subtitle: "tahini, chilli oil & crispy shallots",
    time: "25 min", difficulty: "Easy", category: "Sides", cuisine: "Middle Eastern-Inspired",
    hero: "🥬", color: "#4A6741", description: "The side dish that steals the show. Smoky, creamy, crunchy — this is what vegetables should taste like.",
    serves: 4, calories: 190, protein: "5g", tags: ["vegetarian", "vegan", "quick", "crowd-pleaser"], season: "summer",
    ingredients: [
      { item: "hispi cabbage, quartered", qty: "1", section: "Main" },
      { item: "tahini", qty: "3 tbsp", section: "Dressing" },
      { item: "lemon, juiced", qty: "1", section: "Dressing" },
      { item: "garlic clove, grated", qty: "1", section: "Dressing" },
      { item: "chilli oil (Lao Gan Ma)", qty: "2 tbsp", section: "Topping" },
      { item: "banana shallots, sliced", qty: "3", section: "Topping" },
      { item: "vegetable oil", qty: "for frying", section: "Topping" },
      { item: "toasted pine nuts", qty: "2 tbsp", section: "Topping" },
      { item: "flaky sea salt", qty: "", section: "Finish" },
    ],
    steps: [
      { text: "Fry sliced shallots in vegetable oil over medium heat until deeply golden and crispy. Drain and season.", timer: 480 },
      { text: "Char cabbage wedges in a smoking-hot griddle pan, cut-side down, until blackened in spots — about 4 minutes per side.", timer: 480 },
      { text: "Loosen tahini with lemon juice and water, add grated garlic and season well.", timer: null },
      { text: "Plate charred cabbage, drizzle with tahini and chilli oil, pile on crispy shallots and pine nuts.", timer: null },
    ],
    tips: "Don't be timid with the char — you want proper blackened edges. That's where the flavour lives.",
  },
  {
    id: 5, title: "Prawn & Nduja Linguine", subtitle: "cherry tomato, white wine & basil",
    time: "20 min", difficulty: "Easy", category: "Mains", cuisine: "Italian",
    hero: "🍤", color: "#C4533A", description: "A 20-minute supper that tastes like you spent an hour. Spicy, sweet, and deeply savoury.",
    serves: 2, calories: 480, protein: "28g", tags: ["quick", "weeknight", "date-night"], season: "all",
    ingredients: [
      { item: "linguine", qty: "200g", section: "Pasta" },
      { item: "raw king prawns, peeled", qty: "200g", section: "Sauce" },
      { item: "nduja", qty: "2 tbsp", section: "Sauce" },
      { item: "cherry tomatoes, halved", qty: "250g", section: "Sauce" },
      { item: "garlic cloves, sliced", qty: "3", section: "Sauce" },
      { item: "dry white wine", qty: "100ml", section: "Sauce" },
      { item: "good olive oil", qty: "2 tbsp", section: "Sauce" },
      { item: "fresh basil leaves", qty: "handful", section: "Finish" },
      { item: "chilli flakes", qty: "pinch", section: "Finish" },
    ],
    steps: [
      { text: "Get linguine into well-salted boiling water. Heat olive oil and fry garlic until just golden.", timer: null },
      { text: "Add nduja, stir until it melts into the oil. Toss in cherry tomatoes and let them blister.", timer: 240 },
      { text: "Deglaze with white wine, reduce by half, add prawns. Cook just until pink — about 2 minutes.", timer: 120 },
      { text: "Drag linguine into sauce with tongs, add pasta water. Toss until glossy. Finish with torn basil.", timer: null },
    ],
    tips: "Pasta water is your secret weapon — the starch binds the sauce. Don't overcook the prawns. Two minutes, no more.",
  },
  {
    id: 6, title: "Saffron Risotto", subtitle: "bone marrow & gremolata",
    time: "40 min", difficulty: "Advanced", category: "Mains", cuisine: "Italian",
    hero: "🍚", color: "#DAA520", description: "Milanese risotto taken to the next level with roasted bone marrow. Cook this when you want to impress.",
    serves: 4, calories: 560, protein: "18g", tags: ["impressive", "weekend-project", "comfort"], season: "winter",
    ingredients: [
      { item: "carnaroli rice", qty: "320g", section: "Risotto" },
      { item: "saffron threads", qty: "large pinch", section: "Risotto" },
      { item: "hot chicken stock", qty: "1.2L", section: "Risotto" },
      { item: "onion, finely diced", qty: "1", section: "Risotto" },
      { item: "dry white wine", qty: "150ml", section: "Risotto" },
      { item: "cold butter, cubed", qty: "60g", section: "Mantecatura" },
      { item: "Parmesan, finely grated", qty: "80g", section: "Mantecatura" },
      { item: "bone marrow pieces", qty: "4", section: "Topping" },
      { item: "lemon, zested", qty: "1", section: "Gremolata" },
      { item: "flat-leaf parsley", qty: "2 tbsp", section: "Gremolata" },
      { item: "garlic clove, minced", qty: "1", section: "Gremolata" },
    ],
    steps: [
      { text: "Roast bone marrow at 220°C for 15–18 minutes until soft. Steep saffron in warm stock.", timer: 1020 },
      { text: "Sweat onion in butter until translucent. Add rice, toast 2 minutes until edges turn glassy.", timer: 120 },
      { text: "Add wine, stir until absorbed. Add saffron stock one ladle at a time, stirring frequently — about 18 minutes.", timer: 1080 },
      { text: "Off the heat, beat in cold butter and Parmesan vigorously (the mantecatura). Serve with bone marrow and gremolata.", timer: null },
    ],
    tips: "Two rules: never stop stirring, and always finish off the heat. The mantecatura is what makes it restaurant-quality.",
  },
  {
    id: 7, title: "Lamb Shoulder Shawarma", subtitle: "flatbreads, pickled turnip & toum",
    time: "3 hrs", difficulty: "Intermediate", category: "Mains", cuisine: "Middle Eastern",
    hero: "🐑", color: "#8B4513", description: "Slow-roasted lamb shoulder, spiced and pulled, piled into warm flatbreads. Weekend cooking at its best.",
    serves: 6, calories: 620, protein: "38g", tags: ["crowd-pleaser", "weekend-project", "sharing"], season: "all",
    ingredients: [
      { item: "lamb shoulder, bone-in", qty: "1.5kg", section: "Lamb" },
      { item: "cumin", qty: "2 tsp", section: "Spice Mix" },
      { item: "coriander", qty: "2 tsp", section: "Spice Mix" },
      { item: "paprika", qty: "1 tsp", section: "Spice Mix" },
      { item: "turmeric", qty: "1 tsp", section: "Spice Mix" },
      { item: "cinnamon", qty: "½ tsp", section: "Spice Mix" },
      { item: "garlic cloves", qty: "6", section: "Toum" },
      { item: "lemon juice", qty: "3 tbsp", section: "Toum" },
      { item: "vegetable oil", qty: "200ml", section: "Toum" },
      { item: "flatbreads", qty: "6", section: "Serve" },
      { item: "pickled turnip", qty: "to serve", section: "Serve" },
      { item: "fresh herbs & chilli sauce", qty: "to serve", section: "Serve" },
    ],
    steps: [
      { text: "Combine all spices with olive oil, salt, and crushed garlic. Rub generously over the lamb. Marinate for at least 1 hour.", timer: null },
      { text: "Roast at 170°C, covered tightly with foil, for 2.5 hours. Remove foil for the last 20 minutes to crisp.", timer: 9000 },
      { text: "For the toum: blitz garlic with salt, slowly stream in oil while blending, alternating with lemon juice until fluffy white.", timer: null },
      { text: "Pull the lamb with two forks, pile onto warm flatbreads with pickled turnip, toum, herbs and chilli sauce.", timer: null },
    ],
    tips: "The toum takes patience — add oil in a hair-thin stream or it'll split. If it does, start with a fresh garlic clove and slowly add the split mixture.",
  },
  {
    id: 8, title: "Chocolate & Olive Oil Mousse", subtitle: "flaky salt & espresso",
    time: "20 min + chill", difficulty: "Easy", category: "Desserts", cuisine: "French-Inspired",
    hero: "🍫", color: "#3E1C0D", description: "Three ingredients, no cream, no butter. Just extraordinary chocolate, olive oil, and patience. Impossibly silky.",
    serves: 4, calories: 340, protein: "6g", tags: ["date-night", "make-ahead", "impressive"], season: "all",
    ingredients: [
      { item: "dark chocolate (70%), chopped", qty: "200g", section: "Mousse" },
      { item: "good extra virgin olive oil", qty: "60ml", section: "Mousse" },
      { item: "eggs, separated", qty: "4", section: "Mousse" },
      { item: "caster sugar", qty: "2 tbsp", section: "Mousse" },
      { item: "espresso or strong coffee", qty: "1 shot", section: "Mousse" },
      { item: "flaky sea salt", qty: "pinch", section: "Finish" },
    ],
    steps: [
      { text: "Melt chocolate with olive oil and espresso over a bain-marie until glossy. Cool for 5 minutes.", timer: 300 },
      { text: "Whisk egg yolks into the chocolate one at a time. The mixture will thicken and become glossy.", timer: null },
      { text: "Whip egg whites to soft peaks, adding sugar gradually. Fold a third into chocolate to loosen, then gently fold in the rest.", timer: null },
      { text: "Divide into glasses. Refrigerate for at least 2 hours. Finish with flaky salt before serving.", timer: 7200 },
    ],
    tips: "Use the fruitiest olive oil you have — it adds a subtle peppery note that's extraordinary with dark chocolate.",
  },
  {
    id: 9, title: "Burnt Basque Cheesecake", subtitle: "crème fraîche & honey",
    time: "50 min + chill", difficulty: "Intermediate", category: "Desserts", cuisine: "Spanish",
    hero: "🧀", color: "#B8860B", description: "No base, no fuss. Intentionally burnt on top, impossibly creamy inside. The cheesecake that broke the internet.",
    serves: 8, calories: 420, protein: "9g", tags: ["crowd-pleaser", "make-ahead", "impressive"], season: "all",
    ingredients: [
      { item: "cream cheese, room temp", qty: "600g", section: "Filling" },
      { item: "caster sugar", qty: "200g", section: "Filling" },
      { item: "eggs", qty: "5", section: "Filling" },
      { item: "double cream", qty: "300ml", section: "Filling" },
      { item: "plain flour", qty: "1 tbsp", section: "Filling" },
      { item: "vanilla extract", qty: "1 tsp", section: "Filling" },
      { item: "crème fraîche", qty: "to serve", section: "Serve" },
      { item: "good honey", qty: "drizzle", section: "Serve" },
    ],
    steps: [
      { text: "Preheat oven to 220°C. Line a deep 23cm tin with scrunched, overlapping baking paper — the rustic look is part of the charm.", timer: null },
      { text: "Beat cream cheese and sugar until smooth. Add eggs one at a time. Pour in cream, add flour, vanilla, salt. Mix until just combined.", timer: null },
      { text: "Pour into tin and bake at 220°C for 35–40 minutes. Top should be deeply burnished; centre should wobble dramatically.", timer: 2280 },
      { text: "Cool completely, refrigerate for at least 4 hours. Serve at room temperature with crème fraîche and honey.", timer: null },
    ],
    tips: "Don't panic when it wobbles — that's exactly right. It sets as it cools. Room temperature cream cheese is essential.",
  },
  {
    id: 10, title: "Crispy Chilli Oil Eggs", subtitle: "on sourdough with spring onion",
    time: "10 min", difficulty: "Easy", category: "Brunch", cuisine: "Fusion",
    hero: "🍳", color: "#D2691E", description: "Fried in chilli oil until the edges are lacy and crisp, over thick sourdough. The breakfast that went viral.",
    serves: 2, calories: 380, protein: "18g", tags: ["quick", "weeknight", "brunch"], season: "all",
    ingredients: [
      { item: "eggs", qty: "4", section: "Main" },
      { item: "chilli oil (Lao Gan Ma)", qty: "3 tbsp", section: "Main" },
      { item: "sourdough, thick sliced", qty: "2 slices", section: "Main" },
      { item: "spring onions, sliced", qty: "2", section: "Topping" },
      { item: "sesame seeds", qty: "1 tsp", section: "Topping" },
      { item: "soy sauce", qty: "1 tsp", section: "Topping" },
      { item: "flaky salt", qty: "pinch", section: "Finish" },
    ],
    steps: [
      { text: "Heat chilli oil in a non-stick pan over medium-high until shimmering and the crispy bits are sizzling.", timer: null },
      { text: "Crack in eggs — they should spit immediately. Fry until whites are set and edges are deeply crispy and lacy, yolks still runny.", timer: 180 },
      { text: "Toast sourdough until golden. Top with the chilli oil eggs.", timer: null },
      { text: "Drizzle with soy sauce, scatter spring onions and sesame seeds. Hit with flaky salt.", timer: null },
    ],
    tips: "The oil needs to be properly hot before the eggs go in — that creates the crispy lace edges. Use more chilli oil than you think.",
  },
  {
    id: 11, title: "Smashed Cucumber Salad", subtitle: "sesame, garlic & black vinegar",
    time: "10 min", difficulty: "Easy", category: "Sides", cuisine: "Chinese",
    hero: "🥒", color: "#2E8B57", description: "Smashing creates jagged edges that hold onto the punchy dressing. A perfect side or snack.",
    serves: 4, calories: 65, protein: "2g", tags: ["vegetarian", "vegan", "quick", "healthy"], season: "summer",
    ingredients: [
      { item: "cucumbers", qty: "3", section: "Main" },
      { item: "garlic cloves, minced", qty: "3", section: "Dressing" },
      { item: "Chinkiang black vinegar", qty: "2 tbsp", section: "Dressing" },
      { item: "soy sauce", qty: "1 tbsp", section: "Dressing" },
      { item: "sesame oil", qty: "2 tsp", section: "Dressing" },
      { item: "caster sugar", qty: "½ tsp", section: "Dressing" },
      { item: "chilli flakes or fresh chilli", qty: "to taste", section: "Dressing" },
      { item: "toasted sesame seeds", qty: "1 tbsp", section: "Finish" },
    ],
    steps: [
      { text: "Trim cucumbers and smash with the flat of a knife — cracked open, not pulverised. Tear into rough pieces.", timer: null },
      { text: "Salt cucumber pieces and leave 5 minutes, then squeeze out excess water.", timer: 300 },
      { text: "Whisk together garlic, black vinegar, soy, sesame oil, sugar and chilli.", timer: null },
      { text: "Toss drained cucumber in dressing, pile up and scatter with sesame seeds. Eat immediately.", timer: null },
    ],
    tips: "Smashing creates irregular surfaces that absorb far more dressing than slicing ever could.",
  },
  {
    id: 12, title: "Shakshuka", subtitle: "spiced tomato, feta & herbs",
    time: "30 min", difficulty: "Easy", category: "Brunch", cuisine: "North African",
    hero: "🫕", color: "#B22222", description: "Eggs poached in smoky, spiced tomato sauce with crumbled feta. Best eaten straight from the pan.",
    serves: 4, calories: 290, protein: "16g", tags: ["vegetarian", "one-pan", "brunch", "crowd-pleaser"], season: "all",
    ingredients: [
      { item: "olive oil", qty: "2 tbsp", section: "Base" },
      { item: "onion, diced", qty: "1", section: "Base" },
      { item: "red pepper, diced", qty: "1", section: "Base" },
      { item: "garlic cloves, sliced", qty: "3", section: "Base" },
      { item: "cumin", qty: "1 tsp", section: "Spices" },
      { item: "smoked paprika", qty: "1 tsp", section: "Spices" },
      { item: "chilli flakes", qty: "½ tsp", section: "Spices" },
      { item: "tinned chopped tomatoes", qty: "400g", section: "Sauce" },
      { item: "tomato purée", qty: "1 tbsp", section: "Sauce" },
      { item: "eggs", qty: "6", section: "Main" },
      { item: "feta, crumbled", qty: "100g", section: "Topping" },
      { item: "fresh coriander & parsley", qty: "handful", section: "Topping" },
      { item: "crusty bread", qty: "to serve", section: "Serve" },
    ],
    steps: [
      { text: "Soften onion and pepper in olive oil for 8 minutes. Add garlic and spices, cook another minute until fragrant.", timer: 540 },
      { text: "Pour in tomatoes and purée, season well, simmer 10 minutes until thick.", timer: 600 },
      { text: "Make wells, crack in eggs, scatter feta. Cover and cook on low 6–8 minutes until whites are set, yolks runny.", timer: 420 },
      { text: "Finish with torn herbs and olive oil. Serve straight from pan with crusty bread.", timer: null },
    ],
    tips: "The sauce needs to be thick before the eggs go in — watery sauce means unevenly poached eggs. Keep the lid on; steam cooks the tops.",
  },
];

const CATEGORIES = ["All", "Mains", "Sides", "Brunch", "Desserts"];
const TAGS = ["quick", "vegetarian", "date-night", "impressive", "weeknight", "comfort", "crowd-pleaser", "healthy"];

const COLLECTIONS = [
  { title: "Date Night In", desc: "Recipes to impress someone special", tag: "date-night", emoji: "🕯️", gradient: "linear-gradient(135deg, #2D1B2E, #1A0A1B)" },
  { title: "20-Minute Meals", desc: "Real food, no time wasted", tag: "quick", emoji: "⚡", gradient: "linear-gradient(135deg, #1B2D1E, #0A1B0D)" },
  { title: "Weekend Projects", desc: "When you've got time to enjoy the process", tag: "weekend-project", emoji: "🔪", gradient: "linear-gradient(135deg, #2D261B, #1B150A)" },
  { title: "Crowd Pleasers", desc: "Cook once, feed many, take credit", tag: "crowd-pleaser", emoji: "🎉", gradient: "linear-gradient(135deg, #1B1E2D, #0A0D1B)" },
];

const AD_SLOTS = [
  { id: 1, label: "Sponsored", sublabel: "Premium Japanese knives — handcrafted in Seki", icon: "🔪", bg: "linear-gradient(135deg, #1E1E1E 0%, #141414 100%)" },
  { id: 2, label: "Partner", sublabel: "Artisan olive oil, direct from Puglia", icon: "🫒", bg: "linear-gradient(135deg, #1A1E14 0%, #0F1209 100%)" },
  { id: 3, label: "Sponsored", sublabel: "Specialty spice box — curated monthly", icon: "🌶️", bg: "linear-gradient(135deg, #1E1414 0%, #120909 100%)" },
];

// ─── Components ──────────────────────────

function AdBanner({ slot, style: sx = {} }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: slot.bg, borderRadius: 14, padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid rgba(255,255,255,0.05)", cursor: "pointer", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)", transform: h ? "scale(1.005)" : "scale(1)", ...sx }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontSize: 24 }}>{slot.icon}</span>
        <div>
          <div style={{ color: "#888", fontSize: 9, textTransform: "uppercase", letterSpacing: 2, marginBottom: 2 }}>{slot.label}</div>
          <div style={{ color: "#bbb", fontSize: 13, fontFamily: "var(--ff-serif)" }}>{slot.sublabel}</div>
        </div>
      </div>
      <div style={{ color: "#555", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, border: "1px solid #333", borderRadius: 20, padding: "3px 10px" }}>Ad</div>
    </div>
  );
}

function Timer({ seconds, accentColor }) {
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(seconds);
  const ref = useRef(null);
  useEffect(() => {
    if (running && remaining > 0) { ref.current = setInterval(() => setRemaining(r => r - 1), 1000); }
    else clearInterval(ref.current);
    return () => clearInterval(ref.current);
  }, [running, remaining]);
  useEffect(() => { if (remaining === 0 && running) setRunning(false); }, [remaining, running]);
  const m = Math.floor(remaining / 60), s = remaining % 60;
  const pct = ((seconds - remaining) / seconds) * 100;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#1A1A1A", border: `1px solid ${running ? accentColor + "44" : "#2A2A2A"}`, borderRadius: 10, padding: "6px 14px", marginTop: 10, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${pct}%`, background: `${accentColor}15`, transition: "width 1s linear" }} />
      <span style={{ fontFamily: "var(--ff-mono)", fontSize: 14, color: remaining === 0 ? "#4ADE80" : "#ccc", zIndex: 1 }}>
        {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
      </span>
      <button onClick={() => { if (remaining === 0) setRemaining(seconds); else setRunning(!running); }}
        style={{ background: running ? `${accentColor}22` : "transparent", border: `1px solid ${running ? accentColor : "#444"}`, color: running ? accentColor : "#888", borderRadius: 6, padding: "2px 10px", fontSize: 10, cursor: "pointer", textTransform: "uppercase", letterSpacing: 1, fontFamily: "var(--ff-mono)", zIndex: 1 }}>
        {remaining === 0 ? "Reset" : running ? "Pause" : "Start"}
      </button>
    </div>
  );
}

function Tag({ label, active, onClick, color }) {
  return (
    <button onClick={onClick} style={{ padding: "6px 14px", borderRadius: 20, border: active ? `1px solid ${color || "#C4533A"}` : "1px solid #252525", background: active ? `${color || "#C4533A"}12` : "transparent", color: active ? (color || "#C4533A") : "#666", cursor: "pointer", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.8, transition: "all 0.2s", fontFamily: "var(--ff-body)", whiteSpace: "nowrap" }}>
      {label}
    </button>
  );
}

function RecipeCard({ recipe, onClick, index, bookmarked, onBookmark }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={() => onClick(recipe)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ cursor: "pointer", borderRadius: 16, overflow: "hidden", background: "#161616", border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)", transform: h ? "translateY(-6px)" : "translateY(0)", boxShadow: h ? "0 24px 60px rgba(0,0,0,0.45)" : "0 2px 16px rgba(0,0,0,0.15)", opacity: 0, animation: `fadeSlideIn 0.5s ease ${index * 0.06}s forwards`, position: "relative" }}>
      <button onClick={e => { e.stopPropagation(); onBookmark(recipe.id); }}
        style={{ position: "absolute", top: 12, left: 12, zIndex: 10, background: bookmarked ? "#C4533A" : "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)", border: "none", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: "#fff", transition: "all 0.3s" }}>
        {bookmarked ? "♥" : "♡"}
      </button>
      <div style={{ height: 180, background: `linear-gradient(160deg, ${recipe.color}33 0%, ${recipe.color}11 60%, #16161600 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 60%, ${recipe.color}22 0%, transparent 60%)` }} />
        <span style={{ transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)", transform: h ? "scale(1.2) rotate(-8deg)" : "scale(1)" }}>{recipe.hero}</span>
        <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(10px)", borderRadius: 20, padding: "4px 10px", fontSize: 11, color: "#bbb", fontFamily: "var(--ff-mono)" }}>{recipe.time}</div>
      </div>
      <div style={{ padding: "16px 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
          <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1.5, color: recipe.color, fontWeight: 600 }}>{recipe.category}</span>
          <span style={{ color: "#2A2A2A" }}>·</span>
          <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1.5, color: "#555" }}>{recipe.difficulty}</span>
          <span style={{ color: "#2A2A2A" }}>·</span>
          <span style={{ fontSize: 9, color: "#555", fontFamily: "var(--ff-mono)" }}>{recipe.calories} kcal</span>
        </div>
        <h3 style={{ fontSize: 19, fontWeight: 400, color: "#F0EDE8", margin: 0, fontFamily: "var(--ff-serif)", lineHeight: 1.2 }}>{recipe.title}</h3>
        <p style={{ fontSize: 12.5, color: "#777", margin: "3px 0 0", fontStyle: "italic", fontFamily: "var(--ff-serif)" }}>{recipe.subtitle}</p>
      </div>
    </div>
  );
}

function RecipeDetail({ recipe, onBack, bookmarked, onBookmark, onAddToList }) {
  const [activeStep, setActiveStep] = useState(null);
  const [servings, setServings] = useState(recipe.serves);
  const [added, setAdded] = useState(false);

  return (
    <div style={{ animation: "fadeIn 0.4s ease", maxWidth: 740, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 8 }}>
        <button onClick={onBack} style={{ background: "none", border: "1px solid #2A2A2A", color: "#888", padding: "8px 18px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontFamily: "var(--ff-mono)", transition: "all 0.2s" }}
          onMouseEnter={e => { e.target.style.borderColor = "#555"; e.target.style.color = "#ddd"; }}
          onMouseLeave={e => { e.target.style.borderColor = "#2A2A2A"; e.target.style.color = "#888"; }}>← Back</button>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => { onAddToList(recipe); setAdded(true); setTimeout(() => setAdded(false), 2000); }}
            style={{ background: added ? "#4ADE8022" : "transparent", border: added ? "1px solid #4ADE80" : "1px solid #2A2A2A", color: added ? "#4ADE80" : "#888", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontFamily: "var(--ff-mono)", transition: "all 0.3s" }}>
            {added ? "✓ Added" : "+ Shopping List"}
          </button>
          <button onClick={() => onBookmark(recipe.id)}
            style={{ background: bookmarked ? "#C4533A22" : "transparent", border: bookmarked ? "1px solid #C4533A" : "1px solid #2A2A2A", color: bookmarked ? "#C4533A" : "#888", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontFamily: "var(--ff-mono)", transition: "all 0.3s" }}>
            {bookmarked ? "♥ Saved" : "♡ Save"}
          </button>
        </div>
      </div>

      <div style={{ height: 260, borderRadius: 20, background: `linear-gradient(160deg, ${recipe.color}33 0%, ${recipe.color}0A 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 96, marginBottom: 36, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 25% 75%, ${recipe.color}33 0%, transparent 55%)` }} />
        {recipe.hero}
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
        {[recipe.category, recipe.cuisine, recipe.difficulty, recipe.time, `${recipe.calories} kcal`, `${recipe.protein} protein`].map((m, i) => (
          <span key={i} style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1.5, color: i === 0 ? recipe.color : "#555", fontWeight: i === 0 ? 600 : 400 }}>
            {i > 0 && <span style={{ color: "#222", marginRight: 10 }}>·</span>}{m}
          </span>
        ))}
      </div>

      <h1 style={{ fontSize: 42, fontWeight: 400, color: "#F0EDE8", margin: "0 0 4px", fontFamily: "var(--ff-serif)", lineHeight: 1.1 }}>{recipe.title}</h1>
      <p style={{ fontSize: 17, color: "#888", fontStyle: "italic", fontFamily: "var(--ff-serif)", margin: "0 0 16px" }}>{recipe.subtitle}</p>
      <p style={{ fontSize: 15, color: "#999", lineHeight: 1.7, marginBottom: 12, maxWidth: 580 }}>{recipe.description}</p>

      <div style={{ display: "flex", gap: 6, marginBottom: 36, flexWrap: "wrap" }}>
        {recipe.tags.map(t => (
          <span key={t} style={{ fontSize: 10, color: "#555", border: "1px solid #222", borderRadius: 12, padding: "3px 10px", textTransform: "uppercase", letterSpacing: 0.8 }}>{t}</span>
        ))}
      </div>

      <AdBanner slot={AD_SLOTS[0]} style={{ marginBottom: 36 }} />

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, padding: "14px 20px", background: "#161616", borderRadius: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
        <span style={{ fontSize: 12, color: "#777", textTransform: "uppercase", letterSpacing: 1, fontFamily: "var(--ff-mono)" }}>Serves</span>
        <div style={{ display: "flex", gap: 4 }}>
          {[1, 2, 4, 6, 8].map(n => (
            <button key={n} onClick={() => setServings(n)} style={{ width: 34, height: 34, borderRadius: 8, border: servings === n ? `1px solid ${recipe.color}` : "1px solid #282828", background: servings === n ? `${recipe.color}18` : "transparent", color: servings === n ? recipe.color : "#555", cursor: "pointer", fontSize: 13, fontFamily: "var(--ff-mono)", transition: "all 0.2s" }}>{n}</button>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 400, color: "#F0EDE8", fontFamily: "var(--ff-serif)", marginBottom: 16 }}>Ingredients</h2>
      <div style={{ background: "#161616", borderRadius: 16, padding: 24, marginBottom: 36, border: "1px solid rgba(255,255,255,0.04)" }}>
        {(() => {
          const sec = {};
          recipe.ingredients.forEach(ing => { if (!sec[ing.section]) sec[ing.section] = []; sec[ing.section].push(ing); });
          return Object.entries(sec).map(([s, items], si) => (
            <div key={s} style={{ marginBottom: si < Object.keys(sec).length - 1 ? 20 : 0 }}>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: recipe.color, marginBottom: 8, fontWeight: 600, opacity: 0.8 }}>{s}</div>
              {items.map((ing, i) => (
                <div key={i} style={{ padding: "8px 0", borderBottom: i < items.length - 1 ? "1px solid #1E1E1E" : "none", color: "#CCC", fontSize: 14, lineHeight: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>{ing.item}</span>
                  <span style={{ color: "#777", fontFamily: "var(--ff-mono)", fontSize: 13, whiteSpace: "nowrap", marginLeft: 16 }}>{ing.qty || "—"}</span>
                </div>
              ))}
            </div>
          ));
        })()}
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 400, color: "#F0EDE8", fontFamily: "var(--ff-serif)", marginBottom: 16 }}>Method</h2>
      <div style={{ marginBottom: 36 }}>
        {recipe.steps.map((step, i) => (
          <div key={i} onClick={() => setActiveStep(activeStep === i ? null : i)}
            style={{ padding: "18px 22px", background: activeStep === i ? "#1A1A1A" : "#161616", borderRadius: 14, marginBottom: 6, cursor: "pointer", border: activeStep === i ? `1px solid ${recipe.color}28` : "1px solid rgba(255,255,255,0.03)", transition: "all 0.3s ease" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: activeStep === i ? recipe.color : "#222", color: activeStep === i ? "#fff" : "#555", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, flexShrink: 0, fontFamily: "var(--ff-mono)", transition: "all 0.3s" }}>{i + 1}</div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: activeStep === i ? "#ddd" : "#888", transition: "color 0.3s" }}>{step.text}</p>
                {step.timer && activeStep === i && <Timer seconds={step.timer} accentColor={recipe.color} />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {recipe.tips && (
        <div style={{ background: `linear-gradient(135deg, ${recipe.color}0A 0%, transparent 100%)`, borderRadius: 16, padding: 24, marginBottom: 36, borderLeft: `3px solid ${recipe.color}88` }}>
          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: recipe.color, marginBottom: 8, fontWeight: 600 }}>Chef's Tip</div>
          <p style={{ fontSize: 14, color: "#AAA", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{recipe.tips}</p>
        </div>
      )}

      <AdBanner slot={AD_SLOTS[1]} style={{ marginBottom: 36 }} />

      <div style={{ display: "flex", gap: 10, paddingBottom: 20 }}>
        <button onClick={() => { if (navigator.share) navigator.share({ title: recipe.title, text: recipe.description }); }}
          style={{ background: "transparent", border: "1px solid #2A2A2A", color: "#777", padding: "10px 20px", borderRadius: 10, cursor: "pointer", fontSize: 12, fontFamily: "var(--ff-mono)" }}>↗ Share</button>
        <button onClick={() => window.print()}
          style={{ background: "transparent", border: "1px solid #2A2A2A", color: "#777", padding: "10px 20px", borderRadius: 10, cursor: "pointer", fontSize: 12, fontFamily: "var(--ff-mono)" }}>⎙ Print</button>
      </div>
    </div>
  );
}

function ShoppingList({ items, onClose, onClear }) {
  const [checked, setChecked] = useState({});
  const toggle = k => setChecked(p => ({ ...p, [k]: !p[k] }));
  const grouped = {};
  items.forEach(i => { i.ingredients.forEach(ing => { if (!grouped[ing.section]) grouped[ing.section] = []; const ex = grouped[ing.section].find(g => g.item === ing.item); if (!ex) grouped[ing.section].push({ ...ing }); }); });

  return (
    <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: 380, maxWidth: "90vw", background: "#141414", borderLeft: "1px solid #222", zIndex: 200, animation: "slideInRight 0.35s cubic-bezier(0.16,1,0.3,1)", display: "flex", flexDirection: "column", boxShadow: "-20px 0 60px rgba(0,0,0,0.5)" }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid #1E1E1E", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0, fontFamily: "var(--ff-serif)", fontSize: 20, fontWeight: 400, color: "#F0EDE8" }}>Shopping List</h3>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={onClear} style={{ background: "none", border: "1px solid #2A2A2A", color: "#666", padding: "4px 12px", borderRadius: 8, cursor: "pointer", fontSize: 11, fontFamily: "var(--ff-mono)" }}>Clear</button>
          <button onClick={onClose} style={{ background: "none", border: "1px solid #2A2A2A", color: "#666", padding: "4px 12px", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>×</button>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
        {items.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#444" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🛒</div>
            <p style={{ fontFamily: "var(--ff-serif)", fontSize: 16, color: "#555" }}>Your list is empty</p>
            <p style={{ fontSize: 12, color: "#444" }}>Add recipes to build your shopping list</p>
          </div>
        ) : Object.entries(grouped).map(([section, sitems]) => (
          <div key={section} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "#C4533A", marginBottom: 8, fontWeight: 600 }}>{section}</div>
            {sitems.map((ing, i) => {
              const k = `${section}-${ing.item}`;
              return (
                <div key={i} onClick={() => toggle(k)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid #1A1A1A", cursor: "pointer", opacity: checked[k] ? 0.4 : 1, transition: "opacity 0.2s" }}>
                  <div style={{ width: 18, height: 18, borderRadius: 4, border: checked[k] ? "1px solid #C4533A" : "1px solid #333", background: checked[k] ? "#C4533A" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", transition: "all 0.2s", flexShrink: 0 }}>{checked[k] && "✓"}</div>
                  <span style={{ flex: 1, fontSize: 13, color: checked[k] ? "#666" : "#ccc", textDecoration: checked[k] ? "line-through" : "none" }}>{ing.item}</span>
                  <span style={{ fontSize: 12, color: "#555", fontFamily: "var(--ff-mono)", whiteSpace: "nowrap" }}>{ing.qty || "—"}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectionCard({ collection, onClick, index }) {
  const [h, setH] = useState(false);
  const count = RECIPES.filter(r => r.tags.includes(collection.tag)).length;
  return (
    <div onClick={() => onClick(collection.tag)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: collection.gradient, borderRadius: 16, padding: "28px 24px", cursor: "pointer", border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", transform: h ? "translateY(-4px)" : "translateY(0)", boxShadow: h ? "0 16px 40px rgba(0,0,0,0.3)" : "none", minWidth: 220, opacity: 0, animation: `fadeSlideIn 0.5s ease ${index * 0.1}s forwards` }}>
      <div style={{ fontSize: 32, marginBottom: 12 }}>{collection.emoji}</div>
      <h3 style={{ fontFamily: "var(--ff-serif)", fontSize: 18, fontWeight: 400, color: "#F0EDE8", margin: "0 0 4px" }}>{collection.title}</h3>
      <p style={{ fontSize: 12, color: "#777", margin: "0 0 12px", lineHeight: 1.4 }}>{collection.desc}</p>
      <span style={{ fontSize: 10, color: "#555", fontFamily: "var(--ff-mono)", textTransform: "uppercase", letterSpacing: 1 }}>{count} recipes →</span>
    </div>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState(false);
  return (
    <div style={{ background: "linear-gradient(135deg, #1A1714 0%, #111 100%)", borderRadius: 20, padding: "48px 40px", textAlign: "center", border: "1px solid rgba(255,255,255,0.04)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, #C4533A08 0%, transparent 50%)" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: "#C4533A", marginBottom: 16, fontWeight: 600 }}>Weekly Dispatch</div>
        <h2 style={{ fontFamily: "var(--ff-serif)", fontSize: 32, fontWeight: 400, color: "#F0EDE8", margin: "0 0 8px" }}>New recipes, every Thursday</h2>
        <p style={{ fontSize: 14, color: "#777", marginBottom: 28, maxWidth: 400, margin: "0 auto 28px" }}>One email a week. Seasonal recipes, technique deep-dives, and the occasional rant about overcooked pasta.</p>
        {sub ? (
          <div style={{ color: "#4ADE80", fontSize: 14, fontFamily: "var(--ff-mono)" }}>✓ You're in. First dispatch this Thursday.</div>
        ) : (
          <div style={{ display: "flex", gap: 8, justifyContent: "center", maxWidth: 400, margin: "0 auto" }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
              style={{ flex: 1, background: "#1E1E1E", border: "1px solid #2A2A2A", borderRadius: 10, padding: "12px 16px", color: "#F0EDE8", fontSize: 13, outline: "none", fontFamily: "var(--ff-body)", transition: "border-color 0.2s" }}
              onFocus={e => e.target.style.borderColor = "#444"} onBlur={e => e.target.style.borderColor = "#2A2A2A"} />
            <button onClick={() => { if (email.includes("@")) setSub(true); }}
              style={{ background: "#C4533A", border: "none", color: "#fff", padding: "12px 24px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "var(--ff-body)" }}
              onMouseEnter={e => e.target.style.opacity = 0.85} onMouseLeave={e => e.target.style.opacity = 1}>Subscribe</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════

export default function FlavourFlingApp() {
  const [view, setView] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTags, setActiveTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [shoppingListRecipes, setShoppingListRecipes] = useState([]);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const toggleBookmark = id => setBookmarks(p => p.includes(id) ? p.filter(b => b !== id) : [...p, id]);
  const addToShoppingList = recipe => setShoppingListRecipes(p => p.find(r => r.id === recipe.id) ? p : [...p, recipe]);
  const toggleTag = tag => setActiveTags(p => p.includes(tag) ? p.filter(t => t !== tag) : [...p, tag]);
  const openRecipe = recipe => { setSelectedRecipe(recipe); setView("recipe"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goHome = () => { setView("home"); setSelectedRecipe(null); };

  const filtered = RECIPES.filter(r => {
    const mc = activeCategory === "All" || r.category === activeCategory;
    const mt = activeTags.length === 0 || activeTags.some(t => r.tags.includes(t));
    const ms = !searchQuery || r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) || r.tags.some(t => t.includes(searchQuery.toLowerCase()));
    const mb = view === "bookmarks" ? bookmarks.includes(r.id) : true;
    return mc && mt && ms && mb;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#111", color: "#F0EDE8", fontFamily: "var(--ff-body)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        :root { --ff-serif: 'Playfair Display', Georgia, serif; --ff-body: 'Outfit', -apple-system, sans-serif; --ff-mono: 'JetBrains Mono', monospace; --accent: #C4533A; }
        @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #282828; border-radius: 3px; }
        ::selection { background: #C4533A44; color: #fff; }
      `}</style>

      <header style={{ padding: "16px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.03)", position: "sticky", top: 0, background: "rgba(17,17,17,0.85)", backdropFilter: "blur(24px) saturate(1.5)", zIndex: 100 }}>
        <div onClick={goHome} style={{ cursor: "pointer", display: "flex", alignItems: "baseline", gap: 2 }}>
          <h1 style={{ fontSize: 24, fontWeight: 400, margin: 0, fontFamily: "var(--ff-serif)", letterSpacing: -0.3 }}>flavour fling</h1>
          <span style={{ color: "#C4533A", fontSize: 24, lineHeight: 1 }}>.</span>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <button onClick={goHome} style={{ background: view === "home" ? "#1E1E1E" : "transparent", border: "none", color: view === "home" ? "#F0EDE8" : "#666", padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontSize: 12, fontWeight: 500, fontFamily: "var(--ff-body)" }}>Recipes</button>
          <button onClick={() => { setView("bookmarks"); setSelectedRecipe(null); }} style={{ background: view === "bookmarks" ? "#1E1E1E" : "transparent", border: "none", color: view === "bookmarks" ? "#F0EDE8" : "#666", padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontSize: 12, fontWeight: 500, fontFamily: "var(--ff-body)", position: "relative" }}>
            Saved
            {bookmarks.length > 0 && <span style={{ position: "absolute", top: 2, right: 4, width: 16, height: 16, borderRadius: "50%", background: "#C4533A", color: "#fff", fontSize: 9, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ff-mono)" }}>{bookmarks.length}</span>}
          </button>
          <button onClick={() => setShowShoppingList(true)} style={{ background: "transparent", border: "1px solid #252525", color: "#888", padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontSize: 12, fontFamily: "var(--ff-mono)", display: "flex", alignItems: "center", gap: 6 }}>🛒 {shoppingListRecipes.length}</button>
        </nav>
        <div style={{ position: "relative" }}>
          <input type="text" placeholder="Search..." value={searchQuery} onChange={e => { setSearchQuery(e.target.value); if (view === "recipe") goHome(); }}
            style={{ background: "#1A1A1A", border: "1px solid #222", borderRadius: 10, padding: "8px 14px 8px 32px", color: "#F0EDE8", fontSize: 13, width: 180, outline: "none", fontFamily: "var(--ff-body)", transition: "all 0.3s ease" }}
            onFocus={e => { e.target.style.borderColor = "#444"; e.target.style.width = "240px"; }}
            onBlur={e => { e.target.style.borderColor = "#222"; e.target.style.width = "180px"; }} />
          <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#444", fontSize: 13 }}>⌕</span>
        </div>
      </header>

      <main style={{ padding: "28px 28px 80px", maxWidth: 1200, margin: "0 auto" }}>
        {view === "recipe" && selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onBack={goHome} bookmarked={bookmarks.includes(selectedRecipe.id)} onBookmark={toggleBookmark} onAddToList={addToShoppingList} />
        ) : (
          <>
            {view === "home" && !searchQuery && activeTags.length === 0 && (
              <div style={{ marginBottom: 48, animation: "fadeIn 0.7s ease" }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3.5, color: "#444", marginBottom: 14, fontWeight: 500 }}>Restaurant-quality cooking at home</p>
                <h2 style={{ fontSize: 52, fontWeight: 400, fontFamily: "var(--ff-serif)", lineHeight: 1.05, margin: "0 0 14px", maxWidth: 560, background: "linear-gradient(135deg, #F0EDE8 0%, #C8C0B4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Cook like you mean it<span style={{ WebkitTextFillColor: "#C4533A" }}>.</span>
                </h2>
                <p style={{ fontSize: 15, color: "#666", maxWidth: 460, lineHeight: 1.65, margin: 0 }}>Chef-developed recipes that teach you the techniques behind great food. No shortcuts, no compromises — just honest cooking.</p>
              </div>
            )}

            {view === "bookmarks" && (
              <div style={{ marginBottom: 36, animation: "fadeIn 0.5s ease" }}>
                <h2 style={{ fontSize: 36, fontWeight: 400, fontFamily: "var(--ff-serif)", color: "#F0EDE8", margin: "0 0 8px" }}>Your saved recipes</h2>
                <p style={{ fontSize: 14, color: "#666", margin: 0 }}>{bookmarks.length === 0 ? "Nothing saved yet — browse recipes and hit the heart." : `${bookmarks.length} recipe${bookmarks.length > 1 ? "s" : ""} saved`}</p>
              </div>
            )}

            {view === "home" && !searchQuery && activeTags.length === 0 && activeCategory === "All" && (
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ fontFamily: "var(--ff-serif)", fontSize: 20, fontWeight: 400, color: "#F0EDE8", marginBottom: 16 }}>Collections</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
                  {COLLECTIONS.map((col, i) => <CollectionCard key={col.tag} collection={col} index={i} onClick={tag => toggleTag(tag)} />)}
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
              {CATEGORIES.map(cat => <Tag key={cat} label={cat} active={activeCategory === cat} onClick={() => setActiveCategory(cat)} />)}
            </div>
            <div style={{ display: "flex", gap: 6, marginBottom: 28, flexWrap: "wrap" }}>
              {TAGS.map(tag => <Tag key={tag} label={tag} active={activeTags.includes(tag)} onClick={() => toggleTag(tag)} color="#DAA520" />)}
              {activeTags.length > 0 && <button onClick={() => setActiveTags([])} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 11, fontFamily: "var(--ff-mono)", padding: "6px 8px" }}>× clear</button>}
            </div>

            <AdBanner slot={AD_SLOTS[2]} style={{ marginBottom: 28 }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {filtered.map((r, i) => <RecipeCard key={r.id} recipe={r} onClick={openRecipe} index={i} bookmarked={bookmarks.includes(r.id)} onBookmark={toggleBookmark} />)}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "80px 20px", color: "#444" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🍳</div>
                <p style={{ fontFamily: "var(--ff-serif)", fontSize: 20, color: "#555" }}>{view === "bookmarks" ? "No saved recipes yet" : "No recipes found"}</p>
                <p style={{ fontSize: 12, color: "#444" }}>{view === "bookmarks" ? "Browse and save recipes you love" : "Try a different search or filter"}</p>
              </div>
            )}

            {filtered.length > 3 && <AdBanner slot={AD_SLOTS[0]} style={{ marginTop: 28 }} />}
            {view === "home" && <div style={{ marginTop: 56 }}><NewsletterSection /></div>}
            <AdBanner slot={AD_SLOTS[1]} style={{ marginTop: 40 }} />

            <footer style={{ marginTop: 72, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.03)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24 }}>
              <div>
                <div style={{ fontFamily: "var(--ff-serif)", fontSize: 18 }}>flavour fling<span style={{ color: "#C4533A" }}>.</span></div>
                <p style={{ fontSize: 11, color: "#383838", marginTop: 4, maxWidth: 260, lineHeight: 1.5 }}>Restaurant-quality recipes for home cooks who care about technique.</p>
              </div>
              <div style={{ display: "flex", gap: 28 }}>
                <div>
                  <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 2, color: "#444", marginBottom: 10 }}>Navigate</div>
                  {["Recipes", "Collections", "About", "Contact"].map(l => <div key={l} style={{ fontSize: 12, color: "#555", marginBottom: 6, cursor: "pointer" }}>{l}</div>)}
                </div>
                <div>
                  <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 2, color: "#444", marginBottom: 10 }}>Social</div>
                  {["Instagram", "TikTok", "YouTube", "Newsletter"].map(l => <div key={l} style={{ fontSize: 12, color: "#555", marginBottom: 6, cursor: "pointer" }}>{l}</div>)}
                </div>
              </div>
              <div style={{ fontSize: 10, color: "#282828", fontFamily: "var(--ff-mono)", alignSelf: "flex-end" }}>© 2026 Flavour Fling</div>
            </footer>
          </>
        )}
      </main>

      {showShoppingList && (
        <>
          <div onClick={() => setShowShoppingList(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 199, animation: "fadeIn 0.2s ease" }} />
          <ShoppingList items={shoppingListRecipes} onClose={() => setShowShoppingList(false)} onClear={() => setShoppingListRecipes([])} />
        </>
      )}
    </div>
  );
}
