import React from "react";
import Content4 from "./Content4";

export default function Content() {
  return (
    <main>
      <div>
        <h2>Punya Bisnis/Usaha?</h2>
        <h3>Harus Punya Website nya dong!</h3>
        <Content4 />
        <div className="judul">
          <h3>Kenapa harus punya Website?</h3>
        </div>
        <div className="isi" style={{ textAlign: "center" }}>
          Dengan membangun sebuah website berarti Anda memberi kesempatan pada
          bisnis Anda untuk memberi tahu konsumen mengapa mereka harus
          mempercayai Anda.{" "}
          <p>
            Selain itu, Website dapat memudahkan konsumen untuk mencari{" "}
            <a>Informasi penting</a>.
          </p>
          <p>
            seperti, Info kontak Whatsapp, Alamat Kantor, Social Media dan Lain
            sebagainya untuk kepentingan Bisnis anda.
          </p>
        </div>
        <div className="judul">
          <h3>Anda akan mendapatkan</h3>
        </div>
        <div className="isi" style={{ textAlign: "center" }}>
          <p>
            Hosting FREE FOREVER &#10004; <br />
           Domain Netlify FREE FOREVER &#10004; <br />
          </p>
          <p>Kami hanya melayani pembuatan Website yang kontennya bersifat statis (tidak berubah-ubah) seperti website <a href="https://pn-painan.netlify.com">ini</a>, <a href="https://zasieramukena.online">ini</a> dan <a href="https://agungjayakreasi.online">ini</a></p>
          
        </div>
      </div>
    </main>
  );
}
