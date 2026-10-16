// 1. Declare constants and variables
const guideName = "QC Malls Tambayan Guide";
const currentYear = 2026;
let placeCount = 0;

// 2. Count place cards dynamically on pages that have them
const placeCards = document.querySelectorAll(".place-card");
placeCount = placeCards.length;

// 3. Update DOM elements safely (if they exist on the page)
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

// 4. Log 3 labelled values to the console
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Total Places Counted:", placeCount);