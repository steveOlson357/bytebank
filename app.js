/* ==========================================================================
   STEVEN OLSON PORTFOLIO ENGINE - AUTOMATION & INTERACTIVITY UTILITIES
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize technical utilities
    initSystemTelemetry();
    initAsynchronousClock();
});

/**
 * 1. SYSTEM TELEMETRY LOGGER
 * Prints a clean, industrial hardware-style boot log into the browser console.
 */
function initSystemTelemetry() {
    console.log("%c[SYSTEM INITIALIZATION]...", "color: #2a2a30; font-weight: bold; font-family: monospace;");
    
    const logs = [
        "Connecting to core layout modules... OK",
        "Loading Teal Theme CSS engine variables... OK",
        "Validating zero-dependency static routing arrays... OK",
        "System Check: Steven Olson Portfolio Core v2.0 Online."
    ];

    logs.forEach((log, index) => {
        setTimeout(() => {
            console.log(`%c⚡ ${log}`, "color: #a0aec0; font-family: monospace;");
        }, (index + 1) * 750);
    });
}

/**
 * 2. ASYNCHRONOUS ROLLING AVAILABILITY TRACKER
 * Automatically determines and displays system availability status based on local time metrics.
 * Professionalizes your rolling schedule footprint.
 */
function initAsynchronousClock() {
    // Locate or dynamically append status bar within the footer matrix
    const footer = document.querySelector("footer");
    if (!footer) return;

    const statusContainer = document.createElement("div");
    statusContainer.className = "tech-mono";
    statusContainer.style.fontSize = "0.85rem";
    statusContainer.style.color = "var(--text-muted)";
    statusContainer.style.marginTop = "0.5rem";

    const currentHour = new Date().getHours();
    let statusText = "";
    let badgeColor = "";

    // Define availability windows 
    if (currentHour >= 19 || currentHour <= 4) {
        statusText = "SYSTEM STATE: ACTIVE // Processing Code Repositories & Sync Inquiries";
        badgeColor = "#00f2fe"; // Neon Teal
    } else {
        statusText = "SYSTEM STATE: ASYNCHRONOUS MODE // Reviewing Commits & Staging Deployments";
        badgeColor = "#ff9f43"; // Secondary Alert Orange/Amber
    }

    statusContainer.innerHTML = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${badgeColor}; margin-right:6px; animate: pulse 2s infinite;"></span> ${statusText}`;
    footer.appendChild(statusContainer);
}
