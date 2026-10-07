/* =========================================================
   LIFEASSIST
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   DOM
========================================================= */

const welcomeScreen =
  document.getElementById("welcomeScreen");

const loadingScreen =
  document.getElementById("loadingScreen");

const dashboard =
  document.getElementById("dashboard");

const detailOverlay =
  document.getElementById("detailOverlay");

const goBtn =
  document.getElementById("goBtn");

const editProfileBtn =
  document.getElementById("editProfileBtn");

const closeDetailBtn =
  document.getElementById("closeDetailBtn");

const toast =
  document.getElementById("toast");


/* INPUTS */

const weightInput =
  document.getElementById("weight");

const heightInput =
  document.getElementById("height");

const ageInput =
  document.getElementById("age");

const genderInput =
  document.getElementById("gender");

const activityInput =
  document.getElementById("activity");


/* =========================================================
   APP STATE
========================================================= */

let userProfile = null;
let dailyPlan = null;
let currentNutrient = null;
let currentFilter = "all";


/* =========================================================
   ACTIVITY LABELS
========================================================= */

const activityLabels = {

  "1.2":
    "Sedentary",

  "1.375":
    "Lightly Active",

  "1.55":
    "Moderately Active",

  "1.725":
    "Very Active"

};


/* =========================================================
   NUTRIENT DATABASE
========================================================= */

