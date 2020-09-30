import React from "react";

export default function Content2() {
  return (
    <main>
      <div>
        <div className="judul">
          <h3>Karya Codelifings</h3>
        </div>
        <div className="isi" style={{ textAlign: "center", color: "pink" }}>
          <img
            style={{ borderRadius: "50%", width: "100px" }}
            src="https://res.cloudinary.com/codelifings/image/upload/v1584323346/images_qpkdkz.jpg"
          />
          <br />
          <br />

          <img src="https://res.cloudinary.com/codelifings/image/upload/v1598089193/Screenshot_59_kvqzzm.png" />
          <img src="https://res.cloudinary.com/codelifings/image/upload/v1595574549/screenshot_-2020-04-02-simpleazy-1_2_herfoy.png" />
          <img src="https://res.cloudinary.com/codelifings/image/upload/v1585726690/a_zftq8g.png" />
          <p>
            Salah satu Client yg menggunakan domain sendiri (.online){" "}
            <a href="https://agungjayakreasi.online">Ajkprinting</a>. dan masih
            banyak lagi anda bisa cek{" "}
            <a href="https://nisacodelifings.netlify.com/codelifings.html">
              disini
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
