// import "../styles/chat.scss";

export default class Chat {
  constructor() {
    this.html = `
    <button id="logout-button">Logout</button>
    <h1>Hello</h1>`;

    this.css = `
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  
  
  h1 {
      font-size: 100px;
      border: 1px solid grey;
      border-radius: 18px;
      padding: 32px;
  }
  
  #logout-button {
      position: absolute;
      top: 50px;
      right: 50px;
      // margin-left: 16px;
      // margin-top: 16px;
      padding: 32px;
      font-size: 64px;
      border-radius: 18px;
  }`;
  }

  init(username) {
    document.body.innerHTML = `<style>${this.css}</style>` + this.html;
    document.querySelector("h1").textContent += " " + username;
    document.body
      .querySelector("#logout-button")
      .addEventListener("click", () => {
        console.log("logout-requested");
        PubSub.publish("logout-requested");
      });
  }
}
