const outputLink = document.getElementById("outputLink");
const testerNr = document.getElementById("testerNumber");
const testNr = document.getElementById("testNumber");

const prototypeLink = "https://docs.google.com/forms/d/e/1FAIpQLSeBTlTBTqzAK0qPVpcSKNQmZgS6u8FKUVI26VqwqIj1gGKJ6w/viewform?usp=pp_url&entry.59795715=Prototyp&entry.975820908=";
const originalLink = "https://docs.google.com/forms/d/e/1FAIpQLSeBTlTBTqzAK0qPVpcSKNQmZgS6u8FKUVI26VqwqIj1gGKJ6w/viewform?usp=pp_url&entry.59795715=Original&entry.975820908=";

const prototypeLinkA = "B";
const originalLinkA = "A";

function formatPrototype() {
  testerNr.reportValidity();
  testNr.reportValidity();
  if (testerNr.checkValidity() && testNr.checkValidity()) {
    setOutputLink(prototypeLink
      +Number(testerNr.value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      +prototypeLinkA
      +Number(testNr.value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    );
  }
}

function formatOriginal() {
  testerNr.reportValidity();
  testNr.reportValidity();
  if (testerNr.checkValidity() && testNr.checkValidity()) {
    setOutputLink(originalLink
      +Number(testerNr.value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      +originalLinkA
      +Number(testNr.value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    );
  }
}

function setOutputLink(link) {
  outputLink.href = link;
  outputLink.innerHTML = link;
  navigator.clipboard.writeText(link).catch(() => {
    window.alert("could not copy to clipboard");
  });
}