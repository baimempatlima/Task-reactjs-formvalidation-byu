import React from "react";

const emailValidator = /^(([^<>()\][\]\\.,;:\s@"]+(\.[^<>()\][\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      namaDepan: "",
      namaBelakang: "",
      alamatEmail: "",
      password: "",
      konfirmasiPassword: "",
      namaDepanError: "",
      namaBelakangError: "",
      alamatEmailError: "",
      passwordError: "",
      konfirmasiPasswordError: "",
      isFormSubmitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validasiData = this.validasiData.bind(this);
    this.validasiNamaDepan = this.validasiNamaDepan.bind(this);
    this.validasiNamaBelakang = this.validasiNamaBelakang.bind(this);
    this.validasiAlamatEmail = this.validasiAlamatEmail.bind(this);
    this.validasiPassword = this.validasiPassword.bind(this);
    this.validasiKonfirmasiPassword = this.validasiKonfirmasiPassword.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
    return;
  }
  handleBlur(event) {
    const { name } = event.target;

    this.validasiData(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = ["namaDepan", "namaBelakang", "alamatEmail", "password", "konfirmasiPassword"];
    let isValid = true;
    formData.forEach((field) => {
      isValid = this.validasiData(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validasiData(name) {
    let isValid = false;

    if (name === "namaDepan") isValid = this.validasiNamaDepan();
    else if (name === "namaBelakang") isValid = this.validasiNamaBelakang();
    else if (name === "alamatEmail") isValid = this.validasiAlamatEmail();
    else if (name === "password") isValid = this.validasiPassword();
    else if (name === "konfirmasiPassword") isValid = this.validasiKonfirmasiPassword();
    return isValid;
  }
  validasiNamaDepan() {
    let namaDepanError = "";
    const value = this.state.namaDepan;
    if (value.trim() === "") namaDepanError = "Nama Depan Kosong";
    this.setState({
      namaDepanError,
    });
    return namaDepanError === "";
  }

  validasiNamaBelakang() {
    let namaBelakangError = "";
    const value = this.state.namaBelakang;
    if (value.trim() === "") namaBelakangError = "Nama Belakang Kosong";
    this.setState({
      namaBelakangError,
    });
    return namaBelakangError === "";
  }
  validasiAlamatEmail() {
    let alamatEmailError = "";
    const value = this.state.alamatEmail;
    if (value.trim === "") alamatEmailError = "Nama Belakang Kosong";
    else if (!emailValidator.test(value)) alamatEmailError = "Email yang anda masukkan tidak valid";
    this.setState({
      alamatEmailError,
    });
    return alamatEmailError === "";
  }

  validasiPassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password Kosong";
    else if (!passwordValidator.test(value)) passwordError = "Kata sandi harus mengandung setidaknya 8 karakter, 1 angka, 1 huruf besar dan 1 huruf kecil! ";

    this.setState({
      passwordError,
    });
    return passwordError === "";
  }

  validasiKonfirmasiPassword() {
    let konfirmasiPasswordError = "";
    if (this.state.password !== this.state.konfirmasiPassword) konfirmasiPasswordError = " Konfirmasi Kata Sandi yang dimasukkan tidak cocok !";

    this.setState({
      konfirmasiPasswordError,
    });
    return konfirmasiPasswordError === "";
  }
  render() {
    return (
      <div className="container">
        {this.state.isFormSubmitted ? (
          <div className="alert alert-success text-center" role="alert" style={{ margin: "20px", padding: "20px auto" }}>
            <h4 className="alert-heading">
              Terima kasih telah melakukan <strong>Registrasi</strong>,berikut ini detail data Anda:
            </h4>
            <p>Nama Depan: {this.state.namaDepan}</p>
            <p>Nama Belakang: {this.state.namaBelakang}</p>
            <p>Nama Belakang: {this.state.alamatEmail}</p>
          </div>
        ) : (
          <div className="container" style={{ background: "#99FFFF", width: "700px", border: "1px solid #3399FF", margin: "30px auto", borderRadius: "5px" }}>
            <h1 className="text-center">Form Registrasi</h1>
            <hr />
            <form onSubmit={this.handleSubmit} style={{ margin: "20px auto", padding: "20px", width: "500px" }}>
              <div className="row mb-3">
                <label htmlFor="inputText" className="col-sm-4 col-form-label">
                  Nama Depan
                </label>
                <div className="col-sm-8">
                  <input type="text" name="namaDepan" className="form-control" id="inputText" value={this.state.namaDepan} onChange={this.handleChange} onBlur={this.handleBlur} autoComplete="off" />
                  {this.state.namaDepanError && (
                    <div className="alert alert-primary d-flex align-items-center" role="alert">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <div className="errorMsg">{this.state.namaDepanError}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputText1" className="col-sm-4 col-form-label">
                  Nama Belakang
                </label>
                <div className="col-sm-8">
                  <input type="text" name="namaBelakang" className="form-control" id="inputText1" value={this.state.namaBelakang} onChange={this.handleChange} onBlur={this.handleBlur} autoComplete="off" />
                  {this.state.namaBelakangError && (
                    <div className="alert alert-primary d-flex align-items-center" role="alert">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <div className="errorMsg">{this.state.namaBelakangError}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
                  Email
                </label>
                <div className="col-sm-8">
                  <input type="email" name="alamatEmail" className="form-control" id="inputEmail3" value={this.state.alamatEmail} onChange={this.handleChange} onBlur={this.handleBlur} autoComplete="off" />
                  {this.state.alamatEmailError && (
                    <div className="alert alert-primary d-flex align-items-center" role="alert">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <div className="errorMsg">{this.state.alamatEmailError}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">
                  Password
                </label>
                <div className="col-sm-8">
                  <input type="password" name="password" className="form-control" id="inputPassword3" value={this.state.password} onChange={this.handleChange} onBlur={this.handleBlur} autoComplete="off" />
                  {this.state.passwordError && (
                    <div className="alert alert-primary d-flex align-items-center" role="alert">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <div className="errorMsg">{this.state.passwordError}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword4" className="col-sm-4 col-form-label">
                  Ulangi Password
                </label>
                <div className="col-sm-8">
                  <input type="password" name="konfirmasiPassword" className="form-control" id="inputPassword4" value={this.state.konfirmasiPassword} onChange={this.handleChange} onBlur={this.handleBlur} autoComplete="off" />
                  {this.state.konfirmasiPasswordError && (
                    <div className="alert alert-primary d-flex align-items-center" role="alert">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <div className="errorMsg">{this.state.konfirmasiPasswordError}</div>
                    </div>
                  )}
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Registrasi
              </button>
            </form>
          </div>
        )}
        ;
      </div>
    );
  }
}
