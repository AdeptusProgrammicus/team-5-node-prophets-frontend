import React from "react";
import Accordion from "react-bootstrap/Accordion";
import QakContext from "../contexts/QakContext";
import { Link } from "react-router-dom";

const Qak = () => {
  return (
    <QakContext.Consumer>
      {({ qak }) => {
        return (
          <div>
            <h1>QAK</h1>
            <h2>Questions Answers Knowledge</h2>
            <Link to="/qaks/new">Create A Question or Share Knowledge</Link>
            {console.log(qak)}
            <div>
              {qak.map((q) => {
                return (
                  <div key={q.qak_id}>
                    <Accordion>
                      <Accordion.Item>
                        <Accordion.Header>
                          <div>
                            <h4>{q.user_id}</h4>
                            <p>{q.qak}</p>
                            <p>
                              {q.createdAt} | {q.updatedAt}
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </QakContext.Consumer>
  );
};

export default Qak;
