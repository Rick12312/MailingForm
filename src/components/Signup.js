import React, { useState } from "react";
import { CSVLink } from "react-csv";

const headers = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Telephone", key: "telephone" },
  { label: "MailingList", key: "mailingList" },
];

const Signup = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mailingList, setMailingList] = useState("Yes");
  const [success, setSuccess] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    data.push({
      name: name,
      email: email,
      telephone: telephone,
      mailingList: mailingList,
    });

    setData(data);
    setSuccess(true);

    setName("");
    setEmail("");
    setTelephone("");
    setMailingList("Yes");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className="form-inner">
          <h2>Signup</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Telephone:</label>
            <input
              type="number"
              name="telephone"
              required
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
            />
          </div>
          <div className="form-group">
            <label>Opt-in to our mailing list</label>
            <select
              name="mailingList"
              onChange={(e) => {
                setMailingList(e.target.value);
              }}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button type="submit">Submit</button>
          <CSVLink
            className="form-csv-download"
            data={data}
            headers={headers}
            filename={"mailing-list"}
          >
            Download Mailing list (CSV)
          </CSVLink>

          {success && <label>Thank you for registering</label>}
        </div>
      </form>
    </div>
  );
};

export default Signup;
