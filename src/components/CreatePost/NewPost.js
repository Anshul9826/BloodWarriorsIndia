import { Avatar, Button, TextareaAutosize } from "@mui/material";
import React from "react";
import "./NewPost.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "black",
  borderRadius: 5,
  border: "2px solid #000",
  boxShadow: "5px 5px 5px 2px rgba(255, 0, 0, 0.5)",
  color:"white",
  p: 1,
};

function NewPost({ Icon, title }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="newPost">
      <div className="newPostBtn" onClick={handleOpen}>
        {Icon && <Icon />}
        <h5>{title}</h5>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="d-flex flex-column align-items-center">
           <h3 className="mb-3">New Post</h3>
          <div className="postMiddle d-flex">
            <Avatar className="m-auto me-2"/>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={2}
              placeholder="Wanna! Say Something 🙂"
              className="textArea"
            />
            <Button className="m-auto ms-2" >Post</Button>
          </div>
          <div className="postBottom d-flex align-items-center me-auto m-3 p-2">
            <AddAPhotoTwoToneIcon fontSize="large" style={{color:"red"}}/>
            <h5 className="m-auto ms-2">Upload a Photo/Video</h5>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default NewPost;
