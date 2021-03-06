import React from "react";
import Content4 from "./Content4";

export default function Content() {
  return (
    <main>
      <div>
        <div class="youtube-responsive-container">
          <iframe
            width="540"
            height="295"
            src="https://www.youtube.com/embed/JSRP9HRqnrw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>Landingpage Specialist</p>
        <h2>Punya Bisnis/Usaha?</h2>
        <h3>Harus Punya Website nya dong!</h3>
        <Content4 />

        <div
          className="isi esc"
          style={{ textAlign: "justify", width: "285px" }}
        >
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
          <h3>Sudah termasuk : </h3>
        </div>
        <div className="isi" style={{ textAlign: "center" }}>
          <p>
            SSL &#10004; <br />
            Hosting &#10004; <br />
            ReactJS &#10004; <br />
            Responsive &#10004; <br />
            Copywriting &#10004; <br />
            Custom desain &#10004; <br />
            HTML Source code &#10004; <br />
          </p>
        </div>
      </div>
    </main>
  );
}