const nutrientInfo = {

  /* =======================================================
     PROTEIN
  ======================================================== */

  protein: {

    title: "Protein",

    eyebrow: "PROTEIN TARGET",

    unit: "g / day",

    accent: "#b28cff",

    mode: "protein",

    intro:
      "Protein helps support and maintain body tissues. You don't need fish or chicken every day — eggs, dal, curd, paneer, chana, peanuts and soy can all contribute.",

    foods: [

      {
        name: "Eggs",
        type: "egg",
        serving: "2 whole eggs",
        nutrient: "~12–13g protein",
        extra: "~10g fat",
        cost: "₹12–₹16",
        tags: ["egg"]
      },

      {
        name: "Dal",
        type: "veg",
        serving: "1 cup cooked",
        nutrient: "~12–15g protein",
        extra: "~30g carbs",
        cost: "₹10–₹15",
        tags: ["veg"]
      },

      {
        name: "Curd",
        type: "veg",
        serving: "200g",
        nutrient: "~7–10g protein",
        extra: "Calcium source",
        cost: "₹15–₹25",
        tags: ["veg"]
      },

      {
        name: "Paneer",
        type: "veg",
        serving: "100g",
        nutrient: "~18–20g protein",
        extra: "~20g fat",
        cost: "₹35–₹50",
        tags: ["veg"]
      },

      {
        name: "Roasted Peanuts",
        type: "veg",
        serving: "50g",
        nutrient: "~12–13g protein",
        extra: "Healthy fats",
        cost: "₹7–₹12",
        tags: ["veg"]
      },

      {
        name: "Chana",
        type: "veg",
        serving: "1 cup cooked",
        nutrient: "~14–15g protein",
        extra: "Good fibre",
        cost: "₹12–₹18",
        tags: ["veg"]
      },

      {
        name: "Chicken",
        type: "nonveg",
        serving: "100g cooked",
        nutrient: "~25–30g protein",
        extra: "Lean protein option",
        cost: "₹35–₹55",
        tags: ["nonveg"]
      },

      {
        name: "Fish",
        type: "nonveg",
        serving: "100g cooked",
        nutrient: "~20–25g protein",
        extra: "Varies by fish",
        cost: "₹35–₹80",
        tags: ["nonveg"]
      }

    ],

    samplePlanTitle:
      "Budget-friendly protein day",

    samplePlan: [

      ["Breakfast", "2 eggs + oats + milk", "~18–22g"],
      ["Lunch", "Rice + 1 cup sambar + curd", "~18–22g"],
      ["Snack", "Roasted peanuts / chana", "~8–12g"],
      ["Dinner", "Dosa + sambar + 2 eggs", "~20–25g"]

    ],

    note:
      "Protein target is a general planning estimate. Your actual requirement can vary with age, body size, activity, health status and goals."

  },


  /* =======================================================
     WATER
  ======================================================== */

  water: {

    title: "Water",

    eyebrow: "HYDRATION TARGET",

    unit: "L / day",

    accent: "#60dfff",

    mode: "water",

    intro:
      "Water is the main hydration source. Buttermilk, soups and water-rich foods can also contribute to daily fluid intake.",

    foods: [

      {
        name: "Plain Water",
        type: "veg",
        serving: "250ml glass",
        nutrient: "250ml fluid",
        extra: "Main hydration source",
        cost: "≈ ₹0–₹2",
        tags: ["veg"]
      },

      {
        name: "Buttermilk",
        type: "veg",
        serving: "250ml",
        nutrient: "~200ml+ fluid",
        extra: "Refreshing option",
        cost: "₹10–₹20",
        tags: ["veg"]
      },

      {
        name: "Watermelon",
        type: "veg",
        serving: "200g",
        nutrient: "~180ml water",
        extra: "Also provides potassium",
        cost: "₹10–₹20",
        tags: ["veg"]
      },

      {
        name: "Cucumber",
        type: "veg",
        serving: "100g",
        nutrient: "~95g water",
        extra: "Light & hydrating",
        cost: "₹5–₹10",
        tags: ["veg"]
      },

      {
        name: "Vegetable Soup",
        type: "veg",
        serving: "1 bowl",
        nutrient: "~200–250ml fluid",
        extra: "Depends on recipe",
        cost: "₹15–₹30",
        tags: ["veg"]
      },

      {
        name: "Tender Coconut",
        type: "veg",
        serving: "1 coconut",
        nutrient: "~200–300ml fluid",
        extra: "Contains electrolytes",
        cost: "₹30–₹50",
        tags: ["veg"]
      }

    ],

    samplePlanTitle:
      "Simple hydration routine",

    samplePlan: [

      ["Morning", "1 glass water after waking", "~250ml"],
      ["Breakfast", "Water + optional milk", "~250–400ml"],
      ["Lunch", "Water / buttermilk", "~300–500ml"],
      ["Afternoon", "2 glasses spread across the afternoon", "~500ml"],
      ["Dinner", "Water with meal", "~300–400ml"],
      ["Evening/Night", "Sip according to thirst", "As needed"]

    ],

    note:
      "The water target is a rough planning estimate, not a measurement of your hydration status. Heat, exercise, illness and other factors can change fluid needs. Don't force excessive water."

  },


  /* =======================================================
     CARBS
  ======================================================== */

  carbs: {

    title: "Carbohydrates",

    eyebrow: "CARB TARGET",

    unit: "g / day",

    accent: "#8affc7",

    mode: "carbs",

    intro:
      "Carbohydrates are a major source of everyday energy. Choose familiar foods such as rice, dosa, idly, oats, chapati, fruits and potatoes.",

    foods: [

      {
        name: "Cooked Rice",
        type: "veg",
        serving: "1 cup cooked",
        nutrient: "~40–50g carbs",
        extra: "~200 kcal",
        cost: "₹8–₹15",
        tags: ["veg"]
      },

      {
        name: "Dosa",
        type: "veg",
        serving: "2 medium dosa",
        nutrient: "~35–45g carbs",
        extra: "Depends on recipe",
        cost: "₹15–₹30",
        tags: ["veg"]
      },

      {
        name: "Idly",
        type: "veg",
        serving: "3 medium idly",
        nutrient: "~35–40g carbs",
        extra: "Easy breakfast option",
        cost: "₹12–₹24",
        tags: ["veg"]
      },

      {
        name: "Oats",
        type: "veg",
        serving: "50g dry oats",
        nutrient: "~30g carbs",
        extra: "~4–5g fibre",
        cost: "₹10–₹20",
        tags: ["veg"]
      },

      {
        name: "Chapati",
        type: "veg",
        serving: "2 medium",
        nutrient: "~30–35g carbs",
        extra: "Depends on flour/size",
        cost: "₹10–₹20",
        tags: ["veg"]
      },

      {
        name: "Banana",
        type: "veg",
        serving: "1 medium",
        nutrient: "~20–25g carbs",
        extra: "Convenient snack",
        cost: "₹5–₹10",
        tags: ["veg"]
      },

      {
        name: "Potato",
        type: "veg",
        serving: "150g cooked",
        nutrient: "~25–30g carbs",
        extra: "Preparation changes calories",
        cost: "₹5–₹10",
        tags: ["veg"]
      }

    ],

    samplePlanTitle:
      "Tasty South Indian carb pattern",

    samplePlan: [

      ["Breakfast", "Oats + banana + peanut butter", "~55–65g carbs"],
      ["Lunch", "Rice + sambar + vegetables", "~55–70g carbs"],
      ["Snack", "Banana / fruit + curd", "~25–35g carbs"],
      ["Dinner", "2–3 dosa + sambar", "~45–65g carbs"]

    ],

    note:
      "Carbohydrate target here is calculated from your estimated calorie plan after setting protein and fat planning targets. Actual needs vary by activity and goals."

  },


  /* =======================================================
     FIBRE
  ======================================================== */

  fibre: {

    title: "Fibre",

    eyebrow: "FIBRE TARGET",

    unit: "g / day",

    accent: "#a6e56f",

    mode: "fibre",

    intro:
      "Fibre from vegetables, fruits, pulses, oats and seeds supports normal digestion and helps make meals more filling.",

    foods: [

      {
        name: "Mixed Vegetables",
        type: "veg",
        serving: "1 cup cooked",
        nutrient: "~3–5g fibre",
        extra: "Varies by vegetables",
        cost: "₹15–₹30",
        tags: ["veg"]
      },

      {
        name: "Cucumber",
        type: "veg",
        serving: "100g",
        nutrient: "~0.5–1g fibre",
        extra: "High water content",
        cost: "₹5–₹10",
        tags: ["veg"]
      },

      {
        name: "Carrot",
        type: "veg",
        serving: "100g",
        nutrient: "~2–3g fibre",
        extra: "Easy snack",
        cost: "₹8–₹12",
        tags: ["veg"]
      },

      {
        name: "Dal",
        type: "veg",
        serving: "1 cup cooked",
        nutrient: "~7–9g fibre",
        extra: "Also provides protein",
        cost: "₹10–₹15",
        tags: ["veg"]
      },

      {
        name: "Oats",
        type: "veg",
        serving: "50g dry",
        nutrient: "~4–5g fibre",
        extra: "Also provides carbs",
        cost: "₹10–₹20",
        tags: ["veg"]
      },

      {
        name: "Apple",
        type: "veg",
        serving: "1 medium",
        nutrient: "~4g fibre",
        extra: "Whole fruit preferred",
        cost: "₹15–₹30",
        tags: ["veg"]
      },

      {
        name: "Chana",
        type: "veg",
        serving: "1 cup cooked",
        nutrient: "~10–12g fibre",
        extra: "Also provides protein",
        cost: "₹12–₹18",
        tags: ["veg"]
      },

      {
        name: "Flax / Chia Seeds",
        type: "veg",
        serving: "15g",
        nutrient: "~4–5g fibre",
        extra: "Use small amounts",
        cost: "₹8–₹15",
        tags: ["veg"]
      }

    ],

    samplePlanTitle:
      "Easy fibre + digestion pattern",

    samplePlan: [

      ["Breakfast", "Oats + banana", "~6–8g fibre"],
      ["Lunch", "Vegetables + cucumber + sambar", "~8–12g"],
      ["Snack", "Fruit + small handful nuts", "~4–6g"],
      ["Dinner", "Vegetables + dal/chana", "~7–10g"]

    ],

    note:
      "Fibre works best with enough fluids. Increase fibre gradually if your current intake is low. Cucumber and vegetables support a balanced diet, but no single food guarantees better digestion or nutrient absorption."

  },


  /* =======================================================
     FAT
  ======================================================== */

  fat: {

    title: "Healthy Fats",

    eyebrow: "FAT TARGET",

    unit: "g / day",

    accent: "#ffb36b",

    mode: "fat",

    intro:
      "Dietary fat provides energy and helps the body absorb fat-soluble vitamins. Nuts, seeds, eggs, peanut butter and cooking oils can contribute.",

    foods: [

      {
        name: "Peanut Butter",
        type: "veg",
        serving: "1 tbsp",
        nutrient: "~8g fat",
        extra: "~4g protein",
        cost: "₹6–₹12",
        tags: ["veg"]
      },

      {
        name: "Peanuts",
        type: "veg",
        serving: "30g",
        nutrient: "~14g fat",
        extra: "~7–8g protein",
        cost: "₹5–₹8",
        tags: ["veg"]
      },

      {
        name: "Eggs",
        type: "egg",
        serving: "2 whole eggs",
        nutrient: "~10g fat",
        extra: "~12–13g protein",
        cost: "₹12–₹16",
        tags: ["egg"]
      },

      {
        name: "Sesame Seeds",
        type: "veg",
        serving: "20g",
        nutrient: "~10g fat",
        extra: "Also provides minerals",
        cost: "₹5–₹10",
        tags: ["veg"]
      },

      {
        name: "Cooking Oil",
        type: "veg",
        serving: "1 tsp",
        nutrient: "~5g fat",
        extra: "~45 kcal",
        cost: "₹2–₹4",
        tags: ["veg"]
      },

      {
        name: "Cashews",
        type: "veg",
        serving: "30g",
        nutrient: "~13g fat",
        extra: "~5g protein",
        cost: "₹20–₹30",
        tags: ["veg"]
      }

    ],

    samplePlanTitle:
      "Simple healthy-fat pattern",

    samplePlan: [

      ["Breakfast", "1 tbsp peanut butter with oats", "~8g fat"],
      ["Lunch", "Measured cooking oil + curd", "~8–12g"],
      ["Snack", "30g peanuts", "~14g"],
      ["Dinner", "2 eggs / measured oil", "~10–15g"]

    ],

    note:
      "Fat is energy-dense, so portion size matters. The app uses a planning percentage rather than treating one specific fat source as mandatory."

  }

};


