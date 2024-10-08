import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Clipboard from 'clipboard';
import './Signature.css';
import logo from '../../assets/logo.png';
import footer from '../../assets/footer.png';

// Social Media Logos
import instagramLogo from '../../assets/instagram.webp';
import facebookLogo from '../../assets/facebook.png';
import linkedinLogo from '../../assets/linkedin.png';

// Add your newly imported icons
import emailIcon from '../../assets/emailIcon.png'; // email icon
import phoneIcon from '../../assets/phoneIcon.png'; // phone icon
import addressIcon from '../../assets/addressIcon.png'; // address icon

const Signature = () => {
  const location = useLocation();
  const officeNr = '+31187745111';
  const { email, position, name } = location.state || {};
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    const clipboard = new Clipboard('.copy-button', {
      target: () => document.querySelector('.signature-content'),
    });

    clipboard.on('success', () => {
      setCopySuccess('Signature copied to clipboard!');
    });

    clipboard.on('error', () => {
      setCopySuccess('Failed to copy.');
    });

    return () => {
      clipboard.destroy(); // Cleanup clipboard instance on component unmount
    };
  }, []);

  return (
    <div className="details-container">
      <div className="signature-container">
        <p>
          <strong>Copy Your Signature</strong>
        </p>

        {/* Signature HTML to be copied */}
        <div className="signature-content">
          <table border="0" cellPadding="0" cellSpacing="0" style={{ fontFamily: 'Arial, sans-serif', width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ paddingRight: '15px', verticalAlign: 'top' }}>
                  <img src={logo} alt="DS People" style={{ width: '130px' }} />
                </td>
                <td style={{ width: '1.5px', backgroundColor: '#007bff' }}></td>
                <td style={{ paddingLeft: '15px', verticalAlign: 'top' }}>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'black' }}>{name}</p>
                  <p style={{ margin: '5px 0' }}>{position}</p>
                  <p style={{ margin: '5px 0' }}>
                    <img
                      src={emailIcon}
                      alt="Email Icon"
                      style={{ width: '15px', marginRight: '5px', verticalAlign: 'middle' }}
                    />
                    <a href={`mailto:${email}`} style={{ color: '#0073e6', textDecoration: 'none' }}>
                      {email}
                    </a>
                  </p>
                  <p style={{ margin: '5px 0' }}>
                    <img
                      src={phoneIcon}
                      alt="Phone Icon"
                      style={{ width: '15px', marginRight: '5px', verticalAlign: 'middle' }}
                    />
                    <a href={`tel:${officeNr}`} style={{ color: '#0073e6', textDecoration: 'none' }}>
                      {officeNr}
                    </a>
                  </p>
                  <p style={{ margin: '5px 0' }}>
                    <img
                      src={addressIcon}
                      alt="Address Icon"
                      style={{ width: '15px', marginRight: '5px', verticalAlign: 'middle' }}
                    />
                    Deltageul 13, 3251NG Stellendam
                  </p>
                </td>
                <td style={{ paddingLeft: '15px', verticalAlign: 'top' }}>
                  <table border="0" cellPadding="0" cellSpacing="0" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <tbody>
                      <tr>
                        <td>
                          <a href="https://www.instagram.com/d.s.people/" target="_blank" rel="noreferrer">
                            <img src={instagramLogo} alt="Instagram" className="social-icon" style={{ width: '30px' }} />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingTop: '10px' }}>
                          <a href="https://www.facebook.com/d.s.people/" target="_blank" rel="noreferrer">
                            <img src={facebookLogo} alt="Facebook" className="social-icon" style={{ width: '30px' }} />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingTop: '10px' }}>
                          <a href="https://www.linkedin.com/company/ds-people-bv/posts/?feedView=all" target="_blank" rel="noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" style={{ width: '30px' }} />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td colSpan="6" style={{ paddingTop: '10px' }}>
                  <a href="https://dspeople.nl/" target="_blank" rel="noreferrer">
                    <img src={footer} alt="DS People Footer" width={550} style={{ marginTop: '10px' }} />
                  </a>
                </td>
              </tr>
              <tr>
              <td colSpan={6} style={{ paddingTop: '10px', fontSize: '7.5px'}}>

              The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.

      </td>
              </tr>
            </tbody>
          </table>
        </div>

       
      </div>
       {/* Copy Button */}
       <button className="copy-button">Copy Signature</button>
        {copySuccess && <p className="copy-success">{copySuccess}</p>}
    </div>
  );
};

export default Signature;
