function apply(event) {
  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const sett = document.getElementById("settings");
  const transc = document.getElementById("transc");
  const loanApp = document.getElementById("loanApp");
  const openAcc = document.getElementById("openAcc");
  const cardApp = document.getElementById("cardApp");
  const report = document.getElementById("reporting");
  const pay = document.getElementById("pay");
  const personalInfo = document.getElementById("personalInfo");
  const passSettings = document.getElementById("passSettings");
  const notfSettings = document.getElementById("notfSettings");
  const notf = document.getElementById("notf");
  const internal = document.getElementById("internal");
  const domestic = document.getElementById("domestic");
  const international = document.getElementById("international");
  const bills = document.getElementById("bills");
  const bankaccinfo = document.getElementById("bankaccinfo");
  const cardsinfo = document.getElementById("cardsinfo");
  const bankacctran = document.getElementById("bankacctran");
  const redeempoints = document.getElementById("redeempoints");
  const cardtran = document.getElementById("cardtran");
  const donations = document.getElementById("donations");
  const specificnotf = document.getElementById("specificnotf");
  const announcments = document.getElementById("announcments");
  const cardrprt = document.getElementById("cardForm");
  const techrprt = document.getElementById("technicalForm");
  const title = document.getElementById("pageTitle");
  const arr = [
    c1,
    c2,
    sett,
    transc,
    report,
    openAcc,
    cardApp,
    loanApp,
    pay,
    notf,
    cardrprt,
    techrprt,
    passSettings,
    notfSettings,
    personalInfo,
    bills,
    donations,
    internal,
    domestic,
    international,
    bankacctran,
    cardtran,
    bankaccinfo,
    cardsinfo,
    redeempoints,
    specificnotf,
    announcments,
  ];
  const arr2 = [
    "-notf",
    "-bills",
    "-donations",
    "-personalInfo",
    "-passSettings",
    "-notfSettings",
    "-cardForm",
    "-technicalForm",
    "-internal",
    "-domestic",
    "-international",
    "-bankacctran",
    "-cardtran",
    "-bankaccinfo",
    "-cardsinfo",
    "-redeempoints",
  ];
  //&& event.target.id != "-redeempoints"
  event.preventDefault();
  console.log(event.target.id);
  const prop = document.getElementById((event.target.id + "").substring(1))
    .style.display;
  if (prop === "" || prop === "none") {
    if (
      event.target.id != "-c1" &&
      event.target.id != "-cardForm" &&
      event.target.id != "-technicalForm" &&
      event.target.id != "-bankacctran" &&
      event.target.id != "-cardtran" &&
      event.target.id != "-cardsinfo" &&
      event.target.id != "-redeempoints" &&
      event.target.id != "-specificnotf" &&
      event.target.id != "-announcments"
    )
      document.getElementById(
        (event.target.id + "").substring(1)
      ).style.display = "block";
    else
      document.getElementById(
        (event.target.id + "").substring(1)
      ).style.display = "flex";
    arr.forEach((e) => {
      if ("-" + e.id != event.target.id) e.style.display = "none";
      if (event.target.id == "-cardForm" || event.target.id == "-technicalForm")
        report.style.display = "block";
      if (
        event.target.id == "-notfSettings" ||
        event.target.id == "-personalInfo" ||
        event.target.id == "-passSettings"
      )
        sett.style.display = "block";
      if (event.target.id == "-bills" || event.target.id == "-donations")
        pay.style.display = "block";
      if (
        event.target.id == "-internal" ||
        event.target.id == "-domestic" ||
        event.target.id == "-international"
      )
        c2.style.display = "block";
      if (event.target.id == "-bankacctran" || event.target.id == "-cardtran")
        transc.style.display = "block";
      if (
        event.target.id == "-bankaccinfo" ||
        event.target.id == "-cardsinfo" ||
        event.target.id == "-redeempoints"
      )
        c1.style.display = "block";
      if (
        event.target.id == "-specificnotf" ||
        event.target.id == "-announcments"
      )
        notf.style.display = "block";
    });
    if (!arr2.includes(event.target.id))
      title.textContent = document.getElementById(event.target.id).textContent;
    else if (event.target.id == "-notf")
      title.textContent = "Notifications and Announcements";
  }
}