/* =========================================================
   MEAL DATABASE
========================================================= */

const meals = [

  {
    time: "BREAKFAST",

    title:
      "Oats + Peanut Butter + Banana",

    description:
      "50g oats + 1 tbsp peanut butter + banana + 200ml milk",

    protein: "~15–20g",

    cost: 50

  },

  {
    time: "LUNCH",

    title:
      "Rice + Sambar + Vegetables + Cucumber",

    description:
      "1–1.5 cups rice + 1 cup sambar + vegetables + cucumber + curd",

    protein: "~18–22g",

    cost: 65

  },

  {
    time: "SNACK",

    title:
      "Roasted Peanuts / Chana + Fruit",

    description:
      "Small handful peanuts or chana + one seasonal fruit",

    protein: "~7–12g",

    cost: 25

  },

  {
    time: "DINNER",

    title:
      "Dosa + Sambar + Eggs",

    description:
      "2–3 dosa + sambar + 2 eggs. Vegetarian option: extra dal/paneer/curd.",

    protein: "~20–25g",

    cost: 60

  }

];


/* =========================================================
   SHOW TOAST
========================================================= */

let toastTimer;

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {

    toast.classList.remove("show");

  }, 2500);
}


/* =========================================================
   VALIDATE PROFILE
========================================================= */

