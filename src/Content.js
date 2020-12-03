import React from "react";
import Content4 from "./Content4";

export default function Content() {
  return (
    <main>
      <div>
        <h2>Punya Bisnis/Usaha?</h2>
        <h3>Harus Punya Website nya dong!</h3>
        <Content4 />
        
        <div className="isi" style={{ textAlign: "justify" }}>
          Dengan membangun sebuah website berarti Anda memberi kesempatan pada
          bisnis Anda untuk memberi tahu konsumen mengapa mereka harus
          mempercayai Anda.{" "}
          <p>
            Selain itu, Website dapat memudahkan konsumen untuk mencari{" "}
  Informasi penting.
          </p>
          <p>
            Misalnya, Info kontak Whatsapp, Alamat Kantor, Social Media dan Lain
            sebagainya untuk kepentingan Bisnis anda.
          </p>
        </div>
        <div className="judul">
          <h3>Layanan</h3>
        </div>
        <div className="isi" style={{ textAlign: "center" }}>
          <p>
            Hosting FREE FOREVER &#10004; <br />
           Domain Netlify FREE FOREVER &#10004; <br />
          </p>
          <p>Hanya menerima pembuatan Website yang kontennya bersifat statis (tidak berubah-ubah)</p>
          
        </div>
      </div>
    </main>
  );
}
