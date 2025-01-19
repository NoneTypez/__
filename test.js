const data = {
  exchange: [
    { text: "DEPOSIT", onclick: () => console.log("Deposit clicked") },
    { text: "WITHDRAW", onclick: () => console.log("Widthdraw clicked") },
    { text: "TRADE", onclick: () => console.log("Trade clicked") },
  ],
  projects: [
    { text: "PROJECT1", onclick: () => console.log("Project1 clicked") },
    { text: "PROJECT2", onclick: () => console.log("Project2 clicked") },
    { text: "PROJECT3", onclick: () => console.log("Project3 clicked") },
    { text: "PROJECT4", onclick: () => console.log("Project4 clicked") },
    { text: "PROJECT5", onclick: () => console.log("Project5 clicked") },
  ],
  scripts: [
    { text: "SCRIPT1", onclick: () => console.log("Script1 clicked") },
    { text: "SCRIPT2", onclick: () => console.log("Script2 clicked") },
    { text: "SCRIPT3", onclick: () => console.log("Script3 clicked") },
    { text: "SCRIPT4", onclick: () => console.log("Script4 clicked") },
    { text: "SCRIPT5", onclick: () => console.log("Script5 clicked") },
  ],
  other: [
    { text: "GITCOIN", onclick: () => console.log("Gitcoin clicked") },
    { text: "SNAPSHOT", onclick: () => console.log("Snapshot clicked") },
    { text: "OTHER1", onclick: () => console.log("Other1 clicked") },
  ],
  table: [],
};

const res = Object.keys(data)

console.log(data[res[2]])