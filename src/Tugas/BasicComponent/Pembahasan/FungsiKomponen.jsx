import React from "react";

const FungsiKomponen = () => {
  const handlePesan = (value, e) => {
    e.preventDefault();
    alert("Halaman Footer");
    alert(value);
  };

  return (
    <a href="/" onClick={(e) => handlePesan("Pesan ini dari footer", e)}>
      Halaman Footer
    </a>
  );
};

export default FungsiKomponen;
