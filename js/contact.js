export class Contact {
  constructor() {
    this.displayContact();
  }

  validation() {
    let validationFalg = {
      userNameFlag: false,
      userEmailFlag: false,
      userPhoneFlag: false,
      userAgeFlag: false,
      userpassFlag: false,
      userRepassFlag: false,
    };

    // UserName Validation
    let userName = document.getElementById("userName");
    let userNameAlert = document.getElementById("userName-alert");
    let userNameReg = /^([a-zA-Z]+(\s+)?)+$/;

    userName.oninput = () => {
      if (userName.value === "") userNameAlert.classList.add("d-none");
      else if (userNameReg.test(userName.value)) {
        if (!userNameAlert.classList.contains("d-none"))
          userNameAlert.classList.add("d-none");

        validationFalg.userNameFlag = true;
        this.checkAllInputs(validationFalg);
      } else {
        if (userNameAlert.classList.contains("d-none"))
          userNameAlert.classList.remove("d-none");

        validationFalg.userNameFlag = false;
        this.checkAllInputs(validationFalg);
      }
    };

    userName.onfocus = () => {
      let width = $("#sideNavContent").innerWidth();
      $(".sideNav").css("left", `-${width}px`);
      $("#open").css("display", "block");
      $("#close").css("display", "none");
    };

    // Email Validation
    let userEmail = document.getElementById("userEmail");
    let userEmailAlert = document.getElementById("userEmail-alert");
    let userEmailReg = /^\w+@\w+.\w{2,4}$/;

    userEmail.oninput = () => {
      if (userEmail.value === "") userEmailAlert.classList.add("d-none");
      else if (userEmailReg.test(userEmail.value)) {
        if (!userEmailAlert.classList.contains("d-none"))
          userEmailAlert.classList.add("d-none");

        validationFalg.userEmailFlag = true;
        this.checkAllInputs(validationFalg);
      } else {
        if (userEmailAlert.classList.contains("d-none"))
          userEmailAlert.classList.remove("d-none");

        validationFalg.userEmailFlag = false;
        this.checkAllInputs(validationFalg);
      }
    };

    userEmail.onfocus = () => {
      let width = $("#sideNavContent").innerWidth();
      $(".sideNav").css("left", `-${width}px`);
      $("#open").css("display", "block");
      $("#close").css("display", "none");
    };

    // Phone Validation
    let userPhone = document.getElementById("userPhone");
    let userPhoneAlert = document.getElementById("userPhone-alert");
    let userPhoneReg = /^(010|011|012|015)\d{8}$/;

    userPhone.oninput = () => {
      if (userPhone.value === "") userPhoneAlert.classList.add("d-none");
      else if (userPhoneReg.test(userPhone.value)) {
        if (!userPhoneAlert.classList.contains("d-none"))
          userPhoneAlert.classList.add("d-none");

        validationFalg.userPhoneFlag = true;
        this.checkAllInputs(validationFalg);
      } else {
        if (userPhoneAlert.classList.contains("d-none"))
          userPhoneAlert.classList.remove("d-none");

        validationFalg.userPhoneFlag = false;
        this.checkAllInputs(validationFalg);
      }
    };

    userPhone.onfocus = () => {
      let width = $("#sideNavContent").innerWidth();
      $(".sideNav").css("left", `-${width}px`);
      $("#open").css("display", "block");
      $("#close").css("display", "none");
    };

    // Age Validation
    let userAge = document.getElementById("userAge");
    let userAgeAlert = document.getElementById("userAge-alert");
    let userAgeReg = /^[1-9][0-9]?$/;

    userAge.oninput = () => {
      if (userAge.value === "") userAgeAlert.classList.add("d-none");
      else if (userAgeReg.test(userAge.value)) {
        if (!userAgeAlert.classList.contains("d-none"))
          userAgeAlert.classList.add("d-none");

        validationFalg.userAgeFlag = true;
        this.checkAllInputs(validationFalg);
      } else {
        if (userAgeAlert.classList.contains("d-none"))
          userAgeAlert.classList.remove("d-none");

        validationFalg.userAgeFlag = false;
        this.checkAllInputs(validationFalg);
      }
    };

    userAge.onfocus = () => {
      let width = $("#sideNavContent").innerWidth();
      $(".sideNav").css("left", `-${width}px`);
      $("#open").css("display", "block");
      $("#close").css("display", "none");
    };

    // Password Validation
    let userpass = document.getElementById("userpass");
    let userpassAlert = document.getElementById("userpass-alert");
    let userpassReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    userpass.oninput = () => {
      if (userpass.value === "") userpassAlert.classList.add("d-none");
      else if (userpassReg.test(userpass.value)) {
        if (!userpassAlert.classList.contains("d-none"))
          userpassAlert.classList.add("d-none");

        validationFalg.userpassFlag = true;
        this.checkAllInputs(validationFalg);
      } else {
        if (userpassAlert.classList.contains("d-none"))
          userpassAlert.classList.remove("d-none");

        validationFalg.userpassFlag = false;
        this.checkAllInputs(validationFalg);
      }
    };

    userpass.onfocus = () => {
      let width = $("#sideNavContent").innerWidth();
      $(".sideNav").css("left", `-${width}px`);
      $("#open").css("display", "block");
      $("#close").css("display", "none");
    };

    // Repassword Validation
    let userRepass = document.getElementById("userRepass");
    let userrePassAlert = document.getElementById("userRepass-alert");

    let rePassFlag = false;
    userRepass.oninput = () => {
      if (userRepass.value === userpass.value) {
        if (!userrePassAlert.classList.contains("d-none"))
          userrePassAlert.classList.add("d-none");

        rePassFlag = true;
        validationFalg.userRepassFlag = true;
        this.checkAllInputs(validationFalg);
      } else {
        if (userrePassAlert.classList.contains("d-none"))
          userrePassAlert.classList.remove("d-none");

        validationFalg.userRepassFlag = false;
        this.checkAllInputs(validationFalg);
      }
    };

    userRepass.onfocus = () => {
      let width = $("#sideNavContent").innerWidth();
      $(".sideNav").css("left", `-${width}px`);
      $("#open").css("display", "block");
      $("#close").css("display", "none");
    };
  }

  checkAllInputs(flags) {
    if (
      flags.userNameFlag &&
      flags.userEmailFlag &&
      flags.userPhoneFlag &&
      flags.userAgeFlag &&
      flags.userpassFlag &&
      flags.userRepassFlag
    ) {
      $("#submitBtn").attr("disabled", false);
    } else {
      $("#submitBtn").attr("disabled", true);
    }
  }

  displayContact() {
    let temp = `
         
      <div class="contact d-flex align-content-center vh-100  flex-wrap">
       <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
              id="userName"
            />
            <div class="alert alert-danger mt-2 d-none" id="userName-alert">
              Special characters and numbers not allowed
            </div>
          </div>
          <div class="col-md-6">
            <input
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
              id="userEmail"
            />
            <div class="alert alert-danger mt-2 d-none" id="userEmail-alert">
              Email not valid *exemple@yyy.zzz
            </div>
          </div>
          <div class="col-md-6">
            <input
              type="tel"
              class="form-control"
              placeholder="Enter Your Phone"
              id="userPhone"
            />
            <div class="alert alert-danger mt-2 d-none" id="userPhone-alert">
              Enter valid Phone Number
            </div>
          </div>
          <div class="col-md-6">
            <input
              type="number"
              class="form-control"
              placeholder="Enter Your Age"
              id="userAge"
            />
            <div class="alert alert-danger mt-2 d-none" id="userAge-alert">
              Enter valid age
            </div>
          </div>
          <div class="col-md-6">
            <input
              type="password"
              class="form-control"
              placeholder="Enter Your Password"
              id="userpass"
            />
            <div class="alert alert-danger mt-2 d-none" id="userpass-alert">
              Enter valid password *Minimum eight characters, at least one
              letter and one number:*
            </div>
          </div>
          <div class="col-md-6">
            <input
              type="password"
              class="form-control"
              placeholder="Repassword"
              id="userRepass"
            />
            <div class="alert alert-danger mt-2 d-none" id="userRepass-alert">
              Enter valid repassword
            </div>
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-outline-danger" disabled id="submitBtn">Submit</button>
          </div>
          </div>
    `;

    document.getElementById("main-section").innerHTML = temp;
    this.validation();
  }
}
