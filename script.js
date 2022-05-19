const outputLink = document.getElementById("outputLink");
const testerNr = document.getElementById("testerNumber");

const prototypeLink = "https://docs.google.com/forms/d/e/1FAIpQLSeBTlTBTqzAK0qPVpcSKNQmZgS6u8FKUVI26VqwqIj1gGKJ6w/viewform?usp=pp_url&entry.59795715=Prototyp&entry.975820908=21B";
const originalLink = "https://docs.google.com/forms/d/e/1FAIpQLSeBTlTBTqzAK0qPVpcSKNQmZgS6u8FKUVI26VqwqIj1gGKJ6w/viewform?usp=pp_url&entry.59795715=Original&entry.975820908=21A";

function formatPrototype() {
  testerNr.reportValidity();
  if (testerNr.checkValidity()) {
    setOutputLink(prototypeLink+Number(testerNr.value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
  }
}

function formatOriginal() {
  testerNr.reportValidity();
  if (testerNr.checkValidity()) {
    setOutputLink(originalLink+Number(testerNr.value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
  }
}

function setOutputLink(link) {
  outputLink.href = link;
  outputLink.innerHTML = link;
}