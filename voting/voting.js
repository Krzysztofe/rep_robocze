[form, userName, userId, select, results] = [
  "form",
  "userName",
  "userId",
  "select",
  "results",
].map(item => {
  return document.querySelector("." + item);
});

const usersId = new Map([
  ["alan", "12345678"],
  ["olaf", "12345679"],
  ["jan", "12345670"],
  ["jon", "12345671"],
]);

const voteCounts = new Map()
  .set("opcja 1", 0)
  .set("opcja 2", 0)
  .set("opcja 3", 0);

const votedUsers = new Set();

const updateResults = () => {
  let output = [];
  for (const [option, count] of voteCounts) {
    output.push(`${option}: ${count} glosow`);
  }

  output.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.listStyle = "none";
    results.append(li);
  });
};

const voting = e => {
  e.preventDefault();

  if (usersId.get(userName.value) !== userId.value) {
    alert("brak użytkownika w bazie");
    if (votedUsers.has(userName.value)) {
      alert("oddal glos");
    }
  } else {
    votedUsers.add(userName.value);
    console.log("", votedUsers.has(userName.value));
      updateResults();
  }


};

form.addEventListener("submit", voting);


