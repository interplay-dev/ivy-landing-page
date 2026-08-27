import Leaf from "./leaf";

// The Slack-on-phone product mockup from the hero, reusable (hero + demo modal).
export default function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone__screen">
        <div className="scale scale--phone">
          <div className="slack">
            <div className="slack__status">
              <b>9:41</b>
              <span className="slack__island" />
              <span className="slack__battery"><i /></span>
            </div>
            <div className="slack__header">
              <span className="slack__avatar slack__avatar--ivy"><Leaf size={17} /></span>
              <b>Ivy</b><i className="presence" /><span className="app-badge">APP</span>
            </div>
            <div className="slack__feed">
              <div className="msg">
                <span className="slack__avatar slack__avatar--c">C</span>
                <div className="msg__body">
                  <p className="msg__meta"><b>Christian</b><time>9:12</time></p>
                  <p>Ivy — can you prep the Q3 distribution memo before Thursday’s call?</p>
                </div>
              </div>
              <div className="msg">
                <span className="slack__avatar slack__avatar--ivy"><Leaf size={18} /></span>
                <div className="msg__body">
                  <p className="msg__meta"><b>Ivy</b><span className="app-badge">APP</span><time>9:14</time></p>
                  <p>Done. The draft memo and schedule are in the vault:</p>
                  <div className="file-card">
                    <span className="file-card__icon">X</span>
                    <span className="file-card__meta">
                      <b>Q3_Distributions.xlsx</b>
                      <i>42 KB · Spreadsheet</i>
                    </span>
                  </div>
                  <p>Three line items are flagged for review. Approve and I’ll circulate it to the family.</p>
                  <span className="reaction">✓ 2</span>
                </div>
              </div>
              <div className="msg">
                <span className="slack__avatar slack__avatar--c">C</span>
                <div className="msg__body">
                  <p className="msg__meta"><b>Christian</b><time>9:15</time></p>
                  <p>Perfect — approving now.</p>
                </div>
              </div>
            </div>
            <div className="slack__input">Message Ivy<span className="slack__send">↑</span></div>
            <span className="slack__home" />
          </div>
        </div>
      </div>
    </div>
  );
}