function validateProfile() {

  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);
  const age = Number(ageInput.value);

  if (
    !weight ||
    weight < 20 ||
    weight > 300
  ) {

    showToast("Enter a valid weight between 20 and 300 kg.");

    weightInput.focus();

    return false;
  }

  if (
    !height ||
    height < 100 ||
    height > 250
  ) {

    showToast("Enter a valid height between 100 and 250 cm.");

    heightInput.focus();

    return false;
  }

  if (
    !age ||
    age < 13 ||
    age > 100
  ) {

    showToast("Enter a valid age between 13 and 100.");

    ageInput.focus();

    return false;
  }

  if (!genderInput.value) {

    showToast("Please select your gender.");

    genderInput.focus();

    return false;
  }

  if (!activityInput.value) {

    showToast("Please select your activity level.");

    activityInput.focus();

    return false;
  }

  return true;
}


/* =========================================================
   CALCULATE PLAN
========================================================= */

function calculatePlan(profile) {

  let bmr;

  if (profile.gender === "male") {

    bmr =
      (10 * profile.weight) +
      (6.25 * profile.height) -
      (5 * profile.age) +
      5;

  } else {

    bmr =
      (10 * profile.weight) +
      (6.25 * profile.height) -
      (5 * profile.age) -
      161;
  }


  const maintenanceCalories =
    bmr * profile.activity;


  /*
    Planning targets

    Protein:
    1.6g/kg

    Water:
    0.035 L/kg

    Fibre:
    14g per 1000 kcal

    Fat:
    25% of calories

    Carbs:
    remaining calories
  */

  const protein =
    profile.weight * 1.6;

  const water =
    profile.weight * 0.035;

  const fibre =
    (maintenanceCalories / 1000) * 14;

  const fat =
    (maintenanceCalories * 0.25) / 9;

  const proteinCalories =
    protein * 4;

  const fatCalories =
    fat * 9;

  const remainingCalories =
    Math.max(
      maintenanceCalories -
      proteinCalories -
      fatCalories,
      0
    );

  const carbs =
    remainingCalories / 4;


  return {

    bmr:
      Math.round(bmr),

    maintenanceCalories:
      Math.round(maintenanceCalories),

    protein:
      Math.round(protein),

    water:
      Number(water.toFixed(1)),

    fibre:
      Math.round(fibre),

    fat:
      Math.round(fat),

    carbs:
      Math.round(carbs)

  };
}


