// ==========================================================================
// 1. Core Variables & DOM Updates (Module 8.1)
// ==========================================================================
const guideName = "QC Malls Tambayan Guide";
const currentYear = 2026;
let placeCount = 0;

const placeCards = document.querySelectorAll(".place-card");
placeCount = placeCards.length;

const siteTitleElement = document.getElementById("site-title");
if (siteTitleElement) {
    siteTitleElement.textContent = guideName;
}

const copyrightElement = document.getElementById("copyright-notice");
if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} ${guideName}. All rights reserved.`;
}

const totalPlacesElement = document.getElementById("total-places");
if (totalPlacesElement) {
    totalPlacesElement.textContent = `Total Tambayan Spots Reviewed: ${placeCount}`;
}

// Log initial labelled values
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Total Places Counted:", placeCount);

// ==========================================================================
// 2. Decision Logic (Module 8.3)
// ==========================================================================

// Decision 1: Rating Label (if / else if / else chain)
const rating = 4.5;
let ratingLabel = "";

if (rating >= 4) {
    ratingLabel = "Highly recommended";
} else if (rating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

const ratingElement = document.getElementById("rating-decision");
if (ratingElement) {
    ratingElement.textContent = `Rating Status: ${ratingLabel}`;
}

// Decision 2: Budget & Open Check (Logical && operator + Ternary)
const priceLevel = "cheap";
const isOpen = true;

const isGoodOption = (priceLevel === "cheap" && isOpen === true) 
    ? "Good option right now" 
    : "Maybe another time";

const budgetElement = document.getElementById("budget-decision");
if (budgetElement) {
    budgetElement.textContent = `Visit Status: ${isGoodOption}`;
}

// Decision 3: Distance Note (Boolean + Ternary)
const isNearby = true;

const distanceNote = (isNearby === true) 
    ? "Walking distance" 
    : "Better to commute";

const distanceElement = document.getElementById("distance-decision");
if (distanceElement) {
    distanceElement.textContent = `Distance: ${distanceNote}`;
}

// Log decision values to console
console.log("Rating Label Result:", ratingLabel);
console.log("Budget Check Result:", isGoodOption);
console.log("Distance Note Result:", distanceNote);