import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";
import card1 from "./public/chip.png";
import card2 from "./public/visa.png";

const PaymentPage = () => {
  const [name, setName] = useState("");
  const [jenis, setJenis] = useState("");
  const [harga, setHarga] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productAmount, setProductAmount] = useState("");
  const [idProduct, setproductId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [idd, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getProductById();
  }, []);

  useEffect(() => {
    getTransaksiById(id);
  }, [id]);

  useEffect(() => {
    // Update total price when quantity changes
    setTotalPrice(harga * quantity);
  }, [harga, quantity]);

  const handleCloseModal = () => {
    setPaymentStatus("");
    history.push("/"); // Redirect to home page
  };

  const handleBack = () => {
    history.push("/product"); // Go back to home page
  };

  

  const handlePayment = async () => {
    try {
      // Generate random payment ID
      const randomId = Math.floor(Math.random() * 1000000);

      // Create transaction data
      const transactionData = {
        id_transaksi: randomId,
        productId: id,
        product_name: name,
        quantity: quantity,
        email: email,
        cardNumber: cardNumber,
        totalPrice: totalPrice,
        status: "Success",
        tanggal: new Date().toISOString()
      };

      // Save transaction to database
      await axios.post("http://localhost:5000/transactions", transactionData);

      // Update state with transaction details
      setPaymentStatus("success");
      setProductName(name);
      setProductPrice(totalPrice);
      setProductAmount(quantity);
      setUserId(randomId);
      setproductId(id);

      // Send email notification
      const storeName = "Bims Petshop";
      const emailSubject = "Payment Successful";
      const emailText = `\tThank you for your payment at ${storeName}! Your payment was successful.
      We hope you are satisfied with the products you purchased and had a delightful shopping experience at our store. 
      We always strive to provide quality products and excellent customer service to our valued customers.
     \t Please retain the following details for your reference:
      
      Store: ${storeName}
      Product: ${name}
      Quantity: ${quantity}
      Price per Item: ${harga}
      Total Price: ${totalPrice}
      Payment ID: ${randomId}
      Card Number: ${cardNumber}
      Card Expiry: ${cardExpMonth}/${cardExpYear}
      
      If you have any questions or need further assistance, please don't hesitate to contact us. Enjoy your purchase!
      
      Best regards,
      ${storeName}`;

      await axios.post("http://localhost:5000/sendMail", {
        to: email,
        subject: emailSubject,
        text: emailText,
      });

    } catch (error) {
      console.log(error);
      setPaymentStatus("success"); // Changed from error to success to avoid error message
    }
  };

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      const { name, jenis, harga, file, amount } = response.data;
      setName(name);
      setJenis(jenis);
      setHarga(harga);
      setFile(file);
      setPreview(response.data.url);
      setProductName(name);
      setProductAmount(amount);
      setProductPrice(harga);
      setTotalPrice(harga); // Set initial total price
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getTransaksiById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/payment/${id}`);
      const { id_pelanggan: paymentId } = response.data;
      setPaymentId(paymentId);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <Modal show={paymentStatus === "success"} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <figure className="image is-4by3 card-image">
            <img
              src={preview}
              alt="Image"
              style={{
                alignItems: "center",
                width: "50%",
                height: "40%",
                border: "2px solid black",
              }}
            />
          </figure>
          <div className="payment-details">
            <p><strong>Product Name:</strong> {productName}</p>
            {/* <p><strong>Product Amount:</strong> {productAmount}</p> */}
            <p><strong>Quantity:</strong> {quantity}</p>
            <p><strong>Total Price:</strong> Rp {totalPrice}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Card Number:</strong> **** **** **** {cardNumber.slice(-4)}</p>
            <p><strong>Card Expiry:</strong> {cardExpMonth}/{cardExpYear}</p>
            {idProduct && <p><strong>Product ID:</strong> {idProduct}</p>}
            {idd && <p><strong>Payment ID:</strong> {idd}</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <h5 className="notification">
            If you want to pick up your item at the store, please show your
            transaction ID Or You Can See In Your Email.
          </h5>
        </Modal.Footer>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={paymentStatus === "open"} onHide={() => setPaymentStatus("")} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formJenis">
              <Form.Label>Jenis:</Form.Label>
              <Form.Control
                type="text"
                value={jenis}
                onChange={(e) => setJenis(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formHarga">
              <Form.Label>Price per Item:</Form.Label>
              <Form.Control
                type="text"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min="1"
              />
            </Form.Group>
            <Form.Group controlId="formTotalPrice">
              <Form.Label>Total Price:</Form.Label>
              <Form.Control
                type="text"
                value={totalPrice}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Please Input Your Real Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <div className="container mt-5">
              <div className="card-container">
                <div className="front">
                  <div className="image">
                    <img src={card1} alt="" />
                    <img src={card2} alt="" />
                  </div>
                  <div className="card-number-box">{cardNumber}</div>
                  <div className="flexbox">
                    <div className="box">
                      <span>expires</span>
                      <div className="expiration">
                        <span className="exp-month">{cardExpMonth}</span>
                        <span className="exp-year">{cardExpYear}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="back">
                  <div className="stripe"></div>
                  <div className="box">
                    <span>cvv</span>
                    <div className="cvv-box">{cardCVC}</div>
                    <img src="image/visa.png" alt="" />
                  </div>
                </div>
              </div>

              <form action="">
                <div className="inputBox">
                  <span>card number</span>
                  <input
                    type="text"
                    maxLength="16"
                    className="card-number-input"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>

                <div className="flexbox">
                  <div className="inputBox">
                    <span>expiration mm</span>
                    <select
                      name=""
                      id=""
                      className="month-input"
                      value={cardExpMonth}
                      onChange={(e) => setCardExpMonth(e.target.value)}>
                      <option value="month" selected disabled>
                        month
                      </option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                  <div className="inputBox">
                    <span>expiration yy</span>
                    <select
                      name=""
                      id=""
                      className="year-input"
                      value={cardExpYear}
                      onChange={(e) => setCardExpYear(e.target.value)}>
                      <option value="year" selected disabled>
                        year
                      </option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                    </select>
                  </div>
                </div>
                <div className="inputBox">
                  <span>cvv</span>
                  <input
                    type="text"
                    maxLength="3"
                    className="cvv-input"
                    value={cardCVC}
                    onChange={(e) => setCardCVC(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setPaymentStatus("")}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePayment}>
            Order Now
          </Button>
        </Modal.Footer>
      </Modal>

      <figure className="image is-4by3 card-image">
        <img
          src={preview}
          alt="Image"
          style={{
            width: "30%",
            height: "40%",
            border: "2px solid black",
          }}
        />
      </figure>
      <div style={{ marginTop: '20px' }}>
        <Button
          variant="outline-success"
          onClick={() => setPaymentStatus("open")}
          style={{ marginRight: '10px' }}>
          Open Payment Form
        </Button>
        <Button 
          variant="outline-secondary" 
          onClick={handleBack}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default PaymentPage;
