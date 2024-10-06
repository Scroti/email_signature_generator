import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Clipboard from 'clipboard';
import './Signature.css';

const Signature = () => {
  const location = useLocation();
  const { email } = location.state || {};
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    // Initialize Clipboard.js on the Copy button
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
        <p><strong>Copy Your Signature</strong></p>

        {/* Signature HTML to be copied */}
        <div className="signature-content">
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              <tr>
                <td style={{ paddingRight: '10px' }}>
                  <img 
                    src="https://path-to-your-logo/logo.png" 
                    alt="DS People" 
                    style={{ width: '100px' }} 
                  />
                </td>
                <td style={{ borderLeft: '1px solid #ddd', paddingLeft: '10px' }}>
                  <strong>Corina Paraschiv</strong><br />
                  DS People B.V.<br />
                  <a href={`mailto:${email}`} style={{ color: '#0073e6' }}>{email}</a><br />
                  +31187-745111<br />
                  Deltageul 13, 3251NG Stellendam<br />
                  <a href="https://dspeople.nl" style={{ color: '#0073e6' }}>dspeople.nl</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Copy Button */}
        <button className="copy-button">Copy Signature</button>
        {copySuccess && <p className="copy-success">{copySuccess}</p>}
      </div>
    </div>
  );
};

export default Signature;
