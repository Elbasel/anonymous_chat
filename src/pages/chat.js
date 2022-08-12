import UploadImgPng from "../assests/img.png";
import sendImgPng from "../assests/send.png";
import PubSub from "pubsub-js";
import moment from "moment";
function saveJobApp(objParseFile) {
  var jobApplication = new Parse.Object("JobApplication");
  jobApplication.set("applicantName", "Joe Smith");
  jobApplication.set("profileImg", objParseFile);
  jobApplication.save(null, {
    success: function (gameScore) {
      // Execute any logic that should take place after the object is saved.
      var photo = gameScore.get("profileImg");
      $("#profileImg")[0].src = photo.url();
    },
    error: function (gameScore, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and description.
      alert(
        "Failed to create new object, with error code: " + error.description
      );
    },
  });
}

$("#profilePhotoFileUpload").bind("change", function (e) {
  var fileUploadControl = $("#profilePhotoFileUpload")[0];
  var file = fileUploadControl.files[0];
  var name = file.name; //This does *NOT* need to be a unique name
  var parseFile = new Parse.File(name, file);

  parseFile.save().then(
    function () {
      saveJobApp(parseFile);
    },
    function (error) {
      alert("error");
    }
  );
});
import $ from "jquery";
const Parse = require("parse");

export default class Chat {
  constructor() {
    this.html = `
    <div class="header-area">
    <h1>Hello</h1>
    <div id="clock">1:00 PM</div>
    <button id="logout-button">Logout</button>
  </div>
  <div id="chat-area">
    <div class="msg">
      <div class="msg-wrapper">
        <p class="p-msg">Hello!</p>
        <p class="user">elbasel at 5:00 pm</p>
      </div>
    </div>
    <div class="msg other">
      <div class="msg-wrapper">
        <p class="p-msg">Hello!</p>
        <p class="user">elbasel at 5:00 pm</p>
      </div>
    </div>
  </div>
  <div class="msg-area">
    <button class="msg-button"><img id="upload-img" /></button>
    <input id="text" type="text" />
    <button id="send-button" class="msg-button"><img id="send" /></button>
  </div>
  `;

    this.css = `
    body {
      display: flex;
      flex-direction: column;
      padding: 32px;
  }
  
  
  .header-area {
      flex: 1;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid white;
      align-items: center;
      padding: 32px;
      max-height: 200px;
  }
  
  h1 {
      font-size: 64px;
  }
  
  #chat-area {
    margin-top: 100px;
    margin-bottom: 100px;
    // border: 1px solid red;
    flex: 10;

    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px;
    overflow-y: scroll;
    overflow-x: hidden;

}
html {
  scrollbar-face-color: #646464;
  scrollbar-base-color: #646464;
  scrollbar-3dlight-color: #646464;
  scrollbar-highlight-color: #646464;
  scrollbar-track-color: #000;
  scrollbar-arrow-color: #000;
  scrollbar-shadow-color: #646464;
  scrollbar-dark-shadow-color: #646464;
}

::-webkit-scrollbar { width: 8px; height: 3px;}
::-webkit-scrollbar-button {  background-color: #666; }
::-webkit-scrollbar-track {  background-color: #646464;}
::-webkit-scrollbar-track-piece { background-color: #000;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
::-webkit-scrollbar-corner { background-color: #646464;}}
::-webkit-resizer { background-color: #666;}
  
  .msg {
      // border: 1px solid white;
      font-size: 48px;
      display: flex;
      justify-content: flex-end;
  }
  
  
  .other {
      justify-content: flex-start;
  }
  
  .msg-wrapper {
      background-color: red;
      border-radius: 32px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      gap: 16px;
  
  }
  
  .other > .msg-wrapper {
      background-color: blue;
  }
  
  
  .user {
      font-size: 32px;
      color: rgba(0, 0, 0, 0.788);
      font-style: italic;
  }
  
  .msg-area {
      flex: 1;
      display: flex;
      // border-top: 1px solid white;
      // padding: 32px;
  
      gap: 32px;
  
      align-items: center;
  
  
  }
  html {
    scrollbar-face-color: #646464;
    scrollbar-base-color: #646464;
    scrollbar-3dlight-color: #646464;
    scrollbar-highlight-color: #646464;
    scrollbar-track-color: #000;
    scrollbar-arrow-color: #000;
    scrollbar-shadow-color: #646464;
    scrollbar-dark-shadow-color: #646464;
  }
  
  ::-webkit-scrollbar { width: 8px; height: 3px;}
  ::-webkit-scrollbar-button {  background-color: #666; }
  ::-webkit-scrollbar-track {  background-color: #646464;}
  ::-webkit-scrollbar-track-piece { background-color: #000;}
  ::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
  ::-webkit-scrollbar-corner { background-color: #646464;}}
  ::-webkit-resizer { background-color: #666;}
  .msg-button {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0);
      border: 0;
      color: white;
  }
  
  img {
      fill: white;
      color: white;
      flex: 1;
      // width: 30%;
      // height: 100%;
      max-width: 300px;
      max-height: 300px;
  }
  
  
  input {
      height:100px;
      border-radius: 18px;
      flex: 5;
      padding: 32px;
      font-size: 42px;
  }
  
  #logout-button {
      // position: absolute;
      // top: 50px;
      // right: 50px;
      // margin-left: 16px;
      // margin-top: 16px;
      padding: 32px;
      font-size: 32px;
      width: 200px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
  }
  
  #clock {
    color: white;
    font-size: 64px;
    // width: 300px;
    // height: 300px;
    // z-index: 3;
}`;
  }

