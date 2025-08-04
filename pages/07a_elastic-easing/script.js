//TODO - Elastic Ease

//That’s the feeling elastic easing creates. It simulates the behavior of a spring or rubber band.

//When something moves with elastic easing, it overshoots the target dramatically and then snaps back with diminishing oscillations before finally settling. This creates a feeling of tension and release.
//ease: "elastic.in"      // stretches in, like it’s charging up
//ease: "elastic.out"     // stretches past the target, then settles
//ease: "elastic.inOut"   // elastic on both ends

//*But it’s not just that. You can completely customize how dramatic it feels:
// ease: "elastic.out(1, 0.3)"

//! As you can see, elastic accepts two arguments,
//* Amplitude (1)

// It decides how far it stretches.
// The higher the value, the bigger the wilder the overshoot.

//* Period (0.3)

// It decides how fast it oscillates.
// The smaller the value, the quicker the snapping.
// Select the "Repeat" button

//? When to use?
//It’s great for onboarding animations, gamified elements, or any attention-grabbing actions. Anything literally that you want to behave like a spring.

import gsap from "gsap";

const repeat = document.querySelector(".repeat");

// Sample data for each day of the week
const data = [
  { label: "Mon", value: 80 },
  { label: "Tue", value: 60 },
  { label: "Wed", value: 100 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 50 },
  { label: "Sun", value: 65 },
];

// Get reference to the chart container
const chart = document.getElementById("chart");

// Calculate layout constants
const chartHeight = chart.clientHeight;
const barWidth = 50;
const spacing = 25;
const maxValue = Math.max(...data.map((d) => d.value));

// Render the bar chart
function renderChart() {
  data.forEach((item, i) => {
    // Create a wrapper for bar + label
    const wrapper = document.createElement("div");
    wrapper.className = "bar-wrapper";
    wrapper.style.left = `${i * (barWidth + spacing) + 50}px`;
    wrapper.style.width = `${barWidth}px`;

    // Create the bar itself
    const bar = document.createElement("div");
    bar.className = "bar";
    const barHeight = (item.value / maxValue) * (chartHeight - 60);
    bar.style.height = `${barHeight}px`;

    // Create the label under the bar
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = item.label;

    // Assemble the components
    wrapper.appendChild(bar);
    wrapper.appendChild(label);
    chart.appendChild(wrapper);

    // 👇 This is where GSAP animation will go later
    gsap.to(bar, {
      scaleY: 1,
      duration: 3,
      ease: "elastic.out(1, 0.3)",
      delay: i * 0.1, //nice
    });
  });
}

// Clear chart and re-render on "Repeat" click
repeat.addEventListener("click", () => {
  chart.innerHTML = "";
  renderChart();
});

// Initial render
renderChart();
