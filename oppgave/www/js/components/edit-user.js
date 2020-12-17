import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

   async getUserInfo() {
    await fetch(`${window.MyAppGlobals.serverURL}fetchUser.php`, {
            method: 'GET',
            credentials: 'include'
            }).then ( res => res.json()).then (data => {
                console.log("Authenticated user: " + JSON.stringify(data) );
                this.uname = data.uname;
                this.firstName = data.firstName;
                this.lastName = data.lastName;
                this.oldPwd = data.oldPwd;
                this.Pwd = data.Pwd;
            })
    }
  

}
customElements.define('edit-user', EditUser);