  init(username) {
    document.body.innerHTML = `<style>${this.css}</style>` + this.html;
    document.querySelector("#upload-img").src = UploadImgPng;
    document.querySelector("#send").src = sendImgPng;
    document.querySelector("#send-button").addEventListener("click", () => {
      PubSub.publish("msgSent", Parse.User.current());
      // console.log(Parse.User.current());
    });
    document.querySelector("h1").innerText += ` ${username}`;
    document.body.querySelector("#text").addEventListener("focusout", () => {
      // document.style.height = "-webkit-fill-available";
      // document.body.style.minHeight = "-webkit-fill-available";
      document.body.style.minHeight = "calc(100vh - 130px)";

      // document.body.style.maxHeight = "100vh";
    });

    document.body
      .querySelector("#logout-button")
      .addEventListener("click", () => {
        console.log("logout-requested");
        PubSub.publish("logout-requested");
      });

    // PubSub.subscribe("msgSaved", (pubsubMsg, msg) => {
    //   const msgHTML = this.getMsgHTML(
    //     msg.get("body"),
    //     msg.get("username"),
    //     moment(msg.createdAt).format("LT")
    //   );

    //   // debugger;
    //   // console.log(msgHTML);
    //   document.body
    //     .querySelector(".chat-area")
    //     .append(this.createElementFromHTML(msgHTML));
    //   document.querySelector("#text").value = "";
    // });

    setInterval(() => {
      document.querySelector("#clock").textContent = moment().format("LT");
    }, 1000);

    var client = new Parse.LiveQueryClient({
      applicationId: "z6wry3r4l7uk3P0tWQsOtMz3FB4ifkOqHvkHEbWv",
      serverURL: "wss://" + "elbaselmessage.b4a.io", // Example: 'wss://livequerytutorial.back4app.io'
      javascriptKey: "Pr22k3Z6IN5RGOwdr7adFcF0e1kQsamhe6bi2F4e",
    });
    client.open();

    (async () => {
      const query = new Parse.Query("Message").ascending("createdAt");
      let results = await query.find();
      results = results.slice(-5);

      try {
        document.body.querySelector("#chat-area").innerHTML = "";
        for (const message of results) {
          // Access the Parse Object attributes using the .GET method
          const body = message.get("body");
          const username = message.get("username");
          const createdAt = moment(message.createdAt).format("LT");
          // console.log(myCustomKey1Name);

          let msgClass = "";
          // debugger;
          if (!(username == Parse.User.current().get("username"))) {
            msgClass = "other";
          }
          this.addMsg({ body, username, createdAt, msgClass });

          console.log(message);
        }
      } catch (error) {
        console.error("Error while fetching messages", error);
      }
    })();
    const Message = Parse.Object.extend("Message");
    var query = new Parse.Query("Message").ascending("createdAt");
    let subscription = client.subscribe(query);

    subscription.on("create", (msg) => {
      console.log(msg);
      console.log("On create event");

      (async () => {
        const query = new Parse.Query("Message").ascending("createdAt");

        // You can also query by using a parameter of an object
        // query.equalTo('objectId', 'xKue915KBG');
        let results = await query.find();
        console.log({ results });

        results = results.slice(-5);

        try {
          document.body.querySelector("#chat-area").innerHTML = "";
          for (const message of results) {
            // Access the Parse Object attributes using the .GET method
            const body = message.get("body");
            const username = message.get("username");
            const createdAt = moment(message.createdAt).format("LT");
            // console.log(myCustomKey1Name);

            let msgClass = "";
            // debugger;
            if (!(username == Parse.User.current().get("username"))) {
              msgClass = "other";
            }
            this.addMsg({ body, username, createdAt, msgClass });

            console.log(message);
          }
        } catch (error) {
          console.error("Error while fetching messages", error);
        }
      })();
    });
  }

  addMsg({ body, username, createdAt, msgClass }) {
    document.body
      .querySelector("#chat-area")
      .append(
        this.createElementFromHTML(
          this.getMsgHTML(body, username, createdAt, msgClass)
        )
      );
  }

  saveJobApp(objParseFile) {
    var jobApplication = new Parse.Object("JobApplication");
    jobApplication.set("applicantName", "Joe Smith");
    jobApplication.set("profileImg", objParseFile);
    jobApplication.save(null, {
      success: function (gameScore) {
        // Execute any logic that should take place after the object is saved.
        var photo = gameScore.get("profileImg");
        $("#profileImg")[0].src = photo.url();
      },
      error: function (gameScore, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and description.
        alert(
          "Failed to create new object, with error code: " + error.description
        );
      },
    });
  }

  uploadFile() {
    $("#profilePhotoFileUpload").bind("change", function (e) {
      var fileUploadControl = $("#profilePhotoFileUpload")[0];
      var file = fileUploadControl.files[0];
      var name = file.name; //This does *NOT* need to be a unique name
      var parseFile = new Parse.File(name, file);

      parseFile.save().then(
        function () {
          saveJobApp(parseFile);
        },
        function (error) {
          alert("error");
        }
      );
    });
  }

  createElementFromHTML(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
  }

  getMsgHTML(msgText, userName, sentAt, msgClass = "") {
    return `
    <div class="msg ${msgClass}">
      <div class="msg-wrapper">
        <p class="p-msg">${msgText}</p>
        <p class="user">${userName} at ${sentAt}</p>
      </div>
    </div>
  `;
  }
}
