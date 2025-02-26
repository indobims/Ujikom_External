import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "../style/about.css";

function AboutPage() {

  useEffect(() => {
    const aboutContainer = document.querySelector(".about-container");
    aboutContainer.classList.add("animate");
  }, []);

  return (

    <Container>
      <div className="about-container mt-5">
        
        <Row className="mt-4">
          <Col>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Perawatan Terbaik</Card.Title>
                <Card.Text>
                  Di Bims Petshop, kami mengabdikan diri untuk menyediakan perawatan terbaik bagi hewan peliharaan Anda. Dengan tim ahli yang penuh kasih sayang dan berpengalaman, kami memastikan bahwa setiap hewan yang masuk ke toko kami diberikan perhatian dan cinta yang pantas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Produk Berkualitas</Card.Title>
                <Card.Text>
                  Kami mengerti bahwa hewan peliharaan adalah bagian tak terpisahkan dari keluarga Anda. Oleh karena itu, kami menyediakan produk berkualitas tinggi, mulai dari makanan hingga perlengkapan, untuk memenuhi kebutuhan harian mereka. Apakah Anda membutuhkan makanan kucing yang lezat atau mainan anjing yang menghibur, Bims Petshop adalah tempatnya!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>Jasa Grooming Profesional</Card.Title>
                <Card.Text>
                  Selain itu, kami juga menawarkan jasa grooming profesional untuk membuat hewan peliharaan Anda terlihat dan merasa segar sepanjang waktu. Dengan memperhatikan detail terkecil, kami menciptakan pengalaman pemandian yang menyenangkan dan nyaman bagi hewan kesayangan Anda.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h2 className="text-center mt-4" style={{
          color: 'white',
          fontSize: '2.5em',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '2px'
        }}>✨ BimsPetShop Location ✨</h2>
        <div className="map-container mt-4">
          <iframe 
            width="100%" 
            height="400" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bumi%20Serpong%20Residence+(Bims%20PetShop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </div>
        <p>
          Di Bims Petshop, kami juga berkomitmen untuk mendukung adopsi hewan. Kami bekerja sama dengan organisasi penampungan hewan setempat untuk membantu hewan yang membutuhkan rumah baru. Jadi, jika Anda mencari teman sejati untuk menemani hari-hari Anda, jangan ragu untuk datang dan mengunjungi kami.
        </p>
        <p>
          Kami mengucapkan terima kasih atas kepercayaan Anda kepada Bims Petshop sebagai pilihan utama untuk semua kebutuhan hewan peliharaan Anda. Kami berjanji untuk terus memberikan pelayanan yang terbaik dan menciptakan pengalaman berbelanja yang tak terlupakan. Bersama-sama, kita bisa menciptakan dunia yang lebih baik bagi hewan peliharaan kita tercinta.
        </p>
        <h3>Bims Petshop - Tempat di mana kasih sayang dan kebahagiaan hewan peliharaan berada dalam genggaman tangan Anda.</h3>
        
    </Container>

  );
}

export default AboutPage;