/* =========================================================
   SAVE PROFILE
========================================================= */

function saveProfile() {

  userProfile = {

    weight:
      Number(weightInput.value),

    height:
      Number(heightInput.value),

    age:
      Number(ageInput.value),

    gender:
      genderInput.value,

    activity:
      Number(activityInput.value)

  };

  localStorage.setItem(
    "lifeassistProfile",
    JSON.stringify(userProfile)
  );
}


/* =========================================================
   LOAD PROFILE
========================================================= */

function loadSavedProfile() {

  const saved =
    localStorage.getItem("lifeassistProfile");

  if (!saved) return;

  try {

    const profile =
      JSON.parse(saved);

    if (!profile) return;

    weightInput.value =
      profile.weight || "";

    heightInput.value =
      profile.height || "";

    ageInput.value =
      profile.age || "";

    genderInput.value =
      profile.gender || "";

    activityInput.value =
      profile.activity || "";

  } catch (error) {

    console.log("Could not load saved profile.");

  }
}


/* =========================================================
   LOADING ANIMATION
========================================================= */

function startLoading() {

  welcomeScreen.classList.add("hidden");

  loadingScreen.classList.remove("hidden");

  const progress =
    document.getElementById("loadingProgressBar");

  const title =
    document.getElementById("loadingTitle");

  const text =
    document.getElementById("loadingText");

  const steps = [

    {
      progress: 20,
      title: "Understanding your lifestyle",
      text: "Reading your profile...",
      step: 1
    },

    {
      progress: 45,
      title: "Calculating your energy needs",
      text: "Estimating your maintenance calories...",
      step: 2
    },

    {
      progress: 70,
      title: "Building your nutrition targets",
      text: "Balancing protein, carbs, fibre, fat and water...",
      step: 3
    },

    {
      progress: 92,
      title: "Creating your food plan",
      text: "Finding tasty and practical food choices...",
      step: 4
    }

  ];


  steps.forEach((item, index) => {

    setTimeout(() => {

      progress.style.width =
        item.progress + "%";

      title.textContent =
        item.title;

      text.textContent =
        item.text;

      for (
        let i = 1;
        i <= 4;
        i++
      ) {

        document
          .getElementById(`step${i}`)
          .classList.toggle(
            "active",
            i <= item.step
          );
      }

    }, index * 550);

  });


  setTimeout(() => {

    progress.style.width = "100%";

  }, 2150);


  setTimeout(() => {

    dailyPlan =
      calculatePlan(userProfile);

    renderDashboard();

    loadingScreen.classList.add("hidden");

    dashboard.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, 2550);
}


/* =========================================================
   RENDER DASHBOARD
========================================================= */

function renderDashboard() {

  if (!dailyPlan) return;


  document.getElementById(
    "calorieValue"
  ).textContent =
    dailyPlan.maintenanceCalories.toLocaleString();


  document.getElementById(
    "orbCalories"
  ).textContent =
    dailyPlan.maintenanceCalories.toLocaleString();


  document.getElementById(
    "bmrValue"
  ).textContent =
    dailyPlan.bmr.toLocaleString();


  document.getElementById(
    "activityValue"
  ).textContent =
    activityLabels[
      String(userProfile.activity)
    ] || "Active";


  document.getElementById(
    "proteinValue"
  ).textContent =
    dailyPlan.protein;


  document.getElementById(
    "waterValue"
  ).textContent =
    dailyPlan.water;


  document.getElementById(
    "carbsValue"
  ).textContent =
    dailyPlan.carbs;


  document.getElementById(
    "fibreValue"
  ).textContent =
    dailyPlan.fibre;


  document.getElementById(
    "fatValue"
  ).textContent =
    dailyPlan.fat;


  renderMeals();

}


/* =========================================================
   RENDER MEALS
========================================================= */

function renderMeals() {

  const mealList =
    document.getElementById("mealList");

  mealList.innerHTML = "";


  let totalCost = 0;


  meals.forEach((meal, index) => {

    totalCost += meal.cost;


    const card =
      document.createElement("div");

    card.className =
      "meal-card";

    card.style.animation =
      `welcomeIn .5s ${index * .08}s ease both`;


    card.innerHTML = `

      <div class="meal-time">
        ${meal.time}
      </div>

      <div>

        <h3>
          ${meal.title}
        </h3>

        <p>
          ${meal.description}
        </p>

      </div>

      <div class="meal-meta">

        <strong>
          ${meal.protein}
        </strong>

        <span>
          ₹${meal.cost} approx.
        </span>

      </div>

    `;

    mealList.appendChild(card);

  });


  document.getElementById(
    "dailyCost"
  ).textContent =
    totalCost;


  document.getElementById(
    "weeklyCost"
  ).textContent =
    totalCost * 7;


  document.getElementById(
    "monthlyCost"
  ).textContent =
    totalCost * 30;
}


/* =========================================================
   OPEN NUTRIENT
========================================================= */

function openNutrient(nutrient) {

  if (!nutrientInfo[nutrient]) return;

  currentNutrient =
    nutrient;

  currentFilter =
    "all";


  const data =
    nutrientInfo[nutrient];


  /* CSS ACCENT */

  document.documentElement.style.setProperty(
    "--accent",
    data.accent
  );


  /* TEXT */

  document.getElementById(
    "detailEyebrow"
  ).textContent =
    data.eyebrow;


  document.getElementById(
    "detailTitle"
  ).textContent =
    data.title;


  document.getElementById(
    "detailIntro"
  ).textContent =
    data.intro;


  /* TARGET */

  const target =
    dailyPlan[nutrient];


  document.getElementById(
    "detailAmount"
  ).textContent =
    nutrient === "water"
      ? target.toFixed(1)
      : target;


  document.getElementById(
    "detailUnit"
  ).textContent =
    data.unit;


  /* TARGET PROGRESS */

  const progress =
    document.getElementById(
      "targetProgress"
    );

  progress.style.width =
    "72%";


  /* BODY */

  updateBodyVisual(
    data.mode,
    data.title
  );


  /* FOODS */

  renderFoods();


  /* SAMPLE PLAN */

  renderSamplePlan(
    data
  );


  /* NOTE */

  document.getElementById(
    "nutrientNote"
  ).textContent =
    data.note;


  /* FILTER BUTTON */

  document
    .querySelectorAll(".food-filter")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.filter === "all"
      );

    });


  /* SHOW */

  detailOverlay.classList.remove(
    "hidden"
  );

  detailOverlay.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}


