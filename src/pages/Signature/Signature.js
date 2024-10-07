import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Clipboard from 'clipboard';
import './Signature.css';
import logo from '../../assets/logo.png';
import footer from '../../assets/footer.png'

// Social Media Logos
import instagramLogo from '../../assets/instagram.webp';
import facebookLogo from '../../assets/facebook.png';
import linkedinLogo from '../../assets/linkedin.png';

// Add your newly imported icons
import emailIcon from '../../assets/emailIcon.png';   // email icon
import phoneIcon from '../../assets/phoneIcon.png';   // phone icon
import addressIcon from '../../assets/addressIcon.png'; // address icon

const Signature = () => {
  const location = useLocation();
  const { email, position, name, officeNr, platforms, socialLinks } =
    location.state || {};
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
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              <tr>
                <td style={{ paddingRight: '10px' }}>
                  <img src={logo} alt="DS People" style={{ width: '130px' }} />
                </td>
                <td
                  style={{ borderLeft: '2px solid #ddd', paddingLeft: '10px' , width:100}}
                >
                  <strong style={{color:'black'}}>{name}</strong>
                  <br />
                  {position}
                  <br />
                  {/* Email with icon */}
                  <img
                    src={emailIcon}
                    alt="Email Icon"
                    style={{ width: '15px', marginRight: '5px' }}
                  />
                  <a href={`mailto:${email}`} style={{ color: '#0073e6' }}>
                    {email}
                  </a>
                  <br />
                  {/* Phone number with icon */}
                  <img
                    src={phoneIcon}
                    alt="Phone Icon"
                    style={{ width: '15px', marginRight: '5px' }}
                  />
                  <a href={`tel:${officeNr}`} style={{ color: '#0073e6' }}>
                  {officeNr}
                  </a>
                  <br />
                  {/* Address with icon */}
                  <img
                    src={addressIcon}
                    alt="Address Icon"
                    style={{ width: '15px', marginRight: '5px' }}
                  />
                  Deltageul 13, 3251NG Stellendam
                  <br />
                </td>
                <td className="social-links">
                  {platforms.instagram && socialLinks.instagram && (
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={instagramLogo} alt="Instagram" />
                    </a>
                  )}

                  {platforms.facebook && socialLinks.facebook && (
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={facebookLogo} alt="Facebook" />
                    </a>
                  )}

                  {platforms.linkedin && socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedinLogo} alt="LinkedIn" />
                    </a>
                  )}
                </td>
                              
              </tr>
            </tbody>

          </table>
          <a href="https://dspeople.nl/" target='_blank' sTyle={{ color: '#0073e6' }} rel="noreferrer">
          <img src={footer} height={100} style={{marginTop:10}}/>
          </a>
        </div>

        {/* Copy Button */}
        <button className="copy-button">Copy Signature</button>
        {copySuccess && <p className="copy-success">{copySuccess}</p>}
      </div>
    </div>
  );
};

export default Signature;
