// Function to toggle the Output Pane
function toggleOutput() {
    const outputPane = document.getElementById("outputPane");
    const generatedCodePane = document.getElementById("generatedCodePane");
    const blocklyDiv = document.getElementById("blocklyDiv");
    const expandButton = document.getElementById("expandOutput");
  
    if (outputPane.classList.contains("expanded")) {
      outputPane.classList.remove("expanded");
      generatedCodePane.style.display = "block";
      blocklyDiv.style.zIndex = "1"; // Reset workspace z-index
      expandButton.innerText = "Expand Output";
    } else {
      outputPane.classList.add("expanded");
      generatedCodePane.style.display = "none";
      blocklyDiv.style.zIndex = "0"; // Lower workspace z-index
      expandButton.innerText = "Collapse Output";
    }
  }
  
  // Expose the function globally so it can be called from HTML
  window.toggleOutput = toggleOutput;
  