/* =========================================================
   BODY VISUAL
========================================================= */

function updateBodyVisual(
  mode,
  label
) {

  const bodyStage =
    document.querySelector(
      ".body-stage"
    );

  const waterFill =
    document.getElementById(
      "waterFill"
    );

  const waterRect =
    document.getElementById(
      "waterRect"
    );

  const bodyLabel =
    document.getElementById(
      "bodyModeLabel"
    );

  const bodyEnergy =
    document.getElementById(
      "bodyEnergy"
    );


  bodyStage.classList.remove(
    "mode-protein",
    "mode-water",
    "mode-carbs",
    "mode-fibre",
    "mode-fat"
  );


  bodyStage.classList.add(
    `mode-${mode}`
  );


  bodyLabel.textContent =
    mode === "water"
      ? "ILLUSTRATIVE HYDRATION"
      : `${label.toUpperCase()} • BODY FOCUS`;


  /* WATER MODE */

  if (mode === "water") {

    waterFill.classList.add(
      "active"
    );

    /*
      Lower y = higher water level.

      This is a decorative animation,
      NOT actual hydration measurement.
    */

    waterRect.setAttribute(
      "y",
      "185"
    );

    waterRect.setAttribute(
      "height",
      "335"
    );

  } else {

    waterFill.classList.remove(
      "active"
    );

    waterRect.setAttribute(
      "y",
      "300"
    );

    waterRect.setAttribute(
      "height",
      "220"
    );

  }


  /* ENERGY RINGS */

  if (
    mode === "carbs" ||
    mode === "protein" ||
    mode === "fat"
  ) {

    bodyEnergy.style.opacity =
      ".55";

  } else {

    bodyEnergy.style.opacity =
      ".20";
  }

}


