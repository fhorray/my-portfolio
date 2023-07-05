import React from "react";

const CertificatesModal = () => {
  return (
    <div className="modal-overlay modal-hidden">
      <div className="modal-certificate origamid item-modal-hidden">
        <div className="item origamid">
          <div className="close-modal">
            <button>
              <img src="./img/close-i.svg" alt="Close icon" />
            </button>
          </div>

          <div className="certificate-img">
            <a href="#">
              <img src="./img/certificate-one.png" alt="Certificado Udemy" />
            </a>
          </div>

          <a className="view-pdf-btn" href="#">
            VER PDF
          </a>
        </div>
      </div>

      <div className="modal-certificate ebac item-modal-hidden">
        <div className="item ebac">
          <div className="close-modal">
            <button>
              <img src="./img/close-i.svg" alt="Close icon" />
            </button>
          </div>

          <div className="certificate-img">
            <a href="#">
              <img src="./img/certificado ebac.svg" alt="Certificado Ebac" />
            </a>
          </div>

          <a className="view-pdf-btn" href="#">
            VER PDF
          </a>
        </div>
      </div>

      <div className="modal-certificate udemy item-modal-hidden">
        <div className="item udemy" />
        <div className="close-modal">
          <button>
            <img src="./img/close-i.svg" alt="Close icon" />
          </button>
        </div>

        <div className="certificate-img">
          <a href="#">
            <img src="./img/udemy-certificate.png" alt="Certificado Udemy" />
          </a>
        </div>
        {/* <div className="view-pdf-btn"> -->
            <a className="view-pdf-btn" href="#">VER PDF</a>
          </div>  */}
      </div>
    </div>
  );
};

export default CertificatesModal;
