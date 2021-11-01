const Login = {
  elements: {
    main: document.getElementById('login-form-wrapper'),
    form: document.getElementById('login-form'),
    actionBtn: document.getElementById('login-action-btn'),
    usernameInput: document.getElementById('login-username-input'),
    passwordInput: document.getElementById('login-password-input'),
    signupBtn: document.getElementById('login-signup'),
  },
  addEventListeners: () => {
    if (Login.elements.form) Login.elements.form.addEventListener('submit', (e) => Login.submit(e));
    if (Login.elements.actionBtn) Login.elements.actionBtn.addEventListener('click', () => Login.showForm());
    if (Login.elements.main) {
      Login.elements.main.addEventListener('click', (e) => {
        if (e.target !== Login.elements.main) return;
        Login.hideForm();
      });
    }
    if (Login.elements.signupBtn) {
      Login.elements.signupBtn.addEventListener('click', (e) => {
        Login.hideForm();
        Signup.showForm();
      });
    }
  },
  showForm: () => {
    Login.elements.main.classList.remove('hidden');
  },
  hideForm: () => {
    Login.elements.main.classList.add('hidden');
  },
  submit: async (e) => {
    e.preventDefault();
    const res = await Login.request();
    // TODO: more elegant solution should be possible...
    if (res.status !== 200) return alert('Incorrect username or password!');
    window.location.href = '/';
    return e;
  },
  request: () => {
    const url = ('/api/auth');
    return fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        username: Login.elements.usernameInput.value,
        password: Login.elements.passwordInput.value,
      }),
    });
  },
};

const Signup = {
  elements: {
    main: document.getElementById('signup-form-wrapper'),
    form: document.getElementById('signup-form'),
    actionBtn: document.getElementById('signup-action-btn'),
    usernameInput: document.getElementById('signup-username-input'),
    passwordInput: document.getElementById('signup-password-input'),
  },
  addEventListeners: () => {
    if (Signup.elements.form) Signup.elements.form.addEventListener('submit', (e) => Signup.submit(e));
    if (Signup.elements.actionBtn) Signup.elements.actionBtn.addEventListener('click', () => Signup.showForm());
    if (Signup.elements.main) {
      Signup.elements.main.addEventListener('click', (e) => {
        if (e.target !== Signup.elements.main) return;
        Signup.hideForm();
      });
    }
  },
  showForm: () => {
    Signup.elements.main.classList.remove('hidden');
  },
  hideForm: () => {
    Signup.elements.main.classList.add('hidden');
  },
  submit: async (e) => {
    e.preventDefault();
    const res = await Signup.request();
    // TODO: more elegant solution should be possible...
    if (res.status !== 200) return alert('Something went wrong!');
    window.location.href = '/';
    return e;
  },
  request: () => {
    const url = ('/api/user');
    return fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        username: Signup.elements.usernameInput.value,
        password: Signup.elements.passwordInput.value,
      }),
    });
  },
};

const Logout = {
  elements: {
    actionBtn: document.getElementById('logout-action-btn'),
  },
  addEventListeners: () => {
    if (Logout.elements.actionBtn) Logout.elements.actionBtn.addEventListener('click', () => Logout.handle());
  },
  handle: async (e) => {
    const res = await Logout.request();
    // TODO: more elegant solution should be possible...
    if (res.status !== 200) return alert('Something went wrong!');
    window.location.href = '/';
    return e;
  },
  request: () => {
    const url = ('/api/auth');

    return fetch(url, {
      method: 'delete',
    });
  },
};

const main = () => {
  Login.addEventListeners();
  Signup.addEventListeners();
  Logout.addEventListeners();
};

main();