/* =========================================================
   RENDER FOODS
========================================================= */

function renderFoods() {

  const list =
    document.getElementById(
      "foodList"
    );

  const data =
    nutrientInfo[currentNutrient];


  list.innerHTML = "";


  let filteredFoods =
    data.foods;


  if (currentFilter !== "all") {

    filteredFoods =
      data.foods.filter(
        food =>
          food.tags.includes(
            currentFilter
          )
      );

  }


  if (!filteredFoods.length) {

    list.innerHTML = `

      <div class="nutrient-note">
        No foods found for this filter.
      </div>

    `;

    return;
  }


  filteredFoods.forEach(
    (food, index) => {

      const card =
        document.createElement("div");

      card.className =
        "food-card";

      card.style.animation =
        `cardIn .35s ${index * .04}s ease both`;


      card.innerHTML = `

        <div class="food-card-top">

          <h4>
            ${food.name}
          </h4>

          <span class="food-type">
            ${food.type.toUpperCase()}
          </span>

        </div>

        <div class="food-serving">
          ${food.serving}
        </div>

        <div class="food-stats">

          <span class="food-stat">
            ${food.nutrient}
          </span>

          <span class="food-stat">
            ${food.extra}
          </span>

        </div>

        <div class="food-cost">
          ${food.cost} approx.
        </div>

      `;

      list.appendChild(card);

    }
  );

}


