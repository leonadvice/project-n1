class FormChecker {
  constructor(user) {
    this.user = {
      email: String(user.email).toLowerCase() || '',
      password: String(user.password) || '',
      handle: String(user.handle) || '',
      name: String(user.name).trim().replace(/\s+/g, ' ') || '',
    };
  }

  checkValidEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.user.email) ? this.user.email : false;
  }
  checkValidPassword() {
    // Between  8-25, atleat 1 num 1 upper 1 lower and allow !@#$%^&*
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,25}$/;
    return re.test(this.user.password) ? this.user.password : false;
  }

  checkValidHandle() {
    // Only lowercase and number no space 7-25
    const re = /^[0-9a-z]{7,25}$/;
    return re.test(this.user.handle) ? this.user.handle : false;
  }

  checkValidName() {
    // Only lower uper number space between 6 and 30
    const re = /^[0-9A-Za-z ]{6,30}$/;
    return re.test(this.user.name) ? this.user.name : false;
  }

  checkValidRegisterForm() {
    const processedData = {
      email: this.checkValidEmail(),
      password: this.checkValidPassword(),
      handle: this.checkValidHandle(),
      name: this.checkValidName(),
    };
    const error = [];
    for (let [key, value] of Object.entries(processedData)) {
      !value ? error.push(key) : null;
    }
    return error.length ? { error: error } : processedData;
  }

  checkValidLoginForm() {
    const processedData = {
      password: this.checkValidPassword(),
    };

    if ((this.email && this.handle) || (!this.email && !this.handle)) {
      return { error: 'Please choose email or handle to login' };
    } else {
      if (this.email) {
        processedData.email = this.checkValidEmail();
      } else {
        processedData.handle = this.checkValidHandle();
      }
    }

    const error = [];
    for (let [key, value] of Object.entries(processedData)) {
      !value ? error.push(key) : null;
    }
    return error.length ? { error: error } : processedData;
  }
}

module.exports = FormChecker;
