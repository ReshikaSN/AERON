const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const demoStates = [
  {health:78, label:"Moderate", risk:"Moderate watch", ph:"7.2", turbidity:18, temp:"27.4", oxygen:"5.8", waste:"1.25", plastic:"0.70", leaves:"0.40", other:"0.15", aeration:"Standby", alert:false},
  {health:61, label:"Needs attention", risk:"Elevated watch", ph:"6.6", turbidity:34, temp:"29.1", oxygen:"3.6", waste:"1.65", plastic:"0.85", leaves:"0.55", other:"0.25", aeration:"Activated (demo)", alert:true},
  {health:86, label:"Good", risk:"Lower indicator risk", ph:"7.4", turbidity:12, temp:"26.8", oxygen:"6.7", waste:"2.25", plastic:"1.20", leaves:"0.75", other:"0.30", aeration:"Standby", alert:false}
];
let demoIndex = 0;
function updateDemo() {
  const d = demoStates[demoIndex];
  const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  set("healthScore", d.health); set("healthLabel", d.label); set("riskLabel", d.risk);
  set("phValue", d.ph); set("turbidityValue", d.turbidity); set("tempValue", d.temp); set("doValue", d.oxygen);
  set("wasteTotal", d.waste); set("plasticCount", `${d.plastic} kg`); set("leafCount", `${d.leaves} kg`); set("otherCount", `${d.other} kg`);
  set("aerationStatus", d.aeration);
  const ring = document.querySelector(".health-ring");
  if (ring) ring.style.background = `conic-gradient(#24bca3 0 ${d.health}%, #e8f1f3 ${d.health}% 100%)`;
  const tb = document.getElementById("turbidityBar"); if (tb) tb.style.width = `${Math.min(100, d.turbidity * 2)}%`;
  const temp = document.getElementById("tempBar"); if (temp) temp.style.width = `${Math.min(100, (Number(d.temp) - 15) * 4)}%`;
  const oxygen = document.getElementById("doBar"); if (oxygen) oxygen.style.width = `${Math.min(100, Number(d.oxygen) * 12)}%`;
  const badge = document.getElementById("riskBadge"); if (badge) { badge.textContent = d.alert ? "!" : "✓"; badge.style.background = d.alert ? "#fff0e7" : "#e5faf5"; badge.style.color = d.alert ? "#c46c32" : "#139b87"; }
  const alertBox = document.getElementById("alertBox");
  if (alertBox) {
    alertBox.style.background = d.alert ? "#fff8f0" : "#f0fbf8";
    alertBox.style.borderColor = d.alert ? "#f4e3cf" : "#d8f3eb";
    alertBox.innerHTML = d.alert
      ? '<span style="color:#c46c32">!</span><div><b>Low dissolved oxygen — demo alert</b><p>Illustrative threshold alert. Verify readings before taking action.</p></div>'
      : '<span>✓</span><div><b>No critical demo alert</b><p>Replace sample data with validated sensor readings during implementation.</p></div>';
  }
}
document.getElementById("refreshDemo")?.addEventListener("click", () => { demoIndex = (demoIndex + 1) % demoStates.length; updateDemo(); });
updateDemo();