function payBill(event) {
  event.preventDefault();
  const selElement = document.querySelector(".billSelect");
  console.log(selElement.options + " here");
  const selOption = selElement.options[selElement.selectedIndex].value;
  let id = "";
  switch (selOption.split(" ")[0].toLowerCase()) {
    case "option1":
      id = "gas";
      showalertgreen("gas bill paid", event);
      break;
    case "option2":
      id = "water";
      showalertgreen("water bill paid", event);
      break;
    case "option3":
      id = "phone";
      showalertgreen("phone bill paid", event);
      break;
    case "option4":
      id = "electricity";
      showalertgreen("electricity bill paid", event);
      break;
    case "option0":
      showAlert("no bill selected");
      return;
  }
  document.getElementById(id).style.display = "none";
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

const validateDonation = (event) => {
  const charity = document.forms["donateform"]["donateamount"].value;
  const selElement = document.querySelector(".donateformclass");
  // console.log(selElement.options + " here");
  const selOption = selElement.options[selElement.selectedIndex].value;
  if (selOption == "option0") {
    showAlert("missing charity name");
    return false;
  } else if (charity == "") {
    showAlert("missing amount");
    return false;
  } else {
    showalertgreen("donated successfully", event);
  }
};

const validateLoanApp = (event) => {
  const amount = document.forms["loanform"]["loanamount"].value;
  const occu = document.forms["loanform"]["occupation"].value;
  const income = document.forms["loanform"]["income"].value;
  const selElement = document.querySelector(".loanformclass");
  // console.log(selElement.options + " here");
  const selOption = selElement.options[selElement.selectedIndex].value;
  const selElement2 = document.querySelector(".loanaccnumclass");
  // console.log(selElement.options + " here");
  const selOption2 = selElement.options[selElement2.selectedIndex].value;

  if (selOption2 == "option0") {
    showAlert("missing account number");
    return false;
  } else if (occu == "") {
    showAlert("missing occupation");
    return false;
  } else if (amount == "") {
    showAlert("missing amount");
    return false;
  } else if (income == "") {
    showAlert("missing income");
    return false;
  } else if (selOption == "option0") {
    showAlert("missing loan type");
    return false;
  } else {
    showalertgreen("loan app submitted", event);
    return false;
  }
};

const validateCardApp = (event) => {
  // const amount = document.forms["cardappform"]["loanamount"].value;
  const occu = document.forms["cardappform"]["occupation"].value;
  const income = document.forms["cardappform"]["income"].value;
  const owned = document.forms["cardappform"]["cardsowned"].value;
  // const employer = document.forms["cardappform"]["empname"].value;
  const selElement = document.querySelector(".cardappclass");
  // console.log(selElement.options + " here");
  const selOption = selElement.options[selElement.selectedIndex].value;
  const selElement2 = document.querySelector(".cardaccnumclass");
  // console.log(selElement.options + " here");
  const selOption2 = selElement.options[selElement2.selectedIndex].value;

  if (selOption2 == "option0") {
    showAlert("missing account number");
    return false;
  } else if (selOption == "option0") {
    showAlert("missing employment status");
    return false;
  } else if (occu == "") {
    showAlert("missing occupation");
    return false;
  } else if (income == "") {
    showAlert("missing income");
    return false;
  } else if (owned == "") {
    showAlert("missing cards owned");
    return false;
  } else {
    showalertgreen("card app submitted", event);
    return false;
  }
};
const validateBankAccApp = (event) => {
  const occu = document.forms["bankaccform"]["occupation"].value;
  const income = document.forms["bankaccform"]["income"].value;
  const selElement = document.querySelector(".bankaccappclass");
  const selOption = selElement.options[selElement.selectedIndex].value;
  const selElement2 = document.querySelector(".sourcefundsclass");
  const selOption2 = selElement.options[selElement2.selectedIndex].value;
  const selElement3 = document.querySelector(".acctypeclass");
  const selOption3 = selElement.options[selElement3.selectedIndex].value;

  if (selOption == "option0") {
    showAlert("missing employment status");
    return false;
  } else if (selOption2 == "option0") {
    showAlert("missing source of funds");
    return false;
  } else if (occu == "") {
    showAlert("missing occupation");
    return false;
  } else if (income == "") {
    showAlert("missing income");
    return false;
  } else if (selOption3 == "option0") {
    showAlert("missing account type");
    return false;
  } else {
    showalertgreen("bank account app submitted", event);
    return false;
  }
};

const validateCardReport = (event) => {
  const num = document.forms["cardissueform"]["cardNum"].value;
  const issue = document.forms["cardissueform"]["issue"].value;
  const start = document.forms["cardissueform"]["start"].value;
  // const replace = document.forms["cardissueform"]["replace"].value;

  if (num == "") {
    showAlert("missing card number");
    return false;
  } else if (issue == "") {
    showAlert("missing issue type");
    return false;
  } else if (start == "") {
    showAlert("missing: when did this happen?");
    return false;
  } else {
    showalertgreen("report submitted", event);
  }
};

const validateTechReport = (event) => {
  const subj = document.forms["techissueform"]["subject"].value;
  const start = document.forms["techissueform"]["start"].value;
  const freq = document.forms["techissueform"]["frequency"].value;
  // const replace = document.forms["cardissueform"]["replace"].value;

  if (subj == "") {
    showAlert("missing subject");
    return false;
  } else if (start == "") {
    showAlert("missing: when did this start?");
    return false;
  } else if (freq == "") {
    showAlert("missing frequency");
    return false;
  } else {
    showalertgreen("report submitted", event);
  }
};

function validateTransfer(formname, event) {
  const form = document.forms[formname];
  const inputs = form.elements;

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    if (i == 0 && formname == "reminderset") {
      input =
        document.querySelector(".billselectclass").options[
          document.querySelector(".billselectclass").selectedIndex
        ].value;
      if (input == "option0") {
        showAlert("missing bill select");
        return false;
      }
    }

    if (input.value === "") {
      showAlert("missing " + input.name);
      return false;
    }
  }
  if (formname == "passandsecurity") {
    showalertgreen("updates saved", event);
  } else if (formname == "reminderset") {
    showalertgreen("reminder set", event);
  } else showalertgreen("transfer completed", event);
}
