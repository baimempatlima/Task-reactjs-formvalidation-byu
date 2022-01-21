import React from "react";

class KelasKomponen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datagambar: this.props.link,
      datanama: this.props.nama,
    };
    this.ubahData = this.ubahData.bind(this);
    this.ubahData2 = this.ubahData2.bind(this);
  }

  ubahData() {
    this.setState(() => {
      return {
        datagambar: "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png",
        datanama: "Soto",
      };
    });
  }

  ubahData2() {
    this.setState((state, props) => {
      return {
        datagambar: this.props.link,
        datanama: this.props.nama,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.props.judul}</h1>
        <h3>{this.state.datanama}</h3>
        <img src={this.state.datagambar} alt="gambar-makanan" width="400px" />
        <br />
        <br />
        <button onClick={this.ubahData2}>Sebelumnya</button>
        <span> </span>
        <button onClick={this.ubahData}>Selanjutnya</button>
      </div>
    );
  }
}

export default KelasKomponen;