/* =========================================================
   SAMPLE PLAN
========================================================= */

function renderSamplePlan(data) {

  document.getElementById(
    "samplePlanTitle"
  ).textContent =
    data.samplePlanTitle;


  const content =
    document.getElementById(
      "samplePlanContent"
    );

  content.innerHTML = "";


  data.samplePlan.forEach(
    row => {

      const div =
        document.createElement("div");

      div.className =
        "sample-row";


      div.innerHTML = `

        <span>
          ${row[0]}
        </span>

        <strong>
          ${row[1]}
          <br />
          <span style="
            color: var(--accent);
            font-size: 8px;
          ">
            ${row[2]}
          </span>
        </strong>

      `;

      content.appendChild(div);

    }
  );

}


/* =========================================================
   CLOSE DETAIL
========================================================= */

function closeDetail() {

  detailOverlay.classList.add(
    "hidden"
  );

  detailOverlay.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

  currentNutrient =
    null;

}


/* =========================================================
   EDIT PROFILE
========================================================= */

function editProfile() {

  dashboard.classList.add(
    "hidden"
  );

  detailOverlay.classList.add(
    "hidden"
  );

  welcomeScreen.classList.remove(
    "hidden"
  );

  document.body.style.overflow =
    "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   EVENT — GO
========================================================= */

goBtn.addEventListener(
  "click",
  () => {

    if (!validateProfile()) {
      return;
    }

    saveProfile();

    startLoading();

  }
);


/* =========================================================
   EVENT — NUTRIENT CARDS
========================================================= */

document
  .querySelectorAll(".nutrition-card")
  .forEach(card => {

    card.addEventListener(
      "click",
      () => {

        const nutrient =
          card.dataset.nutrient;

        openNutrient(
          nutrient
        );

      }
    );

  });


/* =========================================================
   EVENT — CLOSE
========================================================= */

closeDetailBtn.addEventListener(
  "click",
  closeDetail
);


/* =========================================================
   EVENT — BACKDROP
========================================================= */

document
  .querySelector(".detail-backdrop")
  .addEventListener(
    "click",
    closeDetail
  );


/* =========================================================
   EVENT — EDIT
========================================================= */

editProfileBtn.addEventListener(
  "click",
  editProfile
);


/* =========================================================
   EVENT — FOOD FILTER
========================================================= */

document
  .querySelectorAll(".food-filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        currentFilter =
          button.dataset.filter;


        document
          .querySelectorAll(".food-filter")
          .forEach(btn => {

            btn.classList.toggle(
              "active",
              btn === button
            );

          });


        renderFoods();

      }
    );

  });


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      !detailOverlay.classList.contains(
        "hidden"
      )
    ) {

      closeDetail();

    }

  }
);


/* =========================================================
   ENTER KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter" &&
      !welcomeScreen.classList.contains(
        "hidden"
      )
    ) {

      const active =
        document.activeElement;

      if (
        active.tagName === "INPUT" ||
        active.tagName === "SELECT"
      ) {

        if (validateProfile()) {

          saveProfile();

          startLoading();

        }

      }

    }

  }
);


/* =========================================================
   INITIAL LOAD
========================================================= */

loadSavedProfile();


/* =========================================================
   OPTIONAL: DEMO BODY WATER ANIMATION
========================================================= */

const waterFill =
  document.getElementById(
    "waterFill"
  );

if (waterFill) {

  waterFill.addEventListener(
    "click",
    () => {

      /*
        Decorative only.
      */

      waterFill.classList.toggle(
        "active"
      );

    }
  );

}