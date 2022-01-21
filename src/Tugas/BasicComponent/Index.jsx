import React, { Component } from "react";
import KelasKomponen from "./Pembahasan/KelasKomponen";
import FungsiKomponen from "./Pembahasan/FungsiKomponen";

class Komponen extends Component {
  render() {
    return (
      <div>
        <KelasKomponen judul="Halaman Nasi Padang & Soto " link="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" nama="Nasi Padang" />
        <br />
        <FungsiKomponen />
      </div>
    );
  }
}

export default Komponen;
