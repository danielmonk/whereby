import "./styles.css";
import 'regenerator-runtime/runtime';

const fetch = require("node-fetch");

console.log("test");

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjE2MDc3Nzk3LCJvcmdhbml6YXRpb25JZCI6ODY4OTAsImp0aSI6ImQyNGRlMTEyLTdmMGUtNGE1Mi04NDgyLTNkNmNiMWJiNDBkNyJ9.G6K_mx8qu_ETVQX7Qpdmm5EC0S0eYF-66w8VjkLAbyg";

const data = {
  startDate: "2020-08-11T07:56:01Z",
  endDate: "2020-08-11T07:56:01Z",
  fields: ["hostRoomUrl"]
};

(async () => {
  const response = await fetch("https://sheltered-crag-25368.herokuapp.com/https://api.whereby.dev/v1/meetings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }).then((res) => res.json());
  console.log(response);

  let roomUrl = response.roomUrl;
  if(roomUrl){
    let app = document.getElementById('app');
    var makeIframe = document.createElement("iframe");
    makeIframe.setAttribute("src", roomUrl);
    makeIframe.setAttribute("allow", "camera;microphone");
    makeIframe.style.width = "1440px";
    makeIframe.style.height = "775px";
    app.appendChild(makeIframe);
  }
})();