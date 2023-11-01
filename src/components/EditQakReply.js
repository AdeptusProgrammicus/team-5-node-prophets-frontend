import React, { useContext, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import QakReplyContext from "../contexts/QakReplyContext";

const EditQakReply = () => {
  let params = useParams();
  let navigate = useNavigate();

  let [qakReplyEdit, setQakReplyEdit] = useState({
    qakReply_id: params.qakReply_id,
    qakReply: "",
  });

  let { getOneQakReply, updateQakReply } = useContext(QakReplyContext);

  let { qakReply_id, qakReply } = qakReplyEdit;

  useEffect(() => {
    if (qakReply_id === undefined) return;

    async function fetch() {
      await getOneQakReply(qakReply_id).then((qakReply) =>
        setQakReplyEdit(qakReply)
      );
    }
    fetch();
  }, [{ getOneQakReply, qakReply_id }]);

  function handleChange(event) {
    const { name, value } = event.target;
    setQakReplyEdit((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function update() {
    return updateQakReply(qakReplyEdit);
  }

  function handleSubmit(event) {
    event.preventDefault();

    update(qakReplyEdit)
      .then(() => {
        if (!qakReplyEdit.ok) {
          alert("Your QAK Reply has been posted!");
        }
        navigate("/qaks");
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("Edit unsuccessful");
        navigate("/qaks");
      });
  }
  function handleCancel(event) {
    event.preventDefault();
    navigate("/qaks");
  }

  return (
    <div>
      <div className="form-wrap">
        <div className="edit-case">
          <div className="close-button"></div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center mx-3 mb-0">
              Edit QAK Answer or Knowledge
            </p>
          </div>

          <Form className="editForm" onSubmit={handleSubmit} key={qakReply_id}>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={6}
                cols={65}
                type="text"
                name="qakReply"
                value={qakReply}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              className="mb-3 w-100"
              variant="primary"
              size="sm"
              type="submit"
            >
              Finish Editing
            </Button>
            <Button
              onClick={handleCancel}
              className="edit-cancel"
              variant="secondary"
              size="sm"
            >
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditQakReply;
