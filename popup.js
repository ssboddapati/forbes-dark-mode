if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle");

  let buttonOn = false;

  button.addEventListener("click", async () => {
    if (!buttonOn) {
      buttonOn = true;
      circle.style.animation = "moveCircleRight 1s forwards"
      button.style.animation = "backgroundYellow 1s forwards"
      const [tabId] = await chrome.tabs.query({active: true, currentWindow: true});
      chrome.scripting.executeScript({
        target: { tabId: tabId.id, allFrames: true },
        files: ["./appOn.js"]
      })
    }
    else {
      buttonOn = false;
      circle.style.animation = "moveCircleLeft 1s forwards"
      button.style.animation = "backgroundBlue 1s forwards"
      const [tabId] = await chrome.tabs.query({active: true, currentWindow: true});
      chrome.scripting.executeScript({
        target: { tabId: tabId.id, allFrames: true },
        files: ["./appOff.js"]
      })
    }
  })
}