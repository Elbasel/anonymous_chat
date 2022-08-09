// import "../styles/chat.scss";

export default class Chat {
  constructor() {
    this.html = `
    <h1>Hello</h1>
    `;

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
    }`;
  }

  init(username) {
    document.body.innerHTML = `<style>${this.css}</style>` + this.html;
    document.querySelector("h1").textContent += " " + username;
  }
}
