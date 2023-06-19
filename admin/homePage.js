function apply(event) {
  const c1 = document.getElementById("c1");
  const managereports = document.getElementById("managereports");
  const sett = document.getElementById("settings");
  const managebanker = document.getElementById("managebanker");
  const addbanker = document.getElementById("addbanker");
  const removebanker = document.getElementById("removebanker");
  const personalInfo = document.getElementById("personalInfo");
  const passSettings = document.getElementById("passSettings");
  const pendingreports = document.getElementById("pendingreports");
  const issueresolution = document.getElementById("issueresolution");
  const createAnnouncement = document.getElementById("createAnnouncement");
  const notf = document.getElementById("notf");
  const title = document.getElementById("pageTitle");
  const arr = [
    c1,
    managereports,
    sett,
    managebanker,
    notf,
    passSettings,
    personalInfo,
    createAnnouncement,
    addbanker,
    removebanker,
    pendingreports,
    issueresolution,
  ];
  const arr2 = [
    "-notf",
    "-personalInfo",
    "-passSettings",
    "-addbanker",
    "-removebanker",
    "-pendingreports",
    "-issueresolution",
  ];
  event.preventDefault();
  console.log(event.target.id);
  const prop = document.getElementById((event.target.id + "").substring(1))
    .style.display;
  if (prop === "" || prop === "none") {
    if (event.target.id != "-c1")
      document.getElementById(
        (event.target.id + "").substring(1)
      ).style.display = "block";
    else
      document.getElementById(
        (event.target.id + "").substring(1)
      ).style.display = "flex";
    arr.forEach((e) => {
      console.log(e.id);
      if ("-" + e.id != event.target.id) e.style.display = "none";
      if (
        event.target.id == "-personalInfo" ||
        event.target.id == "-passSettings"
      )
        sett.style.display = "block";
      if (event.target.id == "-addbanker" || event.target.id == "-removebanker")
        managebanker.style.display = "block";
      if (
        event.target.id == "-issueresolution" ||
        event.target.id == "-pendingreports"
      )
        managereports.style.display = "block";
    });
    if (!arr2.includes(event.target.id))
      title.textContent = document.getElementById(event.target.id).textContent;
    else if (event.target.id == "-notf") title.textContent = "Notifications";
    // console.log("fuck");
  }
}

const showAlert = (message) => {
  const alert = document.getElementById("a1");
  alert.style.visibility = "visible";
  alert.style.backgroundColor = "red";
  alert.textContent = message;
  setTimeout(() => {
    alert.style.visibility = "hidden";
    alert.style.backgroundColor = "#0be49c";
    alert.textContent = "logged in successfully";
  }, 3000);
};

const showalertgreen = (message, event) => {
  event.preventDefault();
  const alert = document.getElementById("a1");
  alert.style.visibility = "visible";
  alert.textContent = message;
  setTimeout(() => {
    alert.style.visibility = "hidden";
    alert.style.backgroundColor = "#0be49c";
    // alert.textContent = "logged in successfully";
  }, 3000);
};

function validateAll(formname, event) {
  const form = document.forms[formname];
  const inputs = form.elements;
  // event.preventDefault();
  // console.log(1);
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    // console.log(2);
    if (input.value === "") {
      // console.log("&");
      showAlert("missing " + input.name);
      return false;
    }
    // console.log(3);
  }
  // console.log(4);
  if (formname == "addbankerform") {
    showalertgreen("added", event);
    return false;
  }
  if (formname == "removebankerform") {
    showalertgreen("removed", event);
    return false;
  }
  if (formname == "passandsecurityform") {
    showalertgreen("updates saved", event);
    return false;
  }
  showalertgreen("posted", event);
  // if (formname == "passandsecurity") {
  //   showalertgreen("updates saved", event);
  // } else if (formname == "announceform") {
  //   showalertgreen("posted", event);
  // }
}
